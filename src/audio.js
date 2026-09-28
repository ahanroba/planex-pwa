// Web Audio API Synthesizer & Audio Engine for Focus Mode Ambient Sounds

class AudioSynthesizer {
  constructor() {
    this.ctx = null;
    this.activeSoundType = null;
    this.isLoadingSound = null;
    this.isMuted = false;
    this.volume = 0.5;
    this.proceduralNodes = null;
    this.currentBlobUrl = null;
    
    // HTML5 Audio Element for Background Sounds
    if (typeof Audio !== 'undefined') {
      this.audioElement = new Audio();
      this.audioElement.loop = true;
      this.audioElement.preload = "none";
      
      // Explicit error handling and logging with procedural fallback
      this.audioElement.onerror = (e) => {
        console.warn('Audio Playback CDN Warning for:', this.audioElement?.src, 'Falling back to Web Audio Synth...');
        this.isLoadingSound = null;
        if (this.activeSoundType) {
          this.startProceduralSynth(this.activeSoundType);
        }
        if (window.renderApp) window.renderApp();
      };
    } else {
      this.audioElement = null;
    }
  }

  initContext() {
    try {
      if (!this.ctx && typeof window !== 'undefined') {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
    } catch (e) {
      console.warn('AudioContext init error:', e);
    }
  }

  setVolume(vol) {
    this.volume = parseFloat(vol) || 0.5;
    if (this.audioElement) {
      this.audioElement.volume = this.volume;
    }
    if (this.proceduralNodes && this.proceduralNodes.masterGain) {
      try {
        this.proceduralNodes.masterGain.gain.setValueAtTime(this.volume * 0.4, this.ctx ? this.ctx.currentTime : 0);
      } catch (e) {}
    }
  }

  stopProceduralSynth() {
    if (this.proceduralNodes) {
      try {
        if (this.proceduralNodes.sources) {
          this.proceduralNodes.sources.forEach(s => {
            try { s.stop(); s.disconnect(); } catch (e) {}
          });
        }
        if (this.proceduralNodes.interval) {
          clearInterval(this.proceduralNodes.interval);
        }
      } catch (e) {}
      this.proceduralNodes = null;
    }
  }

  stopSound() {
    this.stopProceduralSynth();
    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement.removeAttribute('src'); // Stop downloading
      this.audioElement.load();
    }
    if (this.currentBlobUrl) {
      try { URL.revokeObjectURL(this.currentBlobUrl); } catch(e) {}
      this.currentBlobUrl = null;
    }
    this.activeSoundType = null;
    this.isLoadingSound = null;
  }

  // Web Audio Procedural Sound Synthesizer Fallback (Rain, Waves, River, Lo-Fi)
  startProceduralSynth(soundType) {
    try {
      this.initContext();
      if (!this.ctx) return;

      this.stopProceduralSynth();

      const bufferSize = 2 * this.ctx.sampleRate;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let lastOut = 0.0;

      // Generate Pink / Brown Noise Buffer
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        output[i] = (lastOut + (0.02 * white)) / 1.02;
        lastOut = output[i];
        output[i] *= 3.5; // boost
      }

      const noiseSource = this.ctx.createBufferSource();
      noiseSource.buffer = noiseBuffer;
      noiseSource.loop = true;

      const masterGain = this.ctx.createGain();
      masterGain.gain.setValueAtTime(this.volume * 0.35, this.ctx.currentTime);

      const filter = this.ctx.createBiquadFilter();

      if (soundType.includes('brown')) {
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(320, this.ctx.currentTime);
      } else if (soundType.includes('rain') || soundType.includes('thunder')) {
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1100, this.ctx.currentTime);
      } else if (soundType.includes('ocean') || soundType.includes('wave')) {
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(400, this.ctx.currentTime);
        filter.Q.setValueAtTime(1.0, this.ctx.currentTime);

        // LFO for wave modulation
        const lfo = this.ctx.createOscillator();
        const lfoGain = this.ctx.createGain();
        lfo.frequency.setValueAtTime(0.12, this.ctx.currentTime); // 8s wave cycle
        lfoGain.gain.setValueAtTime(300, this.ctx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(filter.frequency);
        lfo.start();
      } else if (soundType.includes('river') || soundType.includes('forest')) {
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(800, this.ctx.currentTime);
      } else { // Lo-Fi & Ambient
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(750, this.ctx.currentTime);
      }

      noiseSource.connect(filter);
      filter.connect(masterGain);
      masterGain.connect(this.ctx.destination);

      noiseSource.start();

      this.proceduralNodes = {
        masterGain,
        sources: [noiseSource]
      };
    } catch (e) {
      console.warn('Procedural synth error:', e);
    }
  }

  async playAmbient(soundType, srcUrl) {
    if (this.activeSoundType === soundType) {
      this.stopSound();
      return false; // Stopped
    }

    this.stopSound();
    this.initContext();
    
    if (srcUrl) {
      this.isLoadingSound = soundType;
      this.activeSoundType = soundType;
      if (srcUrl.startsWith('blob:')) {
        this.currentBlobUrl = srcUrl;
      }
      
      console.log('Now playing:', soundType, srcUrl);
      this.audioElement.src = srcUrl;
      this.audioElement.volume = this.volume;
      this.audioElement.loop = true;
      this.audioElement.preload = "none";
      
      try {
        await this.audioElement.play();
        this.isLoadingSound = null;
        return true; // Playing
      } catch (e) {
        if (e.name !== 'AbortError') {
          console.warn("Audio play promise failed, using Web Audio Synth:", e);
          this.isLoadingSound = null;
          this.startProceduralSynth(soundType);
          return true;
        }
      }
    } else {
      this.activeSoundType = soundType;
      this.startProceduralSynth(soundType);
      return true;
    }
    
    return false;
  }

  playPomodoroAlarm() {
    try {
      this.initContext();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }

      const now = this.ctx.currentTime;
      const notes = [
        { start: 0.0, freq: 587.33, dur: 0.32, gain: 0.28 },
        { start: 0.22, freq: 739.99, dur: 0.32, gain: 0.32 },
        { start: 0.45, freq: 880.00, dur: 0.48, gain: 0.36 },
        { start: 1.0, freq: 587.33, dur: 0.32, gain: 0.28 },
        { start: 1.22, freq: 739.99, dur: 0.32, gain: 0.32 },
        { start: 1.45, freq: 880.00, dur: 0.48, gain: 0.36 },
        { start: 2.0, freq: 659.25, dur: 0.45, gain: 0.30 },
        { start: 2.22, freq: 880.00, dur: 0.78, gain: 0.38 }
      ];

      notes.forEach(note => {
        const osc = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(note.freq, now + note.start);

        const startTime = now + note.start;
        const endTime = startTime + note.dur;

        gainNode.gain.setValueAtTime(0.0001, startTime);
        gainNode.gain.linearRampToValueAtTime(note.gain, startTime + 0.03);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, endTime);

        osc.connect(gainNode);
        gainNode.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(endTime);
      });
    } catch (e) {
      console.warn('Pomodoro Web Audio playback error:', e);
    }
  }
}

export const audioEngine = new AudioSynthesizer();

export function playPomodoroAlarm() {
  audioEngine.playPomodoroAlarm();
}

export function requestPomodoroNotificationPermission() {
  if (typeof window !== 'undefined' && 'Notification' in window) {
    if (Notification.permission === 'default') {
      try {
        Notification.requestPermission().catch(() => {});
      } catch (e) {}
    }
  }
}

export function sendPomodoroNotification(timerType = 1) {
  if (typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function') {
    try {
      navigator.vibrate([300, 150, 300]);
    } catch (e) {}
  }

  if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
    const isBreak = timerType === 2;
    const title = isBreak ? '⏰ پایان استراحت - پلنکس' : '⏰ پایان پومودورو - پلنکس';
    const body = isBreak
      ? 'زمان استراحت شما به پایان رسید! آماده شروع یک پارت مطالعه باانرژی باشید.'
      : 'زمان پارت مطالعه شما به پایان رسید! وقت یک استراحت کوتاه است.';

    const notifOptions = {
      body,
      icon: '/logo-transparent.png',
      badge: '/logo-transparent.png',
      vibrate: [200, 100, 200],
      tag: 'planex-pomodoro-finished',
      renotify: true
    };

    try {
      new Notification(title, notifOptions);
    } catch (e) {
      if (typeof navigator !== 'undefined' && 'serviceWorker' in navigator) {
        navigator.serviceWorker.ready.then(reg => {
          if (reg && reg.showNotification) {
            reg.showNotification(title, notifOptions);
          }
        }).catch(() => {});
      }
    }
  }
}

if (typeof window !== 'undefined') {
  window.playPomodoroAlarm = playPomodoroAlarm;
  window.sendPomodoroNotification = sendPomodoroNotification;
  window.requestPomodoroNotificationPermission = requestPomodoroNotificationPermission;
}

// High-Availability Audio Streams & Web Audio Synthesizer Fallbacks
export const STUDY_SOUNDS = [
  { id: 'rain_window', title: '🌧️ باران ملایم و پنجره', category: 'nature', url: 'https://actions.google.com/sounds/v1/weather/rain_heavy.ogg' },
  { id: 'deep_brown_noise', title: '🟤 نویز قهوه‌ای عمیق', category: 'focus', url: null },
  { id: 'ambient_piano', title: '🎹 پیانو امبینت بی‌کلام', category: 'music', url: 'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=ambient-piano-11070.mp3' },
  { id: 'lofi_study', title: '🎧 لو-فای ملایم مطالعه', category: 'music', url: 'https://stream.zeno.fm/f3wvbbqmdg8uv' },

  // Aliases for Backward Compatibility
  { id: 'rain_soothing', title: '🌧️ باران ملایم و پنجره', category: 'nature', url: 'https://actions.google.com/sounds/v1/weather/rain_heavy.ogg' },
  { id: 'rain_gentle', title: '🌧️ باران ملایم و پنجره', category: 'nature', url: 'https://actions.google.com/sounds/v1/weather/rain_heavy.ogg' },
  { id: 'thunderstorm', title: '⚡ رعد و برق', category: 'nature', url: 'https://actions.google.com/sounds/v1/weather/rain_heavy.ogg' },
  { id: 'brown_noise', title: '🟤 نویز قهوه‌ای عمیق', category: 'focus', url: null },
  { id: 'river_stream', title: '🏞️ جریان آب رودخانه', category: 'nature', url: 'https://actions.google.com/sounds/v1/water/stream_water.ogg' },
  { id: 'coffee_shop', title: '☕ کافه شلوغ', category: 'ambient', url: 'https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg' },
  { id: 'forest_birds', title: '🌲 جنگل و پرندگان', category: 'nature', url: 'https://actions.google.com/sounds/v1/environments/forest_birds.ogg' },
  { id: 'ocean_waves', title: '🌊 امواج دریا', category: 'nature', url: 'https://actions.google.com/sounds/v1/water/waves_crashing.ogg' },
  { id: 'lofi_study_fassounds', title: '🎧 لو-فای ملایم مطالعه', category: 'music', url: 'https://stream.zeno.fm/f3wvbbqmdg8uv' },
  { id: 'lofi_jazz_mountain', title: '🎷 لوفای جاز', category: 'music', url: 'https://stream.zeno.fm/f3wvbbqmdg8uv' }
];


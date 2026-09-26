import { audioEngine, STUDY_SOUNDS } from '../audio.js';
import { audioDb } from '../utils/audioDb.js';

export const FEATURED_AMBIENT_SOUNDS = [
  { id: 'rain_window', label: 'باران ملایم و پنجره', icon: '🌧️', category: 'nature' },
  { id: 'deep_brown_noise', label: 'نویز قهوه‌ای عمیق', icon: '🟤', category: 'focus' },
  { id: 'ambient_piano', label: 'پیانو امبینت بی‌کلام', icon: '🎹', category: 'music' },
  { id: 'lofi_study', label: 'لو-فای ملایم مطالعه', icon: '🎧', category: 'music' }
];

// Asynchronous trigger to load custom tracks into memory cache
if (typeof window !== 'undefined' && !window._customAudioTracksLoaded) {
  window._customAudioTracksLoaded = true;
  window.customAudioTracksList = [];
  audioDb.getTracks().then(tracks => {
    window.customAudioTracksList = tracks || [];
    if (window.renderApp) window.renderApp();
  }).catch(() => {});
}

export function renderAmbientAudioPlayer(options = {}) {
  const activeSound = audioEngine.activeSoundType || null;
  const isPlaying = Boolean(activeSound);
  const currentVolume = audioEngine.volume !== undefined ? Math.round(audioEngine.volume * 100) : 50;
  const activeSoundObj = STUDY_SOUNDS.find(s => s.id === activeSound);
  const customTracks = window.customAudioTracksList || [];
  const activeCustomTrack = customTracks.find(t => t.id === activeSound);

  const displayTitle = activeCustomTrack
    ? `آهنگ شخصی: «${activeCustomTrack.name}»`
    : (activeSoundObj ? `در حال پخش: «${activeSoundObj.title}»` : 'افزایش تمرکز با لوفای، پیانو و آهنگ‌های دلخواه');

  return `
    <div class="ambient-audio-player-widget" style="background: rgba(22, 23, 29, 0.85); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 18px; padding: 14px 16px; margin: 12px 0; direction: rtl; backdrop-filter: blur(12px); box-sizing: border-box; width: 100%;">
      
      <!-- Widget Header -->
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div style="display: flex; align-items: center; gap: 8px; overflow: hidden;">
          <span style="font-size: 1.15rem; animation: ${isPlaying ? 'spin 10s linear infinite' : 'none'}; flex-shrink: 0;">🎵</span>
          <div style="overflow: hidden;">
            <strong style="font-size: 0.86rem; color: #ffffff; font-weight: 800; display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
              موسیقی و صدای محیط (Focus Audio)
            </strong>
            <span style="font-size: 0.7rem; color: ${isPlaying ? '#34d399' : '#8e8e9c'}; display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
              ${displayTitle}
            </span>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 8px; flex-shrink: 0;">
          ${isPlaying ? `
            <button type="button" id="btn-toggle-ambient-play" onclick="if(window.toggleAmbientAudio) window.toggleAmbientAudio();" style="background: rgba(239, 68, 68, 0.2); border: 1px solid rgba(239, 68, 68, 0.5); color: #f87171; padding: 6px 14px; border-radius: 20px; display: flex; align-items: center; gap: 6px; font-size: 0.8rem; font-weight: 800; cursor: pointer; transition: all 0.15s ease; box-shadow: 0 0 10px rgba(239, 68, 68, 0.2);" title="توقف پخش">
              <span>⏸️</span>
              <span>توقف</span>
            </button>
          ` : `
            <button type="button" id="btn-toggle-ambient-play" onclick="if(window.toggleAmbientAudio) window.toggleAmbientAudio('rain_window');" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); border: none; color: white; padding: 6px 14px; border-radius: 20px; display: flex; align-items: center; gap: 6px; font-size: 0.8rem; font-weight: 800; cursor: pointer; transition: all 0.15s ease; box-shadow: 0 0 12px rgba(16, 185, 129, 0.4);" title="پخش صدای تمرکز">
              <span>▶️</span>
              <span>پخش</span>
            </button>
          `}
        </div>
      </div>

      <!-- Preset Sound Mode Chips Grid -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 14px; box-sizing: border-box; width: 100%;">
        ${FEATURED_AMBIENT_SOUNDS.map(snd => {
          const isActive = activeSound === snd.id || 
            (snd.id === 'rain_window' && (activeSound === 'rain_soothing' || activeSound === 'rain_gentle')) ||
            (snd.id === 'deep_brown_noise' && activeSound === 'brown_noise') ||
            (snd.id === 'lofi_study' && activeSound === 'lofi_study_fassounds');
          return `
            <button type="button" 
                    class="btn-ambient-sound-mode ${isActive ? 'active' : ''}" 
                    onclick="if(window.selectAmbientSound) window.selectAmbientSound('${snd.id}');"
                    style="padding: 10px 12px; border-radius: 14px; border: ${isActive ? '2px solid #10b981' : '1.5px solid rgba(255, 255, 255, 0.08)'}; background: ${isActive ? 'rgba(16, 185, 129, 0.22)' : '#1f2029'}; color: ${isActive ? '#34d399' : '#e4e4e7'}; font-size: 0.8rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: all 0.2s ease; width: 100%; box-sizing: border-box; justify-content: flex-start; text-align: right; box-shadow: ${isActive ? '0 0 12px rgba(16, 185, 129, 0.35)' : 'none'};">
              <span style="font-size: 1.1rem; flex-shrink: 0;">${snd.icon}</span>
              <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1;">${snd.label}</span>
              ${isActive ? `<span style="font-size: 0.75rem; flex-shrink: 0; color: #10b981;">🔊</span>` : ''}
            </button>
          `;
        }).join('')}
      </div>

      <!-- Custom Audio Upload Section -->
      <div style="background: rgba(0,0,0,0.2); border: 1px dashed rgba(255,255,255,0.12); border-radius: 14px; padding: 12px; margin-bottom: 12px;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
          <span style="font-size: 0.78rem; font-weight: 800; color: #c4b5fd; display: flex; align-items: center; gap: 6px;">
            <span>🎼</span><span>آهنگ‌های دلخواه شما (IndexedDB)</span>
          </span>
          <button type="button" onclick="document.getElementById('input-custom-audio-upload').click();" style="padding: 5px 12px; font-size: 0.74rem; font-weight: 800; background: rgba(124, 58, 237, 0.2); color: #c4b5fd; border: 1px solid rgba(124, 58, 237, 0.4); border-radius: 10px; cursor: pointer; display: flex; align-items: center; gap: 4px; transition: all 0.15s ease;">
            <span>➕</span><span>افزودن آهنگ دلخواه</span>
          </button>
          <input type="file" id="input-custom-audio-upload" accept="audio/*" style="display: none;" onchange="window.handleCustomAudioUpload(event)" />
        </div>

        ${customTracks.length === 0 ? `
          <div style="font-size: 0.72rem; color: #8e8e9c; text-align: center; padding: 6px 0;">
            هنوز آهنگ دلخواهی اضافه نشده است. با دکمه بالا فایل صوتی (MP3/WAV) اضافه کنید.
          </div>
        ` : `
          <div style="display: flex; flex-direction: column; gap: 6px; max-height: 160px; overflow-y: auto; scrollbar-width: thin;">
            ${customTracks.map(tr => {
              const isTrActive = activeSound === tr.id;
              return `
                <div style="display: flex; align-items: center; justify-content: space-between; background: ${isTrActive ? 'rgba(16, 185, 129, 0.2)' : '#1f2029'}; border: 1px solid ${isTrActive ? '#10b981' : 'rgba(255,255,255,0.06)'}; padding: 6px 10px; border-radius: 10px; gap: 8px;">
                  <div style="display: flex; align-items: center; gap: 6px; overflow: hidden; flex: 1;">
                    <span style="font-size: 0.85rem;">🎵</span>
                    <span style="font-size: 0.76rem; font-weight: 700; color: ${isTrActive ? '#34d399' : '#e4e4e7'}; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${tr.name}</span>
                  </div>

                  <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0;">
                    <button type="button" onclick="window.playCustomAudioTrack('${tr.id}')" style="background: ${isTrActive ? '#ef4444' : '#10b981'}; color: white; border: none; padding: 4px 10px; border-radius: 8px; font-size: 0.72rem; font-weight: 800; cursor: pointer;">
                      ${isTrActive ? '⏸️ توقف' : '▶️ پخش'}
                    </button>
                    <button type="button" onclick="window.deleteCustomAudioTrack('${tr.id}')" style="background: rgba(239,68,68,0.15); color: #f87171; border: 1px solid rgba(239,68,68,0.3); padding: 4px 8px; border-radius: 8px; font-size: 0.72rem; cursor: pointer;" title="حذف آهنگ">
                      🗑️
                    </button>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `}
      </div>

      <!-- Volume Slider Control -->
      <div style="display: flex; align-items: center; gap: 10px; background: rgba(0,0,0,0.25); padding: 8px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.06); box-sizing: border-box; width: 100%;">
        <span style="font-size: 0.9rem; color: #a1a1aa;">🔊</span>
        <input type="range" 
               id="input-ambient-volume-slider" 
               min="0" 
               max="100" 
               value="${currentVolume}" 
               oninput="if(window.setAmbientVolume) window.setAmbientVolume(this.value);" 
               style="flex: 1; accent-color: #10b981; height: 4px; cursor: pointer;" />
        <span style="font-size: 0.75rem; font-weight: bold; color: #34d399; font-family: 'Outfit', sans-serif; min-width: 34px; text-align: left;">
          ${currentVolume}%
        </span>
      </div>

    </div>
  `;
}

// Global Audio Interactivity Helpers
if (typeof window !== 'undefined') {
  window.selectAmbientSound = (soundId) => {
    const snd = STUDY_SOUNDS.find(s => s.id === soundId);
    if (snd) {
      audioEngine.playAmbient(snd.id, snd.url).then(() => {
        if (window.renderApp) window.renderApp();
      });
    }
  };

  window.toggleAmbientAudio = (defaultSoundId = 'lofi_study') => {
    if (audioEngine.activeSoundType) {
      audioEngine.stopSound();
      if (window.renderApp) window.renderApp();
    } else {
      window.selectAmbientSound(defaultSoundId);
    }
  };

  window.setAmbientVolume = (val) => {
    const vol = parseFloat(val) / 100;
    audioEngine.setVolume(vol);
  };

  window.handleCustomAudioUpload = async (event) => {
    const file = event.target?.files?.[0];
    if (!file) return;

    try {
      const track = await audioDb.saveTrack(file, file.name);
      window.customAudioTracksList = await audioDb.getTracks();
      if (window.showToast) {
        window.showToast(`آهنگ «${track.name}» با موفقیت ذخیره شد! 🎵`, 'success');
      }
      if (window.renderApp) window.renderApp();
    } catch (err) {
      console.error('Custom audio upload error:', err);
      if (window.showToast) {
        window.showToast('خطا در ذخیره فایل صوتی در دیتابیس', 'error');
      }
    }
  };

  window.playCustomAudioTrack = async (trackId) => {
    if (audioEngine.activeSoundType === trackId) {
      audioEngine.stopSound();
      if (window.renderApp) window.renderApp();
      return;
    }

    const tracks = window.customAudioTracksList || await audioDb.getTracks();
    const track = tracks.find(t => t.id === trackId);

    if (track && track.blob) {
      const blobUrl = URL.createObjectURL(track.blob);
      audioEngine.playAmbient(track.id, blobUrl).then(() => {
        if (window.renderApp) window.renderApp();
      });
    } else {
      if (window.showToast) window.showToast('فایل صوتی یافت نشد.', 'error');
    }
  };

  window.deleteCustomAudioTrack = async (trackId) => {
    if (audioEngine.activeSoundType === trackId) {
      audioEngine.stopSound();
    }
    await audioDb.deleteTrack(trackId);
    window.customAudioTracksList = await audioDb.getTracks();
    if (window.showToast) {
      window.showToast('آهنگ با موفقیت حذف شد 🗑️', 'info');
    }
    if (window.renderApp) window.renderApp();
  };
}

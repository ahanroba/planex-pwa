/**
 * Step 2: Automated Audio Asset Downloader
 * Downloads royalty-free audio assets from public CDNs/GitHub repos.
 * Falls back to generating valid placeholder MP3s if downloads fail.
 */
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');

// Ensure public dir exists
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

/**
 * Generate a minimal valid MP3 file (silent, ~1 second)
 * This is a valid MPEG audio frame so Remotion won't crash
 */
function generatePlaceholderMp3(filePath, durationHint) {
  // Minimal valid MP3: MPEG1 Layer3, 128kbps, 44100Hz, stereo
  // This is a valid silent MP3 frame header + padding
  const frameHeader = Buffer.from([
    0xFF, 0xFB, 0x90, 0x00, // MPEG1, Layer3, 128kbps, 44100Hz, stereo
  ]);
  
  // A single MPEG frame is 417 bytes for 128kbps/44100Hz
  // Frame size = 144 * bitrate / samplerate + padding
  // = 144 * 128000 / 44100 = 417 bytes
  const frameSize = 417;
  const frameData = Buffer.alloc(frameSize, 0);
  frameHeader.copy(frameData, 0);
  
  // Generate enough frames for the duration
  const framesPerSecond = 44100 / 1152; // ~38.28 frames/sec for MPEG1 Layer3
  const totalFrames = Math.ceil(framesPerSecond * (durationHint || 1));
  
  const frames = [];
  for (let i = 0; i < totalFrames; i++) {
    const frame = Buffer.alloc(frameSize, 0);
    frameHeader.copy(frame, 0);
    frames.push(frame);
  }
  
  fs.writeFileSync(filePath, Buffer.concat(frames));
  console.log(`  📝 Generated placeholder MP3: ${path.basename(filePath)} (${totalFrames} frames)`);
}

/**
 * Download a file from URL, following redirects
 */
function downloadFile(url, destPath, maxRedirects = 5) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    const request = protocol.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': '*/*',
      },
      timeout: 15000,
    }, (response) => {
      // Handle redirects
      if ([301, 302, 303, 307, 308].includes(response.statusCode) && response.headers.location) {
        if (maxRedirects <= 0) {
          reject(new Error('Too many redirects'));
          return;
        }
        let redirectUrl = response.headers.location;
        if (redirectUrl.startsWith('/')) {
          const urlObj = new URL(url);
          redirectUrl = `${urlObj.protocol}//${urlObj.host}${redirectUrl}`;
        }
        downloadFile(redirectUrl, destPath, maxRedirects - 1).then(resolve).catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(destPath);
      response.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        // Verify the file is not empty and has some valid content
        const stats = fs.statSync(destPath);
        if (stats.size < 100) {
          reject(new Error('Downloaded file too small'));
        } else {
          resolve(stats.size);
        }
      });
      fileStream.on('error', reject);
    });

    request.on('error', reject);
    request.on('timeout', () => {
      request.destroy();
      reject(new Error('Download timeout'));
    });
  });
}

/**
 * Try multiple URLs for a single asset, fall back to placeholder
 */
async function fetchAsset(name, urls, destPath, placeholderDuration) {
  console.log(`\n🔍 Fetching ${name}...`);
  
  for (const url of urls) {
    try {
      console.log(`  ⬇️  Trying: ${url.substring(0, 80)}...`);
      const size = await downloadFile(url, destPath);
      console.log(`  ✅ Downloaded ${name} (${(size / 1024).toFixed(1)} KB)`);
      return true;
    } catch (err) {
      console.log(`  ❌ Failed: ${err.message}`);
    }
  }
  
  console.log(`  ⚠️  All URLs failed for ${name}, generating placeholder...`);
  generatePlaceholderMp3(destPath, placeholderDuration);
  return false;
}

(async () => {
  console.log('🎵 Starting audio asset download...\n');

  // Background music URLs - ambient/chill royalty-free tracks
  const bgMusicUrls = [
    // Pixabay-hosted royalty-free ambient tracks (direct download)
    'https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3',
    'https://cdn.pixabay.com/download/audio/2022/10/25/audio_946bc3eb4a.mp3',
    'https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3',
    // Free Music Archive alternatives
    'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3',
    // GitHub hosted samples
    'https://raw.githubusercontent.com/anars/blank-audio/master/1-minute-of-silence.mp3',
  ];

  // Whoosh/transition sound URLs
  const whooshUrls = [
    'https://cdn.pixabay.com/download/audio/2022/03/24/audio_c0c0516e2e.mp3',
    'https://cdn.pixabay.com/download/audio/2021/08/04/audio_c507a63752.mp3',
    'https://raw.githubusercontent.com/AntoineMT/SoundEffects/main/whoosh.mp3',
    'https://raw.githubusercontent.com/nicholasgasior/sound-effects/master/whoosh/whoosh-1.mp3',
    'https://www.soundjay.com/mechanical/sounds/whoosh-1.mp3',
  ];

  // Pop/click UI sound URLs  
  const popUrls = [
    'https://cdn.pixabay.com/download/audio/2021/08/04/audio_12b0c7443c.mp3',
    'https://cdn.pixabay.com/download/audio/2022/03/15/audio_4e9bd4d05d.mp3',
    'https://raw.githubusercontent.com/nicholasgasior/sound-effects/master/pop/pop-1.mp3',
    'https://www.soundjay.com/button/sounds/button-09.mp3',
  ];

  const results = await Promise.all([
    fetchAsset('Background Music (bg.mp3)', bgMusicUrls, path.join(PUBLIC_DIR, 'bg.mp3'), 60),
    fetchAsset('Whoosh Sound (whoosh.mp3)', whooshUrls, path.join(PUBLIC_DIR, 'whoosh.mp3'), 1),
    fetchAsset('Pop Sound (pop.mp3)', popUrls, path.join(PUBLIC_DIR, 'pop.mp3'), 0.5),
  ]);

  const downloaded = results.filter(Boolean).length;
  console.log(`\n🎉 Audio setup complete! ${downloaded}/3 downloaded, ${3 - downloaded}/3 placeholders.`);
  
  // Verify all files exist
  for (const file of ['bg.mp3', 'whoosh.mp3', 'pop.mp3']) {
    const fp = path.join(PUBLIC_DIR, file);
    if (fs.existsSync(fp)) {
      const size = fs.statSync(fp).size;
      console.log(`  ✓ ${file}: ${(size / 1024).toFixed(1)} KB`);
    } else {
      console.log(`  ✗ ${file}: MISSING!`);
    }
  }
})();

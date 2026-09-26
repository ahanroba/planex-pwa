// audioDb.js — IndexedDB Storage Engine for Custom Ambient Audio Tracks
// Database Name: planex_audio_db | Store Name: custom_tracks

const DB_NAME = 'planex_audio_db';
const DB_VERSION = 1;
const STORE_NAME = 'custom_tracks';

// Request Storage Persistence to ensure mobile browsers never evict uploaded audio files
if (typeof navigator !== 'undefined' && navigator.storage && navigator.storage.persist) {
  navigator.storage.persist().then(granted => {
    if (granted) {
      console.log('[audioDb] Persistent storage granted by browser.');
    }
  }).catch(() => {});
}

function openAudioDB() {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      reject(new Error('IndexedDB is not supported in this browser.'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'id' });
      }
    };

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      reject(event.target.error || new Error('Failed to open audio database.'));
    };
  });
}

export const audioDb = {
  /**
   * Saves an uploaded audio File/Blob into IndexedDB
   * @param {File|Blob} file 
   * @param {string} customName 
   * @returns {Promise<Object>} saved track object
   */
  async saveTrack(file, customName = '') {
    if (!file) throw new Error('فایل صوتی انتخاب نشده است.');
    const db = await openAudioDB();

    const name = customName || file.name || 'آهنگ جدید';
    const id = 'custom_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);

    const trackObj = {
      id,
      name,
      fileName: file.name || 'audio.mp3',
      fileType: file.type || 'audio/mpeg',
      blob: file,
      createdAt: Date.now()
    };

    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put(trackObj);

      req.onsuccess = () => resolve(trackObj);
      req.onerror = (e) => reject(e.target.error || new Error('خطا در ذخیره فایل صوتی در دیتابیس'));
    });
  },

  /**
   * Retrieves all custom audio tracks from IndexedDB
   * @returns {Promise<Array>} Array of track objects
   */
  async getTracks() {
    try {
      const db = await openAudioDB();
      return new Promise((resolve, reject) => {
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        const req = store.getAll();

        req.onsuccess = () => resolve(req.result || []);
        req.onerror = (e) => reject(e.target.error || new Error('خطا در دریافت لیست آهنگ‌ها'));
      });
    } catch (err) {
      console.warn('[audioDb] getTracks failed:', err);
      return [];
    }
  },

  /**
   * Deletes a custom audio track by ID
   * @param {string} id 
   * @returns {Promise<boolean>}
   */
  async deleteTrack(id) {
    if (!id) return false;
    const db = await openAudioDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.delete(id);

      req.onsuccess = () => resolve(true);
      req.onerror = (e) => reject(e.target.error || new Error('خطا در حذف آهنگ'));
    });
  }
};

if (typeof window !== 'undefined') {
  window.audioDb = audioDb;
}

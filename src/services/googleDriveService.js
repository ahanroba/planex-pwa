// src/services/googleDriveService.js

const CLIENT_ID = '849457701429-2nbj1q8s6lgqk9hs2q08odnot3erh9fk.apps.googleusercontent.com';
const SCOPES = 'https://www.googleapis.com/auth/drive.file';

let tokenClient;
let accessToken = null;

export function initTokenClient() {
  return new Promise((resolve, reject) => {
    try {
      if (typeof google === 'undefined') {
        throw new Error('اسکریپت گوگل بارگذاری نشده است. لطفاً اتصال اینترنت خود را بررسی کنید.');
      }
      tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: (tokenResponse) => {
          if (tokenResponse && tokenResponse.access_token) {
            accessToken = tokenResponse.access_token;
            resolve(accessToken);
          } else {
            reject(new Error('دریافت توکن با خطا مواجه شد.'));
          }
        },
      });
      // Trigger the popup
      tokenClient.requestAccessToken({prompt: ''});
    } catch (e) {
      reject(e);
    }
  });
}

async function findBackupFileId() {
  const response = await fetch('https://www.googleapis.com/drive/v3/files?q=name="planex_backup.json"&spaces=drive', {
    headers: { 'Authorization': `Bearer ${accessToken}` }
  });
  const data = await response.json();
  if (data.files && data.files.length > 0) {
    return data.files[0].id;
  }
  return null;
}

export async function backupDataToDrive(dataObj) {
  if (!accessToken) throw new Error('کاربر وارد حساب گوگل نشده است.');
  
  const fileId = await findBackupFileId();
  const fileContent = JSON.stringify(dataObj);
  const metadata = {
    name: 'planex_backup.json',
    parents: ['root']
  };

  const form = new FormData();
  form.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
  form.append('file', new Blob([fileContent], { type: 'application/json' }));

  const url = fileId 
    ? `https://www.googleapis.com/upload/drive/v3/files/${fileId}?uploadType=multipart&fields=id,name,webViewLink` 
    : 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,webViewLink';
  
  const method = fileId ? 'PATCH' : 'POST';

  const res = await fetch(url, {
    method,
    headers: { 'Authorization': `Bearer ${accessToken}` },
    body: form
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error('خطا در بک‌آپ گیری: ' + (err.error?.message || res.statusText));
  }
  return await res.json();
}

export async function restoreDataFromDrive() {
  if (!accessToken) throw new Error('کاربر وارد حساب گوگل نشده است.');

  const fileId = await findBackupFileId();
  if (!fileId) {
    throw new Error('فایل بک‌آپی در حساب گوگل شما یافت نشد.');
  }

  const res = await fetch(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`, {
    headers: { 'Authorization': `Bearer ${accessToken}` }
  });

  if (!res.ok) throw new Error('دانلود بک‌آپ با خطا مواجه شد.');
  
  const data = await res.json();
  // Restore into localStorage
  for (const key in data) {
    localStorage.setItem(key, data[key]);
  }
  
  window.location.reload();
}

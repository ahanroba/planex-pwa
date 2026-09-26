import { db } from '../db.js';

export function renderJoinRoomOnboardingModal(pendingRoom = null) {
  const profile = (db && typeof db.getProfile === 'function') ? db.getProfile() : {};
  const userAcc = JSON.parse(localStorage.getItem('planex_user_account') || '{}');
  
  const defaultName = profile.name || profile.nickname || userAcc.full_name || '';
  const defaultMajor = profile.major || profile.field_of_study || 'تجربی';
  const defaultTarget = profile.target || profile.goal || '';

  const roomName = pendingRoom ? (pendingRoom.name || pendingRoom.title || pendingRoom.roomName || 'سالن مطالعه') : 'سالن مطالعه';
  const roomId = pendingRoom ? (pendingRoom.id || pendingRoom.code || '') : '';

  return `
    <div class="modal-overlay" style="display: flex; backdrop-filter: blur(20px); z-index: 99999;">
      <div class="modal-content" onclick="event.stopPropagation();" style="max-width: 440px; padding: 22px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; text-align: right; direction: rtl;">
        
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 12px;">
          <div>
            <h2 style="margin: 0; color: #f8fafc; font-size: 1.05rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
              <span>👤</span>
              <span>مشخصات عضویت در ${roomName}</span>
            </h2>
            <span style="font-size: 0.72rem; color: #8e8e9c; margin-top: 2px; display: block;">
              اطلاعات پروفایل مطالعاتی شما برای نمایش به اعضای گروه
            </span>
          </div>
          <button type="button" id="btn-close-join-onboarding" class="btn-icon" style="background: #1f2029; border: 1px solid rgba(255,255,255,0.08); color: #a1a1aa; border-radius: 50%; width: 30px; height: 30px; cursor: pointer;">✕</button>
        </div>

        <form id="form-join-room-onboarding" onsubmit="event.preventDefault(); window.handleSubmitJoinRoomOnboarding('${roomId}', '${roomName}');" style="display: flex; flex-direction: column; gap: 12px;">
          
          <!-- 1. Nickname -->
          <div>
            <label style="display: block; margin-bottom: 5px; color: #cbd5e1; font-size: 0.78rem; font-weight: 700;">
              <span>۱. نام یا نام مستعار:</span> <span style="color: #ef4444;">*</span>
            </label>
            <input type="text"
                   id="input-onboarding-nickname"
                   required
                   value="${defaultName}"
                   placeholder="مثلاً: علی م. یا دکتر احمدی"
                   maxlength="30"
                   class="form-input"
                   style="width: 100%; box-sizing: border-box; padding: 10px 12px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: white; font-size: 0.84rem;" />
          </div>

          <!-- 2. Major / Field of Study -->
          <div>
            <label style="display: block; margin-bottom: 5px; color: #cbd5e1; font-size: 0.78rem; font-weight: 700;">
              <span>۲. رشته تحصیلی / مقطع:</span> <span style="color: #ef4444;">*</span>
            </label>
            <select id="input-onboarding-major"
                    required
                    class="form-input"
                    style="width: 100%; box-sizing: border-box; padding: 10px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: white; font-size: 0.82rem;">
              <option value="تجربی" ${defaultMajor.includes('تجرب') ? 'selected' : ''}>🧬 علوم تجربی (کنکور / پزشکی)</option>
              <option value="ریاضی" ${defaultMajor.includes('ریاض') ? 'selected' : ''}>📐 ریاضی و فیزیک (مهندسی)</option>
              <option value="انسانی" ${defaultMajor.includes('انسان') ? 'selected' : ''}>📚 علوم انسانی (وکالت / مدیریت)</option>
              <option value="دانشجویی" ${defaultMajor.includes('دانشجو') || defaultMajor.includes('پزشک') ? 'selected' : ''}>🎓 دانشجوی دانشگاه / رزیدنتی</option>
              <option value="زبان" ${defaultMajor.includes('زبان') ? 'selected' : ''}>🌍 منحصراً زبان</option>
              <option value="هنر" ${defaultMajor.includes('هنر') ? 'selected' : ''}>🎨 هنر</option>
              <option value="عمومی / سایر" ${(!defaultMajor || defaultMajor === 'عمومی') ? 'selected' : ''}>☕ عمومی / سایر</option>
            </select>
          </div>

          <!-- 3. Goal / Target -->
          <div>
            <label style="display: block; margin-bottom: 5px; color: #cbd5e1; font-size: 0.78rem; font-weight: 700;">
              <span>۳. هدف مطالعاتی / رشته و دانشگاه دلخواه:</span> <span style="color: #ef4444;">*</span>
            </label>
            <input type="text"
                   id="input-onboarding-target"
                   required
                   value="${defaultTarget}"
                   placeholder="مثلاً: قبولی پزشکی تهران، رتبه زیر ۵۰۰، مطالعه روزانه ۸ ساعت"
                   maxlength="50"
                   class="form-input"
                   style="width: 100%; box-sizing: border-box; padding: 10px 12px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: white; font-size: 0.84rem;" />
          </div>

          <!-- Submit Button -->
          <button type="submit"
                  id="btn-confirm-join-onboarding"
                  class="btn-primary"
                  style="width: 100%; padding: 12px; font-size: 0.92rem; font-weight: 800; background: #7c3aed; color: white; border: none; border-radius: 12px; cursor: pointer; margin-top: 6px; box-shadow: none;">
            🚀 تأیید مشخصات و ورود به سالن
          </button>
        </form>

      </div>
    </div>
  `;
}

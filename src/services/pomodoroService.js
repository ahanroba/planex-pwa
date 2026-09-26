// Pomodoro Live Active Users Tracking Service
// Event-driven, low-bandwidth service: Realistic Hourly Baseline + Real Active Online Users

export const pomodoroService = {
  isSessionActive: false,
  realServerCount: 0,

  /**
   * Retrieves the current user's unique identifier (or creates persistent device id)
   */
  getUserId() {
    try {
      const userStr = localStorage.getItem('planex_user_account');
      if (userStr) {
        const user = JSON.parse(userStr);
        if (user && (user.id || user.username)) {
          return String(user.id || user.username);
        }
      }
    } catch (e) {}

    let deviceId = localStorage.getItem('planex_pomodoro_device_id');
    if (!deviceId) {
      deviceId = 'pomo_' + Math.random().toString(36).substring(2, 11) + '_' + Date.now().toString(36);
      localStorage.setItem('planex_pomodoro_device_id', deviceId);
    }
    return deviceId;
  },

  /**
   * 1. Realistic Hourly Baseline (ساعت شبانه‌روز به وقت ایران)
   * • صبح زود (۶ تا ۹): بازه ۱۵ تا ۲۵ نفر
   * • ظهر و بعدازظهر (۹ تا ۱۷): بازه ۲۵ تا ۴۰ نفر
   * • اوج مطالعه عصر و شب (۱۷ تا ۲۳): بازه ۳۵ تا ۵۵ نفر
   * • نیمه‌شب (۲۳ تا ۶ صبح): بازه ۵ تا ۱۲ نفر
   */
  getNaturalTimeOfDayBaseline() {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();

    try {
      const tehranHourStr = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Tehran', hour: 'numeric', hour12: false }).format(new Date());
      const parsedH = parseInt(tehranHourStr, 10);
      if (!isNaN(parsedH)) hour = parsedH;

      const tehranMinStr = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Tehran', minute: 'numeric' }).format(new Date());
      const parsedM = parseInt(tehranMinStr, 10);
      if (!isNaN(parsedM)) minute = parsedM;
    } catch (e) {}

    let base = 25;
    const minuteRatio = minute / 60;

    // • صبح زود (۶ تا ۹): بازه ۱۵ تا ۲۵ نفر
    if (hour >= 6 && hour < 9) {
      const hourProgress = (hour - 6 + minuteRatio) / 3;
      base = Math.round(15 + hourProgress * 10);
      return Math.min(25, Math.max(15, base));
    }

    // • ظهر و بعدازظهر (۹ تا ۱۷): بازه ۲۵ تا ۴۰ نفر
    if (hour >= 9 && hour < 17) {
      const middayPattern = [27, 32, 36, 38, 32, 28, 34, 38];
      const idx = hour - 9;
      const cur = middayPattern[idx] || 30;
      const next = (idx + 1 < middayPattern.length) ? middayPattern[idx + 1] : 38;
      base = Math.round(cur + (next - cur) * minuteRatio);
      return Math.min(40, Math.max(25, base));
    }

    // • اوج مطالعه عصر و شب (۱۷ تا ۲۳): بازه ۳۵ تا ۵۵ نفر
    if (hour >= 17 && hour < 23) {
      const eveningPattern = [40, 47, 53, 52, 46, 38];
      const idx = hour - 17;
      const cur = eveningPattern[idx] || 45;
      const next = (idx + 1 < eveningPattern.length) ? eveningPattern[idx + 1] : 36;
      base = Math.round(cur + (next - cur) * minuteRatio);
      return Math.min(55, Math.max(35, base));
    }

    // • نیمه‌شب (۲۳ تا ۶ صبح): بازه ۵ تا ۱۲ نفر
    const nightPattern = {
      23: 11,
      0: 9,
      1: 7,
      2: 6,
      3: 5,
      4: 7,
      5: 10
    };
    base = nightPattern[hour] || 7;
    return Math.min(12, Math.max(5, base));
  },

  /**
   * 2. تجمیع عدد پایه ساعت + افراد واقعی آنلاین (Base + Real Delta)
   */
  getDisplayActiveUsers() {
    const baseline = this.getNaturalTimeOfDayBaseline();
    const localDelta = this.isSessionActive ? 1 : 0;
    const realDelta = Math.max(localDelta, parseInt(this.realServerCount) || 0);
    return baseline + realDelta;
  },

  /**
   * Starts a live Pomodoro study session and retrieves concurrent active users count
   */
  async startSession(durationMinutes = 25, isStudySession = true) {
    if (!isStudySession) {
      this.isSessionActive = false;
      return { success: true, count: this.getDisplayActiveUsers() };
    }
    this.isSessionActive = true;
    const userId = this.getUserId();

    try {
      const res = await fetch('/api/pomodoro/active', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'start',
          userId,
          durationMinutes: parseInt(durationMinutes) || 25
        })
      });

      const rawText = await res.text();
      let data = null;
      try {
        data = rawText ? JSON.parse(rawText) : null;
      } catch (e) {
        data = null;
      }

      if (res.ok && data) {
        const serverCount = parseInt(data.count ?? data.activeUsersCount) || 1;
        this.realServerCount = Math.max(1, serverCount);
        return { success: true, count: this.getDisplayActiveUsers() };
      }
    } catch (err) {
      console.warn('[PomodoroService] Server communication error on start:', err);
    }

    // Graceful local fallback (current user is active -> delta = 1)
    this.realServerCount = Math.max(1, this.realServerCount || 1);
    return { success: true, count: this.getDisplayActiveUsers() };
  },

  /**
   * Stops/resets the active Pomodoro study session
   */
  async stopSession() {
    this.isSessionActive = false;
    const userId = this.getUserId();

    try {
      const res = await fetch('/api/pomodoro/active', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'stop',
          userId
        })
      });

      const rawText = await res.text();
      let data = null;
      try {
        data = rawText ? JSON.parse(rawText) : null;
      } catch (e) {
        data = null;
      }

      if (res.ok && data) {
        const serverCount = parseInt(data.count ?? data.activeUsersCount) || 0;
        this.realServerCount = Math.max(0, serverCount);
        return { success: true, count: this.getDisplayActiveUsers() };
      }
    } catch (err) {
      console.warn('[PomodoroService] Server communication error on stop:', err);
    }

    this.realServerCount = 0;
    return { success: true, count: this.getDisplayActiveUsers() };
  },

  /**
   * Lightweight fetch of current active users count on initial load
   */
  async fetchActiveCount() {
    try {
      const res = await fetch('/api/pomodoro/active');
      const rawText = await res.text();
      let data = null;
      try {
        data = rawText ? JSON.parse(rawText) : null;
      } catch (e) {
        data = null;
      }

      if (res.ok && data) {
        const serverCount = parseInt(data.count ?? data.activeUsersCount) || 0;
        this.realServerCount = serverCount;
        return { success: true, count: this.getDisplayActiveUsers() };
      }
    } catch (err) {
      console.warn('[PomodoroService] Server communication error on fetch count:', err);
    }

    return { success: false, count: this.getDisplayActiveUsers() };
  }
};

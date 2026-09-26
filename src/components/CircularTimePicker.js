// Circular Analog Clock Time Picker Component for Alarms and Reminders

export function renderCircularTimePicker(initialHour = 8, initialMinute = 0) {
  const formattedHour = String(initialHour).padStart(2, '0');
  const formattedMinute = String(initialMinute).padStart(2, '0');

  // Compute rotation angles
  const hourAngle = ((initialHour % 12) + initialMinute / 60) * 30; // 360 / 12 = 30 deg per hour
  const minuteAngle = initialMinute * 6; // 360 / 60 = 6 deg per minute

  return `
    <div class="circular-clock-container" style="display: flex; flex-direction: column; align-items: center; padding: 16px; background: rgba(15, 23, 42, 0.9); border-radius: 24px; border: 1px solid rgba(99, 102, 241, 0.3); max-width: 320px; margin: 0 auto;">
      
      <!-- Digital Display Header -->
      <div style="display: flex; align-items: center; justify-content: center; gap: 8px; font-family: 'Outfit'; font-size: 2.2rem; font-weight: 900; color: #38bdf8; margin-bottom: 16px; direction: ltr;">
        <span id="clock-display-hours" style="background: rgba(56, 189, 248, 0.15); padding: 4px 12px; border-radius: 12px; border: 1px solid rgba(56, 189, 248, 0.3); cursor: pointer;">${formattedHour}</span>
        <span>:</span>
        <span id="clock-display-minutes" style="background: rgba(99, 102, 241, 0.15); padding: 4px 12px; border-radius: 12px; border: 1px solid rgba(99, 102, 241, 0.3); cursor: pointer;">${formattedMinute}</span>
      </div>

      <!-- Rotary Analog Clock Face -->
      <div id="analog-clock-dial" style="position: relative; width: 220px; height: 220px; border-radius: 50%; background: radial-gradient(circle, rgba(30,41,59,0.9) 0%, rgba(15,23,42,1) 100%); border: 3px solid rgba(99, 102, 241, 0.4); shadow: 0 0 20px rgba(99,102,241,0.2); cursor: pointer; user-select: none;">
        
        <!-- Center Pin -->
        <div style="position: absolute; top: 50%; left: 50%; width: 12px; height: 12px; background: #ec4899; border-radius: 50%; transform: translate(-50%, -50%); z-index: 10; shadow: 0 0 8px #ec4899;"></div>

        <!-- Hour Hand -->
        <div id="clock-hour-hand" style="position: absolute; top: 50%; left: 50%; width: 6px; height: 55px; background: #38bdf8; border-radius: 4px; transform-origin: top center; transform: translate(-50%, 0) rotate(${180 + hourAngle}deg); z-index: 5; shadow: 0 0 6px #38bdf8;"></div>

        <!-- Minute Hand -->
        <div id="clock-minute-hand" style="position: absolute; top: 50%; left: 50%; width: 4px; height: 75px; background: #a855f7; border-radius: 4px; transform-origin: top center; transform: translate(-50%, 0) rotate(${180 + minuteAngle}deg); z-index: 6; shadow: 0 0 6px #a855f7;"></div>

        <!-- Clock Dial Numbers (12, 3, 6, 9) -->
        <span style="position: absolute; top: 10px; left: 50%; transform: translateX(-50%); font-family: 'Outfit'; font-weight: bold; color: white; font-size: 0.9rem;">12</span>
        <span style="position: absolute; right: 14px; top: 50%; transform: translateY(-50%); font-family: 'Outfit'; font-weight: bold; color: white; font-size: 0.9rem;">3</span>
        <span style="position: absolute; bottom: 10px; left: 50%; transform: translateX(-50%); font-family: 'Outfit'; font-weight: bold; color: white; font-size: 0.9rem;">6</span>
        <span style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); font-family: 'Outfit'; font-weight: bold; color: white; font-size: 0.9rem;">9</span>
      </div>

      <!-- Mode Selector (AM / PM & Hours / Mins) -->
      <div style="display: flex; gap: 8px; margin-top: 16px; width: 100%;">
        <button id="btn-clock-hour-mode" class="btn-primary" style="flex: 1; padding: 6px; font-size: 0.8rem; font-weight: bold;">ساعت 🕒</button>
        <button id="btn-clock-minute-mode" class="glass-panel" style="flex: 1; padding: 6px; font-size: 0.8rem; color: white;">دقیقه ⏱️</button>
      </div>

    </div>
  `;
}

import React, { useEffect, useState } from 'react';
import {
  AbsoluteFill,
  Audio,
  continueRender,
  delayRender,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

// Load Google Vazirmatn font dynamically
const fontStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;600;700;800;900&display=swap');
  
  .planex-promo * {
    font-family: 'Vazirmatn', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    box-sizing: border-box;
  }
`;

export const PlanExWebPromo: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const [handle] = useState(() => delayRender('Preloading assets & fonts'));

  // Preload Vazirmatn font & verify assets
  useEffect(() => {
    let fontLoaded = false;
    let imagesLoaded = false;

    // Load font via Google Fonts stylesheet injection
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    document.fonts.ready.then(() => {
      fontLoaded = true;
      if (imagesLoaded) continueRender(handle);
    }).catch(() => {
      fontLoaded = true;
      if (imagesLoaded) continueRender(handle);
    });

    // Preload image elements
    const imagesToPreload = ['shot1.png', 'shot2.png', 'shot3.png'];
    let loadedCount = 0;

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = staticFile(src);
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === imagesToPreload.length) {
          imagesLoaded = true;
          if (fontLoaded) continueRender(handle);
        }
      };
    });

    // Fallback safety timeout so rendering never hangs forever
    const timeout = setTimeout(() => {
      continueRender(handle);
    }, 4000);

    return () => clearTimeout(timeout);
  }, [handle]);

  // Dynamic animated background: deep liquid purple-blue ambient glow
  const bgGradAngle = interpolate(frame, [0, 1800], [0, 360]);
  const bgGlow1X = interpolate(Math.sin(frame / 60), [-1, 1], [20, 80]);
  const bgGlow1Y = interpolate(Math.cos(frame / 80), [-1, 1], [20, 80]);
  const bgGlow2X = interpolate(Math.cos(frame / 70), [-1, 1], [80, 20]);
  const bgGlow2Y = interpolate(Math.sin(frame / 90), [-1, 1], [80, 20]);

  // Background Audio volume control (fades out during the last 5 seconds / 150 frames)
  const bgVolume = interpolate(
    frame,
    [0, 1650, 1800],
    [0.7, 0.7, 0.0],
    { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
  );

  // --- SCENE SPRINGS & TIMINGS ---
  
  // Scene 1: Frames 0 - 300 (0 - 10s)
  const scene1Text1Spring = spring({ frame: frame - 15, fps, config: { damping: 12, mass: 0.8 } });
  const scene1Text2Spring = spring({ frame: frame - 120, fps, config: { damping: 10, mass: 0.7 } });
  const scene1FadeOut = interpolate(frame, [270, 300], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // Scene 2: Frames 300 - 750 (10 - 25s)
  const scene2CardSpring = spring({ frame: frame - 300, fps, config: { damping: 14, stiffness: 80 } });
  const scene2TextSpring = spring({ frame: frame - 330, fps, config: { damping: 12 } });
  const scene2FadeOut = interpolate(frame, [720, 750], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // Scene 3: Frames 750 - 1200 (25 - 40s)
  const scene3CardSpring = spring({ frame: frame - 750, fps, config: { damping: 14, stiffness: 80 } });
  const scene3TextSpring = spring({ frame: frame - 780, fps, config: { damping: 12 } });
  const scene3FadeOut = interpolate(frame, [1170, 1200], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // Scene 4: Frames 1200 - 1650 (40 - 55s)
  const scene4CardSpring = spring({ frame: frame - 1200, fps, config: { damping: 14, stiffness: 80 } });
  const scene4TextSpring = spring({ frame: frame - 1230, fps, config: { damping: 12 } });
  const scene4FadeOut = interpolate(frame, [1620, 1650], [1, 0], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' });

  // Scene 5: Frames 1650 - 1800 (55 - 60s)
  const scene5TextSpring = spring({ frame: frame - 1650, fps, config: { damping: 10, mass: 0.6 } });
  const scene5SubtextSpring = spring({ frame: frame - 1680, fps, config: { damping: 12 } });
  const ctaGlowPulse = interpolate(Math.sin((frame - 1650) / 10), [-1, 1], [0.6, 1]);

  // Subtle 3D card floating effect (continuous rotation oscillation)
  const cardFloatRotateX = Math.sin(frame / 45) * 3;
  const cardFloatRotateY = Math.cos(frame / 35) * 4;

  return (
    <AbsoluteFill
      className="planex-promo"
      style={{
        width: 1080,
        height: 1920,
        backgroundColor: '#05030A',
        direction: 'rtl',
        overflow: 'hidden',
        color: '#FFFFFF',
        fontFamily: "'Vazirmatn', sans-serif",
      }}
    >
      <style>{fontStyle}</style>

      {/* --- AUDIO INTEGRATION --- */}
      {/* Background Music */}
      <Audio src={staticFile('bg.mp3')} volume={bgVolume} loop />

      {/* Scene Triggers: Pop sound on text reveals */}
      {frame >= 15 && frame < 30 && <Audio src={staticFile('pop.mp3')} volume={0.8} />}
      {frame >= 120 && frame < 135 && <Audio src={staticFile('pop.mp3')} volume={0.8} />}
      {frame >= 1650 && frame < 1665 && <Audio src={staticFile('pop.mp3')} volume={0.9} />}

      {/* Scene Triggers: Whoosh sound on card slide-ins */}
      {frame >= 300 && frame < 315 && <Audio src={staticFile('whoosh.mp3')} volume={0.85} />}
      {frame >= 750 && frame < 765 && <Audio src={staticFile('whoosh.mp3')} volume={0.85} />}
      {frame >= 1200 && frame < 1215 && <Audio src={staticFile('whoosh.mp3')} volume={0.85} />}

      {/* --- CINEMATIC LIQUID GRADIENT BACKGROUND --- */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(circle at ${bgGlow1X}% ${bgGlow1Y}%, rgba(138, 43, 226, 0.45) 0%, transparent 50%),
            radial-gradient(circle at ${bgGlow2X}% ${bgGlow2Y}%, rgba(0, 210, 255, 0.35) 0%, transparent 50%),
            linear-gradient(${bgGradAngle}deg, #090314 0%, #15092B 50%, #061124 100%)
          `,
          zIndex: 1,
        }}
      />

      {/* Background Subtle Grid Texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: 0.4,
          zIndex: 2,
        }}
      />

      {/* Main Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px 40px',
        }}
      >
        {/* Brand Header Badge (Always Visible) */}
        <div
          style={{
            position: 'absolute',
            top: 70,
            display: 'flex',
            alignItems: 'center',
            gap: 14,
            padding: '12px 28px',
            background: 'rgba(255, 255, 255, 0.07)',
            backdropFilter: 'blur(16px)',
            borderRadius: 40,
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: '50%',
              background: '#00E5FF',
              boxShadow: '0 0 12px #00E5FF',
            }}
          />
          <span style={{ fontSize: 24, fontWeight: 700, letterSpacing: 1, color: '#FFFFFF' }}>
            PlanEx | پلن‌اکس
          </span>
        </div>

        {/* ================= SCENE 1 (0s - 10s / frames 0 - 300) ================= */}
        {frame >= 0 && frame <= 300 && (
          <div
            style={{
              opacity: scene1FadeOut,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              maxWidth: 900,
              gap: 40,
            }}
          >
            {/* Main Headline */}
            <h1
              style={{
                fontSize: 64,
                fontWeight: 900,
                lineHeight: 1.3,
                margin: 0,
                transform: `scale(${scene1Text1Spring}) translateY(${(1 - scene1Text1Spring) * 40}px)`,
                opacity: Math.min(1, scene1Text1Spring),
                background: 'linear-gradient(135deg, #FFFFFF 0%, #D0C6FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 10px 30px rgba(0,0,0,0.5)',
              }}
            >
              یک روتین فوق‌العاده ساده،
              <br />
              برای دستاوردهای بزرگ
            </h1>

            {/* Sub-Headline / App Name reveal */}
            {frame >= 120 && (
              <div
                style={{
                  transform: `scale(${scene1Text2Spring}) translateY(${(1 - scene1Text2Spring) * 30}px)`,
                  opacity: Math.min(1, scene1Text2Spring),
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 16,
                  marginTop: 20,
                }}
              >
                <div
                  style={{
                    fontSize: 48,
                    fontWeight: 800,
                    padding: '16px 44px',
                    borderRadius: 24,
                    background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.2) 0%, rgba(138, 43, 226, 0.3) 100%)',
                    border: '1.5px solid rgba(0, 229, 255, 0.5)',
                    boxShadow: '0 0 40px rgba(0, 229, 255, 0.3)',
                    color: '#00E5FF',
                  }}
                >
                  اپلیکیشن هوشمند پلن‌اکس
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= SCENE 2 (10s - 25s / frames 300 - 750) ================= */}
        {frame >= 300 && frame <= 750 && (
          <div
            style={{
              opacity: scene2FadeOut,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              gap: 50,
            }}
          >
            {/* Glassmorphism Phone Card with shot1.png */}
            <div
              style={{
                transform: `
                  translateX(${(1 - scene2CardSpring) * 600}px)
                  perspective(1200px)
                  rotateX(${cardFloatRotateX}deg)
                  rotateY(${cardFloatRotateY}deg)
                `,
                opacity: Math.min(1, scene2CardSpring),
                width: 720,
                height: 1200,
                borderRadius: 44,
                padding: 16,
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1.5px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.6), 0 0 50px rgba(138, 43, 226, 0.25)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
              }}
            >
              <img
                src={staticFile('shot1.png')}
                alt="Dashboard Screenshot"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 32,
                }}
              />
            </div>

            {/* Label Card */}
            <div
              style={{
                transform: `translateY(${(1 - scene2TextSpring) * 50}px)`,
                opacity: Math.min(1, scene2TextSpring),
                background: 'rgba(15, 10, 30, 0.85)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(0, 229, 255, 0.4)',
                borderRadius: 24,
                padding: '24px 40px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: 42,
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.3,
                }}
              >
                تایمر پومودورو: تمرکز عمیق روی اهداف
              </h2>
            </div>
          </div>
        )}

        {/* ================= SCENE 3 (25s - 40s / frames 750 - 1200) ================= */}
        {frame >= 750 && frame <= 1200 && (
          <div
            style={{
              opacity: scene3FadeOut,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              gap: 50,
            }}
          >
            {/* Glassmorphism Phone Card with shot2.png */}
            <div
              style={{
                transform: `
                  translateX(${(1 - scene3CardSpring) * -600}px)
                  perspective(1200px)
                  rotateX(${-cardFloatRotateX}deg)
                  rotateY(${-cardFloatRotateY}deg)
                `,
                opacity: Math.min(1, scene3CardSpring),
                width: 720,
                height: 1200,
                borderRadius: 44,
                padding: 16,
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1.5px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.6), 0 0 50px rgba(0, 210, 255, 0.25)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
              }}
            >
              <img
                src={staticFile('shot2.png')}
                alt="Pomodoro Screenshot"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 32,
                }}
              />
            </div>

            {/* Label Card */}
            <div
              style={{
                transform: `translateY(${(1 - scene3TextSpring) * 50}px)`,
                opacity: Math.min(1, scene3TextSpring),
                background: 'rgba(15, 10, 30, 0.85)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(138, 43, 226, 0.5)',
                borderRadius: 24,
                padding: '24px 40px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: 42,
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.3,
                }}
              >
                برنامه‌ریزی آسان: همه‌چیز تحت کنترل شماست
              </h2>
            </div>
          </div>
        )}

        {/* ================= SCENE 4 (40s - 55s / frames 1200 - 1650) ================= */}
        {frame >= 1200 && frame <= 1650 && (
          <div
            style={{
              opacity: scene4FadeOut,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
              gap: 50,
            }}
          >
            {/* Glassmorphism Phone Card with shot3.png */}
            <div
              style={{
                transform: `
                  translateX(${(1 - scene4CardSpring) * 600}px)
                  perspective(1200px)
                  rotateX(${cardFloatRotateX}deg)
                  rotateY(${cardFloatRotateY}deg)
                `,
                opacity: Math.min(1, scene4CardSpring),
                width: 720,
                height: 1200,
                borderRadius: 44,
                padding: 16,
                background: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1.5px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.6), 0 0 50px rgba(255, 0, 128, 0.25)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
              }}
            >
              <img
                src={staticFile('shot3.png')}
                alt="Analytics Screenshot"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: 32,
                }}
              />
            </div>

            {/* Label Card */}
            <div
              style={{
                transform: `translateY(${(1 - scene4TextSpring) * 50}px)`,
                opacity: Math.min(1, scene4TextSpring),
                background: 'rgba(15, 10, 30, 0.85)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 0, 128, 0.4)',
                borderRadius: 24,
                padding: '24px 40px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              }}
            >
              <h2
                style={{
                  margin: 0,
                  fontSize: 42,
                  fontWeight: 800,
                  color: '#FFFFFF',
                  lineHeight: 1.3,
                }}
              >
                تحلیل پیشرفت و حفظ انگیزه در مسیر موفقیت
              </h2>
            </div>
          </div>
        )}

        {/* ================= SCENE 5: OUTRO & CTA (55s - 60s / frames 1650 - 1800) ================= */}
        {frame >= 1650 && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: 40,
            }}
          >
            {/* Bold CTA Headline */}
            <h1
              style={{
                fontSize: 68,
                fontWeight: 900,
                margin: 0,
                transform: `scale(${scene5TextSpring})`,
                opacity: Math.min(1, scene5TextSpring),
                background: 'linear-gradient(135deg, #FFFFFF 0%, #E0D5FF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1.3,
              }}
            >
              همین الان روتین خودت رو بساز
            </h1>

            {/* Website URL Card with pulsing glow */}
            <div
              style={{
                transform: `scale(${scene5SubtextSpring})`,
                opacity: Math.min(1, scene5SubtextSpring),
                marginTop: 20,
                padding: '24px 60px',
                borderRadius: 32,
                background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.25) 0%, rgba(138, 43, 226, 0.35) 100%)',
                backdropFilter: 'blur(20px)',
                border: '2px solid rgba(0, 229, 255, 0.8)',
                boxShadow: `0 0 ${40 * ctaGlowPulse}px rgba(0, 229, 255, ${0.6 * ctaGlowPulse})`,
              }}
            >
              <span
                style={{
                  fontSize: 56,
                  fontWeight: 900,
                  color: '#00E5FF',
                  letterSpacing: 2,
                  direction: 'ltr',
                  display: 'inline-block',
                }}
              >
                planexapp.ir
              </span>
            </div>
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};

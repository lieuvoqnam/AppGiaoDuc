/**
 * audio.js - Web Audio API Sound Synthesizer
 * Tự động tạo hiệu ứng âm thanh sống động trong trò chơi mà không cần tải file MP3 ngoài.
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.initContext();
    this.setupGestureUnlock();
  }

  initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
  }

  // Tự động kích hoạt âm thanh ngay cú chạm đầu tiên trên màn hình mà không báo warning
  setupGestureUnlock() {
    const unlock = () => {
      this.initContext();
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('touchstart', unlock);
      window.removeEventListener('keydown', unlock);
    };
    window.addEventListener('pointerdown', unlock, { passive: true });
    window.addEventListener('touchstart', unlock, { passive: true });
    window.addEventListener('keydown', unlock, { passive: true });
  }

  toggleSound() {
    this.enabled = !this.enabled;
    return this.enabled;
  }

  // Âm thanh khi nhấc mảnh ghép
  playPickup() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(380, now);
      osc.frequency.exponentialRampToValueAtTime(600, now + 0.08);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.09);
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }

  // Âm thanh khi mảnh ghép bắt dính đúng vị trí (Snap / Ding đã tai!)
  playSnap() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;

      // Note 1: Bright harmonic chime
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(784, now); // G5
      osc1.frequency.exponentialRampToValueAtTime(1046.5, now + 0.06); // C6
      gain1.gain.setValueAtTime(0.2, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc1.connect(gain1);
      gain1.connect(this.ctx.destination);
      osc1.start(now);
      osc1.stop(now + 0.36);

      // Note 2: Sparkle overtone
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(1568, now + 0.05); // G6
      gain2.gain.setValueAtTime(0.12, now + 0.05);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.45);

      osc2.connect(gain2);
      gain2.connect(this.ctx.destination);
      osc2.start(now + 0.05);
      osc2.stop(now + 0.46);
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }

  // Âm thanh khi thả sai hoặc đặt nhầm chỗ
  playError() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(130, now + 0.18);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.19);
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }

  // Âm thanh khi hoàn thành một Vùng miền (Arpeggio chiến thắng)
  playRegionComplete() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const noteStart = now + idx * 0.1;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, noteStart);

        gain.gain.setValueAtTime(0.15, noteStart);
        gain.gain.exponentialRampToValueAtTime(0.001, noteStart + 0.4);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(noteStart);
        osc.stop(noteStart + 0.42);
      });
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }

  // Nhạc mừng vinh quang khi hoàn thành toàn bộ bản đồ 63 tỉnh thành!
  playVictoryFanfare() {
    if (!this.enabled) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const chords = [
        { time: 0.0, freqs: [523.25, 659.25, 783.99], dur: 0.25 }, // C
        { time: 0.25, freqs: [587.33, 698.46, 880.00], dur: 0.25 }, // Dm
        { time: 0.50, freqs: [659.25, 783.99, 987.77], dur: 0.3 },  // Em
        { time: 0.85, freqs: [783.99, 987.77, 1174.66], dur: 0.3 }, // G
        { time: 1.20, freqs: [1046.50, 1318.51, 1567.98, 2093.00], dur: 1.2 } // High C Major
      ];

      chords.forEach(c => {
        c.freqs.forEach(f => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          const t = now + c.time;

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(f, t);

          gain.gain.setValueAtTime(0.1, t);
          gain.gain.exponentialRampToValueAtTime(0.001, t + c.dur);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start(t);
          osc.stop(t + c.dur + 0.05);
        });
      });
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }
}

window.soundEngine = new SoundEngine();

// EduAudio Global Adapter for Subject Apps
window.EduAudio = {
  play: function(type) {
    if (!window.soundEngine) return;
    if (window.soundEngine.ctx && window.soundEngine.ctx.state === 'suspended') {
      window.soundEngine.ctx.resume().catch(() => {});
    }
    const t = (type || '').toLowerCase();
    if (t === 'correct' || t === 'success' || t === 'snap' || t === 'ding') {
      window.soundEngine.playSnap();
    } else if (t === 'wrong' || t === 'error' || t === 'fail') {
      window.soundEngine.playError();
    } else if (t === 'victory' || t === 'fanfare' || t === 'complete' || t === 'reward' || t === 'cheer' || t === 'perfect') {
      window.soundEngine.playVictoryFanfare();
    } else if (t === 'level' || t === 'levelup' || t === 'good' || t === 'pass') {
      window.soundEngine.playRegionComplete();
    } else {
      window.soundEngine.playPickup();
    }
  },
  toggleMute: function() {
    if (!window.soundEngine) return false;
    const isMuted = !window.soundEngine.toggleSound();
    return isMuted;
  }
};

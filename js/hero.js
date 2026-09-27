/**
 * ============================================================================
 * HERO CINEMATIC CONTROLLER - PENGADILAN NEGERI PAGAR ALAM
 * ============================================================================
 * Fitur:
 * 1. Minimalis 100vh tanpa gulir mouse (No mouse scroll required).
 * 2. Visual Lady Justice 50 frame CGI bersih tanpa bokeh/ambient gif.
 * 3. Animasi teks sinematik Zoom-In & Zoom-Out saat pergantian tahap.
 * 4. Kontrol otomatis putar/jeda (Auto-advance with pause & bolak-balik).
 * 5. Audio sintesis ketukan kayu palu sidang Web Audio API saat tahap 3.
 * 6. Quick Apps Dock & Modal 10 Layanan Digital hasil scraping.
 * ============================================================================
 */

(function () {
  'use strict';

  const config = window.heroConfig || {};

  /**
   * Helper SVG Generator for Digital Services Icons
   */
  function getServiceIconSvg(iconType) {
    switch (iconType) {
      case 'gavel':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m14 13-7.5 7.5a2.12 2.12 0 1 1-3-3L11 10"/><path d="m16 16 6-6"/><path d="m8 8 6-6"/><path d="m9 7 8 8"/><path d="m21 11-8-8"/></svg>`;
      case 'scales':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h18"/></svg>`;
      case 'book':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/></svg>`;
      case 'court':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M5 21V10"/><path d="M19 21V10"/><path d="M9 21V10"/><path d="M15 21V10"/><path d="m2 10 10-7 10 7"/><path d="M12 3v7"/></svg>`;
      case 'shield':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`;
      case 'calendar':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><circle cx="12" cy="15" r="2"/></svg>`;
      case 'prison':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 3v18"/><path d="M11 3v18"/><path d="M15 3v18"/><path d="M19 3v18"/></svg>`;
      case 'certificate':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><line x1="15" y1="8" x2="17" y2="8"/><line x1="15" y1="12" x2="17" y2="12"/><path d="m14 16 2 2 4-4"/></svg>`;
      case 'eye':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`;
      case 'maps':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`;
      default:
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
    }
  }

  /**
   * Helper SVG Generator for Social Links
   */
  function getSocialIconSvg(socialType) {
    switch (socialType) {
      case 'youtube':
        return `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`;
      case 'instagram':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`;
      case 'globe':
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;
      case 'whatsapp':
        return `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.476-.15-.677.15-.2.301-.777.98-.953 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.5-1.786-1.676-2.087-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.233-.244-.587-.493-.507-.677-.517l-.577-.01c-.2 0-.526.075-.802.376-.276.301-1.053 1.029-1.053 2.509 0 1.48 1.078 2.909 1.229 3.11.15.2 2.122 3.24 5.141 4.544.718.31 1.278.496 1.716.635.722.23 1.38.197 1.9.12.58-.086 1.78-.727 2.03-1.43.251-.703.251-1.305.176-1.43-.076-.125-.276-.201-.577-.351zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.18L2 22l4.981-1.398A9.957 9.957 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/></svg>`;
      default:
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>`;
    }
  }

  /**
   * --------------------------------------------------------------------------
   * 1. WEB AUDIO GAVEL SYNTHESIZER
   * Ketukan kayu palu sidang majelis hakim realistis saat mencapai tahap 3.
   * --------------------------------------------------------------------------
   */
  class GavelSoundSynthesizer {
    constructor() {
      this.ctx = null;
    }

    initContext() {
      if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
    }

    playStrike() {
      try {
        this.initContext();
        if (!this.ctx) return;

        const now = this.ctx.currentTime;

        // 1. Woody Impact Oscillator
        const osc = this.ctx.createOscillator();
        const gainNode = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(260, now);
        osc.frequency.exponentialRampToValueAtTime(45, now + 0.18);

        gainNode.gain.setValueAtTime(0.7, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(800, now);

        osc.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.3);

        // 2. High-Frequency Wood Click (Transient)
        const bufferSize = this.ctx.sampleRate * 0.04;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.2));
        }

        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;

        const noiseFilter = this.ctx.createBiquadFilter();
        noiseFilter.type = 'bandpass';
        noiseFilter.frequency.setValueAtTime(1400, now);
        noiseFilter.Q.setValueAtTime(3, now);

        const noiseGain = this.ctx.createGain();
        noiseGain.gain.setValueAtTime(0.45, now);
        noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

        noise.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(this.ctx.destination);

        noise.start(now);
      } catch (e) {
        // silent fallback
      }
    }
  }

  /**
   * --------------------------------------------------------------------------
   * 2. HERO CINEMATIC CONTROLLER (100VH MINIMALIST - NO MOUSE SCROLL)
   * --------------------------------------------------------------------------
   */
  class HeroCinematicController {
    constructor() {
      this.canvas = document.getElementById('heroCanvas');
      this.poster = document.getElementById('heroPoster');
      this.wrapper = document.getElementById('heroVideoWrapper');
      this.storyCard = document.getElementById('heroStoryCard');
      this.stepperEl = document.getElementById('heroStepper');
      this.metaStatusEl = document.getElementById('heroMetaStatus');
      this.metricsGridEl = document.getElementById('heroMetricsGrid');
      this.servicesListEl = document.getElementById('heroServicesList');

      this.storyline = config.storyline || [];
      this.digitalServices = config.digitalServices || [];
      this.currentStep = 0;
      this.totalSteps = this.storyline.length;

      // 150 CGI Frames State
      this.totalFrames = config.media?.totalFrames || 150;
      this.framesPath = config.media?.framesPath || 'assets/frames/frame_';
      this.framesExt = config.media?.framesExt || '.jpg';
      this.images = [];
      this.loadedCount = 0;

      // Smooth Physics State (Frame Lerp)
      this.targetFrame = 0;
      this.currentFrame = 0;
      this.lastDrawnFrame = -1;
      this.gavelSound = new GavelSoundSynthesizer();

      // Mouse Wheel & Scroll Throttle State
      this.isWheelThrottled = false;
      this.wheelThrottleMs = 600;
      this.canLeaveHero = false;
      this.arrivedAtLastStepAt = 0;

      this.init();
    }

    init() {
      if (!this.canvas) return;

      this.ctx = this.canvas.getContext('2d', { alpha: false });
      this.handleResize();
      window.addEventListener('resize', () => this.handleResize(), { passive: true });

      // Preload 150 CGI Frames
      this.preloadFrames();

      // Render Stepper, Services List, and Initial Step Content
      this.renderStepper();
      this.renderServicesList();
      this.renderStepContent(0, false);
      this.updateScrollHint();

      // Attach Interactive Mouse Scroll, Touch, and Keyboard Navigation
      this.initScrollNavigation();

      // Start Frame Render Loop
      this.renderLoop();
    }

    handleResize() {
      if (!this.canvas || !this.wrapper) return;
      const rect = this.wrapper.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      this.canvas.width = Math.round(rect.width * dpr);
      this.canvas.height = Math.round(rect.height * dpr);

      this.drawFrame(Math.round(this.currentFrame));
    }

    preloadFrames() {
      for (let i = 1; i <= this.totalFrames; i++) {
        const img = new Image();
        const padIndex = String(i).padStart(3, '0');
        img.src = `${this.framesPath}${padIndex}${this.framesExt}`;

        img.onload = () => {
          this.loadedCount++;
          if (i === 1) {
            this.drawFrame(0);
            this.canvas.classList.add('is-active');
            if (this.poster) {
              setTimeout(() => this.poster.classList.add('fade-out'), 250);
            }
          }
        };

        this.images.push(img);
      }
    }

    initScrollNavigation() {
      // 1. Mouse Wheel Scroll Driven Stage Transition
      window.addEventListener('wheel', (e) => {
        const isAtHero = window.scrollY <= 10;

        // If user is scrolled down in body content, allow normal native scroll
        if (!isAtHero) {
          return;
        }

        if (e.deltaY > 10) {
          // SCROLLING DOWN
          if (this.currentStep < this.totalSteps - 1) {
            // "Belum habis view diatas": JANGAN SCROLL KEBAWAH, WAJIB TAHAP BERIKUTNYA DAHULU!
            e.preventDefault();

            if (!this.isWheelThrottled) {
              this.isWheelThrottled = true;
              this.nextStep();
              setTimeout(() => {
                this.isWheelThrottled = false;
              }, this.wheelThrottleMs);
            }
          } else {
            // Sudah di tahap terakhir (Tahap 04):
            // Periksa apakah user sudah melihat Tahap 04 dan jeda kedatangan selesai
            const timeSinceArrival = Date.now() - this.arrivedAtLastStepAt;

            if (!this.canLeaveHero || timeSinceArrival < 700) {
              // Masih dalam transisi/jeda Tahap 04, tahan scroll agar user bisa melihat tahap akhir
              e.preventDefault();
            } else {
              // "Sudah habis view diatas": jalankan scroll halus ke bagian konten bawah!
              const nextSection = document.getElementById('layanan-peradilan');
              if (nextSection && !this.isWheelThrottled) {
                this.isWheelThrottled = true;
                e.preventDefault();
                nextSection.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                  this.isWheelThrottled = false;
                }, 900);
              }
            }
          }
        } else if (e.deltaY < -10) {
          // SCROLLING UP
          if (this.currentStep > 0) {
            e.preventDefault();
            this.canLeaveHero = false;

            if (!this.isWheelThrottled) {
              this.isWheelThrottled = true;
              this.prevStep();
              setTimeout(() => {
                this.isWheelThrottled = false;
              }, this.wheelThrottleMs);
            }
          }
        }
      }, { passive: false });

      // Guard: Pastikan window tidak scroll ke bawah saat alur tahap belum selesai
      window.addEventListener('scroll', () => {
        if (this.currentStep < this.totalSteps - 1 && window.scrollY > 0) {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      }, { passive: false });

      // 2. Mobile & Tablet Touch Swipe Navigation
      let touchStartY = 0;
      let touchStartX = 0;

      window.addEventListener('touchstart', (e) => {
        if (e.touches && e.touches[0]) {
          touchStartY = e.touches[0].clientY;
          touchStartX = e.touches[0].clientX;
        }
      }, { passive: true });

      window.addEventListener('touchmove', (e) => {
        if (window.scrollY <= 10 && this.currentStep < this.totalSteps - 1) {
          if (e.touches && e.touches[0]) {
            const diffY = touchStartY - e.touches[0].clientY;
            if (diffY > 0) {
              // Mencegah scroll layar ke bawah jika alur belum selesai
              e.preventDefault();
            }
          }
        }
      }, { passive: false });

      window.addEventListener('touchend', (e) => {
        if (window.scrollY > 15) return;
        if (!e.changedTouches || !e.changedTouches[0]) return;
        const diffY = touchStartY - e.changedTouches[0].clientY;
        const diffX = touchStartX - e.changedTouches[0].clientX;

        // Verify vertical gesture dominates
        if (Math.abs(diffY) > 40 && Math.abs(diffY) > Math.abs(diffX)) {
          if (diffY > 0) {
            // Swipe Up -> Next Stage / Scroll to content if finished
            if (this.currentStep < this.totalSteps - 1) {
              this.nextStep();
            } else if (this.canLeaveHero) {
              const nextSection = document.getElementById('layanan-peradilan');
              if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
            }
          } else if (diffY < 0 && this.currentStep > 0) {
            // Swipe Down -> Prev Stage
            this.prevStep();
          }
        }
      }, { passive: true });

      // 3. Keyboard Arrow Keys (Left / Right / Up / Down / PageUp / PageDown / Space)
      window.addEventListener('keydown', (e) => {
        if (['TEXTAREA', 'INPUT'].includes(document.activeElement.tagName)) return;

        if (window.scrollY <= 15) {
          if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
            if (this.currentStep < this.totalSteps - 1) {
              e.preventDefault();
              this.nextStep();
            } else if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
              const nextSection = document.getElementById('layanan-peradilan');
              if (nextSection && this.canLeaveHero) {
                e.preventDefault();
                nextSection.scrollIntoView({ behavior: 'smooth' });
              }
            }
          } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
            if (this.currentStep > 0) {
              e.preventDefault();
              this.prevStep();
            }
          }
        }
      });
    }

    nextStep() {
      const nextIdx = Math.min(this.currentStep + 1, this.totalSteps - 1);
      this.goToStep(nextIdx, 'next');
    }

    prevStep() {
      const prevIdx = Math.max(this.currentStep - 1, 0);
      this.goToStep(prevIdx, 'prev');
    }

    goToStep(newStepIdx, dir = 'next') {
      if (newStepIdx === this.currentStep) return;

      this.currentStep = newStepIdx;
      const step = this.storyline[this.currentStep];
      if (!step) return;

      // Update frame target
      this.targetFrame = step.frameTarget;

      // Jeda jika mencapai tahap akhir sebelum bisa scroll ke bawah
      if (newStepIdx === this.totalSteps - 1) {
        this.arrivedAtLastStepAt = Date.now();
        this.canLeaveHero = false;
        setTimeout(() => {
          if (this.currentStep === this.totalSteps - 1) {
            this.canLeaveHero = true;
            this.updateScrollHint();
          }
        }, 700);
      } else {
        this.canLeaveHero = false;
      }

      // Play gavel sound effect if entering stage 3 (Palu Sidang)
      if (step.id === 'palu' || step.soundEffect === 'gavel') {
        this.gavelSound.playStrike();
      }

      this.renderStepper();
      this.updateScrollHint();

      // Trigger Text Zoom-Out, Swap Content, then Text Zoom-In
      if (this.storyCard) {
        this.storyCard.classList.remove('is-active', 'is-zooming-in-prep');
        this.storyCard.classList.add('is-zooming-out');

        setTimeout(() => {
          this.renderStepContent(newStepIdx, true);
          this.storyCard.classList.remove('is-zooming-out');
          this.storyCard.classList.add('is-zooming-in-prep');

          // Force reflow
          void this.storyCard.offsetWidth;

          this.storyCard.classList.remove('is-zooming-in-prep');
          this.storyCard.classList.add('is-active');
        }, 320);
      } else {
        this.renderStepContent(newStepIdx, false);
      }
    }

    updateScrollHint() {
      const hintText = document.querySelector('#heroScrollHint .scroll-hint-text');
      const hintEl = document.getElementById('heroScrollHint');
      if (!hintText || !hintEl) return;

      if (this.currentStep < this.totalSteps - 1) {
        const nextStep = this.storyline[this.currentStep + 1];
        hintText.textContent = nextStep 
          ? `Gulir mouse untuk Tahap ${nextStep.stepNumber}: ${nextStep.stepTitle}`
          : 'Gulir mouse untuk tahap berikutnya';
        hintEl.classList.remove('is-finished');
      } else {
        hintText.innerHTML = `Tahap selesai — <strong>gulir ke bawah untuk layanan peradilan ↓</strong>`;
        hintEl.classList.add('is-finished');
      }
    }

    renderStepper() {
      if (!this.stepperEl) return;
      this.stepperEl.innerHTML = '';

      this.storyline.forEach((step, idx) => {
        const pill = document.createElement('button');
        pill.type = 'button';
        pill.className = `step-pill ${idx === this.currentStep ? 'active' : ''} ${idx < this.currentStep ? 'passed' : ''}`;
        pill.setAttribute('aria-label', `Pilih Tahap ${step.stepNumber}: ${step.stepTitle}`);

        pill.innerHTML = `
          <span class="step-pill-dot" aria-hidden="true"></span>
          <span>${step.stepNumber} ${step.stepTitle}</span>
        `;

        pill.addEventListener('click', () => {
          this.goToStep(idx, idx > this.currentStep ? 'next' : 'prev');
        });

        this.stepperEl.appendChild(pill);

        if (idx < this.storyline.length - 1) {
          const sep = document.createElement('span');
          sep.className = 'step-line-sep';
          sep.setAttribute('aria-hidden', 'true');
          this.stepperEl.appendChild(sep);
        }
      });
    }

    renderServicesList() {
      if (!this.servicesListEl || !this.digitalServices) return;
      this.servicesListEl.innerHTML = '';

      // Tampilkan 6 layanan utama resmi hasil scraping dalam format daftar list
      const listItems = this.digitalServices.slice(0, 6);

      listItems.forEach((item) => {
        const a = document.createElement('a');
        a.href = item.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'service-list-item';
        a.setAttribute('aria-label', `Buka layanan ${item.title}: ${item.desc}`);
        a.innerHTML = `
          <div class="service-item-icon" aria-hidden="true">
            ${getServiceIconSvg(item.iconType)}
          </div>
          <div class="service-item-content">
            <div class="service-item-top">
              <span class="service-item-name">${item.title}</span>
              <span class="service-item-badge">${item.badge}</span>
            </div>
            <p class="service-item-sub">${item.desc}</p>
          </div>
          <div class="service-item-arrow" aria-hidden="true">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </div>
        `;
        this.servicesListEl.appendChild(a);
      });
    }

    renderStepContent(index, animate = false) {
      const step = this.storyline[index];
      if (!step) return;

      // Eyebrow
      const eyebrowText = document.getElementById('heroEyebrowText');
      if (eyebrowText) eyebrowText.textContent = step.eyebrow;

      // Headline
      const headline = document.getElementById('heroHeadline');
      if (headline) headline.innerHTML = step.headline;

      // Description
      const desc = document.getElementById('heroDescription');
      if (desc) desc.textContent = step.description;

      // Status Bar
      if (this.metaStatusEl) {
        this.metaStatusEl.innerHTML = `Tahap: <strong class="meta-label">${step.stepNumber} / 04 — ${step.stepTitle}</strong>`;
      }

      // Render 3 Uniform Metrics Cards (Fills left side consistently across all steps)
      if (this.metricsGridEl && step.metrics) {
        this.metricsGridEl.innerHTML = '';
        step.metrics.forEach((m, mIdx) => {
          const card = document.createElement('div');
          card.className = `metric-pill-card ${mIdx === 0 ? 'active' : ''}`;
          card.innerHTML = `
            <span class="metric-card-label">
              <span style="color:var(--color-gold-primary);">✦</span> ${m.label}
            </span>
            <span class="metric-card-val">${m.value}</span>
          `;
          this.metricsGridEl.appendChild(card);
        });
      }
    }

    renderLoop() {
      // Smooth frame interpolation (Lerp 0.08 for movie-trailer smoothness)
      const diff = this.targetFrame - this.currentFrame;

      if (Math.abs(diff) > 0.02) {
        this.currentFrame += diff * 0.08;
        const frameIndex = Math.min(Math.max(Math.round(this.currentFrame), 0), this.totalFrames - 1);

        if (frameIndex !== this.lastDrawnFrame) {
          this.drawFrame(frameIndex);
          this.lastDrawnFrame = frameIndex;
        }
      }

      window.requestAnimationFrame(() => this.renderLoop());
    }

    drawFrame(index) {
      if (!this.ctx || !this.canvas) return;
      const validIndex = Math.min(Math.max(index, 0), this.totalFrames - 1);
      const img = this.images[validIndex];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const cw = this.canvas.width;
      const ch = this.canvas.height;
      const iw = img.naturalWidth;
      const ih = img.naturalHeight;

      const imgAspect = iw / ih;
      const canvasAspect = cw / ch;

      let drawWidth, drawHeight, drawX, drawY;

      if (canvasAspect > imgAspect) {
        drawWidth = cw;
        drawHeight = cw / imgAspect;
        drawX = 0;
        drawY = (ch - drawHeight) * 0.5;
      } else {
        drawHeight = ch;
        drawWidth = ch * imgAspect;
        const focal = window.innerWidth <= 868 ? 0.68 : 0.72;
        drawX = (cw - drawWidth) * focal;
        drawY = 0;
      }

      this.ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
    }
  }

  /**
   * --------------------------------------------------------------------------
   * 3. DIGITAL SERVICES MODAL MANAGER (SCRAPED DATA S.ID & PN PAGAR ALAM)
   * --------------------------------------------------------------------------
   */
  class DigitalServicesModalManager {
    constructor() {
      this.modal = document.getElementById('digitalServicesModal');
      this.closeBtn = document.getElementById('btnModalClose');
      this.triggers = document.querySelectorAll('.btn-trigger-modal');
      this.gridEl = document.getElementById('modalAppsGrid');
      this.socialsEl = document.getElementById('modalSocialsList');

      this.services = config.digitalServices || [];
      this.socials = config.socialLinks || [];

      this.init();
    }

    init() {
      if (!this.modal) return;

      this.renderAppsGrid();
      this.renderSocials();

      // Trigger buttons open modal
      this.triggers.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          this.open();
        });
      });

      // Close button
      if (this.closeBtn) {
        this.closeBtn.addEventListener('click', () => this.close());
      }

      // Close on clicking backdrop outside card
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) {
          this.close();
        }
      });

      // Close on ESC key
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.modal.classList.contains('is-open')) {
          this.close();
        }
      });
    }

    open() {
      if (!this.modal) return;
      this.modal.classList.add('is-open');
      this.modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    close() {
      if (!this.modal) return;
      this.modal.classList.remove('is-open');
      this.modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    renderAppsGrid() {
      if (!this.gridEl || !this.services) return;
      this.gridEl.innerHTML = '';

      this.services.forEach((app) => {
        const card = document.createElement('a');
        card.href = app.url;
        card.target = '_blank';
        card.rel = 'noopener noreferrer';
        card.className = 'digital-app-card';
        card.setAttribute('aria-label', `Buka layanan ${app.title}: ${app.desc}`);

        card.innerHTML = `
          <div class="app-card-icon-box" aria-hidden="true">
            ${getServiceIconSvg(app.iconType)}
          </div>
          <div class="app-card-info">
            <div class="app-card-title-row">
              <span class="app-card-title">${app.title}</span>
              <span class="app-card-badge">${app.badge}</span>
            </div>
            <p class="app-card-desc">${app.desc}</p>
          </div>
          <div class="app-card-arrow" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
          </div>
        `;

        this.gridEl.appendChild(card);
      });
    }

    renderSocials() {
      if (!this.socialsEl || !this.socials) return;
      this.socialsEl.innerHTML = '';

      this.socials.forEach((item) => {
        const a = document.createElement('a');
        a.href = item.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'modal-social-btn';
        a.setAttribute('aria-label', `${item.name}: ${item.handle}`);
        a.innerHTML = getSocialIconSvg(item.icon);
        this.socialsEl.appendChild(a);
      });
    }
  }

  /**
   * --------------------------------------------------------------------------
   * 4. FLOATING GLASS NAVIGATION MANAGER
   * --------------------------------------------------------------------------
   */
  class HeroNavigationManager {
    constructor() {
      this.nav = document.getElementById('heroNavigation');
      this.toggleBtn = document.getElementById('mobileNavToggle');
      this.drawer = document.getElementById('mobileDrawer');
      this.closeBtn = document.getElementById('mobileNavClose');
      this.drawerLinks = document.querySelectorAll('.mobile-nav-link');

      this.init();
    }

    init() {
      if (!this.nav) return;

      const onScroll = () => {
        if (window.scrollY > 40) {
          this.nav.classList.add('scrolled');
        } else {
          this.nav.classList.remove('scrolled');
        }
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      if (this.toggleBtn && this.drawer) {
        const openDrawer = () => {
          this.drawer.classList.add('open');
          document.body.style.overflow = 'hidden';
          this.toggleBtn.setAttribute('aria-expanded', 'true');
        };

        const closeDrawer = () => {
          this.drawer.classList.remove('open');
          document.body.style.overflow = '';
          this.toggleBtn.setAttribute('aria-expanded', 'false');
        };

        this.toggleBtn.addEventListener('click', openDrawer);
        if (this.closeBtn) this.closeBtn.addEventListener('click', closeDrawer);

        this.drawerLinks.forEach((link) => {
          link.addEventListener('click', closeDrawer);
        });
      }
    }
  }

  /**
   * --------------------------------------------------------------------------
   * INITIALIZE SYSTEM WHEN DOM READY
   * --------------------------------------------------------------------------
   */
  document.addEventListener('DOMContentLoaded', () => {
    new HeroNavigationManager();
    new HeroCinematicController();
    new DigitalServicesModalManager();
  });

})();

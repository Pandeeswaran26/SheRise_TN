/**
 * IntroductionModal.js - SheRise TN Native Video Player Experience
 * 
 * Direct, compact, non-scrolling video player modal:
 * - Real HTML5 <video> element with full playback control
 * - Play / Pause, interactive Seek Bar, Elapsed Time & Duration, Mute/Unmute, and Fullscreen
 * - Pause playback immediately upon modal close
 * - Graceful handling of loading errors and missing video assets
 * - Ability to select a local video from device or generate an instant SheRise sample clip
 * - Strict zero-scroll layout designed specifically for mobile screens
 * - Full bilingual (English & Tamil) support
 */

export function showIntroductionModal({ currentLang = 'en', onClose } = {}) {
  // Remove existing modal if any
  const existing = document.getElementById('sheriseIntroModalBackdrop');
  if (existing) {
    try {
      const vid = existing.querySelector('video');
      if (vid) {
        vid.pause();
        vid.removeAttribute('src');
        vid.load();
      }
    } catch (e) {}
    existing.remove();
  }

  const content = {
    en: {
      modalTitle: 'SheRise TN — Introduction Video',
      badgeText: 'Introduction Video',
      closeAria: 'Close video player',
      noVideoTitle: 'Introduction Video Ready',
      noVideoDesc: 'Ready for your video file at <code>public/videos/sherise_intro.mp4</code>.',
      btnSelectFile: 'Choose Local Video',
      btnPlaySample: 'Play Sample Clip',
      btnRetry: 'Retry Asset',
      loadingText: 'Loading video…',
      playLabel: 'Play',
      pauseLabel: 'Pause',
      muteLabel: 'Mute',
      unmuteLabel: 'Unmute',
      fullscreenLabel: 'Fullscreen',
      tip: 'Tap video to play/pause • Tap X to return'
    },
    ta: {
      modalTitle: 'ஷி ரைஸ் தமிழ்நாடு — அறிமுக காணொளி',
      badgeText: 'அறிமுக காணொளி',
      closeAria: 'காணொளி திரையை மூடு',
      noVideoTitle: 'அறிமுக காணொளி தயாராக உள்ளது',
      noVideoDesc: '<code>public/videos/sherise_intro.mp4</code> கோப்பிற்கு அமைக்கப்பட்டுள்ளது.',
      btnSelectFile: 'காணொளியைத் தேர்ந்தெடுக்கவும்',
      btnPlaySample: 'மாதிரி காணொளி இயக்கு',
      btnRetry: 'மீண்டும் முயற்சி செய்க',
      loadingText: 'காணொளி ஏற்றப்படுகிறது…',
      playLabel: 'இயக்கு',
      pauseLabel: 'நிறுத்து',
      muteLabel: 'ஒலியடக்கு',
      unmuteLabel: 'ஒலி இயக்கு',
      fullscreenLabel: 'முழுத்திரை',
      tip: 'இயக்க/நிறுத்த தட்டவும் • திரும்ப X தட்டவும்'
    }
  };

  const t = content[currentLang] || content.en;

  const backdrop = document.createElement('div');
  backdrop.id = 'sheriseIntroModalBackdrop';
  backdrop.className = 'sherise-video-modal-backdrop';
  backdrop.setAttribute('role', 'dialog');
  backdrop.setAttribute('aria-modal', 'true');
  backdrop.setAttribute('aria-label', t.modalTitle);

  backdrop.innerHTML = `
    <div class="sherise-video-card animate-modal-pop" id="sheriseVideoCard">
      
      <!-- 1. Header Bar -->
      <div class="video-modal-header">
        <div class="video-badge-pill">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#FFFFFF">
            <polygon points="5 3 19 12 5 21 5 3"/>
          </svg>
          <span>${t.badgeText}</span>
        </div>
        <button class="video-btn-close" id="btnIntroClose" aria-label="${t.closeAria}" title="${t.closeAria}">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <!-- 2. Video Stage Viewport (16:9 Standard Ratio) -->
      <div class="video-viewport-stage" id="videoViewportStage">
        
        <video 
          id="sheriseIntroVideo" 
          class="sherise-html5-video" 
          playsinline 
          webkit-playsinline 
          preload="metadata"
          poster="/sherise_onboarding_canvas.png"
        >
          <source src="/videos/sherise_intro.mp4" type="video/mp4" />
          <source src="/videos/sherise_intro.webm" type="video/webm" />
          <source src="/sherise_intro.mp4" type="video/mp4" />
        </video>

        <!-- Big Center Play/Pause Overlay -->
        <button class="video-big-play-btn" id="btnBigPlayOverlay" aria-label="${t.playLabel}">
          <div class="play-pulse-ring"></div>
          <svg class="icon-big-play" width="30" height="30" viewBox="0 0 24 24" fill="#FFFFFF">
            <polygon points="6 3 20 12 6 21 6 3"/>
          </svg>
        </button>

        <!-- Loading / Buffering Spinner Overlay -->
        <div class="video-buffering-overlay" id="videoBufferingOverlay" style="display: none;">
          <div class="video-spinner"></div>
          <span>${t.loadingText}</span>
        </div>

        <!-- Graceful Missing / Error Asset Card -->
        <div class="video-asset-placeholder" id="videoAssetPlaceholder" style="display: none;">
          <div class="placeholder-icon-wrap">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C084FC" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="23 7 16 12 23 17 23 7"></polygon>
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
            </svg>
          </div>
          <h3 class="placeholder-title">${t.noVideoTitle}</h3>
          <p class="placeholder-desc">${t.noVideoDesc}</p>
          
          <div class="placeholder-btn-group">
            <label class="btn-picker-label">
              <input type="file" id="localVideoFileInput" accept="video/mp4,video/webm,video/*" style="display: none;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              <span>${t.btnSelectFile}</span>
            </label>

            <button class="btn-generate-sample" id="btnGenerateSample">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              <span>${t.btnPlaySample}</span>
            </button>
          </div>
        </div>

      </div>

      <!-- 3. Integrated Video Controls Dock -->
      <div class="video-controls-dock" id="videoControlsDock">
        
        <!-- Interactive Range Slider Seek Bar -->
        <div class="video-seek-wrapper">
          <input 
            type="range" 
            class="video-seek-slider" 
            id="videoSeekBar" 
            min="0" 
            max="100" 
            step="0.1" 
            value="0"
            aria-label="Seek Video"
          />
        </div>

        <!-- Controls Action Row -->
        <div class="video-controls-row">
          
          <!-- Left: Play/Pause + Time Counter -->
          <div class="controls-left-cluster">
            <button class="btn-video-ctrl" id="btnCtrlPlayPause" aria-label="${t.playLabel}" title="${t.playLabel}">
              <svg class="icon-ctrl-play" width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="6 3 20 12 6 21 6 3"/>
              </svg>
              <svg class="icon-ctrl-pause" width="17" height="17" viewBox="0 0 24 24" fill="currentColor" style="display: none;">
                <rect x="6" y="4" width="4" height="16" rx="1"/>
                <rect x="14" y="4" width="4" height="16" rx="1"/>
              </svg>
            </button>

            <div class="video-time-display" id="videoTimeDisplay">
              <span id="timeCurrent">00:00</span>
              <span class="time-sep">/</span>
              <span id="timeDuration">00:00</span>
            </div>
          </div>

          <!-- Right: Mute/Volume + Fullscreen -->
          <div class="controls-right-cluster">
            <button class="btn-video-ctrl" id="btnVideoMute" aria-label="${t.muteLabel}" title="${t.muteLabel}">
              <svg class="icon-volume-on" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
              </svg>
              <svg class="icon-volume-muted" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: none;">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <line x1="23" y1="9" x2="17" y2="15"></line>
                <line x1="17" y1="9" x2="23" y2="15"></line>
              </svg>
            </button>

            <button class="btn-video-ctrl" id="btnVideoFullscreen" aria-label="${t.fullscreenLabel}" title="${t.fullscreenLabel}">
              <svg class="icon-fs-enter" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
              </svg>
              <svg class="icon-fs-exit" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display: none;">
                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
              </svg>
            </button>
          </div>

        </div>

      </div>

      <!-- 4. Subtle Footer Info Strip -->
      <div class="video-footer-info">
        <span class="video-tip-text">${t.tip}</span>
      </div>

    </div>
  `;

  document.body.appendChild(backdrop);

  // Element references
  const video = backdrop.querySelector('#sheriseIntroVideo');
  const card = backdrop.querySelector('#sheriseVideoCard');
  const stage = backdrop.querySelector('#videoViewportStage');
  const btnClose = backdrop.querySelector('#btnIntroClose');
  const btnPlayPause = backdrop.querySelector('#btnCtrlPlayPause');
  const btnBigPlay = backdrop.querySelector('#btnBigPlayOverlay');
  const seekBar = backdrop.querySelector('#videoSeekBar');
  const timeCurrent = backdrop.querySelector('#timeCurrent');
  const timeDuration = backdrop.querySelector('#timeDuration');
  const btnMute = backdrop.querySelector('#btnVideoMute');
  const btnFullscreen = backdrop.querySelector('#btnVideoFullscreen');
  const bufferingOverlay = backdrop.querySelector('#videoBufferingOverlay');
  const placeholderOverlay = backdrop.querySelector('#videoAssetPlaceholder');
  const localPicker = backdrop.querySelector('#localVideoFileInput');
  const btnGenSample = backdrop.querySelector('#btnGenerateSample');

  let isSeeking = false;
  let sampleBlobUrl = null;
  let isClosed = false;

  // Format seconds to mm:ss
  function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return '00:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  }

  // Update Play/Pause UI state
  function updatePlayPauseUI(isPlaying) {
    const iconPlay = btnPlayPause.querySelector('.icon-ctrl-play');
    const iconPause = btnPlayPause.querySelector('.icon-ctrl-pause');
    if (isPlaying) {
      if (iconPlay) iconPlay.style.display = 'none';
      if (iconPause) iconPause.style.display = 'block';
      if (btnBigPlay) btnBigPlay.classList.add('video-hidden');
      btnPlayPause.setAttribute('aria-label', t.pauseLabel);
    } else {
      if (iconPlay) iconPlay.style.display = 'block';
      if (iconPause) iconPause.style.display = 'none';
      if (btnBigPlay) btnBigPlay.classList.remove('video-hidden');
      btnPlayPause.setAttribute('aria-label', t.playLabel);
    }
  }

  // Toggle playback
  function togglePlay() {
    if (!video) return;
    if (video.paused || video.ended) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => updatePlayPauseUI(true))
          .catch((err) => {
            console.warn('Playback error or missing asset:', err);
            // If native playback fails due to missing file, show placeholder
            if (video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE || video.error) {
              if (placeholderOverlay) placeholderOverlay.style.display = 'flex';
              if (btnBigPlay) btnBigPlay.classList.add('video-hidden');
            }
          });
      }
    } else {
      video.pause();
      updatePlayPauseUI(false);
    }
  }

  // Close player with full cleanup
  function closePlayer() {
    if (isClosed) return;
    isClosed = true;

    try {
      if (video) {
        video.pause();
        video.removeAttribute('src');
        video.load();
      }
      if (sampleBlobUrl) {
        URL.revokeObjectURL(sampleBlobUrl);
        sampleBlobUrl = null;
      }
    } catch (e) {}

    backdrop.classList.add('fade-out');
    if (typeof window !== 'undefined') {
      window.removeEventListener('keydown', handleKeydown);
    }

    setTimeout(() => {
      backdrop.remove();
      if (typeof onClose === 'function') {
        onClose();
      }
    }, 220);
  }

  function handleKeydown(e) {
    if (e.key === 'Escape') {
      closePlayer();
    } else if (e.key === ' ' && document.activeElement !== seekBar) {
      e.preventDefault();
      togglePlay();
    }
  }

  // Fullscreen toggle
  function toggleFullscreen() {
    const iconEnter = btnFullscreen.querySelector('.icon-fs-enter');
    const iconExit = btnFullscreen.querySelector('.icon-fs-exit');

    if (!document.fullscreenElement) {
      const target = stage || card;
      if (target.requestFullscreen) {
        target.requestFullscreen().catch(() => {});
      } else if (video.webkitEnterFullscreen) {
        video.webkitEnterFullscreen();
      }
      if (iconEnter) iconEnter.style.display = 'none';
      if (iconExit) iconExit.style.display = 'block';
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      if (iconEnter) iconEnter.style.display = 'block';
      if (iconExit) iconExit.style.display = 'none';
    }
  }

  // Update seek slider fill color gradient
  function updateSliderFill(percent) {
    if (seekBar) {
      seekBar.style.background = `linear-gradient(to right, #843CE5 0%, #6636D6 ${percent}%, rgba(255, 255, 255, 0.25) ${percent}%, rgba(255, 255, 255, 0.25) 100%)`;
    }
  }

  // 1. Video Events
  if (video) {
    video.addEventListener('timeupdate', () => {
      if (isSeeking) return;
      if (video.duration && !isNaN(video.duration)) {
        const progress = (video.currentTime / video.duration) * 100;
        if (seekBar) {
          seekBar.value = progress;
          updateSliderFill(progress);
        }
        if (timeCurrent) timeCurrent.textContent = formatTime(video.currentTime);
        if (timeDuration) timeDuration.textContent = formatTime(video.duration);
      } else if (timeCurrent) {
        timeCurrent.textContent = formatTime(video.currentTime);
      }
    });

    video.addEventListener('loadedmetadata', () => {
      if (placeholderOverlay) placeholderOverlay.style.display = 'none';
      if (video.duration && !isNaN(video.duration)) {
        if (timeDuration) timeDuration.textContent = formatTime(video.duration);
        if (seekBar) seekBar.max = 100;
      }
    });

    video.addEventListener('play', () => updatePlayPauseUI(true));
    video.addEventListener('pause', () => updatePlayPauseUI(false));
    video.addEventListener('ended', () => {
      updatePlayPauseUI(false);
      if (seekBar) {
        seekBar.value = 100;
        updateSliderFill(100);
      }
    });

    video.addEventListener('waiting', () => {
      if (bufferingOverlay) bufferingOverlay.style.display = 'flex';
    });

    video.addEventListener('playing', () => {
      if (bufferingOverlay) bufferingOverlay.style.display = 'none';
      if (placeholderOverlay) placeholderOverlay.style.display = 'none';
    });

    video.addEventListener('canplay', () => {
      if (bufferingOverlay) bufferingOverlay.style.display = 'none';
    });

    video.addEventListener('error', () => {
      if (bufferingOverlay) bufferingOverlay.style.display = 'none';
      if (placeholderOverlay) placeholderOverlay.style.display = 'flex';
      if (btnBigPlay) btnBigPlay.classList.add('video-hidden');
    });
  }

  // 2. Control Interactions
  if (btnPlayPause) {
    btnPlayPause.addEventListener('click', (e) => {
      e.stopPropagation();
      togglePlay();
    });
  }

  if (btnBigPlay) {
    btnBigPlay.addEventListener('click', (e) => {
      e.stopPropagation();
      togglePlay();
    });
  }

  if (stage) {
    stage.addEventListener('click', (e) => {
      // If clicking outside controls, toggle play/pause
      if (e.target === video || e.target === stage) {
        togglePlay();
      }
    });
  }

  // Seek bar scrub
  if (seekBar) {
    seekBar.addEventListener('input', () => {
      isSeeking = true;
      if (video && video.duration && !isNaN(video.duration)) {
        const seekTime = (seekBar.value / 100) * video.duration;
        if (timeCurrent) timeCurrent.textContent = formatTime(seekTime);
        updateSliderFill(seekBar.value);
      }
    });

    seekBar.addEventListener('change', () => {
      if (video && video.duration && !isNaN(video.duration)) {
        video.currentTime = (seekBar.value / 100) * video.duration;
      }
      isSeeking = false;
    });
  }

  // Mute / Unmute
  if (btnMute && video) {
    btnMute.addEventListener('click', (e) => {
      e.stopPropagation();
      video.muted = !video.muted;
      const iconOn = btnMute.querySelector('.icon-volume-on');
      const iconMuted = btnMute.querySelector('.icon-volume-muted');
      if (video.muted) {
        if (iconOn) iconOn.style.display = 'none';
        if (iconMuted) iconMuted.style.display = 'block';
        btnMute.setAttribute('aria-label', t.unmuteLabel);
      } else {
        if (iconOn) iconOn.style.display = 'block';
        if (iconMuted) iconMuted.style.display = 'none';
        btnMute.setAttribute('aria-label', t.muteLabel);
      }
    });
  }

  // Fullscreen
  if (btnFullscreen) {
    btnFullscreen.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleFullscreen();
    });

    document.addEventListener('fullscreenchange', () => {
      const iconEnter = btnFullscreen.querySelector('.icon-fs-enter');
      const iconExit = btnFullscreen.querySelector('.icon-fs-exit');
      if (document.fullscreenElement) {
        if (iconEnter) iconEnter.style.display = 'none';
        if (iconExit) iconExit.style.display = 'block';
      } else {
        if (iconEnter) iconEnter.style.display = 'block';
        if (iconExit) iconExit.style.display = 'none';
      }
    });
  }

  // Close triggers
  if (btnClose) {
    btnClose.addEventListener('click', (e) => {
      e.stopPropagation();
      closePlayer();
    });
  }

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closePlayer();
    }
  });

  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', handleKeydown);
  }

  // 3. Local Video Picker Handler
  if (localPicker) {
    localPicker.addEventListener('change', (e) => {
      const file = e.target.files && e.target.files[0];
      if (file) {
        if (sampleBlobUrl) URL.revokeObjectURL(sampleBlobUrl);
        sampleBlobUrl = URL.createObjectURL(file);
        video.src = sampleBlobUrl;
        video.load();
        if (placeholderOverlay) placeholderOverlay.style.display = 'none';
        video.play().then(() => updatePlayPauseUI(true)).catch(() => {});
      }
    });
  }

  // 4. Client-side Real Video Generator (Canvas MediaRecorder)
  if (btnGenSample) {
    btnGenSample.addEventListener('click', async (e) => {
      e.stopPropagation();
      btnGenSample.disabled = true;
      btnGenSample.innerHTML = `<span>Generating…</span>`;

      try {
        const canvas = document.createElement('canvas');
        canvas.width = 640;
        canvas.height = 360;
        const ctx = canvas.getContext('2d');

        if (!ctx || !canvas.captureStream || typeof MediaRecorder === 'undefined') {
          throw new Error('Canvas recording not supported');
        }

        const stream = canvas.captureStream(30);
        let mime = 'video/webm';
        if (MediaRecorder.isTypeSupported('video/webm;codecs=vp9')) {
          mime = 'video/webm;codecs=vp9';
        } else if (MediaRecorder.isTypeSupported('video/webm;codecs=vp8')) {
          mime = 'video/webm;codecs=vp8';
        } else if (MediaRecorder.isTypeSupported('video/mp4')) {
          mime = 'video/mp4';
        }

        const recorder = new MediaRecorder(stream, { mimeType: mime });
        const chunks = [];
        recorder.ondataavailable = (ev) => {
          if (ev.data && ev.data.size > 0) chunks.push(ev.data);
        };

        const totalFrames = 30 * 6; // 6 seconds clip
        let currentFrame = 0;

        const recordPromise = new Promise((resolve) => {
          recorder.onstop = () => {
            const blob = new Blob(chunks, { type: mime });
            resolve(blob);
          };
        });

        recorder.start();

        function drawFrame() {
          const tProg = currentFrame / totalFrames;

          // 1. Background gradient
          const grad = ctx.createLinearGradient(0, 0, 640, 360);
          grad.addColorStop(0, '#1E0470');
          grad.addColorStop(0.55, '#5B21B6');
          grad.addColorStop(1, '#6636D6');
          ctx.fillStyle = grad;
          ctx.fillRect(0, 0, 640, 360);

          // 2. Animated sun / light orb
          ctx.save();
          ctx.beginPath();
          const sunY = 180 + Math.sin(tProg * Math.PI) * -30;
          ctx.arc(320, sunY, 70 + Math.sin(tProg * Math.PI * 4) * 8, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(254, 215, 170, 0.35)';
          ctx.fill();
          ctx.restore();

          // 3. Animated branding text
          ctx.fillStyle = '#FFFFFF';
          ctx.font = 'bold 36px sans-serif';
          ctx.textAlign = 'center';
          ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
          ctx.shadowBlur = 12;
          ctx.fillText('SheRise TN', 320, 150);

          ctx.fillStyle = '#FDE047';
          ctx.font = '600 17px sans-serif';
          ctx.shadowBlur = 6;
          ctx.fillText('Your safety. Your skills. Your sovereignty.', 320, 190);

          // 4. Tamil Nadu Tagline
          ctx.fillStyle = '#E9D5FF';
          ctx.font = '500 14px sans-serif';
          ctx.shadowBlur = 0;
          ctx.fillText('Women Empowerment Platform — Tamil Nadu', 320, 230);

          // 5. Dynamic Progress bar in video
          ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
          ctx.fillRect(120, 280, 400, 6);
          ctx.fillStyle = '#843CE5';
          ctx.fillRect(120, 280, 400 * tProg, 6);

          currentFrame++;
          if (currentFrame < totalFrames) {
            requestAnimationFrame(drawFrame);
          } else {
            recorder.stop();
          }
        }

        drawFrame();

        const videoBlob = await recordPromise;
        if (sampleBlobUrl) URL.revokeObjectURL(sampleBlobUrl);
        sampleBlobUrl = URL.createObjectURL(videoBlob);

        video.src = sampleBlobUrl;
        video.load();
        if (placeholderOverlay) placeholderOverlay.style.display = 'none';
        video.play().then(() => updatePlayPauseUI(true)).catch(() => {});

      } catch (err) {
        console.warn('Sample video generation fallback:', err);
        btnGenSample.disabled = false;
        btnGenSample.innerHTML = `<span>${t.btnPlaySample}</span>`;
      }
    });
  }

  // Attempt initial playback attempt or display poster
  setTimeout(() => {
    // If browser auto-plays or video is ready
    if (video.readyState >= HTMLMediaElement.HAVE_METADATA) {
      if (placeholderOverlay) placeholderOverlay.style.display = 'none';
      timeDuration.textContent = formatTime(video.duration);
    }
  }, 400);

  return {
    close: closePlayer,
    getVideoElement: () => video
  };
}

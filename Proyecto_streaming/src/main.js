// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeToggle.textContent = '🌙';
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    }
});

// Video Cards Click Handler
const videoCards = document.querySelectorAll('.video-card');
const videoPlayerModal = document.getElementById('video-player-modal');
const modalClose = document.querySelector('.modal-close');
const videoPlayer = document.getElementById('video-player');

videoCards.forEach(card => {
    card.addEventListener('click', () => {
        videoPlayerModal.classList.add('active');
        // En una aplicación real, aquí cargaríamos la URL del video correspondiente
        videoPlayer.play();
    });
});

modalClose.addEventListener('click', () => {
    videoPlayerModal.classList.remove('active');
    videoPlayer.pause();
});

// Video Player Controls
const playPauseBtn = document.getElementById('play-pause');
const muteBtn = document.getElementById('mute');
const volumeSlider = document.getElementById('volume');
const playbackSpeed = document.getElementById('playback-speed');
const pipBtn = document.getElementById('pip');
const fullscreenBtn = document.getElementById('fullscreen');
const progressBar = document.querySelector('.progress-filled');
const currentTimeDisplay = document.querySelector('.current-time');
const totalTimeDisplay = document.querySelector('.total-time');

// Play/Pause
playPauseBtn.addEventListener('click', () => {
    if (videoPlayer.paused) {
        videoPlayer.play();
        playPauseBtn.textContent = '⏸';
    } else {
        videoPlayer.pause();
        playPauseBtn.textContent = '▶';
    }
});

// Mute
muteBtn.addEventListener('click', () => {
    videoPlayer.muted = !videoPlayer.muted;
    muteBtn.textContent = videoPlayer.muted ? '🔇' : '🔊';
});

// Volume
volumeSlider.addEventListener('input', () => {
    videoPlayer.volume = volumeSlider.value;
    if (videoPlayer.volume === 0) {
        muteBtn.textContent = '🔇';
    } else {
        muteBtn.textContent = '🔊';
    }
});

// Playback Speed
playbackSpeed.addEventListener('change', () => {
    videoPlayer.playbackRate = playbackSpeed.value;
});

// Picture in Picture
pipBtn.addEventListener('click', async () => {
    try {
        if (document.pictureInPictureElement) {
            await document.exitPictureInPicture();
        } else {
            await videoPlayer.requestPictureInPicture();
        }
    } catch (error) {
        console.error('Error:', error);
    }
});

// Fullscreen
fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        videoPlayer.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});

// Progress Bar
videoPlayer.addEventListener('timeupdate', () => {
    const progress = (videoPlayer.currentTime / videoPlayer.duration) * 100;
    progressBar.style.width = progress + '%';
    
    // Update time displays
    currentTimeDisplay.textContent = formatTime(videoPlayer.currentTime);
    totalTimeDisplay.textContent = formatTime(videoPlayer.duration);
});

// Format time to MM:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && 
        !e.target.closest('.sidebar') && 
        !e.target.closest('.menu-toggle') && 
        sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
    }
});

// Search functionality (ejemplo básico)
const searchInput = document.querySelector('.nav-search input');

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const videoCards = document.querySelectorAll('.video-card');
    
    videoCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});
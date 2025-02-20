document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  lucide.createIcons();

  // DOM Elements
  const songGrid = document.querySelector('.song-grid');
  const miniPlayer = document.querySelector('.mini-player');
  const audioElement = document.querySelector('#audio-player');
  const playButton = miniPlayer.querySelector('.play-button');
  const prevButton = miniPlayer.querySelector('.prev-button');
  const nextButton = miniPlayer.querySelector('.next-button');
  const shuffleButton = miniPlayer.querySelector('.shuffle-button');
  const repeatButton = miniPlayer.querySelector('.repeat-button');
  const closeButton = miniPlayer.querySelector('.close-button');
  const progressBar = miniPlayer.querySelector('.progress');
  const progressContainer = miniPlayer.querySelector('.progress-bar');
  const currentTimeDisplay = miniPlayer.querySelector('.current-time');
  const durationDisplay = miniPlayer.querySelector('.duration');
  const volumeSlider = miniPlayer.querySelector('.volume-slider');
  const themeToggle = document.querySelector('.theme-toggle');

  // Player State
  let currentSong = null;
  let isPlaying = false;
  let isShuffle = false;
  let isRepeat = false;
  let isDarkMode = false;

  // Create song cards
  function createSongCards() {
    songGrid.innerHTML = sampleSongs.map((song, index) => `
      <div class="song-card" data-song-index="${index}">
        <div class="cover-container">
          <img src="${song.cover}" alt="${song.album}">
          <div class="play-overlay">
            <div class="play-button">
              <i data-lucide="play"></i>
            </div>
          </div>
        </div>
        <div class="song-info">
          <h2>${song.title}</h2>
          <p class="artist">${song.artist}</p>
          <p class="album">${song.album}</p>
        </div>
      </div>
    `).join('');
    // Reinitialize icons for the new cards
    lucide.createIcons();
  }

  // Update mini player
  function updateMiniPlayer(song) {
    const albumArt = miniPlayer.querySelector('.album-art img');
    const songTitle = miniPlayer.querySelector('.song-title');
    const songArtist = miniPlayer.querySelector('.song-artist');

    albumArt.src = song.cover;
    albumArt.alt = song.album;
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;

    audioElement.src = song.url;
    miniPlayer.style.display = 'block';
  }

  // Format time
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }

  // Event Listeners
  songGrid.addEventListener('click', (e) => {
    const songCard = e.target.closest('.song-card');
    if (songCard) {
      const songIndex = songCard.dataset.songIndex;
      const song = sampleSongs[songIndex];
      if (song) {
        currentSong = song;
        updateMiniPlayer(song);
        audioElement.play();
        isPlaying = true;
        updatePlayButton();
      }
    }
  });

  closeButton.addEventListener('click', () => {
    miniPlayer.style.display = 'none';
    audioElement.pause();
    isPlaying = false;
    updatePlayButton();
  });

  playButton.addEventListener('click', () => {
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    isPlaying = !isPlaying;
    updatePlayButton();
  });

  function updatePlayButton() {
    // Actualiza el dataset y re-renderiza el icono
    const icon = playButton.querySelector('i');
    icon.dataset.lucide = isPlaying ? 'pause' : 'play';
    lucide.createIcons();
    
    // Ahora, selecciona el icono actualizado y aplica la clase de animación
    const updatedIcon = playButton.querySelector('i');
    updatedIcon.classList.add('scale-animation');
    
    // Remueve la clase después de la duración de la animación (300ms)
    setTimeout(() => {
      updatedIcon.classList.remove('scale-animation');
    }, 300);
  }

  shuffleButton.addEventListener('click', () => {
    isShuffle = !isShuffle;
    shuffleButton.classList.toggle('active');
  });

  repeatButton.addEventListener('click', () => {
    isRepeat = !isRepeat;
    repeatButton.classList.toggle('active');
  });

  volumeSlider.addEventListener('input', (e) => {
    audioElement.volume = e.target.value;
    // Actualiza el fondo del slider para mostrar el progreso del volumen
    const percentage = e.target.value * 100;
    e.target.style.background = `linear-gradient(to right, #3498DB 0%, #3498DB ${percentage}%, #ccc ${percentage}%, #ccc 100%)`;
  });

  progressContainer.addEventListener('click', (e) => {
    const rect = progressContainer.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const time = percent * audioElement.duration;
    audioElement.currentTime = time;
  });

  audioElement.addEventListener('timeupdate', () => {
    const percent = (audioElement.currentTime / audioElement.duration) * 100;
    progressBar.style.width = `${percent}%`;
    currentTimeDisplay.textContent = formatTime(audioElement.currentTime);
    durationDisplay.textContent = formatTime(audioElement.duration);
  });

  audioElement.addEventListener('ended', () => {
    if (isRepeat) {
      audioElement.currentTime = 0;
      audioElement.play();
    } else {
      isPlaying = false;
      updatePlayButton();
    }
  });

  themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    icon.dataset.lucide = isDarkMode ? 'moon' : 'sun';
    lucide.createIcons();
  });

  // Initialize
  createSongCards();
});
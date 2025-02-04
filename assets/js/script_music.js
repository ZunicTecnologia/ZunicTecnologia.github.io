const songList = document.querySelector('.song-list');
        const player = document.querySelector('.player');
        const closeButton = document.querySelector('.close-button');
        const audio = document.querySelector('audio');
        const playerCover = document.querySelector('.player-cover');
        const playerTitle = document.querySelector('.player-title');
        const playerArtist = document.querySelector('.player-artist');
        const visualizerBars = document.querySelectorAll('.bar');

        // Datos de las canciones
        const songs = {
            song1: {
                title: 'Emocionante Música Instrumental Piano',
                artist: 'Mattia Cupelli',
                cover: '../img/musica3.PNG',
                audio: '../audio/Emocionante-Música-Instrumental-Piano.mp3'
            },
            song2: {
                title: 'COBRA',
                artist: 'TENTON',
                cover: '../img/musica2.PNG',
                audio: '../audio/COBRA.mp3'
            },
            song3: {
                title: 'Calm Wind',
                artist: 'Peder B. Helland',
                cover: '../img/musica1.PNG',
                audio: '../audio/Calm-Wind.mp3'
            }
        };

        // Animación del visualizador
        function updateVisualizer() {
            visualizerBars.forEach(bar => {
                const height = Math.random() * 40 + 10;
                bar.style.height = `${height}px`;
            });
        }

        // Iniciar animación del visualizador
        let visualizerInterval;

        // Manejar clic en las canciones
        songList.addEventListener('click', (e) => {
            const songItem = e.target.closest('.song-item');
            if (!songItem) return;

            const songId = songItem.dataset.song;
            const song = songs[songId];

            // Actualizar el reproductor
            playerCover.src = song.cover;
            playerTitle.textContent = song.title;
            playerArtist.textContent = song.artist;
            audio.src = song.audio;

            // Mostrar el reproductor
            player.classList.add('active');
            
            // Iniciar visualizador
            visualizerInterval = setInterval(updateVisualizer, 200);

            // Intentar reproducir
            audio.load();
            audio.play().catch(() => console.log('No se pudo reproducir el audio'));
        });

        // Cerrar reproductor
        closeButton.addEventListener('click', () => {
            player.classList.remove('active');
            audio.pause();
            audio.currentTime = 0;
            clearInterval(visualizerInterval);
        });

        // Efecto hover en las canciones
        document.querySelectorAll('.song-item').forEach(item => {
            item.addEventListener('mouseover', () => {
                item.style.transform = 'scale(1.02)';
            });
            
            item.addEventListener('mouseout', () => {
                item.style.transform = 'scale(1)';
            });
        });
// Scroll Animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.animate-fadeInUp');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease-out';
        observer.observe(element);
    });
});

// Header Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        header.style.backgroundColor = 'white';
        header.style.boxShadow = 'none';
    }
});

// Video Quality Control
const videoQualities = {
    '360': 'video-360p.mp4',
    '720': 'video-720p.mp4',
};

const qualityButtons = document.querySelectorAll('.quality-btn');
const videoElement = document.getElementById('mainVideo');
const videoSource = document.getElementById('videoSource');
const currentQualitySpan = document.getElementById('currentQuality');
let currentTime = 0;

qualityButtons.forEach(button => {
    button.addEventListener('click', function() {
        const quality = this.dataset.quality;
        const videoUrl = videoQualities[quality];
        
        // Guardar el tiempo actual
        currentTime = videoElement.currentTime;
        
        // Actualizar la fuente del video
        videoSource.src = videoUrl;
        videoElement.load();
        
        // Restaurar el tiempo de reproducción
        videoElement.addEventListener('loadedmetadata', function() {
            videoElement.currentTime = currentTime;
            if (!videoElement.paused) videoElement.play();
        }, { once: true });

        // Actualizar botones y estado
        qualityButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        currentQualitySpan.textContent = `Calidad actual: ${quality}p`;
    });
});

// Mostrar loader mientras el video carga
videoElement.addEventListener('waiting', function() {
    // Aquí podrías añadir un indicador de carga
    this.classList.add('loading');
});

videoElement.addEventListener('playing', function() {
    // Remover el indicador de carga
    this.classList.remove('loading');
});


// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// New Animation for Project Cards
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});
// Menú Hamburguesa
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', function() {
navUl.classList.toggle('active');
});
});
document.addEventListener("DOMContentLoaded", () => {
    const description = document.querySelector('.description');
    const chapters = document.querySelector('.chapters');

    // Efecto de animación para la descripción
    description.style.opacity = '1';
    description.style.transform = 'translateY(0)';
    description.style.transition = 'opacity 0.5s, transform 0.5s';
    
    // Efecto de animación para los capítulos
    chapters.style.opacity = '1';
    chapters.style.transform = 'translateY(0)';
});
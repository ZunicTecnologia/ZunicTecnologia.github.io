// Cambiar modo oscuro/claro con animación
document.getElementById('modeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);

    // Animación de rotación
    const icon = document.querySelector('.mode-toggle-icon');
    icon.style.transform = isDarkMode ? 'rotate(180deg)' : 'rotate(0deg)';
});

// Cargar el modo guardado al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
        document.body.classList.add('dark-mode');
        const icon = document.querySelector('.mode-toggle-icon');
        icon.style.transform = 'rotate(180deg)';
    }
});

// Script para el botón "Ir al inicio"
document.getElementById('scrollToTop').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
});

// Mostrar u ocultar el botón "Ir al inicio"
window.addEventListener('scroll', () => {
    const scrollToTopButton = document.getElementById('scrollToTop');
    if (window.scrollY > 300) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});
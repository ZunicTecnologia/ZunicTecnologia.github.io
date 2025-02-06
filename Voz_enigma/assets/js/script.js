// Animación adicional para el contenido
document.addEventListener("DOMContentLoaded", function () {
    const content = document.querySelector(".content");
    content.style.opacity = "0";
    setTimeout(() => {
        content.style.transition = "opacity 1.5s ease";
        content.style.opacity = "1";
    }, 500);
});
// Añadir toggle para menú en versión mobile (opcional)
document.addEventListener("DOMContentLoaded", function () {
    // Animación inicial
    const content = document.querySelector(".content");
    content.style.opacity = "0";
    setTimeout(() => {
        content.style.transition = "opacity 1.5s ease";
        content.style.opacity = "1";
    }, 500);

    // Opcional: Menú hamburguesa para versiones mobile
    const header = document.querySelector('.header');
    const menuIcon = document.createElement('div');
    menuIcon.className = 'menu-icon';
    menuIcon.innerHTML = '☰';
    
    if (window.innerWidth <= 768) {
        header.prepend(menuIcon);
        menuIcon.addEventListener('click', () => {
            document.querySelector('.sidebar').classList.toggle('active');
        });
    }
});

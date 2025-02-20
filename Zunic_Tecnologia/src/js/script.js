// Initialize Lucide icons
lucide.createIcons();

// Update copyright year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
let isMenuOpen = false;
const navbar = document.getElementById('navbar');
const mobileMenu = document.getElementById('mobileMenu');
const menuButton = document.querySelector('.mobile-menu-button');

function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    mobileMenu.style.display = isMenuOpen ? 'block' : 'none';
    menuButton.innerHTML = isMenuOpen 
        ? '<i data-lucide="x"></i>' 
        : '<i data-lucide="menu"></i>';
    lucide.createIcons();
}

// Scroll to section
function scrollToSection(id) {
    const element = document.getElementById(id);
    const navHeight = navbar.offsetHeight;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navHeight;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });

    if (isMenuOpen) {
        toggleMenu();
    }
}

// Navbar background on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
// Mobile menu functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Payment modal functionality
const modal = document.getElementById('paymentModal');
const closeModal = document.querySelector('.close-modal');

function openPaymentModal(platform, price) {
    modal.style.display = 'block';
    document.getElementById('selectedPlatform').textContent = platform;
    document.getElementById('selectedPrice').textContent = price;
}

closeModal.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Card number formatting
const cardNumber = document.getElementById('cardNumber');
cardNumber.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/(.{4})/g, '$1 ').trim();
    e.target.value = value;
});

// Expiry date formatting
const expiry = document.getElementById('expiry');
expiry.addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.slice(0,2) + '/' + value.slice(2,4);
    }
    e.target.value = value;
});

// CVV input validation
const cvv = document.getElementById('cvv');
cvv.addEventListener('input', function(e) {
    e.target.value = e.target.value.replace(/\D/g, '');
});

// Payment form submission
function handlePaymentSubmit(event) {
    event.preventDefault();
    
    // Aquí normalmente se procesaría el pago con una pasarela de pagos
    alert('¡Pago procesado con éxito! Recibirás los detalles de acceso por email.');
    modal.style.display = 'none';
}

// Contact form submission
function handleContactSubmit(event) {
    event.preventDefault();
    
    // Aquí normalmente se enviaría el mensaje a un servidor
    alert('¡Mensaje enviado! Te responderemos pronto.');
    event.target.reset();
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
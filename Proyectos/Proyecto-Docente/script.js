document.addEventListener('DOMContentLoaded', () => {
    // Modal functionality
    const helpButton = document.getElementById('helpButton');
    const suggestButton = document.getElementById('suggestLink');
    const helpModal = document.getElementById('helpModal');
    const suggestModal = document.getElementById('suggestModal');
    const closeBtns = document.querySelectorAll('.close');

    function openModal(modal) {
        modal.style.display = 'block';
    }

    function closeModal(modal) {
        modal.style.display = 'none';
    }

    if (helpButton) {
        helpButton.addEventListener('click', () => openModal(helpModal));
    }

    if (suggestButton) {
        suggestButton.addEventListener('click', () => openModal(suggestModal));
    }

    closeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            closeModal(helpModal);
            closeModal(suggestModal);
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target === helpModal) closeModal(helpModal);
        if (e.target === suggestModal) closeModal(suggestModal);
    });

    // Form submissions
    const contactForm = document.getElementById('contactForm');
    const suggestForm = document.getElementById('suggestForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
            closeModal(helpModal);
            contactForm.reset();
        });
    }

    if (suggestForm) {
        suggestForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('¡Gracias por tu sugerencia! La revisaremos pronto.');
            closeModal(suggestModal);
            suggestForm.reset();
        });
    }

    // Course sections toggle
    const sectionHeaders = document.querySelectorAll('.section-header');
    
    sectionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const videoList = header.nextElementSibling;
            const icon = header.querySelector('i');
            
            // Toggle current section
            header.classList.toggle('active');
            videoList.classList.toggle('active');
            
            // Rotate icon
            if (header.classList.contains('active')) {
                icon.style.transform = 'rotate(180deg)';
            } else {
                icon.style.transform = 'rotate(0deg)';
            }
        });
    });

    // Video list functionality
    const videoList = document.querySelectorAll('.video-list li');
    const videoFrame = document.getElementById('videoFrame');

    videoList.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from all items
            videoList.forEach(li => li.classList.remove('active'));
            
            // Add active class to clicked item
            item.classList.add('active');
            
            // Update video source
            const videoUrl = item.dataset.video;
            videoFrame.src = videoUrl;
        });
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const videoItems = document.querySelectorAll('.video-list li');
            
            videoItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }

    // Prevent video downloads
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.addEventListener('contextmenu', (e) => e.preventDefault());
        video.controlsList = "nodownload";
    });
});
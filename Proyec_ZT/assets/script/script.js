// Enhanced Navigation on scroll
        window.addEventListener('scroll', function() {
            const nav = document.getElementById('nav');
            if (window.scrollY > 50) {
                nav.classList.add('visible');
            } else {
                nav.classList.remove('visible');
            }
        });

        // Mobile Navigation Toggle
        const navToggle = document.getElementById('nav-toggle');
        const navOverlay = document.getElementById('nav-overlay');
        let isMenuOpen = false;

        navToggle.addEventListener('click', function() {
            isMenuOpen = !isMenuOpen;
            navToggle.classList.toggle('active');
            navOverlay.classList.toggle('active');
            document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        });

        // Close mobile menu when clicking on a link
        const mobileNavLinks = navOverlay.querySelectorAll('a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                isMenuOpen = false;
                navToggle.classList.remove('active');
                navOverlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Close mobile menu when clicking outside
        navOverlay.addEventListener('click', function(e) {
            if (e.target === navOverlay) {
                isMenuOpen = false;
                navToggle.classList.remove('active');
                navOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Enhanced smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 70; // Account for fixed nav
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all elements with fade-in class
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Service card click animation
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });

        // Gallery item click effect
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', function() {
                const overlay = this.querySelector('.gallery-overlay');
                overlay.style.opacity = '1';
                setTimeout(() => {
                    overlay.style.opacity = '';
                }, 200);
            });
        });

        // WhatsApp button interaction
        document.querySelector('.whatsapp-btn').addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });

        document.querySelector('.whatsapp-btn').addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });

        // Add loading animation
        window.addEventListener('load', function() {
            document.body.style.opacity = '0';
            document.body.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                document.body.style.opacity = '1';
            }, 100);
        });

        // Enhanced parallax effect for header
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const header = document.querySelector('.header');
            if (header && window.innerWidth > 768) {
                const rate = scrolled * -0.3;
                header.style.transform = `translateY(${rate}px)`;
            }
        });

        // Dynamic service card descriptions
        const serviceDescriptions = [
            "Transforma tu look con nuestros cortes de última tendencia",
            "Cuidado experto para una barba perfectamente moldeada",
            "Detalles precisos que marcan la diferencia en tu estilo"
        ];

        document.querySelectorAll('.service-card').forEach((card, index) => {
            card.addEventListener('mouseenter', function() {
                const description = this.querySelector('.service-description');
                const originalText = description.textContent;
                description.textContent = serviceDescriptions[index];
                
                this.addEventListener('mouseleave', function() {
                    description.textContent = originalText;
                }, { once: true });
            });
        });

        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && isMenuOpen) {
                isMenuOpen = false;
                navToggle.classList.remove('active');
                navOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

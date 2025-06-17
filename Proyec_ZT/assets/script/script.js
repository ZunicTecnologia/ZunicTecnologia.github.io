// Navigation on scroll
        window.addEventListener('scroll', function() {
            const nav = document.getElementById('nav');
            if (window.scrollY > 100) {
                nav.classList.add('visible');
            } else {
                nav.classList.remove('visible');
            }
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
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

        // Parallax effect for header
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const header = document.querySelector('.header');
            if (header) {
                const rate = scrolled * -0.5;
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
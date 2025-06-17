// Navigation on scroll
        window.addEventListener('scroll', function() {
            const nav = document.getElementById('nav');
            if (window.scrollY > 50) {
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
                    const offsetTop = target.offsetTop - 70;
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

        // Service card hover effects
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(-5px)';
            });
        });

        // Gallery item click effect
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', function() {
                const overlay = this.querySelector('.gallery-overlay');
                overlay.style.opacity = '1';
                setTimeout(() => {
                    overlay.style.opacity = '';
                }, 300);
            });
        });

        // WhatsApp button interaction
        document.querySelector('.whatsapp-btn').addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });

        document.querySelector('.whatsapp-btn').addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });

        // Mobile navigation toggle
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');

        navToggle.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });

        // Loading animation
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
            if (header && window.innerWidth > 768) {
                const rate = scrolled * -0.2;
                header.style.transform = `translateY(${rate}px)`;
            }
        });

        // Handle window resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navMenu.style.display = 'flex';
            } else {
                navMenu.style.display = 'none';
            }
        });
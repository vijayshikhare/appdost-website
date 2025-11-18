// File: contact/js/script.js - Enhanced with Professional Animations & Interactions

// Page Load Animation
window.addEventListener('load', () => {
    document.body.classList.remove('loading');
    document.body.style.opacity = '1';
});

// Intersection Observer for Scroll Animations with Stagger Effect
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 50); // Stagger animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Mobile Menu Toggle with Enhanced Animation
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navList = document.querySelector('.nav__list');

    if (mobileToggle && navList) {
        mobileToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            const navLinks = navList.querySelectorAll('.nav__link');
            
            if (navList.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                // Animate menu items
                navLinks.forEach((link, index) => {
                    link.style.opacity = '0';
                    link.style.transform = 'translateX(-20px)';
                    setTimeout(() => {
                        link.style.transition = 'all 0.3s ease';
                        link.style.opacity = '1';
                        link.style.transform = 'translateX(0)';
                    }, index * 50);
                });
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                navLinks.forEach(link => {
                    link.style.opacity = '0';
                    link.style.transform = 'translateX(-20px)';
                });
            }
        });

        // Close menu when clicking on a link
        navList.querySelectorAll('.nav__link').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    navList.classList.remove('active');
                    const icon = mobileToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // Smooth scroll with offset for fixed header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Enhanced Sticky Header with Scroll Effect & Progress
    let lastScrollY = window.scrollY;
    let ticking = false;
    
    const updateHeader = () => {
        const header = document.querySelector('.header');
        const currentScrollY = window.scrollY;
        const scrollProgress = Math.min(currentScrollY / (document.documentElement.scrollHeight - window.innerHeight), 1);

        if (currentScrollY > 50) {
            header.classList.add('scrolled');
            header.style.background = `rgba(255, 255, 255, ${0.85 + scrollProgress * 0.13})`;
            header.style.backdropFilter = 'blur(20px) saturate(180%)';
            header.style.boxShadow = `0 4px 30px rgba(0,0,0,${0.1 + scrollProgress * 0.05})`;
        } else {
            header.classList.remove('scrolled');
            header.style.background = 'rgba(255, 255, 255, 0.85)';
            header.style.backdropFilter = 'blur(20px) saturate(180%)';
            header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
        }

        // Smooth header hide/show on scroll direction (only on desktop)
        if (window.innerWidth > 768) {
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
        }
        lastScrollY = currentScrollY;
        ticking = false;
    };

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }, { passive: true });

    // Active Nav Link on Scroll with Smooth Highlighting
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav__link');
            let current = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                const scrollPosition = window.scrollY + 150;
                
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                const href = link.getAttribute('href');
                if (href.includes('contact.html') || (current === '' && href.includes('contact.html'))) {
                    link.classList.add('active');
                } else if (href === `#${current}`) {
                    link.classList.add('active');
                }
            });
        }, 10);
    }, { passive: true });

    // Contact Form Validation
    validateContactForm();
});

// Contact Form Validation (Enhanced)
function validateContactForm() {
    const form = document.querySelector('#contact-form');
    if (!form) return;

    const formSuccess = document.querySelector('#form-success');
    const formError = document.querySelector('#form-error');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.querySelector('#name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const subject = document.querySelector('#subject').value.trim();
        const message = document.querySelector('#message').value.trim();

        let isValid = true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Hide previous messages
        if (formSuccess) formSuccess.style.display = 'none';
        if (formError) formError.style.display = 'none';

        if (!name) {
            showValidationError('name', 'Name is required');
            isValid = false;
        } else {
            clearValidationError('name');
        }
        if (!email || !emailRegex.test(email)) {
            showValidationError('email', 'Valid email is required');
            isValid = false;
        } else {
            clearValidationError('email');
        }
        if (!subject) {
            showValidationError('subject', 'Subject is required');
            isValid = false;
        } else {
            clearValidationError('subject');
        }
        if (!message) {
            showValidationError('message', 'Message is required');
            isValid = false;
        } else {
            clearValidationError('message');
        }

        if (isValid) {
            const payload = {
                name,
                email,
                subject,
                message,
                timestamp: new Date().toISOString()
            };
            console.log('Form Payload for API:', JSON.stringify(payload, null, 2));
            
            // Show success message with animation
            form.style.transition = 'all 0.3s ease';
            form.style.opacity = '0.7';
            
            setTimeout(() => {
                if (formSuccess) {
                    formSuccess.style.display = 'flex';
                    formSuccess.style.animation = 'fadeInUp 0.5s ease';
                }
                form.reset();
                form.style.opacity = '1';
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    if (formSuccess) formSuccess.style.display = 'none';
                }, 5000);
            }, 500);
        } else {
            if (formError) {
                formError.style.display = 'flex';
                formError.style.animation = 'shake 0.5s ease';
            }
        }
    });

    function showValidationError(fieldId, message) {
        const field = document.querySelector(`#${fieldId}`);
        if (field) {
            field.style.borderColor = '#ef4444';
            field.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
            field.classList.add('shake');
            setTimeout(() => field.classList.remove('shake'), 500);
        }
    }

    function clearValidationError(fieldId) {
        const field = document.querySelector(`#${fieldId}`);
        if (field) {
            field.style.borderColor = '';
            field.style.boxShadow = '';
            field.classList.remove('shake');
        }
    }
}

// Scroll to Top Button
function initScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll to top button
initScrollToTop();

// Button Ripple Effect
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn--primary, .btn--secondary, .btn--outline, button[type="submit"]');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add ripple effect and shake animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    .btn, button {
        position: relative;
        overflow: hidden;
    }
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    .shake {
        animation: shake 0.5s ease-in-out;
    }
`;
document.head.appendChild(style);

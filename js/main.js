/**
 * Birinci İplik - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {

    // ========================================
    // Language Switcher
    // ========================================
    const langBtns = document.querySelectorAll('.lang-btn');
    
    // Get saved language or default to English
    let currentLang = localStorage.getItem('preferredLang') || 'en';
    
    function applyLanguage(lang) {
        currentLang = lang;
        
        // Update HTML lang and dir attributes
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        
        // Add/remove RTL class for additional styling
        if (lang === 'ar') {
            document.body.classList.add('rtl');
        } else {
            document.body.classList.remove('rtl');
        }
        
        // Update all translatable elements
        if (typeof translations !== 'undefined') {
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                if (translations[lang] && translations[lang][key]) {
                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.placeholder = translations[lang][key];
                    } else {
                        element.innerHTML = translations[lang][key];
                    }
                }
            });
            
            // Update select options
            document.querySelectorAll('select[data-i18n-option]').forEach(select => {
                const options = select.querySelectorAll('option');
                options.forEach(option => {
                    const key = option.getAttribute('data-i18n-option');
                    if (translations[lang] && translations[lang][key]) {
                        option.textContent = translations[lang][key];
                    }
                });
            });
        }
        
        // Update language buttons active state
        langBtns.forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-lang') === lang);
        });
        
        // Save to localStorage
        localStorage.setItem('preferredLang', lang);
    }
    
    // Apply language on page load
    applyLanguage(currentLang);
    
    // Add click handlers to language buttons
    langBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            applyLanguage(lang);
        });
    });
    
    // ========================================
    // Mobile Navigation Toggle
    // ========================================
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            });
        });
    }

    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ========================================
    // Navbar Scroll Effect
    // ========================================
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            } else {
                navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
            }
            
            lastScroll = currentScroll;
        });
    }
    
    // ========================================
    // Contact Form Handler (Formspree)
    // ========================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Formspree handles the submission
            // You can add custom validation here if needed
        });
    }
    
    // ========================================
    // Scrolling Animation - Knitting & Cat
    // ========================================
    const threadLine = document.getElementById('threadLine');
    const yarnBall = document.getElementById('yarnBall');
    const catContainer = document.getElementById('catContainer');
    const catMessage = document.getElementById('catMessage');
    
    if (threadLine && yarnBall && catContainer) {
        let catReached = false;
        
        // Fixed positions
        const startY = 240; // Where thread starts (bottom of needles)
        const maxScrollY = window.innerHeight - 200; // Max yarn position
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = Math.min(scrollTop / docHeight, 1);
            
            // Calculate thread length based on scroll
            const threadLength = Math.min(scrollPercent * (maxScrollY - startY), maxScrollY - startY);
            
            // Update thread line height
            threadLine.style.height = threadLength + 'px';
            
            // Update yarn ball position (aligned with thread)
            const ballPosition = startY + threadLength;
            yarnBall.style.top = ballPosition + 'px';
            
            // Show cat when scrolling near bottom (75% down)
            if (scrollPercent > 0.75 && !catContainer.classList.contains('visible')) {
                catContainer.classList.add('visible');
            }
            
            // Cat catches ball at 92% scroll
            if (scrollPercent > 0.92 && !catReached) {
                catReached = true;
                
                // Move ball to cat (cat is at bottom: 150px, left: 40px)
                yarnBall.style.transition = 'all 0.5s ease';
                yarnBall.style.top = (window.innerHeight - 170) + 'px';
                yarnBall.style.left = '70px';
                
                // Adjust thread to follow ball
                threadLine.style.transition = 'height 0.5s ease';
                threadLine.style.height = (window.innerHeight - 410) + 'px';
                
                // Show cat message
                setTimeout(() => {
                    catMessage.classList.add('visible');
                    
                    // Cat plays with ball animation
                    yarnBall.style.animation = 'catPlay 0.5s ease-in-out infinite alternate';
                }, 500);
            }
            
            // Reset when scrolling back up
            if (scrollPercent < 0.85 && catReached) {
                catReached = false;
                yarnBall.style.transition = 'top 0.1s ease, left 0.3s ease';
                yarnBall.style.left = '50px';
                yarnBall.style.animation = '';
                catMessage.classList.remove('visible');
                catContainer.classList.remove('visible');
            }
        });
    }
    
    // Add cat play animation dynamically
    const style = document.createElement('style');
    style.textContent = `
        @keyframes catPlay {
            0% {
                transform: translateX(-50%) rotate(-10deg);
            }
            100% {
                transform: translateX(-50%) rotate(10deg);
            }
        }
    `;
    document.head.appendChild(style);
    
    // ========================================
    // Notification System
    // ========================================
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // Add styles
        Object.assign(notification.style, {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            padding: '15px 25px',
            borderRadius: '5px',
            color: '#fff',
            fontWeight: '500',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            zIndex: '9999',
            animation: 'slideIn 0.3s ease',
            backgroundColor: type === 'success' ? '#48bb78' : type === 'error' ? '#f56565' : '#4299e1'
        });
        
        // Add animation keyframes
        if (!document.querySelector('#notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                @keyframes slideIn {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                @keyframes slideOut {
                    from {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    to {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(notification);
        
        // Remove after 5 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 5000);
    }
    
    // ========================================
    // Intersection Observer for Animations
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .product-card, .value-card, .quality-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add animate-in styles
    const animateStyle = document.createElement('style');
    animateStyle.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(animateStyle);
    
    // ========================================
    // Stats Counter Animation
    // ========================================
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const statObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.textContent;
                const number = parseInt(text.replace(/\D/g, ''));
                const suffix = text.replace(/[\d.]/g, '');
                
                if (!isNaN(number)) {
                    animateCounter(target, number, suffix);
                }
                
                statObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => {
        statObserver.observe(stat);
    });
    
    function animateCounter(element, target, suffix) {
        let current = 0;
        const increment = target / 50;
        const duration = 2000;
        const stepTime = duration / 50;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + suffix;
        }, stepTime);
    }
    
    // ========================================
    // Active Navigation Link
    // ========================================
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === current || 
                link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    // ========================================
    // Image Lazy Loading Fallback
    // ========================================
    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(script);
    }
    
    // ========================================
    // Console Welcome Message
    // ========================================
    console.log('%c🧵 Birinci İplik', 'font-size: 24px; font-weight: bold; color: #c5a065;');
    console.log('%cPremium Thread Manufacturer & Exporter', 'font-size: 14px; color: #1a365d;');
    console.log('%cGaziantep, Turkey', 'font-size: 12px; color: #718096;');
    
});

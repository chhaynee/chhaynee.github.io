// Initialize GSAP animations
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Navigation hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navBrand = document.querySelector('.nav-brand');

// Add click event to nav-brand
navBrand.addEventListener('click', (e) => {
    e.preventDefault();
    const homeSection = document.getElementById('home');
    if (homeSection) {
        gsap.to(window, {
            duration: 0.001,
            scrollTo: {
                y: homeSection,
                offsetY: 100
            },
            ease: "power1.inOut"
        });
    }
});

// Touch and click event handler for hamburger menu
const toggleMenu = () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
};

hamburger.addEventListener('click', toggleMenu);
hamburger.addEventListener('touchstart', toggleMenu);

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    const handleClick = (e) => {
        e.preventDefault();
        
        // Close mobile menu if open
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        
        const targetSection = link.getAttribute('data-section');
        const targetElement = document.getElementById(targetSection);
        
        if (targetElement) {
            gsap.to(window, {
                duration: 0.001,
                scrollTo: {
                    y: targetElement,
                    offsetY: 100
                },
                ease: "power1.inOut"
            });
        }
    };

    link.addEventListener('click', handleClick);
    link.addEventListener('touchstart', handleClick);
});

// Typewriter effect
const typewriter = document.querySelector('.typewriter');
if (typewriter) {
    const text = typewriter.dataset.text;
    let i = 0;
    
    function type() {
        if (i < text.length) {
            typewriter.textContent = text.slice(0, i + 1);
            i++;
            setTimeout(type, 100);
        }
    }
    
    type();
}

// Matrix background effect
function createMatrixEffect() {
    const matrixBg = document.querySelector('.matrix-bg');
    if (!matrixBg) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    matrixBg.appendChild(canvas);
    
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;
    
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    
    const rainDrops = Array(Math.floor(columns)).fill(1);
    
    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';
        
        for(let i = 0; i < rainDrops.length; i++) {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
            
            if(rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    }
    
    // Handle window resize
    window.addEventListener('resize', () => {
        resizeCanvas();
        draw();
    });
    
    // Start animation
    const animationInterval = setInterval(draw, 30);
    
    // Cleanup on page unload
    window.addEventListener('unload', () => {
        clearInterval(animationInterval);
    });
}

// Initialize matrix effect
createMatrixEffect();

// GSAP Animations
gsap.from('.nav-brand', {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: 'power2.out'
});

gsap.from('.nav-link', {
    duration: 1,
    y: -50,
    opacity: 0,
    stagger: 0.1,
    ease: 'power2.out'
});

gsap.from('.terminal-container', {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: 'power2.out'
});

// Scroll animations
gsap.utils.toArray('.about-content, .skills-grid, .project-grid, .leaderboard').forEach(section => {
    gsap.from(section, {
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power2.out'
    });
});

// Terminal logs animation
const logEntries = document.querySelectorAll('.log-entry');
logEntries.forEach((entry, index) => {
    gsap.from(entry, {
        duration: 0.5,
        x: -50,
        opacity: 0,
        delay: index * 0.2,
        ease: 'power2.out'
    });
});

// Project card hover effects
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    const handleHover = (isEnter) => {
        gsap.to(card, {
            duration: 0.3,
            scale: isEnter ? 1.05 : 1,
            ease: 'power2.out'
        });
    };

    card.addEventListener('mouseenter', () => handleHover(true));
    card.addEventListener('mouseleave', () => handleHover(false));
    card.addEventListener('touchstart', () => handleHover(true));
    card.addEventListener('touchend', () => handleHover(false));
});

// Make section headers clickable and scroll to their section
['skills', 'projects', 'ctf'].forEach(sectionId => {
    const header = document.querySelector(`.${sectionId} h2`);
    if (header) {
        const handleClick = () => {
            const section = document.getElementById(sectionId);
            if (section) {
                gsap.to(window, {
                    duration: 0.5,
                    scrollTo: {
                        y: section,
                        offsetY: 70
                    },
                    ease: "power1.inOut"
                });
            }
        };

        header.addEventListener('click', handleClick);
        header.addEventListener('touchstart', handleClick);
    }
});

// Handle reduced motion preferences
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
    document.documentElement.style.setProperty('--transition', 'none');
}

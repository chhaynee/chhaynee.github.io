// Navigation hamburger menu
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking a nav link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
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

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.

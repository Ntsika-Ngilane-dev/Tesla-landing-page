// Carousel functionality
const carouselContainer = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselContainer.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});

// Auto-play carousel
setInterval(() => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
}, 8000);

// Hero carousel
const heroSlides = document.querySelectorAll('.hero-slide');
const heroPrev = document.querySelector('.hero-prev');
const heroNext = document.querySelector('.hero-next');
let heroIndex = 0;
let heroTimer;

function getHeroDelay() {
    return heroIndex === 0 ? 18000 : 12000;
}

function startHeroAutoplay() {
    clearTimeout(heroTimer);
    heroTimer = setTimeout(() => {
        heroIndex = (heroIndex < heroSlides.length - 1) ? heroIndex + 1 : 0;
        updateHeroCarousel();
        startHeroAutoplay();
    }, getHeroDelay());
}

function updateHeroCarousel() {
    heroSlides.forEach((slide, index) => {
        slide.classList.toggle('active', index === heroIndex);
    });
}

heroPrev.addEventListener('click', () => {
    heroIndex = (heroIndex > 0) ? heroIndex - 1 : heroSlides.length - 1;
    updateHeroCarousel();
    startHeroAutoplay();
});

heroNext.addEventListener('click', () => {
    heroIndex = (heroIndex < heroSlides.length - 1) ? heroIndex + 1 : 0;
    updateHeroCarousel();
    startHeroAutoplay();
});

startHeroAutoplay();

// AI Input Placeholder Cycling
const aiInput = document.getElementById('ai-input');
const placeholders = [
    "What is Tesla's latest model?",
    "How does Autopilot work?",
    "Tell me about Tesla's battery technology",
    "What are Tesla's charging options?",
    "How fast can Tesla cars go?",
    "What is Tesla's mission?",
    "How does Tesla's solar work?",
    "What is the range of Tesla vehicles?"
];

let placeholderIndex = 0;

function cyclePlaceholder() {
    placeholderIndex = (placeholderIndex + 1) % placeholders.length;
    aiInput.placeholder = placeholders[placeholderIndex];
}

aiInput.addEventListener('focus', () => {
    aiInput.placeholder = '';
});

aiInput.addEventListener('blur', () => {
    if (aiInput.value === '') {
        aiInput.placeholder = placeholders[placeholderIndex];
    }
});

// Start cycling placeholders
setInterval(cyclePlaceholder, 3000);

// Google Maps for Superchargers - Now using embedded iframe
// function initMap() { ... } // Removed, using iframe embed instead

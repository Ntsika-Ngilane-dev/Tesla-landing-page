// Models carousel
const modelsTrack = document.querySelector('.models-track');
const modelSlides = document.querySelectorAll('.model-slide');
const modelsPrev = document.querySelector('.models-prev');
const modelsNext = document.querySelector('.models-next');
let modelIndex = 0;

function updateModelsCarousel() {
    if (!modelsTrack) {
        return;
    }

    const offset = -modelIndex * 100;
    modelsTrack.style.transform = `translateX(${offset}%)`;
}

if (modelsTrack && modelSlides.length && modelsPrev && modelsNext) {
    modelsPrev.addEventListener('click', () => {
        modelIndex = modelIndex > 0 ? modelIndex - 1 : modelSlides.length - 1;
        updateModelsCarousel();
    });

    modelsNext.addEventListener('click', () => {
        modelIndex = modelIndex < modelSlides.length - 1 ? modelIndex + 1 : 0;
        updateModelsCarousel();
    });
}

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

if (heroSlides.length && heroPrev && heroNext) {
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
}

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

if (aiInput) {
    aiInput.addEventListener('focus', () => {
        aiInput.placeholder = '';
    });

    aiInput.addEventListener('blur', () => {
        if (aiInput.value === '') {
            aiInput.placeholder = placeholders[placeholderIndex];
        }
    });

    setInterval(cyclePlaceholder, 3000);
}

// Google Maps for Superchargers - Now using embedded iframe
// function initMap() { ... } // Removed, using iframe embed instead

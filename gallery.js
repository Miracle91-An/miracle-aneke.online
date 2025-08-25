/**
 * Gallery JavaScript for Miracle Aneke Website
 * Handles image slider functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.gallery-slider .slide');
    const prevBtn = document.querySelector('.gallery-nav .prev');
    const nextBtn = document.querySelector('.gallery-nav .next');
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Initialize first slide
    function initSlider() {
        if (slides.length > 0) {
            slides[currentSlide].classList.add('active');
        }
    }

    function goToSlide(n) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (n + totalSlides) % totalSlides;
        slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    // Button events
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
    }

    // Auto-advance every 5 seconds (optional)
    let slideInterval = setInterval(nextSlide, 5000);

    // Pause auto-advancement when hovering over gallery
    const galleryContainer = document.querySelector('.gallery-container');
    if (galleryContainer) {
        galleryContainer.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });

        galleryContainer.addEventListener('mouseleave', () => {
            slideInterval = setInterval(nextSlide, 5000);
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    });

    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    if (galleryContainer) {
        galleryContainer.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        }, false);

        galleryContainer.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, false);
    }

    function handleSwipe() {
        const swipeThreshold = 50;
        
        if (touchEndX < touchStartX - swipeThreshold) {
            nextSlide();
        }
        
        if (touchEndX > touchStartX + swipeThreshold) {
            prevSlide();
        }
    }

    // Initialize the slider
    initSlider();
});

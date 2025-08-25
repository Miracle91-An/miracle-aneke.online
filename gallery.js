// Gallery Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.gallery-slider .slide');
    const prevBtn = document.querySelector('.gallery-container .prev');
    const nextBtn = document.querySelector('.gallery-container .next');
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Initialize first slide
    if (slides.length > 0) {
        slides[currentSlide].classList.add('active');
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
    setInterval(nextSlide, 5000);

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight') nextSlide();
        if (e.key === 'ArrowLeft') prevSlide();
    });
});

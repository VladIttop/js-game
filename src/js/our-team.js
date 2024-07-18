document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider-list');
    const slides = document.querySelectorAll('.slider-list__slide');
    const prevButton = document.querySelector('.button-previous');
    const nextButton = document.querySelector('.button-next');
    let currentIndex = 0;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1;
        }
        updateSlider();
    });

    nextButton.addEventListener('click', function() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlider();
    });

    updateSlider();
});
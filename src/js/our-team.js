
    const slider = document.querySelector('.slider-list');
    const slides = document.querySelectorAll('.slider-list__slide');
    const prevButton = document.querySelector('.button-previous');
    const nextButton = document.querySelector('.button-next');
    let currentIndex = 0;

    function updateSliderPosition() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    function hideSlide(index) {
        slides[index].style.display = 'none';
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            hideSlide(currentIndex);
            currentIndex--;
            updateSliderPosition();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            hideSlide(currentIndex);
            currentIndex++;
            updateSliderPosition();
        } else {
            hideSlide(currentIndex);
        }
    });


    updateSliderPosition();

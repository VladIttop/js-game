const slider = document.querySelector('.slider-list');
const slides = document.querySelectorAll('.slider-list__slide');
const prevButton = document.querySelector('.button-previous');
const nextButton = document.querySelector('.button-next');
let currentIndex = 0;

function updateSliderPosition() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  const offset = currentIndex * 610
  slider.style.transform = `translateX(-${offset}px)`;
}


prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition1();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSliderPosition();
  }
});

// updateSliderPosition();
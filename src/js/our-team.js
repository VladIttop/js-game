const slider1 = document.querySelector('.slider-list');
const slides = document.querySelectorAll('.slider-list__slide');
const prevButton = document.querySelector('.button-previous');
const nextButton = document.querySelector('.button-next');
let currentIndex = 0;
console.log(slider1);

function updateSliderPosition() {
  slider1.style.transform = `translateX(-${currentIndex * 100}%)`;
  const offset = currentIndex * 610
  slider1.style.transform = `translateX(-${offset}px)`;
}


prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSliderPosition();
  }
});

// updateSliderPosition();
const clickText = document.querySelector('.clickText');
const dropMenu = document.querySelector('.dropdown-menu');
const arrow = document.querySelector(".drop-menu__img")
clickText.addEventListener('click', () => {
  dropMenu.classList.toggle('is-open');
  arrow.classList.toggle("rotated")
});

const btn = document.querySelector('.header-right__btn');
const btnDiv = document.querySelector('.header-right-btn-div');
const img1 = document.querySelector('.header-right-btn-div__img.img1');
const img2 = document.querySelector('.header-right-btn-div__img.img2');

btn.addEventListener('click', () => {
  if (img1.style.display !== 'none') {
    img1.style.display = 'none';
    img2.style.display = 'block';
  } else {
    img1.style.display = 'block';
    img2.style.display = 'none';
  }
  btnDiv.classList.toggle('clicked');
});

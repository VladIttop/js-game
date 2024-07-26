const container = document.querySelector('.dinosaur__container');
const dinosaur = document.querySelector('.dinosaur__dino');
const pointsEl = document.querySelector('.dinosaur__points');
const cactus = document.querySelector('.dinosaur__cactus');
let x = Math.floor(
  dinosaur.getBoundingClientRect().x +
    dinosaur.getBoundingClientRect().width / 2
);
let y = Math.floor(
  dinosaur.getBoundingClientRect().y +
    dinosaur.getBoundingClientRect().width / 2
);
let points = 0;
let timer1;
let timer2;
let timer3;
let isanimation = false;
const jump = function () {
  dinosaur.classList.add('jump');
};
container.addEventListener('click', () => {
  jump();
});

const cactusrun = () => {
  cactus.style.right = `${
    Number(cactus.style.right.split('px')[0]) + 8 + points * 0.05
  }px`;
  x = Math.floor(
    cactus.getBoundingClientRect().x + cactus.getBoundingClientRect().width / 2
  );
  y = Math.floor(
    cactus.getBoundingClientRect().y + cactus.getBoundingClientRect().width / 2
  );

  if (x < 0) {
    cactus.style.display = 'none';
    cactus.style.right = `-60px`;
    setTimeout(() => (cactus.style.display = 'block'), 200);
  }
};

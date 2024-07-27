const dino = document.querySelector('.dinosaur__dino');
const container = document.querySelector('.dinosaur__container');
const pointsToShow = document.querySelector('.dinosaur__points');
const cactus = document.querySelector(".dinosaur__cactus");
let points = 0;
const jump = function () {
  if (dino.classList != 'jump') {
    dino.classList.add('jump');
    setTimeout(function () {
      dino.classList.remove('jump');
    }, 500);
  }
};

container.addEventListener('click', () => {
  jump();
});

setInterval(function () {
  points++;
  pointsToShow.textContent = points;
},100);

let isAlive = setInterval(function() {
  const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
  const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 160) {
    stopGame();
  }
}, 10);

function stopGame() {
  const gameOverMessage = document.createElement('div');
  gameOverMessage.className = 'game-over-message';
  gameOverMessage.textContent = 'Game Over!';
  container.appendChild(gameOverMessage);
  dino.style.animation = 'none';
  cactus.style.animation = 'none';
  points = 0;
}
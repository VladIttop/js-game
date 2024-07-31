const dino = document.querySelector('.dinosaur__dino');
const container = document.querySelector('.dinosaur__container');
const pointsToShow = document.querySelector('.dinosaur__points');
const cactus = document.querySelector('.dinosaur__cactus');
const gameOverMessage = document.getElementById('gameOverMessage');
const resetGame = document.getElementById('startOver');
let points = 0;
let gameInterval;
let checkCollisionInterval;

const startGame = () => {
  points = 0;
  pointsToShow.textContent = points;
  gameOverMessage.classList.remove('showMessage');
  cactus.classList.add('cactus__animation');
  dino.style.animation = "";
  cactus.style.animation = "";

  gameInterval = setInterval(function () {
    pointsToShow.textContent = points;
    points++;
  }, 100);


  checkCollisionInterval = setInterval(function () {
    const dinoTop = parseInt(
      window.getComputedStyle(dino).getPropertyValue('top')
    );
    const cactusLeft = parseInt(
      window.getComputedStyle(cactus).getPropertyValue('left')
    );

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 160) {
      stopGame();
    }
  }, 10);
};

const jump = function () {
  if (!dino.classList.contains('jump')) {
    dino.classList.add('jump');
    setTimeout(function () {
      dino.classList.remove('jump');
    }, 500);
  }
};

container.addEventListener('keydown', e => {
  e.preventDefault();

  if (e.code === 'Space' || e.code === 'ArrowUp') {
    if (!gameInterval) startGame();
    jump();

  }
});
container.addEventListener('click', () => {
  if (!gameInterval) startGame();
  jump();

});

function stopGame() {
  clearInterval(gameInterval);
  clearInterval(checkCollisionInterval);
  gameInterval = null;
  resetGame.classList.add('resetGame');
  gameOverMessage.classList.add('showMessage');
  dino.style.animation = 'none';
  cactus.style.animation = 'none';

}

resetGame.addEventListener('click', () => {
  resetGame.classList.remove('resetGame'); 
  startGame(); 
});

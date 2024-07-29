const dino = document.querySelector('.dinosaur__dino');
const container = document.querySelector('.dinosaur__container');
const pointsToShow = document.querySelector('.dinosaur__points');
const cactus = document.querySelector(".dinosaur__cactus");
let points = 0;


const startGame = () => {
  points = 0;

  // pointsToShow.textContent = points;
  cactus.classList.add('cactus__animation');

  setInterval(function () {
    pointsToShow.textContent = points;

    points++;
  }, 100);

  console.log('game started');

  setInterval(function () {
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 160) {
      stopGame();
    }
  }, 10);

}
const jump = function () {
  if (dino.classList != 'jump') {
    dino.classList.add('jump');
    setTimeout(function () {
      dino.classList.remove('jump');
    }, 500);
  }
};

document.addEventListener('keydown', (e) => {
  e.preventDefault();

  if (e.code === 'Space') {
    startGame();
  }
});
container.addEventListener('click', () => {

  jump();

});




function stopGame() {
  // const gameOverMessage = document.createElement('div');
  cactus.classList.remove('cactus__animation');

  // gameOverMessage.className = 'game-over-message';
  // gameOverMessage.innerHTML = 'Гра Закінчена!';
  // container.appendChild(gameOverMessage);
  // dino.style.animation = 'none';
  // cactus.style.animation = 'none';
  points = 0;



}
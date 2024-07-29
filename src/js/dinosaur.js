const dino = document.querySelector('.dinosaur__dino');
const cactus = document.querySelector('.dinosaur__cactus');
const gameContainer = document.querySelector('.dinosaur__container');
let points = 0;
let jumping = false;
let dinoY = 73;
const initialDinoY = dinoY;
let gameInterval;
let gameStarted = false;

let x = Math.floor(
  dino.getBoundingClientRect().x + dino.getBoundingClientRect().width / 2
);
let y = Math.floor(
  dino.getBoundingClientRect().y + dino.getBoundingClientRect().width / 2
);

const cactusRun = () => {
  cactus.style.right = `${Number(cactus.style.right.split('px')[0]) + 8 + points * 0.05
    }px`;
  x = Math.floor(
    dino.getBoundingClientRect().x + dino.getBoundingClientRect().width / 2
  );

  y = Math.floor(
    dino.getBoundingClientRect().y + dino.getBoundingClientRect().width / 2
  );

  if (parseFloat(cactus.style.right) > 700) {
    cactus.style.display = 'none';
    cactus.style.right = 0;
    setTimeout(() => (cactus.style.display = 'block'), 200);
    points++;
  }
  checkCollision();
};

const checkCollision = () => {
  const dinoRect = dino.getBoundingClientRect();
  const cactusRect = cactus.getBoundingClientRect();

  if (
    dinoRect.x < cactusRect.x + cactusRect.width &&
    dinoRect.x + dinoRect.width > cactusRect.x &&
    dinoRect.y < cactusRect.y + cactusRect.height &&
    dinoRect.height + dinoRect.y > cactusRect.y
  ) {
    alert(`Game Over 
  Ваш рахунок: ${points} `);

    points = 0;
    cactus.style.right = 0;
    clearInterval(gameInterval);
    document.removeEventListener('keydown', handleJump);
    gameStarted = false;
  }
};

const jump = () => {
  if (jumping) return;
  jumping = true;
  let upInterval = setInterval(() => {
    if (dinoY >= 220) {
      clearInterval(upInterval);
      let downInterval = setInterval(() => {
        if (dinoY <= initialDinoY) {
          clearInterval(downInterval);
          jumping = false;
          dinoY = initialDinoY;
        } else {
          dinoY -= 5;
          dino.style.bottom = `${dinoY}px`;
        }
      }, 20);
    } else {
      dinoY += 10;
      dino.style.bottom = `${dinoY}px`;
    }
  }, 20);
};

const handleJump = event => {
  event.preventDefault();
  if (event.code === 'Space') {

    jump();
  }
};

const startGame = () => {
  if (gameStarted) return;
  gameStarted = 0;
  points = 0;
  dinoY = initialDinoY;
  dino.style.bottom = `${dinoY}px`;
  cactus.style.right = `-60px`;
  document.addEventListener('keydown', handleJump);
  gameInterval = setInterval(cactusRun, 20);
};

gameContainer.addEventListener('click', startGame);

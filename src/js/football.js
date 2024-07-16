const footballPitch = document.querySelector('.football-pitch');
const ball = document.querySelector('.football-pitch__ball');

footballPitch.addEventListener('click', event => {
  const ballPositionX = event.offsetX;
  const ballPositionY = event.offsetY;
  if (event.target === ball === false){
    ball.style.left = `${ballPositionX}px`;
    ball.style.top = `${ballPositionY}px`;
  }
});

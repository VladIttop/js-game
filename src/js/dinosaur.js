document.addEventListener("DOMContentLoaded", function() {
    const dino = document.querySelector(".dinosaur__dino");
    const cactus = document.querySelector(".dinosaur__cactus");
    const pointsDisplay = document.querySelector(".dinosaur__points");
    const container = document.querySelector(".dinosaur__container");
    let points = 0;
    let isJumping = false;
    let isGameOver = false;
  
    function jump() {
      if (isJumping) return;
      isJumping = true;
      let jumpHeight = 150;
      let jumpSpeed = 20;
      let downSpeed = 20;
  
      let upInterval = setInterval(() => {
        if (jumpHeight <= 0) {
          clearInterval(upInterval);
  
          let downInterval = setInterval(() => {
            if (jumpHeight >= 150) {
              clearInterval(downInterval);
              isJumping = false;
            }
            dino.style.bottom = jumpHeight + "px";
            jumpHeight += downSpeed;
          }, 20);
        }
        dino.style.bottom = jumpHeight + "px";
        jumpHeight -= jumpSpeed;
      }, 20);
    }
  
    function startGame() {
      points = 0;
      isGameOver = false;
      cactus.style.right = "-50px";
      pointsDisplay.textContent = "Очки: 0";
  
      let gameInterval = setInterval(() => {
        if (isGameOver) {
          clearInterval(gameInterval);
          return;
        }
  
        let cactusPosition = parseInt(window.getComputedStyle(cactus).right);
        if (cactusPosition >= container.clientWidth - cactus.clientWidth - dino.clientWidth) {
          cactus.style.right = "-50px";
          points++;
          pointsDisplay.textContent = "Очки: " + points;
        } else {
          cactus.style.right = cactusPosition + 10 + "px";
        }
  
        let dinoBottom = parseInt(window.getComputedStyle(dino).bottom);
        let dinoLeft = parseInt(window.getComputedStyle(dino).left);
        let dinoWidth = parseInt(window.getComputedStyle(dino).width);
        let cactusBottom = parseInt(window.getComputedStyle(cactus).bottom);
        let cactusRight = parseInt(window.getComputedStyle(cactus).right);
        let cactusWidth = parseInt(window.getComputedStyle(cactus).width);
  
        if (dinoLeft + dinoWidth >= container.clientWidth - cactusRight &&
            dinoLeft <= container.clientWidth - cactusRight + cactusWidth &&
            dinoBottom <= cactusBottom + cactusWidth) {
          isGameOver = true;
          alert("Игра окончена! Ваши очки: " + points);
        }
      }, 100);
    }
  
    document.addEventListener("keydown", function(event) {
      if (event.code === "Space") {
        jump();
      }
    });
  
    startGame();
  });
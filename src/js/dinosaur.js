// document.addEventListener('DOMContentLoaded', function () {
//   const dino = document.querySelector('.dinosaur__dino');
//   const cactus = document.querySelector('.dinosaur__cactus');
//   const pointsDisplay = document.querySelector('.dinosaur__points');
//   let points = 0;
//   let jumping = false;
//   let cactusPosition = window.innerWidth;
//   const gravity = 0.9;
//   let dinoBottom = 20;
//   let gameSpeed = 20;

//   function jump() {
//       if (!jumping) {
//           jumping = true;
//           let jumpHeight = 150;
//           let upInterval = setInterval(() => {
//               if (jumpHeight <= 0) {
//                   clearInterval(upInterval);
//                   let downInterval = setInterval(() => {
//                       if (dinoBottom <= 20) {
//                           clearInterval(downInterval);
//                           jumping = false;
//                       }
//                       dinoBottom -= 5;
//                       dino.style.bottom = dinoBottom + 'px';
//                   }, 20);
//               }
//               dinoBottom += 5;
//               dino.style.bottom = dinoBottom + 'px';
//               jumpHeight -= 5;
//           }, 20);
//       }
//   }

//   function moveCactus() {
//       cactusPosition -= 5;
//       cactus.style.right = cactusPosition + 'px';

//       if (cactusPosition < -30) {
//           cactusPosition = window.innerWidth;
//           points++;
//           pointsDisplay.textContent = points;
//           if (gameSpeed > 5) {
//               gameSpeed -= 0.5; // Increase game speed as score increases
//           }
//       }

//       if (
//           cactusPosition > 50 &&
//           cactusPosition < 80 &&
//           dinoBottom <= 50
//       ) {
//           alert('Game Over! Your score: ' + points);
//           document.location.reload();
//       }

//       setTimeout(moveCactus, gameSpeed);
//   }

//   moveCactus();

//   document.addEventListener('keydown', function (event) {
//       if (event.key === ' ') {
//           jump();
//       }
//   });
// });

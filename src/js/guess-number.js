const btnGuessNumber = document.querySelector(".guess");

function checkNumber() {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  const number = parseInt(document.getElementById('number-input').value);
  const message = document.getElementById('message_numb');
  if (number === randomNumber) {
    message.textContent = 'Вітаю, ви вгадали число! ' + number + '!';
    message.classList.remove('error');
    message.classList.add('success');
    randomNumber = Math.floor(Math.random() * 10) + 1;
  } else {
    message.textContent = 'Спробуйте ще раз! Число було ' + randomNumber + '!';
    message.classList.remove('success');
    message.classList.add('error');
    randomNumber = Math.floor(Math.random() * 10) + 1;
  }
};

btnGuessNumber.addEventListener("click", () => {
    checkNumber();
});
'use strict';
document.addEventListener('DOMContentLoaded', () => {
  const choices = ['stone', 'paper', 'scissors'];
  let userChoice = '';
  let computerChoice = '';

  const userButtons = document.querySelectorAll('.rock-paper-list__button');
  const resultText = document.querySelector('.rock-paper__result');
  const userScoreSpan = document.querySelector(
    '.rock-paper-list__span--person'
  );
  const computerScoreSpan = document.querySelector(
    '.rock-paper-list__span--computer'
  );
  const computerOptionButton = document.querySelector(
    '.rock-paper-computer-option__btn'
  );

  let userScore = 0;
  let computerScore = 0;

  function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'Нічия!';
    }
    if (
      (userChoice === 'stone' && computerChoice === 'scissors') ||
      (userChoice === 'scissors' && computerChoice === 'paper') ||
      (userChoice === 'paper' && computerChoice === 'stone')
    ) {
      userScore++;
      return 'Ви виграли раунд!';
    } else {
      computerScore++;
      return 'Комп’ютер виграв раунд!';
    }
  }

  function updateScore() {
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
  }

  function resetButtonClasses() {
    userButtons.forEach(button => {
      button.classList.remove(
        'rock-paper-list__button--red',
        'rock-paper-list__button--grey',
        'rock-paper-list__button--computer',
        'rock-paper-list__button--draw',
        'rock-paper-list__button--person'
      );
    });
  }

  function resetResultClasses() {
    resultText.classList.remove(
      'rock-paper__result--grey',
      'rock-paper__result--red',
      'rock-paper__result--green'
    );
  }

  function applyButtonClasses(computerChoice, result) {
    const computerButton = Array.from(userButtons).find(
      button => button.querySelector('img').alt === computerChoice
    );
    const userButton = Array.from(userButtons).find(
      button => button.querySelector('img').alt === userChoice
    );

    if (result === 'Нічия!') {
      computerButton.classList.add('rock-paper-list__button--draw');
      userButton.classList.remove('rock-paper-list__button--person');
    } else {
      computerButton.classList.add('rock-paper-list__button--computer');
    }
  }

  function updateResultText(result) {
    resetResultClasses();
    if (result === 'Нічия!') {
      resultText.textContent = result;
      resultText.classList.add('rock-paper__result--grey');
    } else if (result === 'Комп’ютер виграв раунд!') {
      resultText.textContent = result;
      resultText.classList.add('rock-paper__result--red');
    } else if (result === 'Ви виграли раунд!') {
      resultText.textContent = result;
      resultText.classList.add('rock-paper__result--green');
    }
  }

  userButtons.forEach(button => {
    button.addEventListener('click', () => {
      resetButtonClasses();
      userChoice = button.querySelector('img').alt;
      button.classList.add('rock-paper-list__button--person');
      resultText.textContent = '';
    });
  });

  computerOptionButton.addEventListener('click', () => {
    if (userChoice) {
      computerChoice = getComputerChoice();
      const result = determineWinner(userChoice, computerChoice);
      applyButtonClasses(computerChoice, result);
      updateResultText(result);
      updateScore();
      userChoice = '';
    } else {
      resultText.textContent = 'Спочатку виберіть свій варіант!';
      resultText.classList.remove(
        'rock-paper__result--grey',
        'rock-paper__result--red',
        'rock-paper__result--green'
      );
    }
  });
});

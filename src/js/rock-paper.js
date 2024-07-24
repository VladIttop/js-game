document.addEventListener('DOMContentLoaded', () => {
  const choices = ['rock', 'paper', 'scissors'];
  let userChoice = '';
  let computerChoice = '';

  const userButtons = document.querySelectorAll('.rock-paper-list__button');
  const resultDisplay = document.querySelector('.rock-paper__result');
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
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'scissors' && computerChoice === 'paper') ||
      (userChoice === 'paper' && computerChoice === 'rock')
    ) {
      userScore++;
      return 'Ви виграли!';
    } else {
      computerScore++;
      return 'Комп’ютер виграв!';
    }
  }

  function updateScore() {
    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;
  }

  function updateComputerOptionButton(computerChoice) {
    const choiceText = {
      rock: 'Камінь',
      paper: 'Папір',
      scissors: 'Ножиці',
    };
    computerOptionButton.textContent = `Комп’ютер вибрав ${choiceText[computerChoice]}`;
  }

  userButtons.forEach(button => {
    button.addEventListener('click', () => {
      userChoice = button.dataset.choice; 
      computerChoice = getComputerChoice(); 
        updateComputerOptionButton(computerChoice);
      resultDisplay.textContent = '';
    });
  });

  computerOptionButton.addEventListener('click', () => {
    if (userChoice) {
      const result = determineWinner(userChoice, computerChoice);
      resultDisplay.textContent = `Комп’ютер вибрав ${computerChoice}. ${result}`;
      updateScore();
      userChoice = '';
    } else {
      computerOptionButton.textContent = 'Спочатку виберіть свій варіант!';
    }
  });
});

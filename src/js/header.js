const calculator = document.getElementById('calculator');
const timeCalculator = document.getElementById('time-calculator');
const biggestNumber = document.getElementById('biggest-number');
const rockPaper = document.getElementById('rock-paper');
const dinosaur = document.getElementById('dinosaur');


const games = [
  // {
  //   id: document.querySelector('#year-check'),
  //   name: 'Високосний калькулятор',
  //   category: 'numerical',
  // },
  // {
  //   id: document.getElementById('guess-number'),
  //   name: 'Вгадай число',
  //   category: 'numerical',
  // },
  {
    id: rockPaper,
    name: 'Камінь-Ножиці-Папір',
    category: 'game',
  },
  {
    id: calculator,
    name: 'Калькулятор',
    category: 'numerical',
  },
  {
    id: timeCalculator,
    name: 'Калькулятор часу',
    category: 'numerical',
  },
  {
    id: dinosaur,
    name: 'Google динозаврик',
    category: 'game',
  },
  //  {
  //   id: 7,
  //   name: 'Футбол',
  //   category: 'game',
  // },
  {
    id: biggestNumber,
    name: 'Найбільше число',
    category: 'numerical',
  },
  // {
  //   id: 9,
  //   name: 'Наша команда',
  //   category: 'acquaintance',
  // },
  // {
  //   id: 10,
  //   name: 'Вчений',
  //   category: 'acquaintance',
  // },
];

const allSections = document.querySelectorAll('section');
const numerical = document.getElementById('numerical');
const numericalGames = games.filter(game => game.category === 'numerical');
console.log(numericalGames);
const game = document.getElementById('game');
const gameGames = games.filter(game => game.category === 'game');

const acquaintance = document.getElementById('acquaintance');
const acquaintanceGames = games.filter(
  game => game.category === 'acquaintance'
);

numerical.addEventListener('click', () => {
  allSections.forEach(section => {
    section.style.display = 'none';
  });
  numericalGames.forEach(game => {
    game.id.style.display = 'block';
  });
});

game.addEventListener('click', () => {
  allSections.forEach(section => {
    section.style.display = 'none';
  });
  gameGames.forEach(game => {
    game.id.style.display = 'block';
  });
});

const showSections = document.getElementById("showSections");
showSections.addEventListener("click", () => {
allSections.forEach(section => {
  section.style.display = "block";

})
})

const clickText = document.querySelector('.clickText');
const dropMenu = document.querySelector('.dropdown-menu');
const arrow = document.querySelector('.drop-menu__img');
clickText.addEventListener('click', () => {
  dropMenu.classList.toggle('is-open');
  arrow.classList.toggle('rotated');
});

const btn = document.querySelector('.header-right__btn');
const btnDiv = document.querySelector('.header-right-btn-div');
const img1 = document.querySelector('.header-right-btn-div__img.img1');
const img2 = document.querySelector('.header-right-btn-div__img.img2');
const link = document.querySelectorAll('a');
link.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
  });
});
btn.addEventListener('click', () => {
  if (img1.style.display !== 'none') {
    img1.style.display = 'none';
    img2.style.display = 'block';
  } else {
    img1.style.display = 'block';
    img2.style.display = 'none';
  }
  btnDiv.classList.toggle('clicked');
  document.documentElement.classList.toggle('dark');
});

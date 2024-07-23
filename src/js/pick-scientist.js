const scientists = [
  {
    name: 'Albert',
    surname: 'Einstein',
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: 'Isaac',
    surname: 'Newton',
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: 'Galileo',
    surname: 'Galilei',
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: 'Marie',
    surname: 'Curie',
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: 'Johannes',
    surname: 'Kepler',
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: 'Nicolaus',
    surname: 'Copernicus',
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: 'Max',
    surname: 'Planck',
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: 'Katherine',
    surname: 'Blodgett',
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: 'Ada',
    surname: 'Lovelace',
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: 'Sarah E.',
    surname: 'Goode',
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: 'Lise',
    surname: 'Meitner',
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: 'Hanna',
    surname: 'Hammarström',
    born: 1829,
    dead: 1909,
    id: 12,
  },
];

// тобі не потрібно отримувати всі кнопки для того щоб зробити перевірку основна суть цього завдання навчитись рендерити кнопки та вчених в залежності від вибору користувача
// const allBtns = document.querySelectorAll('.facts-list__btn');
// allBtns.forEach(btn => {
//   btn.addEventListener('click', () => {
//     console.log(btn.getAttribute('data-value'));
//     switch (btn.getAttribute('data-value')) {
//       case 'birth':
//         birthCheck();
//         break;
//       case 'einstein':
//         albertEinstein();
//         break;
//       case 'alphabet':
//         alphabet();
//         break;
//       case 'find-c':
//         findC();
//         break;
//       case 'delete-a':
//         deleteA();
//         break;
//       case 'yearsSort':
//         yearsSort();
//         break;
//       case 'earlyYears':
//         earlyYears();
//         break;
//       case 'longestAndSmallestYears':
//         longestAndSmallestYears();
//         break;

//       case 'surname-name':
//         nameSurname();
//         break;
//       default:
//         break;
//     }
//   });
// });

const prompts = [
  'отримати масив вчених що народилися в 19 ст',

  'Відсортувати вчених по алфавіту',
  'Відсортувати вчених по кількості прожитих років',
  'Знайти вченого який народився найпізніше.',
  'Знайти рік народження Albert Einstein',
  'знайти вчених прізвище яких починається на літеру С',
  'Видалити з масива всіх вчених імя яких починається на A',
  'Знайти вченого який прожив найбільше і вченого який прожив найменьше',
  'Знайти вчених в яких співпадають перші літери імені і прізвища',
];
// цього не потрібно
// const nameParagraphs = document.querySelectorAll('.name');
// const surname = document.querySelectorAll('.surname');
// const birthYear = document.querySelectorAll('.birthYear');
// const deathYear = document.querySelectorAll('.deathYear');

// перед тим як вибирати вчених потрібно зарендерити всі кнопки та список зі вченими на сторінку для цього використовуєм цикл та метож innerHTML
// получаємо список 

const scientistsList = document.querySelector('.scientist-list');

// через цикл рендеримо вчених

scientists.forEach((scientist) => scientistsList.innerHTML += `
    <li class="scientist-list__item" data-id="${scientist.id}">

    </li>
`);

// так само з кнопками

const btnsList = document.querySelector('.facts-list');

prompts.forEach((scientist, idx) => btnsList.innerHTML += `
    <li class="scientist__prompt">
        <button class="facts-list__btn" data-promptNum="${idx}">${scientist}</button>
    </li>
`);


// створюємо функцію для показу вчених

const showScientists = (scientistsToShow) => {
  scientistsList.innerHTML = '';
  if (Array.isArray(scientistsToShow)) {
      scientistsToShow.forEach((scientistId) => scientistsList.innerHTML += `
          <li class="scientist-list__item showAnim" data-id="${scientistId}">
              <p class="scientist__name">${scientists.find(scientist => scientist.id === scientistId).name} ${scientists.find(scientist => scientist.id === scientistId).surname}</p>
              <p class="scientist__lifeYears">${scientists.find(scientist => scientist.id === scientistId).born}-${scientists.find(scientist => scientist.id === scientistId).dead} years</p>
          </li>
      `);
      // setTimeout(() => scientistsToShow.forEach((scientistId) => document.querySelector(`.scientist-list__item[data-id="${scientistId}"]`).classList.remove('showAnim')), 200);
  }
  else {
      scientistsList.innerHTML += `
          <li class="scientist-list__item" data-id="${scientistsToShow}">
              <p class="scientist__name">${scientistsToShow.name} ${scientistsToShow.surname}</p>
              <p class="scientist__lifeYears">${scientistsToShow.born}-${scientistsToShow.dead} years</p>
          </li>
      `;
  }
}

// перевірка яку кнопку таниснув користувач та рендеринг відповілних вчених
btnsList.addEventListener('click', (e) => {
  switch (e.target.getAttribute('data-promptNum')) {
      case '0':
          showScientists(scientists.filter(scientist => scientist.born > 1800 && scientist.born <= 1900).map(scientist => scientist.id));
          break;
      case '1':
          showScientists(scientists.sort((a, b) => a.name.localeCompare(b.name)).map(scientist => scientist.id));
          break;
      case '2':
          showScientists(scientists.sort((a, b) => (b.dead-b.born) - (a.dead-a.born)).map(scientist => scientist.id));
          break;
      case '3':
          showScientists(scientists.sort((a, b) => b.born - a.born)[0]);
          break;
      case '4':
          showScientists(scientists.find((scientist) => scientist.name === 'Albert' && scientist.surname === 'Einstein'));
          break;
      case '5':
          showScientists(scientists.filter(scientist => scientist.surname.startsWith('C')).map(scientist => scientist.id));
          break;
      case '6':
          showScientists(scientists.filter(scientist => !(scientist.name.startsWith('A'))).map(scientist => scientist.id));
          break;
      case '7':
          showScientists([Math.max(...scientists.map(scientist => scientist.dead - scientist.born)), Math.min(...scientists.map(scientist => scientist.dead - scientist.born))].map(lifeYears => scientists.find(scientist => scientist.dead - scientist.born === lifeYears).id));
          break;
      case '8':
          showScientists(scientists.filter(scientist => scientist.name[0] === scientist.surname[0]).map(scientist => scientist.id));
          break;
  }
});

// const birthCheck = function () {
//   const filteredElements = scientists.filter(
//     scientist => scientist.born >= 1801 && scientist.born <= 1900
//   );
//   const filteredNames = filteredElements.map(scientist => scientist.name);
//   const filteredSurname = filteredElements.map(scientist => scientist.surname);
//   const filteredYear = filteredElements.map(scientist => scientist.born);
//   const filteredDeath = filteredElements.map(scientist => scientist.dead);
//   nameParagraphs.forEach((paragraph, index) => {
//     paragraph.textContent = filteredNames[index];
//   });
//   surname.forEach((paragraph, index) => {
//     paragraph.textContent = filteredSurname[index];
//   });
//   birthYear.forEach((paragraph, index) => {
//     paragraph.textContent = filteredYear[index];
//   });
//   deathYear.forEach((paragraph, index) => {
//     paragraph.textContent = filteredDeath[index];
//   });
// };

// const albertEinstein = function () {
//   const filteredElements = scientists.filter(
//     scientist => scientist.surname === 'Einstein'
//   );
//   const filteredNames = filteredElements.map(scientist => scientist.name);
//   const filteredSurname = filteredElements.map(scientist => scientist.surname);
//   const filteredYear = filteredElements.map(scientist => scientist.born);
//   const filteredDeath = filteredElements.map(scientist => scientist.dead);

//   nameParagraphs.forEach((paragraph, index) => {
//     paragraph.textContent = filteredNames[index];
//   });
//   surname.forEach((paragraph, index) => {
//     paragraph.textContent = filteredSurname[index];
//   });
//   birthYear.forEach((paragraph, index) => {
//     paragraph.textContent = filteredYear[index];
//   });
//   deathYear.forEach((paragraph, index) => {
//     paragraph.textContent = filteredDeath[index];
//   });
// };

// const alphabet = function () {
//   const allScientists = scientists.slice();

//   allScientists.sort((a, b) => a.surname.localeCompare(b.surname));

//   const filteredNames = allScientists.map(scientist => scientist.name);
//   const filteredSurname = allScientists.map(scientist => scientist.surname);
//   const filteredYear = allScientists.map(scientist => scientist.born);
//   const filteredDeath = allScientists.map(scientist => scientist.dead);

//   nameParagraphs.forEach((paragraph, index) => {
//     paragraph.textContent = filteredNames[index];
//   });
//   surname.forEach((paragraph, index) => {
//     paragraph.textContent = filteredSurname[index];
//   });
//   birthYear.forEach((paragraph, index) => {
//     paragraph.textContent = filteredYear[index];
//   });
//   deathYear.forEach((paragraph, index) => {
//     paragraph.textContent = filteredDeath[index];
//   });
// };

// const findC = function () {
//   const filteredElements = scientists.filter(
//     scientist => scientist.surname[0] === 'C'
//   );

//   const filteredNames = filteredElements.map(scientist => scientist.name);
//   const filteredSurname = filteredElements.map(scientist => scientist.surname);
//   const filteredYear = filteredElements.map(scientist => scientist.born);
//   const filteredDeath = filteredElements.map(scientist => scientist.dead);

//   nameParagraphs.forEach((paragraph, index) => {
//     paragraph.textContent = filteredNames[index];
//   });
//   surname.forEach((paragraph, index) => {
//     paragraph.textContent = filteredSurname[index];
//   });
//   birthYear.forEach((paragraph, index) => {
//     paragraph.textContent = filteredYear[index];
//   });
//   deathYear.forEach((paragraph, index) => {
//     paragraph.textContent = filteredDeath[index];
//   });
// };

// const deleteA = function () {
//   const filteredElements = scientists.filter(
//     scientist => scientist.name[0] !== 'A'
//   );

//   const filteredNames = filteredElements.map(scientist => scientist.name);
//   const filteredSurname = filteredElements.map(scientist => scientist.surname);
//   const filteredYear = filteredElements.map(scientist => scientist.born);
//   const filteredDeath = filteredElements.map(scientist => scientist.dead);

//   nameParagraphs.forEach((paragraph, index) => {
//     paragraph.textContent = filteredNames[index];
//   });
//   surname.forEach((paragraph, index) => {
//     paragraph.textContent = filteredSurname[index];
//   });
//   birthYear.forEach((paragraph, index) => {
//     paragraph.textContent = filteredYear[index];
//   });
//   deathYear.forEach((paragraph, index) => {
//     paragraph.textContent = filteredDeath[index];
//   });
// };

// const nameSurname = function () {
//   const filteredElements = scientists.filter(
//     scientist => scientist.name[0] === scientist.surname[0]
//   );

//   const filteredNames = filteredElements.map(scientist => scientist.name);
//   const filteredSurname = filteredElements.map(scientist => scientist.surname);
//   const filteredYear = filteredElements.map(scientist => scientist.born);
//   const filteredDeath = filteredElements.map(scientist => scientist.dead);

//   nameParagraphs.forEach((paragraph, index) => {
//     paragraph.textContent = filteredNames[index];
//   });
//   surname.forEach((paragraph, index) => {
//     paragraph.textContent = filteredSurname[index];
//   });
//   birthYear.forEach((paragraph, index) => {
//     paragraph.textContent = filteredYear[index];
//   });
//   deathYear.forEach((paragraph, index) => {
//     paragraph.textContent = filteredDeath[index];
//   });
// };

// const yearsSort = function () {
//   const filteredElements = scientists.sort((a, b) => a.born - b.born);
//   const filteredNames = filteredElements.map(scientist => scientist.name);
//   const filteredSurname = filteredElements.map(scientist => scientist.surname);
//   const filteredYear = filteredElements.map(scientist => scientist.born);
//   const filteredDeath = filteredElements.map(scientist => scientist.dead);

//   nameParagraphs.forEach((paragraph, index) => {
//     paragraph.textContent = filteredNames[index];
//   });
//   surname.forEach((paragraph, index) => {
//     paragraph.textContent = filteredSurname[index];
//   });
//   birthYear.forEach((paragraph, index) => {
//     paragraph.textContent = filteredYear[index];
//   });
//   deathYear.forEach((paragraph, index) => {
//     paragraph.textContent = filteredDeath[index];
//   });
// };

// const earlyYears = function () {
//   nameParagraphs.forEach(paragraph => {
//     paragraph.textContent = '';
//   });
//   surname.forEach(paragraph => {
//     paragraph.textContent = '';
//   });
//   birthYear.forEach(paragraph => {
//     paragraph.textContent = '';
//   });
//   deathYear.forEach(paragraph => {
//     paragraph.textContent = '';
//   });

//   const filteredElement = scientists.sort((a, b) => b.born - a.born)[0];

//   if (filteredElement) {
//     nameParagraphs[0].textContent = filteredElement.name;
//     surname[0].textContent = filteredElement.surname;
//     birthYear[0].textContent = filteredElement.born;
//     deathYear[0].textContent = filteredElement.dead;
//   }
// };

// const longestAndSmallestYears = function () {
//   const earlyFiltered = scientists.sort((a, b) => a.born - b.born)[0];
//   if (earlyFiltered) {
//     nameParagraphs[0].textContent = earlyFiltered.name;
//     surname[0].textContent = earlyFiltered.surname;
//     birthYear[0].textContent = earlyFiltered.born;
//     deathYear[0].textContent = earlyFiltered.dead;
//   }

//   const latestFiltered = scientists.sort((a, b) => b.born - a.born)[0];
//   if (latestFiltered) {
//     nameParagraphs[1].textContent = latestFiltered.name;
//     surname[1].textContent = latestFiltered.surname;
//     birthYear[1].textContent = latestFiltered.born;
//     deathYear[1].textContent = latestFiltered.dead;
//   }
// };


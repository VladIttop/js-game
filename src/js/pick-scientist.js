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

const nameParagraphs = document.querySelectorAll('#name');
const surname = document.querySelectorAll('#surname');
const birthYear = document.querySelectorAll('#birthYear');
const deathYear = document.querySelectorAll('#deathYear');

const clearItems = function () {
  nameParagraphs.textContent = '';
  surname.textContent = '';
  birthYear.textContent = '';
  deathYear.textContent = '';
};
birthCheck = function () {
  clearItems();
  const filteredElements = scientists.filter(
    scientist => scientist.born >= 1801 && scientist.born <= 1900
  );
  const filteredNames = filteredElements.map(scientist => scientist.name);
  const filteredSurname = filteredElements.map(scientist => scientist.surname);
  const filteredYear = filteredElements.map(scientist => scientist.born);
  const filteredDeath = filteredElements.map(scientist => scientist.dead);
  nameParagraphs.forEach((paragraph, index) => {
    paragraph.textContent = filteredNames[index];
  });
  surname.forEach((paragraph, index) => {
    paragraph.textContent = filteredSurname[index];
  });
  birthYear.forEach((paragraph, index) => {
    paragraph.textContent = filteredYear[index];
  });
  deathYear.forEach((paragraph, index) => {
    paragraph.textContent = filteredDeath[index];
  });
};

const albertEinstein = function () {
  const filteredElement = scientists.filter(
    scientist => scientist.surname === 'Einstein'
  );
  const year = filteredElement.map(scientist => scientist.born);
  birthYear.textContent = year;
};

const alphabet = function () {
  clearItems();
  const allScientists = scientists.map(scientist => scientist.surname);
  allScientists.sort();
  surname.forEach((paragraph, index) => {
    paragraph.textContent = allScientists[index];
  });
};

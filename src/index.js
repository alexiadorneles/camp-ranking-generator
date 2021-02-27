const ranking = [{ "idCabin": 1, "nrPoints": 75, "createdAt": "2021-02-04T02:08:31.728Z" }, { "idCabin": 6, "nrPoints": 45, "createdAt": "2021-02-04T02:08:31.773Z" }, { "idCabin": 2, "nrPoints": 0, "createdAt": "2021-02-04T02:08:31.738Z" }, { "idCabin": 3, "nrPoints": 0, "createdAt": "2021-02-04T02:08:31.746Z" }, { "idCabin": 4, "nrPoints": 0, "createdAt": "2021-02-04T02:08:31.755Z" }, { "idCabin": 5, "nrPoints": 0, "createdAt": "2021-02-04T02:08:31.765Z" }, { "idCabin": 7, "nrPoints": 0, "createdAt": "2021-02-04T02:08:31.781Z" }, { "idCabin": 8, "nrPoints": 0, "createdAt": "2021-02-04T02:08:31.790Z" }, { "idCabin": 9, "nrPoints": 0, "createdAt": "2021-02-04T02:08:31.797Z" }, { "idCabin": 10, "nrPoints": 0, "createdAt": "2021-02-04T02:08:31.822Z" }, { "idCabin": 11, "nrPoints": 0, "createdAt": "2021-02-04T02:08:31.831Z" }, { "idCabin": 12, "nrPoints": 0, "createdAt": "2021-02-04T02:08:31.840Z" }, { "idCabin": 13, "nrPoints": 0, "createdAt": "2021-02-04T02:08:31.847Z" }, { "idCabin": 14, "nrPoints": 0, "createdAt": "2021-02-04T02:08:31.879Z" }, { "idCabin": 15, "nrPoints": 0, "createdAt": "2021-02-04T02:08:31.889Z" }, { "idCabin": 16, "nrPoints": 0, "createdAt": "2021-02-04T02:08:31.897Z" }, { "idCabin": 17, "nrPoints": 0, "createdAt": "2021-02-04T02:08:31.904Z" }, { "idCabin": 18, "nrPoints": 0, "createdAt": "2021-02-04T02:08:31.925Z" }, { "idCabin": 19, "nrPoints": 0, "createdAt": "2021-02-04T02:08:31.933Z" }, { "idCabin": 20, "nrPoints": 0, "createdAt": "2021-02-04T02:08:31.941Z" }]

const cabinImages = [
  './assets/zeus.png',
  './assets/hera.png',
  './assets/poseidon.png',
  './assets/demeter.png',
  './assets/ares.png',
  './assets/atena.png',
  './assets/apolo.png',
  './assets/artemis.png',
  './assets/hefesto.png',
  './assets/afrodite.png',
  './assets/hermes.png',
  './assets/dionisio.png',
  './assets/hades.png',
  './assets/iris.jpeg',
  './assets/hipnos.jpeg',
  './assets/nemesis.jpeg',
  './assets/nike.jpeg',
  './assets/hebe.jpeg',
  './assets/tique.png',
  './assets/hecate.png',
];

const olympians = [
  'Zeus',
  'Hera',
  'Poseidon',
  'Deméter',
  'Ares',
  'Atena',
  'Apolo',
  'Ártemis',
  'Hefesto',
  'Afrodite',
  'Hermes',
  'Dionísio',
  'Hades',
  'Íris',
  'Hipnos',
  'Nêmesis',
  'Nike',
  'Hebe',
  'Tique',
  'Hécate'
];

const numberToClasses = ['second', 'first', 'third'];

const populateCabinName = () => {
  ranking.forEach((item) => {
    // eslint-disable-next-line
    item.dsName = `${olympians[item.idCabin - 1]}`;
  });
};

populateCabinName();

const createElement = (item, i) => {
  const div = document.createElement('div');
  div.setAttribute('class', 'divinity')
  const image = document.createElement('img');
  const span = document.createElement('span');
  span.setAttribute('class', 'description');
  const p = document.createElement('p');
  p.innerHTML = `#${i + 4} - ${item.dsName}`;
  const points = document.createElement('p');
  points.innerHTML = item.nrPoints;
  span.appendChild(p);
  span.appendChild(points);
  image.src = cabinImages[item.idCabin - 1];
  if (i > 9) {
    image.setAttribute('class', 'small-img');
    div.setAttribute('class', 'small-divinity')
  }
  div.appendChild(image);
  div.appendChild(span);
  return div;
};

const getNumberFromTopThreeIndex = (i) => {
  if (i === 0) return 2;
  if (i === 1) return 1;
  return 3;
};

const createElementTopThree = (item, i) => {
  const div = document.createElement('div');
  const image = document.createElement('img');
  const span = document.createElement('span');
  span.setAttribute('class', `description ${numberToClasses[i]}`);
  const p = document.createElement('p');
  p.innerHTML = `#${getNumberFromTopThreeIndex(i)} - ${item.dsName}`;
  const points = document.createElement('p');
  points.innerHTML = item.nrPoints;
  span.appendChild(p);
  span.appendChild(points);
  image.src = cabinImages[item.idCabin - 1];
  image.setAttribute('class', `${numberToClasses[i]}-img`);
  div.appendChild(image);
  div.appendChild(span);
  return div;
};

function main() {
  const sortedRanking = ranking.sort((a, b) => b.nrPoints - a.nrPoints);
  const container = document.getElementById('root');
  const top3 = document.getElementById('topthree');
  const [first, second, third, ...rest] = sortedRanking;
  [second, first, third].forEach((item, i) => {
    const element = createElementTopThree(item, i);
    top3.appendChild(element);
  });

  let flexDiv = document.createElement('div');
  flexDiv.setAttribute('class', 'flex-div');
  rest.forEach((item, i) => {
    if (i + 1 === 5 || i + 1 === 10 || i + 1 === 17) {
      const element = createElement(item, i);
      flexDiv.appendChild(element);
      container.appendChild(flexDiv);
      flexDiv = document.createElement('div');
      flexDiv.setAttribute('class', 'flex-div');
      return;
    }
    const element = createElement(item, i);
    flexDiv.appendChild(element);
  });
}

// config is like
// {
//  idCabin,
//  pointsToAdd,
// }
function addPoints(configArr) {
  configArr.forEach((config) => {
    const cabinRankingIndex = ranking.indexOf(
      ranking.find(({ idCabin }) => idCabin === config.idCabin),
    );
    ranking[cabinRankingIndex].nrPoints += config.pointsToAdd;
  });
}


main();

const ranking = [
  { idCabin: 6, nrPoints: 5565, createdAt: "2021-07-04T14:13:16.583Z" },
  { idCabin: 17, nrPoints: 5070, createdAt: "2021-07-04T14:13:16.887Z" },
  { idCabin: 3, nrPoints: 4590, createdAt: "2021-07-04T14:13:16.479Z" },
  { idCabin: 10, nrPoints: 4515, createdAt: "2021-07-04T14:13:16.694Z" },
  { idCabin: 9, nrPoints: 4260, createdAt: "2021-07-04T14:13:16.666Z" },
  { idCabin: 13, nrPoints: 4095, createdAt: "2021-07-04T14:13:16.777Z" },
  { idCabin: 4, nrPoints: 3960, createdAt: "2021-07-04T14:13:16.509Z" },
  { idCabin: 20, nrPoints: 3870, createdAt: "2021-07-04T14:13:16.957Z" },
  { idCabin: 8, nrPoints: 3840, createdAt: "2021-07-04T14:13:16.639Z" },
  { idCabin: 5, nrPoints: 3585, createdAt: "2021-07-04T14:13:16.541Z" },
  { idCabin: 15, nrPoints: 3480, createdAt: "2021-07-04T14:13:16.836Z" },
  { idCabin: 11, nrPoints: 3420, createdAt: "2021-07-04T14:13:16.720Z" },
  { idCabin: 7, nrPoints: 3150, createdAt: "2021-07-04T14:13:16.609Z" },
  { idCabin: 12, nrPoints: 3015, createdAt: "2021-07-04T14:13:16.749Z" },
  { idCabin: 14, nrPoints: 3015, createdAt: "2021-07-04T14:13:16.809Z" },
  { idCabin: 1, nrPoints: 3000, createdAt: "2021-07-04T14:13:16.417Z" },
  { idCabin: 2, nrPoints: 2805, createdAt: "2021-07-04T14:13:16.449Z" },
  { idCabin: 16, nrPoints: 2565, createdAt: "2021-07-04T14:13:16.862Z" },
  { idCabin: 18, nrPoints: 0, createdAt: "2021-07-04T14:13:16.910Z" },
  { idCabin: 19, nrPoints: 0, createdAt: "2021-07-04T14:13:16.931Z" },
];

const cabinImages = [
  "./assets/zeus.png",
  "./assets/hera.png",
  "./assets/poseidon.png",
  "./assets/demeter.png",
  "./assets/ares.png",
  "./assets/atena.png",
  "./assets/apolo.png",
  "./assets/artemis.png",
  "./assets/hefesto.png",
  "./assets/afrodite.png",
  "./assets/hermes.png",
  "./assets/dionisio.png",
  "./assets/hades.png",
  "./assets/iris.jpeg",
  "./assets/hipnos.jpeg",
  "./assets/nemesis.jpeg",
  "./assets/nike.jpeg",
  "./assets/hebe.jpeg",
  "./assets/tique.png",
  "./assets/hecate.png",
];

const olympians = [
  "Zeus",
  "Hera",
  "Poseidon",
  "Deméter",
  "Ares",
  "Atena",
  "Apolo",
  "Ártemis",
  "Hefesto",
  "Afrodite",
  "Hermes",
  "Dionísio",
  "Hades",
  "Íris",
  "Hipnos",
  "Nêmesis",
  "Nike",
  "Hebe",
  "Tique",
  "Hécate",
];

const numberToClasses = ["second", "first", "third"];

const populateCabinName = () => {
  ranking.forEach((item) => {
    // eslint-disable-next-line
    item.dsName = `${olympians[item.idCabin - 1]}`;
  });
};

populateCabinName();

const isCabinHebeOrTyche = ({ idCabin }) => {
  return [18, 19].includes(idCabin);
};

const createElement = (item, i) => {
  const div = document.createElement("div");
  div.setAttribute("class", "divinity");
  const image = document.createElement("img");
  const span = document.createElement("span");
  span.setAttribute("class", "description");
  const p = document.createElement("p");
  p.innerHTML = `#${i + 4} - ${item.dsName}`;
  const points = document.createElement("p");
  points.innerHTML = item.nrPoints;
  span.appendChild(p);
  span.appendChild(points);
  image.src = cabinImages[item.idCabin - 1];
  // if 20 uncomment
  // if (i > 9) {
  //   image.setAttribute('class', 'small-img');
  //   div.setAttribute('class', 'small-divinity')
  // }
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
  const div = document.createElement("div");
  const image = document.createElement("img");
  const span = document.createElement("span");
  span.setAttribute("class", `description ${numberToClasses[i]}`);
  const p = document.createElement("p");
  p.innerHTML = `#${getNumberFromTopThreeIndex(i)} - ${item.dsName}`;
  const points = document.createElement("p");
  points.innerHTML = item.nrPoints;
  span.appendChild(p);
  span.appendChild(points);
  image.src = cabinImages[item.idCabin - 1];
  image.setAttribute("class", `${numberToClasses[i]}-img`);
  div.appendChild(image);
  div.appendChild(span);
  return div;
};

function main() {
  const sortedRanking = ranking.sort((a, b) => b.nrPoints - a.nrPoints);
  const container = document.getElementById("root");
  const top3 = document.getElementById("topthree");
  const [first, second, third, ...rest] = sortedRanking;
  [second, first, third].forEach((item, i) => {
    const element = createElementTopThree(item, i);
    top3.appendChild(element);
  });

  let flexDiv = document.createElement("div");
  flexDiv.setAttribute("class", "flex-div");
  rest.forEach((item, i) => {
    if (i + 1 === 5 || i + 1 === 10 || i + 1 === 17) {
      const element = createElement(item, i);
      if (!isCabinHebeOrTyche(item)) {
        flexDiv.appendChild(element);
      }
      container.appendChild(flexDiv);
      flexDiv = document.createElement("div");
      flexDiv.setAttribute("class", "flex-div");
      return;
    }
    // removing 18 and 19
    if (isCabinHebeOrTyche(item)) return;
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
      ranking.find(({ idCabin }) => idCabin === config.idCabin)
    );
    ranking[cabinRankingIndex].nrPoints += config.pointsToAdd;
  });
}

main();

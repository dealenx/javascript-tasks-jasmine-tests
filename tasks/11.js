let Town = class {
  constructor(name, population) {
    this.name = name;
    this.population = population;
  }
};

let townList = [
  new Town("Moscow", 5000000),
  new Town("Tokio #1", 16000001),
  new Town("Tokio #2", 16000002),
  new Town("Tokio #3", 16000003),
  new Town("Tokio #4", 16000004)
];

let printTopTowns = function(townList, countView) {
  let localListTown = [...townList];

  localListTown.sort((a, b) => b.population - a.population);

  localListTown.splice(countView);

  for (town of localListTown) {
    console.log(town.name);
  }
};

printTopTowns(townList, 5);

const data = require('../data/zoo_data');

function buildingFinalArray(oldAnimal) {
  const finalArray = [];
  finalArray.push(oldAnimal.name);
  finalArray.push(oldAnimal.sex);
  finalArray.push(oldAnimal.age);

  return finalArray;
}

function findOldestAnimal(animalId) {
  const findSpecie = data.species.find((specie) => animalId === specie.id);

  const specieResidents = findSpecie.residents;

  let theOldestOne = { age: 0 };
  for (let index = 0; index < specieResidents.length; index += 1) {
    if (specieResidents[index].age > theOldestOne.age) {
      theOldestOne = specieResidents[index];
    }
  }
  return buildingFinalArray(theOldestOne);
}

function getOldestFromFirstSpecies(id) {
  // Encontrar funcionário por id
  const objectEmployee = data.employees.find((employee) => id === employee.id);
  // Primeiro animal pelo qual é responsável
  const firstAnimal = objectEmployee.responsibleFor[0];
  return findOldestAnimal(firstAnimal);
}
module.exports = getOldestFromFirstSpecies;

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

// 'fdb2543b-5662-46a7-badc-93d960fdc0a8' otters
// 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1' lions

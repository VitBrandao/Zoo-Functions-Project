const data = require('../data/zoo_data');
// const getAnimalsOlderThan = require('./getAnimalsOlderThan');

function checkObject(animal) {
  const dataSpecies = data.species;

  const checkAnimal = dataSpecies.find((value) => value.name === animal.specie);
  console.log(checkAnimal)
  if (Object.keys(animal).length === 1) {
    const totalAnimals = checkAnimal.residents.length;
    return totalAnimals;
  }

  const animalSex = checkAnimal.residents;
  const objectSex = animal.sex;
  let howManyAnimals = 0;
  for (let index = 0; index < animalSex.length; index += 1) {
    if (animalSex[index].sex === objectSex) {
      howManyAnimals += 1;
    }
  }

  return howManyAnimals;
}

function countAnimals(animal) {
  const dataSpecies = data.species;

  if (animal === undefined) {
    const totalNumbers = {};
    for (let index = 0; index < dataSpecies.length; index += 1) {
      const key = dataSpecies[index].name;
      const value = dataSpecies[index].residents.length;
      totalNumbers[key] = value;
    }
    return totalNumbers;
  }

  return checkObject(animal);
}
module.exports = countAnimals;

const testObject = { specie: 'bears', sex: 'male' };
console.log(countAnimals(testObject));

// Com o argumento { specie: 'giraffes', sex: 'female' }, retorna um número, a quantidade de girafas do sexo feminino.

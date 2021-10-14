const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalName = data.species.find((value) => animal.includes(value.name));
  const animalList = animalName.residents;

  let cont = 0;
  for (let index = 0; index < animalList.length; index += 1) {
    if (animalList[index].age >= age) {
      cont += 1;
    }
  }

  if (cont === animalList.length) {
    return true;
  }

  return false;
}
module.exports = getAnimalsOlderThan;

console.log(getAnimalsOlderThan('bears', 4));

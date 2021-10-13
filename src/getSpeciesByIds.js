const data = require('../data/zoo_data');



function getSpeciesByIds(ids) {
  const array = data.species.filter((especie) => {
    especie.id === ids;
  });


  // for (let index = 0; index < array.species.length; index += 1) {
  //   if (array.species[index].id === ids) {
  //     return array.species[index];
  //   }
  // }
}

module.exports = getSpeciesByIds;

console.log(getSpeciesByIds('e8481c1d-42ea-4610-8e11-1752cfc05a46'));

// console.log(data.species);
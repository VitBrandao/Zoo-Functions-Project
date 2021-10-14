const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const dataSpecies = [];

  if (ids.length === 0) {
    return dataSpecies;
  }
  return species.filter((specie) => ids.includes(specie.id));
}
module.exports = getSpeciesByIds;

// console.log(getSpeciesByIds('baa6e93a-f295-44e7-8f70-2bcdc6f6948d', '0938aa23-f153-4937-9f88-4858b24d6bce'));
// console.log(data.species);
// 'baa6e93a-f295-44e7-8f70-2bcdc6f6948d'  '0938aa23-f153-4937-9f88-4858b24d6bce'

// const data = require('../data/zoo_data');

// // 'sem parâmetros, retorna animais categorizados por localização'
// function noParameters() {
//   const objectTest = {
//     NE: [],
//     NW: [],
//     SE: [],
//     SW: [],
//   };

//   const keysOfLocation = Object.keys(objectTest);
//   keysOfLocation.forEach((key) => {
//     data.species.forEach((specie) => {
//       if (specie.location.includes(key)) {
//         objectTest[key].push(specie.name);
//       }
//     });
//   });

//   return objectTest;
// }

// function includesSex(value) {
//   return Object.values(value[0]);
// }

// function getAnimalMap(...options) {
//   if (options.length === 0) {
//     return noParameters();
//   }

//   if (options.length === 1) {
//     if (Object.keys(options[0] === 'sex')) {
//       return includesSex(options);
//     }
//   }

//   return 'não rolou';
// }

// module.exports = getAnimalMap;

// console.log(getAnimalMap({ sex: 'female' }));

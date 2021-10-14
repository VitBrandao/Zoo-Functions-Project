const data = require('../data/zoo_data');

// function isManager(id) {
//   const dataEmployees = data.employees;
//   const receivedId = id;

//   // for (let index = 0; index < dataEmployees.length; index++) {
//   //   console.log(dataEmployees[index].managers);

//   //   if (dataEmployees[index].managers === receivedId) {
//   //     return true;
//   //   }

//   // }

//      return false;
//   // console.log(dataEmployees[0].managers);
//   // const filterManagers = dataEmployees.filter((value) => value.managers === id);
//   // console.log(filterManagers);

//   // const verifyManager = dataEmployees.find((value) => value.managers === id);

//   // return verifyManager;
// }

// function getRelatedEmployees(managerId) {
//   const checkManager = isManager(managerId);

//   const dataEmployees = data.employees;
//   const verifyManager = dataEmployees.find((value) => value.id === managerId);

//   if (checkManager === true) {
//     return verifyManager.responsibleFor;
//   } else {
//     throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
//   }
// }

// module.exports = { isManager, getRelatedEmployees };

// // console.log(isManager('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));
// // console.log(getRelatedEmployees('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));

// // console.log(data.employees);
// console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

// // 'fdb2543b-5662-46a7-badc-93d960fdc0a8'
// // '56d43ba3-a5a7-40f6-8dd7-cbb05082383f'
// // '4b40a139-d4dc-4f09-822d-ec25e819a5ad' espera false

console.log(data.species[2].name);

const data = require('../data/zoo_data');

function isManager(id) {
  const dataEmployees = data.employees;
  return dataEmployees.some((employee) => employee.managers.includes(id));
}

function createFinalArray(id) {
  const dataEmployees = data.employees;
  const findManager = dataEmployees.find((employee) => employee.id === id);
  const managerIdentification = findManager.id;

  const finalArray = [];
  dataEmployees.forEach((value) => {
    value.managers.forEach((value2) => {
      if (value2.includes(managerIdentification)) {
        const name = value.firstName;
        const last = value.lastName;
        const fullName = `${name} ${last}`;

        finalArray.push(fullName);
      }
    });
  });

  return finalArray;
}

function getRelatedEmployees(managerId) {
  const verifyManager = isManager(managerId);

  if (verifyManager === true) {
    return createFinalArray(managerId);
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
module.exports = { isManager, getRelatedEmployees };

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

// // 'fdb2543b-5662-46a7-badc-93d960fdc0a8'
// // '56d43ba3-a5a7-40f6-8dd7-cbb05082383f'
// // '4b40a139-d4dc-4f09-822d-ec25e819a5ad' espera false
// '9e7d4524-363c-416a-8759-8aa7e50c0992' true

// console.log(data);

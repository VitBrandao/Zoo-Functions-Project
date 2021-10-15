const data = require('../data/zoo_data');

function isManager(id) {
  const dataEmployees = data.employees;
  return dataEmployees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const verifyManager = isManager(managerId);
  const dataEmployees = data.employees;

  if (verifyManager === true) {
    const findManager = dataEmployees.find((employee) => employee.id === managerId);
    return findManager.responsibleFor;
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

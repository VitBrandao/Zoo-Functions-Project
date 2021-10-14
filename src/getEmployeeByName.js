const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const dataEmployees = data.employees;

  const employeesFirstName = dataEmployees.find((value) => value.firstName === employeeName);
  if (employeesFirstName !== undefined) {
    return employeesFirstName;
  }
  const employeesLastName = dataEmployees.find((value) => value.lastName === employeeName);
  if (employeesLastName !== undefined) {
    return employeesLastName;
  }

  const emptyObject = {};
  return emptyObject;
}

module.exports = getEmployeeByName;

// console.log(getEmployeeByName('Nelson'));
// // 'Nigel' 'Nelson'
// // 'Burl' 'Bethea'

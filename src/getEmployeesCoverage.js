const data = require('../data/zoo_data');

const dataEmployees = data.employees;
const dataSpecies = data.species;

// Função auxiliar para letsFindTheEmployee por questões de lint
function employeeInformation(findEmployee, employeeSpecies, employeeLocations) {
  const employeeId = findEmployee.id;
  const employeeFullName = `${findEmployee.firstName} ${findEmployee.lastName}`;
  const employeeResponsibleFor = findEmployee.responsibleFor;

  for (let index = 0; index < employeeResponsibleFor.length; index += 1) {
    const findSpecie = dataSpecies.find((specie) => specie.id === employeeResponsibleFor[index]);
    employeeSpecies.push(findSpecie.name);
    employeeLocations.push(findSpecie.location);
  }

  const finalObject = {
    id: employeeId,
    fullName: employeeFullName,
    species: employeeSpecies,
    locations: employeeLocations,
  };
  return finalObject;
}

// Função para quando HÁ parâmetros
function letsFindTheEmployee(object) {
  const findEmployee = dataEmployees.find((employee) =>
    employee.firstName === object.name
    || employee.lastName === object.name
    || employee.id === object.id);

  if (findEmployee === undefined) {
    throw new Error('Informações inválidas');
  }

  const employeeSpecies = [];
  const employeeLocations = [];

  const finalObject = employeeInformation(findEmployee, employeeSpecies, employeeLocations);

  return finalObject;
}

const finalArray = [];

// Função auxiliar para noParameters() por questões de lint
function mountFullList(employeeSpecies, employeeLocations, index) {
  const employeeId = dataEmployees[index].id;
  const employeeFullName = `${dataEmployees[index].firstName} ${dataEmployees[index].lastName}`;

  const employeeResponsibleFor = dataEmployees[index].responsibleFor;

  employeeResponsibleFor.forEach((responsible) => {
    const findSpecie = dataSpecies.find((specie) => specie.id === responsible);
    employeeSpecies.push(findSpecie.name);
    employeeLocations.push(findSpecie.location);
  });

  const finalObject = {
    id: employeeId,
    fullName: employeeFullName,
    species: employeeSpecies,
    locations: employeeLocations,
  };
  return finalObject;
}

// Função para quando NÃO HÁ parâmetros
function noParameters(object) {
  for (let index = 0; index < dataEmployees.length; index += 1) {
    const employeeSpecies = [];
    const employeeLocations = [];

    const finalObject = mountFullList(employeeSpecies, employeeLocations, index);

    finalArray.push(finalObject);
  }

  return finalArray;
}

// FUNÇÃO PRINCIPAL
function getEmployeesCoverage(object) {
  // Tem parâmetro ou não?
  if (object !== undefined) {
    return letsFindTheEmployee(object);
  }

  return noParameters(object);
}

module.exports = getEmployeesCoverage;

// const parameter = ({ name: 'Sharonda' });
// console.log(getEmployeesCoverage());
// getEmployeesCoverage({ name: 'Spry' });
// getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' });

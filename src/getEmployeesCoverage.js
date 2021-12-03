const data = require('../data/zoo_data');

// Função para quando HÁ parâmetros
function letsFindTheEmployee(object) {
  const dataEmployees = data.employees;

  // Encontrando funcionário correspondente pelo nome, sobrenome ou id
  const findEmployee = dataEmployees.find((employee) =>
    employee.firstName === object.name ||
    employee.lastName === object.name ||
    employee.id === object.id);

  // Não encontrou ninguém? Lança o erro
  if (findEmployee === undefined) {
    throw new Error('Informações inválidas');
  }

  // Definindo propriedades que já estão no objeto employees
  const employeeId = findEmployee.id;
  const employeeFullName = findEmployee.firstName + ' ' + findEmployee.lastName;

  // Buscando propriedades no objeto species
  const dataSpecies = data.species;
  const employeeResponsibleFor = findEmployee.responsibleFor;

  // Encontrando species e locations
  let employeeSpecies = [];
  let employeeLocations = [];

  for (let index = 0; index < employeeResponsibleFor.length; index += 1) {
    let findSpecie = dataSpecies.find((specie) => specie.id === employeeResponsibleFor[index]);
    employeeSpecies.push(findSpecie.name);
    employeeLocations.push(findSpecie.location)
  }

  // Criando objeto final - já com duas propriedades iniciais
  let finalObject = {
    'id': employeeId,
    'fullName': employeeFullName,
    'species': employeeSpecies,
    'locations': employeeLocations,
  }

  return console.log(finalObject);
}

// Função para quando NÃO HÁ parâmetros
function noParameters(object) {
  const dataEmployees = data.employees;
  const dataSpecies = data.species;

  let finalArray = [];

  for (let index = 0; index < dataEmployees.length; index += 1) {
    let employeeSpecies = [];
    let employeeLocations = [];
    
    const employeeId = dataEmployees[index].id;
    const employeeFullName = `${dataEmployees[index].firstName} ${dataEmployees[index].lastName}`;

    const employeeResponsibleFor = dataEmployees[index].responsibleFor;

    employeeResponsibleFor.forEach((responsible) => {
      let findSpecie = dataSpecies.find((specie) => specie.id === responsible);
      employeeSpecies.push(findSpecie.name);
      employeeLocations.push(findSpecie.location);
    })

    let finalObject = {
      'id': employeeId,
      'fullName': employeeFullName,
      'species': employeeSpecies,
      'locations': employeeLocations,
    }

    finalArray.push(finalObject);
  }

  return console.log(finalArray);

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

const parameter = ({ name: 'Sharonda' });
getEmployeesCoverage();
// getEmployeesCoverage({ name: 'Spry' });
// getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' });

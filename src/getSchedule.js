const data = require('../data/zoo_data');
const externalObject = require('../data/fullSchedule');
const externalObject2 = require('../data/completedSchedule');

// Para nenhum parâmetro
function completeSchedule() {
  const fullSchedule = externalObject;
  return fullSchedule;
}

// Para 'Monday'
function itsMonday() {
  const mondayMessage = {
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };

  return mondayMessage;
}

// Para os outros dias
function findDay(day) {
  if (day === 'Tuesday') {
    const hoursOfTuesday = {
      Tuesday: {
        officeHour: 'Open from 8am until 6pm',
        exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
      },
    };
    return hoursOfTuesday;
  }
  if (day === 'Wednesday') {
    const hoursOfWednesday = {
      Wednesday: {
        officeHour: 'Open from 8am until 6pm',
        exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
      },
    };
    return hoursOfWednesday;
  }
}

// Para animais
function findAnimal(animal) {
  const findAnimals = data.species.find((specie) => specie.name === animal);
  return findAnimals.availability;
}

// Para quando não é um dia nem um animal
function undefinedParameter() {
  const completedSchedule = externalObject2;

  return completedSchedule;
}

// Quebrando função principal para reduzir complexidade
function nextFunction(parameter) {
  if (parameter === 'Tuesday' || parameter === 'Wednesday') {
    return findDay(parameter);
  }

  if (parameter === 'lions' || parameter === 'penguins') {
    return findAnimal(parameter);
  }

  return undefinedParameter();
}

// FUNÇÃO PRINCIPAL
function getSchedule(...parameters) {
  if (parameters.length === 0) {
    return completeSchedule();
  }

  if (parameters[0] === 'Monday') {
    return itsMonday();
  }

  return nextFunction(parameters[0]);
}

module.exports = getSchedule;

// console.log(getSchedule('Monday'));

// CONSERTANDO GetSchedule()

// console.log(getSchedule('penguins'));
// console.log(Object.values(data.hours));

// let exhibitionAnimals = [];
// Object.keys(data.hours).forEach((day) => {
//   data.species.find((specie) => {
//     if (specie.availability.includes(day)) {
//       exhibitionAnimals.push(specie.name);
//     }
//   })
// })
// console.log(exhibitionAnimals);

const data = require('../data/zoo_data');

const officeHourText = 'Open from 8am until 6pm';
const officeHourText2 = 'Open from 10am until 8pm';
const closedZooText = 'The zoo will be closed!';
const externalObject = {
  Tuesday: {
    officeHour: officeHourText,
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: officeHourText,
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: officeHourText2,
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: officeHourText2,
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: [
      'lions', 'tigers',
      'bears', 'penguins',
      'otters', 'frogs',
      'snakes', 'elephants',
    ],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: closedZooText },
};
const externalObject2 = {
  Tuesday: {
    officeHour: officeHourText,
    exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
  },
  Wednesday: {
    officeHour: officeHourText,
    exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
  },
  Thursday: {
    officeHour: officeHourText2,
    exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
  },
  Friday: {
    officeHour: officeHourText2,
    exhibition: ['tigers', 'otters', 'frogs', 'snakes', 'elephants', 'giraffes'],
  },
  Saturday: {
    officeHour: 'Open from 8am until 10pm',
    exhibition: [
      'lions', 'tigers',
      'bears', 'penguins',
      'otters', 'frogs',
      'snakes', 'elephants',
    ],
  },
  Sunday: {
    officeHour: 'Open from 8am until 8pm',
    exhibition: ['lions', 'bears', 'penguins', 'snakes', 'elephants'],
  },
  Monday: { officeHour: 'CLOSED', exhibition: closedZooText },
};

// Para nenhum parâmetro
function completeSchedule() {
  const fullSchedule = externalObject;
  return fullSchedule;
}

// Para 'Monday'
function itsMonday() {
  const mondayMessage = {
    Monday: { officeHour: 'CLOSED', exhibition: closedZooText },
  };

  return mondayMessage;
}

// Para os outros dias
function findDay(day) {
  if (day === 'Tuesday') {
    const hoursOfTuesday = {
      Tuesday: {
        officeHour: officeHourText,
        exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
      },
    };
    return hoursOfTuesday;
  }
  if (day === 'Wednesday') {
    const hoursOfWednesday = {
      Wednesday: {
        officeHour: officeHourText,
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

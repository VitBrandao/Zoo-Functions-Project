const data = require('../data/zoo_data');

// Para nenhum parâmetro
function completeSchedule() {
  const fullSchedule = {
    Tuesday: {
      officeHour: 'Open from 8am until 6pm',
      exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
    },
    Wednesday: {
      officeHour: 'Open from 8am until 6pm',
      exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
    },
    Thursday: {
      officeHour: 'Open from 10am until 8pm',
      exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
    },
    Friday: {
      officeHour: 'Open from 10am until 8pm',
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
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };
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
  const verifyAnimal = data.species.some((animalValue) => animalValue.name === animal);
  const findAnimals = data.species.find((specie) => {
    if (specie.name === animal) {
      return specie;
    }
  });
  return findAnimals.availability;
}

// Para quando não é um dia nem um animal
function undefinedParameter() {
  const completedSchedule = {
    Tuesday: {
      officeHour: 'Open from 8am until 6pm',
      exhibition: ['lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes'],
    },
    Wednesday: {
      officeHour: 'Open from 8am until 6pm',
      exhibition: ['tigers', 'bears', 'penguins', 'otters', 'frogs', 'giraffes'],
    },
    Thursday: {
      officeHour: 'Open from 10am until 8pm',
      exhibition: ['lions', 'otters', 'frogs', 'snakes', 'giraffes'],
    },
    Friday: {
      officeHour: 'Open from 10am until 8pm',
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
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };

  return completedSchedule;
}

// FUNÇÃO PRINCIPAL
function getSchedule(...parameters) {
  if (parameters.length === 0) {
    return completeSchedule();
  }

  if (parameters.includes('Monday')) {
    return itsMonday();
  }

  if (parameters[0] === 'Tuesday' || parameters[0] === 'Wednesday') {
    return findDay(parameters[0]);
  }

  if (parameters[0] === 'lions' || parameters[0] === 'penguins') {
    return findAnimal(parameters[0]);
  }

  return undefinedParameter();
}

module.exports = getSchedule;
console.log(getSchedule('penguins'));

const data = require('../data/zoo_data');

// const object = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

function countEntrants(entrants) {
  const finalObject = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((person) => {
    if (person.age < 18) {
      finalObject.child += 1;
    } else if (person.age >= 18 && person.age < 50) {
      finalObject.adult += 1;
    } else {
      finalObject.senior += 1;
    }
  });

  return finalObject;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }

  const counting = countEntrants(entrants);
  const childPrice = (counting.child * 20.99);
  const adultPrice = (counting.adult * 49.99);
  const seniorPrice = (counting.senior * 24.99);

  const totalPrice = childPrice + adultPrice + seniorPrice;
  return totalPrice;
}

module.exports = { calculateEntry, countEntrants };

// maldito ternary
// person.age < 18 ? finalObject.child += 1 : finalObject.child += 0;
// person.age >= 18 && person.age < 50 ? finalObject.adult += 1 : finalObject.adult += 0;
// person.age >= 50 ? finalObject.senior += 1 : finalObject.senior += 0;

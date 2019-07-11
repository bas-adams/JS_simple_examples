const turtle = {
  name: 'Bob',
  legs: 4,
  shell: true,
  type: 'amphibious',
  meal: 10m
  diet: 'berries'
}

//old way
function feed(animal) {
  return `Feed ${animal.name} ${animal.meal} kilos of ${animal.diet`};
}

//ES6
//bracket syntax in object arguments
function feed( {name, meal, diet} ) {
  return `Feed ${name} ${meal} kilos of ${diet}`;
}

//OR 
function feed(animal) {
  const { name, meal, diet } = animal;
  return `Feed ${name} ${meal} kilos of ${diet}`;
}

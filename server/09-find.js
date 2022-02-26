const numbers = [1,30,49,29,10,13];

// with for 
let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 302323) {
    rta = element;
    break;
  }
}
console.log('for', rta);

// with find module
const rta2 = numbers.find(item => item === 10);
console.log('find', rta2);


const products = [
  {
    name: "Pizza",
    price: 12,
    id: '🍕'
  },
  {
    name: "Burger",
    price: 23,
    id: '🍔'
  },
  {
    name: "Hot dog",
    price: 34,
    id: '🌭'
  },
  {
    name: "Hot cakes",
    price: 355,
    id: '🥞'
  },
];

// find
const rta3 = products.find(item => item.id === '🌭')
console.log('find', rta3);


// findInsex 
const rta4 = products.findIndex(item => item.id === '🥞')
console.log('findIndex', rta4);
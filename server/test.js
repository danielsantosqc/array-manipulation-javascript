const items = [1,2,3,4,5];
console.log(items);

const result = items.reduce((accumulator, item) => accumulator + item, 0);

console.log('respuesta', result);
console.log(items);
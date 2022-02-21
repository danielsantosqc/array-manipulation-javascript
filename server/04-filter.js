const words = ['spray', 'limit', 'elite', 'exuberant'];

// with for
// const newArray = [];
// for (let index = 0; index < words.length; index++) {
//     const item = words[index];
//     if (item.length >= 6) {
//         newArray.push(item);
//     }
// }
// console.log('original', words);
// console.log('newArray', newArray);

// with filter method
// filter create new array
const newArray = words.filter(item => item.length < 6 );
console.log('original', words);
console.log('newArray', newArray);


// -------------------------------------------
const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

const newArray2 = orders.filter(item => item.delivered && item.total > 100);
console.log('original',orders);
console.log('newArray' ,newArray2);

// -----------------------
const search = (query) => {
  return orders.filter(item => {
    return item.customerName.includes(query);
  });
}
console.log('search');
console.log(search("ina"));
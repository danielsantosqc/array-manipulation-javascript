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
console.log('origina', orders);

const newArray = orders.map(item => item.total);
console.log('new Arrayy', newArray);

const newArray2 = orders.map(item => {
  // map es mutable al usarse en objetos
  // item.tax = .10;
  // return item;
  return {
    ...item,
    tax: .10,
  };
});
console.log('origina', orders);

console.log('new Arrayy2', newArray2);
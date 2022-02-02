const letters = ['a','b','c','d'];

letters.forEach(
  item => console.log(item)
);
console.log('--------------');



const names = [
  {
    name: "daniel",
    age : 32,
  },
  {
    name: "NARKEL",
    age : 23,
  },
  {
    name: "JONAS",
    age : 12,
  },
  {
    name: "PINOCHO",
    age :11,
  },
];
names.forEach(item => {
  console.log('nombre:',item.name,", ", item.age, " anos"  );
});

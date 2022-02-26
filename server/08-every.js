const numbers = [1,30,39,29,10,13];

// with for 
let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {
        rta = false
    }
}
console.log('for', rta);

// with every function 
const rta2 = numbers.every(item => item <= 40)
console.log('rta2', rta2);


const team = [
  {
    name: "Nicolas",
    age: 12,
  },
  {
    name: "Andrea",
    age: 8,
  },
  {
    name: "Zulema",
    age: 2,
  },
  {
    name: "Santiago",
    age: 18,
  },
];

const rtaTeams = team.every(item => item.age <= 15);

console.log('team 18yo:', rtaTeams);
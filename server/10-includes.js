const pets = ['cat', 'dog', 'bat'];

// con for 
let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') {
        includeInArray = true;
        break;
    }
}
console.log('for', includeInArray);


// con includes 
const rta = pets.includes('dogi')
console.log('includes', rta);

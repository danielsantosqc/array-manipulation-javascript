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

const rta = pets.includes('dogi')

// con includes 
console.log('for', includeInArray);
console.log('includes', rta);
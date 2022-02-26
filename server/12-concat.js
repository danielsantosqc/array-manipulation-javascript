// concat genera un nuevo array, entonces concat no es inmatable
const elements = [1,2];
const othersElements = [3,4,5,6,7,8,9];

// with for 
const newArray = [...elements];
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index];
    newArray.push(element);
}
console.log('for:', newArray);

// with concat 
const rta = elements.concat(othersElements);
console.log('concat:', rta);

//whit split operation
const rta2 = [...elements, ...othersElements];
console.log('...: ', rta2);

// with push 
elements.push(...othersElements);
console.log('push: ', elements);

// with string 
const rta3 = [...elements, ...'random'];
console.log('rta3', rta3);

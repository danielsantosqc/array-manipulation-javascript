const elements = ["Fire", "Air", "Water"];

// with for 
let rtaFinal = '';
let separator = '--';
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    // separator = (index+1) == elements.length ? "" : "-";   👌
    rtaFinal = rtaFinal + element + separator;
}
console.log('for:', rtaFinal);

// with join 
const rta = elements.join('--')
console.log('join:', rta);

// with split
const title = 'Curso de manipulación de arrays';
const arrayTitle = title.split(' ');
console.log(arrayTitle);

const urlFinal = title.split(' ').join('-').toLowerCase();
console.log(urlFinal);
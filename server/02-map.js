const letters = ['a','b','c','d'];

// using for
// const newArray = [];
// for(let index = 0; index < letters.length; index++){
//   const element = letters[index];
//   newArray.push(element + ": is letter")
// }


// with Array.map
const newArray = letters.map(item => item + ": is letter")



console.log('original',letters);
console.log('new', newArray);

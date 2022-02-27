const matriz = [
  [1,2,3],
  [4,5,6, [6.1, 6.2, [6.21, 6.22]]],
  [7,8,9]
];

// with for 
const newArray = [];
for (let i = 0; i < matriz.length; i++) {
  const array = matriz[i];
  for (let j = 0; j < array.length; j++) {
      const element = matriz[i][j];
      newArray.push(element);
  }
}
console.log('for', newArray);

// with flat method 
const rta = matriz.flat(3);
console.log('flat', rta);

// with recursive function 
function flattenMatrix (matrix){
  let flatArray = [];
  for (const element of matrix) {
    if (Array.isArray(element)){
      flatArray = flatArray.concat(flattenMatrix(element));
    }else{
      flatArray.push(element);
    }
  }
  return flatArray;
}

console.log('function:', flattenMatrix(matriz));


// const flatten = (arr) => arr.reduce((acc, el) => acc.concat(el), []);s
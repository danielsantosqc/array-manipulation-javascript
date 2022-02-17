let lista = document.getElementById("lista");

const cositas = ['👻','👽','😎','🦖'];

// const newArray = [];
// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];
//     newArray.push(element + '++');
// }

const newArray = cositas.map(item => {
    return  `<li>${item}</li>`;
  }
);
lista.innerHTML = newArray.join('');

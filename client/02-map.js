let lista = document.getElementById("lista");

const cositas = ['👻','👽','😎','🦖'];

const newArray = cositas.map(item => {
    return  `<li>${item}</li>`;
  }
);
lista.innerHTML = newArray.join('');

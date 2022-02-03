let lista = document.getElementById("lista");

const cositas = ['👻','👽','😎','🦖'];

const array = cositas.map(item => {
    return  `<li>${item}</li>`;
  }
);
lista.innerHTML = array.join('');

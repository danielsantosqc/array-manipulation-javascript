let lista = document.getElementById("lista");

const cositas = ['👻','👽','😎','🦖'];

cositas.forEach(item => {
    lista.innerHTML += `<li>${item}</li>`;
  }
);
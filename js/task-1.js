const lista = document.querySelector('#categories');
const listaLength = lista.childElementCount; //#//
console.log(`Number of categories: ${listaLength}`);

for (const one of lista.children) {
  const H2 = one.querySelector('h2').textContent;
  const listaInLista = one.querySelector('ul');
  const elementsCount = listaInLista.childElementCount;
  console.log(`Category: ${H2}`);
  console.log(`Elements: ${elementsCount}`);
}

// console.log(lista.children[0].querySelector('h2').textContent);

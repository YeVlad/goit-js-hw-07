function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputNumber = document.querySelector('[type="number"]');
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const mother = document.querySelector('#boxes');
let size = 30;

buttonCreate.addEventListener('click', createDiv);
buttonDestroy.addEventListener('click', destroyBoxes);

function createDiv(event) {
  const amount = inputNumber.value;
  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    for (let i = 0; i < amount; i++) {
      const color = `${getRandomHexColor()}`;
      const box = document.createElement('div');
      box.style.height = `${size}px`;
      box.style.width = `${size}px`;
      size = size + 10;
      box.style.backgroundColor = color;
      mother.append(box);

      inputNumber.value = '';
    }
  }
}

function destroyBoxes() {
  mother.textContent = '';
  size = 30;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const myButton = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const baseColor = document.querySelector('body');

myButton.addEventListener('click', doColor);

function doColor(event) {
  const newColor = `${getRandomHexColor()}`;
  spanColor.textContent = newColor;
  baseColor.style.backgroundColor = spanColor.textContent;
  // spanColor.style.backgroundColor = newColor;
}

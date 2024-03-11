const input = document.querySelector('#name-input');
const userName = document.querySelector('#name-output');
input.addEventListener('input', giveName);
function giveName(event) {
  if (event.currentTarget.value.trim().length == 0) {
    userName.textContent = 'Anonymous';
  } else {
    userName.textContent = event.currentTarget.value.trim();
  }
}

const form = document.querySelector('.login-form');
const inputEmail = document.querySelector('[name="email"]');
const inputPassword = document.querySelector('[name="password"]');
const buttonSubmit = document.querySelector('[type="submit"]');

form.addEventListener('submit', doSubmit);

function doSubmit(event) {
  event.preventDefault();
  if (inputEmail.value === '' || inputPassword.value === '') {
    alert('All form fields must be filled in!');
  } else {
    const array = {};
    const emailName = inputEmail.name;
    const passwordName = inputPassword.name;

    array[emailName] = inputEmail.value.trim();
    array[passwordName] = inputPassword.value.trim();

    console.log(array);

    inputEmail.value = '';
    inputPassword.value = '';
  }
}

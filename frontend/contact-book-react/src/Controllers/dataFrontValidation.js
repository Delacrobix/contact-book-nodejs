import { sendData } from './apiRequests.js';

//----------- DATA VALIDATION FOR CREATE AND UPDATE FORMS -------------
const input_button = document.getElementById('form-input');

input_button.addEventListener('click', (e) => {
  validateData(e);
});

async function validateData(e) {
  let name = document.getElementById('input-name').value.trim();
  let number = document.getElementById('input-number').value.trim();
  let email = document.getElementById('input-email').value.trim();
  let date = document.getElementById('input-date').value.trim();

  if (!name || !number || !email || !date) {
    e.preventDefault();
    alert('Please fill out all fields');
  } else {
    if (validateEmail(email)) {
      let contact = {
        name: name,
        phoneNumber: number,
        email: email,
        birthDate: date,
      };

      const result = await sendData(contact);

      console.log('RESULT: ', JSON.stringify(result));
    }
  }
}

function validateEmail(email) {
  let re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;

  if (!re.exec(email.toLowerCase())) {
    alert('email no valido - please enter a valid email');
    return false;
  } else {
    return true;
  }
}

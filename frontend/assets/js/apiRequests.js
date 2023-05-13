import { queries } from './queries.js';

const { insertQuery, editQuery, deleteQuery } = queries;

const VARIABLES = {
  local: 'http://localhost:8080/graphql',
  prod: '',
};

const ENV = VARIABLES.local;

export function sendData(contact, chose) {
  const query = '';

  if (chose === 'insert') {
  } else {
  }

  fetch(ENV, {
    method: 'POST',
    body: JSON.stringify({ query, contact }),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

  alert('Contacto creado exitosamente');

  window.location.href = '/';
}

export function deleteContact(id) {
  const query = ``;

  fetch(ENV, {
    body: JSON.stringify({ query, id }),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

export function getList() {}

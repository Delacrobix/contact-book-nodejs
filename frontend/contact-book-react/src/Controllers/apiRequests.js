import { queries } from './queries.js';

const VARIABLES = {
  local: 'http://localhost:8080/graphql',
  prod: '',
};

const ENV = VARIABLES.local;

export async function sendData(contact, id) {
  let query = '';
  let result;

  if (!id) {
    query = queries.insertQuery(contact);
  } else {
    query = queries.editQuery(id, contact);
  }

  await fetch(ENV, {
    method: 'POST',
    body: JSON.stringify({ query }),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      result = data;
    })
    .catch((err) => console.error(err));

  alert(result);

  window.location.href = '/';
}

export async function deleteContact(id) {
  const query = queries.deleteQuery(id);
  let result;

  await fetch(ENV, {
    body: JSON.stringify({ query }),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      result = data;
    })
    .catch((err) => console.error(err));

  return result;
}

export async function getList() {
  const query = queries.getAllQuery();
  let result;

  await fetch(ENV, {
    body: JSON.stringify({ query }),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      result = data;
    })
    .catch((err) => console.error(err));

  return result;
}

export async function getById(id) {
  const query = queries.findOneQuery(id);
  let result;

  await fetch(ENV, {
    body: JSON.stringify({ query }),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      result = data;
    })
    .catch((err) => console.error(err));

  return result;
}

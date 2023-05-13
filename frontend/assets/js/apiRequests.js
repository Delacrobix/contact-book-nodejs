const VARIABLES = {
  local: "http://localhost:8080/graphql",
  prod: "",
};

const ENV = VARIABLES.local;

function sendData(contact) {
  fetch(ENV, {
    method: "POST",
    body: JSON.stringify(query),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

  alert("Contacto creado exitosamente");
  window.location.href = "/";
}

export function deleteContact(id) {
  fetch(ENV, {
    body: JSON.stringify(query),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.error(err));
}

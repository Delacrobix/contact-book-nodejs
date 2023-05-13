const insertQuery = (name, phoneNumber, email, birthDate) => {
  return `
    mutation Insert {
      insert(
        name: ${name}
        phoneNumber: ${phoneNumber}
        email: ${email}
        birthDate: ${birthDate}
      )
    }
  `;
};

const editQuery = (id, name, phoneNumber, email, birthDate) => {
  return `
    mutation EditById {
      editById(
        id: ${id}
        name: ${name}
        phoneNumber: ${phoneNumber}
        email: ${email}
        birthDate: ${birthDate}
      )
    }
  `;
};

const findOneQuery = (id) => {
  return `
    query GetContact {
      getContact(id: ${id}) {
        id
        name
        phoneNumber
        email
        birthDate
      }
    }
  `;
};

const getAllQuery = `
  query ContactList {
    contactList {
      id
      name
      phoneNumber
      email
      birthDate
    }
  }
`;

const deleteQuery = (id) => {
  return `
    mutation DeleteById {
      deleteById(id: ${id})
    }
  `;
};

export const queries = {
  insertQuery,
  editQuery,
  deleteQuery,
  findOneQuery,
  getAllQuery,
};

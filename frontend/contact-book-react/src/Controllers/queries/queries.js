import { gql } from '@apollo/client';

const insertQuery = (contact) => {
  return gql`
    mutation Insert {
      insert(
        name: ${contact.name}
        phoneNumber: ${contact.phoneNumber}
        email: ${contact.email}
        birthDate: ${contact.birthDate}
      )
    }
  `;
};

const editQuery = (id, contact) => {
  return gql`
    mutation EditById {
      editById(
        id: ${id}
        name: ${contact.name}
        phoneNumber: ${contact.phoneNumber}
        email: ${contact.email}
        birthDate: ${contact.birthDate}
      )
    }
  `;
};

const findOneQuery = (id) => {
  return gql`
    query {
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

const getAllQuery = gql`
  query {
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
  return gql`
    mutation DeleteById {
      deleteById(id: ${id})
    }
  `;
};

export const Queries = {
  insertQuery,
  editQuery,
  deleteQuery,
  findOneQuery,
  getAllQuery,
};

import { gql } from '@apollo/client';

const insertMutation = (contact) => {
  return gql`
    mutation {
      insert(
        name: "${contact.name}"
        phoneNumber: "${contact.phoneNumber}"
        email: "${contact.email}"
        birthDate: "${contact.birthDate}"
      )
    }
  `;
};

const editMutation = (id, contact) => {
  return gql`
    mutation {
      editById(
        id: "${id}"
        name: "${contact.name}"
        phoneNumber: "${contact.phoneNumber}"
        email: "${contact.email}"
        birthDate: "${contact.birthDate}"
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

const deleteMutation = (id) => {
  return gql`
    mutation DeleteById {
      deleteById(id: ${id})
    }
  `;
};

export const Queries = {
  insertMutation,
  editMutation,
  deleteMutation,
  findOneQuery,
  getAllQuery,
};

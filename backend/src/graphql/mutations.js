import { GraphQLID, GraphQLNonNull, GraphQLString } from 'graphql';
import {
  deleteContact,
  editContact,
  insertContact,
} from '../controllers/contactsControllers';

//Create a new user object in the database
export const insert = {
  type: GraphQLString,
  description: 'Insert a new contact on database',
  args: {
    name: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    email: { type: GraphQLString },
    birthDate: { type: GraphQLString },
  },
  async resolve(_, args) {
    const { name, phoneNumber, email, birthDate } = args;

    if (
      [name, phoneNumber, email, birthDate].some(
        (value) => value === 'undefined'
      )
    ) {
      return 'Some data is undefined';
    }

    const date = new Date(birthDate);
    try {
      await insertContact({
        name,
        phoneNumber,
        email,
        birthDate: date,
      });

      console.log('New contact added: ', name);

      return 'New contact inserted successfully';
    } catch (err) {
      console.log('Error inserting contact: ', err);

      throw new Error('Failed to insert contact');
    }
  },
};

export const deleteById = {
  type: GraphQLString,
  description: 'Delete a contact on database',
  args: {
    id: { type: GraphQLID },
  },
  async resolve(_, args) {
    const { id } = args;

    if (id === 'undefined') {
      return 'Some data is undefined';
    }

    try {
      await deleteContact(id);

      console.log('Contact deleted');

      return 'Contact deleted successfully';
    } catch (err) {
      console.error('Error deleting contact: ', err);
      throw new Error('Failed to delete contact');
    }
  },
};

export const editById = {
  type: GraphQLString,
  description: 'Edit a contact',
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    email: { type: GraphQLString },
    birthDate: { type: GraphQLString },
  },
  async resolve(_, args) {
    const { id, name, phoneNumber, email, birthDate } = args;

    if (
      [id, name, phoneNumber, email, birthDate].some(
        (value) => value === 'undefined'
      )
    ) {
      return 'Some data is undefined';
    }

    const date = new Date(birthDate);
    try {
      const newContact = await editContact(id, {
        name,
        phoneNumber,
        email,
        birthDate: date,
      });

      console.log('Contact edited: ', name);

      return 'Contact edited successfully';
    } catch (err) {
      console.error('Error editing contact: ', err);

      throw new Error('Failed to edit contact');
    }
  },
};

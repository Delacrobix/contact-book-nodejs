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

    const date = new Date(birthDate);
    try {
      const newContact = await insertContact({
        name,
        phoneNumber,
        email,
        birthDate: date,
      });

      console.log('New contact: ', newContact);

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

    try {
      await deleteContact(id);

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

    const date = new Date(birthDate);
    try {
      await editContact(id, {
        name,
        phoneNumber,
        email,
        birthDate: date,
      });

      return 'Contact edited successfully';
    } catch (err) {
      console.error('Error editing contact: ', err);

      throw new Error('Failed to edit contact');
    }
  },
};

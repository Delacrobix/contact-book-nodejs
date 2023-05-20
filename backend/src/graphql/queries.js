import { GraphQLID, GraphQLList } from 'graphql';
import { ContactType } from './types';
import {
  getAll,
  findContactById,
  convertSQLDateToString,
} from '../controllers/contactsControllers';

export const contactList = {
  type: new GraphQLList(ContactType),
  description: 'Return a list of contacts',
  async resolve() {
    try {
      const contacts = await getAll();
      return contacts;
    } catch (error) {
      console.error(error);
      throw new Error('Error getting contacts list');
    }
  },
};

export const getContact = {
  type: ContactType,
  description: 'Returns a single contact by id',
  args: {
    id: { type: GraphQLID },
  },
  async resolve(_, args) {
    try {
      const [contact] = await findContactById(args.id);

      const stringDate = convertSQLDateToString(contact.birthDate);
      contact.birthDate = stringDate;

      return contact;
    } catch (error) {
      console.error(error);
      throw new Error('Error getting single contact');
    }
  },
};

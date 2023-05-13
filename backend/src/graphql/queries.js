import { GraphQLID, GraphQLList, GraphQLString } from 'graphql';
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
    const contacts = await getAll();

    return contacts;
  },
};

export const getContact = {
  type: ContactType,
  description: 'Returns a single contact by id',
  args: {
    id: { type: GraphQLID },
  },
  async resolve(_, args) {
    const [contact] = await findContactById(args.id);

    const stringDate = convertSQLDateToString(contact.birthDate);
    contact.birthDate = stringDate;

    return contact;
  },
};

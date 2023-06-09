import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { contactList, getContact } from './queries';
import { insert, editById, deleteById } from './mutations';

const QueryType = new GraphQLObjectType({
  name: 'QueryType',
  description: 'The query type',
  fields: {
    contactList,
    getContact,
  },
});

const MutationType = new GraphQLObjectType({
  name: 'MutationType',
  description: 'The mutation type',
  fields: {
    insert,
    editById,
    deleteById,
  },
});

export const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});

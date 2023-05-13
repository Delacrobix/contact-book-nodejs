import { GraphQLID, GraphQLObjectType, GraphQLString } from 'graphql';

export const ContactType = new GraphQLObjectType({
  name: 'ContactType',
  description: 'Data type for a contact',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    email: { type: GraphQLString },
    birthDate: { type: GraphQLString },
  },
});

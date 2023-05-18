import { GraphQLListener } from 'graphql';
import { PubSub } from 'apollo-server';

export const contactAdded = {
  type: new GraphQLList(ContactType),
  description: 'Return a list of contacts',
  async resolve() {
    const pubSub = new PubSub();
    suscribe: () => pubSub.asyncIterator('CONTACT_ADDED');
  },
};

import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { test, contactList } from "./queries";
import { testMutation, insert } from "./mutations";

const QueryType = new GraphQLObjectType({
  name: "QueryType",
  description: "The query type",
  fields: {
    test,
    contactList,
  },
});

const MutationType = new GraphQLObjectType({
  name: "MutationType",
  description: "The mutation type",
  fields: { testMutation, insert },
});

export const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});

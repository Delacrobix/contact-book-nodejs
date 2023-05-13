import { GraphQLID, GraphQLList, GraphQLString } from "graphql";
import { ContactType } from "./types";
import { getAll, findById } from "../controllers/contactsControllers";

export const test = {
  type: GraphQLString,
  description: "Returns a string",
  resolve: () => "This is a test",
};

export const contactList = {
  type: new GraphQLList(ContactType),
  description: "Return a list of contacts",
  async resolve() {
    const contacts = await getAll();

    return contacts;
  },
};

export const contact = {
  type: GraphQLString,
  description: "Returns a single contact by id",
  args: {
    id: { type: GraphQLID },
  },
  async resolve(_, args) {
    const contact = await findById(args.id);
    return contact;
  },
};

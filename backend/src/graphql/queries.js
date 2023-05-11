import { GraphQLID, GraphQLList, GraphQLString } from "graphql";
import { ContactType } from "./types";
import { getAll } from "../controllers/contactsControllers";
//import modelsExported from "../models/exports";

// const { User, Rhythm, Song } = modelsExported;

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

// export const song = {
//   type: GraphQLString,
//   description: "Returns a single song by id",
//   args: {
//     id: { type: GraphQLID },
//   },
//   async resolve(_, args) {
//     const song = await Song.findById(args.id);
//     return song;
//   },
// };

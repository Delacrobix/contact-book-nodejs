import { GraphQLString } from "graphql";
import {
  deleteContact,
  editContact,
  insertContact,
} from "../controllers/contactsControllers";

//Create a new user object in the database
export const insert = {
  type: GraphQLString,
  description: "Insert a new contact on database",
  args: {
    name: { type: GraphQLString },
    phoneNumber: { type: GraphQLString },
    email: { type: GraphQLString },
    birthDate: { type: GraphQLString },
  },
  async resolve(_, args) {
    const { name, phoneNumber, email, birthDate } = args;
    //console.log("Register mutation args: ", args);
    let date = birthDate.year + "-" + birthDate.month + "-" + birthDate.day;

    console.log("Date: ", date);

    const newContact = await insertContact({
      name,
      phoneNumber,
      email,
      birthDate: date,
    });

    console.log("New user: ", newContact);
    return "New contact inserted successfully";
  },
};

export const testMutation = {
  type: GraphQLString,
  description: "Register a new user",
  args: {
    test: { type: GraphQLString },
  },
  async resolve(_, args) {
    const { test } = args;
    //console.log("Register mutation args: ", args);

    console.log("ARG: ", test);
    return "New user created";
  },
};

import { db } from "../db/mysqlConnection";

export async function getAll() {
  const [result] = await db.query("SELECT * FROM contact");

  return result;
}

export async function findContactById(id) {
  const [result] = await db.query("SELECT * FROM contact WHERE id = id");

  return result;
}

export async function deleteContact(id) {
  const [result] = await db.query(`DELETE FROM contact WHERE id = ${id}`);

  return result;
}

export async function editContact(id, contact) {
  const { name, phoneNumber, email, birthDate } = contact;

  const query = sql`UPDATE contact SET name = name, phone_number = phoneNumber, email = email, birth_date = birthDate WHERE id = id`;

  const [result] = await db.query(query, [name, phoneNumber, email, birthDate]);

  return result;
}

export async function insertContact(contact) {}

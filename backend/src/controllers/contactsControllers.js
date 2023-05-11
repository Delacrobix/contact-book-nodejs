import { db } from "../db/mysqlConnection";

export async function getAll() {
  const [result] = await db.query("SELECT * FROM contact");

  return result;
}

export async function findById(id) {
  const [result] = await db.query("SELECT * FROM contact WHERE id = id");

  return result;
}

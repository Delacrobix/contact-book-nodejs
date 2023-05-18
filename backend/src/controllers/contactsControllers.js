import { db } from '../db/mysqlConnection';

export async function getAll() {
  const [result] = await db.query(`SELECT * FROM contact`);

  return result;
}

export async function findContactById(id) {
  const [result] = await db.query(`SELECT * FROM contact WHERE id = ?`, [id]);

  return result;
}

export async function deleteContact(id) {
  await db.query(`DELETE FROM contact WHERE id = ?`, [id]);
}

export async function editContact(id, contact) {
  const { name, phoneNumber, email, birthDate } = contact;

  const query = `
    UPDATE contact 
    SET name = ?, phoneNumber = ?, email = ?, birthDate = ? 
    WHERE id = ?
  `;
  await db.query(query, [name, phoneNumber, email, birthDate, id]);
}

export async function insertContact(contact) {
  const { name, phoneNumber, email, birthDate } = contact;

  const query = `
    INSERT INTO contact (name, phoneNumber, email, birthDate) 
    VALUES(?, ?, ?, ?)
  `;

  try {
    const [result] = await db.query(query, [
      name,
      phoneNumber,
      email,
      birthDate,
    ]);

    return result;
  } catch (err) {
    console.error('SQL error inserting contact: ', err);
    throw new Error('Error saving contact on database');
  }
}

export function convertSQLDateToString(date) {
  const year = date.toLocaleDateString('en-US', { year: 'numeric' });
  const month = date.toLocaleDateString('en-US', { month: '2-digit' });
  const day = date.toLocaleDateString('en-US', { day: '2-digit' });

  const dateString = `${year}-${month}-${day}`;

  return dateString;
}

import { createPool } from 'mysql2/promise';

const environments = {
  HOST: process.env.HOST,
  PORT: process.env.DB_PORT,
  USER: process.env.USER,
  PASSWORD: process.env.PASSWORD,
  DATABASE: process.env.DATABASE,
};

export const db = createPool({
  user: environments.USER,
  password: environments.PASSWORD,
  host: environments.HOST,
  port: environments.PORT,
  database: environments.DATABASE,
});

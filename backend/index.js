import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { createHandler } from 'graphql-http/lib/use/express';
import '@babel/register';

dotenv.config({ path: '.env.local' });
export const app = express();

//HTTP SERVER CONFIG
const PORT = process.env.PORT;

app.listen({ port: PORT }, () => {
  console.log('Server listening on port ' + PORT);
});

//With this sentence we can to charge this file later than the dotenv configuration
const { schema } = require('./src/graphql/schema');

app.use(cors());
app.use(
  '/graphql',
  createHandler({
    schema: schema,
  })
);

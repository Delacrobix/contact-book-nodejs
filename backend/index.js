import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { createHandler } from 'graphql-http/lib/use/express';
import '@babel/register';

dotenv.config({ path: '.env.local' });
export const app = express();

//HTTP SERVER CONFIG
const PORT = process.env.PORT;
const CORS_1 = process.env.CORS_1;

app.listen({ port: PORT }, () => {
  console.log('Server listening on port ' + PORT);
});

//With this sentence we can to charge this file later than the dotenv configuration
const { schema } = require('./src/graphql/schema');

const corsOptions = {
  origin: `${CORS_1}`,
  methods: 'POST',
};

app.use(cors(corsOptions));
app.use(
  '/graphql',
  createHandler({
    schema: schema,
  })
);

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
// import { router } from './src/routes/routes';
import { createHandler } from 'graphql-http/lib/use/express';
import '@babel/register';

import('./src/server');

dotenv.config({ path: '.env.local' });
export const app = express();

//With this sentence we can to charge that file later than the dotenv configuration
const { schema } = require('./src/graphql/schema');

// app.use(router);
app.use(cors());
app.use(
  '/graphql',
  createHandler({
    schema: schema,
  })
);

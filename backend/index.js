import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { createHandler } from 'graphql-http/lib/use/express';
import { createServer as createHttpServer } from 'http';
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

const corsOptions = {
  origin: [
    'http://contact-book-nodejs.surge.sh/',
    'https://contact-book-nodejs.surge.sh/',
    'http://delacrobix.github.io/contact-book-nodejs/',
    'https://delacrobix.github.io/contact-book-nodejs/',
    'https://delacrobix.github.io/',
    'http://delacrobix.github.io/',
    'http://localhost:3000',
  ],
  methods: 'POST',
  optionsSuccessStatus: 200,
  exposedHeaders: 'Access-Control-Allow-Origin',
};

app.use(cors());
app.use(
  '/graphql',
  createHandler({
    schema: schema,
  })
);

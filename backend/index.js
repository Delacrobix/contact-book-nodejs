import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { createHandler } from 'graphql-http/lib/use/express';
import { createServer as createHttpServer } from 'http';
import '@babel/register';

dotenv.config({ path: '.env.local' });
export const app = express();

//HTTP SERVER CONFIG
const PORT = process.env.HTTP_PORT;
const httpServer = createHttpServer(app);

httpServer.listen({ port: PORT }, () => {
  console.log('Server listening on port ' + PORT);
});

//With this sentence we can to charge that file later than the dotenv configuration
const { schema } = require('./src/graphql/schema');

const corsOptions = {
  origin: [
    'https://contact-book-nodejs.surge.sh',
    'https://delacrobix.github.io/contact-book-nodejs/',
  ],
  optionsSuccessStatus: 200,
  exposedHeaders: 'Access-Control-Allow-Origin',
};

// Aplicar el middleware CORS
app.use(cors(corsOptions));
app.use(
  '/graphql',
  createHandler({
    schema: schema,
  })
);

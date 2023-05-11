import express from "express";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import { router } from "./src/routes/routes";
import { createHandler } from "graphql-http/lib/use/express";
import "@babel/register";

import("./src/server");

dotenv.config({ path: ".env.local" });
export const app = express();

const statics = path.join(__dirname, "..", "frontend", "assets");
const views = path.join(__dirname, "..", "frontend", "views");

//With this sentence we can to charge that file later than the dotenv configuration
const { schema } = require("./src/graphql/schema");

app.use(router);
//app.use(cors());
app.use(
  "/graphql",
  createHandler({
    schema: schema,
  })
);

app.set("views", views);
app.set("view engine", "pug");
app.use(express.static(statics));

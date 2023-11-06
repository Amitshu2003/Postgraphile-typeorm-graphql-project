import "reflect-metadata"

const express = require("express");
const post_graphile = require("./postgraphile");
import { AppDataSource } from "./data-source";

const app = express();

AppDataSource.initialize()
  .then(() => {
    console.log("db connected");
  })
  .catch((error: any) => console.log(error));


app.use(post_graphile);


app.listen(4000, () => console.log("server running on port 4000"));

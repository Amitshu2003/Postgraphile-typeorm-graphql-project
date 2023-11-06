const { postgraphile } = require("postgraphile");

import { DemoPlugin } from "./plugins/DemoPlugin";
import { ToDoPlugin } from "./plugins/ToDoPlugin";

module.exports = postgraphile(
  "postgres://postgres:8989@localhost:5433/test",
  "public",
  {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
    dynamicJson: true,
    // disableDefaultMutations:true,
    appendPlugins: [ToDoPlugin, DemoPlugin],
  }
);

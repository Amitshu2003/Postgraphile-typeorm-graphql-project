import { makeExtendSchemaPlugin } from "graphile-utils";
import { ToDoSchema } from "../graphql/ToDoSchema";
import { ToDoResolver } from "../graphql/ToDoResolver";

export const ToDoPlugin = makeExtendSchemaPlugin((build): any => {
  return {
    typeDefs: ToDoSchema,
    resolvers: ToDoResolver,
  };
});

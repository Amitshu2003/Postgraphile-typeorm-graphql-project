import { makeExtendSchemaPlugin } from "graphile-utils";
import { demoSchema } from "../graphql/DemoSchema";
import { demoResolver } from "../graphql/DemoResolver";

export const DemoPlugin = makeExtendSchemaPlugin((build): any => {
  return {
    typeDefs: demoSchema,
    resolvers: demoResolver,
  };
});

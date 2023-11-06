import { gql } from "postgraphile";

export const demoSchema = gql`
  type Demo {
    message: String
  }
  extend type Query {
    demo: Demo
  }
`;

import { gql } from "postgraphile";

export const ToDoSchema = gql`
  type ToDo {
    id:ID
    title: String
    desc: String
  }
  type UserToDo {
    id: ID
    name: String
    todos: [ToDo]
  }
  type createOutput {
    status: Boolean!
    msg: String
  }

  extend type Query {
    getAllToDos: [UserToDo]
  }

  extend type Mutation {
    createTodoByUser(userid: ID, title: String, desc: String): createOutput
  }
`;

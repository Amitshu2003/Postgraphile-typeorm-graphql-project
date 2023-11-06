import { createToDoTask, getAllToDoTasks } from "../service/ToDoService";

export const ToDoResolver = {
  Query: {
    getAllToDos: async () => {
      let data =  await getAllToDoTasks();
      return data
    },
  },

  Mutation: {
    createTodoByUser: async (_, { userid, title, desc }) => {
      let data = await createToDoTask(userid, title, desc);

      if (data) return { status: true, msg: "todo created successfully" };

      return { status: false, msg: "something went wrong" };
    },
  },
};

import { AppDataSource } from "../data-source";
import { Todo } from "../entity/Todo";
import { User } from "../entity/User";

const todoRepo = AppDataSource.getRepository(Todo);

export const createToDoTask = async (userid, title, desc) => {
  try {
    const todo = new Todo();
    todo.desc = desc;
    todo.title = title;
    todo.user = userid;

    let data = await todoRepo.save(todo);

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const getAllToDoTasks = async () => {
  // const userRepo = AppDataSource.getRepository(User);
  // let data = await userRepo.find({ relations: ["todos"] });
  // console.log(data);
  let data = await AppDataSource.getRepository(User)
    .createQueryBuilder("user")
    .leftJoinAndSelect("user.todos", "todo")
    .getMany();

  return data;
};

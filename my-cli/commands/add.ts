import chalk from "chalk";
import conf from "conf";

const Conf = new conf();

export default function add(task: string) {
  let todoList = Conf.get("todo-list");
  if (!todoList) {
    todoList = [];
  }
  todoList.push({
    text: task,
    id: todoList.length || 0,
    done: false,
  });

  Conf.set("todo-list", todoList);

  console.log(chalk.green.bold("Task has been added successfully!"));
}

import chalk from "chalk";
import conf from "conf";

const Conf = new conf();

let todoList = Conf.get("todo-list");
export const remove = ({ tasks }) => {
  if (!todoList) {
    console.log(chalk.bgYellowBright("There is no task todo"));
    return;
  }

  if (tasks) {
    let todos = tasks.map((item) => {
      item = parseInt(item);
      return item;
    });
    todoList = todoList.filter((todo_item) => {
      let taskIndex = todos.indexOf(todo_item.id);
      if (taskIndex === -1) {
        console.log(chalk.bgRed("There is no task with this id"));
        return;
      }
      let taskNumber = todos[taskIndex];
      // return todo_item.id !== taskNumber;
      if (todo_item.id === taskNumber) {
        console.log(
          chalk.redBright(`Task with id ${taskNumber} has been removed`)
        );
      }
      return todo_item.id !== taskNumber;
    });
  }

  if (!tasks) {
    todoList = [];
    console.log(chalk.bgGreen("All tasks have been removed"));
  }

  Conf.set("todo-list", todoList);
};

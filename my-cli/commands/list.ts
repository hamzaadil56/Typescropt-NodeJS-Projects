// const conf = new (require("conf"))();
import chalk from "chalk";
import conf from "conf";

const Conf = new conf();

export default function list() {
  const todoList = Conf.get("todo-list");
  if (todoList && todoList.length) {
    console.log(
      chalk.blue.bold(
        "Tasks in green are done. Tasks in yellow are still not done."
      )
    );
    todoList.forEach((task) => {
      if (task.done) {
        console.log(chalk.greenBright(`${task.id}. ${task.text}`));
      } else {
        console.log(chalk.yellowBright(`${task.id}. ${task.text}`));
      }
    });
  } else {
    console.log(chalk.red.bold("You don't have any tasks yet."));
  }
}

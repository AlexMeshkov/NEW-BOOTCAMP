import {TodoList} from "./todo.js";

const todoList = new TodoList();

todoList.addTask("Task 1");
todoList.addTask("Task 2");
todoList.addTask("Task 3");
todoList.addTask("Task 4");
todoList.addTask("Task 5");


todoList.completeTask(1);

const tasks = todoList.listTasks();
console.log('All Tasks:', tasks);


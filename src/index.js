import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach( todo => crearTodoHtml(todo));
// todoList.todos.forEach(crearTodoHtml);//es lo mismo hacerlo asi porque manda el mismo argumento solo funciona si hay un solo argumento

// const tarea = new Todo('Aprender JavaScript');

// todoList.nuevoTodo( tarea );


// console.log( todoList);

// crearTodoHtml( tarea );

todoList.todos[1].imprimirClase();

console.log('todos', todoList.todos);
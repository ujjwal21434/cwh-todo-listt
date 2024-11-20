import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';
import { TodoItemComponent } from "../todo-item/todo-item.component";
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: Todo[] = [];
  localItem: string = '';

  constructor() {
    if (typeof window !== 'undefined' && localStorage) {
      this.localItem = localStorage.getItem("todos") || "";
      this.todos = this.localItem ? JSON.parse(this.localItem) : [];
    } else {
      this.todos = [];
    }
  }

  deleteTodo(todo: Todo) {
    console.log("Delete todo", todo);
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  }

  addTodo(todo: Todo) {
    console.log("Add todo", todo);
    todo.active = todo.active ?? false;  // Ensure active property is initialized
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
}

  toggleTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  

  title: string = '';
  desc: string = '';

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  onSubmit() {
    const todo: Todo = {
        sno: 8, // This could be dynamic as per your implementation
        title: this.title,
        desc: this.desc,
        active: true
    };
    this.todoAdd.emit(todo);
    console.log('Form Submitted');
    console.log('Title:', this.title);
    console.log('Description:', this.desc);
}
}

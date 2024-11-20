import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo | undefined;
  @Input() index: number | undefined;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log('Button Clicked');
  }

  onCheckboxClick(todo: Todo | undefined) {
    if (todo) {
        this.todoCheckbox.emit(todo);
        console.log(todo);
        console.log('Checkbox Clicked');
    } else {
        console.warn('Todo is undefined');
    }
}
}

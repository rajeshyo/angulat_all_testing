import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../../core/models/todo.model';


@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.scss'
})
export class TodoFormComponent implements OnChanges{
  @Input() editTodo?: Todo;
  @Output() save = new EventEmitter<Todo>();

  todo: Todo = { id: 0, title: '', description: '' };

  ngOnChanges(changes: SimpleChanges) {
    if (changes['editTodo'] && this.editTodo) {
      this.todo = { ...this.editTodo };
    }
  }

  onSubmit() {
    if (!this.todo.id) this.todo.id = Date.now();
    this.save.emit(this.todo);
    this.todo = { id: 0, title: '', description: '' };
  }
}
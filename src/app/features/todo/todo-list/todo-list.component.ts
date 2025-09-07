import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../../../core/services/todo.service';
import { Todo } from '../../../core/models/todo.model';
import { TodoFormComponent } from '../todo-form/todo-form.component';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule,TodoFormComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent {
todos: Todo[] = [];
  selectedTodo?: Todo;

  constructor(private todoService: TodoService) {
    this.loadTodos();
  }

  loadTodos() {
    this.todos = this.todoService.getTodos();
  }

  handleSave(todo: Todo) {
    if (this.selectedTodo) {
      this.todoService.update(todo);
      this.selectedTodo = undefined;
    } else {
      this.todoService.add(todo);
    }
    this.loadTodos();
  }

  edit(todo: Todo) {
    this.selectedTodo = { ...todo };
  }

  delete(id: number) {
    this.todoService.delete(id);
    this.loadTodos();
  }
}
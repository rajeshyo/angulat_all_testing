// src/app/core/services/todo.service.ts
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private storageKey = 'todos';

  getTodos(): Todo[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  saveTodos(todos: Todo[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(todos));
  }

  add(todo: Todo) {
    const todos = this.getTodos();
    todos.push(todo);
    this.saveTodos(todos);
  }

  update(updated: Todo) {
    const todos = this.getTodos().map(t => t.id === updated.id ? updated : t);
    this.saveTodos(todos);
  }

  delete(id: number) {
    const todos = this.getTodos().filter(t => t.id !== id);
    this.saveTodos(todos);
  }
}

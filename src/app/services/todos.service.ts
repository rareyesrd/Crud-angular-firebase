import { Injectable } from '@angular/core';
import { Todos } from '../models/todos';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos = [
    {
      id: 1,
      task: 'Create an app',
      completed: false
    },
    {
      id: 2,
      task: 'Use Angular',
      completed: false
    },
    {
      id: 3,
      task: 'Use Firebase',
      completed: false
    }
  ];

  constructor() { }

  onAddTodo(id: number, task: string, completed: boolean): void {
    this.todos.push({
      id,
      task,
      completed
    });
    console.log(this.todos);
  }

  onDeleteTodo(id: number): void {
    const index = this.todos.indexOf(todo.id);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }
}

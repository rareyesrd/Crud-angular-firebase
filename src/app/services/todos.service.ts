import { Injectable } from '@angular/core';
// import { Todos } from '../models/todos';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor() {
    
  }

  // getTodos(): any[] {
  //   return this.todos.slice();
  // }

   onAddTodo(task: string, completed: boolean): void {
  //   this.todos.push({
  //     id: this.todos.length + 1,
  //     task,
  //     completed,
  //   });
   }
}

import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Todos } from '../models/todos';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todoList: AngularFireList<any>;
  selectedProduct: Todos = new Todos();

  constructor(private db: AngularFireDatabase) {}

  getProducts() {
    return (this.todoList = this.db.list('Todos'));
  }

  onAddTodo(todo: Todos) {
    this.todoList.push({
      task: todo.task,
      completed: false,
    });
  }

  updateTodo(todo: Todos) {
    this.todoList.update(todo.$key, {
      task: todo.task,
      completed: false,
    });
  }

  deleteProduct($key: string) {
    this.todoList.remove($key);
  }
}

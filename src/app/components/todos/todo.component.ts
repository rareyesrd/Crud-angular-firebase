import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todos } from 'src/app/models/todos';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoList: Todos[];
  todos: any[];
  task: string;
  constructor(public todoService: TodosService) {}

  ngOnInit() {
    return this.todoService
      .getProducts()
      .snapshotChanges()
      .subscribe((item) => {
        this.todoList = [];
        item.forEach((element) => {
          let x = element.payload.toJSON();
          x['$key'] = element.key;
          this.todoList.push(x as Todos);
        });
      });
  }

  addTodo(todoForm: NgForm) {
    if (todoForm.value.$key == null) this.todoService.onAddTodo(todoForm.value);
    else this.todoService.updateTodo(todoForm.value);
    this.resetForm(todoForm);
  }

  resetForm(productForm?: NgForm) {
    if (productForm != null) productForm.reset();
    this.todoService.selectedProduct = new Todos();
  }
}

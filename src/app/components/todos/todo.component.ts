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
  todos: any[];
  task: string;
  constructor(private todoService: TodosService) {}

  ngOnInit(): void {
    this.todoService.getProducts();
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

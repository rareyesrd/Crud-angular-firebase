import { Component, EventEmitter, OnInit } from '@angular/core';
import { Todos } from 'src/app/models/todos';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  todoList: Todos[];

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    return this.todosService
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

  onCompleted(todo: Todos): void {
    todo.completed = !todo.completed;
  }

  onDelete($key: string) {
    if (confirm('Are you sure you want to delete it?')) {
      this.todosService.deleteProduct($key);
      // this.toastr.warning('Deleted Successfully', 'Product Removed');
    }
  }
}

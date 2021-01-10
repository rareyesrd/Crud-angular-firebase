import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Todos } from 'src/app/models/todos';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todos;

  constructor(private todosService: TodosService) {}

  ngOnInit() {
    
  }

  onCompleted(todo: Todos): void {
    todo.completed = !todo.completed;
  }

  onEdit(todo: Todos) {
    this.todosService.selectedProduct = Object.assign({}, todo);
  }

  onDelete($key: string) {
    if (confirm('Are you sure you want to delete it?')) {
      this.todosService.deleteProduct($key);
      // this.toastr.warning('Deleted Successfully', 'Product Removed');
    }
  }
}

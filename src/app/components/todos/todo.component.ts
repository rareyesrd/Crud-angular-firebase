import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/models/todos';
import { TodosService } from 'src/app/services/todos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todos[];
  task: string;
  item$: Observable<any[]>;

  constructor(private todosService: TodosService) {
  }

  ngOnInit(): void {
    this.todos = this.todosService.todos;
  }

  addTodo(): void {
    this.todosService.onAddTodo(this.task, false);
    this.task = '';
  }

  onDeleteTodo(todo: Todos): void {
    this.todos = this.todos.filter(t => t.id !== todo.id);
  }
}

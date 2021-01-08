import { Component, Input, OnInit } from '@angular/core';
import { Todos } from 'src/app/models/todos';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todos;
  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
  }

  onCompleted(todo: Todos): void{
    todo.completed = !todo.completed;
  }
  onDelete(todo: Todos): void{
    this.todosService.onDeleteTodo(todo.id);
  }
}

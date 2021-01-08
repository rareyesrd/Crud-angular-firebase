import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todos } from 'src/app/models/todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todos;
  @Output() deleteTodo = new EventEmitter<Todos>();
  constructor() { }

  ngOnInit(): void {
  }

  onCompleted(todo: Todos): void{
    todo.completed = !todo.completed;
  }

  onDelete(todo: Todos): void{
    this.deleteTodo.emit(todo);
  }
}

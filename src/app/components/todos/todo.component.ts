import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Todos } from 'src/app/models/todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: any[];
  task: string;

  constructor(private db: AngularFireDatabase) {}

  ngOnInit(): void {
    this.db
      .list('Todos')
      .valueChanges()
      .subscribe((todo) => {
        this.todos = todo;
      });
  }

  addTodo(): void {
    this.db.list(`Todos`).push({
      id: this.todos.length + 1,
      task: this.task,
      completed: false,
    });
    this.task = '';
  }

  onDeleteTodo(todo: Todos): void {
    const ref = this.db.list(`Todos`).valueChanges()
    .subscribe((todo) => {
      console.log(todo.id);
    });
    // console.log(ref);
    // ref.remove(`${todo.id}`);
  }
}

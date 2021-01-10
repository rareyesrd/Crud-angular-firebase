import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// ==== Routing  ==== //
import { AppRoutingModule } from './app-routing.module';

// ==== Firebase  ==== //
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

// ==== Components  ==== //
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoComponent } from './components/todos/todo.component';
import { TodoItemComponent } from './components/todos/todo-item/todo-item.component';
import { AboutComponent } from './components/about/about.component';
import { environment } from 'src/environments/environment';

// ==== Services  ==== //
import { TodosService } from './services/todos.service';

@NgModule({
  declarations: [ 
    AppComponent,
    HeaderComponent,
    TodoComponent,
    TodoItemComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [TodosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

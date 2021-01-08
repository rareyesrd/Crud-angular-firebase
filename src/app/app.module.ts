import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoComponent } from './components/todos/todo.component';
import { TodoItemComponent } from './components/todos/todo-item/todo-item.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule } from '@angular/forms';


// 1. Import the libs you need
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { AngularFireAuthModule } from '@angular/fire/auth';

// Set the configuration for your app
// TODO: Replace with your project's config object
// const config = {
//   apiKey: '415926186615',
//   authDomain: 'crud-angular-firebase-b511d.firebaseapp.com',
//   databaseURL: 'https://databaseName.firebaseio.com',
//   storageBucket: 'bucket.appspot.com'
// };
// firebase.initializeApp(config);

// // Get a reference to the database service
// database = firebase.database();


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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

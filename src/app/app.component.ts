import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var config = {
      apiKey: "AIzaSyBPBxYGDyXMlMA59uFtqT68INna3XGtMx4",
      authDomain: "biblio-263c7.firebaseapp.com",
      databaseURL: "https://biblio-263c7.firebaseio.com",
      projectId: "biblio-263c7",
      storageBucket: "",
      messagingSenderId: "1071842112380"
    };
    firebase.initializeApp(config);
  }
}

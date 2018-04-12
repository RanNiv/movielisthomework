import { Component } from '@angular/core';
import {Movie} from "./movie"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 movie:Movie;

  onClick (p:Movie) {
    this.movie=p;
  
}

}
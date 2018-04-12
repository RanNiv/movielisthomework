import { Component, OnInit,Input } from '@angular/core';
import {Movie} from "../movie"



@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component  {
@Input() movie:Movie;

  constructor() { }

  

  }



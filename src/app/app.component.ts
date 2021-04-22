import { Component } from '@angular/core';
import {Receipe} from './model/receipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'receipeApp';
  recipe: Receipe;
  constructor() {
    this.recipe = new Receipe('Banana Bread', 'Banana bread is good', null, null, null);
  } 
}

import { Component } from '@angular/core';
import {Receipe} from '../../model/receipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent  {
  recipes: Receipe[];
  constructor() {
    this.recipes = [
      new Receipe('Banana Bread', 'Banana bread is good', 4, 60, null, null, null),
      new Receipe('Farmstead Tofu', 'Farmstead Tofu is good', 5, 30, null, null, null),
      new Receipe('Pasta Carbornar', 'pasta is good', 10, 10, null, null, null)
    ];
  }

}

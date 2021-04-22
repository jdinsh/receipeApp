import {Component, Input} from '@angular/core';
import {Receipe} from '../../model/receipe';

@Component({
  selector: 'app-recipe-summary',
  templateUrl: './recipe-summary.component.html',
  styleUrls: ['./recipe-summary.component.css']
})
export class RecipeSummaryComponent  {

  @Input()
  recipe: Receipe;
  constructor() { }


}

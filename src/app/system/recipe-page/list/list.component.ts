import { Component, OnInit } from '@angular/core';
import {RecipesService} from '../../../shared/services/recipes.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(
    private recipesService: RecipesService
  ) {}

  private recipeList;

  async ngOnInit() {
    this.recipeList = await this.recipesService.getRecipes();

    this.recipesService.onCreateRecipe
      .subscribe((rec) => {
        this.recipesService.getRecipes().then(res => this.recipeList = res);
        console.log('new' + this.recipeList);
        console.log(rec);
      });
  }

  onDelete(id) {
    this.recipesService.deleteRecipe(id)
      .subscribe((res) => {this.recipesService
        .getRecipes()
          .then(ress => this.recipeList = ress);
      });
  }

/*    onUpdate(id) {
    this.recipesService.updateRecipe(id)
     /!* .subscribe((res) => console.log(res))*!/
      .subscribe((res) => {this.recipesService
        .getRecipes()
        .then(ress => this.recipeList = ress);
  });
    }*/


  onUpdate(id) {
    this.recipesService.getRecipeForID(id)
      .subscribe((res) => {this.recipesService
        .getRecipes()
        .then(ress => this.recipeList = ress);
      });
  }

/*onSubmit() {
    alert('YPA!');
}*/

}

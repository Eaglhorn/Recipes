import { Component, OnInit } from '@angular/core';
import {RecipesService} from '../../../shared/services/recipes.service';
import {Recipe} from '../../../shared/models/recipes.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  recipe =  new Recipe();
  constructor(
    private recipesService: RecipesService
  ) {}

  private recipeList;
  private currentRec = {};
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



  change(rec): void {
    this.currentRec = rec;
  }


onChanges(recipe: Recipe): void {
  console.log(recipe);
  this.recipesService.updateRecipe(recipe);

}


}

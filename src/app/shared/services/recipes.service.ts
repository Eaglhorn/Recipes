import {Injectable, Output} from '@angular/core';
import {HttpClient,  HttpHeaders} from '@angular/common/http';

import { EventEmitter } from '@angular/core';
import {Recipe} from '../models/recipes.model';


@Injectable()
export class RecipesService {
  constructor(private http: HttpClient) {
  }
   id: number;
/*  recipes = [];
  recipe: object = {};*/
private headers = new HttpHeaders({'Content-Type': 'application/json'});


  getRecipes() {
    return this.http.get('http://localhost:3000/recipes').toPromise()
      .then(res => {
        console.log(res);
        return res;
      });
  }



  @Output() onCreateRecipe = new EventEmitter();

    createNewRecipes(recipe: Recipe) {
    return this.http.post('http://localhost:3000/recipes', recipe)
      .subscribe(() => {
        this.onCreateRecipe.emit(recipe);
      });

    }

  deleteRecipe(id) {
    if (confirm('Вы уверены?')) {
      const url = `http://localhost:3000/recipes/${id}`;
      return this.http.delete(url, {headers: this.headers})
        .map(res => {
          console.log(res);
        });
    }
  }
/*  updateRecipe(id) {
    const url = `http://localhost:3000/recipes/${id}`;
      return this.http.get(url,{headers: this.headers})
        .map(res => {
          console.log(res);
        });


    }*/

  getRecipeForID(id) {
    const url = `http://localhost:3000/recipes/${id}`;
    return this.http.get(url,{headers: this.headers})/*.toPromise()*/
      .map(res => {
        console.log(res);
        return res;
      });
  }

  updateRecipe(recipe: Recipe): void {
    const url = `http://localhost:3000/recipes/${recipe.id}`;
    this.http.put(url, recipe)
      .subscribe(
      );
  }
/*  updateRecipe() {
      return this.http.get('http://localhost:3000/recipes')
        .subscribe((res) => {
          for (var i = 0; i < this.recipes.length; i++) {
            if (parseInt(this.recipes[i].id) === this.id) {
              this.recipe = this.recipes[i];
              break;
            }
          }
        });
  }*/



}

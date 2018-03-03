import {Injectable, Output} from '@angular/core';
import {HttpClient,  HttpHeaders} from '@angular/common/http';

import { EventEmitter } from '@angular/core';
import {Recipe} from '../models/recipes.model';


@Injectable()
export class RecipesService {
  constructor(private http: HttpClient) {
  }
   id: number;
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

}

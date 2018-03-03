import { Component, OnInit } from '@angular/core';
import {RecipesService} from '../../../shared/services/recipes.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Recipe} from '../../../shared/models/recipes.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  form: FormGroup;

  constructor(
    private recipesService: RecipesService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'ingredient': new FormControl(null, [Validators.required])
    });
  }
  onSubmit() {

    console.log(this.form);

    const { name, ingredient } = this.form.value;
    const recipe = new Recipe(name, ingredient);

    this.recipesService.createNewRecipes(recipe);
    this.form.reset('');

  }

}

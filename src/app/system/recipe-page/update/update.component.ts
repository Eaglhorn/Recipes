import { Component, OnInit } from '@angular/core';
import {Recipe} from '../../../shared/models/recipes.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
/*  id: number;
  recipe: object = {};
  recipes = [];
  recipeObject: object = {};
  private headers = new HttpHeaders({'Content-Type': 'application/json'});*/

  constructor(
/*    private router: Router,
    private route : RouterLinkActive,
    private http: HttpClient*/
  ) {}

  ngOnInit() {
  }

  onSubmit(recipe: Recipe) {

  }
}

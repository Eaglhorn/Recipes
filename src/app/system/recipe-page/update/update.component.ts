import {Component, OnInit, TemplateRef} from '@angular/core';
import {Recipe} from '../../../shared/models/recipes.model';


import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {RecipesService} from '../../../shared/services/recipes.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  private recipeList;

  constructor(
    private modalService: BsModalService,
    private recipesService: RecipesService,
    private http: HttpClient
  ) {}

  ngOnInit() {
/*    this.http.get('http://localhost:3000/recipes')
      .subscribe((res) => {
        for (let i = 0; i < this.recipes.length; i++) {
          if (parseInt(this.recipes[i].id) === this.id) {
            this.recipe = this.recipes[i];
            break;
          }
        }
      });*/
  }

    onUpdate(id) {
this.recipesService.getRecipeForID(id)
  .subscribe((res) => {this.recipesService
  .getRecipes()
  .then(ress => this.recipeList = ress);
});
    }

/*  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }*/

/*  onUpdate(id) {
    this.recipeService.updateRecipe(id)
      /!*.subscribe((res) => console.log(res))*!/
      .subscribe((res) => {this.recipeService
        .getRecipes()
        .then(ress => this.data = ress);
  }*/
}

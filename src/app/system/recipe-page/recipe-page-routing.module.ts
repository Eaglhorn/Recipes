import {RouterModule, Routes} from '@angular/router';
import {RecipePageComponent} from './recipe-page.component';

import {UpdateComponent} from './update/update.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: 'recipe-page', component: RecipePageComponent, children: [
      /*{path: 'update', component: UpdateComponent}*/
    ]}
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RecipePageRoutingModule {}

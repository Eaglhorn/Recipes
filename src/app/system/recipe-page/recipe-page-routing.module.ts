import {RouterModule, Routes} from '@angular/router';
import {RecipePageComponent} from './recipe-page.component';

import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: 'recipe-page', component: RecipePageComponent, children: [
    ]}
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RecipePageRoutingModule {}

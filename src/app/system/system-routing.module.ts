import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SystemComponent} from './system.component';
import {RecipePageComponent} from './recipe-page/recipe-page.component';
import {UpdateComponent} from './recipe-page/update/update.component';


const routes: Routes = [
  {path: 'system', component: SystemComponent, children: [
      {path: 'recipe', component: RecipePageComponent}
      ]}
];

@NgModule({
 imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SystemRoutingModule {}

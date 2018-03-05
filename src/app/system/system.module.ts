import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {SystemRoutingModule} from './system-routing.module';
import {SystemComponent} from './system.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import {DropdownDirective} from './shared/directives/dropdown.directive';
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { AddComponent } from './recipe-page/add/add.component';
import { ListComponent } from './recipe-page/list/list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCardModule, MatInputModule, MatListModule} from '@angular/material';
import {RecipePageRoutingModule} from './recipe-page/recipe-page-routing.module';
import {ModalModule} from 'ngx-bootstrap';



@NgModule ({
imports: [
  CommonModule,
  SharedModule,
  SystemRoutingModule,
  RecipePageRoutingModule,
  BrowserAnimationsModule,
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatCardModule,
  ModalModule.forRoot()
],
declarations: [
  SystemComponent,
  SidebarComponent,
  HeaderComponent,
  DropdownDirective,
  RecipePageComponent,
  AddComponent,
  ListComponent
],
  providers: []
})

export class SystemModule {}


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AuthModule} from './auth/auth.module';
import {SystemModule} from './system/system.module';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';

import {UsersService} from './shared/services/users.service';
import {AuthService} from './shared/services/auth.service';
import {RecipesService} from './shared/services/recipes.service';
import {BsModalService} from 'ngx-bootstrap/modal/bs-modal.service';
import {ModalModule} from 'ngx-bootstrap';



@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule,
    SystemModule,
    ModalModule.forRoot()
  ],
  providers: [UsersService, AuthService, RecipesService, BsModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

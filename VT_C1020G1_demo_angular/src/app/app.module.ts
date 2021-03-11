import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {FormsModule} from "@angular/forms";
import { UserListComponent } from './users/user-list/user-list.component';
import { UseAddComponent } from './users/use-add/use-add.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    UserListComponent,
    UseAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

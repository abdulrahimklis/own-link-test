import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AddComponent } from './pages/add/add.component';
import { BrokenComponent } from './pages/broken/broken.component';
import { HomeComponent } from './pages/home/home.component';
import { AddURLComponent } from './components/add-url/add-url.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AddComponent,
    BrokenComponent,
    HomeComponent,
    AddURLComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

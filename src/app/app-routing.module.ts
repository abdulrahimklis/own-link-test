import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Pages
import { HomeComponent } from "./pages/home/home.component";
import { AddComponent } from "./pages/add/add.component";
import { BrokenComponent } from "./pages/broken/broken.component";

const routes: Routes = [
  { path:'',       component: HomeComponent },
  { path:'add',    component: AddComponent },
  { path:'broken', component: BrokenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

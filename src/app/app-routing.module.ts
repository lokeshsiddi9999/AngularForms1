import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { FormComponent } from './form/form.component';
import { FournotfourComponent } from './fournotfour/fournotfour.component';
import { MoviesComponent } from './movies/movies.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  {
    path:"post",
    component:ReactiveFormComponent
  },
  {
    path:"lokesh",
    component:FormComponent
  },
  {
    path:"names",
    component:DisplayComponent
  },
  {
    path:'movies/:id/:Moviename',
    component:MoviesComponent
  },
  {
    path:'**',
    component:FournotfourComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

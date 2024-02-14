import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayComponent } from './display/display.component';
import { MoviesComponent } from './movies/movies.component';
 import { ActivatedRoute } from '@angular/router';
import { FournotfourComponent } from './fournotfour/fournotfour.component';
import { PostService } from './services/post.service';
@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ReactiveFormComponent,
    DisplayComponent,
    MoviesComponent,
    FournotfourComponent,
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
   
    RouterModule.forRoot([
      // {
      //   path:"post",
      //   component:ReactiveFormComponent
      // },
      // {
      //   path:"lokesh",
      //   component:FormComponent
      // },
      // {
      //   path:"names",
      //   component:DisplayComponent
      // },
      // {
      //   path:'movies/:id/:Moviename',
      //   component:MoviesComponent
      // }
    ]),
    AppRoutingModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
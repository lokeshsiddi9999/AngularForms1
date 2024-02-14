import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit{
  movie : Array<Object> =[
   {id:1,Moviename:"Salar",Director:"Lokesh"},
   {id:2,Moviename:"3prathivrathalu",Director:"Manikanta"},
   {id:3,Moviename:"Thor",Director:"sai"}

  ]
constructor(private route:ActivatedRoute){

}
  ngOnInit(): void {
    // this.route.paramMap.subscribe(value =>{
    //   let id=value.get('id');
    //   const Moviename=value.get('Moviename');

    //   console.log(id);
    //   console.log(Moviename)});;

    this.route.queryParamMap.subscribe(value => {
      let page1 = value.get('page');
      let order = value.get('orderBy');
      console.log(page1 + " " + order);
    })
    }
      
  }





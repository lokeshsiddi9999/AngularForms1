import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  title='ang-routing';
 
  form: any
  constructor(){
    this.form=new FormGroup({
      fullName:new FormControl('',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
        Validators.pattern("^[a-zA-Z ]*$")
      ]),
      email:new FormControl('',
      [
        Validators.email
      ]),
      address:new FormControl('',[
        Validators.required
      ])
  });
  }
 
  get fullName(){
    return this.form.get("fullName");
  }
  get email(){
    return this.form.get("email");
  }
  get address(){
    return this.form.get("address");
  }
  ngOnInit() {
    const obsTest$ = new Observable(observer => {
      observer.next('returned from observable');
      observer.next('This is the Second returned from observable');
      setTimeout(()=>{
        observer.next('This is the from tzimeout');
      },2000); 
      observer.next('This is the third returned from observable');
    }).subscribe(value => {
      console.log(value);
    });

    const obsTest = function(){
      return 'Return From Function'
      return 'return 2 from function'
    }
    
    
  }
 
}
 
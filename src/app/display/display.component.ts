import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent {
  // director:string[]=["lokesh","sai","mani"]
List=[
  {
    id:1,
    name:"lokesh"

  },
  {
    id:2,
    name:"sai"
  },
  {
    id:3,
    name:"mani"
  }
]
  posts: Array<any>;
  constructor(private router:Router,private postService: PostService){
    this.posts=postService.postList;
    this.addnewdata();
  }
 

  onSubmit(){
    this.router.navigate(['/lokesh'],{queryParams:{page:1,order:'newest'}});
  }

  addnewdata(){
    let newdata:Post={ 
    id:6,
    postList:'post7'
    }
    this.postService.addPost(newdata);
   }
}

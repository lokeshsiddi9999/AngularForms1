import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

   postList:Array<any>=[
    {id:1 ,postList: 'post1'},
    {id:2 ,postList: 'post2'},
    {id:3 ,postList: 'post3'},
    {id:4 ,postList: 'post4'}
   ]

   addPost(newdata:any){
    this.postList.push(newdata)
   }
   


}

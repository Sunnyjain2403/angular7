import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from  '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from './todo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
todosurl:string='https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) { }
getTodos():Observable<Todo[]>{


return this.http.get<Todo[]>(this.todosurl);

}
}
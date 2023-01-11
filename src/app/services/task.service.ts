import { TASKS } from 'src/app/tasks';
import { Task } from './../Task.interface';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl:string = 'http://localhost:3000/tasks'

  constructor(private http:HttpClient) {}

  getTasks(): Observable<Task[]> {
    // const returnTtasks = of(TASKS)
    // return returnTtasks;
    return this.http.get<Task[]>(this.apiUrl)
  }
}

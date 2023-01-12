import { TASKS } from 'src/app/tasks';
import { Task } from './../Task.interface';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'aplication/json'
  })
}

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

  public removeTask(taskId:number):Observable<Task> {
    let url:string = `${this.apiUrl}/${taskId}`;
    return this.http.delete<Task>(url)
  }

  public updateTask(task:Task):Observable<Task> {
    let url:string = `${this.apiUrl}/${task.id}`;
    // return this.http.put<Task>(url, task, httpOptions);
    return this.http.put<Task>(url, task);
  }

  public saveTask(task:Task):Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }
}

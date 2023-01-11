import { TASKS } from 'src/app/tasks';
import { Task } from './../Task.interface';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    const returnTtasks = of(TASKS)
    return returnTtasks;
  }
}

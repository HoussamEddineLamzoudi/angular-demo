import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  public toggleAddTask():void {
    console.log("toggleAddTask()  :");
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  public onToggle(): Observable<any>{
    console.log(" onToggle()  :");
    return this.subject.asObservable();
  }

}

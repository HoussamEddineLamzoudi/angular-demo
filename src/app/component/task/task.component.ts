import { Task } from './../../Task.interface';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() task:Task;
  @Output() deleteItemEvent: EventEmitter<number> = new EventEmitter();

  onClick(){
    console.log("Done");
  }

  onDelete(taskId?:number):void{
    console.log(taskId);
    this.deleteItemEvent.emit(taskId);
  }

  ngOnInit():void{

  }
}

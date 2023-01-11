import { Task } from './../../Task.interface';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() task:Task

  onClick(){
    console.log("Done");
  }

  ngOnInit():void{

  }
}

import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task.interface';
import { UiService } from 'src/app/services/ui/ui.service';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  taskBody: string = '';

  showAddTask: boolean;
  subscription: Subscription;

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe(
      value => this.showAddTask = value
    )
  }

  @Output() newTaskEvent: EventEmitter<Task> = new EventEmitter();

  public onSubmit(){

    if(!this.taskBody){
      alert('Please add a task')
      return;
    }
    const newTask: Task = {
      text: this.taskBody,
      day: "May 6th at 2:30pm",
      reminder: true
    }

    this.newTaskEvent.emit(newTask);
    this.taskBody = '';
  }


  public toggleaddTask(){
    console.log("toggleaddtoggleadd");
    this.uiService.toggleAddTask();
  }
}

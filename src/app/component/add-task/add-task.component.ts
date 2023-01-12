import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task.interface';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  taskBody: string = '';

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
}

import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { Task } from 'src/app/Task.interface';
import { TASKS } from 'src/app/tasks';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  tasks:Task[] = [];

  constructor(private taskService: TaskService){}
  ngOnInit(): void{
    this.taskService.getTasks().subscribe((returnTtasks) => (this.tasks=returnTtasks));
  }

  deleteTask(taskId:number){
    console.log("deleteTask()");
    console.log(taskId);
    this.taskService.deleteTask(taskId).subscribe(
      () => (this.tasks = this.tasks.filter((e) => e.id !== taskId))
      );
  }

  changeRiminderValue(task:Task){
    task.reminder = !task.reminder;
    this.taskService.updateTask(task).subscribe();
  }
}

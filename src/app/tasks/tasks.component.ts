import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './new-task/new-task.model';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  isAddingTask = false;

  constructor(private readonly tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  // this isn't necessarily wrong, but going to
  // perform from TaskComponent, rather than emit from there
  // onCompleteTask(id: string) {
  //   this.tasksService.removeTask(id);
  // }

  onStartAddTask() {
    this.isAddingTask=true;
  }

  onCloseAddTask() {
    this.isAddingTask = false;
  }

  onSubmitAddTask(newTask: NewTaskData) {
    this.isAddingTask = false;
  }
}

import { Component, Input } from '@angular/core';
import { NewTaskData } from './new-task/new-task.model';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: false,
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

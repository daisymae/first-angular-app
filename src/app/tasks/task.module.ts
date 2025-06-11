import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    TasksComponent,
    TaskComponent, // DatePipe is included in BrowserModule and not needed here
    NewTaskComponent
  ],
    // only TasksComponent needs to be exported because it is the only one used in other components
    // Tasks uses Task and NewTask
    exports: [TasksComponent],
    imports: [SharedModule, CommonModule, FormsModule]
})
export class TaskModule {}

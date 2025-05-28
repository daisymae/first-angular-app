import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { TasksComponent } from "./tasks/tasks.component";
import { UserComponent } from "./user/user.component";
import { HeaderComponent } from './header/header.component';
import { CardComponent } from "./shared/card/card.component";
import { TaskComponent } from "./tasks/task/task.component";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";

// Hmmm... he said BrowserModule is required, but my app was working without it??
// While Modules CAN be done, not really recommended anymore. Standalone is easier to track dependencies.
@NgModule({
  // declarations canNOT be standalone components
  declarations: [AppComponent,
    HeaderComponent,
    UserComponent,
    CardComponent,
    TasksComponent,
    TaskComponent, // DatePipe is included in BrowserModule and not needed here
    NewTaskComponent
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule] // imports can be used for standalone components
})
export class AppModule {}

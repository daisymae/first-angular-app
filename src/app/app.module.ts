import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { TasksComponent } from "./tasks/tasks.component";
import { UserComponent } from "./user/user.component";
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from "@angular/platform-browser";

// Hmmm... he said BrowserModule is required, but my app was working without it??
@NgModule({
  // declarations canNOT be standalone components
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [BrowserModule, HeaderComponent, UserComponent, TasksComponent] // imports can be used for standalone components
})
export class AppModule {}

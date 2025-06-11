import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { HeaderComponent } from './header/header.component';
import { SharedModule } from "./shared/shared.module";
import { TaskModule } from "./tasks/task.module";

// Hmmm... he said BrowserModule is required, but my app was working without it??
// While Modules CAN be done, not really recommended anymore. Standalone is easier to track dependencies.
@NgModule({
  // declarations canNOT be standalone components
  declarations: [AppComponent,
    HeaderComponent,
    UserComponent
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule,
    SharedModule,
    TaskModule] // imports can be used for standalone components
})
export class AppModule {}

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  // don't do this:
  // only the main component should be used in the bootstrapApplication
  // bootstrapApplication(HeaderComponent)

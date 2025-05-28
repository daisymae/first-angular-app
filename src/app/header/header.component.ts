import { Component } from "@angular/core";

@Component({
  selector: 'app-header',
  standalone: true,
  // standalone set to true by default in 19
  // module-based components would have standalone set to false
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{}

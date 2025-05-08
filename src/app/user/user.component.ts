import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // the '!' tells Angular we know it will be set
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // the '!' tells Angular we know it will be set
  // bring in the input as an object instead of individual fields
  @Input( { required: true }) user!: {
    id: string;
    avatar: string;
    name: string;
  };
  // type not required on EventEmitter, but extra safety
  @Output() select = new EventEmitter<string>();

   get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

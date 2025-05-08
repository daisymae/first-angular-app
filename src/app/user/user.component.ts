import { Component, EventEmitter, Input, Output, output } from '@angular/core';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // the '!' tells Angular we know it will be set
  @Input( { required: true }) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  // @Output() select = new EventEmitter();
  // the signals way, but still an EventEmitter
  // makes it so don't need decorators for output
  select = output<string>();

   get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}

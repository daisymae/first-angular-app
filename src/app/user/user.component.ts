import { Component, computed, Input, input } from '@angular/core';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // the '!' tells Angular we know it will be set
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;

  // how to handle inputs with signals
  // can give a default value in the () here too
  // avatar = input<string>();
  // alternatively, to make required; no default allowed here because marked as required
  // HTML inputs doesn't change, but do need to change the user component HTML to use signals
  //  these input signal values are readonly; cannot be modified within the component
  avatar = input.required<string>();
  name = input.required<string>();

  // and imagePath should be updated to computed now too
  imagePath = computed(() => {
    return 'assets/users/' + this.avatar();
  });

  // get imagePath() {
  //   return 'assets/users/' + this.avatar;
  // }

  onSelectUser() {
  }
}

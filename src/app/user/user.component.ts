import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  // computed sets up a listener to the signal so whenever it changes, the value will be recomputed
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)
  // zone way:
  // selectedUser = DUMMY_USERS[randomIndex]

  // zone way of getting the data
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // signal way
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // zone.js way (default)
    // this.selectedUser = DUMMY_USERS[randomIndex];
  }
}

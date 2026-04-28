import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  standalone: false
})
export class UserListComponent implements OnInit {

  users: Array<User> = []; 
  selected: Boolean = false;
  selectedUser!: User;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  onSelected(user: User): void {
    this.selected = true;
    this.selectedUser = user;
  }
}

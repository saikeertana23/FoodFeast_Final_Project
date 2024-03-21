import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { map } from 'rxjs/operators';

interface User {
  userId: number;
  userName: string;
  emailId: string;

}

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  users$: Observable<User[]>;
  totalUsers = 0;

  constructor(private userService: UserService) {
    this.users$ = new Observable<User[]>();
  }

  ngOnInit(): void {
    this.fetchUserData();
  }

  fetchUserData(): void {
    this.users$ = this.userService.getAllUsers().pipe(
      map(users => users.filter((user, index, self) => 
          index === self.findIndex(u => u.emailId === user.emailId))
      )
    );

    this.users$.subscribe(users => {
      this.totalUsers = users.length;
    });
  }
}

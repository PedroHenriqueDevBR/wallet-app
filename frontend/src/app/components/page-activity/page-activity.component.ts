import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-page-activity',
  templateUrl: './page-activity.component.html',
  styleUrls: ['./page-activity.component.css']
})
export class PageActivityComponent implements OnInit {
  user: User | undefined;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(): void {
    this.userService.getUserData().subscribe((data: User) => {
      console.table(data);
      this.user = data;
    },
    error => {
      console.log(error);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-table-login',
  templateUrl: './table-login.component.html',
  styleUrls: ['./table-login.component.css']
})
export class TableLoginComponent implements OnInit {

  users;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser()
    .subscribe(
      data => 
      {
        console.log(data);
        this.users = data;
      }
    )
  }

}

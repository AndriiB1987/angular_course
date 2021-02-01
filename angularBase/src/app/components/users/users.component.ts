import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { User } from '../../models/User';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[];

  constructor(private activatedRout: ActivatedRoute) { 
    this.activatedRout.data.subscribe(value=>this.users= value.usersData)
  }

  ngOnInit(): void {

  }

}
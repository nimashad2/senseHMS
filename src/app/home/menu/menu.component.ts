import { Component, OnInit } from '@angular/core';
import { UserAccessService } from 'src/app/shared/user-access.service';
import { Access } from 'src/app/shared/access.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private userAccessSeravice : UserAccessService) { }

  ngOnInit() {
    this.getUsersAccess();
  }
  error: string;
  userAccess: Access;
  getUsersAccess(){
    this.userAccessSeravice.getUsersAccess().subscribe(
      user=>{
        console.log(user);
        this.userAccess = user;
      },
      error => {
        this.error = error;
      }
    );
  }

}

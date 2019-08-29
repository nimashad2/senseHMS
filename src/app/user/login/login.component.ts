import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private router : Router) { }
  formModel = {
    UserName: '',
    Password: ''
  }
  ngOnInit() {
  }

  onSubmit(form:NgForm){
    this.router.navigateByUrl('/home');
  }

}

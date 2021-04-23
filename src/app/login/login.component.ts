import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

export class LoginInformation
{
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  authorizedData: LoginInformation;
  loginData: LoginInformation;

  constructor(private router: Router) 
  {

  }

  ngOnInit(): void 
  {
    this.authorizedData = 
    {
      username: "bob",
      password: "myPassword"
    };

    this.loginData = 
    {
      username: "",
      password: ""
    };
  }

  onSubmit(): void
  {
    var doesUsernameMatch = false;
    var doesPasswordMatch = false;

    if (this.authorizedData.username === this.loginData.username)
    {
      doesUsernameMatch = true;
    }

    if (this.authorizedData.password === this.loginData.password)
    {
      doesPasswordMatch = true;
    }

    if (doesUsernameMatch && doesPasswordMatch)
    {
      this.router.navigateByUrl('/contactus');
    }  
  }
}

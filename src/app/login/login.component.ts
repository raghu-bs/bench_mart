import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;

  constructor(private router: Router, public loginService: LoginService) { }

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
      let loginCredentials = {email: this.username, password: this.password};
      this.loginService.login(loginCredentials).subscribe(data => {
        console.log(data);
      });
     this.router.navigate(['dashboard']);
    }else {
      alert("Invalid credentials");
    }
  }

  ngOnInit() {
  }

}

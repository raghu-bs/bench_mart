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

  constructor(private router: Router) { }

  // constructor(public loginService: LoginService) { 
  //   this.loginService.login({}).subscribe(data => {
  //     console.log(data);
  //   })
  // }

  login() : void {
    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(['dashboard']);
    }else {
      alert("Invalid credentials");
    }
  }

  ngOnInit() {
  }

}

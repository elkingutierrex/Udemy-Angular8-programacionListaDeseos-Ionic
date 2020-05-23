import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;
  showErrorLogin: boolean = false;

  constructor( private _auth : AuthService, public router : Router) { }

  ngOnInit() {}

  onSubmitLogin(){
    this._auth.login(this.email, this.password).then(res => {
      this.router.navigate(['/tabs/tab1']);
      }).catch(err => {this.showErrorLogin = true;})
  }

}

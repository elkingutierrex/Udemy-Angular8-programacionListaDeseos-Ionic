import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  email:string;
  password:string;

  constructor( private _auth : AuthService) { }

  ngOnInit() {}

  onSubmitLogin(){
    this._auth.login(this.email, this.password);
  }

}

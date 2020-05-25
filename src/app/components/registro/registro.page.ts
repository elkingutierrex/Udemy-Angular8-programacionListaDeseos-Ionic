import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { auth } from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  email:string;
  password:string;
  showErrorLogin: boolean = false;

  constructor(  public _auth : AuthService ,
                private router : Router) { }

  ngOnInit() {
  }

  register(){
    this._auth.register(this.email, this.password ).then( auth =>{
      this.router.navigate(['/tabs/tab1']);
    }).catch(err => {
      this.showErrorLogin = true;
      console.log(err)
    })
  }

}

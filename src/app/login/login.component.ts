import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario!: string;
  senha!: string;
  _router: any;

  constructor(private _loginService: LoginService,private_router:Router){}

  fazerlogin(){
    this._loginService.login(this.usuario,this.senha);
    this._router.navigate(['/restrito/lista']);
    this._loginService.SetMostraMenu(false);

  }

}

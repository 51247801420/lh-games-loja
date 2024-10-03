import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'LH Games';
  mostrarMenu:boolean = true;

  constructor(private _loginService: LoginService){}
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this._loginService.getMostaMenu().subscribe(
      res => {this.mostrarMenu = res;}
    )
  }

  ngOndestroy(){
    localStorage.clear();
  }
}

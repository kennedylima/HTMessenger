import { LoginService } from './login.service';
import { Usuario } from './../Model/Usuario';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();

  constructor( private loginService: LoginService ) { }

  logar() {
    this.loginService.authenticateUser(this.usuario);
  }
  
  ngOnInit() {
  }
}

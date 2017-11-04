import { Usuario } from './../Model/Usuario';
import { Routes, Router } from '@angular/router';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  usuarioOrigem: Usuario;
  request: any;
  error: any;
  constructor(private http: Http, private route: Router) { }

  authenticateUser(usuario) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post("http://htmessenger.herokuapp.com/usuario/autenticar", usuario, options)
      .toPromise()
      .then(dados => {
        this.usuarioOrigem = dados.json();
        localStorage.setItem("id",this.usuarioOrigem.id.toString());
        this.route.navigate(['/conversa']);
      })
      .catch(() => alert('Usuário e senha não confere!'));
  }

  getUsuarioOrigem() {
        return this.usuarioOrigem;
  }
}

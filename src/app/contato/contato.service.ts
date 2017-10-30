import { Usuario } from './../Model/Usuario';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
    

@Injectable()
export class ContatoService {

  constructor(private http: Http) { }

  getContatos() {
    return this.http.get("https://htmessenger.herokuapp.com/usuario")
    .map(dados => dados.json())
  }

  getContatoId(id) {
    return this.http.get("https://htmessenger.herokuapp.com/usuario/" + id)
    .map(dados => dados.json())
  }

}

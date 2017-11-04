import { Conversa } from './../Model/Conversa';
import { Usuario } from './../Model/Usuario';
import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { LoginService } from '../login/login.service';
import { Router } from '@angular/router';

@Injectable()
export class ConversaService {

  constructor(private http: Http, private login:LoginService, private route: Router) {
    
   }

  getConversas(IdDestino){    
    return this.http.get("https://htmessenger.herokuapp.com/conversa/" + this.login.getUsuarioOrigem().id + "/" + IdDestino)
    .map(dados => dados.json())
  }

  
  enviarMensagem(conversa : Conversa){
    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post("http://htmessenger.herokuapp.com/conversa", conversa, options)
      .toPromise()
      .then(dados => {
        this.route.navigate(['/conversa/' + conversa.usuarioDestino.id]);
      })
      .catch(() => alert('Erro ao enviar msg!'));
  }

}

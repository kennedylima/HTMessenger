import { ContatoService } from './../contato/contato.service';
import { Usuario } from './../Model/Usuario';
import { LoginService } from './../login/login.service';
import { Conversa } from './../Model/Conversa';
import { ConversaService } from './conversa.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-conversa',
  templateUrl: './conversa.component.html',
  styleUrls: ['./conversa.component.css']
})
export class ConversaComponent implements OnInit {

  conversa: Conversa = new Conversa();
  conversas: any[];
  usuarioOrigem: Usuario;
  idUsuarioDestino: string;
  constructor(private conversaService: ConversaService , 
              private route: ActivatedRoute,
              private loginService: LoginService,
              private contatoService: ContatoService,
              private router: Router) {
    this.conversas = this.conversaService.getConversas();
    this.idUsuarioDestino = this.route.snapshot.params["id"];

    this.conversa.usuarioOrigem = this.loginService.getUsuarioOrigem();    

    console.log(this.usuarioOrigem);

    if( this.conversa.usuarioOrigem == undefined ){
      this.router.navigate(["/login"])
    }   
  }

  enviarMensagem() {
    console.log(this.conversa)
  }

  getUsuariosConversa() {
   this.contatoService.getContatoId(this.idUsuarioDestino)
                      .subscribe(dados => this.conversa.usuarioDestino = dados);

    console.log(this.conversa);
  }

  ngOnInit() { 
    if(this.idUsuarioDestino != undefined) {
      this.getUsuariosConversa();
    }
   }

}

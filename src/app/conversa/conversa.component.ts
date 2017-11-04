import { ContatoService } from './../contato/contato.service';
import { Usuario } from './../Model/Usuario';
import { LoginService } from './../login/login.service';
import { Conversa } from './../Model/Conversa';
import { ConversaService } from './conversa.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-conversa',
  templateUrl: './conversa.component.html',
  styleUrls: ['./conversa.component.css']
})
export class ConversaComponent implements OnInit {

  conversa: Conversa = new Conversa();
  conversas: Conversa[];
  usuarioOrigem: Usuario;
  idUsuarioDestino: number;
  idUsuarioOrigem: number;
  constructor(private conversaService: ConversaService,
    private route: ActivatedRoute,
    private loginService: LoginService,
    private contatoService: ContatoService,
    private router: Router) { }

  enviarMensagem() {
    this.conversaService.enviarMensagem(this.conversa);
    this.conversas.push(this.conversa);
    this.conversa = new Conversa();
    this.getUsuariosConversa();
    this.conversa.usuarioOrigem = this.loginService.getUsuarioOrigem();

  }

  getUsuariosConversa() {
    this.contatoService.getContatoId(this.idUsuarioDestino)
      .subscribe(dados => this.conversa.usuarioDestino = dados);
  }

  ngOnInit() {

    this.route.params.subscribe((params: Params) => {

      this.idUsuarioDestino = this.route.snapshot.params["id"];
      this.conversa.usuarioOrigem = this.loginService.getUsuarioOrigem();

      if( this.conversa.usuarioOrigem == undefined ){
        
        this.router.navigate([""]); 
      }
      else if (this.idUsuarioDestino != undefined) {
        
        this.idUsuarioOrigem = this.conversa.usuarioOrigem.id;
        this.getUsuariosConversa();
        this.atualizarConversa();
        this.conversaService.getConversas(this.idUsuarioDestino).subscribe(dados => this.conversas = dados);
      
      }

    });
  }

  atualizarConversa(){
    setInterval(() => {
      this.conversaService.getConversas(this.idUsuarioDestino).subscribe(dados => this.conversas = dados);
    }, 500);
  }

}

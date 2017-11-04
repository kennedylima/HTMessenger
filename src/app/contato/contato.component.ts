import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { ContatoService } from './contato.service';
import { Usuario } from '../Model/Usuario';

import 'rxjs/add/operator/map';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})

export class ContatoComponent implements OnInit {
  ngOnInit() {}

  contatos: Usuario[];
  idUsuarioOrigem: string;
  
  constructor(private contatoService : ContatoService, private http: Http ) {
    this.contatoService.getContatos().subscribe(dados => this.contatos = dados);
    this.idUsuarioOrigem = localStorage.getItem("id");
  }
  
  
}



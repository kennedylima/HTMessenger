import { Injectable } from '@angular/core';

@Injectable()
export class ConversaService {

  constructor() { }

  getConversas(){
    return[
      {mensagem: "Olá" },
      {mensagem: "Oi" },
      {mensagem: "Tudo bem ?" },
      {mensagem: "Beleza, e você ?" }
    ];
  }

}

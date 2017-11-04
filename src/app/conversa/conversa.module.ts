import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialDesignModule } from './../material-design/material-design.module';
import { ContatoService } from './../contato/contato.service';
import { FormsModule } from '@angular/forms';
import { ContatoModule } from './../contato/contato.module';
import { ConversaService } from './conversa.service';
import { ConversaComponent } from './conversa.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    ContatoModule,
    FormsModule,
    MaterialDesignModule,
    FlexLayoutModule
  ],
  declarations: [
    ConversaComponent
  ],
  exports:[
    ConversaComponent
  ], 
  providers:[
    ConversaService,
    ContatoService
  ]
})
export class ConversaModule { }

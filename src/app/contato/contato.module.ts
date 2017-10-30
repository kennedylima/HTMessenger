import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoComponent } from './contato.component';
import { ContatoService } from './contato.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
    ContatoComponent
 
  ], exports: [
    ContatoComponent
  ]
  ,providers: [
    ContatoService
  ]
})
export class ContatoModule { }

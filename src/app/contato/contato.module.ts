import { MaterialDesignModule } from './../material-design/material-design.module';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContatoComponent } from './contato.component';
import { ContatoService } from './contato.service';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    FormsModule,
    MaterialDesignModule,
    FlexLayoutModule
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

import { ContatoComponent } from './contato/contato.component';
import { ConversaComponent } from './conversa/conversa.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const APP_ROUTES: Routes = [

    {path: '', component:LoginComponent },
    {path: 'login', component:LoginComponent },
    {path: 'conversa', component: ConversaComponent},
    {path: 'conversa/:id', component: ConversaComponent},
    {path: 'contato', component: ContatoComponent}  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';

export const routes: Routes = [
    {
        path:'',
        component:LoginComponent
    },
    {
        path:"**",
        component:UsuarioComponent
    }
];

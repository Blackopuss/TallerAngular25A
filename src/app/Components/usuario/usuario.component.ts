import { Component } from '@angular/core';


@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  // datos para mandar a llamar en mi componente mediante {{}}

  //Un usuario
  nombre:string ='axel';
  edad:number =19;
  correo:string="axel@email.com";
  telefono: number= 1234456789;

  //otro usuario
  nombre1:string ='Anna';
  edad1:number =18;
  correo1:string="Anna@email.com";
  telefono1: number= 123456789;
}

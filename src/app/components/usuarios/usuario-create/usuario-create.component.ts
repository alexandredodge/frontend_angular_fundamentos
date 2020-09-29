import { Component, OnInit } from '@angular/core';
import { Usuario } from './../usuario.model';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

   usuario:Usuario = {
	   name:'',
	   login:'',
	   senha:''
   }

  constructor() { }

  ngOnInit(): void {
  }

  createUsuario(): void{
	
  }

}

import { Conta } from './../../components/contas/Conta.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conta-crud',
  templateUrl: './conta-crud.component.html',
  styleUrls: ['./conta-crud.component.css']
})
export class ContaCrudComponent implements OnInit {

  conta:Conta = {
	  agencia: '',
	  conta: '',
	  operacao: ''
  }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  navigationContaCreate():void{
	this.router.navigate(['/conta/create']);
  }

}

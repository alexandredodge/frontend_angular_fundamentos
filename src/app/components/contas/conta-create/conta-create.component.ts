import { Conta } from './../Conta.model';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-conta-create',
  templateUrl: './conta-create.component.html',
  styleUrls: ['./conta-create.component.css']
})
export class ContaCreateComponent implements OnInit {

    conta:Conta = {
		agencia: '',
		conta: '',
		operacao: ''
	}

  constructor() { }

  ngOnInit() {
	 
  }
  
  createConta():void{

}
 
}

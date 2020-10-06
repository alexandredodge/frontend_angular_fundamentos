import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Conta } from './Conta.model';

@Injectable({
    providedIn:'root'
})

export class ContaService{

    baseUrl = "http://localhost:3001/contas";

    constructor(private snackBar: MatSnackBar,private http:HttpClient){ }

    mostrarMensagem(msg:string):void{
        this.snackBar.open(msg,'x',{
            duration:3000,
            horizontalPosition: "right",
			verticalPosition: "top"
        })
    }

    criarCOnta(conta:Conta):Observable<Conta>{
        return this.http.post<Conta>(this.baseUrl,conta);
	}
	
	findAllContas():Observable<Conta[]>{
		return this.http.get<Conta[]>(this.baseUrl);
	}
}
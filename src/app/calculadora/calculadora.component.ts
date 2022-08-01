import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CalculadoraService } from '../service/calculadora.service';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  public num1!:number;
  public num2!: number;
  public resultado!: number;

  constructor(private calculadoraService:CalculadoraService) {}


  ngOnInit(): void {
  }

  calcular(n:number){

    switch(n){
      case 1:
        this.resultado = this.calculadoraService.somar(this.num1,this.num2);
        break;
      case 2:
        this.resultado = this.calculadoraService.subtrair(this.num1,this.num2);
        break;
      case 3:
        this.resultado = this.calculadoraService.multiplicar(this.num1,this.num2);
        break;
      case 4:
        this.resultado = this.calculadoraService.dividir(this.num1,this.num2);
        break;
      case 5:
        this.resultado = this.calculadoraService.raiz(this.num1);
        break;
      default:
        console.log("Erro: valor de controle errado")
        break;

    }


    
  }

}

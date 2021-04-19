import { Injectable } from '@angular/core';

/*
Faz com que o service fique disponível em qualquer lugar da aplicação, sem necessitar colocar ele no
provider do app.module: providedIn: 'root'
*/
@Injectable()
export class CalculadoraService {

  /*Definição das constantes, por convensão dos desenvolvedores usamos constantes com letras maiúsculas*/
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }

  calcular(num1: number, num2: number, operacao: string): number {

    let resultado: number;

    switch (operacao){
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
    }

    return resultado;

  }
}

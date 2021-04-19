import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  readonly dados = [
    ['Janeiro', 33],
    ['Fevereiro', 40],
    ['Março', 30],
    ['Abril', 44],
    ['Maio', 45],
    ['Junho', 49]
  ];

  constructor() { }

  /** Retorna um Observable contendo os dados a serem exibidos no gráfico
   *
   * @return Observable<any>
   */
  obterDados(): Observable<any> {
    return new Observable(observable => {
      observable.next(this.dados);
      observable.complete();
    })
  }
}

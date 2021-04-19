import { Injectable } from '@angular/core';

import { Moeda } from '../models/moeda.model';

@Injectable({
  providedIn: 'root'
})
export class MoedaService {

  private moedas: Moeda[];

  constructor() { }

  private moedasObj = [ // http://fixer.io
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'AUD', 'descricao': 'Dólar australiano' },
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'BGN', 'descricao': 'Lev búlgaro' },
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'BRL', 'descricao': 'Real brasileiro' },
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'CAD', 'descricao': 'Dólar canadense' },
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'CHF', 'descricao': 'Franco suíço' },
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'CNY', 'descricao': 'Yuan Chinês' },
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'CZK', 'descricao': 'Coroa República Tcheca' },
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'DKK', 'descricao': 'Coroa dinamarquesa' },
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'EUR', 'descricao': 'Euro' },
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'GBP', 'descricao': 'Libra Esterlina' },
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'HKD', 'descricao': 'Dólar de Hong Kong' },
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'HRK', 'descricao': 'Coroa Croácia' },
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'HUF', 'descricao': 'Florim húngaro' },
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'IDR', 'descricao': 'Rupia indonésia' },
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'ILS', 'descricao': 'Novo shekel israelense' },
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'INR', 'descricao': 'Rupia indiana' },
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'JPY', 'descricao': 'Iene japonês' },
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'KRW', 'descricao': 'Won sul-coreano' },
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'MXN', 'descricao': 'Peso mexicano' },
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'MYR', 'descricao': 'Malásia Ringgit' },
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'NOK', 'descricao': 'Coroa Noruega' },
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'NZD', 'descricao': 'Dólar da Nova Zelândia' },
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'PHP', 'descricao': 'Peso filipino' },
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'PLN', 'descricao': 'Złoty Polónia' },
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'RON', 'descricao': 'Leu romeno' },
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'RUB', 'descricao': 'Belarus Ruble' },
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'SEK', 'descricao': 'Coroa Suécia' },
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'SGD', 'descricao': 'Dólar de Singapura' },
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'THB', 'descricao': 'Baht Tailândia' },
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'TRY', 'descricao': 'Lira turca' },
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'USD', 'descricao': 'Dólar dos Estados Unidos' },
    // tslint:disable-next-line:object-literal-key-quotes
    { 'sigla': 'ZAR', 'descricao': 'Rand África do Sul' }
  ];

  listarTodas(): Moeda[] {
    if (this.moedas) {
      return this.moedas;
    }

    this.moedas = [];

    // tslint:disable-next-line:prefer-const
    for (let moedaObj of this.moedasObj) {
      // tslint:disable-next-line:prefer-const
      let moeda: Moeda = new Moeda();
      Object.assign(moeda, moedaObj);
      this.moedas.push(moeda);
    }

    return this.moedas;
  }


}

import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Conversao } from '../models/conversao.model';
import { Moeda } from '../models/moeda.model';
import { ConversaoResponse } from './../models/conversao-response.model';
import { ConversorService } from './../services/conversor.service';
import { MoedaService } from './../services/moeda.service';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  moedas: Moeda[];
  conversao: Conversao;
  possuiErro: boolean;
  conversaoResponse: ConversaoResponse;

  @ViewChild('conversaoForm', { static: true }) conversaoForm: NgForm;

  constructor(private moedaService: MoedaService,
              private conversorService: ConversorService) { }

  ngOnInit(): void {
    this.moedas = this.moedaService.listarTodas();
    this.init();
  }

  init(): void {
    this.conversao = new Conversao('EUR', 'BRL', null);
    this.possuiErro = false;
  }

  /** Efgetua a chamada para a conversao de valores
   *
   * @return void
   */
  converter(): void {
    if (this.conversaoForm.form.valid) {
      this.conversorService.converter(this.conversao)
      .subscribe((response: any) => {
        this.conversaoResponse = response;
      },
      (error: any) => { this.possuiErro = true; }
      );
    }

  }

}

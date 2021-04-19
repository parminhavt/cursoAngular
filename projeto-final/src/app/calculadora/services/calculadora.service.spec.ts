import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5',
    inject([CalculadoraService], (calculadoraService: CalculadoraService) => {
      const soma = calculadoraService.calcular(1, 4, CalculadoraService.SOMA);
      expect(soma).toEqual(5);
    })
  );

  it('deve retornar 0 pois operação inválida',
    inject([CalculadoraService], (calculadoraService: CalculadoraService) => {
      const resultado = calculadoraService.calcular(1, 4, '%');
      expect(resultado).toEqual(0);
    }));
});


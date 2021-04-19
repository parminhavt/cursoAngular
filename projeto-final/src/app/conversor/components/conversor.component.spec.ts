import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MoedaService } from '../services/moeda.service';
import { ConversorService } from './../services/conversor.service';
import { ConversorComponent } from './conversor.component';
import { NumeroDirective } from '../directives/numero.directive';
import { ModalCotacaoComponent } from '../utils/modal-cotacao.component';
import { DataBrPipe } from '../pipes/data-br.pipe';

describe('ConversorComponent', () => {
  let component: ConversorComponent;
  let fixture: ComponentFixture<ConversorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ConversorComponent,
        NumeroDirective,
        ModalCotacaoComponent,
        DataBrPipe
      ],
      imports: [
        HttpClientModule,
        FormsModule
      ],
      providers: [ MoedaService, ConversorService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

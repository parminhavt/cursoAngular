import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTarefaComponent } from './listar-tarefa.component';

describe('ListarTarefaComponent', () => {
  // tslint:disable-next-line:prefer-const
  let component: ListarTarefaComponent;
  // tslint:disable-next-line:prefer-const
  let fixture: ComponentFixture<ListarTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTarefaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    /*fixture = TestBed.createComponent(ListarTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();*/
  });

});

import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {

  @Input() tarefaConcluida: boolean;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    if (this.tarefaConcluida) {
      // Acessando o componente que vai receber a diretiva
      this.elementRef.nativeElement.style.textDecoration = 'line-through';
    }

  }

}

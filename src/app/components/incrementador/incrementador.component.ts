import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('inputPorcentaje') inputPorcentaje: ElementRef;
  @Input() porcentaje: number = 50;
  @Input() leyenda: string = 'leyenda';

  @Output() cambioPorcentaje: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    //console.log(this.porcentaje);
  }

  cambiarPorcentaje(valor: number) {
    if (this.porcentaje >= 100 && valor > 0)
      return;

    if (this.porcentaje <= 0 && valor < 0)
      return;

    this.porcentaje += valor;

    this.cambioPorcentaje.emit(this.porcentaje);

    this.inputPorcentaje.nativeElement.focus();
  }

  onChanges(nuevoValor: number){
    
    if(nuevoValor > 100){
      this.porcentaje = 100;
    }else if(nuevoValor < 0){
      this.porcentaje = 0;
    }

    // const inputHtml: any = document.getElementsByName('porcentaje');
    // inputHtml.value = this.porcentaje;

    this.inputPorcentaje.nativeElement.value = this.porcentaje;

    this.cambioPorcentaje.emit(this.porcentaje);
  }
}

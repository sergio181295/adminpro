import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input() porcentaje: number = 50;
  @Input() leyenda: string = 'leyenda';

  @Output() cambioPorcentaje: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.porcentaje);
  }

  cambiarPorcentaje(valor: number) {
    if (this.porcentaje >= 100 && valor > 0)
      return;

    if (this.porcentaje <= 0 && valor < 0)
      return;

    this.porcentaje += valor;

    this.cambioPorcentaje.emit(this.porcentaje);
  }
}

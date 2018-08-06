import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  porcentaje: number = 50;
  leyenda: string = 'leyenda';
  constructor() { }

  ngOnInit() {
  }
  
  cambiarPorcentaje(valor: number) {
    if (this.porcentaje >= 100 && valor > 0)
      return;

    if (this.porcentaje <= 0 && valor < 0)
      return;

    this.porcentaje += valor;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  porcentaje: number =  50;

  constructor() { }

  ngOnInit() {
  }

  cambiarPorcentaje(valor: number){
    if(this.porcentaje >= 100 && valor > 0)
      return;

    if (this.porcentaje <= 0 && valor < 0)
      return;

    this.porcentaje += valor;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  porcentajeAzul: number =  10;
  porcentajeVerde: number =  10;
  nombreBarraAzul: string = 'Barra Azul';
  nombreBarraVerde: string = 'Barra Verde';

  constructor() { }

  ngOnInit() {
  }

  actualizarAzul(nuevoValor:number){
    this.porcentajeAzul = nuevoValor;
  }

}

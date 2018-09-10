import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.contarSegundos().then(
      () => console.log('Fin Pormesa!')
    ).catch(
      error => console.error('Error Promesa...')
    );
  }

  ngOnInit() {
  }

  contarSegundos(): Promise<boolean>{
    return new Promise((resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador++;
        console.log(contador);
        if (contador === 3) {
          resolve(true);
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }
}

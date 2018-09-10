import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscripcion: Subscription;

  constructor() {
    this.subscripcion = this.regresaObservable()
    // .pipe(
    //   retry(3) 
    // )
    .subscribe(
      numContador => console.log(numContador),
      error => console.log(error),
      () => console.log('Termino!!')
    );
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscripcion.unsubscribe();
  }

  regresaObservable(): Observable<any>{
    return new Observable((observer: Subscriber < any >) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador++;

        let salida = {
          valor: contador
        };

        observer.next(salida);
        // if (contador === 3) {
        //   observer.complete();
        //   clearInterval(intervalo);
        // } 
        // else {
        //   //clearInterval(intervalo);
        //   observer.error('error!!');
        // }
      }, 1000);
    }).pipe(
     // retry(2),
      map(resp => {
        return resp.valor + 4;
      }),
      filter((valor, index)=>{
        // console.log('index', valor, index);
        if(valor % 2 === 1){
          //impar
          return true;
        }else{
          return false;
        }
      })
    );
  }

}

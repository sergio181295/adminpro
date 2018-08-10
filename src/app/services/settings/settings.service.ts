import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  temaSettings: Tema = {
    tema: 'default-dark'
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.cargarAjustes();
   }

  guardarAjustes(){
    localStorage.setItem('ajustes', JSON.stringify(this.temaSettings));
  }

  cargarAjustes(){
    if(localStorage.getItem('ajustes')){
      this.temaSettings = JSON.parse(localStorage.getItem('ajustes'));
      this.aplicarTema(this.temaSettings.tema);
    }
  }

  aplicarTema(tema: string) {
    const urlTema: string = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', urlTema);
    this.temaSettings.tema = tema;
    this.guardarAjustes();
  }
}

interface Tema {
  tema: string;
}

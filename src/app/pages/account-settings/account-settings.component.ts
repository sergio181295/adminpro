import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( 
            public _settings: SettingsService) { }

  ngOnInit() {
    this.iniciarCheck();
  }

  cambiarTema(tema: string, link: any){
    this._settings.aplicarTema(tema);
    this.aplicarCheck(link);
  }

  aplicarCheck(link: any){
    const selectores: any = document.getElementsByClassName('selector');

    for (const ref of selectores) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  iniciarCheck(){
    const selectores: any = document.getElementsByClassName('selector');

    const tema: string = this._settings.temaSettings.tema;

    for (const det of selectores) {
      if(det.getAttribute('data-theme') === tema){
        det.classList.add('working');
        break;
      }
    }
  }
}

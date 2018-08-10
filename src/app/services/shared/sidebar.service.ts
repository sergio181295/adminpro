import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: Menu[] = [{
    titulo: 'Principal',
    icono: 'mdi mdi-gauge',
    subMenu: [
      {
        titulo: 'Dasboard',
        url: '/dashboard'
      }, {
        titulo: 'ProgressBar',
        url: '/progress'
      }, {
        titulo: 'Graficas',
        url: '/graficas1'
      }
    ]
  }];

  constructor() { }

}

interface Menu {
  titulo: string;
  icono?: string;
  url?: string;
  subMenu?: Menu[];
} 

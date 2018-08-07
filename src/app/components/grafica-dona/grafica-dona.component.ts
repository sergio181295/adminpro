import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: []
})
export class GraficaDonaComponent implements OnInit {

  @Input() labels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() data: number[] = [350, 450, 100];
  @Input() type: string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}

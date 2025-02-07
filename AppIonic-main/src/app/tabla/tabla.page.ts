import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
})
export class TablaPage {
  numero: number = 1;
  tabla: string[] = [];

  calcular() {
    this.tabla = [];
    for (let i = 1; i <= 13; i++) {
      this.tabla.push(`${this.numero} x ${i} = ${this.numero * i}`);
    }
  }
}

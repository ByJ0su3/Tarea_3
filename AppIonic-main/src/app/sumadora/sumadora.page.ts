import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-sumadora',
  templateUrl: './sumadora.page.html',
  styleUrls: ['./sumadora.page.scss'],
})
export class SumadoraPage {
  num1: number = 0;
  num2: number = 0;
  resultado: number | null = null;

  sumar() {
    this.resultado = this.num1 + this.num2;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-traductor',
  templateUrl: './traductor.page.html',
  styleUrls: ['./traductor.page.scss'],
})
export class TraductorPage {
  numero: number = 0;
  resultado: string = '';

  unidades = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
  decenas = ["", "diez", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
  centenas = ["", "cien", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];

  convertir() {
    if (this.numero < 1 || this.numero > 1000) {
      this.resultado = "Número fuera de rango";
      return;
    }

    if (this.numero === 1000) {
      this.resultado = "mil";
      return;
    }

    let num = this.numero;
    let texto = "";

    if (num >= 100) {
      texto += this.centenas[Math.floor(num / 100)] + " ";
      num %= 100;
    }

    if (num >= 10) {
      texto += this.decenas[Math.floor(num / 10)] + " ";
      num %= 10;
    }

    if (num > 0) {
      texto += this.unidades[num];
    }

    this.resultado = texto.trim();
  }
}

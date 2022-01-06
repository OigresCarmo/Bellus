import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encomendas',
  templateUrl: './encomendas.page.html',
  styleUrls: ['./encomendas.page.scss'],
})
export class EncomendasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  dobro: number=0;
  formulario: any = {valor: ' '};
  dobrar() {
    this.dobro=this.formulario.valor*2;
  }
}



import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Bellus', url: 'novidades', icon: 'heart' },
    { title: 'Serviços e produtos', url: 'sorvetes', icon: 'storefront' },
    { title: 'Compras', url: 'encomendas', icon: 'cart' },
    { title: 'Contatos', url: 'contato', icon: 'call' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

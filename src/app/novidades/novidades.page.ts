import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-novidades',
  templateUrl: './novidades.page.html',
  styleUrls: ['./novidades.page.scss'],
})
export class NovidadesPage implements OnInit {

  card: any = [];

  constructor(public http: HttpClient){
      this.escreveDados();
    }

  escreveDados(){
      this.http.get("https://manobatatao.000webhostapp.com/postphp/novo.php").subscribe( data => {
        this.card = data;
       } )
  }

  ngOnInit() {
  }

}

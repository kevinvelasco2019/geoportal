import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.page.html',
  styleUrls: ['./estadisticas.page.scss'],
})
export class EstadisticasPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  busquedas(){
    this.router.navigate(['/busquedas']);
  }
  busquedasPlataforma(){
    this.router.navigate(['/busquedas-plataforma']);
  }

}

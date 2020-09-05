import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.page.html',
  styleUrls: ['./menu2.page.scss'],
})
export class Menu2Page implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {

  }
  buscar(){
    this.router.navigate(['/establecimientos']);
  }
  rutas(){
    this.router.navigate(['/rutas']);
  }
  salir(){
    this.router.navigate(['/home']);
  }

}

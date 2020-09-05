import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(public router: Router) {
  }
  ngOnInit() {
  }
  iniciarSesion(){
    this.router.navigate(['/login']);
  }
  registrarse(){
    this.router.navigate(['/registro']);
  }
  menu(){
    this.router.navigate(['/menu2']);
  }
  
}

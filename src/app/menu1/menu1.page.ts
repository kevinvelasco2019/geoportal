import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { TaskService } from './../services/task.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.page.html',
  styleUrls: ['./menu1.page.scss'],
})
export class Menu1Page implements OnInit {
  constructor(public router: Router, private taskService: TaskService, public alertController: AlertController) { }

  ngOnInit() {
  }
  async cerrarSesion(){
    this.taskService.cerrarSesion();
    const alert = await this.alertController.create({
      header: 'Aviso',
      message: 'Usted se ha desconectado',
      buttons: ['Cerrar']
    });
    await alert.present();
    this.router.navigate(['/home']);
  }
  buscar(){
    this.router.navigate(['/establecimientos']);
  }
  estadisticas(){
    this.router.navigate(['/estadisticas']);
  }
  agregar(){
    this.router.navigate(['/principal']);
  }
  rutas(){
    this.router.navigate(['/rutas']);
  }
}
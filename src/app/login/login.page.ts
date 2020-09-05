import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { TaskService } from './../services/task.service';
import { isNullOrUndefined } from 'util';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
    // tslint:disable-next-line: max-line-length
    constructor(public router: Router, public alertController: AlertController, public toastController: ToastController, private taskService: TaskService) {
    }
    ngOnInit() {
    }
    async iniciarSesion(){
      if (this.email !== '' && this.password !== ''){
        const task = {
          correo: this.email,
          contraseña: this.password
        };
        this.taskService.iniciarSesion(task)
          .subscribe(async (newTask) => {
          if ( isNullOrUndefined (newTask)) { 
            const alert = await this.alertController.create({
              header: 'Error',
              message: 'No hay coincidencias en la base de datos ',
              buttons: ['Cerrar']
            });
            await alert.present();
          }else{
            this.taskService.setToken(newTask);
            const toast = await this.toastController.create({
              message: 'Sesión iniciada correctamente',
              duration: 4000
              });
            toast.present();
            this.router.navigate(['/menu1']);
          }});
      }else{
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Los campos son obligatorios',
          buttons: ['Cerrar']
        });
        await alert.present();
      }
    }
    registrarse(){
      this.router.navigate(['/registro']);
    }

}

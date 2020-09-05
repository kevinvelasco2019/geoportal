import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { TaskService } from './../services/task.service';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  email: string;
  password: string;
  confirmarpassword: string;
  nombre: string;
  apellido: string;
  constructor(public alertController: AlertController, public toastController: ToastController, private taskService: TaskService,
     public router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  async crearUsuario(){
      if (this.password === this.confirmarpassword){
        const task = {
          nombre: this.nombre,
          apellido: this.apellido,
          correo: this.email,
          contraseña: this.password
        };
        this.taskService.crearUsuario(task)
        .subscribe((newTask) =>{
        console.log(newTask);
        });
        const toast = await this.toastController.create({
          message: 'Usuario registrado correctamente',
          duration: 4000
          });
        toast.present();
        this.router.navigate(['/home']);   
    } else{
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Las contraseñas no coinciden',
        buttons: ['Cerrar']
      });
      await alert.present();
    }
 }
 iniciarSesion(){
  this.router.navigate(['/login']);
 }
}

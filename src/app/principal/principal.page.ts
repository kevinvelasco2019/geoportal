import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { TaskService } from './../services/task.service';
import { ElementSchemaRegistry, BuiltinVar } from '@angular/compiler';
import { Router } from '@angular/router';
declare var google;

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {
  public id: any = [];
  servicios = [
    {
      nombre: 'Pichincha MiVecino',
      selected: false
  },{
    nombre: 'Banco del Barrio',
    selected: false
  },{
    nombre: 'ANT (Multas, Matriculación)',
    selected: false
  },{
    nombre: 'SRI',
    selected: false
  },{
    nombre: 'Recargas Móviles (Claro,Movistar,Tuenti)',
    selected: false
  }, {
    nombre: 'Servicios Básicos(Agua,Luz,Teléfono)',
    selected: false
  }];
  map = null;
  pays: string;
  geometry: string;
  latitudActual: number;
  longitudActual: number;
  nuevaLatitud: number;
  nuevaLongitud: number;
  elipsoide: number;
  nombre: string;
  direccion: string;
  sector: string;
  descripcion: string;
  pagos: string='';
  destacado: number = 0;
  espacio: string=', ';
  constructor(
    private geolocation: Geolocation,
    public alertController: AlertController, public toastController: ToastController, private taskService: TaskService,
    public router: Router) {

   }

  ngOnInit() {
    this.loadMap();
    this.cargarUbicacion();

  }
  async ingresarEstablecimiento(){
    // tslint:disable-next-line: triple-equals
    if (this.nombre !== '' && this.descripcion !== '' && this.sector !== '' && this.direccion !== ''){
      this.services();
      const task = {
        geometry: this.geometry,
        nombre: this.nombre,
        direccion: this.direccion,
        sector: this.sector,
        descripcion: this.descripcion,
        pagos: this.pagos,
        latitud: this.latitudActual,
        longitud: this.longitudActual,
        destacado: this.destacado
      };
      this.taskService.ingresarEstablecimiento(task)
      .subscribe((newTask) =>{
       console.log(newTask);
      });
      const toast = await this.toastController.create({
        message: 'Establecimiento registrado correctamente',
        duration: 4000
        });
      this.router.navigate(['/menu1']);
      toast.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Los campos son obligatorios',
        buttons: ['Cerrar']
      });
      await alert.present();
    }
  }
  cargarUbicacion(){
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition) => {
      this.latitudActual = geoposition.coords.latitude;
      this.longitudActual = geoposition.coords.longitude;
      this.geometry= geoposition.coords.longitude+' '+geoposition.coords.latitude;
      this.elipsoide = 4326;
      console.log(this.geometry);
    });
  }
  
 async loadMap(){
     const rta = await this.geolocation.getCurrentPosition();
     const myLatLng = {
       lat: rta.coords.latitude,
       lng: rta.coords.longitude
     };
     const mapEle: HTMLElement = document.getElementById('map');
     this.map = new google.maps.Map(mapEle, {
       center: myLatLng,
       zoom: 16
     });
     var marker;
     google.maps.event
     .addListenerOnce(this.map, 'idle', () => {
       console.log('listo');
       mapEle.classList.add('show-map');
       var image = '../../assets/icon/actual.png';
       marker = new google.maps.Marker({
         position: {
           lat: myLatLng.lat,
           lng: myLatLng.lng
         },
         zoom: 15,
         map: this.map, 
         draggable: true,
         tittle: 'Ubicación actual',
         icon: image
       });
       marker.addListener('dragend', function (event)
     {
      this.nuevaLatitud=this.getPosition().lat();
      this.nuevaLongitud=this.getPosition().lng();
     });   
     });
     
  }
  
  
  checks(check){
    if(check.selected === 'true'){
      console.log('agregado');
    }else if(check.selected === 'false'){
      console.log('error');
    }
  }
  coords(){
    console.log(this.latitudActual);
    console.log(this.longitudActual);
    console.log(this.nuevaLatitud);
    console.log(this.nuevaLongitud);
  }
  services(){
    let i=0;
    let limite =this.servicios.length-1;
    var verdadero=true;
    for(i==0;i<=limite;i++){
      if(this.servicios[i].selected === verdadero){
        if(i<limite){
          this.pays=this.servicios[i].nombre;
          this.pagos = this.pagos.concat(this.pays).concat(this.espacio);
        }
        else{
          this.pays=this.servicios[i].nombre;
          this.pagos = this.pagos.concat(this.pays);
        }
      }else{
        console.log('vacio');    
      }  
    }
    console.log(this.pagos);
  }

}

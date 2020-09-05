import { Component, OnInit, ViewChild } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { TaskService } from './../services/task.service';
import { IonSlides } from '@ionic/angular';

declare var google;
@Component({
  selector: 'app-establecimientos',
  templateUrl: './establecimientos.page.html',
  styleUrls: ['./establecimientos.page.scss'],
})
export class EstablecimientosPage implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;
  public establecimientos: any = [];
  deslizarLatitud: number;
  deslizarLongitud: number;
  map = null;
  latitudActual: number;
  longitudActual: number;
  constructor(private geolocation: Geolocation, private taskService: TaskService) { }
  seccion: boolean = true;
  mapa: boolean = false;
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  plataforma: string = 'Móvil';
  ngOnInit() {
    this.getAllTasks();
    this.loadMap();
  }
  async loadMap(){
    const rta = await this.geolocation.getCurrentPosition();
    const myLatLng = {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
    const mapEle: HTMLElement = document.getElementById('map');
    this.map = new google.maps.Map(mapEle, {
      center: {lat: -2.808283882862282, lng: -78.77372722698364},
      zoom: 16
    });
    google.maps.event
    .addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.renderMarkers();
      var image = '../../assets/icon/actual.png';
      var marker = new google.maps.Marker({
        position: {
          lat: myLatLng.lat,
          lng: myLatLng.lng
        },
        zoom: 15,
        map: this.map, 
        tittle: 'posicion',
        icon: image
      });
    });
 }
 renderMarkers(){
  this.establecimientos.forEach(establecimiento => {
    this.addMarker(establecimiento);
  });
}
addMarker(establecimientos){
  var estimage = '../../assets/icon/pago.png';
  return new google.maps.Marker({
  position: {
    lat: parseFloat(establecimientos.tienda_lat),
    lng: parseFloat(establecimientos.tienda_lon)
  },
  map: this.map,
  title: establecimientos.nombre
});
}
getAllTasks(){
  this.taskService.getAllTasks().subscribe(establecimientos =>{
    this.establecimientos = establecimientos;
  });
}
async onSlideDidChange(){
  const currentSlide= await this.slides.getActiveIndex();
  const establecimiento = this.establecimientos[currentSlide];
  this.map.panTo({lat: parseFloat(establecimiento.tienda_lat), lng: parseFloat(establecimiento.tienda_lon)});
}

async trazarRuta(item){
  this.seccion = false;
  const rta = await this.geolocation.getCurrentPosition();
  const myLatLng = {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
  const destino = {
    lat: parseFloat(item.tienda_lat),
    lng: parseFloat(item.tienda_lon)
  }
  this.directionsDisplay.setMap(this.map);
  this.directionsService.route({
      origin: myLatLng,
      destination: destino,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (response, status) =>{
      if(status === google.maps.DirectionsStatus.OK){
        this.directionsDisplay.setDirections(response);
      }else{
        console.log('error');
      }
    });
  const task = {
      plataforma: this.plataforma,
      latitud: rta.coords.latitude,
      longitud: rta.coords.longitude,
      idEstablecimiento: item.qc_id
     };
  this.taskService.registrarBusqueda(task)
      .subscribe((newTask) =>{
       console.log(newTask);
      });
}




}

import { Component, OnInit } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { TaskService } from './../services/task.service';
import { Establecimiento } from './../interfaces/establecimiento';
declare var google;
interface Marker{
  position: {
    lat: number,
    lng: number,
  };
  title: string;
  sector: string;
}

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.page.html',
  styleUrls: ['./rutas.page.scss'],
})
export class RutasPage implements OnInit {
  seccion: boolean = true;
  mapa: boolean = false;
  map = null;
  plataforma: string = 'Móvil';
  latitudActual: number;
  longitudActual: number;
  textoBuscar = '';
  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  origin = {lat: -2.859241633075849, lng:-78.96410264841003 };
  destination = {lat: -2.861309718788423, lng: -78.96615185609741 }; 
  public establecimientos: Establecimiento[] = [];
  markers: Marker[] = [
    {
      position: {
        lat: -2.859241633075849,
        lng: -78.96410264841003,
      },
      title: 'Local 1',
      sector: 'sector1'
    },
    {
      position: {
        lat: -2.859895277149761,
        lng: -78.96179594865723,
      },
      title: 'Local 2',
      sector: 'sector2'
    },
    {
      position: {
        lat: -2.8602488877229897,
        lng: -78.96578707567139,
      },
      title: 'Local 3',
      sector: 'sector3'
    },
    {
      position: {
        lat: -2.860934677614838,
        lng: -78.96839418283386,
      },
      title: 'Local 4',
      sector: 'sector4'
    },
    {
      position: {
        lat: -2.861309718788423,
        lng: -78.96615185609741,
      },
      title: 'Local 5',
      sector: 'sector5'
    }
  ];

  constructor(private geolocation: Geolocation,private taskService: TaskService) { }

  ngOnInit() {
    this.obtenerEstablecimientos();
  }
  buscar(event){
    this.textoBuscar = event.detail.value;
  }
  obtenerEstablecimientos(){
  this.taskService.getAllTasks().subscribe(establecimientos =>{
    this.establecimientos = establecimientos;
  });
}
async trazarRuta(item){
  this.seccion = false;
  this.mapa = true;
  const rta = await this.geolocation.getCurrentPosition();
  
  const myLatLng = {
      lat: rta.coords.latitude,
      lng: rta.coords.longitude
    };
  const destino = {
    lat: parseFloat(item.tienda_lat),
    lng: parseFloat(item.tienda_lon)
  }
  const mapEle: HTMLElement = document.getElementById('map');
  this.map = new google.maps.Map(mapEle,{
      center: myLatLng,
      zoom: 15
    });
  this.directionsDisplay.setMap(this.map);
  google.maps.event
  .addListenerOnce(this.map, 'idle', () =>{
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
    mapEle.classList.add('show-map');
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

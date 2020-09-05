import { Component, OnInit } from '@angular/core';
import { TaskService } from './../services/task.service';
import { Plataforma } from './../interfaces/plataforma';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-busquedas-plataforma',
  templateUrl: './busquedas-plataforma.page.html',
  styleUrls: ['./busquedas-plataforma.page.scss'],
})
export class BusquedasPlataformaPage implements OnInit {
  public busquedas: Plataforma[] = [];
  public movil: Plataforma[] = [];
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.obtenerBusquedas();
    this.obtenerMovil();
  }
  obtenerBusquedas(){
    this.taskService.obtenerPlataforma().subscribe(busquedas =>{
      this.busquedas = busquedas;
      console.log(this.busquedas);
      this.mostrarWeb();
    });
  }
  obtenerMovil(){
    this.taskService.obtenerMovil().subscribe(movil =>{
      this.movil = movil;
      console.log(this.movil);
      this.mostrarMovil();
    });
  }
  mostrarWeb(){
    
    var ctx = (<any>document.getElementById('web')).getContext('2d');
    
    var chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [this.busquedas[0].tienda_nom,this.busquedas[1].tienda_nom,this.busquedas[2].tienda_nom,this.busquedas[3].tienda_nom,this.busquedas[4].tienda_nom],
        datasets: [{
          label: "Número de busquedas",
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          data: [this.busquedas[0].numerobusquedas, this.busquedas[1].numerobusquedas, this.busquedas[2].numerobusquedas, this.busquedas[3].numerobusquedas, this.busquedas[4].numerobusquedas],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
					position: 'top',
				},
				title: {
					display: true,
					text: 'Busquedas en la plataforma Web'
        },
        scales : {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });
  }
  mostrarMovil(){
    
    var ctx = (<any>document.getElementById('movil')).getContext('2d');
    
    var chart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: [this.movil[0].tienda_nom,this.movil[1].tienda_nom,this.movil[2].tienda_nom,this.movil[3].tienda_nom,this.movil[4].tienda_nom],
        datasets: [{
          label: "Número de busquedas",
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)'
          ],
          data: [this.movil[0].numerobusquedas, this.movil[1].numerobusquedas, this.movil[2].numerobusquedas, this.movil[3].numerobusquedas, this.movil[4].numerobusquedas],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
					position: 'top',
				},
				title: {
					display: true,
					text: 'Busquedas en la plataforma Móvil'
        },
        scales : {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });
  }
  

}

import { Component, OnInit } from '@angular/core';
import { TaskService } from './../services/task.service';
import { Busquedas } from './../interfaces/busquedas';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-busquedas',
  templateUrl: './busquedas.page.html',
  styleUrls: ['./busquedas.page.scss'],
})
export class BusquedasPage implements OnInit {

  constructor(private taskService: TaskService) { }
  public busquedas: Busquedas[] = [];
  ngOnInit() {
    this.obtenerBusquedas();
  }
  obtenerBusquedas(){
    this.taskService.obtenerBusquedas().subscribe(busquedas =>{
      this.busquedas = busquedas;
      console.log(this.busquedas);
        this.mostrarEstadisticas();
    });
  }
  mostrarEstadisticas(){
    
    var ctx = (<any>document.getElementById('estadisticas')).getContext('2d');
    
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
					text: 'Busquedas por establecimiento'
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

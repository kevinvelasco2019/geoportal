import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './../interfaces/task';
import { Usuario } from './../interfaces/usuario';
import { Login } from './../interfaces/login';
import {CookieService } from 'ngx-cookie-service';
import { Establecimiento } from './../interfaces/establecimiento';
import { Busquedas } from './../interfaces/busquedas';
import { Rutas } from './../interfaces/rutas';
import { Plataforma } from './../interfaces/plataforma';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient, private cookies: CookieService) { }

  getAllTasks(){
    const path = 'https://apirest-geoportal.herokuapp.com/establecimientos';
    return this.http.get<Establecimiento[]>(path);
  }
  obtenerBusquedas(){
    const path = 'https://apirest-geoportal.herokuapp.com/busquedas';
    return this.http.get<Busquedas[]>(path);
  }
  obtenerPlataforma(){
    const path = 'https://apirest-geoportal.herokuapp.com/plataforma';
    return this.http.get<Plataforma[]>(path);
  }
  obtenerMovil(){
    const path = 'https://apirest-geoportal.herokuapp.com/movil';
    return this.http.get<Plataforma[]>(path);
  }
  crearUsuario(usuario: Usuario){
    const path = 'https://apirest-geoportal.herokuapp.com/registro';
    return this.http.post(path, usuario);
  }
  ingresarEstablecimiento(task: Task){
    const path = 'https://apirest-geoportal.herokuapp.com/establecimientos';
    return this.http.post(path, task);
  }
  registrarBusqueda(rutas: Rutas){
    const path = 'https://apirest-geoportal.herokuapp.com/busquedas';
    return this.http.post(path, rutas);
  }

  iniciarSesion(login: Login){
    const path = 'https://apirest-geoportal.herokuapp.com/login';
    return this.http.post(path, login);
  }
setToken(token: any){
  this.cookies.set('token', token);
}
getToken(){
  return this.cookies.get('token');
}
cerrarSesion(){
  this.cookies.delete('token');
}
}

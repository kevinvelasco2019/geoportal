import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TaskService } from './../services/task.service';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NoauthGuard implements CanActivate {
  sesion: any;
  constructor(private task: TaskService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.sesion = this.task.getToken();
      if (this.sesion === ''){
       return true;
      }else if (this.sesion !== ''){
       this.router.navigate(['/menu1']);
      }
   }
 }

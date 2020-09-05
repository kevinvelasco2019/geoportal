import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { promise } from 'protractor';
import { AngularFirestore } from 'angularfire2/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uid: string;

  constructor(private AFauth: AngularFireAuth, private db: AngularFirestore, private router: Router) { }
  login(email: string, password: string){
    return new Promise ((resolved, rejected) => {
      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user => {
        resolved(user);
        console.log('logueado');
      }).catch(err => rejected(err));
    });
  }
  logout(){
    this.AFauth.auth.signOut().then(() => {
      this.router.navigate(['/home']);
    })
  }
  registro(email: string, password: string, nombre: string, apellido: string){
    return new Promise ((resolved, rejected) => {
    this.AFauth.auth.createUserWithEmailAndPassword(email, password).then(res => {
      const uid = res.user.uid;
      this.db.collection('usuarios').doc(uid).set({
        nombre: nombre,
        apellido: apellido,
        uid: uid
      })
      resolved(res);
    }).catch(err => rejected(err));
  });
 }
 usuario(){
    return this.AFauth.authState;
}
 obtenerDatos(){
  this.usuario().subscribe(user => 
    this.uid = user.uid);
}

}

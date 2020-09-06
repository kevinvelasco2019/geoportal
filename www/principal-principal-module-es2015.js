(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["principal-principal-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/principal/principal.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/principal/principal.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Agregar un nuevo establecimiento</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"map\"></div>\n  <div id=\"formulario\" >\n    <ion-label position=\"floating\">Nombre del Establecimiento:</ion-label>\n    <ion-input class=\"campos\" [(ngModel)]=\"nombre\" type=\"text\" name=\"nombre\"></ion-input>\n    <ion-label position=\"floating\">Dirección:</ion-label>\n    <ion-input class=\"campos\" [(ngModel)]=\"direccion\" type=\"text\" name=\"direccion\"></ion-input>\n    <ion-label position=\"floating\">Sector:</ion-label>\n    <ion-input class=\"campos\" [(ngModel)]=\"sector\" type=\"text\" name=\"sector\"></ion-input>\n    <ion-label position=\"floating\">Descripción:</ion-label>\n    <ion-input class=\"campos\" [(ngModel)]=\"descripcion\" type=\"text\" name=\"descripcion\"></ion-input>\n    <ion-label position=\"floating\" class=\"id\">Latitud:</ion-label>\n    <ion-input class=\"campos\" [(ngModel)]=\"latitudActual\" class=\"id\" type=\"text\" name=\"descripcion\"></ion-input>\n    <ion-label position=\"floating\" class=\"id\">longitud:</ion-label>\n    <ion-input class=\"campos\" [(ngModel)]=\"longitudActual\" class=\"id\" type=\"text\" name=\"descripcion\"></ion-input>\n    <ion-label position=\"floating\">Pagos Disponibles:</ion-label>\n    <ion-list class=\"ion-no-padding\">\n      <ion-item *ngFor=\"let servicio of servicios\" (click)=\"checks(servicio)\">\n        <ion-label>{{servicio.nombre}}</ion-label>\n        <ion-checkbox [(ngModel)]=\"servicio.selected\"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n    <ion-button class=\"ion-text-center botones\" color=\"danger\" (click)=\"coords()\">Ingresar Establecimiento</ion-button>\n  </div>\n  \n</ion-content>\n");

/***/ }),

/***/ "./src/app/principal/principal-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/principal/principal-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PrincipalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalPageRoutingModule", function() { return PrincipalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _principal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./principal.page */ "./src/app/principal/principal.page.ts");




const routes = [
    {
        path: '',
        component: _principal_page__WEBPACK_IMPORTED_MODULE_3__["PrincipalPage"]
    }
];
let PrincipalPageRoutingModule = class PrincipalPageRoutingModule {
};
PrincipalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PrincipalPageRoutingModule);



/***/ }),

/***/ "./src/app/principal/principal.module.ts":
/*!***********************************************!*\
  !*** ./src/app/principal/principal.module.ts ***!
  \***********************************************/
/*! exports provided: PrincipalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalPageModule", function() { return PrincipalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _principal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./principal-routing.module */ "./src/app/principal/principal-routing.module.ts");
/* harmony import */ var _principal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./principal.page */ "./src/app/principal/principal.page.ts");







let PrincipalPageModule = class PrincipalPageModule {
};
PrincipalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _principal_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrincipalPageRoutingModule"]
        ],
        declarations: [_principal_page__WEBPACK_IMPORTED_MODULE_6__["PrincipalPage"]]
    })
], PrincipalPageModule);



/***/ }),

/***/ "./src/app/principal/principal.page.scss":
/*!***********************************************!*\
  !*** ./src/app/principal/principal.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  width: 100%;\n  height: 50%;\n  display: block;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n}\n#map.show-map {\n  opacity: 1;\n}\n#formulario {\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-top: 5%;\n  margin-bottom: 5%;\n  font-weight: bold;\n}\n.botones {\n  width: 100%;\n  height: 40px;\n  margin-top: 5%;\n}\n.campos {\n  background: rgba(0, 0, 0, 0.05);\n}\n.id {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpbmNpcGFsL0M6XFxBcGxpY2FjaW9uZXNcXFRlc2lzR2VvcG9ydGFsL3NyY1xcYXBwXFxwcmluY2lwYWxcXHByaW5jaXBhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3ByaW5jaXBhbC9wcmluY2lwYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0FDQ0o7QURBSTtFQUNJLFVBQUE7QUNFUjtBRENBO0VBRUksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0o7QURDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0VKO0FEQUU7RUFDSSwrQkFBQTtBQ0dOO0FEREU7RUFDSSxhQUFBO0FDSU4iLCJmaWxlIjoic3JjL2FwcC9wcmluY2lwYWwvcHJpbmNpcGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xyXG4gICAgJi5zaG93LW1hcHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcbiNmb3JtdWxhcmlvXHJcbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgICBcclxufVxyXG4uYm90b25lc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgfVxyXG4gIC5jYW1wb3N7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsIC4wNSk7XHJcbiAgfVxyXG4gIC5pZHtcclxuICAgICAgZGlzcGxheTpub25lO1xyXG4gIH0iLCIjbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xufVxuI21hcC5zaG93LW1hcCB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbiNmb3JtdWxhcmlvIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ib3RvbmVzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5jYW1wb3Mge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG4uaWQge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/principal/principal.page.ts":
/*!*********************************************!*\
  !*** ./src/app/principal/principal.page.ts ***!
  \*********************************************/
/*! exports provided: PrincipalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalPage", function() { return PrincipalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let PrincipalPage = class PrincipalPage {
    constructor(geolocation, alertController, toastController, taskService, router) {
        this.geolocation = geolocation;
        this.alertController = alertController;
        this.toastController = toastController;
        this.taskService = taskService;
        this.router = router;
        this.id = [];
        this.servicios = [
            {
                nombre: 'Pichincha MiVecino',
                selected: false
            }, {
                nombre: 'Banco del Barrio',
                selected: false
            }, {
                nombre: 'ANT (Multas, Citaciones)',
                selected: false
            }, {
                nombre: 'Recargas Móviles (Claro,Movistar,Tuenti)',
                selected: false
            }, {
                nombre: 'Servicios Básicos(Agua,Luz,Teléfono)',
                selected: false
            }
        ];
        this.map = null;
        this.pagos = '';
        this.destacado = 0;
        this.espacio = ', ';
    }
    ngOnInit() {
        this.loadMap();
        this.cargarUbicacion();
    }
    ingresarEstablecimiento() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // tslint:disable-next-line: triple-equals
            if (this.nombre !== '' && this.descripcion !== '' && this.sector !== '' && this.direccion !== '') {
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
                    .subscribe((newTask) => {
                    console.log(newTask);
                });
                const toast = yield this.toastController.create({
                    message: 'Establecimiento registrado correctamente',
                    duration: 4000
                });
                this.router.navigate(['/menu1']);
                toast.present();
            }
            else {
                const alert = yield this.alertController.create({
                    header: 'Error',
                    message: 'Los campos son obligatorios',
                    buttons: ['Cerrar']
                });
                yield alert.present();
            }
        });
    }
    cargarUbicacion() {
        this.geolocation.getCurrentPosition().then((geoposition) => {
            this.latitudActual = geoposition.coords.latitude;
            this.longitudActual = geoposition.coords.longitude;
            this.geometry = geoposition.coords.longitude + ' ' + geoposition.coords.latitude;
            this.elipsoide = 4326;
            console.log(this.geometry);
        });
    }
    loadMap() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const rta = yield this.geolocation.getCurrentPosition();
            const myLatLng = {
                lat: rta.coords.latitude,
                lng: rta.coords.longitude
            };
            const mapEle = document.getElementById('map');
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
                marker.addListener('dragend', function (event) {
                    this.nuevaLatitud = this.getPosition().lat();
                    this.nuevaLongitud = this.getPosition().lng();
                });
            });
        });
    }
    checks(check) {
        if (check.selected === 'true') {
            console.log('agregado');
        }
        else if (check.selected === 'false') {
            console.log('error');
        }
    }
    coords() {
        console.log(this.latitudActual);
        console.log(this.longitudActual);
        console.log(this.nuevaLatitud);
        console.log(this.nuevaLongitud);
    }
    services() {
        let i = 0;
        let limite = this.servicios.length - 1;
        var verdadero = true;
        for (i == 0; i <= limite; i++) {
            if (this.servicios[i].selected === verdadero) {
                if (i < limite) {
                    this.pays = this.servicios[i].nombre;
                    this.pagos = this.pagos.concat(this.pays).concat(this.espacio);
                }
                else {
                    this.pays = this.servicios[i].nombre;
                    this.pagos = this.pagos.concat(this.pays);
                }
            }
            else {
                console.log('vacio');
            }
        }
        console.log(this.pagos);
    }
};
PrincipalPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
PrincipalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-principal',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./principal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/principal/principal.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./principal.page.scss */ "./src/app/principal/principal.page.scss")).default]
    })
], PrincipalPage);



/***/ })

}]);
//# sourceMappingURL=principal-principal-module-es2015.js.map
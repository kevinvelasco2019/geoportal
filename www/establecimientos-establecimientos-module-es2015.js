(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["establecimientos-establecimientos-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/establecimientos/establecimientos.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/establecimientos/establecimientos.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Explorar Establecimientos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"map\"></div>\n  <ion-slides (ionSlideDidChange)=\"onSlideDidChange()\" *ngIf=\"seccion\">\n    <ion-slide *ngFor=\"let e of establecimientos\">\n    <ion-card class=\"card\">\n      <ion-card-header color=\"dark\" class=\"ion-text-center\"> Establecimiento: {{e.tienda_nom}}</ion-card-header>\n      <ion-label class=\"label\"><ion-icon class=\"icon\" name=\"navigate\"></ion-icon> Sector: {{e.tienda_sec}}</ion-label>\n      <br>\n      <ion-label class=\"label\"><ion-icon class=\"icon\" name=\"map\"></ion-icon>Dirección: {{e.tienda_dir}}</ion-label>\n      <ion-card-content lines=full>\n        <ion-label class=\"label\"><ion-icon class=\"icon\" name=\"card-outline\"></ion-icon> Pagos Disponibles: {{e.tienda_pag}}</ion-label>\n        <br>\n        <ion-button class=\"ion-text-center botones\" color=\"dark\" (click)=\"trazarRuta(e)\">¿Cómo llegar?</ion-button>\n      </ion-card-content>\n    </ion-card>\n  </ion-slide>\n  </ion-slides>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/establecimientos/establecimientos-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/establecimientos/establecimientos-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: EstablecimientosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstablecimientosPageRoutingModule", function() { return EstablecimientosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _establecimientos_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./establecimientos.page */ "./src/app/establecimientos/establecimientos.page.ts");




const routes = [
    {
        path: '',
        component: _establecimientos_page__WEBPACK_IMPORTED_MODULE_3__["EstablecimientosPage"]
    }
];
let EstablecimientosPageRoutingModule = class EstablecimientosPageRoutingModule {
};
EstablecimientosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EstablecimientosPageRoutingModule);



/***/ }),

/***/ "./src/app/establecimientos/establecimientos.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/establecimientos/establecimientos.module.ts ***!
  \*************************************************************/
/*! exports provided: EstablecimientosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstablecimientosPageModule", function() { return EstablecimientosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _establecimientos_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./establecimientos-routing.module */ "./src/app/establecimientos/establecimientos-routing.module.ts");
/* harmony import */ var _establecimientos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./establecimientos.page */ "./src/app/establecimientos/establecimientos.page.ts");







let EstablecimientosPageModule = class EstablecimientosPageModule {
};
EstablecimientosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _establecimientos_routing_module__WEBPACK_IMPORTED_MODULE_5__["EstablecimientosPageRoutingModule"]
        ],
        declarations: [_establecimientos_page__WEBPACK_IMPORTED_MODULE_6__["EstablecimientosPage"]]
    })
], EstablecimientosPageModule);



/***/ }),

/***/ "./src/app/establecimientos/establecimientos.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/establecimientos/establecimientos.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  width: 100%;\n  height: 100%;\n  display: block;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n}\n#map.show-map {\n  opacity: 1;\n}\n.label {\n  color: black;\n  margin-left: 10px;\n}\n.card {\n  font-weight: bold;\n  font-size: 16px;\n}\n.icon {\n  margin-right: 5px;\n}\nion-slides {\n  height: 240px;\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n}\n.botones {\n  width: 100%;\n  height: 30px;\n}\n#trazo {\n  width: 100%;\n  height: 100%;\n  display: block;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n}\n#trazo.show-map {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXN0YWJsZWNpbWllbnRvcy9DOlxcQXBsaWNhY2lvbmVzXFxUZXNpc0dlb3BvcnRhbC9zcmNcXGFwcFxcZXN0YWJsZWNpbWllbnRvc1xcZXN0YWJsZWNpbWllbnRvcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2VzdGFibGVjaW1pZW50b3MvZXN0YWJsZWNpbWllbnRvcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBQUE7QUNDSjtBREFJO0VBQ0ksVUFBQTtBQ0VSO0FEQ0E7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUNFSjtBREFBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FDR0o7QUREQTtFQUNJLGlCQUFBO0FDSUo7QURGQTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDS0o7QURIQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDTUo7QURKRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtBQ09KO0FETkk7RUFDSSxVQUFBO0FDUVIiLCJmaWxlIjoic3JjL2FwcC9lc3RhYmxlY2ltaWVudG9zL2VzdGFibGVjaW1pZW50b3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xyXG4gICAgJi5zaG93LW1hcHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcbi5sYWJlbHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uaWNvbntcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcbmlvbi1zbGlkZXMge1xyXG4gICAgaGVpZ2h0OiAyNDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmJvdG9uZXN7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICB9XHJcbiAgI3RyYXpve1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2UtaW47XHJcbiAgICAmLnNob3ctbWFwe1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbn0iLCIjbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTUwbXMgZWFzZS1pbjtcbn1cbiNtYXAuc2hvdy1tYXAge1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubGFiZWwge1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uY2FyZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDI0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJvdG9uZXMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG4jdHJhem8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xufVxuI3RyYXpvLnNob3ctbWFwIHtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/establecimientos/establecimientos.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/establecimientos/establecimientos.page.ts ***!
  \***********************************************************/
/*! exports provided: EstablecimientosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstablecimientosPage", function() { return EstablecimientosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let EstablecimientosPage = class EstablecimientosPage {
    constructor(geolocation, taskService) {
        this.geolocation = geolocation;
        this.taskService = taskService;
        this.establecimientos = [];
        this.map = null;
        this.seccion = true;
        this.mapa = false;
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay = new google.maps.DirectionsRenderer();
        this.plataforma = 'Móvil';
    }
    ngOnInit() {
        this.getAllTasks();
        this.loadMap();
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
                center: { lat: -2.808283882862282, lng: -78.77372722698364 },
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
        });
    }
    renderMarkers() {
        this.establecimientos.forEach(establecimiento => {
            this.addMarker(establecimiento);
        });
    }
    addMarker(establecimientos) {
        var estimage = '../../assets/icon/pago.png';
        return new google.maps.Marker({
            position: {
                lat: parseFloat(establecimientos.tienda_lat),
                lng: parseFloat(establecimientos.tienda_lon)
            },
            map: this.map,
            title: establecimientos.nombre,
            icon: estimage
        });
    }
    getAllTasks() {
        this.taskService.getAllTasks().subscribe(establecimientos => {
            this.establecimientos = establecimientos;
        });
    }
    onSlideDidChange() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const currentSlide = yield this.slides.getActiveIndex();
            const establecimiento = this.establecimientos[currentSlide];
            this.map.panTo({ lat: parseFloat(establecimiento.tienda_lat), lng: parseFloat(establecimiento.tienda_lon) });
        });
    }
    trazarRuta(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.seccion = false;
            const rta = yield this.geolocation.getCurrentPosition();
            const myLatLng = {
                lat: rta.coords.latitude,
                lng: rta.coords.longitude
            };
            const destino = {
                lat: parseFloat(item.tienda_lat),
                lng: parseFloat(item.tienda_lon)
            };
            this.directionsDisplay.setMap(this.map);
            this.directionsService.route({
                origin: myLatLng,
                destination: destino,
                travelMode: google.maps.TravelMode.DRIVING,
            }, (response, status) => {
                if (status === google.maps.DirectionsStatus.OK) {
                    this.directionsDisplay.setDirections(response);
                }
                else {
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
                .subscribe((newTask) => {
                console.log(newTask);
            });
        });
    }
};
EstablecimientosPage.ctorParameters = () => [
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"] },
    { type: _services_task_service__WEBPACK_IMPORTED_MODULE_3__["TaskService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"])
], EstablecimientosPage.prototype, "slides", void 0);
EstablecimientosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-establecimientos',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./establecimientos.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/establecimientos/establecimientos.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./establecimientos.page.scss */ "./src/app/establecimientos/establecimientos.page.scss")).default]
    })
], EstablecimientosPage);



/***/ })

}]);
//# sourceMappingURL=establecimientos-establecimientos-module-es2015.js.map
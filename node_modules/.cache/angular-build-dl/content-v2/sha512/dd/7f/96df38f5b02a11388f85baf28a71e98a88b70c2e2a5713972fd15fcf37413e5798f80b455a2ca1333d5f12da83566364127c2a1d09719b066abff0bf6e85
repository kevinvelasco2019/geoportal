function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["principal-principal-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/principal/principal.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/principal/principal.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPrincipalPrincipalPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Agregar un nuevo establecimiento</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"map\"></div>\n  <div id=\"formulario\" >\n    <ion-label position=\"floating\">Nombre del Establecimiento:</ion-label>\n    <ion-input class=\"campos\" [(ngModel)]=\"nombre\" type=\"text\" name=\"nombre\"></ion-input>\n    <ion-label position=\"floating\">Dirección:</ion-label>\n    <ion-input class=\"campos\" [(ngModel)]=\"direccion\" type=\"text\" name=\"direccion\"></ion-input>\n    <ion-label position=\"floating\">Sector:</ion-label>\n    <ion-input class=\"campos\" [(ngModel)]=\"sector\" type=\"text\" name=\"sector\"></ion-input>\n    <ion-label position=\"floating\">Descripción:</ion-label>\n    <ion-input class=\"campos\" [(ngModel)]=\"descripcion\" type=\"text\" name=\"descripcion\"></ion-input>\n    <ion-label position=\"floating\" class=\"id\">Latitud:</ion-label>\n    <ion-input class=\"campos\" [(ngModel)]=\"latitudActual\" class=\"id\" type=\"text\" name=\"descripcion\"></ion-input>\n    <ion-label position=\"floating\" class=\"id\">longitud:</ion-label>\n    <ion-input class=\"campos\" [(ngModel)]=\"longitudActual\" class=\"id\" type=\"text\" name=\"descripcion\"></ion-input>\n    <ion-label position=\"floating\">Pagos Disponibles:</ion-label>\n    <ion-list class=\"ion-no-padding\">\n      <ion-item *ngFor=\"let servicio of servicios\" (click)=\"checks(servicio)\">\n        <ion-label>{{servicio.nombre}}</ion-label>\n        <ion-checkbox [(ngModel)]=\"servicio.selected\"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n    <ion-button class=\"ion-text-center botones\" color=\"danger\" (click)=\"coords()\">Ingresar Establecimiento</ion-button>\n  </div>\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/principal/principal-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/principal/principal-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: PrincipalPageRoutingModule */

  /***/
  function srcAppPrincipalPrincipalRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrincipalPageRoutingModule", function () {
      return PrincipalPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _principal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./principal.page */
    "./src/app/principal/principal.page.ts");

    var routes = [{
      path: '',
      component: _principal_page__WEBPACK_IMPORTED_MODULE_3__["PrincipalPage"]
    }];

    var PrincipalPageRoutingModule = function PrincipalPageRoutingModule() {
      _classCallCheck(this, PrincipalPageRoutingModule);
    };

    PrincipalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PrincipalPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/principal/principal.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/principal/principal.module.ts ***!
    \***********************************************/

  /*! exports provided: PrincipalPageModule */

  /***/
  function srcAppPrincipalPrincipalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrincipalPageModule", function () {
      return PrincipalPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _principal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./principal-routing.module */
    "./src/app/principal/principal-routing.module.ts");
    /* harmony import */


    var _principal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./principal.page */
    "./src/app/principal/principal.page.ts");

    var PrincipalPageModule = function PrincipalPageModule() {
      _classCallCheck(this, PrincipalPageModule);
    };

    PrincipalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _principal_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrincipalPageRoutingModule"]],
      declarations: [_principal_page__WEBPACK_IMPORTED_MODULE_6__["PrincipalPage"]]
    })], PrincipalPageModule);
    /***/
  },

  /***/
  "./src/app/principal/principal.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/principal/principal.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPrincipalPrincipalPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#map {\n  width: 100%;\n  height: 50%;\n  display: block;\n  opacity: 0;\n  transition: opacity 150ms ease-in;\n}\n#map.show-map {\n  opacity: 1;\n}\n#formulario {\n  margin-left: 10%;\n  margin-right: 10%;\n  margin-top: 5%;\n  margin-bottom: 5%;\n  font-weight: bold;\n}\n.botones {\n  width: 100%;\n  height: 40px;\n  margin-top: 5%;\n}\n.campos {\n  background: rgba(0, 0, 0, 0.05);\n}\n.id {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpbmNpcGFsL0M6XFxBcGxpY2FjaW9uZXNcXFRlc2lzR2VvcG9ydGFsL3NyY1xcYXBwXFxwcmluY2lwYWxcXHByaW5jaXBhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3ByaW5jaXBhbC9wcmluY2lwYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGlDQUFBO0FDQ0o7QURBSTtFQUNJLFVBQUE7QUNFUjtBRENBO0VBRUksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0o7QURDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0VKO0FEQUU7RUFDSSwrQkFBQTtBQ0dOO0FEREU7RUFDSSxhQUFBO0FDSU4iLCJmaWxlIjoic3JjL2FwcC9wcmluY2lwYWwvcHJpbmNpcGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xyXG4gICAgJi5zaG93LW1hcHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcbiNmb3JtdWxhcmlvXHJcbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDsgICBcclxufVxyXG4uYm90b25lc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgfVxyXG4gIC5jYW1wb3N7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsIC4wNSk7XHJcbiAgfVxyXG4gIC5pZHtcclxuICAgICAgZGlzcGxheTpub25lO1xyXG4gIH0iLCIjbWFwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxNTBtcyBlYXNlLWluO1xufVxuI21hcC5zaG93LW1hcCB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbiNmb3JtdWxhcmlvIHtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5ib3RvbmVzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5jYW1wb3Mge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG4uaWQge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/principal/principal.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/principal/principal.page.ts ***!
    \*********************************************/

  /*! exports provided: PrincipalPage */

  /***/
  function srcAppPrincipalPrincipalPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrincipalPage", function () {
      return PrincipalPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_task_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../services/task.service */
    "./src/app/services/task.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PrincipalPage = /*#__PURE__*/function () {
      function PrincipalPage(geolocation, alertController, toastController, taskService, router) {
        _classCallCheck(this, PrincipalPage);

        this.geolocation = geolocation;
        this.alertController = alertController;
        this.toastController = toastController;
        this.taskService = taskService;
        this.router = router;
        this.id = [];
        this.servicios = [{
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
        }];
        this.map = null;
        this.pagos = '';
        this.destacado = 0;
        this.espacio = ', ';
      }

      _createClass(PrincipalPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadMap();
          this.cargarUbicacion();
        }
      }, {
        key: "ingresarEstablecimiento",
        value: function ingresarEstablecimiento() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var task, toast, alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!(this.nombre !== '' && this.descripcion !== '' && this.sector !== '' && this.direccion !== '')) {
                      _context.next = 11;
                      break;
                    }

                    this.services();
                    task = {
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
                    this.taskService.ingresarEstablecimiento(task).subscribe(function (newTask) {
                      console.log(newTask);
                    });
                    _context.next = 6;
                    return this.toastController.create({
                      message: 'Establecimiento registrado correctamente',
                      duration: 4000
                    });

                  case 6:
                    toast = _context.sent;
                    this.router.navigate(['/menu1']);
                    toast.present();
                    _context.next = 16;
                    break;

                  case 11:
                    _context.next = 13;
                    return this.alertController.create({
                      header: 'Error',
                      message: 'Los campos son obligatorios',
                      buttons: ['Cerrar']
                    });

                  case 13:
                    alert = _context.sent;
                    _context.next = 16;
                    return alert.present();

                  case 16:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "cargarUbicacion",
        value: function cargarUbicacion() {
          var _this = this;

          this.geolocation.getCurrentPosition().then(function (geoposition) {
            _this.latitudActual = geoposition.coords.latitude;
            _this.longitudActual = geoposition.coords.longitude;
            _this.geometry = geoposition.coords.longitude + ' ' + geoposition.coords.latitude;
            _this.elipsoide = 4326;
            console.log(_this.geometry);
          });
        }
      }, {
        key: "loadMap",
        value: function loadMap() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var rta, myLatLng, mapEle, marker;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.geolocation.getCurrentPosition();

                  case 2:
                    rta = _context2.sent;
                    myLatLng = {
                      lat: rta.coords.latitude,
                      lng: rta.coords.longitude
                    };
                    mapEle = document.getElementById('map');
                    this.map = new google.maps.Map(mapEle, {
                      center: myLatLng,
                      zoom: 16
                    });
                    google.maps.event.addListenerOnce(this.map, 'idle', function () {
                      console.log('listo');
                      mapEle.classList.add('show-map');
                      var image = '../../assets/icon/actual.png';
                      marker = new google.maps.Marker({
                        position: {
                          lat: myLatLng.lat,
                          lng: myLatLng.lng
                        },
                        zoom: 15,
                        map: _this2.map,
                        draggable: true,
                        tittle: 'Ubicación actual',
                        icon: image
                      });
                      marker.addListener('dragend', function (event) {
                        this.nuevaLatitud = this.getPosition().lat();
                        this.nuevaLongitud = this.getPosition().lng();
                      });
                    });

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "checks",
        value: function checks(check) {
          if (check.selected === 'true') {
            console.log('agregado');
          } else if (check.selected === 'false') {
            console.log('error');
          }
        }
      }, {
        key: "coords",
        value: function coords() {
          console.log(this.latitudActual);
          console.log(this.longitudActual);
          console.log(this.nuevaLatitud);
          console.log(this.nuevaLongitud);
        }
      }, {
        key: "services",
        value: function services() {
          var i = 0;
          var limite = this.servicios.length - 1;
          var verdadero = true;

          for (i == 0; i <= limite; i++) {
            if (this.servicios[i].selected === verdadero) {
              if (i < limite) {
                this.pays = this.servicios[i].nombre;
                this.pagos = this.pagos.concat(this.pays).concat(this.espacio);
              } else {
                this.pays = this.servicios[i].nombre;
                this.pagos = this.pagos.concat(this.pays);
              }
            } else {
              console.log('vacio');
            }
          }

          console.log(this.pagos);
        }
      }]);

      return PrincipalPage;
    }();

    PrincipalPage.ctorParameters = function () {
      return [{
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_2__["Geolocation"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }, {
        type: _services_task_service__WEBPACK_IMPORTED_MODULE_4__["TaskService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    PrincipalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-principal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./principal.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/principal/principal.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./principal.page.scss */
      "./src/app/principal/principal.page.scss"))["default"]]
    })], PrincipalPage);
    /***/
  }
}]);
//# sourceMappingURL=principal-principal-module-es5.js.map
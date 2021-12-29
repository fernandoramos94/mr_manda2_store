(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-maps-maps-module"], {
    /***/
    "7RKl":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maps/maps.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function RKl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"util.back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{util.translate('Choose your Location')}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"div_map\" #map></div>\n  <ion-button (click)=\"submit()\" expand=\"block\">\n    {{util.translate('Submit')}}\n  </ion-button>\n</ion-content>";
      /***/
    },

    /***/
    "MWin":
    /*!*******************************************!*\
      !*** ./src/app/pages/maps/maps.module.ts ***!
      \*******************************************/

    /*! exports provided: MapsPageModule */

    /***/
    function MWin(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapsPageModule", function () {
        return MapsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _maps_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./maps-routing.module */
      "QqQm");
      /* harmony import */


      var _maps_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./maps.page */
      "eR5t");
      /* harmony import */


      var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/shared.module */
      "PCNd");
      /*
        Authors : initappz (Rahul Jograna)
        Website : https://initappz.com/
        App Name : ionic 5 foodies app
        Created : 28-Feb-2021
        This App Template Source code is licensed as per the
        terms found in the Website https://initappz.com/license
        Copyright and Good Faith Purchasers © 2020-present initappz.
      */


      var MapsPageModule = function MapsPageModule() {
        _classCallCheck(this, MapsPageModule);
      };

      MapsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _maps_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapsPageRoutingModule"]],
        declarations: [_maps_page__WEBPACK_IMPORTED_MODULE_6__["MapsPage"]]
      })], MapsPageModule);
      /***/
    },

    /***/
    "Q1s5":
    /*!*******************************************!*\
      !*** ./src/app/pages/maps/maps.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function Q1s5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.div_map {\n  height: 80vh;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21hcHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFFSiIsImZpbGUiOiJtYXBzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZm9vZGllcyBhcHBcbiAgQ3JlYXRlZCA6IDI4LUZlYi0yMDIxXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLmRpdl9tYXAge1xuICAgIGhlaWdodDogODB2aDtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "QqQm":
    /*!***************************************************!*\
      !*** ./src/app/pages/maps/maps-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: MapsPageRoutingModule */

    /***/
    function QqQm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapsPageRoutingModule", function () {
        return MapsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _maps_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./maps.page */
      "eR5t");
      /*
        Authors : initappz (Rahul Jograna)
        Website : https://initappz.com/
        App Name : ionic 5 foodies app
        Created : 28-Feb-2021
        This App Template Source code is licensed as per the
        terms found in the Website https://initappz.com/license
        Copyright and Good Faith Purchasers © 2020-present initappz.
      */


      var routes = [{
        path: '',
        component: _maps_page__WEBPACK_IMPORTED_MODULE_3__["MapsPage"]
      }];

      var MapsPageRoutingModule = function MapsPageRoutingModule() {
        _classCallCheck(this, MapsPageRoutingModule);
      };

      MapsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MapsPageRoutingModule);
      /***/
    },

    /***/
    "eR5t":
    /*!*****************************************!*\
      !*** ./src/app/pages/maps/maps.page.ts ***!
      \*****************************************/

    /*! exports provided: MapsPage */

    /***/
    function eR5t(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapsPage", function () {
        return MapsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_maps_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./maps.page.html */
      "7RKl");
      /* harmony import */


      var _maps_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./maps.page.scss */
      "Q1s5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/android-permissions/ngx */
      "WOgW");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "Bfh1");
      /* harmony import */


      var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/location-accuracy/ngx */
      "92l+");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /*
        Authors : initappz (Rahul Jograna)
        Website : https://initappz.com/
        App Name : ionic 5 foodies app
        Created : 28-Feb-2021
        This App Template Source code is licensed as per the
        terms found in the Website https://initappz.com/license
        Copyright and Good Faith Purchasers © 2020-present initappz.
      */


      var MapsPage = /*#__PURE__*/function () {
        function MapsPage(platform, androidPermissions, geolocation, navCtrl, locationAccuracy, util) {
          _classCallCheck(this, MapsPage);

          this.platform = platform;
          this.androidPermissions = androidPermissions;
          this.geolocation = geolocation;
          this.navCtrl = navCtrl;
          this.locationAccuracy = locationAccuracy;
          this.util = util;
        }

        _createClass(MapsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getLocation();
          }
        }, {
          key: "getLocation",
          value: function getLocation() {
            var _this = this;

            this.platform.ready().then(function () {
              if (_this.platform.is('android')) {
                _this.androidPermissions.checkPermission(_this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION).then(function (result) {
                  return console.log('Has permission?', result.hasPermission);
                }, function (err) {
                  return _this.androidPermissions.requestPermission(_this.androidPermissions.PERMISSION.ACCESS_FINE_LOCATION);
                });

                _this.grantRequest();
              } else {
                _this.locationAccuracy.canRequest().then(function (canRequest) {
                  console.log('canRequest', canRequest);
                });

                _this.grantRequest();
              }
            });
          }
        }, {
          key: "grantRequest",
          value: function grantRequest() {}
        }, {
          key: "loadmap",
          value: function loadmap(lat, lng, mapElement) {
            var location = new google.maps.LatLng(lat, lng);
            var style = [{
              featureType: 'all',
              elementType: 'all',
              stylers: [{
                saturation: -100
              }]
            }];
            var mapOptions = {
              zoom: 15,
              scaleControl: false,
              streetViewControl: false,
              zoomControl: false,
              overviewMapControl: false,
              center: location,
              mapTypeControl: false,
              mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'Foodfire5']
              }
            };
            this.map = new google.maps.Map(mapElement.nativeElement, mapOptions);
            var mapType = new google.maps.StyledMapType(style, {
              name: 'Grayscale'
            });
            this.map.mapTypes.set('Foodfire5', mapType);
            this.map.setMapTypeId('Foodfire5');
            this.addMarker(location);
            this.getAddress(lat, lng);
          }
        }, {
          key: "getAddress",
          value: function getAddress(lat, lng) {
            var _this2 = this;

            var geocoder = new google.maps.Geocoder();
            var location = new google.maps.LatLng(lat, lng);
            geocoder.geocode({
              'location': location
            }, function (results, status) {
              console.log(results);
              _this2.address = results[0].formatted_address;
              _this2.lat = lat;
              _this2.lng = lng;
            });
          }
        }, {
          key: "addMarker",
          value: function addMarker(location) {
            var _this3 = this;

            console.log('location =>', location);
            var icon = {
              url: 'assets/icon/marker.png',
              scaledSize: new google.maps.Size(50, 50)
            };
            this.marker = new google.maps.Marker({
              position: location,
              map: this.map,
              icon: icon,
              draggable: true,
              animation: google.maps.Animation.DROP
            });
            google.maps.event.addListener(this.marker, 'dragend', function () {
              console.log(_this3.marker);

              _this3.getDragAddress(_this3.marker);
            });
          }
        }, {
          key: "getDragAddress",
          value: function getDragAddress(event) {
            var _this4 = this;

            var geocoder = new google.maps.Geocoder();
            var location = new google.maps.LatLng(event.position.lat(), event.position.lng());
            geocoder.geocode({
              'location': location
            }, function (results, status) {
              console.log(results);
              _this4.address = results[0].formatted_address;
              _this4.lat = event.position.lat();
              _this4.lng = event.position.lng();
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            localStorage.setItem('newAddress', this.address);
            localStorage.setItem('newLng', this.lng);
            localStorage.setItem('newLat', this.lat);
            this.navCtrl.back();
          }
        }]);

        return MapsPage;
      }();

      MapsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__["AndroidPermissions"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_7__["LocationAccuracy"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"]
        }];
      };

      MapsPage.propDecorators = {
        mapEle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['map', {
            "static": true
          }]
        }]
      };
      MapsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-maps',
        template: _raw_loader_maps_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_maps_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"], _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_5__["AndroidPermissions"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_7__["LocationAccuracy"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"]])], MapsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-maps-maps-module-es5.js.map
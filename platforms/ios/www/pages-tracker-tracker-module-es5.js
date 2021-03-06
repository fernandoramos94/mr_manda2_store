(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tracker-tracker-module"], {
    /***/
    "KAE8":
    /*!*************************************************!*\
      !*** ./src/app/pages/tracker/tracker.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function KAE8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.main_content_div {\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.main_content_div .upper_div {\n  height: 60vh;\n}\n.main_content_div .upper_div #map {\n  width: 100%;\n  height: 100%;\n}\n.main_content_div .lower_div {\n  height: 40vh;\n  padding: 20px;\n}\n.main_content_div .lower_div ion-label {\n  display: block;\n}\n.main_content_div .lower_div .head_lbl {\n  font-weight: 600;\n  font-size: 20px;\n  margin-top: 10px;\n}\n.main_content_div .lower_div .driver_detail_div {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n}\n.main_content_div .lower_div .driver_detail_div .back_image {\n  height: 50px;\n  width: 50px;\n  border-radius: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  min-width: 50px;\n}\n.main_content_div .lower_div .driver_detail_div .boy_name {\n  font-weight: 600;\n}\n.main_content_div .lower_div .driver_detail_div .address {\n  color: gray;\n  width: 80%;\n}\n.main_content_div .lower_div .driver_detail_div ion-button {\n  position: absolute;\n  right: -3px;\n  top: -5px;\n  --border-radius: 3px;\n  font-weight: 600;\n}\n.main_content_div .lower_div .order_detail {\n  font-weight: bold;\n  margin-top: 20px;\n}\n.main_content_div .lower_div .order_status {\n  background: var(--ion-color-primary);\n  position: absolute;\n  right: 20px;\n  text-transform: uppercase;\n  color: white;\n  padding: 3px 8px;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RyYWNrZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUVKO0FBREk7RUFDSSxZQUFBO0FBR1I7QUFGUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBSVo7QUFESTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBR1I7QUFGUTtFQUNJLGNBQUE7QUFJWjtBQUZRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFJWjtBQURRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBR1o7QUFGWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0FBSWhCO0FBRlk7RUFDSSxnQkFBQTtBQUloQjtBQUZZO0VBQ0ksV0FBQTtFQUNBLFVBQUE7QUFJaEI7QUFGWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBSWhCO0FBQVE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBRVo7QUFBUTtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUVaIiwiZmlsZSI6InRyYWNrZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBmb29kaWVzIGFwcFxuICBDcmVhdGVkIDogMjgtRmViLTIwMjFcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC51cHBlcl9kaXYge1xuICAgICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICAgICNtYXAge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmxvd2VyX2RpdiB7XG4gICAgICAgIGhlaWdodDogNDB2aDtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkX2xibCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kcml2ZXJfZGV0YWlsX2RpdiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgLmJhY2tfaW1hZ2Uge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJveV9uYW1lIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmFkZHJlc3Mge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0zcHg7XG4gICAgICAgICAgICAgICAgdG9wOiAtNXB4O1xuICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAub3JkZXJfZGV0YWlsIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAub3JkZXJfc3RhdHVzIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCA4cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "OtiO":
    /*!***********************************************!*\
      !*** ./src/app/pages/tracker/tracker.page.ts ***!
      \***********************************************/

    /*! exports provided: TrackerPage */

    /***/
    function OtiO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TrackerPage", function () {
        return TrackerPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tracker_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tracker.page.html */
      "dfCF");
      /* harmony import */


      var _tracker_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tracker.page.scss */
      "KAE8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/apis.service */
      "8RPc");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      "m/P+");
      /*
        Authors : initappz (Rahul Jograna)
        Website : https://initappz.com/
        App Name : ionic 5 foodies app
        Created : 28-Feb-2021
        This App Template Source code is licensed as per the
        terms found in the Website https://initappz.com/license
        Copyright and Good Faith Purchasers © 2020-present initappz.
      */


      var TrackerPage = /*#__PURE__*/function () {
        function TrackerPage(route, api, iab, util) {
          _classCallCheck(this, TrackerPage);

          this.route = route;
          this.api = api;
          this.iab = iab;
          this.util = util;
          this.dName = '';
          this.restAddress = '';
          this.dCover = '';
          this.phone = '';
          this.status = '';
          this.totalOrders = [];
        }

        _createClass(TrackerPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.queryParams.subscribe(function (data) {
              console.log('data=>', data);

              if (data.hasOwnProperty('id')) {
                _this.id = data.id;

                _this.getOrder();
              }
            });
          }
        }, {
          key: "callDriver",
          value: function callDriver() {
            this.iab.create('tel:' + this.phone, '_system');
          }
        }, {
          key: "getOrder",
          value: function getOrder() {
            var _this2 = this;

            var param = {
              id: this.id
            };
            this.api.post('orders/getById', param).then(function (datas) {
              console.log(datas);

              if (datas && datas.status === 200 && datas.data.length) {
                var data = datas.data[0];
                _this2.totalOrders = JSON.parse(data.orders);
                _this2.grandTotal = data.grand_total;
                _this2.status = data.status;
                _this2.restAddress = data.str_address;
                _this2.payMethod = data.pay_method === 'cod' ? 'COD' : 'PAID';

                if (data && data.did && data.did !== '0') {
                  _this2.dId = data.did;

                  _this2.getDriverInfo();
                }

                if (data && data.address) {
                  var add = JSON.parse(data.address);
                  console.log(add);
                  _this2.myLat = add.lat;
                  _this2.myLng = add.lng;
                }
              } else {
                _this2.util.back();
              }
            }, function (error) {
              console.log('error in orders', error);

              _this2.util.errorToast('Something went wrong');
            })["catch"](function (error) {
              console.log('error in order', error);

              _this2.util.errorToast('Something went wrong');
            });
          }
        }, {
          key: "getDriverInfo",
          value: function getDriverInfo() {
            var _this3 = this;

            var param = {
              id: this.dId
            };
            this.api.post('drivers/getById', param).then(function (data) {
              console.log('driver info--->>', data);

              if (data && data.status === 200 && data.data.length) {
                var info = data.data[0];
                console.log('---->>>>>', info);
                _this3.dName = info.first_name + ' ' + info.last_name;
                _this3.dCover = info.cover;
                _this3.phone = info.mobile;
                _this3.driverLat = info.lat;
                _this3.driverLng = info.lng;

                _this3.loadMap(parseFloat(_this3.myLat), parseFloat(_this3.myLng), parseFloat(_this3.driverLat), parseFloat(_this3.driverLng));
              }
            }, function (error) {
              console.log(error);

              _this3.util.errorToast('Something went wrong');
            })["catch"](function (error) {
              console.log(error);

              _this3.util.errorToast('Something went wrong');
            });
          }
        }, {
          key: "changeMarkerPosition",
          value: function changeMarkerPosition(marker, map) {
            var _this4 = this;

            var param = {
              id: this.dId
            };
            this.api.post('drivers/getById', param).then(function (data) {
              console.log('driver info--->>', data);

              if (data && data.status === 200 && data.data.length) {
                var info = data.data[0];
                console.log('---->>>>>', info);
                _this4.dName = info.first_name + ' ' + info.last_name;
                _this4.dCover = info.cover;
                _this4.phone = info.mobile;
                _this4.driverLat = info.lat;
                _this4.driverLng = info.lng;
                var latlng = new google.maps.LatLng(parseFloat(_this4.driverLat), parseFloat(_this4.driverLng));
                map.setCenter(latlng);
                marker.setPosition(latlng);
              }
            }, function (error) {
              console.log(error);

              _this4.util.errorToast('Something went wrong');
            })["catch"](function (error) {
              console.log(error);

              _this4.util.errorToast('Something went wrong');
            });
          }
        }, {
          key: "loadMap",
          value: function loadMap(latOri, lngOri, latDest, lngDest) {
            var _this5 = this;

            var directionsService = new google.maps.DirectionsService();
            var directionsDisplay = new google.maps.DirectionsRenderer();
            directionsDisplay = new google.maps.DirectionsRenderer();
            var bounds = new google.maps.LatLngBounds();
            var origin1 = {
              lat: parseFloat(latOri),
              lng: parseFloat(lngOri)
            };
            var destinationA = {
              lat: latDest,
              lng: lngDest
            };
            var maps = new google.maps.Map(this.mapElement.nativeElement, {
              center: {
                lat: latOri,
                lng: lngOri
              },
              disableDefaultUI: true,
              zoom: 100
            });
            var custPos = new google.maps.LatLng(latOri, lngOri);
            var restPos = new google.maps.LatLng(latDest, lngDest);
            var logo = {
              url: 'assets/pin.png',
              scaledSize: new google.maps.Size(50, 50),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(0, 0) // anchor

            };
            var marker = new google.maps.Marker({
              map: maps,
              position: custPos,
              animation: google.maps.Animation.DROP,
              icon: logo
            });
            var markerCust = new google.maps.Marker({
              map: maps,
              position: restPos,
              animation: google.maps.Animation.DROP,
              icon: logo
            });
            marker.setMap(maps);
            markerCust.setMap(maps);
            directionsDisplay.setMap(maps); // directionsDisplay.setOptions({ suppressMarkers: true });

            directionsDisplay.setOptions({
              polylineOptions: {
                strokeWeight: 4,
                strokeOpacity: 1,
                strokeColor: '#ff384c'
              },
              suppressMarkers: true
            });
            var geocoder = new google.maps.Geocoder();
            var service = new google.maps.DistanceMatrixService();
            service.getDistanceMatrix({
              origins: [origin1],
              destinations: [destinationA],
              travelMode: 'DRIVING',
              unitSystem: google.maps.UnitSystem.METRIC,
              avoidHighways: false,
              avoidTolls: false
            }, function (response, status) {
              if (status !== 'OK') {
                alert('Error was: ' + status);
              } else {
                var originList = response.originAddresses;
                var destinationList = response.destinationAddresses;

                var showGeocodedAddressOnMap = function showGeocodedAddressOnMap(asDestination) {
                  return function (results, status) {
                    if (status === 'OK') {
                      maps.fitBounds(bounds.extend(results[0].geometry.location));
                    } else {
                      alert('Geocode was not successful due to: ' + status);
                    }
                  };
                };

                directionsService.route({
                  origin: origin1,
                  destination: destinationA,
                  travelMode: 'DRIVING'
                }, function (response, status) {
                  if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                  } else {
                    window.alert('Directions request failed due to ' + status);
                  }
                });

                for (var i = 0; i < originList.length; i++) {
                  var results = response.rows[i].elements;
                  geocoder.geocode({
                    'address': originList[i]
                  }, showGeocodedAddressOnMap(false));

                  for (var j = 0; j < results.length; j++) {
                    geocoder.geocode({
                      'address': destinationList[j]
                    }, showGeocodedAddressOnMap(true));
                  }
                }
              }
            });
            this.interval = setInterval(function () {
              _this5.changeMarkerPosition(marker, maps);
            }, 12000);
          }
        }, {
          key: "ionViewDidLeave",
          value: function ionViewDidLeave() {
            clearInterval(this.interval);
          }
        }]);

        return TrackerPage;
      }();

      TrackerPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"]
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
        }];
      };

      TrackerPage.propDecorators = {
        mapElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['map', {
            "static": true
          }]
        }]
      };
      TrackerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tracker',
        template: _raw_loader_tracker_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tracker_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_7__["InAppBrowser"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]])], TrackerPage);
      /***/
    },

    /***/
    "akYc":
    /*!*************************************************!*\
      !*** ./src/app/pages/tracker/tracker.module.ts ***!
      \*************************************************/

    /*! exports provided: TrackerPageModule */

    /***/
    function akYc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TrackerPageModule", function () {
        return TrackerPageModule;
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


      var _tracker_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tracker-routing.module */
      "yKY6");
      /* harmony import */


      var _tracker_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tracker.page */
      "OtiO");
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


      var TrackerPageModule = function TrackerPageModule() {
        _classCallCheck(this, TrackerPageModule);
      };

      TrackerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _tracker_routing_module__WEBPACK_IMPORTED_MODULE_5__["TrackerPageRoutingModule"]],
        declarations: [_tracker_page__WEBPACK_IMPORTED_MODULE_6__["TrackerPage"]]
      })], TrackerPageModule);
      /***/
    },

    /***/
    "dfCF":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tracker/tracker.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function dfCF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"util.back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{util.translate('Tracking')}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"upper_div\">\n      <div #map id=\"map\" class=\"map\"></div>\n    </div>\n    <div class=\"lower_div\">\n      <ion-label class=\"head_lbl\">{{util.translate('Order on the Way')}}</ion-label>\n\n      <div class=\"driver_detail_div\">\n        <div class=\"back_image\"\n          [ngStyle]=\"{'background-image':'url('+api.mediaURL+dCover+'),url(assets/placeholder.jpg)'}\"></div>\n        <div style=\"padding-left: 20px;\">\n          <ion-label class=\"boy_name\">{{dName}}</ion-label>\n          <ion-label class=\"address\">{{restAddress}}</ion-label>\n          <ion-button (click)=\"callDriver()\" size=\"small\" fill=\"outline\">\n            {{util.translate('Call')}}\n          </ion-button>\n        </div>\n      </div>\n\n      <ion-label class=\"order_detail\">{{totalOrders.length}} {{util.translate('Items to deliver')}}\n        <span style=\"color: var(--ion-color-primary);position: absolute;right: 20px;\"\n          *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{grandTotal}}</span>\n        <span style=\"color: var(--ion-color-primary);position: absolute;right: 20px;\"\n          *ngIf=\"util.cside ==='right'\">{{grandTotal}}{{util.currecny}}</span>\n      </ion-label>\n      <ion-label class=\"order_detail\">{{util.translate('Order Status')}}<span class=\"order_status\">{{status}}</span>\n      </ion-label>\n      <ion-label class=\"order_detail\">{{util.translate('Payment')}}<span class=\"order_status\">{{payMethod}}</span>\n      </ion-label>\n\n    </div>\n\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "yKY6":
    /*!*********************************************************!*\
      !*** ./src/app/pages/tracker/tracker-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: TrackerPageRoutingModule */

    /***/
    function yKY6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TrackerPageRoutingModule", function () {
        return TrackerPageRoutingModule;
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


      var _tracker_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tracker.page */
      "OtiO");
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
        component: _tracker_page__WEBPACK_IMPORTED_MODULE_3__["TrackerPage"]
      }];

      var TrackerPageRoutingModule = function TrackerPageRoutingModule() {
        _classCallCheck(this, TrackerPageRoutingModule);
      };

      TrackerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TrackerPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-tracker-tracker-module-es5.js.map
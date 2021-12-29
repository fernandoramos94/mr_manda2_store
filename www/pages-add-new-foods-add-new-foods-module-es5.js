(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-new-foods-add-new-foods-module"], {
    /***/
    "/fQS":
    /*!*************************************************************!*\
      !*** ./src/app/pages/add-new-foods/add-new-foods.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function fQS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-item {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n.delete_icn {\n  color: white;\n  font-weight: 600;\n}\n.mainContent .coverPlaceholder {\n  text-align: center;\n  padding: 60px;\n  border: 1px solid lightgray;\n  border-radius: 10px;\n  margin-top: 10px;\n}\n.mainContent .coverReal {\n  margin-top: 10px;\n  width: 100%;\n  height: 150px;\n  border-radius: 5px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.mainContent ion-button {\n  --border-radius: 5px;\n  font-weight: 600;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FkZC1uZXctZm9vZHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRUo7QUFBQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQUdKO0FBQ0k7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFFUjtBQUFJO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBRVI7QUFDSTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNSIiwiZmlsZSI6ImFkZC1uZXctZm9vZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBmb29kaWVzIGFwcFxuICBDcmVhdGVkIDogMjgtRmViLTIwMjFcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG5pb24taXRlbSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmRlbGV0ZV9pY24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubWFpbkNvbnRlbnQge1xuICAgIC5jb3ZlclBsYWNlaG9sZGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA2MHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICAgIC5jb3ZlclJlYWwge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgfVxuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "Db1F":
    /*!*************************************************************!*\
      !*** ./src/app/pages/add-new-foods/add-new-foods.module.ts ***!
      \*************************************************************/

    /*! exports provided: AddNewFoodsPageModule */

    /***/
    function Db1F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddNewFoodsPageModule", function () {
        return AddNewFoodsPageModule;
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


      var _add_new_foods_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-new-foods-routing.module */
      "Oe51");
      /* harmony import */


      var _add_new_foods_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-new-foods.page */
      "oVO1");
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


      var AddNewFoodsPageModule = function AddNewFoodsPageModule() {
        _classCallCheck(this, AddNewFoodsPageModule);
      };

      AddNewFoodsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _add_new_foods_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddNewFoodsPageRoutingModule"]],
        declarations: [_add_new_foods_page__WEBPACK_IMPORTED_MODULE_6__["AddNewFoodsPage"]]
      })], AddNewFoodsPageModule);
      /***/
    },

    /***/
    "Oe51":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/add-new-foods/add-new-foods-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: AddNewFoodsPageRoutingModule */

    /***/
    function Oe51(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddNewFoodsPageRoutingModule", function () {
        return AddNewFoodsPageRoutingModule;
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


      var _add_new_foods_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-new-foods.page */
      "oVO1");
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
        component: _add_new_foods_page__WEBPACK_IMPORTED_MODULE_3__["AddNewFoodsPage"]
      }];

      var AddNewFoodsPageRoutingModule = function AddNewFoodsPageRoutingModule() {
        _classCallCheck(this, AddNewFoodsPageRoutingModule);
      };

      AddNewFoodsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddNewFoodsPageRoutingModule);
      /***/
    },

    /***/
    "oVO1":
    /*!***********************************************************!*\
      !*** ./src/app/pages/add-new-foods/add-new-foods.page.ts ***!
      \***********************************************************/

    /*! exports provided: AddNewFoodsPage */

    /***/
    function oVO1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddNewFoodsPage", function () {
        return AddNewFoodsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_new_foods_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-new-foods.page.html */
      "qaP+");
      /* harmony import */


      var _add_new_foods_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-new-foods.page.scss */
      "/fQS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/camera/ngx */
      "a/9d");
      /* harmony import */


      var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/apis.service */
      "8RPc");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /* harmony import */


      var _preview_preview_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../preview/preview.page */
      "24Ct");
      /*
        Authors : initappz (Rahul Jograna)
        Website : https://initappz.com/
        App Name : ionic 5 foodies app
        Created : 28-Feb-2021
        This App Template Source code is licensed as per the
        terms found in the Website https://initappz.com/license
        Copyright and Good Faith Purchasers © 2020-present initappz.
      */


      var AddNewFoodsPage = /*#__PURE__*/function () {
        function AddNewFoodsPage(actionSheetController, camera, util, api, router, navCtrl, route, alertController, modalCtrl) {
          var _this = this;

          _classCallCheck(this, AddNewFoodsPage);

          this.actionSheetController = actionSheetController;
          this.camera = camera;
          this.util = util;
          this.api = api;
          this.router = router;
          this.navCtrl = navCtrl;
          this.route = route;
          this.alertController = alertController;
          this.modalCtrl = modalCtrl;
          this.categories = [];
          this.image = '';
          this.isEdit = false;
          this.veg = '1';
          this.status = '1';
          this.variations = [];
          this.size = '0';
          this.category();
          this.route.queryParams.subscribe(function (data) {
            console.log('data=>', data);

            if (data.hasOwnProperty('id')) {
              _this.id = data.id;
              _this.isEdit = true;

              _this.getProduct();
            } else {
              _this.isEdit = false;
            }
          });
        }

        _createClass(AddNewFoodsPage, [{
          key: "getProduct",
          value: function getProduct() {
            var _this2 = this;

            var param = {
              id: this.id
            };
            this.util.show();
            this.api.post('products/getById', param).then(function (data) {
              console.log(data);

              _this2.util.hide();

              if (data && data.status === 200 && data.data.length > 0) {
                var info = data.data[0];
                console.log('info->', info);
                _this2.name = info.name;
                _this2.descriptions = info.details;
                _this2.coverImage = info.cover;
                _this2.cid = info.cid;
                _this2.price = info.price;
                _this2.size = info.size;
                _this2.status = info.status;
                _this2.veg = info.veg;

                if (function (x) {
                  try {
                    JSON.parse(x);
                    return true;
                  } catch (e) {
                    return false;
                  }
                }(info.variations)) {
                  _this2.variations = JSON.parse(info.variations);
                }
              } else {
                _this2.util.errorToast(_this2.util.translate('Product not found'));
              }
            }, function (error) {
              console.log(error);

              _this2.util.hide();

              _this2.util.errorToast(_this2.util.translate('Something went wrong'));
            })["catch"](function (error) {
              console.log(error);

              _this2.util.hide();

              _this2.util.errorToast(_this2.util.translate('Something went wrong'));
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "category",
          value: function category() {
            var _this3 = this;

            var param = {
              id: localStorage.getItem('uid')
            };
            this.api.post('categories/getByRestId', param).then(function (data) {
              if (data && data.status === 200 && data.data.length) {
                _this3.categories = data.data;
              }
            }, function (error) {
              console.log(error);
              console.log(error);

              _this3.util.errorToast(_this3.util.translate('Something went wrong'));
            })["catch"](function (error) {
              console.log(error);
              console.log(error);

              _this3.util.errorToast(_this3.util.translate('Something went wrong'));
            });
          }
        }, {
          key: "changeSize",
          value: function changeSize(event) {
            console.log(event, this.size);

            if (event === '1') {
              var items = this.variations.filter(function (x) {
                return x.title === 'size';
              });
              console.log('length', items);

              if (!items.length) {
                var item = {
                  title: 'size',
                  type: 'radio',
                  items: []
                };
                this.variations.push(item);
                console.log(this.variations);
              }
            } else {
              this.variations = this.variations.filter(function (x) {
                return x.title !== 'size';
              });
            }
          }
        }, {
          key: "cover",
          value: function cover() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              var actionSheet;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.actionSheetController.create({
                        header: this.util.translate('Choose from'),
                        mode: 'ios',
                        buttons: [{
                          text: this.util.translate('Camera'),
                          icon: 'camera',
                          handler: function handler() {
                            console.log('Delete clicked');

                            _this4.opemCamera('camera');
                          }
                        }, {
                          text: this.util.translate('Gallery'),
                          icon: 'image',
                          handler: function handler() {
                            console.log('Share clicked');

                            _this4.opemCamera('gallery');
                          }
                        }, {
                          text: this.util.translate('Cancel'),
                          icon: 'close',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }]
                      });

                    case 2:
                      actionSheet = _context.sent;
                      _context.next = 5;
                      return actionSheet.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "addNew",
          value: function addNew() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this5 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        header: 'Add Add-ons!',
                        inputs: [{
                          name: 'name',
                          type: 'text',
                          placeholder: 'Title'
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Confirm Cancel');
                          }
                        }, {
                          text: 'Ok',
                          handler: function handler(data) {
                            console.log('Confirm Ok');

                            if (data && data.name) {
                              var item = _this5.variations.filter(function (x) {
                                return x.title === data.name;
                              });

                              console.log('=>"', item);

                              if (item && item.length > 0) {
                                _this5.util.errorToast('Duplicate');
                              } else {
                                _this5.presentAlertRadio(data.name);
                              }
                            }
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "editTitle",
          value: function editTitle(index) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this6 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        header: 'Edit title!',
                        inputs: [{
                          name: 'name',
                          type: 'text',
                          placeholder: 'Title',
                          value: this.variations[index].title
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Confirm Cancel');
                          }
                        }, {
                          text: 'Ok',
                          handler: function handler(data) {
                            console.log('Confirm Ok');

                            if (data && data.name) {
                              _this6.variations[index].title = data.name;
                            }
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentAlertRadio",
          value: function presentAlertRadio(name) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this7 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        header: 'Select Type',
                        inputs: [{
                          name: 'radio1',
                          type: 'radio',
                          label: 'Only One',
                          value: 'radio',
                          checked: true
                        }, {
                          name: 'radio2',
                          type: 'radio',
                          label: 'Multiple',
                          value: 'check'
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Confirm Cancel');
                          }
                        }, {
                          text: 'Ok',
                          handler: function handler(data) {
                            console.log('Confirm Ok');
                            var item = {
                              title: name,
                              type: data,
                              items: []
                            };

                            _this7.variations.push(item);

                            console.log(_this7.variations);
                          }
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "opemCamera",
          value: function opemCamera(type) {
            var _this8 = this;

            try {
              var options = {
                quality: 100,
                targetHeight: 800,
                targetWidth: 800,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                correctOrientation: true,
                sourceType: type === 'camera' ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.PHOTOLIBRARY
              };
              this.camera.getPicture(options).then(function (url) {
                console.log('url->', url);

                _this8.util.show();

                var alpha = {
                  img: url,
                  type: 'jpg'
                };
                console.log('parma==>', alpha);

                _this8.api.nativePost('users/upload_file', alpha).then(function (data) {
                  _this8.util.hide();

                  console.log('data', JSON.parse(data.data));
                  var info = JSON.parse(data.data);
                  _this8.coverImage = info.data;
                  console.log('cover image', _this8.coverImage);
                }, function (error) {
                  console.log(error);

                  _this8.util.hide();

                  _this8.util.errorToast(_this8.util.translate('Something went wrong'));
                })["catch"](function (error) {
                  console.log(error);

                  _this8.util.hide();

                  _this8.util.errorToast(_this8.util.translate('Something went wrong'));
                });
              });
            } catch (error) {
              console.log('error', error);
            }
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this9 = this;

            if (this.name === '' || !this.name || this.cid === '' || !this.cid || this.price === '' || !this.price || this.descriptions === '' || !this.descriptions) {
              this.util.errorToast(this.util.translate('All Fields are required'));
              return false;
            }

            if (!this.coverImage || this.coverImage === '') {
              this.util.errorToast(this.util.translate('Please add your cover image'));
              return false;
            }

            if (this.isEdit && this.id) {
              var param = {
                restId: localStorage.getItem('uid'),
                cid: this.cid,
                name: this.name,
                price: this.price,
                details: this.descriptions,
                cover: this.coverImage,
                veg: this.veg,
                status: this.status,
                variations: JSON.stringify(this.variations),
                size: this.size,
                id: this.id
              };
              this.util.show();
              this.api.post('products/editList', param).then(function (data) {
                _this9.util.hide();

                if (data && data.status === 200) {
                  _this9.util.showToast(_this9.util.translate('Food updated Successfully'), 'success', 'bottom');

                  _this9.navCtrl.back();
                } else {
                  _this9.util.errorToast(_this9.util.translate('Something went wrong'));
                }
              }, function (error) {
                console.log(error);

                _this9.util.hide();

                _this9.util.errorToast(_this9.util.translate('Something went wrong'));
              })["catch"](function (error) {
                console.log(error);

                _this9.util.hide();

                _this9.util.errorToast(_this9.util.translate('Something went wrong'));
              });
            } else {
              var _param = {
                restId: localStorage.getItem('uid'),
                cid: this.cid,
                name: this.name,
                price: this.price,
                details: this.descriptions,
                cover: this.coverImage,
                rating: 0,
                veg: this.veg,
                status: 1,
                variations: JSON.stringify(this.variations),
                size: this.size
              };
              this.util.show();
              this.api.post('products/save', _param).then(function (data) {
                _this9.util.hide();

                if (data && data.status === 200) {
                  _this9.util.showToast(_this9.util.translate('Food Added Successfully'), 'success', 'bottom');

                  _this9.navCtrl.back();
                } else {
                  _this9.util.errorToast(_this9.util.translate('Something went wrong'));
                }
              }, function (error) {
                console.log(error);

                _this9.util.hide();

                _this9.util.errorToast(_this9.util.translate('Something went wrong'));
              })["catch"](function (error) {
                console.log(error);

                _this9.util.hide();

                _this9.util.errorToast(_this9.util.translate('Something went wrong'));
              });
            }
          }
        }, {
          key: "delete",
          value: function _delete(item) {
            console.log(item);

            if (item.title === 'size') {
              this.size = false;
            }

            this.variations = this.variations.filter(function (x) {
              return x.title !== item.title;
            });
          }
        }, {
          key: "addItem",
          value: function addItem(index) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this10 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      console.log(this.variations[index]);
                      _context5.next = 3;
                      return this.alertController.create({
                        header: 'Add item to ' + this.variations[index].title,
                        inputs: [{
                          name: 'title',
                          type: 'text',
                          placeholder: 'Add-ons name'
                        }, {
                          name: 'price',
                          type: 'number',
                          placeholder: 'Add-ons price'
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Confirm Cancel');
                          }
                        }, {
                          text: 'Ok',
                          handler: function handler(data) {
                            console.log('Confirm Ok');

                            if (data && data.title && data.price) {
                              var item = {
                                title: data.title,
                                price: data.price
                              };

                              _this10.variations[index].items.push(item);

                              console.log(_this10.variations);
                            }
                          }
                        }]
                      });

                    case 3:
                      alert = _context5.sent;
                      _context5.next = 6;
                      return alert.present();

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "deleteSub",
          value: function deleteSub(index, item) {
            console.log(index);
            console.log(item);
            var selected = this.variations[index].items;
            console.log('selected', selected);
            var data = selected.filter(function (x) {
              return x.title !== item.title;
            });
            console.log(data);
            this.variations[index].items = data;
            console.log('done', this.variations);
          }
        }, {
          key: "editSub",
          value: function editSub(index, items, subIndex) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var _this11 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      console.log(index, items, subIndex);
                      console.log(this.variations);
                      _context6.next = 4;
                      return this.alertController.create({
                        header: 'Edit item ' + this.variations[index].title,
                        inputs: [{
                          name: 'title',
                          type: 'text',
                          placeholder: 'Variation name',
                          value: this.variations[index].items[subIndex].title
                        }, {
                          name: 'price',
                          type: 'number',
                          placeholder: 'Variation price',
                          value: this.variations[index].items[subIndex].price
                        }],
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Confirm Cancel');
                          }
                        }, {
                          text: 'Ok',
                          handler: function handler(data) {
                            console.log('Confirm Ok');
                            _this11.variations[index].items[subIndex].title = data.title;
                            _this11.variations[index].items[subIndex].price = data.price;
                            console.log(_this11.variations);
                          }
                        }]
                      });

                    case 4:
                      alert = _context6.sent;
                      _context6.next = 7;
                      return alert.present();

                    case 7:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "preview",
          value: function preview() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var modal;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.modalCtrl.create({
                        component: _preview_preview_page__WEBPACK_IMPORTED_MODULE_9__["PreviewPage"],
                        cssClass: 'custom_modal2',
                        componentProps: {
                          name: this.name,
                          variations: this.variations,
                          desc: this.descriptions
                        }
                      });

                    case 2:
                      modal = _context7.sent;
                      _context7.next = 5;
                      return modal.present();

                    case 5:
                      return _context7.abrupt("return", _context7.sent);

                    case 6:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }]);

        return AddNewFoodsPage;
      }();

      AddNewFoodsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"]
        }, {
          type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"]
        }, {
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_7__["ApisService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }];
      };

      AddNewFoodsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-new-foods',
        template: _raw_loader_add_new_foods_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_new_foods_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_8__["UtilService"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_7__["ApisService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]])], AddNewFoodsPage);
      /***/
    },

    /***/
    "qaP+":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-new-foods/add-new-foods.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function qaP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"util.back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title *ngIf=\"isEdit\">{{util.translate('Editar producto')}}</ion-title>\n\n    <ion-title *ngIf=\"!isEdit\">{{util.translate('Añadir producto')}}</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"mainContent\">\n    <ion-list lines=\"none\">\n      <ion-item>\n        <ion-label>{{util.translate('Categoria')}}</ion-label>\n        <ion-select [(ngModel)]=\"cid\" interface=\"popover\" mode=\"ios\">\n          <ion-select-option *ngFor=\"let item of categories\" [value]=\"item.id\">{{item.name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-input [(ngModel)]=\"name\" type=\"text\" [placeholder]=\"util.translate('Nombre del producto')\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-input [(ngModel)]=\"price\" type=\"number\" [placeholder]=\"util.translate('Precio')\"></ion-input>\n      </ion-item>\n\n      <!-- <ion-item>\n        <ion-label>{{util.translate('Veg')}}</ion-label>\n        <ion-select [(ngModel)]=\"veg\" interface=\"popover\" mode=\"ios\">\n          <ion-select-option value=\"1\">{{util.translate('Veg')}}</ion-select-option>\n          <ion-select-option value=\"0\">{{util.translate('Non Veg')}}</ion-select-option>\n        </ion-select>\n      </ion-item> -->\n      <ion-item>\n        <ion-textarea [(ngModel)]=\"descriptions\" rows=\"5\" [placeholder]=\"util.translate('Descripcion corta')\">\n        </ion-textarea>\n      </ion-item>\n      <!-- <ion-item>\n        <ion-label>{{util.translate('Status')}}</ion-label>\n        <ion-select [(ngModel)]=\"status\" interface=\"popover\" mode=\"ios\">\n          <ion-select-option value=\"1\">{{util.translate('Available')}}</ion-select-option>\n          <ion-select-option value=\"0\">{{util.translate('Hide')}}</ion-select-option>\n        </ion-select>\n      </ion-item> -->\n      <div class=\"coverPlaceholder\" (click)=\"cover()\" *ngIf=\"!coverImage || coverImage ==''\">\n        <ion-icon name=\"cloud-upload-outline\" color=\"primary\"></ion-icon>\n        <p>{{util.translate('Portada')}}</p>\n      </div>\n      <div class=\"coverReal\" (click)=\"cover()\"\n        [ngStyle]=\"{'background-image':'url('+api.mediaURL+coverImage+'),url(assets/placeholder.jpg)'}\"\n        *ngIf=\"coverImage && coverImage !=''\">\n      </div>\n      <!-- <ion-item>\n        <ion-label>{{util.translate('Size?')}} <span style=\"font-size: 10px !important;\">(\n            {{util.translate('Regular,Medium,Large')}} ) </span> </ion-label>\n        <ion-select [(ngModel)]=\"size\" (ngModelChange)=\"changeSize($event)\" interface=\"popover\" mode=\"ios\">\n          <ion-select-option value=\"1\">{{util.translate('Yes')}}</ion-select-option>\n          <ion-select-option value=\"0\">{{util.translate('No')}}</ion-select-option>\n        </ion-select>\n      </ion-item> -->\n      <ion-item class=\"noLines\">\n        <ion-label>{{util.translate('Extas')}}</ion-label>\n        <ion-icon name=\"add\" (click)=\"addNew()\" slot=\"end\"></ion-icon>\n      </ion-item>\n\n\n      <ion-list>\n        <ion-item-sliding *ngFor=\"let item of variations;let i = index;\">\n          <ion-item class=\"noLines\">\n            <ion-label>{{item.title}}</ion-label>\n            <ion-icon name=\"create-outline\" slot=\"end\" *ngIf=\"item.title !=='size'\" (click)=\"editTitle(i)\"></ion-icon>\n            <ion-icon name=\"add-circle\" slot=\"end\" (click)=\"addItem(i)\"></ion-icon>\n            <ion-icon name=\"trash\" slot=\"end\" (click)=\"delete(item)\"></ion-icon>\n          </ion-item>\n          <ion-item *ngFor=\"let sub of item.items;let j = index\" class=\"sub\" lines=\"nones\">\n            <ion-label>{{sub.title}}\n              <ion-label>{{sub.price}}</ion-label>\n            </ion-label>\n            <ion-icon name=\"create-outline\" slot=\"end\" (click)=\"editSub(i,sub,j)\"></ion-icon>\n            <ion-icon name=\"trash-outline\" slot=\"end\" (click)=\"deleteSub(i,sub)\"></ion-icon>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-button (click)=\"submit()\" expand=\"block\">\n            {{isEdit ? 'Actualizar' : 'Agregar'}}\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-button expand=\"block\" (click)=\"preview()\">{{util.translate('Vista previa de extras')}}</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n\n  </div>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-add-new-foods-add-new-foods-module-es5.js.map
(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-category-category-module"], {
    /***/
    "ADuP":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/category/category.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function ADuP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"util.back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{util.translate('Categorias')}}</ion-title>\n    <ion-button (click)=\"addNewCat()\" fill=\"clear\" color=\"light\" slot=\"end\">\n      <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"mainContent\">\n    <h2 class=\"ion-text-center\" *ngIf=\"!dummy?.length && !categories?.length\">{{util.translate('No existen categorias')}}\n    </h2>\n    <ion-item *ngFor=\"let item of dummy\">\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <ion-item lines=\"none\" *ngFor=\"let item of categories;\">\n      <ion-label>{{item.name}}</ion-label>\n      <ion-icon slot=\"end\" name=\"create-outline\" color=\"primary\" (click)=\"edit(item)\"\n        style=\"margin: 0px 5px;font-size: 25px;\">\n      </ion-icon>\n      <ion-icon slot=\"end\" name=\"trash\" color=\"primary\" (click)=\"deleteItem(item)\"\n        style=\"margin: 0px 5px;font-size: 25px;\"></ion-icon>\n      <ion-icon slot=\"end\" [name]=\"item.status ==='1' ? 'eye-outline':'eye-off-outline'\" color=\"primary\"\n        (click)=\"hideStatus(item)\" style=\"margin: 0px 5px;font-size: 25px;\"></ion-icon>\n    </ion-item>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "FTWP":
    /*!*************************************************!*\
      !*** ./src/app/pages/category/category.page.ts ***!
      \*************************************************/

    /*! exports provided: CategoryPage */

    /***/
    function FTWP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryPage", function () {
        return CategoryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_category_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./category.page.html */
      "ADuP");
      /* harmony import */


      var _category_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./category.page.scss */
      "cJis");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/apis.service */
      "8RPc");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);

      var CategoryPage = /*#__PURE__*/function () {
        function CategoryPage(api, alertController, util, router) {
          _classCallCheck(this, CategoryPage);

          this.api = api;
          this.alertController = alertController;
          this.util = util;
          this.router = router;
          this.categories = [];
          this.dummy = Array(50);
          this.getCategories();
        }

        _createClass(CategoryPage, [{
          key: "getCategories",
          value: function getCategories() {
            var _this = this;

            var param = {
              id: localStorage.getItem('uid')
            };
            this.api.post('categories/getByRestId', param).then(function (data) {
              _this.dummy = [];

              if (data && data.status === 200 && data.data.length) {
                _this.categories = data.data;
              }
            }, function (error) {
              _this.dummy = [];

              _this.util.errorToast(_this.util.translate('Something went wrong'));
            })["catch"](function (error) {
              console.log(error);
              console.log(error);
              _this.dummy = [];

              _this.util.errorToast(_this.util.translate('Something went wrong'));
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addNewCat",
          value: function addNewCat() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        header: this.util.translate('Añadir nueva!'),
                        mode: 'ios',
                        inputs: [{
                          name: 'name1',
                          type: 'text',
                          placeholder: this.util.translate('Nombre de categoria')
                        }],
                        buttons: [{
                          text: this.util.translate('Cancelar'),
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {}
                        }, {
                          text: this.util.translate('Ok'),
                          handler: function handler(data) {
                            if (data && data.name1 !== '') {
                              var param = {
                                restId: localStorage.getItem('uid'),
                                name: data.name1,
                                status: 1
                              };

                              _this2.util.show();

                              _this2.api.post('categories/save', param).then(function (datas) {
                                _this2.util.hide();

                                if (datas && datas.status === 200) {
                                  _this2.getCategories();

                                  var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.mixin({
                                    toast: true,
                                    position: 'top-end',
                                    showConfirmButton: false,
                                    timer: 1000,
                                    timerProgressBar: true,
                                    onOpen: function onOpen(toast) {
                                      toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.stopTimer);
                                      toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.resumeTimer);
                                    }
                                  });
                                  Toast.fire({
                                    icon: 'success',
                                    title: _this2.util.translate('saved')
                                  });
                                } else {
                                  _this2.util.errorToast(_this2.util.translate('Something went wrong'));
                                }
                              }, function (error) {
                                _this2.util.hide();

                                _this2.util.errorToast(_this2.util.translate('Something went wrong'));
                              })["catch"](function (error) {
                                _this2.util.hide();

                                _this2.util.errorToast(_this2.util.translate('Something went wrong'));
                              });
                            }
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "edit",
          value: function edit(item) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        header: this.util.translate('Editar'),
                        mode: 'ios',
                        inputs: [{
                          name: 'name1',
                          type: 'text',
                          placeholder: this.util.translate('Nombre categoria'),
                          value: item.name
                        }],
                        buttons: [{
                          text: this.util.translate('Cancelar'),
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {}
                        }, {
                          text: this.util.translate('Ok'),
                          handler: function handler(data) {
                            if (data && data.name1 !== '') {
                              var param = {
                                id: item.id,
                                name: data.name1
                              };

                              _this3.util.show();

                              _this3.api.post('categories/editList', param).then(function (datas) {
                                _this3.util.hide();

                                if (datas && datas.status === 200) {
                                  _this3.getCategories();

                                  var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.mixin({
                                    toast: true,
                                    position: 'top-end',
                                    showConfirmButton: false,
                                    timer: 1000,
                                    timerProgressBar: true,
                                    onOpen: function onOpen(toast) {
                                      toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.stopTimer);
                                      toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.resumeTimer);
                                    }
                                  });
                                  Toast.fire({
                                    icon: 'success',
                                    title: _this3.util.translate('saved')
                                  });
                                } else {
                                  _this3.util.errorToast(_this3.util.translate('Something went wrong'));
                                }
                              }, function (error) {
                                _this3.util.hide();

                                _this3.util.errorToast(_this3.util.translate('Something went wrong'));
                              })["catch"](function (error) {
                                _this3.util.hide();

                                _this3.util.errorToast(_this3.util.translate('Something went wrong'));
                              });
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
          key: "deleteItem",
          value: function deleteItem(item) {
            var _this4 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
              title: this.util.translate('Estas seguro?'),
              text: this.util.translate('Eliminar') + ' ' + item.name + ' ?',
              icon: 'question',
              showConfirmButton: true,
              showCancelButton: true,
              confirmButtonText: this.util.translate('Eliminae'),
              backdrop: false,
              background: 'white'
            }).then(function (status) {
              if (status && status.value) {
                var param = {
                  id: item.id
                };

                _this4.util.show();

                _this4.api.post('categories/deleteList', param).then(function (datas) {
                  _this4.util.hide();

                  if (datas && datas.status === 200) {
                    _this4.getCategories();

                    var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.mixin({
                      toast: true,
                      position: 'top-end',
                      showConfirmButton: false,
                      timer: 1000,
                      timerProgressBar: true,
                      onOpen: function onOpen(toast) {
                        toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.stopTimer);
                        toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.resumeTimer);
                      }
                    });
                    Toast.fire({
                      icon: 'success',
                      title: _this4.util.translate('deleted')
                    });
                  } else {
                    _this4.util.errorToast(_this4.util.translate('Something went wrong'));
                  }
                }, function (error) {
                  console.log(error);

                  _this4.util.hide();

                  _this4.util.errorToast(_this4.util.translate('Something went wrong'));
                })["catch"](function (error) {
                  console.log(error);

                  _this4.util.hide();

                  _this4.util.errorToast(_this4.util.translate('Something went wrong'));
                });
              }
            });
          }
        }, {
          key: "hideStatus",
          value: function hideStatus(item) {
            var _this5 = this;

            var param = {
              id: item.id,
              status: item.status === '1' ? 0 : 1
            };
            this.util.show();
            this.api.post('categories/editList', param).then(function (datas) {
              console.log(datas);

              _this5.util.hide();

              if (datas && datas.status === 200) {
                _this5.getCategories();

                var Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 1000,
                  timerProgressBar: true,
                  onOpen: function onOpen(toast) {
                    toast.addEventListener('mouseenter', sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.stopTimer);
                    toast.addEventListener('mouseleave', sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.resumeTimer);
                  }
                });
                Toast.fire({
                  icon: 'success',
                  title: _this5.util.translate('saved')
                });
              } else {
                _this5.util.errorToast(_this5.util.translate('Something went wrong'));
              }
            }, function (error) {
              console.log(error);

              _this5.util.hide();

              _this5.util.errorToast(_this5.util.translate('Something went wrong'));
            })["catch"](function (error) {
              console.log(error);

              _this5.util.hide();

              _this5.util.errorToast(_this5.util.translate('Something went wrong'));
            });
          }
        }]);

        return CategoryPage;
      }();

      CategoryPage.ctorParameters = function () {
        return [{
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }];
      };

      CategoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-category',
        template: _raw_loader_category_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_category_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])], CategoryPage);
      /***/
    },

    /***/
    "GxF5":
    /*!***********************************************************!*\
      !*** ./src/app/pages/category/category-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: CategoryPageRoutingModule */

    /***/
    function GxF5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryPageRoutingModule", function () {
        return CategoryPageRoutingModule;
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


      var _category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./category.page */
      "FTWP");
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
        component: _category_page__WEBPACK_IMPORTED_MODULE_3__["CategoryPage"]
      }];

      var CategoryPageRoutingModule = function CategoryPageRoutingModule() {
        _classCallCheck(this, CategoryPageRoutingModule);
      };

      CategoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CategoryPageRoutingModule);
      /***/
    },

    /***/
    "cJis":
    /*!***************************************************!*\
      !*** ./src/app/pages/category/category.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function cJis(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.edt_icn {\n  width: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhdGVnb3J5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNJLFdBQUE7QUFFSiIsImZpbGUiOiJjYXRlZ29yeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGZvb2RpZXMgYXBwXG4gIENyZWF0ZWQgOiAyOC1GZWItMjAyMVxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbi5lZHRfaWNuIHtcbiAgICB3aWR0aDogMjBweDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "iCz4":
    /*!***************************************************!*\
      !*** ./src/app/pages/category/category.module.ts ***!
      \***************************************************/

    /*! exports provided: CategoryPageModule */

    /***/
    function iCz4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function () {
        return CategoryPageModule;
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


      var _category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./category-routing.module */
      "GxF5");
      /* harmony import */


      var _category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./category.page */
      "FTWP");
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


      var CategoryPageModule = function CategoryPageModule() {
        _classCallCheck(this, CategoryPageModule);
      };

      CategoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _category_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoryPageRoutingModule"]],
        declarations: [_category_page__WEBPACK_IMPORTED_MODULE_6__["CategoryPage"]]
      })], CategoryPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-category-category-module-es5.js.map
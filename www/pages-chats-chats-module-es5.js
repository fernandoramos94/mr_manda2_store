(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chats-chats-module"], {
    /***/
    "EJ+t":
    /*!*****************************************************!*\
      !*** ./src/app/pages/chats/chats-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: ChatsPageRoutingModule */

    /***/
    function EJT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatsPageRoutingModule", function () {
        return ChatsPageRoutingModule;
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


      var _chats_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./chats.page */
      "ZJfK");
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
        component: _chats_page__WEBPACK_IMPORTED_MODULE_3__["ChatsPage"]
      }];

      var ChatsPageRoutingModule = function ChatsPageRoutingModule() {
        _classCallCheck(this, ChatsPageRoutingModule);
      };

      ChatsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChatsPageRoutingModule);
      /***/
    },

    /***/
    "Tuwx":
    /*!*********************************************!*\
      !*** ./src/app/pages/chats/chats.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function Tuwx(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NoYXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7Ozs7Ozs7O0NBQUEiLCJmaWxlIjoiY2hhdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBmb29kaWVzIGFwcFxuICBDcmVhdGVkIDogMjgtRmViLTIwMjFcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4iXX0= */";
      /***/
    },

    /***/
    "UTXh":
    /*!*********************************************!*\
      !*** ./src/app/pages/chats/chats.module.ts ***!
      \*********************************************/

    /*! exports provided: ChatsPageModule */

    /***/
    function UTXh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatsPageModule", function () {
        return ChatsPageModule;
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


      var _chats_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./chats-routing.module */
      "EJ+t");
      /* harmony import */


      var _chats_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./chats.page */
      "ZJfK");
      /*
        Authors : initappz (Rahul Jograna)
        Website : https://initappz.com/
        App Name : ionic 5 foodies app
        Created : 28-Feb-2021
        This App Template Source code is licensed as per the
        terms found in the Website https://initappz.com/license
        Copyright and Good Faith Purchasers © 2020-present initappz.
      */


      var ChatsPageModule = function ChatsPageModule() {
        _classCallCheck(this, ChatsPageModule);
      };

      ChatsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _chats_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatsPageRoutingModule"]],
        declarations: [_chats_page__WEBPACK_IMPORTED_MODULE_6__["ChatsPage"]]
      })], ChatsPageModule);
      /***/
    },

    /***/
    "ZJfK":
    /*!*******************************************!*\
      !*** ./src/app/pages/chats/chats.page.ts ***!
      \*******************************************/

    /*! exports provided: ChatsPage */

    /***/
    function ZJfK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatsPage", function () {
        return ChatsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_chats_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./chats.page.html */
      "is+8");
      /* harmony import */


      var _chats_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./chats.page.scss */
      "Tuwx");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/apis.service */
      "8RPc");
      /*
        Authors : initappz (Rahul Jograna)
        Website : https://initappz.com/
        App Name : ionic 5 foodies app
        Created : 28-Feb-2021
        This App Template Source code is licensed as per the
        terms found in the Website https://initappz.com/license
        Copyright and Good Faith Purchasers © 2020-present initappz.
      */


      var ChatsPage = /*#__PURE__*/function () {
        function ChatsPage(api, util, router, navCtrl) {
          _classCallCheck(this, ChatsPage);

          this.api = api;
          this.util = util;
          this.router = router;
          this.navCtrl = navCtrl;
          this.dummy = [];
          this.users = [];
          this.getChats();
        }

        _createClass(ChatsPage, [{
          key: "getChats",
          value: function getChats() {
            var _this = this;

            var param = {
              id: localStorage.getItem('uid')
            };
            this.dummy = Array(10);
            this.api.post('chats/getByGroup', param).then(function (data) {
              console.log(data);

              if (data && data.status === 200) {
                var info = [];
                data.data.forEach(function (element) {
                  info.push(element.from_id);
                  info.push(element.room_id);
                });

                var uniq = _toConsumableArray(new Set(info));

                uniq = uniq.filter(function (x) {
                  return x !== localStorage.getItem('uid');
                });
                console.log('uniq->>', uniq);
                var uid = {
                  id: uniq.join()
                };

                _this.api.post('users/getChatsNames', uid).then(function (uids) {
                  _this.dummy = [];

                  if (uids && uids.status === 200) {
                    _this.users = uids.data;
                  }
                }, function (error) {
                  console.log(error);
                  _this.users = [];
                  _this.dummy = [];

                  _this.util.errorToast(_this.util.translate('Something went wrong'));
                });
              } else {
                _this.dummy = [];
              }
            }, function (error) {
              console.log(error);

              _this.util.errorToast(_this.util.translate('Something went wrong'));
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "back",
          value: function back() {
            this.navCtrl.back();
          }
        }, {
          key: "onAdmin",
          value: function onAdmin() {
            var param = {
              queryParams: {
                id: 0,
                name: 'Support'
              }
            };
            this.router.navigate(['inbox'], param);
          }
        }, {
          key: "onChat",
          value: function onChat(item) {
            var param = {
              queryParams: {
                id: item.id,
                name: item.first_name + ' ' + item.last_name
              }
            };
            this.router.navigate(['inbox'], param);
          }
        }]);

        return ChatsPage;
      }();

      ChatsPage.ctorParameters = function () {
        return [{
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_7__["ApisService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }];
      };

      ChatsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-chats',
        template: _raw_loader_chats_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chats_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_7__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])], ChatsPage);
      /***/
    },

    /***/
    "is+8":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chats/chats.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function is8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{util.translate('Chats')}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onAdmin()\">\n        <ion-icon slot=\"start\" name=\"happy\"></ion-icon>\n        {{util.translate('Support')}}\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-item *ngFor=\"let item of dummy\">\n    <ion-avatar slot=\"start\">\n      <ion-skeleton-text></ion-skeleton-text>\n    </ion-avatar>\n    <ion-label>\n      <h3>\n        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n      </h3>\n      <p>\n        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n      </p>\n    </ion-label>\n  </ion-item>\n  <ion-item *ngFor=\"let item of users\" (click)=\"onChat(item)\" class=\"ion-activatable ripple-parent\">\n    <ion-avatar slot=\"start\">\n      <img [src]=\"api.mediaURL+item.cover\" onError=\"this.src='assets/imgs/user.png'\" />\n    </ion-avatar>\n    <ion-label>\n      <h3> {{item.first_name}} {{item.last_name}} </h3>\n      <p> {{item.email}} </p>\n    </ion-label>\n    <ion-ripple-effect></ion-ripple-effect>\n  </ion-item>\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-chats-chats-module-es5.js.map
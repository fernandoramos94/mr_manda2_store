(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reset-reset-module"], {
    /***/
    "1nHT":
    /*!*********************************************!*\
      !*** ./src/app/pages/reset/reset.module.ts ***!
      \*********************************************/

    /*! exports provided: ResetPageModule */

    /***/
    function nHT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPageModule", function () {
        return ResetPageModule;
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


      var _reset_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./reset-routing.module */
      "E6MJ");
      /* harmony import */


      var _reset_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./reset.page */
      "sQCc");
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
        Copyright and Good Faith Purchasers ?? 2020-present initappz.
      */


      var ResetPageModule = function ResetPageModule() {
        _classCallCheck(this, ResetPageModule);
      };

      ResetPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _reset_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResetPageRoutingModule"]],
        declarations: [_reset_page__WEBPACK_IMPORTED_MODULE_6__["ResetPage"]]
      })], ResetPageModule);
      /***/
    },

    /***/
    "E6MJ":
    /*!*****************************************************!*\
      !*** ./src/app/pages/reset/reset-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: ResetPageRoutingModule */

    /***/
    function E6MJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPageRoutingModule", function () {
        return ResetPageRoutingModule;
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


      var _reset_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reset.page */
      "sQCc");
      /*
        Authors : initappz (Rahul Jograna)
        Website : https://initappz.com/
        App Name : ionic 5 foodies app
        Created : 28-Feb-2021
        This App Template Source code is licensed as per the
        terms found in the Website https://initappz.com/license
        Copyright and Good Faith Purchasers ?? 2020-present initappz.
      */


      var routes = [{
        path: '',
        component: _reset_page__WEBPACK_IMPORTED_MODULE_3__["ResetPage"]
      }];

      var ResetPageRoutingModule = function ResetPageRoutingModule() {
        _classCallCheck(this, ResetPageRoutingModule);
      };

      ResetPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ResetPageRoutingModule);
      /***/
    },

    /***/
    "RD5S":
    /*!*********************************************!*\
      !*** ./src/app/pages/reset/reset.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function RD5S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers ?? 2020-present initappz.\n*/\n.main_content_div {\n  width: 100%;\n  padding: 30px;\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.main_content_div ion-icon {\n  color: var(--ion-color-primary);\n  font-size: 20px;\n  padding: 10px;\n}\n.main_content_div .iconDiv {\n  text-align: center;\n}\n.main_content_div .iconDiv .icon {\n  width: 60px;\n}\n.main_content_div .form_div {\n  padding: 25px;\n  position: relative;\n}\n.main_content_div .form_div .main_head {\n  display: block;\n  color: var(--ion-color-primary);\n  font-weight: 600;\n  font-size: 30px;\n  margin: 10px;\n}\n.main_content_div .form_div ion-label {\n  font-size: 12px;\n  color: white;\n}\n.main_content_div .form_div .forgot {\n  display: block;\n  text-align: center;\n  color: white;\n}\n.main_content_div .form_div ion-input {\n  border-radius: 20px;\n  margin-bottom: 15px;\n  --padding-start: 8px;\n  --padding-end: 10px;\n  border: 1px solid lightgray;\n}\n.main_content_div .form_div ion-button {\n  margin-top: 20px;\n  --border-radius: 20px;\n  --background: var(--ion-color-primary);\n  --color: white;\n}\n.main_content_div .form_div .tri {\n  width: 0;\n  height: 0;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 15px solid white;\n  position: absolute;\n  top: -15px;\n}\n.main_content_div .form_div .lbl {\n  margin-top: 20px;\n  color: white;\n  display: block;\n  text-align: center;\n}\n.main_content_div .form_div .signup_span {\n  color: white;\n  font-weight: 600;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Jlc2V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBRUo7QUFBSTtFQUNJLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFFUjtBQUFJO0VBRUksa0JBQUE7QUFDUjtBQUFRO0VBRUksV0FBQTtBQUNaO0FBR0k7RUFDSSxhQUFBO0VBRUEsa0JBQUE7QUFGUjtBQUdRO0VBQ0ksY0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQURaO0FBR1E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQURaO0FBSVE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBRlo7QUFJUTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFGWjtBQUtRO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNDQUFBO0VBQ0EsY0FBQTtBQUhaO0FBS1E7RUFDSSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUhaO0FBS1E7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFIWjtBQUtRO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUhaIiwiZmlsZSI6InJlc2V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZm9vZGllcyBhcHBcbiAgQ3JlYXRlZCA6IDI4LUZlYi0yMDIxXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLm1haW5fY29udGVudF9kaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNDUlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgICAuaWNvbkRpdiB7XG4gICAgICAgIC8vIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgLy8gaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZm9ybV9kaXYge1xuICAgICAgICBwYWRkaW5nOiAyNXB4O1xuXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLm1haW5faGVhZCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICB9XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9yZ290IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgLnRyaSB7XG4gICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDE1cHggc29saWQgd2hpdGU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IC0xNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5sYmwge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIC5zaWdudXBfc3BhbiB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */";
      /***/
    },

    /***/
    "cKjf":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reset/reset.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function cKjf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers ?? 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"util.back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{util.translate('Cambiar contrase??a')}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"main_content_div\">\n\n    <div class=\"iconDiv\">\n    </div>\n    <div class=\"form_div\" *ngIf=\"util.reset_pwd ==='0'\">\n      <ion-label class=\"main_head\"> {{util.translate('Cambiar contrase??a')}} </ion-label>\n      <div *ngIf=\"div_type === 1\">\n        <ion-input type=\"email\" [placeholder]=\"util.translate('Correo')\" [(ngModel)]=\"email\">\n          <ion-icon name=\"mail\" slot=\"icon-only\"></ion-icon>\n        </ion-input>\n\n        <ion-button expand=\"block\" [disabled]=\"loggedIn\" (click)=\"sendOTP()\">\n          <span *ngIf=\"!loggedIn\"> {{util.translate('restablecer')}} </span>\n          <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n        </ion-button>\n      </div>\n\n      <div *ngIf=\"div_type === 2\">\n        <ion-input type=\"number\" [placeholder]=\"util.translate('OTP')\" [(ngModel)]=\"otp\">\n          <ion-icon name=\"key\" slot=\"icon-only\"></ion-icon>\n        </ion-input>\n\n        <ion-button expand=\"block\" [disabled]=\"loggedIn\" (click)=\"verifyOTP()\">\n          <span *ngIf=\"!loggedIn\"> {{util.translate('Verify OTP')}} </span>\n          <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n        </ion-button>\n      </div>\n\n      <div *ngIf=\"div_type === 3\">\n        <ion-input type=\"password\" [placeholder]=\"util.translate('New Password')\" [(ngModel)]=\"password\">\n          <ion-icon name=\"key\" slot=\"icon-only\"></ion-icon>\n        </ion-input>\n        <ion-input type=\"password\" [placeholder]=\"util.translate('Confirm Password')\" [(ngModel)]=\"repass\">\n          <ion-icon name=\"key\" slot=\"icon-only\"></ion-icon>\n        </ion-input>\n\n        <ion-button expand=\"block\" [disabled]=\"loggedIn\" (click)=\"sendEmail()\">\n          <span *ngIf=\"!loggedIn\"> {{util.translate('Reset Password')}} </span>\n          <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n        </ion-button>\n      </div>\n    </div>\n\n    <div class=\"form_div\" *ngIf=\"util.reset_pwd === '1'\">\n      <ion-label class=\"main_head\"> {{util.translate('Reset Password')}} </ion-label>\n      <div *ngIf=\"div_type === 1\">\n        <ion-row>\n          <ion-col size=\"3\" (click)=\"openCountry()\">\n            <ion-input style=\"font-size: 12px;\" [(ngModel)]=\"cc\" disabled=\"true\" type=\"text\">\n            </ion-input>\n          </ion-col>\n          <ion-col size=\"9\">\n            <ion-input [(ngModel)]=\"phone\" type=\"number\" [placeholder]=\"util.translate('Mobile Number')\">\n            </ion-input>\n          </ion-col>\n        </ion-row>\n        <ion-button expand=\"block\" [disabled]=\"loggedIn\" (click)=\"sendOTPOnMobile()\">\n          <span *ngIf=\"!loggedIn\"> {{util.translate('Send OTP')}} </span>\n          <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n        </ion-button>\n      </div>\n\n      <div *ngIf=\"div_type === 3\">\n        <ion-input type=\"password\" [placeholder]=\"util.translate('New Password')\" [(ngModel)]=\"password\">\n          <ion-icon name=\"key\" slot=\"icon-only\"></ion-icon>\n        </ion-input>\n        <ion-input type=\"password\" [placeholder]=\"util.translate('Confirm Password')\" [(ngModel)]=\"repass\">\n          <ion-icon name=\"key\" slot=\"icon-only\"></ion-icon>\n        </ion-input>\n\n        <ion-button expand=\"block\" [disabled]=\"loggedIn\" (click)=\"resetPasswordWithPhone()\">\n          <span *ngIf=\"!loggedIn\"> {{util.translate('Reset Password')}} </span>\n          <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n        </ion-button>\n      </div>\n\n    </div>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "sQCc":
    /*!*******************************************!*\
      !*** ./src/app/pages/reset/reset.page.ts ***!
      \*******************************************/

    /*! exports provided: ResetPage */

    /***/
    function sQCc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ResetPage", function () {
        return ResetPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_reset_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./reset.page.html */
      "cKjf");
      /* harmony import */


      var _reset_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reset.page.scss */
      "RD5S");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/util.service */
      "2Rin");
      /* harmony import */


      var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/apis.service */
      "8RPc");
      /* harmony import */


      var _select_country_select_country_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../select-country/select-country.page */
      "hxji");
      /* harmony import */


      var _verify_verify_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../verify/verify.page */
      "TCp9");
      /*
        Authors : initappz (Rahul Jograna)
        Website : https://initappz.com/
        App Name : ionic 5 foodies app
        Created : 28-Feb-2021
        This App Template Source code is licensed as per the
        terms found in the Website https://initappz.com/license
        Copyright and Good Faith Purchasers ?? 2020-present initappz.
      */


      var ResetPage = /*#__PURE__*/function () {
        function ResetPage(api, util, navCtrl, menuController, modalController, alertController) {
          _classCallCheck(this, ResetPage);

          this.api = api;
          this.util = util;
          this.navCtrl = navCtrl;
          this.menuController = menuController;
          this.modalController = modalController;
          this.alertController = alertController;
          this.cc = '+91';
          this.ccCode = '+91';
          this.div_type = 1;
          this.sent = false;
          this.email = '';
          this.otp = '';
          this.password = '';
          this.repass = '';
          this.verified = false;
        }

        _createClass(ResetPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "sendOTP",
          value: function sendOTP() {
            var _this = this;

            console.log(this.email, ';sendOTPDriver');

            if (!this.email) {
              this.util.showToast(this.util.translate('email is required'), 'dark', 'bottom');
              return false;
            }

            var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

            if (!emailfilter.test(this.email)) {
              this.util.showToast(this.util.translate('Please enter valid email'), 'dark', 'bottom');
              return false;
            }

            this.loggedIn = true;
            var param = {
              email: this.email
            };
            this.api.post('users/sendOTP', param).then(function (data) {
              console.log(data);
              _this.loggedIn = false;

              if (data && data.status === 200) {
                _this.id = data.data.id;
                _this.loggedIn = false;
                _this.div_type = 2;
              } else {
                if (data && data.status === 500 && data.data && data.data.message) {
                  _this.util.errorToast(data.data.message);

                  return false;
                }

                _this.util.errorToast(_this.util.translate('Something went wrong'));

                return false;
              }
            }, function (error) {
              console.log(error);
              _this.loggedIn = false;

              _this.util.errorToast(_this.util.translate('Something went wrong'));
            });
          }
        }, {
          key: "verifyOTP",
          value: function verifyOTP() {
            var _this2 = this;

            // this.div_type = 3;
            if (!this.otp || this.otp === '') {
              this.util.showToast(this.util.translate('otp is required'), 'dark', 'bottom');
              return false;
            }

            this.loggedIn = true;
            var param = {
              id: this.id,
              otp: this.otp
            };
            this.api.post('users/verifyOTP', param).then(function (data) {
              console.log(data);
              _this2.loggedIn = false;

              if (data && data.status === 200) {
                _this2.loggedIn = false;
                _this2.div_type = 3;
              } else {
                if (data && data.status === 500 && data.data && data.data.message) {
                  _this2.util.errorToast(data.data.message);

                  return false;
                }

                _this2.util.errorToast(_this2.util.translate('Something went wrong'));

                return false;
              }
            }, function (error) {
              console.log(error);
              _this2.loggedIn = false;

              _this2.util.errorToast(_this2.util.translate('Something went wrong'));
            });
          }
        }, {
          key: "sendEmail",
          value: function sendEmail() {
            var _this3 = this;

            console.log('pwddd0<<<<<<', this.password);

            if (!this.password || !this.repass || this.password === '' || this.repass === '') {
              this.util.errorToast(this.util.translate('All Field are required'));
              return false;
            }

            var param = {
              email: this.email,
              pwd: this.password
            };
            this.loggedIn = true;
            this.api.post('users/update_password', param).then(function (data) {
              console.log(data);
              _this3.loggedIn = false;

              if (data && data.status === 200) {
                _this3.loggedIn = false;

                _this3.util.errorToast(_this3.util.translate('Password Updated'));

                _this3.back();
              } else {
                if (data && data.status === 500 && data.data && data.data.message) {
                  _this3.util.errorToast(data.data.message);

                  return false;
                }

                _this3.util.errorToast(_this3.util.translate('Something went wrong'));

                return false;
              }
            }, function (error) {
              console.log(error);
              _this3.loggedIn = false;

              _this3.util.errorToast(_this3.util.translate('Something went wrong'));
            });
          }
        }, {
          key: "resetPasswordWithPhone",
          value: function resetPasswordWithPhone() {
            var _this4 = this;

            console.log('pwddd0<<<<<<', this.password);

            if (!this.password || !this.repass || this.password === '' || this.repass === '') {
              this.util.errorToast(this.util.translate('All Field are required'));
              return false;
            }

            var param = {
              phone: this.phone,
              pwd: this.password
            };
            this.loggedIn = true;
            this.api.post('users/resetPasswordWithPhone', param).then(function (data) {
              console.log(data);
              _this4.loggedIn = false;

              if (data && data.status === 200) {
                _this4.loggedIn = false;

                _this4.util.errorToast(_this4.util.translate('Password Updated'));

                _this4.back();
              } else {
                if (data && data.status === 500 && data.data && data.data.message) {
                  _this4.util.errorToast(data.data.message);

                  return false;
                }

                _this4.util.errorToast(_this4.util.translate('Something went wrong'));

                return false;
              }
            }, function (error) {
              console.log(error);
              _this4.loggedIn = false;

              _this4.util.errorToast(_this4.util.translate('Something went wrong'));
            });
          }
        }, {
          key: "back",
          value: function back() {
            this.navCtrl.back();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.menuController.enable(false);
          }
        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {
            this.menuController.enable(true);
          }
        }, {
          key: "openCountry",
          value: function openCountry() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this5 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log('open ccode');
                      _context.next = 3;
                      return this.modalController.create({
                        component: _select_country_select_country_page__WEBPACK_IMPORTED_MODULE_7__["SelectCountryPage"],
                        backdropDismiss: false,
                        showBackdrop: true
                      });

                    case 3:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (data) {
                        console.log(data);

                        if (data && data.role === 'selected') {
                          console.log('ok');
                          _this5.cc = '+' + data.data;
                          _this5.ccCode = '+' + data.data;
                        }
                      });
                      _context.next = 7;
                      return modal.present();

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "sendOTPOnMobile",
          value: function sendOTPOnMobile() {
            var _this6 = this;

            var param = {
              phone: this.phone
            };
            this.loggedIn = true;
            this.api.post('users/validatePhoneForReset', param).then(function (data) {
              _this6.loggedIn = false;
              console.log('data', data);

              if (data && data.status === 200) {
                console.log('all done...');

                _this6.presentAlertConfirm();
              } else if (data && data.status === 500) {
                _this6.util.errorToast(data.data.message);
              } else {
                _this6.util.errorToast(_this6.util.translate('Something went wrong'));
              }
            }, function (error) {
              console.log(error);
              _this6.loggedIn = false;

              _this6.util.errorToast(_this6.util.translate('Something went wrong'));
            })["catch"](function (error) {
              console.log(error);
              _this6.loggedIn = false;

              _this6.util.errorToast(_this6.util.translate('Something went wrong'));
            });
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this7 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        header: 'Confirm Informations',
                        message: 'We will send verification code to your mobile number  ' + this.ccCode + this.phone,
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler() {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Send',
                          handler: function handler() {
                            console.log('Confirm Okay');

                            _this7.openModal();
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
          key: "openModal",
          value: function openModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this8 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.create({
                        component: _verify_verify_page__WEBPACK_IMPORTED_MODULE_8__["VerifyPage"],
                        componentProps: {
                          code: this.ccCode,
                          phone: this.phone
                        }
                      });

                    case 2:
                      modal = _context3.sent;
                      modal.onDidDismiss().then(function (data) {
                        console.log(data);

                        if (data && data.role === 'ok') {
                          console.log('verification done...');
                          _this8.div_type = 3;
                        }
                      });
                      modal.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return ResetPage;
      }();

      ResetPage.ctorParameters = function () {
        return [{
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      ResetPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reset',
        template: _raw_loader_reset_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reset_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])], ResetPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-reset-reset-module-es5.js.map
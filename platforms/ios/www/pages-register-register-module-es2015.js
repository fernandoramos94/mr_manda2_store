(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"],{

/***/ "+mX6":
/*!***********************************************************!*\
  !*** ./src/app/pages/register/register-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "gnlj");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/



const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "/al4":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-content class=\"ion-padding\">\n  <ion-slides mode=\"md\" [options]=\"slideOpts\">\n    <ion-slide>\n      <ion-button (click)=\"back()\" fill=\"clear\" class=\"backBtn\">\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\" color=\"primary\"></ion-icon>\n      </ion-button>\n      <div class=\"emailForm\">\n        <h2 class=\"ion-text-center\">{{util.translate('Sign Up')}}</h2>\n        <p class=\"subtitle ion-text-center\">{{util.translate('Enter your profile detail to')}}\n          <br>{{util.translate('access your account')}} </p>\n        <ion-item lines=\"none\">\n          <ion-input type=\"email\" [(ngModel)]=\"user.email\" [placeholder]=\"util.translate('Email')\"></ion-input>\n        </ion-item>\n        <ion-button class=\"btn_class\" color=\"primary\" (click)=\"emailValidation()\" expand=\"block\" [disabled]=\"isLogin\">\n\n          <span *ngIf=\"!isLogin\"> {{util.translate('Next')}}</span>\n          <ion-spinner name=\"circles\" *ngIf=\"isLogin\"></ion-spinner>\n        </ion-button>\n      </div>\n    </ion-slide>\n\n    <!-- <ion-slide>\n      <ion-button (click)=\"back()\" fill=\"clear\" class=\"backBtn\">\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\" color=\"primary\"></ion-icon>\n      </ion-button>\n      <div class=\"emailForm\">\n        <p class=\"subtitle ion-text-center\">Create Strong Password for your account </p>\n        <ion-item lines=\"none\">\n          <ion-input type=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Password\"></ion-input>\n        </ion-item>\n        <ion-button class=\"btn_class\" color=\"primary\" (click)=\"password()\" expand=\"block\">\n          Next\n        </ion-button>\n      </div>\n    </ion-slide> -->\n\n    <ion-slide>\n      <ion-button (click)=\"prev()\" fill=\"clear\" class=\"backBtn\">\n        <ion-icon slot=\"start\" name=\"arrow-back-outline\" color=\"primary\"></ion-icon>\n      </ion-button>\n      <div class=\"emailForm\">\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" [(ngModel)]=\"user.first_name\" [placeholder]=\"util.translate('First Name')\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-input type=\"text\" [(ngModel)]=\"user.last_name\" [placeholder]=\"util.translate('Last Name')\"></ion-input>\n        </ion-item>\n        <ion-item lines=\"none\">\n          <ion-input type=\"number\" [(ngModel)]=\"user.phone\" [placeholder]=\"util.translate('Phone Number')\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input type=\"password\" [(ngModel)]=\"user.password\" [placeholder]=\"util.translate('Password')\"></ion-input>\n        </ion-item>\n        <ion-button class=\"btn_class\" color=\"primary\" (click)=\"submit()\" expand=\"block\" [disabled]=\"isLogin\">\n          <span *ngIf=\"!isLogin\"> {{util.translate('Submit')}}</span>\n          <ion-spinner name=\"circles\" *ngIf=\"isLogin\"></ion-spinner>\n        </ion-button>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>");

/***/ }),

/***/ "fQjJ":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-slides {\n  height: 90vh;\n}\n.backBtn {\n  position: absolute;\n  top: 20px;\n  left: 0;\n}\nh2 {\n  color: var(--ion-color-primary) !important;\n}\np {\n  color: var(--ion-color-primary) !important;\n}\nion-item {\n  --ion-background-color: #f3f3f3;\n  border-radius: 5px !important;\n  margin-top: 10px;\n}\n.btn_class {\n  color: var(--ion-color-primary);\n  height: 50px;\n  margin-top: 20px;\n}\n.emailForm {\n  text-align: center;\n  width: 100%;\n}\n.emailForm .login-logo {\n  text-align: center;\n  margin: auto;\n  right: 0px;\n  left: 0px;\n  margin-top: 30%;\n  margin-bottom: 20px;\n}\n.emailForm .login-logo .logo_icon {\n  width: 110px !important;\n}\n.emailForm .back_img {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 95% !important;\n  height: 25vh;\n  border: 1px solid var(--ion-color-primary);\n  border-radius: 5px;\n}\n.emailForm .back_img .gender {\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  width: 25px !important;\n  height: 25px;\n  position: absolute;\n  right: 20px;\n  top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNJLFlBQUE7QUFFSjtBQUFBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQUdKO0FBREE7RUFDSSwwQ0FBQTtBQUlKO0FBRkE7RUFDSSwwQ0FBQTtBQUtKO0FBSEE7RUFDSSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7QUFNSjtBQUpBO0VBQ0ksK0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFPSjtBQUxBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0FBUUo7QUFQSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBU1I7QUFSUTtFQUNJLHVCQUFBO0FBVVo7QUFQSTtFQUNJLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7QUFTUjtBQVBRO0VBQ0ksMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQVNaIiwiZmlsZSI6InJlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZm9vZGllcyBhcHBcbiAgQ3JlYXRlZCA6IDI4LUZlYi0yMDIxXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuaW9uLXNsaWRlcyB7XG4gICAgaGVpZ2h0OiA5MHZoO1xufVxuLmJhY2tCdG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgbGVmdDogMDtcbn1cbmgyIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG59XG5wIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG59XG5pb24taXRlbSB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmJ0bl9jbGFzcyB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5lbWFpbEZvcm0ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAubG9naW4tbG9nbyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICByaWdodDogMHB4O1xuICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgLmxvZ29faWNvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTEwcHggIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYmFja19pbWcge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDI1dmg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAvLyBib3gtc2hhZG93OiA2cHggNnB4IDIwcHggMHB4IHdoaXRlO1xuICAgICAgICAuZ2VuZGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICB3aWR0aDogMjVweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "fhSy":
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "+mX6");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "gnlj");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "gnlj":
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.page.html */ "/al4");
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss */ "fQjJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/util.service */ "2Rin");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/apis.service */ "8RPc");



/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let RegisterPage = class RegisterPage {
    constructor(location, util, api, navCtrl) {
        this.location = location;
        this.util = util;
        this.api = api;
        this.navCtrl = navCtrl;
        this.user = {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            gender: 'male',
            phone: '',
            address: '',
            avatar: ''
        };
        this.slideOpts = {
            slidesPerView: 1,
            allowTouchMove: false
        };
        this.submitted = false;
        this.isLogin = false;
    }
    ngOnInit() {
    }
    goNext() {
        this.slides.slideNext(500).then(d => console.log(d));
    }
    emailValidation() {
        console.log('user', this.user);
        const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
        if (this.user.email === '' || !this.user.email) {
            this.util.showToast(this.util.translate('Please enter email'), 'danger', 'bottom');
            return false;
        }
        if (!(emailfilter.test(this.user.email))) {
            this.util.showToast(this.util.translate('Please enter valid email'), 'danger', 'bottom');
            return false;
        }
        this.isLogin = true;
        // this.api.checkEmail(this.user.email).then((datas: any) => {
        //   this.isLogin = false;
        //   if (!datas.length) {
        //     this.goNext();
        //   } else {
        //     this.util.hide();
        //     this.util.showErrorAlert(this.util.translate('this email id is already register, please use another to login'));
        //     return false;
        //   }
        // }, error => {
        //   this.isLogin = false;
        //   this.util.hide();
        //   this.util.errorToast(this.util.translate('Something went wrong'));
        // }).catch((error) => {
        //   this.isLogin = false;
        //   this.util.hide();
        //   this.util.errorToast(this.util.translate('Something went wrong'));
        // });
    }
    prev() {
        this.slides.slidePrev(1000).then(d => console.log(d));
    }
    back() {
        this.location.back();
    }
    submit() {
        this.isLogin = true;
        // this.api.register(this.user.email, this.user.password, this.user.first_name, this.user.last_name).then((data) => {
        //   console.log(data);
        //   this.isLogin = false;
        //   if (data && data.uid) {
        //     localStorage.setItem('uid', data.uid);
        this.navCtrl.navigateRoot(['/']);
        //   }
        // }).catch(error => {
        //   console.log(error);
        //   this.isLogin = false;
        //   this.util.showToast(`${error}`, 'danger', 'bottom');
        // });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_7__["ApisService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
RegisterPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"], { static: false },] }]
};
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_7__["ApisService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=pages-register-register-module-es2015.js.map
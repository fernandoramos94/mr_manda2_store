(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-venue-profile-venue-profile-module"],{

/***/ "+458":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/venue-profile/venue-profile.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"util.back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{util.translate('Perfil del comercio')}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"mainContent\">\n    <p class=\"lbl\">{{util.translate('Nombre del comercio')}}</p>\n    <ion-input class=\"inputText\" [(ngModel)]=\"name\" type=\"text\" placeholder=\"Enter your restaurant name\"></ion-input>\n    <!-- <p class=\"lbl\">{{util.translate('Restaurant Locations')}}</p>\n    <ion-textarea class=\"inputText\" [(ngModel)]=\"address\" rows=\"5\" placeholder=\"Enter your restaurant address\">\n    </ion-textarea> -->\n\n    <p class=\"lbl\">{{util.translate('Precio minimo')}} {{util.currecny}}</p>\n    <ion-input class=\"inputText\" [(ngModel)]=\"dishPrice\" type=\"number\" [placeholder]=\"util.currecny\"></ion-input>\n\n\n    <p class=\"lbl\">{{util.translate('Telefono')}}</p>\n    <ion-input class=\"inputText\" [(ngModel)]=\"phone\" type=\"number\" placeholder=\"Phone Number\"></ion-input>\n\n    <!-- <p class=\"lbl\">{{util.translate('Opening Time')}}</p>\n    <ion-item lines=\"none\" class=\"ion-no-padding\">\n      <ion-datetime [(ngModel)]=\"openTime\" display-format=\"hh:mm A\" placeholder=\"Selecte time\"></ion-datetime>\n    </ion-item> -->\n\n    <!-- <p class=\"lbl\">{{util.translate('Closing Time')}}</p>\n    <ion-item lines=\"none\" class=\"ion-no-padding\">\n      <ion-datetime [(ngModel)]=\"closeTime\" display-format=\"hh:mm A\" placeholder=\"Selecte time\"></ion-datetime>\n    </ion-item> -->\n\n\n    <p class=\"lbl\">{{util.translate('Tiempo estimado de entrega')}}</p>\n    <ion-input class=\"inputText\" [(ngModel)]=\"time\" type=\"number\" placeholder=\"\"></ion-input>\n\n    <p class=\"lbl\">{{util.translate('Descripcion del comercio')}}</p>\n    <ion-textarea class=\"inputText\" [(ngModel)]=\"descritions\" rows=\"5\" placeholder=\"\">\n    </ion-textarea>\n    <!-- <ion-item lines=\"none\" style=\"margin-top: 10px;\">\n      <ion-label>{{util.translate('Select Cuisine')}}</ion-label>\n      <ion-select [(ngModel)]=\"cusine\" multiple=\"true\">\n        <ion-select-option [value]=\"item\" *ngFor=\"let item of util.cusine\">{{item}}</ion-select-option>\n      </ion-select>\n    </ion-item> -->\n\n    <!-- <ion-item lines=\"none\" style=\"margin-top: 10px;\">\n      <ion-label>{{util.translate('Is Open')}}</ion-label>\n      <ion-select [(ngModel)]=\"isClosed\" mode=\"ios\">\n        <ion-select-option value='0'>{{util.translate('Closed')}}</ion-select-option>\n        <ion-select-option value='1'>{{util.translate('Open')}}</ion-select-option>\n      </ion-select>\n    </ion-item> -->\n\n    <p class=\"lbl\">{{util.translate('Portada')}}</p>\n    <div class=\"coverPlaceholder\" (click)=\"cover()\" *ngIf=\"!coverImage || coverImage ==''\">\n      <ion-icon name=\"cloud-upload-outline\" color=\"primary\"></ion-icon>\n      <p>{{util.translate('Upload your')}} <br> {{util.translate('cover image here')}}</p>\n    </div>\n    <div class=\"coverReal\" (click)=\"cover()\"\n      [ngStyle]=\"{'background-image':'url('+api.mediaURL+coverImage+'),url(assets/placeholder.jpg)'}\"\n      *ngIf=\"coverImage && coverImage !=''\">\n    </div>\n    <!-- <p class=\"lbl\">{{util.translate('Upload Gallery Images')}}</p>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n          <div class=\"galleryPlaceholder\" (click)=\"others('1')\" *ngIf=\"!image1 || image1 ==''\">\n            <ion-icon name=\"cloud-upload-outline\" color=\"primary\"></ion-icon>\n            <p>{{util.translate('Image')}} 1</p>\n          </div>\n          <div class=\"galleryReal\" (click)=\"others('1')\"\n            [ngStyle]=\"{'background-image':'url('+api.mediaURL+image1+'),url(assets/placeholder.jpg)'}\"\n            *ngIf=\"image1 && image1 !=''\">\n          </div>\n        </ion-col>\n        <ion-col size=\"4\">\n          <div class=\"galleryPlaceholder\" (click)=\"others('2')\" *ngIf=\"!image2 || image2 ==''\">\n            <ion-icon name=\"cloud-upload-outline\" color=\"primary\"></ion-icon>\n            <p>{{util.translate('Image')}} 2</p>\n          </div>\n          <div class=\"galleryReal\" (click)=\"others('2')\"\n            [ngStyle]=\"{'background-image':'url('+api.mediaURL+image2+'),url(assets/placeholder.jpg)'}\"\n            *ngIf=\"image2 && image2 !=''\">\n          </div>\n        </ion-col>\n        <ion-col size=\"4\">\n          <div class=\"galleryPlaceholder\" (click)=\"others('3')\" *ngIf=\"!image3 || image3 ==''\">\n            <ion-icon name=\"cloud-upload-outline\" color=\"primary\"></ion-icon>\n            <p>{{util.translate('Image')}} 3</p>\n          </div>\n          <div class=\"galleryReal\" (click)=\"others('3')\"\n            [ngStyle]=\"{'background-image':'url('+api.mediaURL+image3+'),url(assets/placeholder.jpg)'}\"\n            *ngIf=\"image3 && image3 !=''\">\n          </div>\n        </ion-col>\n        <ion-col size=\"4\">\n          <div class=\"galleryPlaceholder\" (click)=\"others('4')\" *ngIf=\"!image4 || image4 ==''\">\n            <ion-icon name=\"cloud-upload-outline\" color=\"primary\"></ion-icon>\n            <p>{{util.translate('Image')}} 4</p>\n          </div>\n          <div class=\"galleryReal\" (click)=\"others('4')\"\n            [ngStyle]=\"{'background-image':'url('+api.mediaURL+image4+'),url(assets/placeholder.jpg)'}\"\n            *ngIf=\"image4 && image4 !=''\">\n          </div>\n        </ion-col>\n        <ion-col size=\"4\">\n          <div class=\"galleryPlaceholder\" (click)=\"others('5')\" *ngIf=\"!image5 || image5 ==''\">\n            <ion-icon name=\"cloud-upload-outline\" color=\"primary\"></ion-icon>\n            <p>{{util.translate('Image')}} 5</p>\n          </div>\n          <div class=\"galleryReal\" (click)=\"others('5')\"\n            [ngStyle]=\"{'background-image':'url('+api.mediaURL+image5+'),url(assets/placeholder.jpg)'}\"\n            *ngIf=\"image5 && image5 !=''\">\n          </div>\n        </ion-col>\n        <ion-col size=\"4\">\n          <div class=\"galleryPlaceholder\" (click)=\"others('6')\" *ngIf=\"!image6 || image6 ==''\">\n            <ion-icon name=\"cloud-upload-outline\" color=\"primary\"></ion-icon>\n            <p>{{util.translate('Image')}} 6</p>\n          </div>\n          <div class=\"galleryReal\" (click)=\"others('6')\"\n            [ngStyle]=\"{'background-image':'url('+api.mediaURL+image6+'),url(assets/placeholder.jpg)'}\"\n            *ngIf=\"image6 && image6 !=''\">\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid> -->\n    <ion-button (click)=\"submit()\" expand=\"block\">\n      {{util.translate('Actualizar')}}\n    </ion-button>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "39nY":
/*!*********************************************************************!*\
  !*** ./src/app/pages/venue-profile/venue-profile-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: VenueProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenueProfilePageRoutingModule", function() { return VenueProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _venue_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./venue-profile.page */ "qAyN");

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
        component: _venue_profile_page__WEBPACK_IMPORTED_MODULE_3__["VenueProfilePage"]
    }
];
let VenueProfilePageRoutingModule = class VenueProfilePageRoutingModule {
};
VenueProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VenueProfilePageRoutingModule);



/***/ }),

/***/ "DCF2":
/*!*************************************************************!*\
  !*** ./src/app/pages/venue-profile/venue-profile.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-item {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n}\n.mainContent .lbl {\n  color: var(--ion-color-dark);\n  margin: 10px 0px !important;\n  font-weight: bold;\n}\n.mainContent .inputText {\n  border: 0.5px solid lightgray;\n  border-radius: 5px;\n  padding: 0px 10px !important;\n}\n.mainContent .coverPlaceholder {\n  text-align: center;\n  padding: 60px;\n  border: 1px solid lightgray;\n  border-radius: 10px;\n}\n.mainContent .galleryPlaceholder {\n  text-align: center;\n  padding: 10px;\n  border: 1px solid lightgray;\n  border-radius: 10px;\n}\n.mainContent .coverReal {\n  width: 100%;\n  height: 150px;\n  border-radius: 5px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.mainContent .galleryReal {\n  width: 100%;\n  height: 90px;\n  border-radius: 5px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.mainContent ion-button {\n  --border-radius: 5px;\n  font-weight: 600;\n  margin-bottom: 10px;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ZlbnVlLXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtBQUVKO0FBQ0k7RUFDSSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUFFUjtBQUFJO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FBRVI7QUFBSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFFUjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQUVSO0FBQUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBRVI7QUFBSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFFUjtBQUNJO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDUiIsImZpbGUiOiJ2ZW51ZS1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZm9vZGllcyBhcHBcbiAgQ3JlYXRlZCA6IDI4LUZlYi0yMDIxXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuaW9uLWl0ZW0ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ubWFpbkNvbnRlbnQge1xuICAgIC5sYmwge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICBtYXJnaW46IDEwcHggMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICAuaW5wdXRUZXh0IHtcbiAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmNvdmVyUGxhY2Vob2xkZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDYwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gICAgLmdhbGxlcnlQbGFjZWhvbGRlciB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiAgICAuY292ZXJSZWFsIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIH1cbiAgICAuZ2FsbGVyeVJlYWwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA5MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICB9XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "c+Z3":
/*!*************************************************************!*\
  !*** ./src/app/pages/venue-profile/venue-profile.module.ts ***!
  \*************************************************************/
/*! exports provided: VenueProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenueProfilePageModule", function() { return VenueProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _venue_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./venue-profile-routing.module */ "39nY");
/* harmony import */ var _venue_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./venue-profile.page */ "qAyN");
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







let VenueProfilePageModule = class VenueProfilePageModule {
};
VenueProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _venue_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["VenueProfilePageRoutingModule"]
        ],
        declarations: [_venue_profile_page__WEBPACK_IMPORTED_MODULE_6__["VenueProfilePage"]]
    })
], VenueProfilePageModule);



/***/ }),

/***/ "qAyN":
/*!***********************************************************!*\
  !*** ./src/app/pages/venue-profile/venue-profile.page.ts ***!
  \***********************************************************/
/*! exports provided: VenueProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VenueProfilePage", function() { return VenueProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_venue_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./venue-profile.page.html */ "+458");
/* harmony import */ var _venue_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./venue-profile.page.scss */ "DCF2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "a/9d");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/apis.service */ "8RPc");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/util.service */ "2Rin");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);



/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/








let VenueProfilePage = class VenueProfilePage {
    constructor(actionSheetController, camera, util, api, navCtrl, router) {
        this.actionSheetController = actionSheetController;
        this.camera = camera;
        this.util = util;
        this.api = api;
        this.navCtrl = navCtrl;
        this.router = router;
        this.image = '';
        this.name = '';
        this.address = '';
        this.descritions = '';
        this.haveData = false;
        this.dishPrice = '';
        this.time = '';
        this.phone = '';
        this.status = '';
        const param = {
            id: localStorage.getItem('uid')
        };
        this.api.post('stores/getByUid', param).then((data) => {
            console.log('*******************', data);
            if (data && data.status === 200 && data.data && data.data.length) {
                const info = data.data[0];
                this.name = info.name;
                this.address = info.address;
                this.dishPrice = info.dish;
                this.phone = info.mobile;
                this.openTime = info.open_time;
                this.closeTime = info.close_time;
                this.latitude = info.lat;
                this.longitude = info.lng;
                this.time = info.time;
                this.descritions = info.descriptions;
                this.coverImage = info.cover;
                this.id = info.id;
                if (info.cusine && info.cusine !== '') {
                    this.cusine = JSON.parse(info.cusine);
                }
                else {
                    this.cusine = [];
                }
                this.isClosed = info.isClosed;
                if (info.images) {
                    const images = JSON.parse(info.images);
                    console.log('images======>>>', images);
                    if (images[0]) {
                        this.image1 = images[0];
                    }
                    if (images[1]) {
                        this.image2 = images[1];
                    }
                    if (images[2]) {
                        this.image3 = images[2];
                    }
                    if (images[3]) {
                        this.image4 = images[3];
                    }
                    if (images[4]) {
                        this.image5 = images[4];
                    }
                    if (images[5]) {
                        this.image6 = images[5];
                    }
                }
            }
            else {
                localStorage.clear();
                this.navCtrl.navigateRoot(['/login']);
            }
        }, error => {
            console.log(error);
        });
    }
    ngOnInit() {
    }
    updateSearch() {
    }
    updateVenue() {
        const images = [
            this.image1 ? this.image1 : '',
            this.image2 ? this.image2 : '',
            this.image3 ? this.image3 : '',
            this.image4 ? this.image4 : '',
            this.image5 ? this.image5 : '',
            this.image6 ? this.image6 : ''
        ];
        this.openTime = moment__WEBPACK_IMPORTED_MODULE_9__(this.openTime).format('HH:mm');
        this.closeTime = moment__WEBPACK_IMPORTED_MODULE_9__(this.closeTime).format('HH:mm');
        if (this.openTime === 'Invalid date') {
            this.openTime = '10:00';
        }
        if (this.closeTime === 'Invalid date') {
            this.closeTime = '22:00';
        }
        const geocoder = new google.maps.Geocoder;
        geocoder.geocode({ address: this.address }, (results, status) => {
            console.log(results, status);
            if (status === 'OK' && results && results.length) {
                this.latitude = results[0].geometry.location.lat();
                this.longitude = results[0].geometry.location.lng();
                console.log('----->', this.latitude, this.longitude);
                const param = {
                    name: this.name,
                    address: this.address,
                    descriptions: this.descritions,
                    lat: this.latitude,
                    lng: this.longitude,
                    cover: this.coverImage,
                    open_time: this.openTime,
                    close_time: this.closeTime,
                    id: this.id,
                    dish: this.dishPrice,
                    time: this.time,
                    cusine: JSON.stringify(this.cusine),
                    images: JSON.stringify(images),
                    mobile: this.phone,
                    isClosed: this.isClosed
                };
                this.util.show();
                console.log('param', param);
                this.api.post('stores/editList', param).then((datas) => {
                    console.log(datas);
                    this.util.hide();
                    if (datas && datas.status === 200) {
                        this.navCtrl.back();
                    }
                    else {
                        this.util.hide();
                        this.util.errorToast(this.util.translate('Something went wrong'));
                    }
                }, error => {
                    this.util.hide();
                    console.log(error);
                    this.util.errorToast(this.util.translate('Something went wrong'));
                }).catch(error => {
                    this.util.hide();
                    console.log(error);
                    this.util.errorToast(this.util.translate('Something went wrong'));
                });
            }
            else {
                this.util.errorToast(this.util.translate('Something went wrong'));
                return false;
            }
        });
    }
    submit() {
        console.log('cusine', this.cusine);
        if (this.name === '' || this.address === '' || this.descritions === '' || this.dishPrice === '' || this.time === '' ||
            !this.cusine || !this.cusine.length || this.openTime === '' || this.closeTime === '' || !this.openTime ||
            !this.closeTime || this.phone === '' || !this.phone) {
            this.util.errorToast(this.util.translate('All Fields are required'));
            return false;
        }
        if (!this.coverImage || this.coverImage === '') {
            this.util.errorToast(this.util.translate('Please add your cover image'));
            return false;
        }
        console.log('update');
        this.updateVenue();
    }
    cover() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: this.util.translate('Choose from'),
                buttons: [{
                        text: this.util.translate('Camera'),
                        icon: 'camera',
                        handler: () => {
                            console.log('Delete clicked');
                            this.opemCamera('camera');
                        }
                    }, {
                        text: this.util.translate('Gallery'),
                        icon: 'image',
                        handler: () => {
                            console.log('Share clicked');
                            this.opemCamera('gallery');
                        }
                    }, {
                        text: this.util.translate('Cancel'),
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    others(num) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('num', num);
            const actionSheet = yield this.actionSheetController.create({
                header: this.util.translate('Choose from'),
                buttons: [{
                        text: this.util.translate('Camera'),
                        icon: 'camera',
                        handler: () => {
                            console.log('Delete clicked');
                            this.opemCamera('camera', num);
                        }
                    }, {
                        text: this.util.translate('Gallery'),
                        icon: 'image',
                        handler: () => {
                            console.log('Share clicked');
                            this.opemCamera('gallery', num);
                        }
                    }, {
                        text: this.util.translate('Cancel'),
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    opemCamera(type, num) {
        const options = {
            quality: 100,
            targetHeight: 700,
            targetWidth: 700,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: type === 'camera' ? 1 : 0
        };
        console.log('open');
        this.camera.getPicture(options).then((url) => {
            this.util.show();
            const alpha = {
                img: url,
                type: 'jpg'
            };
            console.log('parma==>', alpha);
            this.api.nativePost('users/upload_file', alpha).then((data) => {
                this.util.hide();
                console.log('data', JSON.parse(data.data));
                const info = JSON.parse(data.data);
                console.log('numm-0-->>', num);
                if (!num) {
                    console.log('cover!!!');
                    this.coverImage = info.data;
                }
                else {
                    console.log('num');
                    if (num === 1 || num === '1') {
                        this.image1 = info.data;
                    }
                    if (num === 2 || num === '2') {
                        this.image2 = info.data;
                    }
                    if (num === 3 || num === '3') {
                        this.image3 = info.data;
                    }
                    if (num === 4 || num === '4') {
                        this.image4 = info.data;
                    }
                    if (num === 5 || num === '5') {
                        this.image5 = info.data;
                    }
                    if (num === 6 || num === '6') {
                        this.image6 = info.data;
                    }
                }
            }, error => {
                console.log(error);
                this.util.hide();
                this.util.errorToast(this.util.translate('Something went wrong'));
            }).catch(error => {
                console.log(error);
                this.util.hide();
                this.util.errorToast(this.util.translate('Something went wrong'));
            });
        }, (err) => {
            this.util.hide();
            console.log(err);
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
    makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
};
VenueProfilePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }
];
VenueProfilePage.propDecorators = {
    searchbar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['searchbar', { read: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSearchbar"], static: true },] }]
};
VenueProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-venue-profile',
        template: _raw_loader_venue_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_venue_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
], VenueProfilePage);



/***/ })

}]);
//# sourceMappingURL=pages-venue-profile-venue-profile-module-es2015.js.map
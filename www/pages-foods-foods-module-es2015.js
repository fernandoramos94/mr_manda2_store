(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-foods-foods-module"],{

/***/ "FygT":
/*!*******************************************!*\
  !*** ./src/app/pages/foods/foods.page.ts ***!
  \*******************************************/
/*! exports provided: FoodsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodsPage", function() { return FoodsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_foods_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./foods.page.html */ "G3FC");
/* harmony import */ var _foods_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foods.page.scss */ "g5+t");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/apis.service */ "8RPc");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/util.service */ "2Rin");



/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 foodies app
  Created : 28-Feb-2021
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/




let FoodsPage = class FoodsPage {
    constructor(router, api, util) {
        this.router = router;
        this.api = api;
        this.util = util;
        this.foods = [];
        this.dummy = Array(10);
        this.categories = [];
    }
    ngOnInit() {
    }
    category() {
        const param = {
            id: localStorage.getItem('uid')
        };
        this.api.post('categories/getByRestId', param).then((data) => {
            if (data && data.status === 200 && data.data.length) {
                this.categories = data.data;
                this.caetId = this.categories[0].id;
                this.getFoodByCid();
            }
            else {
                this.dummy = [];
            }
        }, error => {
            console.log(error);
            this.dummy = [];
            this.util.errorToast(this.util.translate('Something went wrong'));
        }).catch(error => {
            console.log(error);
            this.dummy = [];
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
    ionViewWillEnter() {
        this.category();
    }
    segmentChanged() {
        this.foods = [];
        this.dummy = Array(10);
        this.getFoodByCid();
    }
    getFoods() {
        const param = {
            id: localStorage.getItem('uid'),
            limit: 5000
        };
        this.api.post('products/getByStoreId', param).then((data) => {
            this.dummy = [];
            console.log(data);
            console.log(data && data.status === 200 && data.data.length > 0);
            if (data && data.status === 200 && data.data.length > 0) {
                this.foods = data.data;
            }
        }, error => {
            console.log(error);
            this.dummy = [];
            this.util.errorToast(this.util.translate('Something went wrong'));
        }).catch(error => {
            console.log(error);
            this.dummy = [];
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
    getFoodByCid() {
        const param = {
            id: localStorage.getItem('uid'),
            cid: this.caetId
        };
        this.api.post('products/getFoodByCid', param).then((data) => {
            this.dummy = [];
            console.log(data);
            console.log(data && data.status === 200 && data.data.length > 0);
            if (data && data.status === 200 && data.data.length > 0) {
                this.foods = data.data;
            }
        }, error => {
            console.log(error);
            this.dummy = [];
            this.util.errorToast(this.util.translate('Something went wrong'));
        }).catch(error => {
            console.log(error);
            this.dummy = [];
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
    addnew() {
        this.router.navigate(['/add-new-foods']);
    }
    foodsInfo(item) {
        console.log(item);
        const navData = {
            queryParams: {
                id: item.id
            }
        };
        this.router.navigate(['add-new-foods'], navData);
    }
    search(event) {
        console.log(event);
        const param = {
            search: event,
            id: localStorage.getItem('uid')
        };
        this.foods = [];
        this.dummy = Array(10);
        this.api.post('products/getSearchItems', param).then((data) => {
            console.log(data);
            this.dummy = [];
            if (data && data.status === 200 && data.data.length > 0) {
                this.foods = data.data;
            }
        }, error => {
            console.log(error);
            this.dummy = [];
            this.util.errorToast(this.util.translate('Something went wrong'));
        }).catch(error => {
            console.log(error);
            this.dummy = [];
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
    onSearchChange(event) {
        if (event.detail.value) {
        }
        else {
            this.category();
        }
    }
};
FoodsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] }
];
FoodsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-foods',
        template: _raw_loader_foods_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_foods_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]])
], FoodsPage);



/***/ }),

/***/ "G3FC":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/foods/foods.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"util.back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{util.translate('Productos')}}</ion-title>\n    <ion-button (click)=\"addnew()\" slot=\"end\" fill=\"clear\" color=\"light\">\n      <ion-icon slot=\"icon-only\" name=\"add\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"mainContent\">\n    <ion-searchbar [placeholder]=\"util.translate('Buscar productos')\" [(ngModel)]=\"terms\" inputmode=\"text\" type=\"search\"\n      (keyup.enter)=\"search(q.value)\" (ionChange)=\"onSearchChange($event)\" #q [debounce]=\"250\" mode=\"ios\"\n      showCancelButton=\"never\">\n    </ion-searchbar>\n    <h2 class=\"ion-text-center\" *ngIf=\"!dummy?.length && !categories?.length\">{{util.translate('No existen productos')}}</h2>\n    <ion-item *ngFor=\"let item of dummy\">\n      <ion-thumbnail slot=\"start\">\n        <ion-skeleton-text animated></ion-skeleton-text>\n      </ion-thumbnail>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n    <div>\n      <ion-segment (ionChange)=\"segmentChanged()\" scrollable=\"true\" [(ngModel)]=\"caetId\" mode=\"md\">\n        <ion-segment-button [value]=\"item.id\" *ngFor=\"let item of categories\">\n          <ion-label> {{item.name}} </ion-label>\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n    <div *ngFor=\"let item of foods\">\n\n      <span class=\"card_div\" (click)=\"foodsInfo(item)\">\n        <div class=\"back_image\"\n          [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.cover+'),url(assets/placeholder.jpg)'}\"></div>\n        <div class=\"content_div\">\n          <ion-label class=\"title\">{{item.name}}</ion-label>\n          <ion-label class=\"small\">\n            {{ (item.details.length>50)? (item.details | slice:0:50)+'..':(item.details) }}\n          </ion-label>\n          <ion-label *ngIf=\"item.veg ==='1'\" class=\"veg\">{{util.translate('Veg')}}</ion-label>\n          <ion-label *ngIf=\"item.veg ==='0'\" class=\"nonVeg\">{{util.translate('Non Veg')}}</ion-label>\n          <ion-label class=\"title\"> {{item.price}}</ion-label>\n        </div>\n      </span>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "g5+t":
/*!*********************************************!*\
  !*** ./src/app/pages/foods/foods.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.mainContent .head_lbl {\n  font-weight: 600;\n  font-size: 20px;\n  display: block;\n  margin-bottom: 10px;\n}\n.mainContent .card_div {\n  display: flex;\n  flex-direction: row;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-radius: 5px;\n  padding: 15px;\n  margin-bottom: 15px;\n}\n.mainContent .card_div .back_image {\n  width: 90px;\n  height: 90px;\n  border-radius: 5px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.mainContent .card_div .content_div {\n  padding-left: 20px;\n}\n.mainContent .card_div .content_div ion-label {\n  display: flex;\n}\n.mainContent .card_div .content_div .title {\n  font-weight: 600;\n  font-size: 16px;\n}\n.mainContent .card_div .content_div .small {\n  color: gray;\n  font-size: 14px;\n}\n.mainContent .card_div .content_div .veg {\n  color: green;\n}\n.mainContent .card_div .content_div .nonVeg {\n  color: red;\n}\n.mainContent .card_div .content_div .lonveg {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Zvb2RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7Ozs7Ozs7O0NBQUE7QUFVSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUNSO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFBUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFFWjtBQUFRO0VBQ0ksa0JBQUE7QUFFWjtBQURZO0VBQ0ksYUFBQTtBQUdoQjtBQUFZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBRWhCO0FBQVk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQUVoQjtBQUFZO0VBQ0ksWUFBQTtBQUVoQjtBQUFZO0VBQ0ksVUFBQTtBQUVoQjtBQUFZO0VBQ0ksK0JBQUE7QUFFaEIiLCJmaWxlIjoiZm9vZHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBmb29kaWVzIGFwcFxuICBDcmVhdGVkIDogMjgtRmViLTIwMjFcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4ubWFpbkNvbnRlbnQge1xuICAgIC5oZWFkX2xibCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIC5jYXJkX2RpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICAuYmFja19pbWFnZSB7XG4gICAgICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICB9XG4gICAgICAgIC5jb250ZW50X2RpdiB7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc21hbGwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC52ZWcge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ub25WZWcge1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubG9udmVnIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */");

/***/ }),

/***/ "ml0c":
/*!*****************************************************!*\
  !*** ./src/app/pages/foods/foods-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: FoodsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodsPageRoutingModule", function() { return FoodsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _foods_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./foods.page */ "FygT");

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
        component: _foods_page__WEBPACK_IMPORTED_MODULE_3__["FoodsPage"]
    }
];
let FoodsPageRoutingModule = class FoodsPageRoutingModule {
};
FoodsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FoodsPageRoutingModule);



/***/ }),

/***/ "vUrZ":
/*!*********************************************!*\
  !*** ./src/app/pages/foods/foods.module.ts ***!
  \*********************************************/
/*! exports provided: FoodsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodsPageModule", function() { return FoodsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _foods_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./foods-routing.module */ "ml0c");
/* harmony import */ var _foods_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./foods.page */ "FygT");
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







let FoodsPageModule = class FoodsPageModule {
};
FoodsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _foods_routing_module__WEBPACK_IMPORTED_MODULE_5__["FoodsPageRoutingModule"]
        ],
        declarations: [_foods_page__WEBPACK_IMPORTED_MODULE_6__["FoodsPage"]]
    })
], FoodsPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-foods-foods-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orders-orders-module"],{

/***/ "8veL":
/*!*******************************************************!*\
  !*** ./src/app/pages/orders/orders-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: OrdersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageRoutingModule", function() { return OrdersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders.page */ "Ep+G");

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
        component: _orders_page__WEBPACK_IMPORTED_MODULE_3__["OrdersPage"]
    }
];
let OrdersPageRoutingModule = class OrdersPageRoutingModule {
};
OrdersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrdersPageRoutingModule);



/***/ }),

/***/ "Ep+G":
/*!*********************************************!*\
  !*** ./src/app/pages/orders/orders.page.ts ***!
  \*********************************************/
/*! exports provided: OrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPage", function() { return OrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_orders_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./orders.page.html */ "iVDW");
/* harmony import */ var _orders_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders.page.scss */ "F6Pd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/apis.service */ "8RPc");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "2Rin");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








let OrdersPage = class OrdersPage {
    constructor(api, util, router) {
        this.api = api;
        this.util = util;
        this.router = router;
        this.seg_id = 1;
        this.newOrders = [];
        this.onGoingOrders = [];
        this.oldOrders = [];
        this.dummy = Array(10);
        this.getOrders('', false);
        this.util.getOrder().subscribe((data) => {
            this.getOrders('', false);
        });
    }
    ngOnInit() {
        console.log('init');
    }
    doRefresh(event) {
        this.getOrders(event, true);
    }
    onClick(val) {
        this.seg_id = val;
    }
    goToOrderDetail(item) {
        console.log(item);
        const navData = {
            queryParams: {
                id: item
            }
        };
        this.router.navigate(['/order-detail'], navData);
    }
    getOrders(event, haveRefresh) {
        console.log(event);
        console.log(haveRefresh);
        const param = {
            id: localStorage.getItem('uid')
        };
        this.api.post('orders/getByStore', param).then((data) => {
            console.log(data);
            this.dummy = [];
            if (data && data.status === 200 && data.data) {
                this.newOrders = [];
                this.onGoingOrders = [];
                this.oldOrders = [];
                data.data.forEach(element => {
                    element.order = JSON.parse(element.orders);
                    element.time = moment__WEBPACK_IMPORTED_MODULE_7__(element.time).format('llll');
                    if (element.status == 'en camino') {
                        this.onGoingOrders.push(element);
                    }
                    else if (element.status === 'entregada' || element.status === 'cancelada' || element.status === 'rechazada') {
                        this.oldOrders.push(element);
                    }
                    else {
                        this.newOrders.push(element);
                    }
                });
                if (haveRefresh) {
                    event.target.complete();
                }
            }
        }).catch((error) => {
            console.log(error);
            this.dummy = [];
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
};
OrdersPage.ctorParameters = () => [
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
OrdersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-orders',
        template: _raw_loader_orders_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_orders_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
], OrdersPage);



/***/ }),

/***/ "F6Pd":
/*!***********************************************!*\
  !*** ./src/app/pages/orders/orders.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.segment_div {\n  display: flex;\n  margin-top: 20px;\n  border-bottom: 1px solid lightgray;\n  justify-content: space-around;\n}\n.segment_div ion-label {\n  color: gray;\n  padding-bottom: 10px;\n  width: 100%;\n  text-align: center;\n}\n.segment_div .active {\n  border-bottom: 1px solid #00b3f0;\n}\n.main_content_div {\n  width: 100%;\n}\n.main_content_div .centent_div {\n  padding: 20px;\n}\n.main_content_div .centent_div ion-label {\n  display: block;\n}\n.main_content_div .card_div {\n  width: 100%;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 0.5px solid lightgray;\n}\n.main_content_div .card_div .line_div {\n  height: 1px;\n  width: 100%;\n  background: lightgray;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.main_content_div .card_div .resto_detail {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n}\n.main_content_div .card_div .resto_detail .back_image {\n  height: 50px;\n  width: 50px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 100%;\n}\n.main_content_div .card_div .resto_detail .res_name {\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .card_div .resto_detail .res_location {\n  color: lightgray;\n  font-size: 14px;\n}\n.main_content_div .card_div .resto_detail .order_id {\n  position: absolute;\n  right: 5px;\n  font-size: 0.6rem;\n}\n.main_content_div .card_div .resto_detail .order_id ion-label {\n  text-align: right;\n}\n.main_content_div .card_div .order_detail .head_gray {\n  color: lightgray;\n  font-size: 13px;\n  margin-top: 10px;\n}\n.main_content_div .card_div .order_detail .small_lbl {\n  font-size: 14px;\n  font-weight: 600;\n}\n.main_content_div .card_div .order_detail .border_bottom {\n  border-bottom: 1px dashed lightgray;\n  padding: 5px 0px;\n  font-size: 15px;\n  font-weight: bold;\n}\n.main_content_div .card_div .order_detail .subNames {\n  border-bottom: 1px dashed lightgray;\n  padding-bottom: 5px;\n}\n.main_content_div .card_div .order_detail .subNames .food_title {\n  font-size: 15px;\n  font-weight: bold;\n}\n.main_content_div .card_div .order_detail .subNames .flex_titles {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.main_content_div .card_div .order_detail .subNames .flex_titles .sub_name {\n  margin: 0px;\n  color: black;\n  font-size: 12px;\n}\n.main_content_div .card_div .order_detail .prize {\n  position: absolute;\n  right: 35px;\n  font-weight: 600 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL29yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0FBRUo7QUFESTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUdSO0FBREk7RUFDSSxnQ0FBQTtBQUdSO0FBQUE7RUFDSSxXQUFBO0FBR0o7QUFESTtFQUNJLGFBQUE7QUFHUjtBQURRO0VBQ0ksY0FBQTtBQUdaO0FBQ0k7RUFDSSxXQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBQ1I7QUFDUTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ1o7QUFDUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDWjtBQUNZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQUNoQjtBQUVZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBQWhCO0FBRVk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUFBaEI7QUFHWTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBRGhCO0FBRWdCO0VBQ0ksaUJBQUE7QUFBcEI7QUFNWTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSmhCO0FBTVk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFKaEI7QUFPWTtFQUNJLG1DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFMaEI7QUFPWTtFQUNJLG1DQUFBO0VBQ0EsbUJBQUE7QUFMaEI7QUFNZ0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFKcEI7QUFNZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUpwQjtBQUtvQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUh4QjtBQVFZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUFOaEIiLCJmaWxlIjoib3JkZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZm9vZGllcyBhcHBcbiAgQ3JlYXRlZCA6IDI4LUZlYi0yMDIxXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLnNlZ21lbnRfZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBpb24tbGFiZWwge1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5hY3RpdmUge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwYjNmMDtcbiAgICB9XG59XG4ubWFpbl9jb250ZW50X2RpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAuY2VudGVudF9kaXYge1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jYXJkX2RpdiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIGJvcmRlcjogMC41cHggc29saWQgbGlnaHRncmF5O1xuXG4gICAgICAgIC5saW5lX2RpdiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnJlc3RvX2RldGFpbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgIC5iYWNrX2ltYWdlIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucmVzX25hbWUge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnJlc19sb2NhdGlvbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vcmRlcl9pZCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm9yZGVyX2RldGFpbCB7XG4gICAgICAgICAgICAuaGVhZF9ncmF5IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNtYWxsX2xibCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ib3JkZXJfYm90dG9tIHtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zdWJOYW1lcyB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCBsaWdodGdyYXk7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICAuZm9vZF90aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5mbGV4X3RpdGxlcyB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgLnN1Yl9uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJpemUge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "Xlj8":
/*!***********************************************!*\
  !*** ./src/app/pages/orders/orders.module.ts ***!
  \***********************************************/
/*! exports provided: OrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersPageModule", function() { return OrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orders-routing.module */ "8veL");
/* harmony import */ var _orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders.page */ "Ep+G");
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







let OrdersPageModule = class OrdersPageModule {
};
OrdersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdersPageRoutingModule"]
        ],
        declarations: [_orders_page__WEBPACK_IMPORTED_MODULE_6__["OrdersPage"]]
    })
], OrdersPageModule);



/***/ }),

/***/ "iVDW":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/orders/orders.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <div class=\"segment_div\">\n            <ion-label [class.active]=\"seg_id == 1\" (click)=\"onClick(1)\">{{util.translate('Nuevas')}}</ion-label>\n            <ion-label [class.active]=\"seg_id == 2\" (click)=\"onClick(2)\">{{util.translate('En camino')}}</ion-label>\n            <ion-label [class.active]=\"seg_id == 3\" (click)=\"onClick(3)\">{{util.translate('Pasadas')}}</ion-label>\n        </div>\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n    <ion-refresher slot=\"fixed\" pullFactor=\"0.5\" pullMin=\"100\" pullMax=\"200\" (ionRefresh)=\"doRefresh($event)\">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <div class=\"main_content_div\">\n\n\n        <div class=\"centent_div\" *ngIf=\"seg_id == 1\">\n            <h2 class=\"ion-text-center\" *ngIf=\"!dummy?.length && !newOrders?.length\">{{util.translate('No hay órdernes\n                nuevas')}}</h2>\n            <ion-item *ngFor=\"let item of dummy\">\n                <ion-thumbnail slot=\"start\">\n                    <ion-skeleton-text animated></ion-skeleton-text>\n                </ion-thumbnail>\n                <ion-label>\n                    <h3>\n                        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n                    </h3>\n                    <p>\n                        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n                    </p>\n                    <p>\n                        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n                    </p>\n                </ion-label>\n            </ion-item>\n            <div class=\"card_div\" *ngFor=\"let item of newOrders\" (click)=\"goToOrderDetail(item.orderId)\">\n\n                <div class=\"resto_detail\">\n                    <div class=\"back_image\"\n                        [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.user_cover+'),url(assets/placeholder.jpg)'}\">\n                    </div>\n                    <div style=\"margin-left: 10px;\">\n                        <ion-label class=\"res_name\">{{item.user_first_name +' '+item.user_last_name}}</ion-label>\n                        <ion-label class=\"res_location\">{{item.time}}</ion-label>\n                        <ion-label class=\"res_name\">{{util.translate('ID')}} : #{{item.orderId}}</ion-label>\n                    </div>\n\n\n                </div>\n\n                <div class=\"line_div\"></div>\n\n                <div class=\"order_detail\">\n                    <ion-label class=\"head_gray\">{{util.translate('Productos')}}</ion-label>\n\n                    <div class=\"small_lbl\">\n                        <span *ngFor=\"let order of item.order;let ol = index\">\n                            <div *ngIf=\"!order.selectedItem || !order.selectedItem.length\" class=\"border_bottom\">\n                                {{order.name}} X {{order.quantiy}} <span *ngIf=\"ol !=item.order.length\">,</span>\n                            </div>\n\n                            <div *ngFor=\"let subItems of order.selectedItem;let j = index\" class=\"subNames\">\n                                <ion-label class=\"food_title\">{{order.name}} X {{order.selectedItem[j].total}}\n                                </ion-label>\n                                <div *ngFor=\"let addods of subItems.item\" class=\"flex_titles\">\n                                    <p class=\"sub_name\">\n                                        - {{addods.name}}\n                                    </p>\n                                    <p class=\"sub_name\" *ngIf=\"util.cside ==='left'\">\n                                        {{util.currecny}} {{addods.value}}\n                                    </p>\n                                    <p class=\"sub_name\" *ngIf=\"util.cside ==='right'\">\n                                        {{addods.value}} {{util.currecny}}\n                                    </p>\n                                </div>\n                            </div>\n                        </span>\n                    </div>\n                    <ion-label class=\"head_gray\">{{util.translate('Ordenado en')}}</ion-label>\n                    <ion-label class=\"small_lbl\">{{item.time}} </ion-label>\n                    <ion-label class=\"head_gray\">{{util.translate('Total')}}</ion-label>\n                    <ion-label class=\"small_lbl\" *ngIf=\"util.cside ==='left'\">{{util.currecny}}{{item.grand_total}}\n                    </ion-label>\n                    <ion-label class=\"small_lbl\" *ngIf=\"util.cside ==='right'\">{{item.grand_total}} {{util.currecny}}\n                    </ion-label>\n                </div>\n\n            </div>\n        </div>\n\n        <div class=\"centent_div\" *ngIf=\"seg_id == 2\">\n            <h2 class=\"ion-text-center\" *ngIf=\"!dummy?.length && !onGoingOrders?.length\">{{util.translate('No hay órdernes\n                nuevas')}}</h2>\n            <ion-item *ngFor=\"let item of dummy\">\n                <ion-thumbnail slot=\"start\">\n                    <ion-skeleton-text animated></ion-skeleton-text>\n                </ion-thumbnail>\n                <ion-label>\n                    <h3>\n                        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n                    </h3>\n                    <p>\n                        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n                    </p>\n                    <p>\n                        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n                    </p>\n                </ion-label>\n            </ion-item>\n            <div class=\"card_div\" *ngFor=\"let item of onGoingOrders\" (click)=\"goToOrderDetail(item.orderId)\">\n\n                <div class=\"resto_detail\">\n                    <div class=\"back_image\"\n                        [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.user_cover+'),url(assets/placeholder.jpg)'}\">\n                    </div>\n                    <div style=\"margin-left: 10px;\">\n                        <ion-label class=\"res_name\">{{item.user_first_name +' '+item.user_last_name}}</ion-label>\n                        <ion-label class=\"res_location\">{{item.time}}</ion-label>\n                        <ion-label class=\"res_name\">{{util.translate('ID')}} : #{{item.orderId}}</ion-label>\n                    </div>\n\n\n                </div>\n\n                <div class=\"line_div\"></div>\n\n                <div class=\"order_detail\">\n                    <ion-label class=\"head_gray\">{{util.translate('Productos')}}</ion-label>\n\n                    <div class=\"small_lbl\">\n                        <span *ngFor=\"let order of item.order;let ol = index\">\n                            <div *ngIf=\"!order.selectedItem || !order.selectedItem.length\" class=\"border_bottom\">\n                                {{order.name}} X {{order.quantiy}} <span *ngIf=\"ol !=item.order.length\">,</span>\n                            </div>\n\n                            <div *ngFor=\"let subItems of order.selectedItem;let j = index\" class=\"subNames\">\n                                <ion-label class=\"food_title\">{{order.name}} X {{order.selectedItem[j].total}}\n                                </ion-label>\n                                <div *ngFor=\"let addods of subItems.item\" class=\"flex_titles\">\n                                    <p class=\"sub_name\">\n                                        - {{addods.name}}\n                                    </p>\n                                    <p class=\"sub_name\" *ngIf=\"util.cside ==='left'\">\n                                        {{util.currecny}} {{addods.value}}\n                                    </p>\n                                    <p class=\"sub_name\" *ngIf=\"util.cside ==='right'\">\n                                        {{addods.value}} {{util.currecny}}\n                                    </p>\n                                </div>\n                            </div>\n                        </span>\n                    </div>\n                    <ion-label class=\"head_gray\">{{util.translate('Ordenado en')}}</ion-label>\n                    <ion-label class=\"small_lbl\">{{item.time}} </ion-label>\n                    <ion-label class=\"head_gray\">{{util.translate('Total')}}</ion-label>\n                    <ion-label class=\"small_lbl\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{item.grand_total}}\n                    </ion-label>\n                    <ion-label class=\"small_lbl\" *ngIf=\"util.cside ==='right'\">{{item.grand_total}} {{util.currecny}}\n                    </ion-label>\n                </div>\n\n            </div>\n        </div>\n\n        <div class=\"centent_div\" *ngIf=\"seg_id == 3\">\n            <h2 class=\"ion-text-center\" *ngIf=\"!dummy?.length && !oldOrders?.length\">{{util.translate('No hay órdernes\n                nuevas')}}</h2>\n            <ion-item *ngFor=\"let item of dummy\">\n                <ion-thumbnail slot=\"start\">\n                    <ion-skeleton-text animated></ion-skeleton-text>\n                </ion-thumbnail>\n                <ion-label>\n                    <h3>\n                        <ion-skeleton-text animated style=\"width: 50%\"></ion-skeleton-text>\n                    </h3>\n                    <p>\n                        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n                    </p>\n                    <p>\n                        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n                    </p>\n                </ion-label>\n            </ion-item>\n            <div class=\"card_div\" *ngFor=\"let item of oldOrders\" (click)=\"goToOrderDetail(item.orderId)\">\n\n                <div class=\"resto_detail\">\n                    <div class=\"back_image\"\n                        [ngStyle]=\"{'background-image':'url('+api.mediaURL+item.user_cover+'),url(assets/placeholder.jpg)'}\">\n                    </div>\n                    <div style=\"margin-left: 10px;\">\n                        <ion-label class=\"res_name\">{{item.user_first_name +' '+item.user_last_name}}</ion-label>\n                        <ion-label class=\"res_location\">{{item.time}}</ion-label>\n                        <ion-label class=\"res_name\">{{util.translate('ID')}} : #{{item.orderId}}</ion-label>\n                    </div>\n                </div>\n                <div class=\"line_div\"></div>\n\n                <div class=\"order_detail\">\n                    <ion-label class=\"head_gray\">{{util.translate('Productos')}}</ion-label>\n\n                    <div class=\"small_lbl\">\n                        <span *ngFor=\"let order of item.order;let ol = index\">\n                            <div *ngIf=\"!order.selectedItem || !order.selectedItem.length\" class=\"border_bottom\">\n                                {{order.name}} X {{order.quantiy}} <span *ngIf=\"ol !=item.order.length\">,</span>\n                            </div>\n\n                            <div *ngFor=\"let subItems of order.selectedItem;let j = index\" class=\"subNames\">\n                                <ion-label class=\"food_title\">{{order.name}} X {{order.selectedItem[j].total}}\n                                </ion-label>\n                                <div *ngFor=\"let addods of subItems.item\" class=\"flex_titles\">\n                                    <p class=\"sub_name\">\n                                        - {{addods.name}}\n                                    </p>\n                                    <p class=\"sub_name\" *ngIf=\"util.cside ==='left'\">\n                                        {{util.currecny}} {{addods.value}}\n                                    </p>\n                                    <p class=\"sub_name\" *ngIf=\"util.cside ==='right'\">\n                                        {{addods.value}} {{util.currecny}}\n                                    </p>\n                                </div>\n                            </div>\n                        </span>\n                    </div>\n                    <ion-label class=\"head_gray\">{{util.translate('Ordenado en')}}</ion-label>\n                    <ion-label class=\"small_lbl\">{{item.time}} </ion-label>\n                    <ion-label class=\"head_gray\">{{util.translate('Total')}}</ion-label>\n                    <ion-label class=\"small_lbl\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{item.grand_total}}\n                    </ion-label>\n                    <ion-label class=\"small_lbl\" *ngIf=\"util.cside ==='right'\">{{item.grand_total}} {{util.currecny}}\n                    </ion-label>\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=orders-orders-module-es2015.js.map
(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-order-detail-order-detail-module"], {
    /***/
    "+ksK":
    /*!***********************************************************!*\
      !*** ./src/app/pages/order-detail/order-detail.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function ksK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 foodies app\n  Created : 28-Feb-2021\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.main_content_div {\n  width: 100%;\n}\n.main_content_div .line_div {\n  height: 1px;\n  width: 100%;\n  background: lightgray;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .card_div {\n  padding: 20px;\n}\n.main_content_div .card_div .resto_detail {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  position: relative;\n}\n.main_content_div .card_div .resto_detail .back_image {\n  height: 50px;\n  width: 50px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-radius: 100%;\n}\n.main_content_div .card_div .resto_detail .res_name {\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .card_div .resto_detail .res_location {\n  color: gray;\n  font-size: 14px;\n}\n.main_content_div .card_div .resto_detail .order_id {\n  position: absolute;\n  right: 5px;\n}\n.main_content_div .card_div .resto_detail .order_id ion-label {\n  text-align: right;\n}\n.main_content_div .orderId {\n  padding: 10px 20px;\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .card_div4 {\n  border-bottom: 1px dashed lightgray;\n  padding: 10px 20px;\n}\n.main_content_div .card_div4 .flex_div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.main_content_div .card_div4 .flex_div .food_title {\n  font-size: 15px;\n  font-weight: bold;\n}\n.main_content_div .card_div4 .flex_div .food_price {\n  font-size: 15px;\n}\n.main_content_div .card_div4 .flex_div .fav_lbl {\n  color: red;\n  font-size: 12px;\n  border: 1px solid red;\n  border-radius: 25px;\n  padding: 2px 10px;\n}\n.main_content_div .subNames {\n  border-bottom: 1px dashed lightgray;\n  padding: 20px;\n}\n.main_content_div .subNames .food_title {\n  font-size: 15px;\n  font-weight: bold;\n}\n.main_content_div .subNames .food_title .veg {\n  height: 12px;\n  width: 12px;\n}\n.main_content_div .subNames .food_title .rate_lbl {\n  background: #b2d9b2;\n  border: 1px solid #7bdb7b;\n  padding: 3px 8px;\n  border-radius: 5px;\n  font-size: 14px;\n  font-weight: 600;\n}\n.main_content_div .subNames .flex_titles {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.main_content_div .subNames .flex_titles .sub_name {\n  margin: 0px;\n  color: black;\n  font-size: 12px;\n}\n.main_content_div .head_gray {\n  color: black;\n  font-size: 15px;\n  font-weight: 600;\n  padding: 0px 15px;\n}\n.main_content_div .small_lbl {\n  font-size: 12px;\n  color: gray;\n  margin-bottom: 15px;\n  padding: 0px 15px;\n}\n.main_content_div .card_div2 {\n  padding: 10px 20px;\n}\n.main_content_div .card_div2 .personal_detail {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n}\n.main_content_div .card_div2 .personal_detail ion-icon {\n  font-size: 20px;\n  color: var(--ion-color-primary);\n}\n.main_content_div .card_div2 .personal_detail ion-button {\n  --border-radius: 3px;\n  font-weight: 600;\n}\n.main_content_div .card_div2 .personal_detail .res_name {\n  font-weight: 600;\n  font-size: 14px;\n}\n.main_content_div .card_div2 .order_detail .head_gray {\n  color: gray;\n  font-size: 13px;\n  margin-top: 10px;\n}\n.main_content_div .card_div2 .order_detail .small_lbl {\n  font-size: 14px;\n  font-weight: 600;\n}\n.main_content_div .card_div2 .order_detail .prize {\n  position: absolute;\n  right: 35px;\n  font-weight: 600 !important;\n  color: black;\n}\n.main_content_div .card_div2 .order_detail .prize1 {\n  position: absolute;\n  right: 35px;\n  font-weight: 600 !important;\n  color: black;\n  font-size: 16px;\n  margin-top: 10px;\n}\n.main_content_div .card_div2 .order_detail .small_lbl2 {\n  font-size: 16px;\n  font-weight: 600;\n  margin-top: 10px;\n}\n.btn_div {\n  display: flex;\n  justify-content: center;\n}\n.btn_div ion-button {\n  font-weight: 600;\n  --border-radius: 5px;\n  width: 130px;\n}\n.btn_div .accept {\n  --background: green;\n}\n.status_div {\n  display: flex;\n  justify-content: space-between;\n  padding-left: 20px;\n  padding-right: 20px;\n  align-items: center;\n}\n.status_div ion-select {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n  width: 100%;\n}\n.status_div ion-button {\n  font-weight: 600;\n  --border-radius: 5px;\n}\n.green {\n  display: block;\n  text-align: center;\n  color: green;\n  font-weight: 600;\n}\n.red {\n  display: block;\n  text-align: center;\n  color: var(--ion-color-primary);\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL29yZGVyLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCOzs7Ozs7OztDQUFBO0FBU0E7RUFDSSxXQUFBO0FBRUo7QUFBSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFFUjtBQUNJO0VBQ0ksY0FBQTtBQUNSO0FBRUk7RUFDSSxhQUFBO0FBQVI7QUFFUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBWjtBQUVZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQUFoQjtBQUdZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBRGhCO0FBR1k7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQURoQjtBQUlZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBRmhCO0FBSWdCO0VBQ0ksaUJBQUE7QUFGcEI7QUFRSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBTlI7QUFTSTtFQUNJLG1DQUFBO0VBQ0Esa0JBQUE7QUFQUjtBQVFRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFOWjtBQU9ZO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBTGhCO0FBT1k7RUFDSSxlQUFBO0FBTGhCO0FBT1k7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUxoQjtBQVNJO0VBQ0ksbUNBQUE7RUFDQSxhQUFBO0FBUFI7QUFRUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQU5aO0FBT1k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQUxoQjtBQU9ZO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFMaEI7QUFRUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBTlo7QUFPWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUxoQjtBQVVJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBUlI7QUFVSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQVJSO0FBV0k7RUFDSSxrQkFBQTtBQVRSO0FBVVE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBUlo7QUFVWTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtBQVJoQjtBQVVZO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtBQVJoQjtBQVVZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBUmhCO0FBYVk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBWGhCO0FBYVk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFYaEI7QUFjWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQVpoQjtBQWVZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBYmhCO0FBZ0JZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFkaEI7QUFvQkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFqQko7QUFtQkk7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQWpCUjtBQW1CSTtFQUNJLG1CQUFBO0FBakJSO0FBcUJBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBbEJKO0FBb0JJO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBbEJSO0FBcUJJO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtBQW5CUjtBQXVCQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQXBCSjtBQXNCQTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUFuQkoiLCJmaWxlIjoib3JkZXItZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZm9vZGllcyBhcHBcbiAgQ3JlYXRlZCA6IDI4LUZlYi0yMDIxXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuLm1haW5fY29udGVudF9kaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmxpbmVfZGl2IHtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XG4gICAgfVxuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLmNhcmRfZGl2IHtcbiAgICAgICAgcGFkZGluZzogMjBweDtcblxuICAgICAgICAucmVzdG9fZGV0YWlsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgLmJhY2tfaW1hZ2Uge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5yZXNfbmFtZSB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmVzX2xvY2F0aW9uIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5vcmRlcl9pZCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiA1cHg7XG5cbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAub3JkZXJJZCB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC5jYXJkX2RpdjQge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICAuZmxleF9kaXYge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAuZm9vZF90aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvb2RfcHJpY2Uge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mYXZfbGJsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuc3ViTmFtZXMge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgLmZvb2RfdGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAudmVnIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmF0ZV9sYmwge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNiMmQ5YjI7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzdiZGI3YjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggOHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZmxleF90aXRsZXMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAuc3ViX25hbWUge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaGVhZF9ncmF5IHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxNXB4O1xuICAgIH1cbiAgICAuc21hbGxfbGJsIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAgcGFkZGluZzogMHB4IDE1cHg7XG4gICAgfVxuXG4gICAgLmNhcmRfZGl2MiB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgLnBlcnNvbmFsX2RldGFpbCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmVzX25hbWUge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm9yZGVyX2RldGFpbCB7XG4gICAgICAgICAgICAuaGVhZF9ncmF5IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5zbWFsbF9sYmwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJpemUge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucHJpemUxIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNtYWxsX2xibDIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5idG5fZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgfVxuICAgIC5hY2NlcHQge1xuICAgICAgICAtLWJhY2tncm91bmQ6IGdyZWVuO1xuICAgIH1cbn1cblxuLnN0YXR1c19kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpb24tc2VsZWN0IHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIC0tcGFkZGluZy10b3A6IDNweDtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogM3B4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgfVxufVxuXG4uZ3JlZW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogZ3JlZW47XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbi5yZWQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4iXX0= */";
      /***/
    },

    /***/
    "982l":
    /*!***********************************************************!*\
      !*** ./src/app/pages/order-detail/order-detail.module.ts ***!
      \***********************************************************/

    /*! exports provided: OrderDetailPageModule */

    /***/
    function l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderDetailPageModule", function () {
        return OrderDetailPageModule;
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


      var _order_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./order-detail-routing.module */
      "t1E5");
      /* harmony import */


      var _order_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./order-detail.page */
      "E4co");
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


      var OrderDetailPageModule = function OrderDetailPageModule() {
        _classCallCheck(this, OrderDetailPageModule);
      };

      OrderDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _order_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderDetailPageRoutingModule"]],
        declarations: [_order_detail_page__WEBPACK_IMPORTED_MODULE_6__["OrderDetailPage"]]
      })], OrderDetailPageModule);
      /***/
    },

    /***/
    "E4co":
    /*!*********************************************************!*\
      !*** ./src/app/pages/order-detail/order-detail.page.ts ***!
      \*********************************************************/

    /*! exports provided: OrderDetailPage */

    /***/
    function E4co(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderDetailPage", function () {
        return OrderDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_order_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./order-detail.page.html */
      "eKVw");
      /* harmony import */


      var _order_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./order-detail.page.scss */
      "+ksK");
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _select_drivers_select_drivers_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../select-drivers/select-drivers.page */
      "ERed");
      /* harmony import */


      var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/printer/ngx */
      "METt");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
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


      var OrderDetailPage = /*#__PURE__*/function () {
        function OrderDetailPage(router, route, api, util, navCtrl, printer, modalController, iab) {
          var _this = this;

          _classCallCheck(this, OrderDetailPage);

          this.router = router;
          this.route = route;
          this.api = api;
          this.util = util;
          this.navCtrl = navCtrl;
          this.printer = printer;
          this.modalController = modalController;
          this.iab = iab;
          this.orders = [];
          this.rest = {};
          this.drivers = [];
          this.dummyDriver = [];
          this.orderString = [];
          this.orderNotes = '';
          this.loaded = false;
          this.route.queryParams.subscribe(function (data) {
            _this.id = data.id;

            _this.getOrder();
          });
        }

        _createClass(OrderDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "back",
          value: function back() {
            this.util.publishNewAddress('hello');
            this.navCtrl.back();
          }
        }, {
          key: "presentModal",
          value: function presentModal() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _select_drivers_select_drivers_page__WEBPACK_IMPORTED_MODULE_9__["SelectDriversPage"],
                        backdropDismiss: false,
                        showBackdrop: true,
                        componentProps: {
                          item: this.dummyDriver
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (data) {
                        if (data && data.role === 'selected') {
                          if (data.data && data.data.length) {
                            var param = {
                              id: _this2.id,
                              status: 'accepted',
                              did: data.data[0].id
                            };

                            _this2.util.show(_this2.util.translate('Por favor espere'));

                            _this2.api.post('orders/editList', param).then(function (order) {
                              if (order && order.status === 200) {
                                var driverParam = {
                                  id: data.data[0].id,
                                  current: 'busy'
                                };

                                _this2.api.post('drivers/edit_profile', driverParam).then(function (driver) {
                                  if (driver && driver.status === 200) {
                                    _this2.util.hide();

                                    _this2.api.sendNotification(_this2.util.translate('New Order Received '), _this2.util.translate('New Order'), data.data[0].fcm_token);

                                    var msg = _this2.util.translate('Your Order is ') + 'accepted' + _this2.util.translate(' By ') + _this2.restName;

                                    _this2.api.sendNotification(msg, 'Order ' + 'accepted', _this2.token);

                                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                                      title: _this2.util.translate('success'),
                                      text: _this2.util.translate('Order status changed to ') + 'accepted',
                                      icon: 'success',
                                      timer: 2000,
                                      backdrop: false,
                                      background: 'white'
                                    });

                                    _this2.util.publishOrder();

                                    _this2.navCtrl.back();
                                  } else {
                                    _this2.util.hide();

                                    _this2.util.errorToast(_this2.util.translate('Se ha presentado un error'));

                                    _this2.navCtrl.back();
                                  }
                                }, function (error) {
                                  _this2.util.hide();

                                  _this2.util.errorToast(_this2.util.translate('Se ha presentado un error'));
                                })["catch"](function (error) {
                                  _this2.util.hide();

                                  _this2.util.errorToast(_this2.util.translate('Se ha presentado un error'));
                                }); // edit_profile

                              } else {
                                _this2.util.hide();

                                _this2.util.errorToast(_this2.util.translate('Se ha presentado un error'));

                                _this2.navCtrl.back();
                              }
                            }, function (error) {
                              _this2.util.hide();

                              _this2.util.errorToast(_this2.util.translate('Se ha presentado un error'));
                            })["catch"](function (error) {
                              _this2.util.hide();

                              _this2.util.errorToast(_this2.util.translate('Se ha presentado un error'));
                            });
                          }
                        }
                      });
                      _context.next = 6;
                      return modal.present();

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getDistanceFromLatLonInKm",
          value: function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var R, dLat, dLon, a, c, d;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      R = 6371; // Radius of the earth in km

                      dLat = this.deg2rad(lat2 - lat1); // deg2rad below

                      dLon = this.deg2rad(lon2 - lon1);
                      a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
                      c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                      d = R * c; // Distance in km

                      return _context2.abrupt("return", d);

                    case 7:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "deg2rad",
          value: function deg2rad(deg) {
            return deg * (Math.PI / 180);
          }
        }, {
          key: "getUserInfo",
          value: function getUserInfo(uid) {
            var _this3 = this;

            var param = {
              id: uid
            };
            this.api.post('users/getById', param).then(function (data) {
              if (data && data.status === 200 && data.data.length) {
                var info = data.data[0];
                _this3.userName = info.first_name + ' ' + info.last_name;
                _this3.phone = info.mobile;
                _this3.token = info.fcm_token;
                _this3.userEmail = info.email;
                _this3.userPic = info.cover;
              }
            }, function (error) {
              _this3.util.errorToast('Se ha presentado un error');
            })["catch"](function (error) {
              _this3.util.errorToast('Se ha presentado un error');
            });
          }
        }, {
          key: "getDriverInfo",
          value: function getDriverInfo() {
            var _this4 = this;

            var param = {
              id: this.driverId
            };
            this.api.post('drivers/getById', param).then(function (data) {
              if (data && data.status === 200 && data.data.length) {
                var info = data.data[0];
                _this4.driverName = info.first_name + ' ' + info.last_name;
                _this4.driverMobile = info.mobile;
                _this4.driverCover = info.cover;
                _this4.driverFCM = info.fcm_token;
              }
            }, function (error) {
              _this4.util.errorToast('Se ha presentado un error');
            })["catch"](function (error) {
              _this4.util.errorToast('Se ha presentado un error');
            });
          }
        }, {
          key: "getDrivers",
          value: function getDrivers() {
            var _this5 = this;

            this.api.get('drivers').then(function (data) {
              if (data && data.status === 200 && data.data.length) {
                var drivers = data.data.filter(function (x) {
                  return x.status === '1';
                });
                drivers.forEach(function (element) {
                  return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this5, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                    var distance;
                    return regeneratorRuntime.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _context3.next = 2;
                            return this.getDistanceFromLatLonInKm(this.rest.lat, this.rest.lng, parseFloat(element.lat), parseFloat(element.lng));

                          case 2:
                            distance = _context3.sent;
                            console.log(element.id, distance);

                            if (distance < 50) {
                              element['distance'] = distance.toFixed(2);
                              element["on"] = true;
                              this.drivers.push(element);
                              this.dummyDriver.push(element);
                            }

                          case 5:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3, this);
                  }));
                });
              }
            }, function (error) {
              _this5.util.errorToast('Se ha presentado un error');
            })["catch"](function (error) {
              _this5.util.errorToast('Se ha presentado un error');
            });
          }
        }, {
          key: "getOrder",
          value: function getOrder() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this6 = this;

              var param;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      param = {
                        id: this.id
                      };
                      this.api.post('orders/getById', param).then(function (datas) {
                        _this6.loaded = true;

                        if (datas && datas.status === 200 && datas.data.length) {
                          var data = datas.data[0];
                          _this6.grandTotal = data.grand_total;
                          _this6.orders = JSON.parse(data.orders);
                          _this6.serviceTax = data.serviceTax;
                          _this6.status = data.status;
                          _this6.time = moment__WEBPACK_IMPORTED_MODULE_11__(data.time).format('llll');
                          _this6.total = data.total;
                          _this6.paid = data.pay_method;
                          _this6.orderNotes = data.notes;
                          _this6.deliveryCharge = data.delivery_charge;

                          if (data && data.did !== '') {
                            _this6.driverId = data.did;

                            _this6.getDriverInfo();
                          }

                          if (data && data.address) {
                            var add = JSON.parse(data.address);
                            _this6.deliveryAddress = add.house + ' ' + add.landmark + ' ' + add.address + add.pincode;
                            _this6.userLat = add.lat;
                            _this6.userLng = add.lng;
                          }

                          _this6.getUserInfo(data.uid);

                          _this6.getRestInfo(data.restId);

                          _this6.restName = data.str_name;

                          _this6.orders.forEach(function (element) {
                            if (element && element.selectedItem && element.selectedItem.length > 0) {
                              var items = '';
                              element.selectedItem.forEach(function (subItems, j) {
                                var subDatas = [];
                                items = '<div style="border-bottom:1px dashed lightgray"> <p style="font-weight:bold"> ' + element.name + ' X ' + element.selectedItem[j].total + '##ITEWS## </p></div>';
                                subItems.item.forEach(function (addons, k) {
                                  subDatas.push('<div style="display:flex;flex-direction:row;justify-content:space-between"> <p style="font-weight:bold;color:gray;margin:0px;"> -' + addons.name + '</p> <p style="font-weight:bold;color:gray;margin:0px;">' + _this6.getCurrency() + ' ' + addons.value + '</p> </div> ');
                                });
                                var subOrders = subDatas.join('');
                                var info = items.replace('##ITEWS##', subOrders);

                                _this6.orderString.push(info);
                              });
                            } else {
                              var _items = '<div style="border-bottom:1px dashed lightgray;display:flex;flex-direction:row;justify-content:space-between"> <p style="font-weight:bold"> ' + element.name + ' X ' + element.quantiy + ' </p> <p style="font-weight:bold">' + element.price + _this6.getCurrency() + '</p> </div>';

                              _this6.orderString.push(_items);
                            }
                          });
                        }
                      }, function (error) {
                        _this6.loaded = true;

                        _this6.util.errorToast('Se ha presentado un error');
                      })["catch"](function (error) {
                        _this6.loaded = true;

                        _this6.util.errorToast('Se ha presentado un error');
                      });

                    case 2:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "getRestInfo",
          value: function getRestInfo(id) {
            var _this7 = this;

            var param = {
              id: id
            };
            this.api.post('users/getById', param).then(function (data) {
              _this7.rest = data.data[0];

              _this7.getDrivers();
            }, function (error) {
              _this7.util.errorToast('Algo ha ido mal');
            })["catch"](function (error) {
              _this7.util.errorToast('Algo ha ido mal');
            });
          }
        }, {
          key: "goToTracker",
          value: function goToTracker() {
            var navData = {
              queryParams: {
                id: this.id
              }
            };
            this.router.navigate(['/tracker'], navData);
          }
        }, {
          key: "getCurrency",
          value: function getCurrency() {
            return '$';
          }
        }, {
          key: "autoAssignment",
          value: function autoAssignment() {
            var _this8 = this;

            if (this.drivers && this.drivers.length) {
              var dat = this.drivers.filter(function (x) {
                return x.on === true;
              });
              var max = dat.reduce(function (prev, current) {
                return prev.distance < current.distance && current.on == true ? prev : current;
              });

              if (max && max.id) {
                var param = {
                  id: this.id,
                  status: 'aceptada',
                  did: max.id
                };
                var params = {
                  id: max.id
                };
                this.api.post('orders/getByDriverId', params).then(function (data) {
                  var ddd = data.data.filter(function (x) {
                    return x.status === 'aceptada' || x.status == "en camino";
                  });

                  if (ddd.length >= 2) {
                    _this8.drivers.filter(function (d) {
                      if (d.id == max.id) {
                        d.on = false;
                      }
                    });

                    _this8.autoAssignment();
                  } else {
                    _this8.util.show(_this8.util.translate('Espere por favor'));

                    _this8.asignarlo(param, max);
                  }
                });
              } else {
                this.util.errorToast('No se encontraron Drivers cercanos, intenta nuevamente en un par de de minutos.');
              }
            } else {
              this.util.errorToast('No se encontro ningun repartidor activo');
            }
          }
        }, {
          key: "asignarlo",
          value: function asignarlo(param, max) {
            var _this9 = this;

            this.api.post('orders/editList', param).then(function (order) {
              if (order && order.status === 200) {
                var driverParam = {
                  id: max.id,
                  current: 'busy'
                };

                _this9.api.post('drivers/edit_profile', driverParam).then(function (driver) {
                  if (driver && driver.status === 200) {
                    _this9.util.hide();

                    _this9.api.sendNotification(_this9.util.translate('Nueva orden recibida '), _this9.util.translate('Nueva orden'), max.fcm_token);

                    var msg = _this9.util.translate('Tu orden es ') + 'aceptada' + _this9.util.translate(' por ') + _this9.restName;

                    _this9.api.sendNotification(msg, 'Orden ' + 'aceptada', _this9.token);

                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                      title: _this9.util.translate('success'),
                      text: _this9.util.translate('El estado de la orden cambio ha ') + 'aceptada.',
                      icon: 'success',
                      timer: 2000,
                      backdrop: false,
                      background: 'white'
                    });

                    _this9.util.publishOrder();

                    _this9.navCtrl.back();
                  } else {
                    _this9.util.hide();

                    _this9.util.errorToast(_this9.util.translate('Se ha presentado un error'));

                    _this9.navCtrl.back();
                  }
                }, function (error) {
                  _this9.util.hide();

                  _this9.util.errorToast(_this9.util.translate('Se ha presentado un error'));
                })["catch"](function (error) {
                  _this9.util.hide();

                  _this9.util.errorToast(_this9.util.translate('Se ha presentado un error'));
                }); // edit_profile

              } else {
                _this9.util.hide();

                _this9.util.errorToast(_this9.util.translate('Se ha presentado un error'));

                _this9.navCtrl.back();
              }
            }, function (error) {
              _this9.util.hide();

              _this9.util.errorToast(_this9.util.translate('Se ha presentado un error'));
            })["catch"](function (error) {
              _this9.util.hide();

              _this9.util.errorToast(_this9.util.translate('Se ha presentado un error'));
            });
          }
        }, {
          key: "changeStatus",
          value: function changeStatus(value) {
            var _this10 = this;

            if (value === 'aceptada') {
              if (this.util.driver_assignments === '0') {
                this.presentModal();
              } else {
                this.autoAssignment();
              }
            } else if (value === 'en camino') {
              var param = {
                id: this.id,
                status: value
              };
              this.util.show(this.util.translate('Espere por favor'));
              this.api.post('orders/editList', param).then(function (order) {
                _this10.util.hide();

                if (order && order.status === 200) {
                  var msg = _this10.util.translate('Your Order is ') + value + _this10.util.translate(' By ') + _this10.restName;

                  _this10.api.sendNotification(msg, 'Order ' + value, _this10.token);

                  sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                    title: _this10.util.translate('success'),
                    text: _this10.util.translate('Order status changed to ') + value,
                    icon: 'success',
                    timer: 2000,
                    backdrop: false,
                    background: 'white'
                  });

                  _this10.util.publishOrder();

                  _this10.navCtrl.back();
                } else {
                  _this10.util.hide();

                  _this10.util.errorToast(_this10.util.translate('Se ha presentado un error'));

                  _this10.navCtrl.back();
                }
              }, function (error) {
                _this10.util.hide();

                _this10.util.errorToast(_this10.util.translate('Se ha presentado un error'));
              })["catch"](function (error) {
                _this10.util.hide();

                _this10.util.errorToast(_this10.util.translate('Se ha presentado un error'));
              });
            } else {
              var _param = {
                id: this.id,
                status: value,
                did: this.driverId
              };
              this.util.show(this.util.translate('Espere por favor'));
              this.api.post('orders/editList', _param).then(function (order) {
                if (order && order.status === 200) {
                  var driverParam = {
                    id: _this10.driverId,
                    current: 'active'
                  };

                  _this10.api.post('drivers/edit_profile', driverParam).then(function (driver) {
                    if (driver && driver.status === 200) {
                      _this10.util.hide();

                      _this10.api.sendNotification(_this10.util.translate('El estado de la orden cambio'), _this10.util.translate('El estado de la orden cambio'), _this10.driverFCM);

                      var msg = _this10.util.translate('Tu orden es ') + value + _this10.util.translate(' por ') + _this10.restName;

                      _this10.api.sendNotification(msg, 'Orden ' + value, _this10.token);

                      sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                        title: _this10.util.translate('success'),
                        text: _this10.util.translate('El estado de la orden cambio a ') + value,
                        icon: 'success',
                        timer: 2000,
                        backdrop: false,
                        background: 'white'
                      });

                      _this10.util.publishOrder();

                      _this10.navCtrl.back();
                    } else {
                      _this10.util.hide();

                      _this10.util.errorToast(_this10.util.translate('Se ha presentado un error'));

                      _this10.navCtrl.back();
                    }
                  }, function (error) {
                    _this10.util.hide();

                    _this10.util.errorToast(_this10.util.translate('Se ha presentado un error'));
                  })["catch"](function (error) {
                    _this10.util.hide();

                    _this10.util.errorToast(_this10.util.translate('Se ha presentado un error'));
                  }); // edit_profile

                } else {
                  _this10.util.hide();

                  _this10.util.errorToast(_this10.util.translate('Se ha presentado un error'));

                  _this10.navCtrl.back();
                }
              }, function (error) {
                _this10.util.hide();

                _this10.util.errorToast(_this10.util.translate('Se ha presentado un error'));
              })["catch"](function (error) {
                _this10.util.hide();

                _this10.util.errorToast(_this10.util.translate('Se ha presentado un error'));
              });
            }
          }
        }, {
          key: "changeOrderStatus",
          value: function changeOrderStatus() {
            if (this.changeStatusOrder) {
              this.changeStatus(this.changeStatusOrder);
            }
          }
        }, {
          key: "call",
          value: function call() {
            if (this.phone) {
              this.iab.create('tel:' + this.phone, '_system');
            } else {
              this.util.errorToast(this.util.translate('Number not found'));
            }
          }
        }, {
          key: "driverCall",
          value: function driverCall() {
            if (this.driverMobile) {
              this.iab.create('tel:' + this.driverMobile, '_system');
            } else {
              this.util.errorToast(this.util.translate('Number not found'));
            }
          }
        }, {
          key: "email",
          value: function email() {
            if (this.userEmail) {
              this.iab.create('mailto:' + this.userEmail, '_system');
            } else {
              this.util.errorToast(this.util.translate('Email not found'));
            }
          }
        }, {
          key: "printOrder",
          value: function printOrder() {
            var options = {
              name: 'Foodie Order Summary',
              duplex: false
            };
            var order = this.orderString.join('');
            var content = '<div style="padding: 20px;display: flex;flex-direction: column;"> <img src="assets/icon.png" style="text-align: center; height: 100px;width: 100px;" alt=""> <h2 style="text-align: center;">Foodies Order Summary</h2> <p style="float: left;"><b>' + this.id + '</b></p> <p style="float: left;"><b>' + this.restName + '</b></p> <p style="float: left;"><b>' + this.userName + '</b></p> <p style="float: left;">' + this.time + ' </p> <p style="font-weight: bold;">' + this.util.translate('ITEMS') + '</p> ' + order + ' <p style="border-bottom: 1px solid black;"><span style="float: left;font-weight: bold;">' + this.util.translate('SubTotal') + '</span> <span style="float: right;font-weight: bold;">$' + this.total + '</span> <p style="border-bottom: 1px solid black;"><span style="float: left;font-weight: bold;">' + this.util.translate('Delivery Charge') + '</span> <span style="float: right;font-weight: bold;">$5</span> </p> <p style="border-bottom: 1px solid black;"><span style="float: left;font-weight: bold;">' + this.util.translate('Service Tax') + '</span> <span style="float: right;font-weight: bold;">$' + this.serviceTax + '</span> </p> <p style="border-bottom: 1px solid black;"><span style="float: left;font-weight: bold;">' + this.util.translate('Total') + '</span> <span style="float: right;font-weight: bold;">$' + this.grandTotal + '</span> </p> <h1 style="text-align: center;text-transform: uppercase;">' + this.paid + '</h1> </div>';
            this.printer.print(content, options).then(function (data) {})["catch"](function (error) {});
          }
        }]);

        return OrderDetailPage;
      }();

      OrderDetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"]
        }, {
          type: _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_10__["Printer"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }, {
          type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__["InAppBrowser"]
        }];
      };

      OrderDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-order-detail',
        template: _raw_loader_order_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_order_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"], _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_10__["Printer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_12__["InAppBrowser"]])], OrderDetailPage);
      /***/
    },

    /***/
    "eKVw":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-detail/order-detail.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eKVw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" color=\"light\" mode=\"md\" name=\"arrow-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{util.translate('órden')}} # {{id}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"!loaded\" style=\"display: flex;flex-direction: column;justify-content: center;align-items: center;\">\n    <ion-spinner color=\"primary\" name=\"crescent\"></ion-spinner>\n  </div>\n  <div *ngIf=\"loaded\" class=\"main_content_div\">\n\n\n    <div class=\"card_div\">\n      <div class=\"resto_detail\">\n        <div class=\"back_image\"\n          [ngStyle]=\"{'background-image':'url('+api.mediaURL+userPic+'),url(assets/placeholder.jpg)'}\"></div>\n        <div style=\"margin-left: 10px;\">\n          <ion-label class=\"res_name\">{{userName}}</ion-label>\n          <ion-label class=\"res_location\">{{time}}</ion-label>\n        </div>\n      </div>\n    </div>\n\n    <ion-text color=\"primary\" class=\"ion-text-center\">\n      <p>{{util.translate('Información del repartidor')}}</p>\n    </ion-text>\n\n    <div class=\"card_div2\" *ngIf=\"driverMobile\">\n      <div class=\"personal_detail\">\n        <div style=\"display: flex;\">\n          <ion-icon name=\"call\"></ion-icon>&nbsp;&nbsp;\n          <ion-label class=\"res_name\">{{driverMobile}}</ion-label>\n        </div>\n        <div>\n          <ion-button (click)=\"driverCall()\" size=\"small\" fill=\"outline\">{{util.translate('Llamar')}}</ion-button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"line_div\"></div>\n\n\n    <ion-text color=\"primary\" class=\"ion-text-center\">\n      <p>{{util.translate('Información del cliente')}}</p>\n    </ion-text>\n    <div class=\"card_div2\" *ngIf=\"phone\">\n      <div class=\"personal_detail\">\n        <div style=\"display: flex;\">\n          <ion-icon name=\"call\"></ion-icon>&nbsp;&nbsp;\n          <ion-label class=\"res_name\">{{phone}}</ion-label>\n        </div>\n        <div>\n          <ion-button (click)=\"call()\" size=\"small\" fill=\"outline\">{{util.translate('Llamar')}}</ion-button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"line_div\"></div>\n\n    <div class=\"card_div2\" *ngIf=\"userEmail\">\n      <div class=\"personal_detail\">\n        <div style=\"display: flex;\">\n          <ion-icon name=\"mail\"></ion-icon>&nbsp;&nbsp;\n          <ion-label class=\"res_name\">{{userEmail}}</ion-label>\n        </div>\n        <div>\n          <ion-button (click)=\"email()\" size=\"small\" fill=\"outline\">{{util.translate('Correo')}}</ion-button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"line_div\"></div>\n\n    <div class=\"card_div2\">\n      <div class=\"personal_detail\">\n        <div style=\"display: flex;\">\n          <ion-icon name=\"location\"></ion-icon>&nbsp;&nbsp;\n          <ion-label class=\"res_name\">{{deliveryAddress}}</ion-label>\n        </div>\n      </div>\n    </div>\n\n    <span *ngFor=\"let item of orders\">\n\n      <div *ngFor=\"let subItems of item.selectedItem;let j = index\" class=\"subNames\">\n        <ion-label class=\"food_title\">\n          {{item.name}} X\n          {{item.selectedItem[j].total}}</ion-label>\n        <div *ngFor=\"let addods of subItems.item\" class=\"flex_titles\">\n          <p class=\"sub_name\">\n            - {{addods.name}}\n          </p>\n          <p class=\"sub_name\" *ngIf=\"util.cside ==='left'\">\n            {{util.currecny}} {{addods.value}}\n          </p>\n          <p class=\"sub_name\" *ngIf=\"util.cside ==='right'\">\n            {{addods.value}} {{util.currecny}}\n          </p>\n        </div>\n      </div>\n\n      <div class=\"card_div4\" *ngIf=\"!item.selectedItem || !item.selectedItem.length\">\n        <div class=\"flex_div\">\n          <ion-label class=\"food_title\">{{item.name}} X {{item.quantiy}} </ion-label>\n          <ion-label class=\"food_price\" *ngIf=\"util.cside ==='left'\">{{util.currecny}}{{item.quantiy * item.price}}\n          </ion-label>\n          <ion-label class=\"food_price\" *ngIf=\"util.cside ==='right'\">{{item.quantiy * item.price}} {{util.currecny}}\n          </ion-label>\n        </div>\n\n      </div>\n\n    </span>\n\n    <ion-label class=\"head_gray\">{{util.translate('Notas de la orden')}}</ion-label>\n    <ion-label class=\"small_lbl\">{{orderNotes}}</ion-label>\n    <div class=\"card_div2\">\n\n      <div class=\"order_detail\">\n        <ion-label class=\"small_lbl2\">{{util.translate('Productos')}}\n          <span class=\"prize1\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{total}}</span>\n          <span class=\"prize1\" *ngIf=\"util.cside ==='right'\">{{total}} {{util.currecny}}</span>\n        </ion-label>\n        <ion-label class=\"small_lbl2\">{{util.translate('Total')}}\n          <span class=\"prize1\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{grandTotal}}</span>\n          <span class=\"prize1\" *ngIf=\"util.cside ==='right'\">{{grandTotal}} {{util.currecny}}</span>\n        </ion-label>\n      </div>\n\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div class=\"btn_div\" *ngIf=\"status == 'creada'\">\n      <ion-button (click)=\"changeStatus('rechazada')\" size=\"small\" class=\"reject\">\n        {{util.translate('Rechazar')}}\n      </ion-button>\n      <ion-button (click)=\"changeStatus('aceptada')\" size=\"small\" class=\"accept\">\n        {{util.translate('Aceptar')}}\n      </ion-button>\n    </div>\n\n    <div class=\"status_div\" *ngIf=\"status == 'aceptada'\">\n      <div style=\"width: 200px;\">\n        <ion-select placeholder=\"Cambiar estado\" [(ngModel)]=\"changeStatusOrder\">\n          <ion-select-option value=\"en camino\">{{util.translate('En camino')}}</ion-select-option>\n          <ion-select-option value=\"cancelada\">{{util.translate('Cancelar')}}</ion-select-option>\n          <ion-select-option value=\"entregada\">{{util.translate('Entregda')}}</ion-select-option>\n        </ion-select>\n      </div>\n\n      <div>\n        <ion-button (click)=\"changeOrderStatus()\" size=\"small\">\n          {{util.translate('Actualizar estado')}}\n        </ion-button>\n      </div>\n    </div>\n\n    <ion-label class=\"green\" *ngIf=\"status == 'entregada'\">Orden entregada</ion-label>\n    <ion-label class=\"red\" *ngIf=\"status == 'cancel'\">{{util.translate('Orden cancelada por el usuario')}}</ion-label>\n  </ion-toolbar>\n</ion-footer>";
      /***/
    },

    /***/
    "t1E5":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/order-detail/order-detail-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: OrderDetailPageRoutingModule */

    /***/
    function t1E5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrderDetailPageRoutingModule", function () {
        return OrderDetailPageRoutingModule;
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


      var _order_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./order-detail.page */
      "E4co");
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
        component: _order_detail_page__WEBPACK_IMPORTED_MODULE_3__["OrderDetailPage"]
      }];

      var OrderDetailPageRoutingModule = function OrderDetailPageRoutingModule() {
        _classCallCheck(this, OrderDetailPageRoutingModule);
      };

      OrderDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OrderDetailPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-order-detail-order-detail-module-es5.js.map
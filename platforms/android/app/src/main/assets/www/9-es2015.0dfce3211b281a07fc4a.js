(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Xlj8:function(n,t,e){"use strict";e.r(t),e.d(t,"OrdersPageModule",function(){return nn});var i=e("ofXK"),c=e("3Pt+"),o=e("TEn/"),b=e("tyNb"),r=e("8RPc"),l=e("2Rin"),d=e("wd/R"),a=e("fXoL");function s(n,t){if(1&n&&(a.Ob(0,"h2",9),a.rc(1),a.Nb()),2&n){const n=a.Yb(2);a.Ab(1),a.sc(n.util.translate("No hay \xf3rdernes nuevas"))}}function g(n,t){1&n&&(a.Ob(0,"ion-item"),a.Ob(1,"ion-thumbnail",10),a.Mb(2,"ion-skeleton-text",11),a.Nb(),a.Ob(3,"ion-label"),a.Ob(4,"h3"),a.Mb(5,"ion-skeleton-text",12),a.Nb(),a.Ob(6,"p"),a.Mb(7,"ion-skeleton-text",13),a.Nb(),a.Ob(8,"p"),a.Mb(9,"ion-skeleton-text",14),a.Nb(),a.Nb(),a.Nb())}function u(n,t){1&n&&(a.Ob(0,"span"),a.rc(1,","),a.Nb())}function O(n,t){if(1&n&&(a.Ob(0,"div",28),a.rc(1),a.qc(2,u,2,0,"span",29),a.Nb()),2&n){const n=a.Yb(),t=n.$implicit,e=n.index,i=a.Yb().$implicit;a.Ab(1),a.uc(" ",t.name," X ",t.quantiy," "),a.Ab(1),a.ec("ngIf",e!=i.order.length)}}function _(n,t){if(1&n&&(a.Ob(0,"p",34),a.rc(1),a.Nb()),2&n){const n=a.Yb().$implicit,t=a.Yb(5);a.Ab(1),a.uc(" ",t.util.currecny," ",n.value," ")}}function m(n,t){if(1&n&&(a.Ob(0,"p",34),a.rc(1),a.Nb()),2&n){const n=a.Yb().$implicit,t=a.Yb(5);a.Ab(1),a.uc(" ",n.value," ",t.util.currecny," ")}}function f(n,t){if(1&n&&(a.Ob(0,"div",33),a.Ob(1,"p",34),a.rc(2),a.Nb(),a.qc(3,_,2,2,"p",35),a.qc(4,m,2,2,"p",35),a.Nb()),2&n){const n=t.$implicit,e=a.Yb(5);a.Ab(2),a.tc(" - ",n.name," "),a.Ab(1),a.ec("ngIf","left"===e.util.cside),a.Ab(1),a.ec("ngIf","right"===e.util.cside)}}function p(n,t){if(1&n&&(a.Ob(0,"div",30),a.Ob(1,"ion-label",31),a.rc(2),a.Nb(),a.qc(3,f,5,3,"div",32),a.Nb()),2&n){const n=t.$implicit,e=t.index,i=a.Yb().$implicit;a.Ab(2),a.uc("",i.name," X ",i.selectedItem[e].total," "),a.Ab(1),a.ec("ngForOf",n.item)}}function v(n,t){if(1&n&&(a.Ob(0,"span"),a.qc(1,O,3,3,"div",26),a.qc(2,p,4,3,"div",27),a.Nb()),2&n){const n=t.$implicit;a.Ab(1),a.ec("ngIf",!n.selectedItem||!n.selectedItem.length),a.Ab(1),a.ec("ngForOf",n.selectedItem)}}function N(n,t){if(1&n&&(a.Ob(0,"ion-label",24),a.rc(1),a.Nb()),2&n){const n=a.Yb().$implicit,t=a.Yb(2);a.Ab(1),a.uc("",t.util.currecny,"",n.grand_total," ")}}function h(n,t){if(1&n&&(a.Ob(0,"ion-label",24),a.rc(1),a.Nb()),2&n){const n=a.Yb().$implicit,t=a.Yb(2);a.Ab(1),a.uc("",n.grand_total," ",t.util.currecny," ")}}const M=function(n){return{"background-image":n}};function A(n,t){if(1&n){const n=a.Pb();a.Ob(0,"div",15),a.Wb("click",function(){a.mc(n);const e=t.$implicit;return a.Yb(2).goToOrderDetail(e.orderId)}),a.Ob(1,"div",16),a.Mb(2,"div",17),a.Ob(3,"div",18),a.Ob(4,"ion-label",19),a.rc(5),a.Nb(),a.Ob(6,"ion-label",20),a.rc(7),a.Nb(),a.Ob(8,"ion-label",19),a.rc(9),a.Nb(),a.Nb(),a.Nb(),a.Mb(10,"div",21),a.Ob(11,"div",22),a.Ob(12,"ion-label",23),a.rc(13),a.Nb(),a.Ob(14,"div",24),a.qc(15,v,3,2,"span",7),a.Nb(),a.Ob(16,"ion-label",23),a.rc(17),a.Nb(),a.Ob(18,"ion-label",24),a.rc(19),a.Nb(),a.Ob(20,"ion-label",23),a.rc(21),a.Nb(),a.qc(22,N,2,2,"ion-label",25),a.qc(23,h,2,2,"ion-label",25),a.Nb(),a.Nb()}if(2&n){const n=t.$implicit,e=a.Yb(2);a.Ab(2),a.ec("ngStyle",a.jc(12,M,"url("+e.api.mediaURL+n.user_cover+"),url(assets/placeholder.jpg)")),a.Ab(3),a.sc(n.user_first_name+" "+n.user_last_name),a.Ab(2),a.sc(n.time),a.Ab(2),a.uc("",e.util.translate("ID")," : #",n.orderId,""),a.Ab(4),a.sc(e.util.translate("Productos")),a.Ab(2),a.ec("ngForOf",n.order),a.Ab(2),a.sc(e.util.translate("Ordenado en")),a.Ab(2),a.tc("",n.time," "),a.Ab(2),a.sc(e.util.translate("Total")),a.Ab(1),a.ec("ngIf","left"===e.util.cside),a.Ab(1),a.ec("ngIf","right"===e.util.cside)}}function P(n,t){if(1&n&&(a.Ob(0,"div",5),a.qc(1,s,2,1,"h2",6),a.qc(2,g,10,0,"ion-item",7),a.qc(3,A,24,14,"div",8),a.Nb()),2&n){const n=a.Yb();a.Ab(1),a.ec("ngIf",!(null!=n.dummy&&n.dummy.length||null!=n.newOrders&&n.newOrders.length)),a.Ab(1),a.ec("ngForOf",n.dummy),a.Ab(1),a.ec("ngForOf",n.newOrders)}}function C(n,t){if(1&n&&(a.Ob(0,"h2",9),a.rc(1),a.Nb()),2&n){const n=a.Yb(2);a.Ab(1),a.sc(n.util.translate("No hay \xf3rdernes nuevas"))}}function x(n,t){1&n&&(a.Ob(0,"ion-item"),a.Ob(1,"ion-thumbnail",10),a.Mb(2,"ion-skeleton-text",11),a.Nb(),a.Ob(3,"ion-label"),a.Ob(4,"h3"),a.Mb(5,"ion-skeleton-text",12),a.Nb(),a.Ob(6,"p"),a.Mb(7,"ion-skeleton-text",13),a.Nb(),a.Ob(8,"p"),a.Mb(9,"ion-skeleton-text",14),a.Nb(),a.Nb(),a.Nb())}function I(n,t){1&n&&(a.Ob(0,"span"),a.rc(1,","),a.Nb())}function y(n,t){if(1&n&&(a.Ob(0,"div",28),a.rc(1),a.qc(2,I,2,0,"span",29),a.Nb()),2&n){const n=a.Yb(),t=n.$implicit,e=n.index,i=a.Yb().$implicit;a.Ab(1),a.uc(" ",t.name," X ",t.quantiy," "),a.Ab(1),a.ec("ngIf",e!=i.order.length)}}function Y(n,t){if(1&n&&(a.Ob(0,"p",34),a.rc(1),a.Nb()),2&n){const n=a.Yb().$implicit,t=a.Yb(5);a.Ab(1),a.uc(" ",t.util.currecny," ",n.value," ")}}function q(n,t){if(1&n&&(a.Ob(0,"p",34),a.rc(1),a.Nb()),2&n){const n=a.Yb().$implicit,t=a.Yb(5);a.Ab(1),a.uc(" ",n.value," ",t.util.currecny," ")}}function $(n,t){if(1&n&&(a.Ob(0,"div",33),a.Ob(1,"p",34),a.rc(2),a.Nb(),a.qc(3,Y,2,2,"p",35),a.qc(4,q,2,2,"p",35),a.Nb()),2&n){const n=t.$implicit,e=a.Yb(5);a.Ab(2),a.tc(" - ",n.name," "),a.Ab(1),a.ec("ngIf","left"===e.util.cside),a.Ab(1),a.ec("ngIf","right"===e.util.cside)}}function k(n,t){if(1&n&&(a.Ob(0,"div",30),a.Ob(1,"ion-label",31),a.rc(2),a.Nb(),a.qc(3,$,5,3,"div",32),a.Nb()),2&n){const n=t.$implicit,e=t.index,i=a.Yb().$implicit;a.Ab(2),a.uc("",i.name," X ",i.selectedItem[e].total," "),a.Ab(1),a.ec("ngForOf",n.item)}}function w(n,t){if(1&n&&(a.Ob(0,"span"),a.qc(1,y,3,3,"div",26),a.qc(2,k,4,3,"div",27),a.Nb()),2&n){const n=t.$implicit;a.Ab(1),a.ec("ngIf",!n.selectedItem||!n.selectedItem.length),a.Ab(1),a.ec("ngForOf",n.selectedItem)}}function F(n,t){if(1&n&&(a.Ob(0,"ion-label",24),a.rc(1),a.Nb()),2&n){const n=a.Yb().$implicit,t=a.Yb(2);a.Ab(1),a.uc("",t.util.currecny," ",n.grand_total," ")}}function j(n,t){if(1&n&&(a.Ob(0,"ion-label",24),a.rc(1),a.Nb()),2&n){const n=a.Yb().$implicit,t=a.Yb(2);a.Ab(1),a.uc("",n.grand_total," ",t.util.currecny," ")}}function z(n,t){if(1&n){const n=a.Pb();a.Ob(0,"div",15),a.Wb("click",function(){a.mc(n);const e=t.$implicit;return a.Yb(2).goToOrderDetail(e.orderId)}),a.Ob(1,"div",16),a.Mb(2,"div",17),a.Ob(3,"div",18),a.Ob(4,"ion-label",19),a.rc(5),a.Nb(),a.Ob(6,"ion-label",20),a.rc(7),a.Nb(),a.Ob(8,"ion-label",19),a.rc(9),a.Nb(),a.Nb(),a.Nb(),a.Mb(10,"div",21),a.Ob(11,"div",22),a.Ob(12,"ion-label",23),a.rc(13),a.Nb(),a.Ob(14,"div",24),a.qc(15,w,3,2,"span",7),a.Nb(),a.Ob(16,"ion-label",23),a.rc(17),a.Nb(),a.Ob(18,"ion-label",24),a.rc(19),a.Nb(),a.Ob(20,"ion-label",23),a.rc(21),a.Nb(),a.qc(22,F,2,2,"ion-label",25),a.qc(23,j,2,2,"ion-label",25),a.Nb(),a.Nb()}if(2&n){const n=t.$implicit,e=a.Yb(2);a.Ab(2),a.ec("ngStyle",a.jc(12,M,"url("+e.api.mediaURL+n.user_cover+"),url(assets/placeholder.jpg)")),a.Ab(3),a.sc(n.user_first_name+" "+n.user_last_name),a.Ab(2),a.sc(n.time),a.Ab(2),a.uc("",e.util.translate("ID")," : #",n.orderId,""),a.Ab(4),a.sc(e.util.translate("Productos")),a.Ab(2),a.ec("ngForOf",n.order),a.Ab(2),a.sc(e.util.translate("Ordenado en")),a.Ab(2),a.tc("",n.time," "),a.Ab(2),a.sc(e.util.translate("Total")),a.Ab(1),a.ec("ngIf","left"===e.util.cside),a.Ab(1),a.ec("ngIf","right"===e.util.cside)}}function D(n,t){if(1&n&&(a.Ob(0,"div",5),a.qc(1,C,2,1,"h2",6),a.qc(2,x,10,0,"ion-item",7),a.qc(3,z,24,14,"div",8),a.Nb()),2&n){const n=a.Yb();a.Ab(1),a.ec("ngIf",!(null!=n.dummy&&n.dummy.length||null!=n.onGoingOrders&&n.onGoingOrders.length)),a.Ab(1),a.ec("ngForOf",n.dummy),a.Ab(1),a.ec("ngForOf",n.onGoingOrders)}}function R(n,t){if(1&n&&(a.Ob(0,"h2",9),a.rc(1),a.Nb()),2&n){const n=a.Yb(2);a.Ab(1),a.sc(n.util.translate("No hay \xf3rdernes nuevas"))}}function X(n,t){1&n&&(a.Ob(0,"ion-item"),a.Ob(1,"ion-thumbnail",10),a.Mb(2,"ion-skeleton-text",11),a.Nb(),a.Ob(3,"ion-label"),a.Ob(4,"h3"),a.Mb(5,"ion-skeleton-text",12),a.Nb(),a.Ob(6,"p"),a.Mb(7,"ion-skeleton-text",13),a.Nb(),a.Ob(8,"p"),a.Mb(9,"ion-skeleton-text",14),a.Nb(),a.Nb(),a.Nb())}function T(n,t){1&n&&(a.Ob(0,"span"),a.rc(1,","),a.Nb())}function S(n,t){if(1&n&&(a.Ob(0,"div",28),a.rc(1),a.qc(2,T,2,0,"span",29),a.Nb()),2&n){const n=a.Yb(),t=n.$implicit,e=n.index,i=a.Yb().$implicit;a.Ab(1),a.uc(" ",t.name," X ",t.quantiy," "),a.Ab(1),a.ec("ngIf",e!=i.order.length)}}function W(n,t){if(1&n&&(a.Ob(0,"p",34),a.rc(1),a.Nb()),2&n){const n=a.Yb().$implicit,t=a.Yb(5);a.Ab(1),a.uc(" ",t.util.currecny," ",n.value," ")}}function L(n,t){if(1&n&&(a.Ob(0,"p",34),a.rc(1),a.Nb()),2&n){const n=a.Yb().$implicit,t=a.Yb(5);a.Ab(1),a.uc(" ",n.value," ",t.util.currecny," ")}}function G(n,t){if(1&n&&(a.Ob(0,"div",33),a.Ob(1,"p",34),a.rc(2),a.Nb(),a.qc(3,W,2,2,"p",35),a.qc(4,L,2,2,"p",35),a.Nb()),2&n){const n=t.$implicit,e=a.Yb(5);a.Ab(2),a.tc(" - ",n.name," "),a.Ab(1),a.ec("ngIf","left"===e.util.cside),a.Ab(1),a.ec("ngIf","right"===e.util.cside)}}function J(n,t){if(1&n&&(a.Ob(0,"div",30),a.Ob(1,"ion-label",31),a.rc(2),a.Nb(),a.qc(3,G,5,3,"div",32),a.Nb()),2&n){const n=t.$implicit,e=t.index,i=a.Yb().$implicit;a.Ab(2),a.uc("",i.name," X ",i.selectedItem[e].total," "),a.Ab(1),a.ec("ngForOf",n.item)}}function U(n,t){if(1&n&&(a.Ob(0,"span"),a.qc(1,S,3,3,"div",26),a.qc(2,J,4,3,"div",27),a.Nb()),2&n){const n=t.$implicit;a.Ab(1),a.ec("ngIf",!n.selectedItem||!n.selectedItem.length),a.Ab(1),a.ec("ngForOf",n.selectedItem)}}function E(n,t){if(1&n&&(a.Ob(0,"ion-label",24),a.rc(1),a.Nb()),2&n){const n=a.Yb().$implicit,t=a.Yb(2);a.Ab(1),a.uc("",t.util.currecny," ",n.grand_total," ")}}function B(n,t){if(1&n&&(a.Ob(0,"ion-label",24),a.rc(1),a.Nb()),2&n){const n=a.Yb().$implicit,t=a.Yb(2);a.Ab(1),a.uc("",n.grand_total," ",t.util.currecny," ")}}function K(n,t){if(1&n){const n=a.Pb();a.Ob(0,"div",15),a.Wb("click",function(){a.mc(n);const e=t.$implicit;return a.Yb(2).goToOrderDetail(e.orderId)}),a.Ob(1,"div",16),a.Mb(2,"div",17),a.Ob(3,"div",18),a.Ob(4,"ion-label",19),a.rc(5),a.Nb(),a.Ob(6,"ion-label",20),a.rc(7),a.Nb(),a.Ob(8,"ion-label",19),a.rc(9),a.Nb(),a.Nb(),a.Nb(),a.Mb(10,"div",21),a.Ob(11,"div",22),a.Ob(12,"ion-label",23),a.rc(13),a.Nb(),a.Ob(14,"div",24),a.qc(15,U,3,2,"span",7),a.Nb(),a.Ob(16,"ion-label",23),a.rc(17),a.Nb(),a.Ob(18,"ion-label",24),a.rc(19),a.Nb(),a.Ob(20,"ion-label",23),a.rc(21),a.Nb(),a.qc(22,E,2,2,"ion-label",25),a.qc(23,B,2,2,"ion-label",25),a.Nb(),a.Nb()}if(2&n){const n=t.$implicit,e=a.Yb(2);a.Ab(2),a.ec("ngStyle",a.jc(12,M,"url("+e.api.mediaURL+n.user_cover+"),url(assets/placeholder.jpg)")),a.Ab(3),a.sc(n.user_first_name+" "+n.user_last_name),a.Ab(2),a.sc(n.time),a.Ab(2),a.uc("",e.util.translate("ID")," : #",n.orderId,""),a.Ab(4),a.sc(e.util.translate("Productos")),a.Ab(2),a.ec("ngForOf",n.order),a.Ab(2),a.sc(e.util.translate("Ordenado en")),a.Ab(2),a.tc("",n.time," "),a.Ab(2),a.sc(e.util.translate("Total")),a.Ab(1),a.ec("ngIf","left"===e.util.cside),a.Ab(1),a.ec("ngIf","right"===e.util.cside)}}function H(n,t){if(1&n&&(a.Ob(0,"div",5),a.qc(1,R,2,1,"h2",6),a.qc(2,X,10,0,"ion-item",7),a.qc(3,K,24,14,"div",8),a.Nb()),2&n){const n=a.Yb();a.Ab(1),a.ec("ngIf",!(null!=n.dummy&&n.dummy.length||null!=n.oldOrders&&n.oldOrders.length)),a.Ab(1),a.ec("ngForOf",n.dummy),a.Ab(1),a.ec("ngForOf",n.oldOrders)}}const Q=[{path:"",component:(()=>{class n{constructor(n,t,e){this.api=n,this.util=t,this.router=e,this.seg_id=1,this.newOrders=[],this.onGoingOrders=[],this.oldOrders=[],this.dummy=Array(10),this.getOrders("",!1),this.util.getOrder().subscribe(n=>{this.getOrders("",!1)})}ngOnInit(){console.log("init")}doRefresh(n){this.getOrders(n,!0)}onClick(n){this.seg_id=n}goToOrderDetail(n){console.log(n),this.router.navigate(["/order-detail"],{queryParams:{id:n}})}getOrders(n,t){console.log(n),console.log(t);const e={id:localStorage.getItem("uid")};this.api.post("orders/getByStore",e).then(e=>{console.log(e),this.dummy=[],e&&200===e.status&&e.data&&(this.newOrders=[],this.onGoingOrders=[],this.oldOrders=[],e.data.forEach(n=>{n.order=JSON.parse(n.orders),n.time=d(n.time).format("llll"),"en camino"==n.status?this.onGoingOrders.push(n):"entregada"===n.status||"cancelada"===n.status||"rechazada"===n.status?this.oldOrders.push(n):this.newOrders.push(n)}),t&&n.target.complete())}).catch(n=>{console.log(n),this.dummy=[],this.util.errorToast(this.util.translate("Something went wrong"))})}}return n.\u0275fac=function(t){return new(t||n)(a.Lb(r.a),a.Lb(l.a),a.Lb(b.g))},n.\u0275cmp=a.Fb({type:n,selectors:[["app-orders"]],decls:16,vars:12,consts:[[1,"segment_div"],[3,"click"],["slot","fixed","pullFactor","0.5","pullMin","100","pullMax","200",3,"ionRefresh"],[1,"main_content_div"],["class","centent_div",4,"ngIf"],[1,"centent_div"],["class","ion-text-center",4,"ngIf"],[4,"ngFor","ngForOf"],["class","card_div",3,"click",4,"ngFor","ngForOf"],[1,"ion-text-center"],["slot","start"],["animated",""],["animated","",2,"width","50%"],["animated","",2,"width","80%"],["animated","",2,"width","60%"],[1,"card_div",3,"click"],[1,"resto_detail"],[1,"back_image",3,"ngStyle"],[2,"margin-left","10px"],[1,"res_name"],[1,"res_location"],[1,"line_div"],[1,"order_detail"],[1,"head_gray"],[1,"small_lbl"],["class","small_lbl",4,"ngIf"],["class","border_bottom",4,"ngIf"],["class","subNames",4,"ngFor","ngForOf"],[1,"border_bottom"],[4,"ngIf"],[1,"subNames"],[1,"food_title"],["class","flex_titles",4,"ngFor","ngForOf"],[1,"flex_titles"],[1,"sub_name"],["class","sub_name",4,"ngIf"]],template:function(n,t){1&n&&(a.Ob(0,"ion-header"),a.Ob(1,"ion-toolbar"),a.Ob(2,"div",0),a.Ob(3,"ion-label",1),a.Wb("click",function(){return t.onClick(1)}),a.rc(4),a.Nb(),a.Ob(5,"ion-label",1),a.Wb("click",function(){return t.onClick(2)}),a.rc(6),a.Nb(),a.Ob(7,"ion-label",1),a.Wb("click",function(){return t.onClick(3)}),a.rc(8),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Ob(9,"ion-content"),a.Ob(10,"ion-refresher",2),a.Wb("ionRefresh",function(n){return t.doRefresh(n)}),a.Mb(11,"ion-refresher-content"),a.Nb(),a.Ob(12,"div",3),a.qc(13,P,4,3,"div",4),a.qc(14,D,4,3,"div",4),a.qc(15,H,4,3,"div",4),a.Nb(),a.Nb()),2&n&&(a.Ab(3),a.Db("active",1==t.seg_id),a.Ab(1),a.sc(t.util.translate("Nuevas")),a.Ab(1),a.Db("active",2==t.seg_id),a.Ab(1),a.sc(t.util.translate("En camino")),a.Ab(1),a.Db("active",3==t.seg_id),a.Ab(1),a.sc(t.util.translate("Pasadas")),a.Ab(5),a.ec("ngIf",1==t.seg_id),a.Ab(1),a.ec("ngIf",2==t.seg_id),a.Ab(1),a.ec("ngIf",3==t.seg_id))},directives:[o.o,o.W,o.t,o.j,o.A,o.B,i.i,i.h,o.r,o.U,o.K,i.j],styles:[".segment_div[_ngcontent-%COMP%]{display:flex;margin-top:20px;border-bottom:1px solid #d3d3d3;justify-content:space-around}.segment_div[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:gray;padding-bottom:10px;width:100%;text-align:center}.segment_div[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{border-bottom:1px solid #00b3f0}.main_content_div[_ngcontent-%COMP%]{width:100%}.main_content_div[_ngcontent-%COMP%]   .centent_div[_ngcontent-%COMP%]{padding:20px}.main_content_div[_ngcontent-%COMP%]   .centent_div[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{display:block}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]{width:100%;box-shadow:0 1px 3px rgba(0,0,0,.2);border-radius:10px;padding:15px;margin-bottom:20px;border:.5px solid #d3d3d3}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .line_div[_ngcontent-%COMP%]{height:1px;width:100%;background:#d3d3d3;margin-top:10px;margin-bottom:10px}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;position:relative}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%]   .back_image[_ngcontent-%COMP%]{height:50px;width:50px;background-position:50%;background-size:cover;background-repeat:no-repeat;border-radius:100%}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%]   .res_name[_ngcontent-%COMP%]{font-weight:600;font-size:14px}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%]   .res_location[_ngcontent-%COMP%]{color:#d3d3d3;font-size:14px}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%]   .order_id[_ngcontent-%COMP%]{position:absolute;right:5px;font-size:.6rem}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%]   .order_id[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{text-align:right}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .head_gray[_ngcontent-%COMP%]{color:#d3d3d3;font-size:13px;margin-top:10px}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .small_lbl[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .border_bottom[_ngcontent-%COMP%]{border-bottom:1px dashed #d3d3d3;padding:5px 0;font-size:15px;font-weight:700}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .subNames[_ngcontent-%COMP%]{border-bottom:1px dashed #d3d3d3;padding-bottom:5px}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .subNames[_ngcontent-%COMP%]   .food_title[_ngcontent-%COMP%]{font-size:15px;font-weight:700}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .subNames[_ngcontent-%COMP%]   .flex_titles[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .subNames[_ngcontent-%COMP%]   .flex_titles[_ngcontent-%COMP%]   .sub_name[_ngcontent-%COMP%]{margin:0;color:#000;font-size:12px}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .prize[_ngcontent-%COMP%]{position:absolute;right:35px;font-weight:600!important}"]}),n})()}];let V=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=a.Jb({type:n}),n.\u0275inj=a.Ib({imports:[[b.i.forChild(Q)],b.i]}),n})();var Z=e("PCNd");let nn=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=a.Jb({type:n}),n.\u0275inj=a.Ib({imports:[[i.b,c.e,o.X,Z.a,V]]}),n})()}}]);
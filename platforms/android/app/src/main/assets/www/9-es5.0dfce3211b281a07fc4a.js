!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Xlj8:function(e,i,c){"use strict";c.r(i),c.d(i,"OrdersPageModule",function(){return rn});var o=c("ofXK"),r=c("3Pt+"),b=c("TEn/"),l=c("tyNb"),a=c("8RPc"),d=c("2Rin"),s=c("wd/R"),u=c("fXoL");function g(n,t){if(1&n&&(u.Ob(0,"h2",9),u.rc(1),u.Nb()),2&n){var e=u.Yb(2);u.Ab(1),u.sc(e.util.translate("No hay \xf3rdernes nuevas"))}}function O(n,t){1&n&&(u.Ob(0,"ion-item"),u.Ob(1,"ion-thumbnail",10),u.Mb(2,"ion-skeleton-text",11),u.Nb(),u.Ob(3,"ion-label"),u.Ob(4,"h3"),u.Mb(5,"ion-skeleton-text",12),u.Nb(),u.Ob(6,"p"),u.Mb(7,"ion-skeleton-text",13),u.Nb(),u.Ob(8,"p"),u.Mb(9,"ion-skeleton-text",14),u.Nb(),u.Nb(),u.Nb())}function _(n,t){1&n&&(u.Ob(0,"span"),u.rc(1,","),u.Nb())}function f(n,t){if(1&n&&(u.Ob(0,"div",28),u.rc(1),u.qc(2,_,2,0,"span",29),u.Nb()),2&n){var e=u.Yb(),i=e.$implicit,c=e.index,o=u.Yb().$implicit;u.Ab(1),u.uc(" ",i.name," X ",i.quantiy," "),u.Ab(1),u.ec("ngIf",c!=o.order.length)}}function m(n,t){if(1&n&&(u.Ob(0,"p",34),u.rc(1),u.Nb()),2&n){var e=u.Yb().$implicit,i=u.Yb(5);u.Ab(1),u.uc(" ",i.util.currecny," ",e.value," ")}}function v(n,t){if(1&n&&(u.Ob(0,"p",34),u.rc(1),u.Nb()),2&n){var e=u.Yb().$implicit,i=u.Yb(5);u.Ab(1),u.uc(" ",e.value," ",i.util.currecny," ")}}function p(n,t){if(1&n&&(u.Ob(0,"div",33),u.Ob(1,"p",34),u.rc(2),u.Nb(),u.qc(3,m,2,2,"p",35),u.qc(4,v,2,2,"p",35),u.Nb()),2&n){var e=t.$implicit,i=u.Yb(5);u.Ab(2),u.tc(" - ",e.name," "),u.Ab(1),u.ec("ngIf","left"===i.util.cside),u.Ab(1),u.ec("ngIf","right"===i.util.cside)}}function N(n,t){if(1&n&&(u.Ob(0,"div",30),u.Ob(1,"ion-label",31),u.rc(2),u.Nb(),u.qc(3,p,5,3,"div",32),u.Nb()),2&n){var e=t.$implicit,i=t.index,c=u.Yb().$implicit;u.Ab(2),u.uc("",c.name," X ",c.selectedItem[i].total," "),u.Ab(1),u.ec("ngForOf",e.item)}}function h(n,t){if(1&n&&(u.Ob(0,"span"),u.qc(1,f,3,3,"div",26),u.qc(2,N,4,3,"div",27),u.Nb()),2&n){var e=t.$implicit;u.Ab(1),u.ec("ngIf",!e.selectedItem||!e.selectedItem.length),u.Ab(1),u.ec("ngForOf",e.selectedItem)}}function M(n,t){if(1&n&&(u.Ob(0,"ion-label",24),u.rc(1),u.Nb()),2&n){var e=u.Yb().$implicit,i=u.Yb(2);u.Ab(1),u.uc("",i.util.currecny,"",e.grand_total," ")}}function A(n,t){if(1&n&&(u.Ob(0,"ion-label",24),u.rc(1),u.Nb()),2&n){var e=u.Yb().$implicit,i=u.Yb(2);u.Ab(1),u.uc("",e.grand_total," ",i.util.currecny," ")}}var P=function(n){return{"background-image":n}};function C(n,t){if(1&n){var e=u.Pb();u.Ob(0,"div",15),u.Wb("click",function(){u.mc(e);var n=t.$implicit;return u.Yb(2).goToOrderDetail(n.orderId)}),u.Ob(1,"div",16),u.Mb(2,"div",17),u.Ob(3,"div",18),u.Ob(4,"ion-label",19),u.rc(5),u.Nb(),u.Ob(6,"ion-label",20),u.rc(7),u.Nb(),u.Ob(8,"ion-label",19),u.rc(9),u.Nb(),u.Nb(),u.Nb(),u.Mb(10,"div",21),u.Ob(11,"div",22),u.Ob(12,"ion-label",23),u.rc(13),u.Nb(),u.Ob(14,"div",24),u.qc(15,h,3,2,"span",7),u.Nb(),u.Ob(16,"ion-label",23),u.rc(17),u.Nb(),u.Ob(18,"ion-label",24),u.rc(19),u.Nb(),u.Ob(20,"ion-label",23),u.rc(21),u.Nb(),u.qc(22,M,2,2,"ion-label",25),u.qc(23,A,2,2,"ion-label",25),u.Nb(),u.Nb()}if(2&n){var i=t.$implicit,c=u.Yb(2);u.Ab(2),u.ec("ngStyle",u.jc(12,P,"url("+c.api.mediaURL+i.user_cover+"),url(assets/placeholder.jpg)")),u.Ab(3),u.sc(i.user_first_name+" "+i.user_last_name),u.Ab(2),u.sc(i.time),u.Ab(2),u.uc("",c.util.translate("ID")," : #",i.orderId,""),u.Ab(4),u.sc(c.util.translate("Productos")),u.Ab(2),u.ec("ngForOf",i.order),u.Ab(2),u.sc(c.util.translate("Ordenado en")),u.Ab(2),u.tc("",i.time," "),u.Ab(2),u.sc(c.util.translate("Total")),u.Ab(1),u.ec("ngIf","left"===c.util.cside),u.Ab(1),u.ec("ngIf","right"===c.util.cside)}}function x(n,t){if(1&n&&(u.Ob(0,"div",5),u.qc(1,g,2,1,"h2",6),u.qc(2,O,10,0,"ion-item",7),u.qc(3,C,24,14,"div",8),u.Nb()),2&n){var e=u.Yb();u.Ab(1),u.ec("ngIf",!(null!=e.dummy&&e.dummy.length||null!=e.newOrders&&e.newOrders.length)),u.Ab(1),u.ec("ngForOf",e.dummy),u.Ab(1),u.ec("ngForOf",e.newOrders)}}function y(n,t){if(1&n&&(u.Ob(0,"h2",9),u.rc(1),u.Nb()),2&n){var e=u.Yb(2);u.Ab(1),u.sc(e.util.translate("No hay \xf3rdernes nuevas"))}}function I(n,t){1&n&&(u.Ob(0,"ion-item"),u.Ob(1,"ion-thumbnail",10),u.Mb(2,"ion-skeleton-text",11),u.Nb(),u.Ob(3,"ion-label"),u.Ob(4,"h3"),u.Mb(5,"ion-skeleton-text",12),u.Nb(),u.Ob(6,"p"),u.Mb(7,"ion-skeleton-text",13),u.Nb(),u.Ob(8,"p"),u.Mb(9,"ion-skeleton-text",14),u.Nb(),u.Nb(),u.Nb())}function Y(n,t){1&n&&(u.Ob(0,"span"),u.rc(1,","),u.Nb())}function q(n,t){if(1&n&&(u.Ob(0,"div",28),u.rc(1),u.qc(2,Y,2,0,"span",29),u.Nb()),2&n){var e=u.Yb(),i=e.$implicit,c=e.index,o=u.Yb().$implicit;u.Ab(1),u.uc(" ",i.name," X ",i.quantiy," "),u.Ab(1),u.ec("ngIf",c!=o.order.length)}}function k(n,t){if(1&n&&(u.Ob(0,"p",34),u.rc(1),u.Nb()),2&n){var e=u.Yb().$implicit,i=u.Yb(5);u.Ab(1),u.uc(" ",i.util.currecny," ",e.value," ")}}function w(n,t){if(1&n&&(u.Ob(0,"p",34),u.rc(1),u.Nb()),2&n){var e=u.Yb().$implicit,i=u.Yb(5);u.Ab(1),u.uc(" ",e.value," ",i.util.currecny," ")}}function $(n,t){if(1&n&&(u.Ob(0,"div",33),u.Ob(1,"p",34),u.rc(2),u.Nb(),u.qc(3,k,2,2,"p",35),u.qc(4,w,2,2,"p",35),u.Nb()),2&n){var e=t.$implicit,i=u.Yb(5);u.Ab(2),u.tc(" - ",e.name," "),u.Ab(1),u.ec("ngIf","left"===i.util.cside),u.Ab(1),u.ec("ngIf","right"===i.util.cside)}}function F(n,t){if(1&n&&(u.Ob(0,"div",30),u.Ob(1,"ion-label",31),u.rc(2),u.Nb(),u.qc(3,$,5,3,"div",32),u.Nb()),2&n){var e=t.$implicit,i=t.index,c=u.Yb().$implicit;u.Ab(2),u.uc("",c.name," X ",c.selectedItem[i].total," "),u.Ab(1),u.ec("ngForOf",e.item)}}function j(n,t){if(1&n&&(u.Ob(0,"span"),u.qc(1,q,3,3,"div",26),u.qc(2,F,4,3,"div",27),u.Nb()),2&n){var e=t.$implicit;u.Ab(1),u.ec("ngIf",!e.selectedItem||!e.selectedItem.length),u.Ab(1),u.ec("ngForOf",e.selectedItem)}}function z(n,t){if(1&n&&(u.Ob(0,"ion-label",24),u.rc(1),u.Nb()),2&n){var e=u.Yb().$implicit,i=u.Yb(2);u.Ab(1),u.uc("",i.util.currecny," ",e.grand_total," ")}}function D(n,t){if(1&n&&(u.Ob(0,"ion-label",24),u.rc(1),u.Nb()),2&n){var e=u.Yb().$implicit,i=u.Yb(2);u.Ab(1),u.uc("",e.grand_total," ",i.util.currecny," ")}}function R(n,t){if(1&n){var e=u.Pb();u.Ob(0,"div",15),u.Wb("click",function(){u.mc(e);var n=t.$implicit;return u.Yb(2).goToOrderDetail(n.orderId)}),u.Ob(1,"div",16),u.Mb(2,"div",17),u.Ob(3,"div",18),u.Ob(4,"ion-label",19),u.rc(5),u.Nb(),u.Ob(6,"ion-label",20),u.rc(7),u.Nb(),u.Ob(8,"ion-label",19),u.rc(9),u.Nb(),u.Nb(),u.Nb(),u.Mb(10,"div",21),u.Ob(11,"div",22),u.Ob(12,"ion-label",23),u.rc(13),u.Nb(),u.Ob(14,"div",24),u.qc(15,j,3,2,"span",7),u.Nb(),u.Ob(16,"ion-label",23),u.rc(17),u.Nb(),u.Ob(18,"ion-label",24),u.rc(19),u.Nb(),u.Ob(20,"ion-label",23),u.rc(21),u.Nb(),u.qc(22,z,2,2,"ion-label",25),u.qc(23,D,2,2,"ion-label",25),u.Nb(),u.Nb()}if(2&n){var i=t.$implicit,c=u.Yb(2);u.Ab(2),u.ec("ngStyle",u.jc(12,P,"url("+c.api.mediaURL+i.user_cover+"),url(assets/placeholder.jpg)")),u.Ab(3),u.sc(i.user_first_name+" "+i.user_last_name),u.Ab(2),u.sc(i.time),u.Ab(2),u.uc("",c.util.translate("ID")," : #",i.orderId,""),u.Ab(4),u.sc(c.util.translate("Productos")),u.Ab(2),u.ec("ngForOf",i.order),u.Ab(2),u.sc(c.util.translate("Ordenado en")),u.Ab(2),u.tc("",i.time," "),u.Ab(2),u.sc(c.util.translate("Total")),u.Ab(1),u.ec("ngIf","left"===c.util.cside),u.Ab(1),u.ec("ngIf","right"===c.util.cside)}}function T(n,t){if(1&n&&(u.Ob(0,"div",5),u.qc(1,y,2,1,"h2",6),u.qc(2,I,10,0,"ion-item",7),u.qc(3,R,24,14,"div",8),u.Nb()),2&n){var e=u.Yb();u.Ab(1),u.ec("ngIf",!(null!=e.dummy&&e.dummy.length||null!=e.onGoingOrders&&e.onGoingOrders.length)),u.Ab(1),u.ec("ngForOf",e.dummy),u.Ab(1),u.ec("ngForOf",e.onGoingOrders)}}function X(n,t){if(1&n&&(u.Ob(0,"h2",9),u.rc(1),u.Nb()),2&n){var e=u.Yb(2);u.Ab(1),u.sc(e.util.translate("No hay \xf3rdernes nuevas"))}}function S(n,t){1&n&&(u.Ob(0,"ion-item"),u.Ob(1,"ion-thumbnail",10),u.Mb(2,"ion-skeleton-text",11),u.Nb(),u.Ob(3,"ion-label"),u.Ob(4,"h3"),u.Mb(5,"ion-skeleton-text",12),u.Nb(),u.Ob(6,"p"),u.Mb(7,"ion-skeleton-text",13),u.Nb(),u.Ob(8,"p"),u.Mb(9,"ion-skeleton-text",14),u.Nb(),u.Nb(),u.Nb())}function W(n,t){1&n&&(u.Ob(0,"span"),u.rc(1,","),u.Nb())}function L(n,t){if(1&n&&(u.Ob(0,"div",28),u.rc(1),u.qc(2,W,2,0,"span",29),u.Nb()),2&n){var e=u.Yb(),i=e.$implicit,c=e.index,o=u.Yb().$implicit;u.Ab(1),u.uc(" ",i.name," X ",i.quantiy," "),u.Ab(1),u.ec("ngIf",c!=o.order.length)}}function G(n,t){if(1&n&&(u.Ob(0,"p",34),u.rc(1),u.Nb()),2&n){var e=u.Yb().$implicit,i=u.Yb(5);u.Ab(1),u.uc(" ",i.util.currecny," ",e.value," ")}}function J(n,t){if(1&n&&(u.Ob(0,"p",34),u.rc(1),u.Nb()),2&n){var e=u.Yb().$implicit,i=u.Yb(5);u.Ab(1),u.uc(" ",e.value," ",i.util.currecny," ")}}function E(n,t){if(1&n&&(u.Ob(0,"div",33),u.Ob(1,"p",34),u.rc(2),u.Nb(),u.qc(3,G,2,2,"p",35),u.qc(4,J,2,2,"p",35),u.Nb()),2&n){var e=t.$implicit,i=u.Yb(5);u.Ab(2),u.tc(" - ",e.name," "),u.Ab(1),u.ec("ngIf","left"===i.util.cside),u.Ab(1),u.ec("ngIf","right"===i.util.cside)}}function U(n,t){if(1&n&&(u.Ob(0,"div",30),u.Ob(1,"ion-label",31),u.rc(2),u.Nb(),u.qc(3,E,5,3,"div",32),u.Nb()),2&n){var e=t.$implicit,i=t.index,c=u.Yb().$implicit;u.Ab(2),u.uc("",c.name," X ",c.selectedItem[i].total," "),u.Ab(1),u.ec("ngForOf",e.item)}}function B(n,t){if(1&n&&(u.Ob(0,"span"),u.qc(1,L,3,3,"div",26),u.qc(2,U,4,3,"div",27),u.Nb()),2&n){var e=t.$implicit;u.Ab(1),u.ec("ngIf",!e.selectedItem||!e.selectedItem.length),u.Ab(1),u.ec("ngForOf",e.selectedItem)}}function K(n,t){if(1&n&&(u.Ob(0,"ion-label",24),u.rc(1),u.Nb()),2&n){var e=u.Yb().$implicit,i=u.Yb(2);u.Ab(1),u.uc("",i.util.currecny," ",e.grand_total," ")}}function H(n,t){if(1&n&&(u.Ob(0,"ion-label",24),u.rc(1),u.Nb()),2&n){var e=u.Yb().$implicit,i=u.Yb(2);u.Ab(1),u.uc("",e.grand_total," ",i.util.currecny," ")}}function Q(n,t){if(1&n){var e=u.Pb();u.Ob(0,"div",15),u.Wb("click",function(){u.mc(e);var n=t.$implicit;return u.Yb(2).goToOrderDetail(n.orderId)}),u.Ob(1,"div",16),u.Mb(2,"div",17),u.Ob(3,"div",18),u.Ob(4,"ion-label",19),u.rc(5),u.Nb(),u.Ob(6,"ion-label",20),u.rc(7),u.Nb(),u.Ob(8,"ion-label",19),u.rc(9),u.Nb(),u.Nb(),u.Nb(),u.Mb(10,"div",21),u.Ob(11,"div",22),u.Ob(12,"ion-label",23),u.rc(13),u.Nb(),u.Ob(14,"div",24),u.qc(15,B,3,2,"span",7),u.Nb(),u.Ob(16,"ion-label",23),u.rc(17),u.Nb(),u.Ob(18,"ion-label",24),u.rc(19),u.Nb(),u.Ob(20,"ion-label",23),u.rc(21),u.Nb(),u.qc(22,K,2,2,"ion-label",25),u.qc(23,H,2,2,"ion-label",25),u.Nb(),u.Nb()}if(2&n){var i=t.$implicit,c=u.Yb(2);u.Ab(2),u.ec("ngStyle",u.jc(12,P,"url("+c.api.mediaURL+i.user_cover+"),url(assets/placeholder.jpg)")),u.Ab(3),u.sc(i.user_first_name+" "+i.user_last_name),u.Ab(2),u.sc(i.time),u.Ab(2),u.uc("",c.util.translate("ID")," : #",i.orderId,""),u.Ab(4),u.sc(c.util.translate("Productos")),u.Ab(2),u.ec("ngForOf",i.order),u.Ab(2),u.sc(c.util.translate("Ordenado en")),u.Ab(2),u.tc("",i.time," "),u.Ab(2),u.sc(c.util.translate("Total")),u.Ab(1),u.ec("ngIf","left"===c.util.cside),u.Ab(1),u.ec("ngIf","right"===c.util.cside)}}function V(n,t){if(1&n&&(u.Ob(0,"div",5),u.qc(1,X,2,1,"h2",6),u.qc(2,S,10,0,"ion-item",7),u.qc(3,Q,24,14,"div",8),u.Nb()),2&n){var e=u.Yb();u.Ab(1),u.ec("ngIf",!(null!=e.dummy&&e.dummy.length||null!=e.oldOrders&&e.oldOrders.length)),u.Ab(1),u.ec("ngForOf",e.dummy),u.Ab(1),u.ec("ngForOf",e.oldOrders)}}var Z,nn,tn,en=[{path:"",component:(Z=function(){function e(t,i,c){var o=this;n(this,e),this.api=t,this.util=i,this.router=c,this.seg_id=1,this.newOrders=[],this.onGoingOrders=[],this.oldOrders=[],this.dummy=Array(10),this.getOrders("",!1),this.util.getOrder().subscribe(function(n){o.getOrders("",!1)})}var i,c,o;return i=e,(c=[{key:"ngOnInit",value:function(){console.log("init")}},{key:"doRefresh",value:function(n){this.getOrders(n,!0)}},{key:"onClick",value:function(n){this.seg_id=n}},{key:"goToOrderDetail",value:function(n){console.log(n),this.router.navigate(["/order-detail"],{queryParams:{id:n}})}},{key:"getOrders",value:function(n,t){var e=this;console.log(n),console.log(t);var i={id:localStorage.getItem("uid")};this.api.post("orders/getByStore",i).then(function(i){console.log(i),e.dummy=[],i&&200===i.status&&i.data&&(e.newOrders=[],e.onGoingOrders=[],e.oldOrders=[],i.data.forEach(function(n){n.order=JSON.parse(n.orders),n.time=s(n.time).format("llll"),"en camino"==n.status?e.onGoingOrders.push(n):"entregada"===n.status||"cancelada"===n.status||"rechazada"===n.status?e.oldOrders.push(n):e.newOrders.push(n)}),t&&n.target.complete())}).catch(function(n){console.log(n),e.dummy=[],e.util.errorToast(e.util.translate("Something went wrong"))})}}])&&t(i.prototype,c),o&&t(i,o),e}(),Z.\u0275fac=function(n){return new(n||Z)(u.Lb(a.a),u.Lb(d.a),u.Lb(l.g))},Z.\u0275cmp=u.Fb({type:Z,selectors:[["app-orders"]],decls:16,vars:12,consts:[[1,"segment_div"],[3,"click"],["slot","fixed","pullFactor","0.5","pullMin","100","pullMax","200",3,"ionRefresh"],[1,"main_content_div"],["class","centent_div",4,"ngIf"],[1,"centent_div"],["class","ion-text-center",4,"ngIf"],[4,"ngFor","ngForOf"],["class","card_div",3,"click",4,"ngFor","ngForOf"],[1,"ion-text-center"],["slot","start"],["animated",""],["animated","",2,"width","50%"],["animated","",2,"width","80%"],["animated","",2,"width","60%"],[1,"card_div",3,"click"],[1,"resto_detail"],[1,"back_image",3,"ngStyle"],[2,"margin-left","10px"],[1,"res_name"],[1,"res_location"],[1,"line_div"],[1,"order_detail"],[1,"head_gray"],[1,"small_lbl"],["class","small_lbl",4,"ngIf"],["class","border_bottom",4,"ngIf"],["class","subNames",4,"ngFor","ngForOf"],[1,"border_bottom"],[4,"ngIf"],[1,"subNames"],[1,"food_title"],["class","flex_titles",4,"ngFor","ngForOf"],[1,"flex_titles"],[1,"sub_name"],["class","sub_name",4,"ngIf"]],template:function(n,t){1&n&&(u.Ob(0,"ion-header"),u.Ob(1,"ion-toolbar"),u.Ob(2,"div",0),u.Ob(3,"ion-label",1),u.Wb("click",function(){return t.onClick(1)}),u.rc(4),u.Nb(),u.Ob(5,"ion-label",1),u.Wb("click",function(){return t.onClick(2)}),u.rc(6),u.Nb(),u.Ob(7,"ion-label",1),u.Wb("click",function(){return t.onClick(3)}),u.rc(8),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Ob(9,"ion-content"),u.Ob(10,"ion-refresher",2),u.Wb("ionRefresh",function(n){return t.doRefresh(n)}),u.Mb(11,"ion-refresher-content"),u.Nb(),u.Ob(12,"div",3),u.qc(13,x,4,3,"div",4),u.qc(14,T,4,3,"div",4),u.qc(15,V,4,3,"div",4),u.Nb(),u.Nb()),2&n&&(u.Ab(3),u.Db("active",1==t.seg_id),u.Ab(1),u.sc(t.util.translate("Nuevas")),u.Ab(1),u.Db("active",2==t.seg_id),u.Ab(1),u.sc(t.util.translate("En camino")),u.Ab(1),u.Db("active",3==t.seg_id),u.Ab(1),u.sc(t.util.translate("Pasadas")),u.Ab(5),u.ec("ngIf",1==t.seg_id),u.Ab(1),u.ec("ngIf",2==t.seg_id),u.Ab(1),u.ec("ngIf",3==t.seg_id))},directives:[b.o,b.W,b.t,b.j,b.A,b.B,o.i,o.h,b.r,b.U,b.K,o.j],styles:[".segment_div[_ngcontent-%COMP%]{display:flex;margin-top:20px;border-bottom:1px solid #d3d3d3;justify-content:space-around}.segment_div[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{color:gray;padding-bottom:10px;width:100%;text-align:center}.segment_div[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{border-bottom:1px solid #00b3f0}.main_content_div[_ngcontent-%COMP%]{width:100%}.main_content_div[_ngcontent-%COMP%]   .centent_div[_ngcontent-%COMP%]{padding:20px}.main_content_div[_ngcontent-%COMP%]   .centent_div[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{display:block}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]{width:100%;box-shadow:0 1px 3px rgba(0,0,0,.2);border-radius:10px;padding:15px;margin-bottom:20px;border:.5px solid #d3d3d3}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .line_div[_ngcontent-%COMP%]{height:1px;width:100%;background:#d3d3d3;margin-top:10px;margin-bottom:10px}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;position:relative}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%]   .back_image[_ngcontent-%COMP%]{height:50px;width:50px;background-position:50%;background-size:cover;background-repeat:no-repeat;border-radius:100%}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%]   .res_name[_ngcontent-%COMP%]{font-weight:600;font-size:14px}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%]   .res_location[_ngcontent-%COMP%]{color:#d3d3d3;font-size:14px}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%]   .order_id[_ngcontent-%COMP%]{position:absolute;right:5px;font-size:.6rem}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%]   .order_id[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{text-align:right}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .head_gray[_ngcontent-%COMP%]{color:#d3d3d3;font-size:13px;margin-top:10px}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .small_lbl[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .border_bottom[_ngcontent-%COMP%]{border-bottom:1px dashed #d3d3d3;padding:5px 0;font-size:15px;font-weight:700}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .subNames[_ngcontent-%COMP%]{border-bottom:1px dashed #d3d3d3;padding-bottom:5px}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .subNames[_ngcontent-%COMP%]   .food_title[_ngcontent-%COMP%]{font-size:15px;font-weight:700}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .subNames[_ngcontent-%COMP%]   .flex_titles[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .subNames[_ngcontent-%COMP%]   .flex_titles[_ngcontent-%COMP%]   .sub_name[_ngcontent-%COMP%]{margin:0;color:#000;font-size:12px}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .prize[_ngcontent-%COMP%]{position:absolute;right:35px;font-weight:600!important}"]}),Z)}],cn=((nn=function t(){n(this,t)}).\u0275fac=function(n){return new(n||nn)},nn.\u0275mod=u.Jb({type:nn}),nn.\u0275inj=u.Ib({imports:[[l.i.forChild(en)],l.i]}),nn),on=c("PCNd"),rn=((tn=function t(){n(this,t)}).\u0275fac=function(n){return new(n||tn)},tn.\u0275mod=u.Jb({type:tn}),tn.\u0275inj=u.Ib({imports:[[o.b,r.e,b.X,on.a,cn]]}),tn)}}])}();
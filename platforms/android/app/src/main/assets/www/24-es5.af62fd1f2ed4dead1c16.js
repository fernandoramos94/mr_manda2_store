!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"6RTz":function(e,o,i){"use strict";i.r(o),i.d(o,"HelpPageModule",function(){return O});var c=i("ofXK"),a=i("3Pt+"),r=i("TEn/"),b=i("tyNb"),u=i("2Rin"),l=i("8RPc"),s=i("fXoL");function f(n,t){1&n&&(s.Ob(0,"div"),s.Ob(1,"h3"),s.Mb(2,"ion-skeleton-text",10),s.Nb(),s.Ob(3,"p"),s.Mb(4,"ion-skeleton-text",11),s.Nb(),s.Ob(5,"p"),s.Mb(6,"ion-skeleton-text",12),s.Nb(),s.Ob(7,"h3"),s.Mb(8,"ion-skeleton-text",10),s.Nb(),s.Nb())}var d=function(){return[1,2,3,4,5,6,7,8]};function p(n,t){1&n&&(s.Ob(0,"div"),s.qc(1,f,9,0,"div",9),s.Nb()),2&n&&(s.Ab(1),s.ec("ngForOf",s.ic(1,d)))}function h(n,t){if(1&n&&s.Mb(0,"p",13),2&n){var e=s.Yb();s.ec("innerHTML",e.getContent(),s.nc)}}var g,v,m,k=[{path:"",component:(g=function(){function e(t,o,i){var c=this;n(this,e),this.util=t,this.api=o,this.navCtrl=i,this.loaded=!1,this.api.post("pages/getById",{id:6}).then(function(n){console.log(n),c.loaded=!0,n&&200===n.status&&n.data.length>0&&(c.content=n.data[0].content)},function(n){console.log(n),c.loaded=!0,c.util.errorToast(c.util.translate("Something went wrong"))})}var o,i,c;return o=e,(i=[{key:"ngOnInit",value:function(){}},{key:"getContent",value:function(){return this.content}},{key:"back",value:function(){this.navCtrl.back()}},{key:"openMenu",value:function(){this.util.openMenu()}}])&&t(o.prototype,i),c&&t(o,c),e}(),g.\u0275fac=function(n){return new(n||g)(s.Lb(u.a),s.Lb(l.a),s.Lb(r.cb))},g.\u0275cmp=s.Fb({type:g,selectors:[["app-help"]],decls:13,vars:3,consts:[["color","primary"],["slot","start"],[3,"click"],["slot","icon-only","name","arrow-back"],["slot","end"],["src","assets/sidemenu/menu_light.png","alt","",1,"menuIcon"],[1,"ion-padding"],[4,"ngIf"],[3,"innerHTML",4,"ngIf"],[4,"ngFor","ngForOf"],["animated","",2,"width","100%"],["animated","",2,"width","80%"],["animated","",2,"width","60%"],[3,"innerHTML"]],template:function(n,t){1&n&&(s.Ob(0,"ion-header"),s.Ob(1,"ion-toolbar",0),s.Ob(2,"ion-buttons",1),s.Ob(3,"ion-button",2),s.Wb("click",function(){return t.back()}),s.Mb(4,"ion-icon",3),s.Nb(),s.Nb(),s.Ob(5,"ion-title"),s.rc(6),s.Nb(),s.Ob(7,"ion-buttons",4),s.Ob(8,"ion-button",2),s.Wb("click",function(){return t.openMenu()}),s.Mb(9,"img",5),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Ob(10,"ion-content",6),s.qc(11,p,2,2,"div",7),s.qc(12,h,1,1,"p",8),s.Nb()),2&n&&(s.Ab(6),s.tc("",t.util.translate("Help")," "),s.Ab(5),s.ec("ngIf",!t.loaded),s.Ab(1),s.ec("ngIf",t.loaded))},directives:[r.o,r.W,r.g,r.f,r.p,r.V,r.j,c.i,c.h,r.K],styles:[""]}),g)}],w=((m=function t(){n(this,t)}).\u0275fac=function(n){return new(n||m)},m.\u0275mod=s.Jb({type:m}),m.\u0275inj=s.Ib({imports:[[b.i.forChild(k)],b.i]}),m),O=((v=function t(){n(this,t)}).\u0275fac=function(n){return new(n||v)},v.\u0275mod=s.Jb({type:v}),v.\u0275inj=s.Ib({imports:[[c.b,a.e,r.X,w]]}),v)}}])}();
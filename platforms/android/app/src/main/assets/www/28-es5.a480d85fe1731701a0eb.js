!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"982l":function(n,i,r){"use strict";r.r(i),r.d(i,"OrderDetailPageModule",function(){return K});var a=r("ofXK"),o=r("3Pt+"),c=r("TEn/"),s=r("tyNb"),l=r("mrSG"),d=r("8RPc"),u=r("2Rin"),b=r("PSD3"),p=r.n(b),g=r("ERed"),f=r("METt"),h=r("wd/R"),_=r("m/P+"),v=r("fXoL");function m(t,e){1&t&&(v.Ob(0,"div",10),v.Mb(1,"ion-spinner",11),v.Nb())}function O(t,e){if(1&t){var n=v.Pb();v.Ob(0,"div",22),v.Ob(1,"div",23),v.Ob(2,"div",24),v.Mb(3,"ion-icon",32),v.rc(4,"\xa0\xa0 "),v.Ob(5,"ion-label",17),v.rc(6),v.Nb(),v.Nb(),v.Ob(7,"div"),v.Ob(8,"ion-button",33),v.Wb("click",function(){return v.mc(n),v.Yb(2).driverCall()}),v.rc(9),v.Nb(),v.Nb(),v.Nb(),v.Nb()}if(2&t){var i=v.Yb(2);v.Ab(6),v.sc(i.driverMobile),v.Ab(3),v.sc(i.util.translate("Llamar"))}}function M(t,e){if(1&t){var n=v.Pb();v.Ob(0,"div",22),v.Ob(1,"div",23),v.Ob(2,"div",24),v.Mb(3,"ion-icon",32),v.rc(4,"\xa0\xa0 "),v.Ob(5,"ion-label",17),v.rc(6),v.Nb(),v.Nb(),v.Ob(7,"div"),v.Ob(8,"ion-button",33),v.Wb("click",function(){return v.mc(n),v.Yb(2).call()}),v.rc(9),v.Nb(),v.Nb(),v.Nb(),v.Nb()}if(2&t){var i=v.Yb(2);v.Ab(6),v.sc(i.phone),v.Ab(3),v.sc(i.util.translate("Llamar"))}}function C(t,e){if(1&t){var n=v.Pb();v.Ob(0,"div",22),v.Ob(1,"div",23),v.Ob(2,"div",24),v.Mb(3,"ion-icon",34),v.rc(4,"\xa0\xa0 "),v.Ob(5,"ion-label",17),v.rc(6),v.Nb(),v.Nb(),v.Ob(7,"div"),v.Ob(8,"ion-button",33),v.Wb("click",function(){return v.mc(n),v.Yb(2).email()}),v.rc(9),v.Nb(),v.Nb(),v.Nb(),v.Nb()}if(2&t){var i=v.Yb(2);v.Ab(6),v.sc(i.userEmail),v.Ab(3),v.sc(i.util.translate("Correo"))}}function P(t,e){if(1&t&&(v.Ob(0,"p",41),v.rc(1),v.Nb()),2&t){var n=v.Yb().$implicit,i=v.Yb(4);v.Ab(1),v.uc(" ",i.util.currecny," ",n.value," ")}}function y(t,e){if(1&t&&(v.Ob(0,"p",41),v.rc(1),v.Nb()),2&t){var n=v.Yb().$implicit,i=v.Yb(4);v.Ab(1),v.uc(" ",n.value," ",i.util.currecny," ")}}function x(t,e){if(1&t&&(v.Ob(0,"div",40),v.Ob(1,"p",41),v.rc(2),v.Nb(),v.qc(3,P,2,2,"p",42),v.qc(4,y,2,2,"p",42),v.Nb()),2&t){var n=e.$implicit,i=v.Yb(4);v.Ab(2),v.tc(" - ",n.name," "),v.Ab(1),v.ec("ngIf","left"===i.util.cside),v.Ab(1),v.ec("ngIf","right"===i.util.cside)}}function N(t,e){if(1&t&&(v.Ob(0,"div",37),v.Ob(1,"ion-label",38),v.rc(2),v.Nb(),v.qc(3,x,5,3,"div",39),v.Nb()),2&t){var n=e.$implicit,i=e.index,r=v.Yb().$implicit;v.Ab(2),v.uc(" ",r.name," X ",r.selectedItem[i].total,""),v.Ab(1),v.ec("ngForOf",n.item)}}function k(t,e){if(1&t&&(v.Ob(0,"ion-label",46),v.rc(1),v.Nb()),2&t){var n=v.Yb(2).$implicit,i=v.Yb(2);v.Ab(1),v.uc("",i.util.currecny,"",n.quantiy*n.price," ")}}function w(t,e){if(1&t&&(v.Ob(0,"ion-label",46),v.rc(1),v.Nb()),2&t){var n=v.Yb(2).$implicit,i=v.Yb(2);v.Ab(1),v.uc("",n.quantiy*n.price," ",i.util.currecny," ")}}function A(t,e){if(1&t&&(v.Ob(0,"div",43),v.Ob(1,"div",44),v.Ob(2,"ion-label",38),v.rc(3),v.Nb(),v.qc(4,k,2,2,"ion-label",45),v.qc(5,w,2,2,"ion-label",45),v.Nb(),v.Nb()),2&t){var n=v.Yb().$implicit,i=v.Yb(2);v.Ab(3),v.uc("",n.name," X ",n.quantiy," "),v.Ab(1),v.ec("ngIf","left"===i.util.cside),v.Ab(1),v.ec("ngIf","right"===i.util.cside)}}function I(t,e){if(1&t&&(v.Ob(0,"span"),v.qc(1,N,4,3,"div",35),v.qc(2,A,6,4,"div",36),v.Nb()),2&t){var n=e.$implicit;v.Ab(1),v.ec("ngForOf",n.selectedItem),v.Ab(1),v.ec("ngIf",!n.selectedItem||!n.selectedItem.length)}}function S(t,e){if(1&t&&(v.Ob(0,"span",47),v.rc(1),v.Nb()),2&t){var n=v.Yb(2);v.Ab(1),v.uc("",n.util.currecny," ",n.total,"")}}function T(t,e){if(1&t&&(v.Ob(0,"span",47),v.rc(1),v.Nb()),2&t){var n=v.Yb(2);v.Ab(1),v.uc("",n.total," ",n.util.currecny,"")}}function Y(t,e){if(1&t&&(v.Ob(0,"span",47),v.rc(1),v.Nb()),2&t){var n=v.Yb(2);v.Ab(1),v.uc("",n.util.currecny," ",n.grandTotal,"")}}function z(t,e){if(1&t&&(v.Ob(0,"span",47),v.rc(1),v.Nb()),2&t){var n=v.Yb(2);v.Ab(1),v.uc("",n.grandTotal," ",n.util.currecny,"")}}var q=function(t){return{"background-image":t}};function E(t,e){if(1&t&&(v.Ob(0,"div",12),v.Ob(1,"div",13),v.Ob(2,"div",14),v.Mb(3,"div",15),v.Ob(4,"div",16),v.Ob(5,"ion-label",17),v.rc(6),v.Nb(),v.Ob(7,"ion-label",18),v.rc(8),v.Nb(),v.Nb(),v.Nb(),v.Nb(),v.Ob(9,"ion-text",19),v.Ob(10,"p"),v.rc(11),v.Nb(),v.Nb(),v.qc(12,O,10,2,"div",20),v.Mb(13,"div",21),v.Ob(14,"ion-text",19),v.Ob(15,"p"),v.rc(16),v.Nb(),v.Nb(),v.qc(17,M,10,2,"div",20),v.Mb(18,"div",21),v.qc(19,C,10,2,"div",20),v.Mb(20,"div",21),v.Ob(21,"div",22),v.Ob(22,"div",23),v.Ob(23,"div",24),v.Mb(24,"ion-icon",25),v.rc(25,"\xa0\xa0 "),v.Ob(26,"ion-label",17),v.rc(27),v.Nb(),v.Nb(),v.Nb(),v.Nb(),v.qc(28,I,3,2,"span",26),v.Ob(29,"ion-label",27),v.rc(30),v.Nb(),v.Ob(31,"ion-label",28),v.rc(32),v.Nb(),v.Ob(33,"div",22),v.Ob(34,"div",29),v.Ob(35,"ion-label",30),v.rc(36),v.qc(37,S,2,2,"span",31),v.qc(38,T,2,2,"span",31),v.Nb(),v.Ob(39,"ion-label",30),v.rc(40),v.qc(41,Y,2,2,"span",31),v.qc(42,z,2,2,"span",31),v.Nb(),v.Nb(),v.Nb(),v.Nb()),2&t){var n=v.Yb();v.Ab(3),v.ec("ngStyle",v.jc(18,q,"url("+n.api.mediaURL+n.userPic+"),url(assets/placeholder.jpg)")),v.Ab(3),v.sc(n.userName),v.Ab(2),v.sc(n.time),v.Ab(3),v.sc(n.util.translate("Informaci\xf3n del repartidor")),v.Ab(1),v.ec("ngIf",n.driverMobile),v.Ab(4),v.sc(n.util.translate("Informaci\xf3n del cliente")),v.Ab(1),v.ec("ngIf",n.phone),v.Ab(2),v.ec("ngIf",n.userEmail),v.Ab(8),v.sc(n.deliveryAddress),v.Ab(1),v.ec("ngForOf",n.orders),v.Ab(2),v.sc(n.util.translate("Notas de la orden")),v.Ab(2),v.sc(n.orderNotes),v.Ab(4),v.tc("",n.util.translate("Productos")," "),v.Ab(1),v.ec("ngIf","left"===n.util.cside),v.Ab(1),v.ec("ngIf","right"===n.util.cside),v.Ab(2),v.tc("",n.util.translate("Total")," "),v.Ab(1),v.ec("ngIf","left"===n.util.cside),v.Ab(1),v.ec("ngIf","right"===n.util.cside)}}function j(t,e){if(1&t){var n=v.Pb();v.Ob(0,"div",48),v.Ob(1,"ion-button",49),v.Wb("click",function(){return v.mc(n),v.Yb().changeStatus("rechazada")}),v.rc(2),v.Nb(),v.Ob(3,"ion-button",50),v.Wb("click",function(){return v.mc(n),v.Yb().changeStatus("aceptada")}),v.rc(4),v.Nb(),v.Nb()}if(2&t){var i=v.Yb();v.Ab(2),v.tc(" ",i.util.translate("Rechazar")," "),v.Ab(2),v.tc(" ",i.util.translate("Aceptar")," ")}}function L(t,e){if(1&t){var n=v.Pb();v.Ob(0,"div",51),v.Ob(1,"div",52),v.Ob(2,"ion-select",53),v.Wb("ngModelChange",function(t){return v.mc(n),v.Yb().changeStatusOrder=t}),v.Ob(3,"ion-select-option",54),v.rc(4),v.Nb(),v.Ob(5,"ion-select-option",55),v.rc(6),v.Nb(),v.Ob(7,"ion-select-option",56),v.rc(8),v.Nb(),v.Nb(),v.Nb(),v.Ob(9,"div"),v.Ob(10,"ion-button",57),v.Wb("click",function(){return v.mc(n),v.Yb().changeOrderStatus()}),v.rc(11),v.Nb(),v.Nb(),v.Nb()}if(2&t){var i=v.Yb();v.Ab(2),v.ec("ngModel",i.changeStatusOrder),v.Ab(2),v.sc(i.util.translate("En camino")),v.Ab(2),v.sc(i.util.translate("Cancelar")),v.Ab(2),v.sc(i.util.translate("Entregda")),v.Ab(3),v.tc(" ",i.util.translate("Actualizar estado")," ")}}function F(t,e){1&t&&(v.Ob(0,"ion-label",58),v.rc(1,"Orden entregada"),v.Nb())}function D(t,e){if(1&t&&(v.Ob(0,"ion-label",59),v.rc(1),v.Nb()),2&t){var n=v.Yb();v.Ab(1),v.sc(n.util.translate("Orden cancelada por el usuario"))}}var R,$,W,B=[{path:"",component:(R=function(){function n(e,i,r,a,o,c,s,l){var d=this;t(this,n),this.router=e,this.route=i,this.api=r,this.util=a,this.navCtrl=o,this.printer=c,this.modalController=s,this.iab=l,this.orders=[],this.rest={},this.drivers=[],this.dummyDriver=[],this.orderString=[],this.orderNotes="",this.loaded=!1,this.route.queryParams.subscribe(function(t){d.id=t.id,d.getOrder()})}var i,r,a;return i=n,(r=[{key:"ngOnInit",value:function(){}},{key:"back",value:function(){this.util.publishNewAddress("hello"),this.navCtrl.back()}},{key:"presentModal",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.modalController.create({component:g.a,backdropDismiss:!1,showBackdrop:!0,componentProps:{item:this.dummyDriver}});case 2:return(e=t.sent).onDidDismiss().then(function(t){if(t&&"selected"===t.role&&t.data&&t.data.length){var e={id:n.id,status:"accepted",did:t.data[0].id};n.util.show(n.util.translate("Por favor espere")),n.api.post("orders/editList",e).then(function(e){e&&200===e.status?n.api.post("drivers/edit_profile",{id:t.data[0].id,current:"busy"}).then(function(e){if(e&&200===e.status){n.util.hide(),n.api.sendNotification(n.util.translate("New Order Received "),n.util.translate("New Order"),t.data[0].fcm_token);var i=n.util.translate("Your Order is ")+"accepted"+n.util.translate(" By ")+n.restName;n.api.sendNotification(i,"Order accepted",n.token),p.a.fire({title:n.util.translate("success"),text:n.util.translate("Order status changed to ")+"accepted",icon:"success",timer:2e3,backdrop:!1,background:"white"}),n.util.publishOrder(),n.navCtrl.back()}else n.util.hide(),n.util.errorToast(n.util.translate("Se ha presentado un error")),n.navCtrl.back()},function(t){n.util.hide(),n.util.errorToast(n.util.translate("Se ha presentado un error"))}).catch(function(t){n.util.hide(),n.util.errorToast(n.util.translate("Se ha presentado un error"))}):(n.util.hide(),n.util.errorToast(n.util.translate("Se ha presentado un error")),n.navCtrl.back())},function(t){n.util.hide(),n.util.errorToast(n.util.translate("Se ha presentado un error"))}).catch(function(t){n.util.hide(),n.util.errorToast(n.util.translate("Se ha presentado un error"))})}}),t.next=6,e.present();case 6:case"end":return t.stop()}},t,this)}))}},{key:"getDistanceFromLatLonInKm",value:function(t,e,n,i){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark(function r(){var a,o,c;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return a=this.deg2rad(n-t),o=this.deg2rad(i-e),c=Math.sin(a/2)*Math.sin(a/2)+Math.cos(this.deg2rad(t))*Math.cos(this.deg2rad(n))*Math.sin(o/2)*Math.sin(o/2),r.abrupt("return",2*Math.atan2(Math.sqrt(c),Math.sqrt(1-c))*6371);case 2:case"end":return r.stop()}},r,this)}))}},{key:"deg2rad",value:function(t){return t*(Math.PI/180)}},{key:"getUserInfo",value:function(t){var e=this;this.api.post("users/getById",{id:t}).then(function(t){if(t&&200===t.status&&t.data.length){var n=t.data[0];e.userName=n.first_name+" "+n.last_name,e.phone=n.mobile,e.token=n.fcm_token,e.userEmail=n.email,e.userPic=n.cover}},function(t){e.util.errorToast("Se ha presentado un error")}).catch(function(t){e.util.errorToast("Se ha presentado un error")})}},{key:"getDriverInfo",value:function(){var t=this;this.api.post("drivers/getById",{id:this.driverId}).then(function(e){if(e&&200===e.status&&e.data.length){var n=e.data[0];t.driverName=n.first_name+" "+n.last_name,t.driverMobile=n.mobile,t.driverCover=n.cover,t.driverFCM=n.fcm_token}},function(e){t.util.errorToast("Se ha presentado un error")}).catch(function(e){t.util.errorToast("Se ha presentado un error")})}},{key:"getDrivers",value:function(){var t=this;this.api.get("drivers").then(function(e){e&&200===e.status&&e.data.length&&e.data.filter(function(t){return"1"===t.status}).forEach(function(e){return Object(l.a)(t,void 0,void 0,regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getDistanceFromLatLonInKm(this.rest.lat,this.rest.lng,parseFloat(e.lat),parseFloat(e.lng));case 2:n=t.sent,console.log(e.id,n),n<50&&(e.distance=n.toFixed(2),e.on=!0,this.drivers.push(e),this.dummyDriver.push(e));case 4:case"end":return t.stop()}},t,this)}))})},function(e){t.util.errorToast("Se ha presentado un error")}).catch(function(e){t.util.errorToast("Se ha presentado un error")})}},{key:"getOrder",value:function(){return Object(l.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.api.post("orders/getById",{id:this.id}).then(function(t){if(e.loaded=!0,t&&200===t.status&&t.data.length){var n=t.data[0];if(e.grandTotal=n.grand_total,e.orders=JSON.parse(n.orders),e.serviceTax=n.serviceTax,e.status=n.status,e.time=h(n.time).format("llll"),e.total=n.total,e.paid=n.pay_method,e.orderNotes=n.notes,e.deliveryCharge=n.delivery_charge,n&&""!==n.did&&(e.driverId=n.did,e.getDriverInfo()),n&&n.address){var i=JSON.parse(n.address);e.deliveryAddress=i.house+" "+i.landmark+" "+i.address+i.pincode,e.userLat=i.lat,e.userLng=i.lng}e.getUserInfo(n.uid),e.getRestInfo(n.restId),e.restName=n.str_name,e.orders.forEach(function(t){if(t&&t.selectedItem&&t.selectedItem.length>0){var n="";t.selectedItem.forEach(function(i,r){var a=[];n='<div style="border-bottom:1px dashed lightgray"> <p style="font-weight:bold"> '+t.name+" X "+t.selectedItem[r].total+"##ITEWS## </p></div>",i.item.forEach(function(t,n){a.push('<div style="display:flex;flex-direction:row;justify-content:space-between"> <p style="font-weight:bold;color:gray;margin:0px;"> -'+t.name+'</p> <p style="font-weight:bold;color:gray;margin:0px;">'+e.getCurrency()+" "+t.value+"</p> </div> ")});var o=a.join(""),c=n.replace("##ITEWS##",o);e.orderString.push(c)})}else{var i='<div style="border-bottom:1px dashed lightgray;display:flex;flex-direction:row;justify-content:space-between"> <p style="font-weight:bold"> '+t.name+" X "+t.quantiy+' </p> <p style="font-weight:bold">'+t.price+e.getCurrency()+"</p> </div>";e.orderString.push(i)}})}},function(t){e.loaded=!0,e.util.errorToast("Se ha presentado un error")}).catch(function(t){e.loaded=!0,e.util.errorToast("Se ha presentado un error")});case 1:case"end":return t.stop()}},t,this)}))}},{key:"getRestInfo",value:function(t){var e=this;this.api.post("users/getById",{id:t}).then(function(t){e.rest=t.data[0],e.getDrivers()},function(t){e.util.errorToast("Algo ha ido mal")}).catch(function(t){e.util.errorToast("Algo ha ido mal")})}},{key:"goToTracker",value:function(){this.router.navigate(["/tracker"],{queryParams:{id:this.id}})}},{key:"getCurrency",value:function(){return"$"}},{key:"autoAssignment",value:function(){var t=this;if(this.drivers&&this.drivers.length){var e=this.drivers.filter(function(t){return!0===t.on}).reduce(function(t,e){return t.distance<e.distance&&1==e.on?t:e});if(e&&e.id){var n={id:this.id,status:"aceptada",did:e.id};this.api.post("orders/getByDriverId",{id:e.id}).then(function(i){i.data.filter(function(t){return"aceptada"===t.status||"en camino"==t.status}).length>=2?(t.drivers.filter(function(t){t.id==e.id&&(t.on=!1)}),t.autoAssignment()):(t.util.show(t.util.translate("Espere por favor")),t.asignarlo(n,e))})}else this.util.errorToast("No se encontraron Drivers cercanos, intenta nuevamente en un par de de minutos.")}else this.util.errorToast("No se encontro ningun repartidor activo")}},{key:"asignarlo",value:function(t,e){var n=this;this.api.post("orders/editList",t).then(function(t){t&&200===t.status?n.api.post("drivers/edit_profile",{id:e.id,current:"busy"}).then(function(t){if(t&&200===t.status){n.util.hide(),n.api.sendNotification(n.util.translate("Nueva orden recibida "),n.util.translate("Nueva orden"),e.fcm_token);var i=n.util.translate("Tu orden es ")+"aceptada"+n.util.translate(" por ")+n.restName;n.api.sendNotification(i,"Orden aceptada",n.token),p.a.fire({title:n.util.translate("success"),text:n.util.translate("El estado de la orden cambio ha ")+"aceptada.",icon:"success",timer:2e3,backdrop:!1,background:"white"}),n.util.publishOrder(),n.navCtrl.back()}else n.util.hide(),n.util.errorToast(n.util.translate("Se ha presentado un error")),n.navCtrl.back()},function(t){n.util.hide(),n.util.errorToast(n.util.translate("Se ha presentado un error"))}).catch(function(t){n.util.hide(),n.util.errorToast(n.util.translate("Se ha presentado un error"))}):(n.util.hide(),n.util.errorToast(n.util.translate("Se ha presentado un error")),n.navCtrl.back())},function(t){n.util.hide(),n.util.errorToast(n.util.translate("Se ha presentado un error"))}).catch(function(t){n.util.hide(),n.util.errorToast(n.util.translate("Se ha presentado un error"))})}},{key:"changeStatus",value:function(t){var e=this;if("aceptada"===t)"0"===this.util.driver_assignments?this.presentModal():this.autoAssignment();else if("en camino"===t){var n={id:this.id,status:t};this.util.show(this.util.translate("Espere por favor")),this.api.post("orders/editList",n).then(function(n){if(e.util.hide(),n&&200===n.status){var i=e.util.translate("Your Order is ")+t+e.util.translate(" By ")+e.restName;e.api.sendNotification(i,"Order "+t,e.token),p.a.fire({title:e.util.translate("success"),text:e.util.translate("Order status changed to ")+t,icon:"success",timer:2e3,backdrop:!1,background:"white"}),e.util.publishOrder(),e.navCtrl.back()}else e.util.hide(),e.util.errorToast(e.util.translate("Se ha presentado un error")),e.navCtrl.back()},function(t){e.util.hide(),e.util.errorToast(e.util.translate("Se ha presentado un error"))}).catch(function(t){e.util.hide(),e.util.errorToast(e.util.translate("Se ha presentado un error"))})}else{var i={id:this.id,status:t,did:this.driverId};this.util.show(this.util.translate("Espere por favor")),this.api.post("orders/editList",i).then(function(n){n&&200===n.status?e.api.post("drivers/edit_profile",{id:e.driverId,current:"active"}).then(function(n){if(n&&200===n.status){e.util.hide(),e.api.sendNotification(e.util.translate("El estado de la orden cambio"),e.util.translate("El estado de la orden cambio"),e.driverFCM);var i=e.util.translate("Tu orden es ")+t+e.util.translate(" por ")+e.restName;e.api.sendNotification(i,"Orden "+t,e.token),p.a.fire({title:e.util.translate("success"),text:e.util.translate("El estado de la orden cambio a ")+t,icon:"success",timer:2e3,backdrop:!1,background:"white"}),e.util.publishOrder(),e.navCtrl.back()}else e.util.hide(),e.util.errorToast(e.util.translate("Se ha presentado un error")),e.navCtrl.back()},function(t){e.util.hide(),e.util.errorToast(e.util.translate("Se ha presentado un error"))}).catch(function(t){e.util.hide(),e.util.errorToast(e.util.translate("Se ha presentado un error"))}):(e.util.hide(),e.util.errorToast(e.util.translate("Se ha presentado un error")),e.navCtrl.back())},function(t){e.util.hide(),e.util.errorToast(e.util.translate("Se ha presentado un error"))}).catch(function(t){e.util.hide(),e.util.errorToast(e.util.translate("Se ha presentado un error"))})}}},{key:"changeOrderStatus",value:function(){this.changeStatusOrder&&this.changeStatus(this.changeStatusOrder)}},{key:"call",value:function(){this.phone?this.iab.create("tel:"+this.phone,"_system"):this.util.errorToast(this.util.translate("Number not found"))}},{key:"driverCall",value:function(){this.driverMobile?this.iab.create("tel:"+this.driverMobile,"_system"):this.util.errorToast(this.util.translate("Number not found"))}},{key:"email",value:function(){this.userEmail?this.iab.create("mailto:"+this.userEmail,"_system"):this.util.errorToast(this.util.translate("Email not found"))}},{key:"printOrder",value:function(){var t=this.orderString.join(""),e='<div style="padding: 20px;display: flex;flex-direction: column;"> <img src="assets/icon.png" style="text-align: center; height: 100px;width: 100px;" alt=""> <h2 style="text-align: center;">Foodies Order Summary</h2> <p style="float: left;"><b>'+this.id+'</b></p> <p style="float: left;"><b>'+this.restName+'</b></p> <p style="float: left;"><b>'+this.userName+'</b></p> <p style="float: left;">'+this.time+' </p> <p style="font-weight: bold;">'+this.util.translate("ITEMS")+"</p> "+t+' <p style="border-bottom: 1px solid black;"><span style="float: left;font-weight: bold;">'+this.util.translate("SubTotal")+'</span> <span style="float: right;font-weight: bold;">$'+this.total+'</span> <p style="border-bottom: 1px solid black;"><span style="float: left;font-weight: bold;">'+this.util.translate("Delivery Charge")+'</span> <span style="float: right;font-weight: bold;">$5</span> </p> <p style="border-bottom: 1px solid black;"><span style="float: left;font-weight: bold;">'+this.util.translate("Service Tax")+'</span> <span style="float: right;font-weight: bold;">$'+this.serviceTax+'</span> </p> <p style="border-bottom: 1px solid black;"><span style="float: left;font-weight: bold;">'+this.util.translate("Total")+'</span> <span style="float: right;font-weight: bold;">$'+this.grandTotal+'</span> </p> <h1 style="text-align: center;text-transform: uppercase;">'+this.paid+"</h1> </div>";this.printer.print(e,{name:"Foodie Order Summary",duplex:!1}).then(function(t){}).catch(function(t){})}}])&&e(i.prototype,r),a&&e(i,a),n}(),R.\u0275fac=function(t){return new(t||R)(v.Lb(s.g),v.Lb(s.a),v.Lb(d.a),v.Lb(u.a),v.Lb(c.cb),v.Lb(f.a),v.Lb(c.bb),v.Lb(_.a))},R.\u0275cmp=v.Fb({type:R,selectors:[["app-order-detail"]],decls:16,vars:8,consts:[["color","primary"],["slot","start"],[3,"click"],["slot","icon-only","color","light","mode","md","name","arrow-back-outline"],["style","display: flex;flex-direction: column;justify-content: center;align-items: center;",4,"ngIf"],["class","main_content_div",4,"ngIf"],["class","btn_div",4,"ngIf"],["class","status_div",4,"ngIf"],["class","green",4,"ngIf"],["class","red",4,"ngIf"],[2,"display","flex","flex-direction","column","justify-content","center","align-items","center"],["color","primary","name","crescent"],[1,"main_content_div"],[1,"card_div"],[1,"resto_detail"],[1,"back_image",3,"ngStyle"],[2,"margin-left","10px"],[1,"res_name"],[1,"res_location"],["color","primary",1,"ion-text-center"],["class","card_div2",4,"ngIf"],[1,"line_div"],[1,"card_div2"],[1,"personal_detail"],[2,"display","flex"],["name","location"],[4,"ngFor","ngForOf"],[1,"head_gray"],[1,"small_lbl"],[1,"order_detail"],[1,"small_lbl2"],["class","prize1",4,"ngIf"],["name","call"],["size","small","fill","outline",3,"click"],["name","mail"],["class","subNames",4,"ngFor","ngForOf"],["class","card_div4",4,"ngIf"],[1,"subNames"],[1,"food_title"],["class","flex_titles",4,"ngFor","ngForOf"],[1,"flex_titles"],[1,"sub_name"],["class","sub_name",4,"ngIf"],[1,"card_div4"],[1,"flex_div"],["class","food_price",4,"ngIf"],[1,"food_price"],[1,"prize1"],[1,"btn_div"],["size","small",1,"reject",3,"click"],["size","small",1,"accept",3,"click"],[1,"status_div"],[2,"width","200px"],["placeholder","Cambiar estado",3,"ngModel","ngModelChange"],["value","en camino"],["value","cancelada"],["value","entregada"],["size","small",3,"click"],[1,"green"],[1,"red"]],template:function(t,e){1&t&&(v.Ob(0,"ion-header"),v.Ob(1,"ion-toolbar",0),v.Ob(2,"ion-buttons",1),v.Ob(3,"ion-button",2),v.Wb("click",function(){return e.back()}),v.Mb(4,"ion-icon",3),v.Nb(),v.Nb(),v.Ob(5,"ion-title"),v.rc(6),v.Nb(),v.Nb(),v.Nb(),v.Ob(7,"ion-content"),v.qc(8,m,2,0,"div",4),v.qc(9,E,43,20,"div",5),v.Nb(),v.Ob(10,"ion-footer"),v.Ob(11,"ion-toolbar"),v.qc(12,j,5,2,"div",6),v.qc(13,L,12,5,"div",7),v.qc(14,F,2,0,"ion-label",8),v.qc(15,D,2,1,"ion-label",9),v.Nb(),v.Nb()),2&t&&(v.Ab(6),v.uc("",e.util.translate("\xf3rden")," # ",e.id," "),v.Ab(2),v.ec("ngIf",!e.loaded),v.Ab(1),v.ec("ngIf",e.loaded),v.Ab(3),v.ec("ngIf","creada"==e.status),v.Ab(1),v.ec("ngIf","aceptada"==e.status),v.Ab(1),v.ec("ngIf","entregada"==e.status),v.Ab(1),v.ec("ngIf","cancel"==e.status))},directives:[c.o,c.W,c.g,c.f,c.p,c.V,c.j,a.i,c.n,c.N,a.j,c.t,c.S,a.h,c.I,c.ib,o.i,o.l,c.J],styles:[".main_content_div[_ngcontent-%COMP%]{width:100%}.main_content_div[_ngcontent-%COMP%]   .line_div[_ngcontent-%COMP%]{height:1px;width:100%;background:#d3d3d3}.main_content_div[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{display:block}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]{padding:20px}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;position:relative}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%]   .back_image[_ngcontent-%COMP%]{height:50px;width:50px;background-position:50%;background-size:cover;background-repeat:no-repeat;border-radius:100%}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%]   .res_name[_ngcontent-%COMP%]{font-weight:600;font-size:14px}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%]   .res_location[_ngcontent-%COMP%]{color:gray;font-size:14px}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%]   .order_id[_ngcontent-%COMP%]{position:absolute;right:5px}.main_content_div[_ngcontent-%COMP%]   .card_div[_ngcontent-%COMP%]   .resto_detail[_ngcontent-%COMP%]   .order_id[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{text-align:right}.main_content_div[_ngcontent-%COMP%]   .orderId[_ngcontent-%COMP%]{padding:10px 20px;font-weight:600;font-size:14px}.main_content_div[_ngcontent-%COMP%]   .card_div4[_ngcontent-%COMP%]{border-bottom:1px dashed #d3d3d3;padding:10px 20px}.main_content_div[_ngcontent-%COMP%]   .card_div4[_ngcontent-%COMP%]   .flex_div[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.main_content_div[_ngcontent-%COMP%]   .card_div4[_ngcontent-%COMP%]   .flex_div[_ngcontent-%COMP%]   .food_title[_ngcontent-%COMP%]{font-size:15px;font-weight:700}.main_content_div[_ngcontent-%COMP%]   .card_div4[_ngcontent-%COMP%]   .flex_div[_ngcontent-%COMP%]   .food_price[_ngcontent-%COMP%]{font-size:15px}.main_content_div[_ngcontent-%COMP%]   .card_div4[_ngcontent-%COMP%]   .flex_div[_ngcontent-%COMP%]   .fav_lbl[_ngcontent-%COMP%]{color:red;font-size:12px;border:1px solid red;border-radius:25px;padding:2px 10px}.main_content_div[_ngcontent-%COMP%]   .subNames[_ngcontent-%COMP%]{border-bottom:1px dashed #d3d3d3;padding:20px}.main_content_div[_ngcontent-%COMP%]   .subNames[_ngcontent-%COMP%]   .food_title[_ngcontent-%COMP%]{font-size:15px;font-weight:700}.main_content_div[_ngcontent-%COMP%]   .subNames[_ngcontent-%COMP%]   .food_title[_ngcontent-%COMP%]   .veg[_ngcontent-%COMP%]{height:12px;width:12px}.main_content_div[_ngcontent-%COMP%]   .subNames[_ngcontent-%COMP%]   .food_title[_ngcontent-%COMP%]   .rate_lbl[_ngcontent-%COMP%]{background:#b2d9b2;border:1px solid #7bdb7b;padding:3px 8px;border-radius:5px;font-size:14px;font-weight:600}.main_content_div[_ngcontent-%COMP%]   .subNames[_ngcontent-%COMP%]   .flex_titles[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between}.main_content_div[_ngcontent-%COMP%]   .subNames[_ngcontent-%COMP%]   .flex_titles[_ngcontent-%COMP%]   .sub_name[_ngcontent-%COMP%]{margin:0;color:#000;font-size:12px}.main_content_div[_ngcontent-%COMP%]   .head_gray[_ngcontent-%COMP%]{color:#000;font-size:15px;font-weight:600;padding:0 15px}.main_content_div[_ngcontent-%COMP%]   .small_lbl[_ngcontent-%COMP%]{font-size:12px;color:gray;margin-bottom:15px;padding:0 15px}.main_content_div[_ngcontent-%COMP%]   .card_div2[_ngcontent-%COMP%]{padding:10px 20px}.main_content_div[_ngcontent-%COMP%]   .card_div2[_ngcontent-%COMP%]   .personal_detail[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;align-items:center}.main_content_div[_ngcontent-%COMP%]   .card_div2[_ngcontent-%COMP%]   .personal_detail[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:20px;color:var(--ion-color-primary)}.main_content_div[_ngcontent-%COMP%]   .card_div2[_ngcontent-%COMP%]   .personal_detail[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--border-radius:3px;font-weight:600}.main_content_div[_ngcontent-%COMP%]   .card_div2[_ngcontent-%COMP%]   .personal_detail[_ngcontent-%COMP%]   .res_name[_ngcontent-%COMP%]{font-weight:600;font-size:14px}.main_content_div[_ngcontent-%COMP%]   .card_div2[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .head_gray[_ngcontent-%COMP%]{color:gray;font-size:13px;margin-top:10px}.main_content_div[_ngcontent-%COMP%]   .card_div2[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .small_lbl[_ngcontent-%COMP%]{font-size:14px;font-weight:600}.main_content_div[_ngcontent-%COMP%]   .card_div2[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .prize[_ngcontent-%COMP%], .main_content_div[_ngcontent-%COMP%]   .card_div2[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .prize1[_ngcontent-%COMP%]{position:absolute;right:35px;font-weight:600!important;color:#000}.main_content_div[_ngcontent-%COMP%]   .card_div2[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .prize1[_ngcontent-%COMP%]{font-size:16px;margin-top:10px}.main_content_div[_ngcontent-%COMP%]   .card_div2[_ngcontent-%COMP%]   .order_detail[_ngcontent-%COMP%]   .small_lbl2[_ngcontent-%COMP%]{font-size:16px;font-weight:600;margin-top:10px}.btn_div[_ngcontent-%COMP%]{display:flex;justify-content:center}.btn_div[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{font-weight:600;--border-radius:5px;width:130px}.btn_div[_ngcontent-%COMP%]   .accept[_ngcontent-%COMP%]{--background:green}.status_div[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding-left:20px;padding-right:20px;align-items:center}.status_div[_ngcontent-%COMP%]   ion-select[_ngcontent-%COMP%]{border:1px solid #d3d3d3;border-radius:5px;--padding-top:3px;--padding-bottom:3px;width:100%}.status_div[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{font-weight:600;--border-radius:5px}.green[_ngcontent-%COMP%]{color:green}.green[_ngcontent-%COMP%], .red[_ngcontent-%COMP%]{display:block;text-align:center;font-weight:600}.red[_ngcontent-%COMP%]{color:var(--ion-color-primary)}"]}),R)}],J=(($=function e(){t(this,e)}).\u0275fac=function(t){return new(t||$)},$.\u0275mod=v.Jb({type:$}),$.\u0275inj=v.Ib({imports:[[s.i.forChild(B)],s.i]}),$),X=r("PCNd"),K=((W=function e(){t(this,e)}).\u0275fac=function(t){return new(t||W)},W.\u0275mod=v.Jb({type:W}),W.\u0275inj=v.Ib({imports:[[a.b,o.e,c.X,X.a,J]]}),W)}}])}();
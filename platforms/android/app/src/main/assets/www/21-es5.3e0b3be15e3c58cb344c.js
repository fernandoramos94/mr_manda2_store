!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{iCz4:function(n,i,o){"use strict";o.r(i),o.d(i,"CategoryPageModule",function(){return C});var r=o("ofXK"),a=o("3Pt+"),s=o("TEn/"),l=o("tyNb"),u=o("mrSG"),c=o("8RPc"),m=o("2Rin"),d=o("PSD3"),h=o.n(d),g=o("fXoL");function b(t,e){if(1&t&&(g.Ob(0,"h2",11),g.rc(1),g.Nb()),2&t){var n=g.Yb();g.Ab(1),g.tc("",n.util.translate("No existen categorias")," ")}}function f(t,e){1&t&&(g.Ob(0,"ion-item"),g.Ob(1,"ion-thumbnail",1),g.Mb(2,"ion-skeleton-text",12),g.Nb(),g.Ob(3,"ion-label"),g.Ob(4,"h3"),g.Mb(5,"ion-skeleton-text",13),g.Nb(),g.Ob(6,"p"),g.Mb(7,"ion-skeleton-text",14),g.Nb(),g.Ob(8,"p"),g.Mb(9,"ion-skeleton-text",15),g.Nb(),g.Nb(),g.Nb())}function p(t,e){if(1&t){var n=g.Pb();g.Ob(0,"ion-item",16),g.Ob(1,"ion-label"),g.rc(2),g.Nb(),g.Ob(3,"ion-icon",17),g.Wb("click",function(){g.mc(n);var t=e.$implicit;return g.Yb().edit(t)}),g.Nb(),g.Ob(4,"ion-icon",18),g.Wb("click",function(){g.mc(n);var t=e.$implicit;return g.Yb().deleteItem(t)}),g.Nb(),g.Ob(5,"ion-icon",19),g.Wb("click",function(){g.mc(n);var t=e.$implicit;return g.Yb().hideStatus(t)}),g.Nb(),g.Nb()}if(2&t){var i=e.$implicit;g.Ab(2),g.sc(i.name),g.Ab(3),g.ec("name","1"===i.status?"eye-outline":"eye-off-outline")}}var w,v,y,x=[{path:"",component:(w=function(){function n(e,i,o,r){t(this,n),this.api=e,this.alertController=i,this.util=o,this.router=r,this.categories=[],this.dummy=Array(50),this.getCategories()}var i,o,r;return i=n,(o=[{key:"getCategories",value:function(){var t=this,e={id:localStorage.getItem("uid")};this.api.post("categories/getByRestId",e).then(function(e){t.dummy=[],e&&200===e.status&&e.data.length&&(t.categories=e.data)},function(e){t.dummy=[],t.util.errorToast(t.util.translate("Something went wrong"))}).catch(function(e){console.log(e),console.log(e),t.dummy=[],t.util.errorToast(t.util.translate("Something went wrong"))})}},{key:"ngOnInit",value:function(){}},{key:"addNewCat",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.alertController.create({header:this.util.translate("A\xf1adir nueva!"),mode:"ios",inputs:[{name:"name1",type:"text",placeholder:this.util.translate("Nombre de categoria")}],buttons:[{text:this.util.translate("Cancelar"),role:"cancel",cssClass:"secondary",handler:function(){}},{text:this.util.translate("Ok"),handler:function(t){if(t&&""!==t.name1){var e={restId:localStorage.getItem("uid"),name:t.name1,status:1};n.util.show(),n.api.post("categories/save",e).then(function(t){n.util.hide(),t&&200===t.status?(n.getCategories(),h.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1e3,timerProgressBar:!0,onOpen:function(t){t.addEventListener("mouseenter",h.a.stopTimer),t.addEventListener("mouseleave",h.a.resumeTimer)}}).fire({icon:"success",title:n.util.translate("saved")})):n.util.errorToast(n.util.translate("Something went wrong"))},function(t){n.util.hide(),n.util.errorToast(n.util.translate("Something went wrong"))}).catch(function(t){n.util.hide(),n.util.errorToast(n.util.translate("Something went wrong"))})}}}]});case 2:return e=t.sent,t.next=5,e.present();case 5:case"end":return t.stop()}},t,this)}))}},{key:"edit",value:function(t){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark(function e(){var n,i=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.alertController.create({header:this.util.translate("Editar"),mode:"ios",inputs:[{name:"name1",type:"text",placeholder:this.util.translate("Nombre categoria"),value:t.name}],buttons:[{text:this.util.translate("Cancelar"),role:"cancel",cssClass:"secondary",handler:function(){}},{text:this.util.translate("Ok"),handler:function(e){if(e&&""!==e.name1){var n={id:t.id,name:e.name1};i.util.show(),i.api.post("categories/editList",n).then(function(t){i.util.hide(),t&&200===t.status?(i.getCategories(),h.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1e3,timerProgressBar:!0,onOpen:function(t){t.addEventListener("mouseenter",h.a.stopTimer),t.addEventListener("mouseleave",h.a.resumeTimer)}}).fire({icon:"success",title:i.util.translate("saved")})):i.util.errorToast(i.util.translate("Something went wrong"))},function(t){i.util.hide(),i.util.errorToast(i.util.translate("Something went wrong"))}).catch(function(t){i.util.hide(),i.util.errorToast(i.util.translate("Something went wrong"))})}}}]});case 2:return n=e.sent,e.next=5,n.present();case 5:case"end":return e.stop()}},e,this)}))}},{key:"deleteItem",value:function(t){var e=this;h.a.fire({title:this.util.translate("Estas seguro?"),text:this.util.translate("Eliminar")+" "+t.name+" ?",icon:"question",showConfirmButton:!0,showCancelButton:!0,confirmButtonText:this.util.translate("Eliminae"),backdrop:!1,background:"white"}).then(function(n){if(n&&n.value){var i={id:t.id};e.util.show(),e.api.post("categories/deleteList",i).then(function(t){e.util.hide(),t&&200===t.status?(e.getCategories(),h.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1e3,timerProgressBar:!0,onOpen:function(t){t.addEventListener("mouseenter",h.a.stopTimer),t.addEventListener("mouseleave",h.a.resumeTimer)}}).fire({icon:"success",title:e.util.translate("deleted")})):e.util.errorToast(e.util.translate("Something went wrong"))},function(t){console.log(t),e.util.hide(),e.util.errorToast(e.util.translate("Something went wrong"))}).catch(function(t){console.log(t),e.util.hide(),e.util.errorToast(e.util.translate("Something went wrong"))})}})}},{key:"hideStatus",value:function(t){var e=this,n={id:t.id,status:"1"===t.status?0:1};this.util.show(),this.api.post("categories/editList",n).then(function(t){console.log(t),e.util.hide(),t&&200===t.status?(e.getCategories(),h.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1e3,timerProgressBar:!0,onOpen:function(t){t.addEventListener("mouseenter",h.a.stopTimer),t.addEventListener("mouseleave",h.a.resumeTimer)}}).fire({icon:"success",title:e.util.translate("saved")})):e.util.errorToast(e.util.translate("Something went wrong"))},function(t){console.log(t),e.util.hide(),e.util.errorToast(e.util.translate("Something went wrong"))}).catch(function(t){console.log(t),e.util.hide(),e.util.errorToast(e.util.translate("Something went wrong"))})}}])&&e(i.prototype,o),r&&e(i,r),n}(),w.\u0275fac=function(t){return new(t||w)(g.Lb(c.a),g.Lb(s.b),g.Lb(m.a),g.Lb(l.g))},w.\u0275cmp=g.Fb({type:w,selectors:[["app-category"]],decls:14,vars:4,consts:[["color","primary"],["slot","start"],[3,"click"],["slot","icon-only","name","arrow-back"],["fill","clear","color","light","slot","end",3,"click"],["slot","icon-only","name","add"],[1,"ion-padding"],[1,"mainContent"],["class","ion-text-center",4,"ngIf"],[4,"ngFor","ngForOf"],["lines","none",4,"ngFor","ngForOf"],[1,"ion-text-center"],["animated",""],["animated","",2,"width","50%"],["animated","",2,"width","80%"],["animated","",2,"width","60%"],["lines","none"],["slot","end","name","create-outline","color","primary",2,"margin","0px 5px","font-size","25px",3,"click"],["slot","end","name","trash","color","primary",2,"margin","0px 5px","font-size","25px",3,"click"],["slot","end","color","primary",2,"margin","0px 5px","font-size","25px",3,"name","click"]],template:function(t,e){1&t&&(g.Ob(0,"ion-header"),g.Ob(1,"ion-toolbar",0),g.Ob(2,"ion-buttons",1),g.Ob(3,"ion-button",2),g.Wb("click",function(){return e.util.back()}),g.Mb(4,"ion-icon",3),g.Nb(),g.Nb(),g.Ob(5,"ion-title"),g.rc(6),g.Nb(),g.Ob(7,"ion-button",4),g.Wb("click",function(){return e.addNewCat()}),g.Mb(8,"ion-icon",5),g.Nb(),g.Nb(),g.Nb(),g.Ob(9,"ion-content",6),g.Ob(10,"div",7),g.qc(11,b,2,1,"h2",8),g.qc(12,f,10,0,"ion-item",9),g.qc(13,p,6,2,"ion-item",10),g.Nb(),g.Nb()),2&t&&(g.Ab(6),g.sc(e.util.translate("Categorias")),g.Ab(5),g.ec("ngIf",!(null!=e.dummy&&e.dummy.length||null!=e.categories&&e.categories.length)),g.Ab(1),g.ec("ngForOf",e.dummy),g.Ab(1),g.ec("ngForOf",e.categories))},directives:[s.o,s.W,s.g,s.f,s.p,s.V,s.j,r.i,r.h,s.r,s.U,s.K,s.t],styles:[".edt_icn[_ngcontent-%COMP%]{width:20px}"]}),w)}],O=((v=function e(){t(this,e)}).\u0275fac=function(t){return new(t||v)},v.\u0275mod=g.Jb({type:v}),v.\u0275inj=g.Ib({imports:[[l.i.forChild(x)],l.i]}),v),k=o("PCNd"),C=((y=function e(){t(this,e)}).\u0275fac=function(t){return new(t||y)},y.\u0275mod=g.Jb({type:y}),y.\u0275inj=g.Ib({imports:[[r.b,a.e,s.X,k.a,O]]}),y)}}])}();
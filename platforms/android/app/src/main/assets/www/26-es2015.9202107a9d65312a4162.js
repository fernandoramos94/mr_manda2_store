(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{F4UR:function(t,o,e){"use strict";e.r(o),e.d(o,"LoginPageModule",function(){return x});var n=e("ofXK"),i=e("3Pt+"),s=e("TEn/"),l=e("tyNb"),a=e("mrSG"),r=e("8RPc"),c=e("2Rin"),g=e("PSD3"),b=e.n(g),d=e("wljF"),u=e("hxji"),h=e("TCp9"),m=e("fXoL");function p(t,o){if(1&t&&(m.Ob(0,"span"),m.rc(1),m.Nb()),2&t){const t=m.Yb(2);m.Ab(1),m.tc(" ",t.util.translate("Iniciar"),"")}}function f(t,o){1&t&&m.Mb(0,"ion-spinner",19)}function O(t,o){if(1&t){const t=m.Pb();m.Ob(0,"form",5,6),m.Ob(2,"ion-list",7),m.Ob(3,"ion-item",7),m.Ob(4,"ion-input",8,9),m.Wb("ngModelChange",function(o){return m.mc(t),m.Yb().login.email=o}),m.Nb(),m.Nb(),m.Ob(6,"ion-text",10),m.Ob(7,"p",11),m.rc(8),m.Nb(),m.Nb(),m.Ob(9,"ion-item",7),m.Ob(10,"ion-input",12,13),m.Wb("ngModelChange",function(o){return m.mc(t),m.Yb().login.password=o}),m.Nb(),m.Nb(),m.Ob(12,"ion-text",10),m.Ob(13,"p",11),m.rc(14),m.Nb(),m.Nb(),m.Nb(),m.Ob(15,"ion-row",14),m.Ob(16,"ion-col",14),m.Ob(17,"p",15),m.Wb("click",function(){return m.mc(t),m.Yb().resetPass()}),m.rc(18),m.Nb(),m.Ob(19,"ion-button",16),m.Wb("click",function(){m.mc(t);const o=m.lc(1);return m.Yb().onLogin(o)}),m.qc(20,p,2,1,"span",17),m.qc(21,f,1,0,"ion-spinner",18),m.Nb(),m.Nb(),m.Nb(),m.Nb()}if(2&t){const t=m.lc(5),o=m.lc(11),e=m.Yb();m.Ab(4),m.ec("ngModel",e.login.email)("placeholder",e.util.translate("Correo")),m.Ab(3),m.ec("hidden",t.valid||0==e.submitted),m.Ab(1),m.tc(" ",e.util.translate("El correo es requerido")," "),m.Ab(2),m.ec("ngModel",e.login.password)("placeholder",e.util.translate("Contrase\xf1a")),m.Ab(3),m.ec("hidden",o.valid||0==e.submitted),m.Ab(1),m.tc(" ",e.util.translate("La contrase\xf1a es requerida")," "),m.Ab(4),m.sc(e.util.translate("Olvidaste tu contrase\xf1a?")),m.Ab(1),m.ec("disabled",e.isLogin),m.Ab(1),m.ec("ngIf",!e.isLogin),m.Ab(1),m.ec("ngIf",e.isLogin)}}function w(t,o){if(1&t&&(m.Ob(0,"span"),m.rc(1),m.Nb()),2&t){const t=m.Yb(2);m.Ab(1),m.tc(" ",t.util.translate("Log In"),"")}}function C(t,o){1&t&&m.Mb(0,"ion-spinner",19)}function N(t,o){if(1&t){const t=m.Pb();m.Ob(0,"form",5,6),m.Ob(2,"ion-list",7),m.Ob(3,"ion-row"),m.Ob(4,"ion-col",20),m.Wb("click",function(){return m.mc(t),m.Yb().openCountry()}),m.Ob(5,"ion-item",7),m.Ob(6,"ion-input",21,22),m.Wb("ngModelChange",function(o){return m.mc(t),m.Yb().mobile.ccCode=o}),m.Nb(),m.Nb(),m.Nb(),m.Ob(8,"ion-col",23),m.Ob(9,"ion-item",7),m.Ob(10,"ion-input",24,25),m.Wb("ngModelChange",function(o){return m.mc(t),m.Yb().mobile.phone=o}),m.Nb(),m.Nb(),m.Ob(12,"ion-text",10),m.Ob(13,"p",11),m.rc(14),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Ob(15,"ion-item",7),m.Ob(16,"ion-input",12,13),m.Wb("ngModelChange",function(o){return m.mc(t),m.Yb().mobile.password=o}),m.Nb(),m.Nb(),m.Ob(18,"ion-text",10),m.Ob(19,"p",11),m.rc(20),m.Nb(),m.Nb(),m.Nb(),m.Ob(21,"ion-row",14),m.Ob(22,"ion-col",14),m.Ob(23,"p",15),m.Wb("click",function(){return m.mc(t),m.Yb().resetPass()}),m.rc(24),m.Nb(),m.Ob(25,"ion-button",16),m.Wb("click",function(){m.mc(t);const o=m.lc(1);return m.Yb().onPhoneLogin(o)}),m.qc(26,w,2,1,"span",17),m.qc(27,C,1,0,"ion-spinner",18),m.Nb(),m.Nb(),m.Nb(),m.Nb()}if(2&t){const t=m.lc(11),o=m.lc(17),e=m.Yb();m.Ab(6),m.ec("ngModel",e.mobile.ccCode),m.Ab(4),m.ec("ngModel",e.mobile.phone)("placeholder",e.util.translate("Mobile Number")),m.Ab(3),m.ec("hidden",t.valid||0==e.submitted),m.Ab(1),m.tc(" ",e.util.translate("Phone number is required")," "),m.Ab(2),m.ec("ngModel",e.mobile.password)("placeholder",e.util.translate("Password")),m.Ab(3),m.ec("hidden",o.valid||0==e.submitted),m.Ab(1),m.tc(" ",e.util.translate("Password is required")," "),m.Ab(4),m.sc(e.util.translate("Forgot Password?")),m.Ab(1),m.ec("disabled",e.isLogin),m.Ab(1),m.ec("ngIf",!e.isLogin),m.Ab(1),m.ec("ngIf",e.isLogin)}}function M(t,o){if(1&t&&(m.Ob(0,"span"),m.rc(1),m.Nb()),2&t){const t=m.Yb(2);m.Ab(1),m.tc(" ",t.util.translate("Log In"),"")}}function L(t,o){1&t&&m.Mb(0,"ion-spinner",19)}function P(t,o){if(1&t){const t=m.Pb();m.Ob(0,"form",5,6),m.Ob(2,"ion-list",7),m.Ob(3,"ion-row"),m.Ob(4,"ion-col",20),m.Wb("click",function(){return m.mc(t),m.Yb().openCountry()}),m.Ob(5,"ion-item",7),m.Ob(6,"ion-input",21,22),m.Wb("ngModelChange",function(o){return m.mc(t),m.Yb().mobileLogin.ccCode=o}),m.Nb(),m.Nb(),m.Nb(),m.Ob(8,"ion-col",23),m.Ob(9,"ion-item",7),m.Ob(10,"ion-input",24,25),m.Wb("ngModelChange",function(o){return m.mc(t),m.Yb().mobileLogin.phone=o}),m.Nb(),m.Nb(),m.Ob(12,"ion-text",10),m.Ob(13,"p",11),m.rc(14),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Nb(),m.Ob(15,"ion-row",14),m.Ob(16,"ion-col",14),m.Ob(17,"p",15),m.Wb("click",function(){return m.mc(t),m.Yb().resetPass()}),m.rc(18),m.Nb(),m.Ob(19,"ion-button",16),m.Wb("click",function(){m.mc(t);const o=m.lc(1);return m.Yb().onOTPLogin(o)}),m.qc(20,M,2,1,"span",17),m.qc(21,L,1,0,"ion-spinner",18),m.Nb(),m.Nb(),m.Nb(),m.Nb()}if(2&t){const t=m.lc(11),o=m.Yb();m.Ab(6),m.ec("ngModel",o.mobileLogin.ccCode),m.Ab(4),m.ec("ngModel",o.mobileLogin.phone)("placeholder",o.util.translate("Mobile Number")),m.Ab(3),m.ec("hidden",t.valid||0==o.submitted),m.Ab(1),m.tc(" ",o.util.translate("Phone number is required")," "),m.Ab(4),m.sc(o.util.translate("Forgot Password?")),m.Ab(1),m.ec("disabled",o.isLogin),m.Ab(1),m.ec("ngIf",!o.isLogin),m.Ab(1),m.ec("ngIf",o.isLogin)}}const v=[{path:"",component:(()=>{class t{constructor(t,o,e,n,i,s,l,a){this.router=t,this.api=o,this.util=e,this.navCtrl=n,this.oneSignal=i,this.menuController=s,this.modalController=l,this.modalCtrl=a,this.login={email:"",password:""},this.mobile={ccCode:"",phone:"",password:""},this.mobileLogin={ccCode:"",phone:""},this.submitted=!1,this.isLogin=!1,console.log("--------------- user login",this.util.user_login),this.mobile.ccCode="+91",this.mobileLogin.ccCode="+91",this.oneSignal.getIds().then(t=>{console.log("iddddd==========",t),localStorage.setItem("fcm",t.userId)})}ngOnInit(){}onLogin(t){if(console.log("form",t),this.submitted=!0,t.valid){if(!/^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/.test(this.login.email))return this.util.showToast(this.util.translate("Please enter valid email"),"danger","bottom"),!1;console.log("login"),this.isLogin=!0,this.api.post("users/login",this.login).then(t=>{if(this.isLogin=!1,console.log(t),t&&200===t.status)if(t&&t.data&&"store"===t.data.type)if("1"===t.data.status){localStorage.setItem("uid",t.data.id);const o=localStorage.getItem("fcm");o&&null!==o&&"null"!==o&&this.api.post("users/edit_profile",{id:t.data.id,fcm_token:o}).then(t=>{console.log("user info=>",t)},t=>{console.log(t)}),this.api.post("stores/getByUid",{id:t.data.id}).then(t=>{this.isLogin=!1,console.log("*******************",t),t&&200===t.status&&t.data&&t.data.length&&(this.util.store=t.data[0],localStorage.setItem("suid",t.data[0].id),this.navCtrl.navigateRoot([""]))},t=>{this.isLogin=!1,this.util.errorToast(this.util.translate("Something went wrong")),console.log(t)})}else console.log("not valid"),b.a.fire({title:this.util.translate("Error"),text:this.util.translate("Your are blocked please contact administrator"),icon:"error",showConfirmButton:!0,showCancelButton:!0,confirmButtonText:this.util.translate("Need Help?"),backdrop:!1,background:"white"}).then(o=>{o&&o.value&&this.router.navigate(["inbox"],{queryParams:{id:0,name:"Support",uid:t.data.id}})});else this.util.errorToast(this.util.translate("Not valid user")),this.login.email="",this.login.password="";else this.util.errorToast(t&&500===t.status?t.data.message:this.util.translate("Something went wrong"))},t=>{console.log(t),this.isLogin=!1,this.util.errorToast(this.util.translate("Something went wrong"))})}}onPhoneLogin(t){if(console.log("form",t,this.mobile),console.log(this.mobile.ccCode+this.mobile.phone),this.submitted=!0,t.valid){const t={cc:this.mobile.ccCode,mobile:this.mobile.phone,password:this.mobile.password};this.isLogin=!0,this.api.post("users/loginWithPhoneAndPassword",t).then(t=>{if(this.isLogin=!1,console.log(t),t&&200===t.status)if(t&&t.data&&"store"===t.data.type)if("1"===t.data.status){localStorage.setItem("uid",t.data.id);const o=localStorage.getItem("fcm");o&&null!==o&&"null"!==o&&this.api.post("users/edit_profile",{id:t.data.id,fcm_token:o}).then(t=>{console.log("user info=>",t)},t=>{console.log(t)}),this.api.post("stores/getByUid",{id:t.data.id}).then(t=>{this.isLogin=!1,console.log("*******************",t),t&&200===t.status&&t.data&&t.data.length&&(this.util.store=t.data[0],localStorage.setItem("suid",t.data[0].id),this.navCtrl.navigateRoot([""]))},t=>{this.isLogin=!1,this.util.errorToast(this.util.translate("Something went wrong")),console.log(t)})}else console.log("not valid"),b.a.fire({title:this.util.translate("Error"),text:this.util.translate("Your are blocked please contact administrator"),icon:"error",showConfirmButton:!0,showCancelButton:!0,confirmButtonText:this.util.translate("Need Help?"),backdrop:!1,background:"white"}).then(o=>{o&&o.value&&this.router.navigate(["inbox"],{queryParams:{id:0,name:"Support",uid:t.data.id}})});else this.util.errorToast(this.util.translate("Not valid user")),this.login.email="",this.login.password="";else this.util.errorToast(t&&500===t.status?t.data.message:this.util.translate("Something went wrong"))},t=>{console.log(t),this.isLogin=!1,this.util.errorToast(this.util.translate("Something went wrong"))}).catch(t=>{console.log(t),this.isLogin=!1,this.util.errorToast(this.util.translate("Something went wrong"))})}}onOTPLogin(t){if(console.log(this.mobileLogin),this.submitted=!0,t.valid){const t={mobile:this.mobileLogin.phone,cc:this.mobileLogin.ccCode};this.isLogin=!0,this.api.post("users/checkMobileNumber",t).then(t=>{this.isLogin=!1,console.log(t),t&&200===t.status?(console.log("open modal"),this.openModal(t.data.id)):this.util.errorToast(t&&500===t.status?t.data.message:this.util.translate("Something went wrong"))},t=>{console.log(t),this.isLogin=!1,this.util.errorToast(this.util.translate("Something went wrong"))}).catch(t=>{console.log(t),this.isLogin=!1,this.util.errorToast(this.util.translate("Something went wrong"))})}}openModal(t){return Object(a.a)(this,void 0,void 0,function*(){console.log("uid",t);const o=yield this.modalCtrl.create({component:h.a,componentProps:{code:this.mobileLogin.ccCode,phone:this.mobileLogin.phone}});o.onDidDismiss().then(o=>{console.log(o),o&&"ok"===o.role&&this.api.post("users/getById",{id:t}).then(o=>{if(console.log("user data",o),o&&200===o.status&&o.data&&o.data.length&&"store"===o.data[0].type)if(o&&o.data&&"store"===o.data[0].type)if("1"===o.data[0].status){localStorage.setItem("uid",t);const o=localStorage.getItem("fcm");o&&null!==o&&"null"!==o&&this.api.post("users/edit_profile",{id:t,fcm_token:o}).then(t=>{console.log("user info=>",t)},t=>{console.log(t)}),this.api.post("stores/getByUid",{id:t}).then(t=>{this.isLogin=!1,console.log("*******************",t),t&&200===t.status&&t.data&&t.data.length&&(this.util.store=t.data[0],localStorage.setItem("suid",t.data[0].id),this.navCtrl.navigateRoot([""]))},t=>{this.isLogin=!1,this.util.errorToast(this.util.translate("Something went wrong")),console.log(t)})}else console.log("not valid"),b.a.fire({title:this.util.translate("Error"),text:this.util.translate("Your are blocked please contact administrator"),icon:"error",showConfirmButton:!0,showCancelButton:!0,confirmButtonText:this.util.translate("Need Help?"),backdrop:!1,background:"white"}).then(o=>{o&&o.value&&this.router.navigate(["inbox"],{queryParams:{id:0,name:"Support",uid:t}})});else this.util.errorToast(this.util.translate("Not valid user")),this.login.email="",this.login.password="";else this.util.errorToast(o&&500===o.status?o.data.message:this.util.translate("Something went wrong"))},t=>{localStorage.removeItem("uid"),console.log(t)})}),o.present()})}resetPass(){this.router.navigate(["/reset"])}register(){this.router.navigate(["register"])}ionViewWillEnter(){this.menuController.enable(!1)}ionViewWillLeave(){this.menuController.enable(!0)}openCountry(){return Object(a.a)(this,void 0,void 0,function*(){console.log("open ccode");const t=yield this.modalController.create({component:u.a,backdropDismiss:!1,showBackdrop:!0});t.onDidDismiss().then(t=>{console.log(t),t&&"selected"===t.role&&(console.log("ok"),this.mobile.ccCode="+"+t.data,this.mobileLogin.ccCode="+"+t.data)}),yield t.present()})}}return t.\u0275fac=function(o){return new(o||t)(m.Lb(l.g),m.Lb(r.a),m.Lb(c.a),m.Lb(s.cb),m.Lb(d.a),m.Lb(s.ab),m.Lb(s.bb),m.Lb(s.bb))},t.\u0275cmp=m.Fb({type:t,selectors:[["app-login"]],decls:8,vars:4,consts:[[1,"ion-padding"],[1,"login-logo"],["src","assets/icon.png","alt","foodies",1,"logo_icon"],[1,"login-name"],["novalidate","",4,"ngIf"],["novalidate",""],["loginForm","ngForm"],["lines","none"],["type","email","name","email","spellcheck","false","autocapitalize","off","required","",3,"ngModel","placeholder","ngModelChange"],["email","ngModel"],["color","danger"],[1,"ion-padding-start",3,"hidden"],["name","password","type","password","required","",3,"ngModel","placeholder","ngModelChange"],["password","ngModel"],[1,"ion-no-margin","ion-no-padding"],[1,"frgTag",3,"click"],["type","submit","expand","block",1,"btn_class",3,"disabled","click"],[4,"ngIf"],["name","circles",4,"ngIf"],["name","circles"],["size","3",3,"click"],["disabled","true","type","text","name","ccode","spellcheck","false","autocapitalize","off","required","",2,"font-size","12px",3,"ngModel","ngModelChange"],["ccode","ngModel"],["size","9"],["type","number","name","mobile","spellcheck","false","autocapitalize","off","required","",3,"ngModel","placeholder","ngModelChange"],["phone","ngModel"]],template:function(t,o){1&t&&(m.Ob(0,"ion-content",0),m.Ob(1,"div",1),m.Mb(2,"img",2),m.Ob(3,"p",3),m.rc(4),m.Nb(),m.Nb(),m.qc(5,O,22,12,"form",4),m.qc(6,N,28,13,"form",4),m.qc(7,P,22,9,"form",4),m.Nb()),2&t&&(m.Ab(4),m.sc(o.util.translate("Iniciar sesi\xf3n")),m.Ab(1),m.ec("ngIf","0"===o.util.user_login),m.Ab(1),m.ec("ngIf","1"===o.util.user_login),m.Ab(1),m.ec("ngIf","2"===o.util.user_login))},directives:[s.j,n.i,i.p,i.j,i.k,s.u,s.r,s.q,s.jb,i.o,i.i,i.l,s.S,s.E,s.i,s.f,s.N,s.eb],styles:["ion-footer[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%]{--box-shadow:none}ion-toolbar[_ngcontent-%COMP%]{border-color:none!important}ion-toolbar[_ngcontent-%COMP%]   ion-title[_ngcontent-%COMP%]{--color:#fff}.login-logo[_ngcontent-%COMP%]{text-align:center;right:0;left:0;margin:20% auto 20px}.login-logo[_ngcontent-%COMP%]   .logo_icon[_ngcontent-%COMP%]{width:110px!important}.login-logo[_ngcontent-%COMP%]   .login-name[_ngcontent-%COMP%]{margin:0;font-size:1.5rem}.login-logo[_ngcontent-%COMP%]   .subTitle[_ngcontent-%COMP%]{margin:0;font-size:1rem}.frgTag[_ngcontent-%COMP%]{text-align:right;color:var(--ion-color-primary)}.btn_class[_ngcontent-%COMP%]{color:#fff;height:50px;--border-radius:5px}.login-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:150px}.list[_ngcontent-%COMP%]{margin-bottom:0}ion-list[_ngcontent-%COMP%]{--ion-background-color:transparent;margin:0}ion-item[_ngcontent-%COMP%]{--ion-background-color:#f3f3f3;border-radius:5px!important;margin-top:10px}.createAcc[_ngcontent-%COMP%]{text-align:center}.createAcc[_ngcontent-%COMP%]   .registerTag[_ngcontent-%COMP%]{color:var(--ion-color-primary);font-weight:700}.btns[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:10px 0}.btns[_ngcontent-%COMP%]   .flagActive[_ngcontent-%COMP%]{height:50px;width:50px;border-radius:50%;border:2px solid var(--ion-color-primary);margin:0 10px}.btns[_ngcontent-%COMP%]   .flagDeactive[_ngcontent-%COMP%]{height:45px;width:45px;margin:0 10px;opacity:.5}"]}),t})()}];let _=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=m.Jb({type:t}),t.\u0275inj=m.Ib({imports:[[l.i.forChild(v)],l.i]}),t})();var A=e("PCNd");let x=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=m.Jb({type:t}),t.\u0275inj=m.Ib({imports:[[n.b,i.e,s.X,A.a,_]]}),t})()}}]);
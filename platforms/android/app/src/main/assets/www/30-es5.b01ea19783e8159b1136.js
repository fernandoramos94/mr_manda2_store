!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{"1nHT":function(e,o,i){"use strict";i.r(o),i.d(o,"ResetPageModule",function(){return D});var r=i("ofXK"),a=i("3Pt+"),s=i("TEn/"),l=i("tyNb"),c=i("mrSG"),d=i("2Rin"),u=i("8RPc"),b=i("hxji"),g=i("TCp9"),p=i("fXoL");function f(n,t){if(1&n&&(p.Ob(0,"span"),p.rc(1),p.Nb()),2&n){var e=p.Yb(3);p.Ab(1),p.tc(" ",e.util.translate("restablecer")," ")}}function h(n,t){1&n&&p.Mb(0,"ion-spinner",14)}function m(n,t){if(1&n){var e=p.Pb();p.Ob(0,"div"),p.Ob(1,"ion-input",10),p.Wb("ngModelChange",function(n){return p.mc(e),p.Yb(2).email=n}),p.Mb(2,"ion-icon",11),p.Nb(),p.Ob(3,"ion-button",12),p.Wb("click",function(){return p.mc(e),p.Yb(2).sendOTP()}),p.qc(4,f,2,1,"span",9),p.qc(5,h,1,0,"ion-spinner",13),p.Nb(),p.Nb()}if(2&n){var o=p.Yb(2);p.Ab(1),p.ec("placeholder",o.util.translate("Correo"))("ngModel",o.email),p.Ab(2),p.ec("disabled",o.loggedIn),p.Ab(1),p.ec("ngIf",!o.loggedIn),p.Ab(1),p.ec("ngIf",o.loggedIn)}}function v(n,t){if(1&n&&(p.Ob(0,"span"),p.rc(1),p.Nb()),2&n){var e=p.Yb(3);p.Ab(1),p.tc(" ",e.util.translate("Verify OTP")," ")}}function w(n,t){1&n&&p.Mb(0,"ion-spinner",14)}function O(n,t){if(1&n){var e=p.Pb();p.Ob(0,"div"),p.Ob(1,"ion-input",15),p.Wb("ngModelChange",function(n){return p.mc(e),p.Yb(2).otp=n}),p.Mb(2,"ion-icon",16),p.Nb(),p.Ob(3,"ion-button",12),p.Wb("click",function(){return p.mc(e),p.Yb(2).verifyOTP()}),p.qc(4,v,2,1,"span",9),p.qc(5,w,1,0,"ion-spinner",13),p.Nb(),p.Nb()}if(2&n){var o=p.Yb(2);p.Ab(1),p.ec("placeholder",o.util.translate("OTP"))("ngModel",o.otp),p.Ab(2),p.ec("disabled",o.loggedIn),p.Ab(1),p.ec("ngIf",!o.loggedIn),p.Ab(1),p.ec("ngIf",o.loggedIn)}}function _(n,t){if(1&n&&(p.Ob(0,"span"),p.rc(1),p.Nb()),2&n){var e=p.Yb(3);p.Ab(1),p.tc(" ",e.util.translate("Reset Password")," ")}}function C(n,t){1&n&&p.Mb(0,"ion-spinner",14)}function M(n,t){if(1&n){var e=p.Pb();p.Ob(0,"div"),p.Ob(1,"ion-input",17),p.Wb("ngModelChange",function(n){return p.mc(e),p.Yb(2).password=n}),p.Mb(2,"ion-icon",16),p.Nb(),p.Ob(3,"ion-input",17),p.Wb("ngModelChange",function(n){return p.mc(e),p.Yb(2).repass=n}),p.Mb(4,"ion-icon",16),p.Nb(),p.Ob(5,"ion-button",12),p.Wb("click",function(){return p.mc(e),p.Yb(2).sendEmail()}),p.qc(6,_,2,1,"span",9),p.qc(7,C,1,0,"ion-spinner",13),p.Nb(),p.Nb()}if(2&n){var o=p.Yb(2);p.Ab(1),p.ec("placeholder",o.util.translate("New Password"))("ngModel",o.password),p.Ab(2),p.ec("placeholder",o.util.translate("Confirm Password"))("ngModel",o.repass),p.Ab(2),p.ec("disabled",o.loggedIn),p.Ab(1),p.ec("ngIf",!o.loggedIn),p.Ab(1),p.ec("ngIf",o.loggedIn)}}function P(n,t){if(1&n&&(p.Ob(0,"div",7),p.Ob(1,"ion-label",8),p.rc(2),p.Nb(),p.qc(3,m,6,5,"div",9),p.qc(4,O,6,5,"div",9),p.qc(5,M,8,7,"div",9),p.Nb()),2&n){var e=p.Yb();p.Ab(2),p.tc(" ",e.util.translate("Cambiar contrase\xf1a")," "),p.Ab(1),p.ec("ngIf",1===e.div_type),p.Ab(1),p.ec("ngIf",2===e.div_type),p.Ab(1),p.ec("ngIf",3===e.div_type)}}function I(n,t){if(1&n&&(p.Ob(0,"span"),p.rc(1),p.Nb()),2&n){var e=p.Yb(3);p.Ab(1),p.tc(" ",e.util.translate("Send OTP")," ")}}function y(n,t){1&n&&p.Mb(0,"ion-spinner",14)}function k(n,t){if(1&n){var e=p.Pb();p.Ob(0,"div"),p.Ob(1,"ion-row"),p.Ob(2,"ion-col",18),p.Wb("click",function(){return p.mc(e),p.Yb(2).openCountry()}),p.Ob(3,"ion-input",19),p.Wb("ngModelChange",function(n){return p.mc(e),p.Yb(2).cc=n}),p.Nb(),p.Nb(),p.Ob(4,"ion-col",20),p.Ob(5,"ion-input",21),p.Wb("ngModelChange",function(n){return p.mc(e),p.Yb(2).phone=n}),p.Nb(),p.Nb(),p.Nb(),p.Ob(6,"ion-button",12),p.Wb("click",function(){return p.mc(e),p.Yb(2).sendOTPOnMobile()}),p.qc(7,I,2,1,"span",9),p.qc(8,y,1,0,"ion-spinner",13),p.Nb(),p.Nb()}if(2&n){var o=p.Yb(2);p.Ab(3),p.ec("ngModel",o.cc),p.Ab(2),p.ec("ngModel",o.phone)("placeholder",o.util.translate("Mobile Number")),p.Ab(1),p.ec("disabled",o.loggedIn),p.Ab(1),p.ec("ngIf",!o.loggedIn),p.Ab(1),p.ec("ngIf",o.loggedIn)}}function A(n,t){if(1&n&&(p.Ob(0,"span"),p.rc(1),p.Nb()),2&n){var e=p.Yb(3);p.Ab(1),p.tc(" ",e.util.translate("Reset Password")," ")}}function N(n,t){1&n&&p.Mb(0,"ion-spinner",14)}function x(n,t){if(1&n){var e=p.Pb();p.Ob(0,"div"),p.Ob(1,"ion-input",17),p.Wb("ngModelChange",function(n){return p.mc(e),p.Yb(2).password=n}),p.Mb(2,"ion-icon",16),p.Nb(),p.Ob(3,"ion-input",17),p.Wb("ngModelChange",function(n){return p.mc(e),p.Yb(2).repass=n}),p.Mb(4,"ion-icon",16),p.Nb(),p.Ob(5,"ion-button",12),p.Wb("click",function(){return p.mc(e),p.Yb(2).resetPasswordWithPhone()}),p.qc(6,A,2,1,"span",9),p.qc(7,N,1,0,"ion-spinner",13),p.Nb(),p.Nb()}if(2&n){var o=p.Yb(2);p.Ab(1),p.ec("placeholder",o.util.translate("New Password"))("ngModel",o.password),p.Ab(2),p.ec("placeholder",o.util.translate("Confirm Password"))("ngModel",o.repass),p.Ab(2),p.ec("disabled",o.loggedIn),p.Ab(1),p.ec("ngIf",!o.loggedIn),p.Ab(1),p.ec("ngIf",o.loggedIn)}}function T(n,t){if(1&n&&(p.Ob(0,"div",7),p.Ob(1,"ion-label",8),p.rc(2),p.Nb(),p.qc(3,k,9,6,"div",9),p.qc(4,x,8,7,"div",9),p.Nb()),2&n){var e=p.Yb();p.Ab(2),p.tc(" ",e.util.translate("Reset Password")," "),p.Ab(1),p.ec("ngIf",1===e.div_type),p.Ab(1),p.ec("ngIf",3===e.div_type)}}var Y,q,W,S=[{path:"",component:(Y=function(){function e(t,o,i,r,a,s){n(this,e),this.api=t,this.util=o,this.navCtrl=i,this.menuController=r,this.modalController=a,this.alertController=s,this.cc="+91",this.ccCode="+91",this.div_type=1,this.sent=!1,this.email="",this.otp="",this.password="",this.repass="",this.verified=!1}var o,i,r;return o=e,(i=[{key:"ngOnInit",value:function(){}},{key:"sendOTP",value:function(){var n=this;return console.log(this.email,";sendOTPDriver"),this.email?/^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/.test(this.email)?(this.loggedIn=!0,void this.api.post("users/sendOTP",{email:this.email}).then(function(t){if(console.log(t),n.loggedIn=!1,!t||200!==t.status)return t&&500===t.status&&t.data&&t.data.message?(n.util.errorToast(t.data.message),!1):(n.util.errorToast(n.util.translate("Something went wrong")),!1);n.id=t.data.id,n.loggedIn=!1,n.div_type=2},function(t){console.log(t),n.loggedIn=!1,n.util.errorToast(n.util.translate("Something went wrong"))})):(this.util.showToast(this.util.translate("Please enter valid email"),"dark","bottom"),!1):(this.util.showToast(this.util.translate("email is required"),"dark","bottom"),!1)}},{key:"verifyOTP",value:function(){var n=this;if(!this.otp||""===this.otp)return this.util.showToast(this.util.translate("otp is required"),"dark","bottom"),!1;this.loggedIn=!0,this.api.post("users/verifyOTP",{id:this.id,otp:this.otp}).then(function(t){if(console.log(t),n.loggedIn=!1,!t||200!==t.status)return t&&500===t.status&&t.data&&t.data.message?(n.util.errorToast(t.data.message),!1):(n.util.errorToast(n.util.translate("Something went wrong")),!1);n.loggedIn=!1,n.div_type=3},function(t){console.log(t),n.loggedIn=!1,n.util.errorToast(n.util.translate("Something went wrong"))})}},{key:"sendEmail",value:function(){var n=this;if(console.log("pwddd0<<<<<<",this.password),!this.password||!this.repass||""===this.password||""===this.repass)return this.util.errorToast(this.util.translate("All Field are required")),!1;var t={email:this.email,pwd:this.password};this.loggedIn=!0,this.api.post("users/update_password",t).then(function(t){if(console.log(t),n.loggedIn=!1,!t||200!==t.status)return t&&500===t.status&&t.data&&t.data.message?(n.util.errorToast(t.data.message),!1):(n.util.errorToast(n.util.translate("Something went wrong")),!1);n.loggedIn=!1,n.util.errorToast(n.util.translate("Password Updated")),n.back()},function(t){console.log(t),n.loggedIn=!1,n.util.errorToast(n.util.translate("Something went wrong"))})}},{key:"resetPasswordWithPhone",value:function(){var n=this;if(console.log("pwddd0<<<<<<",this.password),!this.password||!this.repass||""===this.password||""===this.repass)return this.util.errorToast(this.util.translate("All Field are required")),!1;var t={phone:this.phone,pwd:this.password};this.loggedIn=!0,this.api.post("users/resetPasswordWithPhone",t).then(function(t){if(console.log(t),n.loggedIn=!1,!t||200!==t.status)return t&&500===t.status&&t.data&&t.data.message?(n.util.errorToast(t.data.message),!1):(n.util.errorToast(n.util.translate("Something went wrong")),!1);n.loggedIn=!1,n.util.errorToast(n.util.translate("Password Updated")),n.back()},function(t){console.log(t),n.loggedIn=!1,n.util.errorToast(n.util.translate("Something went wrong"))})}},{key:"back",value:function(){this.navCtrl.back()}},{key:"ionViewWillEnter",value:function(){this.menuController.enable(!1)}},{key:"ionViewWillLeave",value:function(){this.menuController.enable(!0)}},{key:"openCountry",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var t,e=this;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return console.log("open ccode"),n.next=3,this.modalController.create({component:b.a,backdropDismiss:!1,showBackdrop:!0});case 3:return(t=n.sent).onDidDismiss().then(function(n){console.log(n),n&&"selected"===n.role&&(console.log("ok"),e.cc="+"+n.data,e.ccCode="+"+n.data)}),n.next=7,t.present();case 7:case"end":return n.stop()}},n,this)}))}},{key:"sendOTPOnMobile",value:function(){var n=this,t={phone:this.phone};this.loggedIn=!0,this.api.post("users/validatePhoneForReset",t).then(function(t){n.loggedIn=!1,console.log("data",t),t&&200===t.status?(console.log("all done..."),n.presentAlertConfirm()):n.util.errorToast(t&&500===t.status?t.data.message:n.util.translate("Something went wrong"))},function(t){console.log(t),n.loggedIn=!1,n.util.errorToast(n.util.translate("Something went wrong"))}).catch(function(t){console.log(t),n.loggedIn=!1,n.util.errorToast(n.util.translate("Something went wrong"))})}},{key:"presentAlertConfirm",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var t,e=this;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.alertController.create({header:"Confirm Informations",message:"We will send verification code to your mobile number  "+this.ccCode+this.phone,buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:function(){console.log("Confirm Cancel: blah")}},{text:"Send",handler:function(){console.log("Confirm Okay"),e.openModal()}}]});case 2:return t=n.sent,n.next=5,t.present();case 5:case"end":return n.stop()}},n,this)}))}},{key:"openModal",value:function(){return Object(c.a)(this,void 0,void 0,regeneratorRuntime.mark(function n(){var t,e=this;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.modalController.create({component:g.a,componentProps:{code:this.ccCode,phone:this.phone}});case 2:(t=n.sent).onDidDismiss().then(function(n){console.log(n),n&&"ok"===n.role&&(console.log("verification done..."),e.div_type=3)}),t.present();case 4:case"end":return n.stop()}},n,this)}))}}])&&t(o.prototype,i),r&&t(o,r),e}(),Y.\u0275fac=function(n){return new(n||Y)(p.Lb(u.a),p.Lb(d.a),p.Lb(s.cb),p.Lb(s.ab),p.Lb(s.bb),p.Lb(s.b))},Y.\u0275cmp=p.Fb({type:Y,selectors:[["app-reset"]],decls:12,vars:3,consts:[["color","primary"],["slot","start"],[3,"click"],["slot","icon-only","name","arrow-back"],[1,"main_content_div"],[1,"iconDiv"],["class","form_div",4,"ngIf"],[1,"form_div"],[1,"main_head"],[4,"ngIf"],["type","email",3,"placeholder","ngModel","ngModelChange"],["name","mail","slot","icon-only"],["expand","block",3,"disabled","click"],["name","circular",4,"ngIf"],["name","circular"],["type","number",3,"placeholder","ngModel","ngModelChange"],["name","key","slot","icon-only"],["type","password",3,"placeholder","ngModel","ngModelChange"],["size","3",3,"click"],["disabled","true","type","text",2,"font-size","12px",3,"ngModel","ngModelChange"],["size","9"],["type","number",3,"ngModel","placeholder","ngModelChange"]],template:function(n,t){1&n&&(p.Ob(0,"ion-header"),p.Ob(1,"ion-toolbar",0),p.Ob(2,"ion-buttons",1),p.Ob(3,"ion-button",2),p.Wb("click",function(){return t.util.back()}),p.Mb(4,"ion-icon",3),p.Nb(),p.Nb(),p.Ob(5,"ion-title"),p.rc(6),p.Nb(),p.Nb(),p.Nb(),p.Ob(7,"ion-content"),p.Ob(8,"div",4),p.Mb(9,"div",5),p.qc(10,P,6,4,"div",6),p.qc(11,T,5,3,"div",6),p.Nb(),p.Nb()),2&n&&(p.Ab(6),p.sc(t.util.translate("Cambiar contrase\xf1a")),p.Ab(4),p.ec("ngIf","0"===t.util.reset_pwd),p.Ab(1),p.ec("ngIf","1"===t.util.reset_pwd))},directives:[s.o,s.W,s.g,s.f,s.p,s.V,s.j,r.i,s.t,s.q,s.jb,a.i,a.l,s.N,s.eb,s.E,s.i],styles:[".main_content_div[_ngcontent-%COMP%]{width:100%;padding:30px;position:absolute;top:45%;left:50%;transform:translate(-50%,-50%)}.main_content_div[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:var(--ion-color-primary);font-size:20px;padding:10px}.main_content_div[_ngcontent-%COMP%]   .iconDiv[_ngcontent-%COMP%]{text-align:center}.main_content_div[_ngcontent-%COMP%]   .iconDiv[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:60px}.main_content_div[_ngcontent-%COMP%]   .form_div[_ngcontent-%COMP%]{padding:25px;position:relative}.main_content_div[_ngcontent-%COMP%]   .form_div[_ngcontent-%COMP%]   .main_head[_ngcontent-%COMP%]{display:block;color:var(--ion-color-primary);font-weight:600;font-size:30px;margin:10px}.main_content_div[_ngcontent-%COMP%]   .form_div[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:12px;color:#fff}.main_content_div[_ngcontent-%COMP%]   .form_div[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]{display:block;text-align:center;color:#fff}.main_content_div[_ngcontent-%COMP%]   .form_div[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{border-radius:20px;margin-bottom:15px;--padding-start:8px;--padding-end:10px;border:1px solid #d3d3d3}.main_content_div[_ngcontent-%COMP%]   .form_div[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-top:20px;--border-radius:20px;--background:var(--ion-color-primary);--color:#fff}.main_content_div[_ngcontent-%COMP%]   .form_div[_ngcontent-%COMP%]   .tri[_ngcontent-%COMP%]{width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-bottom:15px solid #fff;position:absolute;top:-15px}.main_content_div[_ngcontent-%COMP%]   .form_div[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%]{margin-top:20px;color:#fff;display:block;text-align:center}.main_content_div[_ngcontent-%COMP%]   .form_div[_ngcontent-%COMP%]   .signup_span[_ngcontent-%COMP%]{color:#fff;font-weight:600;font-size:14px}"]}),Y)}],R=((q=function t(){n(this,t)}).\u0275fac=function(n){return new(n||q)},q.\u0275mod=p.Jb({type:q}),q.\u0275inj=p.Ib({imports:[[l.i.forChild(S)],l.i]}),q),j=i("PCNd"),D=((W=function t(){n(this,t)}).\u0275fac=function(n){return new(n||W)},W.\u0275mod=p.Jb({type:W}),W.\u0275inj=p.Ib({imports:[[r.b,a.e,s.X,j.a,R]]}),W)}}])}();
(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{fhSy:function(n,t,e){"use strict";e.r(t),e.d(t,"RegisterPageModule",function(){return f});var i=e("ofXK"),o=e("3Pt+"),r=e("TEn/"),a=e("tyNb"),s=e("2Rin"),l=e("8RPc"),c=e("fXoL");function b(n,t){if(1&n&&(c.Ob(0,"span"),c.rc(1),c.Nb()),2&n){const n=c.Yb();c.Ab(1),c.tc(" ",n.util.translate("Next"),"")}}function g(n,t){1&n&&c.Mb(0,"ion-spinner",15)}function u(n,t){if(1&n&&(c.Ob(0,"span"),c.rc(1),c.Nb()),2&n){const n=c.Yb();c.Ab(1),c.tc(" ",n.util.translate("Submit"),"")}}function p(n,t){1&n&&c.Mb(0,"ion-spinner",15)}const d=[{path:"",component:(()=>{class n{constructor(n,t,e,i){this.location=n,this.util=t,this.api=e,this.navCtrl=i,this.user={email:"",password:"",first_name:"",last_name:"",gender:"male",phone:"",address:"",avatar:""},this.slideOpts={slidesPerView:1,allowTouchMove:!1},this.submitted=!1,this.isLogin=!1}ngOnInit(){}goNext(){this.slides.slideNext(500).then(n=>console.log(n))}emailValidation(){return console.log("user",this.user),""!==this.user.email&&this.user.email?/^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/.test(this.user.email)?void(this.isLogin=!0):(this.util.showToast(this.util.translate("Please enter valid email"),"danger","bottom"),!1):(this.util.showToast(this.util.translate("Please enter email"),"danger","bottom"),!1)}prev(){this.slides.slidePrev(1e3).then(n=>console.log(n))}back(){this.location.back()}submit(){this.isLogin=!0,this.navCtrl.navigateRoot(["/"])}}return n.\u0275fac=function(t){return new(t||n)(c.Lb(i.f),c.Lb(s.a),c.Lb(l.a),c.Lb(r.cb))},n.\u0275cmp=c.Fb({type:n,selectors:[["app-register"]],viewQuery:function(n,t){if(1&n&&c.wc(r.M,1),2&n){let n;c.kc(n=c.Xb())&&(t.slides=n.first)}},decls:32,vars:20,consts:[[1,"ion-padding"],["mode","md",3,"options"],["fill","clear",1,"backBtn",3,"click"],["slot","start","name","arrow-back-outline","color","primary"],[1,"emailForm"],[1,"ion-text-center"],[1,"subtitle","ion-text-center"],["lines","none"],["type","email",3,"ngModel","placeholder","ngModelChange"],["color","primary","expand","block",1,"btn_class",3,"disabled","click"],[4,"ngIf"],["name","circles",4,"ngIf"],["type","text",3,"ngModel","placeholder","ngModelChange"],["type","number",3,"ngModel","placeholder","ngModelChange"],["type","password",3,"ngModel","placeholder","ngModelChange"],["name","circles"]],template:function(n,t){1&n&&(c.Ob(0,"ion-content",0),c.Ob(1,"ion-slides",1),c.Ob(2,"ion-slide"),c.Ob(3,"ion-button",2),c.Wb("click",function(){return t.back()}),c.Mb(4,"ion-icon",3),c.Nb(),c.Ob(5,"div",4),c.Ob(6,"h2",5),c.rc(7),c.Nb(),c.Ob(8,"p",6),c.rc(9),c.Mb(10,"br"),c.rc(11),c.Nb(),c.Ob(12,"ion-item",7),c.Ob(13,"ion-input",8),c.Wb("ngModelChange",function(n){return t.user.email=n}),c.Nb(),c.Nb(),c.Ob(14,"ion-button",9),c.Wb("click",function(){return t.emailValidation()}),c.qc(15,b,2,1,"span",10),c.qc(16,g,1,0,"ion-spinner",11),c.Nb(),c.Nb(),c.Nb(),c.Ob(17,"ion-slide"),c.Ob(18,"ion-button",2),c.Wb("click",function(){return t.prev()}),c.Mb(19,"ion-icon",3),c.Nb(),c.Ob(20,"div",4),c.Ob(21,"ion-item",7),c.Ob(22,"ion-input",12),c.Wb("ngModelChange",function(n){return t.user.first_name=n}),c.Nb(),c.Nb(),c.Ob(23,"ion-item",7),c.Ob(24,"ion-input",12),c.Wb("ngModelChange",function(n){return t.user.last_name=n}),c.Nb(),c.Nb(),c.Ob(25,"ion-item",7),c.Ob(26,"ion-input",13),c.Wb("ngModelChange",function(n){return t.user.phone=n}),c.Nb(),c.Nb(),c.Ob(27,"ion-item"),c.Ob(28,"ion-input",14),c.Wb("ngModelChange",function(n){return t.user.password=n}),c.Nb(),c.Nb(),c.Ob(29,"ion-button",9),c.Wb("click",function(){return t.submit()}),c.qc(30,u,2,1,"span",10),c.qc(31,p,1,0,"ion-spinner",11),c.Nb(),c.Nb(),c.Nb(),c.Nb(),c.Nb()),2&n&&(c.Ab(1),c.ec("options",t.slideOpts),c.Ab(6),c.sc(t.util.translate("Sign Up")),c.Ab(2),c.tc("",t.util.translate("Enter your profile detail to")," "),c.Ab(2),c.tc("",t.util.translate("access your account")," "),c.Ab(2),c.ec("ngModel",t.user.email)("placeholder",t.util.translate("Email")),c.Ab(1),c.ec("disabled",t.isLogin),c.Ab(1),c.ec("ngIf",!t.isLogin),c.Ab(1),c.ec("ngIf",t.isLogin),c.Ab(6),c.ec("ngModel",t.user.first_name)("placeholder",t.util.translate("First Name")),c.Ab(2),c.ec("ngModel",t.user.last_name)("placeholder",t.util.translate("Last Name")),c.Ab(2),c.ec("ngModel",t.user.phone)("placeholder",t.util.translate("Phone Number")),c.Ab(2),c.ec("ngModel",t.user.password)("placeholder",t.util.translate("Password")),c.Ab(1),c.ec("disabled",t.isLogin),c.Ab(1),c.ec("ngIf",!t.isLogin),c.Ab(1),c.ec("ngIf",t.isLogin))},directives:[r.j,r.M,r.L,r.f,r.p,r.r,r.q,r.jb,o.i,o.l,i.i,r.eb,r.N],styles:["ion-slides[_ngcontent-%COMP%]{height:90vh}.backBtn[_ngcontent-%COMP%]{position:absolute;top:20px;left:0}h2[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{color:var(--ion-color-primary)!important}ion-item[_ngcontent-%COMP%]{--ion-background-color:#f3f3f3;border-radius:5px!important;margin-top:10px}.btn_class[_ngcontent-%COMP%]{color:var(--ion-color-primary);height:50px;margin-top:20px}.emailForm[_ngcontent-%COMP%]{text-align:center;width:100%}.emailForm[_ngcontent-%COMP%]   .login-logo[_ngcontent-%COMP%]{text-align:center;right:0;left:0;margin:30% auto 20px}.emailForm[_ngcontent-%COMP%]   .login-logo[_ngcontent-%COMP%]   .logo_icon[_ngcontent-%COMP%]{width:110px!important}.emailForm[_ngcontent-%COMP%]   .back_img[_ngcontent-%COMP%]{width:95%!important;height:25vh;border:1px solid var(--ion-color-primary);border-radius:5px}.emailForm[_ngcontent-%COMP%]   .back_img[_ngcontent-%COMP%], .emailForm[_ngcontent-%COMP%]   .back_img[_ngcontent-%COMP%]   .gender[_ngcontent-%COMP%]{background-position:50%;background-repeat:no-repeat;background-size:contain}.emailForm[_ngcontent-%COMP%]   .back_img[_ngcontent-%COMP%]   .gender[_ngcontent-%COMP%]{width:25px!important;height:25px;position:absolute;right:20px;top:10px}"]}),n})()}];let m=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=c.Jb({type:n}),n.\u0275inj=c.Ib({imports:[[a.i.forChild(d)],a.i]}),n})();var h=e("PCNd");let f=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=c.Jb({type:n}),n.\u0275inj=c.Ib({imports:[[i.b,o.e,r.X,h.a,m]]}),n})()}}]);
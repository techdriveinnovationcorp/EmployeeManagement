import{f as ue,g as w,h as G,m as fe,n as $,p as he,u as ge}from"./chunk-3P3ZXZNA.js";import{O as de,P as ce,a as x}from"./chunk-KBH2GQER.js";import{b as L,c as me,d as Y,g as pe,i as K}from"./chunk-3D6W6ZOO.js";import{c as Q,d as W,f as T,g as D,h as z}from"./chunk-IX6G3U3V.js";import{$ as ee,$a as k,Bb as f,Db as v,Dc as re,Ec as j,Fc as ae,Gb as B,Hc as le,Ic as se,Ka as S,Nb as N,Ob as b,Ub as U,Vb as oe,Wb as X,Xa as s,Xb as J,Ya as M,Za as ne,bb as V,ca as I,da as h,db as H,eb as O,ha as A,ia as F,na as R,nb as E,oa as g,pb as p,qa as te,ra as ie,sb as Z,vb as a,vc as P,wa as c,wb as l,xa as u,xb as m,yb as C}from"./chunk-WSRERBCD.js";import"./chunk-ZC6IZ3YH.js";var we=[{path:"Employee_LIST",loadChildren:()=>import("./chunk-GV47B6LV.js").then(t=>t.Employee_LISTModule)},{path:"Employee_ENTRY",loadChildren:()=>import("./chunk-CEDMKZGI.js").then(t=>t.Employee_ENTRYModule)},{path:"Employee_VIEW",loadChildren:()=>import("./chunk-DJHPSF5M.js").then(t=>t.Employee_VIEWModule)},{path:"location_ENTRY",loadChildren:()=>import("./chunk-2UVDRNJ4.js").then(t=>t.location_ENTRYModule)},{path:"location_LIST",loadChildren:()=>import("./chunk-6WZDFKN7.js").then(t=>t.location_LISTModule)},{path:"location_VIEW",loadChildren:()=>import("./chunk-OBTIQLCG.js").then(t=>t.location_VIEWModule)},{path:"department_ENTRY",loadChildren:()=>import("./chunk-UU5RDDG6.js").then(t=>t.department_ENTRYModule)},{path:"department_LIST",loadChildren:()=>import("./chunk-I4NJSRZT.js").then(t=>t.department_LISTModule)},{path:"department_VIEW",loadChildren:()=>import("./chunk-RVOJ7LQZ.js").then(t=>t.department_VIEWModule)},{path:"home",loadChildren:()=>import("./chunk-PIGAIMMB.js").then(t=>t.HomeModule)},{path:"",redirectTo:"/home",pathMatch:"full"}],ve=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=g({type:e}),e.\u0275inj=h({imports:[K.forRoot(we),K]});let t=e;return t})();var ye=(()=>{let e=class e{constructor(){this.menuConfigration=[{menuId:10001,menuDisplayName:"Employee Entry",menuIcon:"bi bi-cart4",menuUrl:"Employee_ENTRY"},{menuId:10004,menuDisplayName:"Employee List",menuIcon:"bi bi-list-columns-reverse",menuUrl:"Employee_LIST"},{menuId:10003,menuDisplayName:"Department Entry",menuIcon:"bi bi-cart4",menuUrl:"department_ENTRY"},{menuId:10002,menuDisplayName:"Department List",menuIcon:"bi bi-list-columns-reverse",menuUrl:"department_LIST"},{menuId:10003,menuDisplayName:"Location Entry",menuIcon:"bi bi-cart4",menuUrl:"location_ENTRY"},{menuId:10002,menuDisplayName:"Location List",menuIcon:"bi bi-list-columns-reverse",menuUrl:"location_LIST"}]}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=I({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var _e=(()=>{let e=class e{transform(o){let i={A:"#B22222",B:"#556B2F",C:"#2B4F81",D:"#FF4500",E:"#4B0082",F:"#006400",G:"#8B4513",H:"#CD5C5C",I:"#1E90FF",J:"#8B0000",K:"#C71585",L:"#B8860B",M:"#228B22",N:"#A9A9A9",O:"#8B0000",P:"#9932CC",Q:"#6B8E23",R:"#C71585",S:"#4682B4",T:"#DB7093",U:"#800080",V:"#556B2F",W:"#483D8B",X:"#A52A2A",Y:"#8B4513",Z:"#800080"},r=o.toUpperCase()[0];return i[r]||"#000"}};e.\u0275fac=function(i){return new(i||e)},e.\u0275pipe=te({name:"bgColor",type:e,pure:!0});let t=e;return t})();var Ie=t=>({"background-color":t}),Ve=t=>({color:t}),Oe=(t,e)=>({visibility:t,height:e});function Be(t,e){t&1&&(a(0,"div",21),m(1,"i",22),l())}function Ue(t,e){if(t&1){let n=C();a(0,"div",31),f("click",function(){c(n);let i=v().$implicit,r=v();return u(r.collapseGroupMenu(i))}),m(1,"i",32),l()}}function Pe(t,e){if(t&1){let n=C();a(0,"div",33),f("click",function(){c(n);let i=v().$implicit,r=v();return u(r.expandGroupMenu(i))}),m(1,"i",34),l()}}function je(t,e){if(t&1){let n=C();a(0,"div",35),f("click",function(){let i=c(n).$implicit,r=v(2);return u(r.onMenuSelected(i))}),a(1,"div",36)(2,"div",17),m(3,"i"),l(),a(4,"div",19)(5,"span",26),N(6),l()(),a(7,"div",21),m(8,"i",22),l()()()}if(t&2){let n=e.$implicit;s(),p("ngStyle",oe(6,Oe,n!=null&&n.expand?"visible":"hidden",n!=null&&n.expand?"10vh":"0")),s(2),Z(n.menuIcon),s(2),B("matTooltip",n.menuDisplayName),s(),b(n.menuDisplayName)}}function Le(t,e){if(t&1){let n=C();a(0,"div",24),f("click",function(){let i=c(n).$implicit,r=v();return u(i.menuItems?null:r.onMenuSelected(i))}),a(1,"div",16),f("click",function(){let i=c(n).$implicit,r=v();return u(i.menuItems?r.toggleMenuGroup(i):null)}),a(2,"div",25),m(3,"i",12),l(),a(4,"div",19)(5,"span",26),N(6),l()(),E(7,Be,2,0,"div",27)(8,Ue,2,0,"div",28)(9,Pe,2,0,"div",29),l(),E(10,je,9,9,"div",30),l()}if(t&2){let n=e.$implicit;s(2),p("ngStyle",U(11,Ie,n!=null&&n.expand?"rgba(0, 140, 255, 0.642)":"#eee")),s(),Z(n.menuIcon),p("ngStyle",U(13,Ve,n!=null&&n.expand?"#fff":"#000")),s(2),B("matTooltip",n.menuDisplayName),s(),b(n.menuDisplayName),s(),p("ngIf",!(!(n==null||n.menuItems==null)&&n.menuItems.length)),s(),p("ngIf",!n.expand&&(n==null||n.menuItems==null?null:n.menuItems.length)>0),s(),p("ngIf",n.expand&&(n==null||n.menuItems==null?null:n.menuItems.length)>0),s(),p("ngForOf",n.menuItems)}}var Ee=(()=>{let e=class e{constructor(o,i){this.appUtils=o,this.menuConfig=i,this.menuConfigData=this.menuConfig.menuConfigration,this.sideNavState="out",this.backdropState="hidden"}ngOnInit(){this.initialMenus()}initialMenus(){this.menuConfigData.forEach(o=>{let i=0;o?.menuItems?.length>0?(o.index=i,o.expand=!1,i++,o.menuItems.forEach(r=>{r.index=i,r.expand=!1,i++})):(o.index=i,i++)})}toggleSideNav(){this.sideNavState=this.sideNavState==="out"?"in":"out",this.backdropState=this.backdropState==="hidden"?"visible":"hidden"}toggleMenuGroup(o){this.menuConfigData.forEach(i=>{i.index===o?.index&&(i.expand=!i.expand,i?.menuItems.forEach(r=>{r.expand=!r.expand}))})}expandGroupMenu(o){this.menuConfigData.forEach(i=>{i.index===o?.index&&(i.expand=!0,i?.menuItems.forEach(r=>{r.expand=!0}))})}collapseGroupMenu(o){this.menuConfigData.forEach(i=>{i.index===o?.index&&(i.expand=!1,i?.menuItems.forEach(r=>{r.expand=!1}))})}onMenuSelected(o){this.initialMenus(),this.toggleSideNav(),this.appUtils.routerNavigation({},typeof o=="string"?o:o.menuUrl)}};e.\u0275fac=function(i){return new(i||e)(M(x),M(ye))},e.\u0275cmp=R({type:e,selectors:[["menu"]],decls:29,vars:13,consts:[["sideNavContainer",""],[1,"tic-pfm-menu-bar"],[1,"tic-pfm-menu-left"],["matTooltip","Main Menu","matTooltipPosition","right",1,"tic-pfm-icon",3,"click"],[1,"bi","bi-list"],[1,"LogoImageContainer"],["width","100%","src","./assets/Images/tic-logo.png","alt","",1,"tic-pfm-org-image"],[1,"tic-pfm-menu-title"],[1,"tic-pfm-menu-right"],["matTooltip","Notification",1,"LogoImageContainer"],["src","./assets/Images/notification.png","width","100%","alt",""],[1,"userProfile",3,"matTooltip"],[3,"ngStyle"],[1,"menu-backdrop",2,"z-index","98 !important",3,"click"],[1,"tic-pfm-side-nav-container",2,"z-index","99 !important"],[1,"tic-pfm-menu-spacer"],[1,"navBox",3,"click"],[1,"tic-pfm-menu-icon"],[1,"bi","bi-house-door"],[1,"tic-menu-item-name"],["matTooltip","Home"],[1,"single-menu","tic-pfm-icon"],[2,"margin-top","0.8vh"],["class","nav-container",3,"click",4,"ngFor","ngForOf"],[1,"nav-container",3,"click"],[1,"tic-pfm-menu-icon",3,"ngStyle"],[3,"matTooltip"],["class","single-menu tic-pfm-icon",4,"ngIf"],["class","single-menu tic-pfm-icon expand-collapse-btn","matTooltip","Expand",3,"click",4,"ngIf"],["class","single-menu tic-pfm-icon expand-collapse-btn","matTooltip","Collapse",3,"click",4,"ngIf"],[3,"click",4,"ngFor","ngForOf"],["matTooltip","Expand",1,"single-menu","tic-pfm-icon","expand-collapse-btn",3,"click"],[1,"bi","bi-caret-down-fill",2,"margin-top","0.8vh"],["matTooltip","Collapse",1,"single-menu","tic-pfm-icon","expand-collapse-btn",3,"click"],[1,"bi","bi-caret-up-fill",2,"margin-top","0.8vh"],[3,"click"],[1,"navBox","child-menu-box",3,"ngStyle"]],template:function(i,r){if(i&1){let d=C();a(0,"div",1)(1,"div",2)(2,"div",3),f("click",function(){return c(d),u(r.toggleSideNav())}),m(3,"i",4),l(),a(4,"div",5),m(5,"img",6),l(),a(6,"span",7),N(7),l()(),a(8,"div",8)(9,"div",9),m(10,"img",10),l(),a(11,"div",11)(12,"span",12),X(13,"bgColor"),N(14),X(15,"uppercase"),l()()()(),a(16,"div",13),f("click",function(){return c(d),u(r.toggleSideNav())}),l(),a(17,"div",14,0),m(19,"div",15),a(20,"div",16),f("click",function(){return c(d),u(r.onMenuSelected("home"))}),a(21,"div",17),m(22,"i",18),l(),a(23,"div",19)(24,"span",20),N(25,"Home"),l()(),a(26,"div",21),m(27,"i",22),l()(),E(28,Le,11,15,"div",23),l()}i&2&&(s(7),b(r.appUtils.appConfig.applicationDisplayName),s(4),B("matTooltip",r.appUtils.appConfig.userName),s(),p("ngStyle",U(11,Ie,J(13,7,r.appUtils.appConfig.userName[0]))),s(2),b(J(15,9,r.appUtils.appConfig.userName[0])),s(2),p("@fadeInOut",r.backdropState),s(),p("@slideInOut",r.sideNavState),s(11),p("ngForOf",r.menuConfigData))},dependencies:[re,j,ae,de,le,_e],encapsulation:2,data:{animation:[Q("slideInOut",[D("out",T({left:"-50vh"})),D("in",T({left:"0"})),z("out => in",W("0.3s ease-in-out")),z("in => out",W("0.3s ease-in-out"))]),Q("fadeInOut",[D("hidden",T({opacity:"0",pointerEvents:"none"})),D("visible",T({opacity:"1",pointerEvents:"auto"})),z("hidden <=> visible",W("0.3s ease-in-out"))])]}});let t=e;return t})();function We(t,e){t&1&&(a(0,"div",3),m(1,"img",4),l())}var Ce=(()=>{let e=class e{constructor(o){this.appUtils=o,this.appConfig={applicationName:"employeeManagement",applicationDisplayName:"Employee Management",userMail:"varathan@gmail.com",userName:"Vasanth",assignedMenugroups:[]}}ngOnInit(){this.appUtils.appConfig=this.appConfig}};e.\u0275fac=function(i){return new(i||e)(M(x))},e.\u0275cmp=R({type:e,selectors:[["app-root"]],decls:3,vars:1,consts:[["class","mainLoader",4,"ngIf"],[2,"position","fixed","width","100%","top","0","z-index","100"],[2,"width","100%","height","100svh"],[1,"mainLoader"],["src","./assets/Images/peacockLoader.gif","alt",""]],template:function(i,r){i&1&&(E(0,We,2,0,"div",0),m(1,"menu",1)(2,"router-outlet",2)),i&2&&p("ngIf",r.appUtils.isMainloading)},dependencies:[j,pe,Ee]});let t=e;return t})();var ze=(()=>{let e=class e extends ${constructor(o,i,r){super(o,i,r,F(k,{optional:!0}))}ngOnDestroy(){this.flush()}};e.\u0275fac=function(i){return new(i||e)(A(P),A(w),A(G))},e.\u0275prov=I({token:e,factory:e.\u0275fac});let t=e;return t})();function Ge(){return new fe}function $e(t,e,n){return new ge(t,e,n)}var xe=[{provide:G,useFactory:Ge},{provide:$,useClass:ze},{provide:V,useFactory:$e,deps:[L,$,O]}],Ne=[{provide:w,useFactory:()=>new he},{provide:S,useValue:"BrowserAnimations"},...xe],He=[{provide:w,useClass:ue},{provide:S,useValue:"NoopAnimations"},...xe],Se=(()=>{let e=class e{static withConfig(o){return{ngModule:e,providers:o.disableAnimations?He:Ne}}};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=g({type:e}),e.\u0275inj=h({providers:Ne,imports:[Y]});let t=e;return t})();var Me=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=g({type:e}),e.\u0275inj=h({imports:[se,Se,ce]});let t=e;return t})();var Ze="@",Xe=(()=>{let e=class e{constructor(o,i,r,d,_){this.doc=o,this.delegate=i,this.zone=r,this.animationType=d,this.moduleImpl=_,this._rendererFactoryPromise=null,this.scheduler=F(k,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-O4KNVT53.js")).catch(i=>{throw new ee(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:r})=>{this._engine=i(this.animationType,this.doc,this.scheduler);let d=new r(this.delegate,this._engine,this.zone);return this.delegate=d,d})}createRenderer(o,i){let r=this.delegate.createRenderer(o,i);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let d=new q(r);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(_=>{let De=_.createRenderer(o,i);d.use(De)}).catch(_=>{d.use(r)}),d}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(i){ne()},e.\u0275prov=I({token:e,factory:e.\u0275fac});let t=e;return t})(),q=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let n of this.replay)n(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,n){return this.delegate.createElement(e,n)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,n){this.delegate.appendChild(e,n)}insertBefore(e,n,o,i){this.delegate.insertBefore(e,n,o,i)}removeChild(e,n,o){this.delegate.removeChild(e,n,o)}selectRootElement(e,n){return this.delegate.selectRootElement(e,n)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,n,o,i){this.delegate.setAttribute(e,n,o,i)}removeAttribute(e,n,o){this.delegate.removeAttribute(e,n,o)}addClass(e,n){this.delegate.addClass(e,n)}removeClass(e,n){this.delegate.removeClass(e,n)}setStyle(e,n,o,i){this.delegate.setStyle(e,n,o,i)}removeStyle(e,n,o){this.delegate.removeStyle(e,n,o)}setProperty(e,n,o){this.shouldReplay(n)&&this.replay.push(i=>i.setProperty(e,n,o)),this.delegate.setProperty(e,n,o)}setValue(e,n){this.delegate.setValue(e,n)}listen(e,n,o){return this.shouldReplay(n)&&this.replay.push(i=>i.listen(e,n,o)),this.delegate.listen(e,n,o)}shouldReplay(e){return this.replay!==null&&e.startsWith(Ze)}};function be(t="animations"){return H("NgAsyncAnimations"),ie([{provide:V,useFactory:(e,n,o)=>new Xe(e,n,o,t),deps:[P,L,O]},{provide:S,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Te=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=g({type:e,bootstrap:[Ce]}),e.\u0275inj=h({providers:[x,be()],imports:[Y,ve,Me]});let t=e;return t})();me().bootstrapModule(Te).catch(t=>console.error(t));

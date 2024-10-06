import{a as U,b as _,c as G,e as H,f as J,g as Y,h as V,i as q,j as W,m as X,n as Z,o as $,r as K}from"./chunk-G3RRGCM3.js";import{a as z,b as Q}from"./chunk-RBHPZCP3.js";import{a as F,b as L,d as B,e as v,h as P,k,l as w,m as it,n as x,o as g}from"./chunk-TE4P23CZ.js";import{P as R,a as T}from"./chunk-KBH2GQER.js";import{f as N,i as A}from"./chunk-3D6W6ZOO.js";import"./chunk-IX6G3U3V.js";import{Ec as E,Ic as I,Nb as u,Ob as D,Xa as f,Ya as p,da as j,na as O,nb as C,oa as M,pb as h,vb as l,wb as r,xb as m}from"./chunk-WSRERBCD.js";import"./chunk-VEDS6FP2.js";import{a as y,h as et,j as S}from"./chunk-ZC6IZ3YH.js";var b=et(it());function at(n,a){n&1&&(l(0,"div",11)(1,"div",12),m(2,"span",13)(3,"div",14),r(),l(4,"div",12),m(5,"span",13)(6,"div",14),r(),l(7,"div",12),m(8,"span",13)(9,"div",14),r()())}function rt(n,a){n&1&&(l(0,"div",11)(1,"div",15)(2,"span"),u(3,"Location Id "),r(),m(4,"input",16),r(),l(5,"div",15)(6,"span"),u(7,"Location Name "),r(),m(8,"input",17),r(),l(9,"div",15)(10,"span"),u(11,"Status "),r(),m(12,"mat-slide-toggle",18),r()()),n&2&&(f(12),h("color","primary"))}var tt=(()=>{let a=class a{constructor(t,e,o,i,s,c,d){this.dataProvider=t,this.appUtils=e,this.route=o,this.layoutConfig=i,this.fb=s,this.firebaseProvider=c,this.snackBar=d,this.recordId="",this.isSkeletonLoading=!1,this.layoutName="location_ENTRY",this.layoutDisplayName=this.layoutConfig.layoutConfiguration[this.layoutName].layoutDisplayName,this.headerActionInfo=(0,b.cloneDeep)(this.layoutConfig.layoutConfiguration[this.layoutName].headerActionInfo),this.mappingDetails=(0,b.cloneDeep)(this.layoutConfig.layoutConfiguration[this.layoutName].mappingDetails),this.objectHierarchy=[{objectName:"location",objectType:"primary",rootPath:"location_DUMMY",primaryFieldName:"locationid",primaryFieldNamePrefix:"loc_",childObject:[]}],this.dataObject={},this.locationdetails=this.fb.group({location_DUMMY:this.fb.group({locationid:[""],locationname:[""],status:[!0],createdBy:[this.appUtils.appConfig.userMail],modifiedBy:[this.appUtils.appConfig.userMail],createdAt:[new Date().toLocaleString()],modifiedAt:[new Date().toLocaleString()],type:"location"})})}showSnackBar(t,e){this.snackBar.open(t,"Close",{duration:e||3e3,horizontalPosition:"center",verticalPosition:"bottom"})}ngOnInit(){this.route.queryParams.subscribe(t=>{t.data!==void 0&&JSON.parse(t.data).id&&(this.recordId=JSON.parse(t.data).id,this.recordId&&this.fetchForEditRecord().then(e=>{e&&(this.showSnackBar("data fetch successfully",3e3),this.isSkeletonLoading=!1)}))})}fetchForEditRecord(){return S(this,null,function*(){this.isSkeletonLoading=!!this.recordId;try{let t=yield this.dataProvider.fetch(this.objectHierarchy,this.recordId,this);return this.updateFormDataAfterSave(this.dataObject,this.locationdetails),t}catch(t){console.error("Error fetching data:",t)}finally{this.isSkeletonLoading=!1}})}updateFormDataAfterSave(t,e){Object.keys(t).forEach(o=>{let i=t[o],s=e.controls[o];s&&Object.keys(i).forEach(c=>{let d=s.get(c);d&&d.setValue(i[c])})})}save(){this.appUtils.isMainloading=!0;let t=[this.locationdetails.value];this.dirtyStatus=this.checkFormDirtyStatus(),this.setDataObject(t),console.log("Data Object to Save:",this.dataObject),this.isSkeletonLoading=!0,this.dataProvider.handleSave(t,this.objectHierarchy[0],"",this).then(e=>{console.log("Primary object saved with ID and Rev:",e),this.recordId=e.id,this.recordRev=e.rev,this.fetchForEditRecord(),this.appUtils.isMainloading=!1,this.isSkeletonLoading=!1;let o=this.recordId!==""?"Record Updated successfully":"Record saved successfully";this.showSnackBar(o)}).catch(e=>{console.error("Error during save:",e),this.showSnackBar(e,6e3),this.appUtils.isMainloading=!1,this.isSkeletonLoading=!1})}setDataObject(t){t.forEach(e=>{let o=y({},e);Object.keys(o).forEach(i=>{this.dataObject[i]?(this.dataObject[i].id=this.dataObject[i].id?this.dataObject[i].id:"",this.dataObject[i].rev=this.dataObject[i].rev?this.dataObject[i].rev:""):(this.dataObject[i]=y({},o[i]),this.dataObject[i].id=this.dataObject[i].id?this.dataObject[i].id:"",this.dataObject[i].rev=this.dataObject[i].rev?this.dataObject[i].rev:"")})})}checkFormDirtyStatus(){let t={},e=this.locationdetails;return Object.keys(e.controls).forEach(o=>{let i=e.get(o);if(i)if(this.dataObject[o]){let s=JSON.parse(JSON.stringify(this.dataObject[o]));delete s.id,delete s.rev;let c=JSON.parse(JSON.stringify(i.value));Object.keys(c).forEach(d=>{c[d]===null&&delete c[d]}),Object.keys(s).forEach(d=>{s[d]===null&&delete s[d]}),t[o]=!this.objectsAreEqual(c,s)}else t[o]=!1}),console.log(t),t}objectsAreEqual(t,e){let o=Object.keys(t);for(let i of o)if(t[i]!==e[i])return!1;return!0}};a.\u0275fac=function(e){return new(e||a)(p(g),p(T),p(N),p(x),p(V),p(v),p(z))},a.\u0275cmp=O({type:a,selectors:[["location_ENTRY"]],decls:16,vars:6,consts:[[1,"dummyHeader"],[1,"pageHeader"],[1,"pageTitle"],[1,"pageButtonGroup"],[3,"buttonData","parentContext"],[1,"applicationContainer"],[1,"section",3,"formGroup"],[1,"sectionHeader"],[1,"sectionContent"],["class","row",4,"ngIf"],["class","row ",4,"ngIf"],[1,"row"],[1,"inputContainer"],[1,"fieldNameSkeleton"],[1,"inputFieldSkeleton"],["formGroupName","location_DUMMY",1,"inputContainer"],["type","text","readonly","","formControlName","locationid",1,"readOnlyTextBox"],["type","text","formControlName","locationname"],["formControlName","status",3,"color"]],template:function(e,o){e&1&&(m(0,"div",0)(1,"div",0),l(2,"div",1)(3,"div",2)(4,"h2"),u(5),r()(),l(6,"div",3),m(7,"app-layout-action-buttons",4),r()(),l(8,"div",5)(9,"div",6)(10,"div",7)(11,"span"),u(12,"location Details"),r()(),l(13,"div",8),C(14,at,10,0,"div",9)(15,rt,13,1,"div",10),r()()()),e&2&&(f(5),D(o.layoutDisplayName),f(2),h("buttonData",o.headerActionInfo)("parentContext",o),f(2),h("formGroup",o.locationdetails),f(5),h("ngIf",o.isSkeletonLoading),f(),h("ngIf",!o.isSkeletonLoading))},dependencies:[E,k,U,_,G,H,Y,J,Z],encapsulation:2});let n=a;return n})();var nt=[{path:"",component:tt}],Rt=(()=>{let a=class a{};a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=M({type:a}),a.\u0275inj=j({providers:[v,g,{provide:W,useValue:{color:"primary"}}],imports:[I,P,w,q,F.initializeApp(L),B,Q,R,X,$,K,A.forChild(nt)]});let n=a;return n})();export{Rt as location_ENTRYModule};

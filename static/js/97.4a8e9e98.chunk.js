"use strict";(self.webpackChunkrent_car=self.webpackChunkrent_car||[]).push([[97],{2097:function(e,a,s){s.r(a),s.d(a,{default:function(){return N}});var n="UserPage_userPage__Gdrbq",r="UserPage_titlePage__L2xJe",t=s(2713),l=s(1413),i=s(9439),c={form:"UserDataForm_form__Biis+",label:"UserDataForm_label__hJiV6",field:"UserDataForm_field__QuH52",errorValidation:"UserDataForm_errorValidation__ss+rG",buttonsChanges:"UserDataForm_buttonsChanges__yspOl"},d=s(5705),u=s(6727),o=s(5147),m=s(2791),h=s(9434),x=s(184),b=function(e){var a=e.userData,s=a.userData,n=s.email,r=s.name,t=s.city,b=void 0===t?"no city yet":t,j=s.tel,_=void 0===j?"no tel yet":j,f=a.userId,N=(0,m.useState)(!0),g=(0,i.Z)(N,2),v=g[0],y=g[1],C=(0,m.useState)(""),p=(0,i.Z)(C,2),D=p[0],V=p[1],Z=(0,h.I0)(),U=u.Ry().shape({name:u.Z_().required("Please input your name"),email:u.Z_().required("Please input email"),tel:u.Z_(),city:u.Z_()}),k={name:r,email:n,city:b,tel:_};return(0,x.jsx)(x.Fragment,{children:(0,x.jsx)(d.J9,{initialValues:k,validationSchema:U,onSubmit:function(e,a){var s={dataUser:(0,l.Z)({},e),userId:f};"Save changes"===D?(y(!0),Z((0,o.Nq)(s))):a.setValues(k)},children:(0,x.jsxs)(d.l0,{className:c.form,children:[(0,x.jsxs)("label",{className:c.label,children:["Name",(0,x.jsx)(d.gN,{name:"name",className:c.field,disabled:v}),(0,x.jsx)(d.Bc,{name:"name",render:function(e){return(0,x.jsx)("div",{className:c.errorValidation,children:e})}})]}),(0,x.jsxs)("label",{className:c.label,children:["Email",(0,x.jsx)(d.gN,{name:"email",disabled:v}),(0,x.jsx)(d.Bc,{name:"email",render:function(e){return(0,x.jsx)("div",{className:c.errorValidation,children:e})}})]}),(0,x.jsxs)("label",{className:c.label,children:["Tel",(0,x.jsx)(d.gN,{name:"tel",disabled:v}),(0,x.jsx)(d.Bc,{name:"tel",render:function(e){return(0,x.jsx)("div",{className:c.errorValidation,children:e})}})]}),(0,x.jsxs)("label",{className:c.label,children:["City",(0,x.jsx)(d.gN,{name:"city",disabled:v}),(0,x.jsx)(d.Bc,{name:"city",render:function(e){return(0,x.jsx)("div",{className:c.errorValidation,children:e})}})]}),(0,x.jsxs)("div",{className:c.buttonsChanges,children:[(0,x.jsx)("button",{type:"submit",className:c.buttonChangeCar,onClick:function(e){y(!v),V(e.target.textContent)},children:v?"Change data":"Cancel changes"}),(0,x.jsx)("button",{type:"submit",className:c.submit,onClick:function(e){V(e.target.textContent)},disabled:v,children:"Save changes"})]})]})})})},j=s(5700),_=s(7689),f=s(6351),N=function(){var e=(0,h.v9)(f.c7),a=(0,h.v9)(f.tT),s=(0,_.s0)();return(0,x.jsx)("section",{className:n,children:(0,x.jsxs)(j.Z,{children:[(0,x.jsx)("h1",{className:r,children:"Your information"}),(0,x.jsx)(b,{userData:{userData:a,userId:e}}),(0,x.jsx)(t.Z,{text:"My Cars",handleButton:function(){s("/user/userCars")},view:"mycars"})]})})}}}]);
//# sourceMappingURL=97.4a8e9e98.chunk.js.map
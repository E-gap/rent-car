"use strict";(self.webpackChunkrent_car=self.webpackChunkrent_car||[]).push([[745],{5722:function(e,a,s){s.d(a,{Z:function(){return i}});var n="CarMapCharacteristic_grayBg__gGZHK",r=function(e,a){return"number"===typeof e[0]&&"down"===a?function(e,a){return a-e}:"number"===typeof e[0]&&"up"===a?function(e,a){return e-a}:"string"===typeof e[0]&&"up"===a?function(e,a){return e.localeCompare(a)}:"string"===typeof e[0]&&"down"===a?function(e,a){return a.localeCompare(e)}:void 0},t=s(184),i=function(e){var a=e.characteristics,s=e.sort,i=void 0===s?"up":s;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("option",{value:"",className:n,children:"Select"}),a.sort(r(a,i)).map((function(e,a){return(0,t.jsx)("option",{value:e,children:e},a)})),(0,t.jsx)("option",{value:"Else",children:"Else"})]})}},2032:function(e,a,s){s.d(a,{Z:function(){return M}});var n="CarsList_carList__dnup8",r=s(9439),t="ItemCar_itemCar__njZlZ",i="ItemCar_carPhoto__+QZtv",l="ItemCar_notImageIcon__oFEuo",c="ItemCar_carInfo__f555B",o="ItemCar_iconFavorite__M2Gb-",d="ItemCar_favoriteSelected__+uwZ7",u="ItemCar_iconDelete__3qexn",m="ItemCar_iconsFavoriteDelete__YqWvv",f="ItemCar_carLink__ty7+2",p="ItemCar_info__nAST0",x=s(1087),j=s(6856),h=s(9126),N=s(9434),_=s(6351),g=s(2791),y=s(5147),v=s(8922),b=s(5715),C=s(4523),I=s(1686),w=s.n(I),k={carInfoShirt:"CarInfoShirt_carInfoShirt__Fb2vb",mainInfo:"CarInfoShirt_mainInfo__ajXt1",priceInfo:"CarInfoShirt_priceInfo__vdwK8",iconInfo:"CarInfoShirt_iconInfo__4Hg6J",detailInfo:"CarInfoShirt_detailInfo__F6Tbn",infoPart_1:"CarInfoShirt_infoPart_1__-0sBE",infoPart_2:"CarInfoShirt_infoPart_2__EE6su"},S=s(1578),Z=s(6355),F=s(184),B=function(e){var a=e.oneCar,s=a.mark,n=a.model,r=a.price,t=a.year,i=a.mileage,l=a.fueltype,c=a.city,o=a.transmission;return(0,F.jsxs)("section",{className:k.carInfoShirt,children:[(0,F.jsxs)("div",{className:k.mainInfo,children:[(0,F.jsx)("p",{className:k.markInfo,children:s}),(0,F.jsx)("p",{className:k.modelInfo,children:n}),(0,F.jsx)("p",{className:k.yearInfo,children:t})]}),(0,F.jsxs)("p",{className:k.priceInfo,children:[r,"$"]}),(0,F.jsxs)("div",{className:k.detailInfo,children:[(0,F.jsxs)("ul",{className:"".concat(k.infoPart_1," ").concat(k.list),children:[(0,F.jsxs)("li",{className:k.mileage,children:[(0,F.jsx)(h.qwN,{className:k.iconInfo})," ",i]}),(0,F.jsxs)("li",{className:k.fueltype,children:["Benzin"===l&&(0,F.jsx)(h.XkQ,{className:k.iconInfo}),"Diesel"===l&&(0,F.jsx)(h.oDx,{className:k.iconInfo}),"Electro"===l&&(0,F.jsx)(Z.Umb,{className:k.iconInfo}),"Gas"===l&&(0,F.jsx)(h.RSW,{className:k.iconInfo}),l]})]}),(0,F.jsxs)("ul",{className:"".concat(k.infoPart_2," ").concat(k.list),children:[(0,F.jsxs)("li",{className:k.city,children:[(0,F.jsx)(j.lPv,{className:k.iconInfo}),c]}),(0,F.jsxs)("li",{className:k.trasmission,children:["Manual"===o?(0,F.jsx)(S.gm_,{className:k.iconInfo}):(0,F.jsx)(j.h7X,{className:k.iconInfo}),o]})]})]})]})},P=function(e){var a,s=e.oneCar,n=e.state,I=(0,g.useState)(!1),k=(0,r.Z)(I,2),S=k[0],Z=k[1],P=(0,N.I0)(),E=(0,N.v9)(_.DJ),M=(0,N.v9)(_.c7),A=(0,N.v9)(_.Q8);return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsxs)("li",{className:t,children:[(0,F.jsx)(x.OL,{to:"/cars/".concat(s._id),className:f,state:n,children:"null"!==s.photo?(0,F.jsx)("img",{src:s.photo,className:i,alt:"car appearance"}):(0,F.jsx)(h.Lwf,{className:l})}),(0,F.jsx)(B,{oneCar:s}),(0,F.jsxs)("div",{className:c,children:[(0,F.jsxs)("p",{className:p,children:[s.mark," ",s.model]}),(0,F.jsxs)("div",{className:m,children:[(0,F.jsx)(j.Yqy,{className:E.includes(s._id)?"".concat(o," ").concat(d):o,onClick:function(){A?P((0,y.SB)(s._id)):w().Notify.failure("Please, log in to add item to favorites ",{fontSize:"15px",position:"center-center",timeout:2e3,width:"400px"})}}),(null===(a=s.owner)||void 0===a?void 0:a._id)===M&&(0,F.jsx)(h.dnY,{className:u,onClick:function(){Z(!0)}})]}),(0,F.jsxs)("p",{className:p,children:["price: ",s.price,"$"]})]})]}),S&&(0,F.jsx)(b.D,{setIsModalWindowOpen:Z,onKeyDown:function(e){e.target.getAttribute("class").includes("backdrop")&&Z(!1),"Escape"===e.code&&Z(!1)},children:(0,F.jsx)(C.Z,{textQuestion:"Are you sure you want to delete this item ?",setIsModalWindowOpen:Z,handleOk:function(){Z(!1),P((0,v.tD)(s._id))}})})]})},E=s(7689),M=function(e){var a=e.cars,s=(0,E.TH)();return(0,F.jsx)("ul",{className:n,children:a.map((function(e){return(0,F.jsx)(P,{oneCar:e,state:{from:s}},e._id)}))})}},9545:function(e,a,s){s.d(a,{Z:function(){return i}});var n="ErrorComponent_errorDiv__8yNrv",r="ErrorComponent_errorMessage__UNECt",t=s(184),i=function(e){var a=e.errorText;return(0,t.jsx)("div",{className:n,children:(0,t.jsx)("p",{className:r,children:a})})}},7738:function(e,a,s){s.d(a,{Z:function(){return Z}});var n=s(9439),r="HandlePanel_handlePanel__hjnP1",t=s(2713),i=s(2791),l=s(1413),c=s(5861),o=s(7757),d=s.n(o),u=s(5705),m=s(6727),f="FormFilter_form__P5abx",p="FormFilter_label__o-Eqx",x="FormFilter_field__o0SLe",j="FormFilter_submit__bD0sL",h="FormFilter_errorValidation__0ykFv",N=s(5722),_=s(4346),g=s(1686),y=s.n(g),v=s(184),b=function(e){var a=e.closeModal,s=e.changeFilter,r=m.Ry().shape({mark:m.Z_(),model:m.Z_(),type:m.Z_(),transmission:m.Z_(),mileage:m.Rx().typeError("you must specify a number"),power:m.Rx().typeError("you must specify a number"),engine:m.Rx().typeError("you must specify a number"),year:m.Rx().typeError("you must specify a number"),color:m.Z_(),fueltype:m.Z_(),city:m.Z_(),price:m.Rx().typeError("you must specify a number")}),t=function(){var e=(0,c.Z)(d().mark((function e(r,t){var i,c,o,u,m;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r.mark&&r.model&&!_.wO[r.mark].includes(r.model)&&(y().Notify.warning("You did not select a model",{fontSize:"15px",position:"center-center",timeout:2e3,width:"400px"}),r.model=""),i=(0,l.Z)({},r),t.resetForm(),a(),c=0,o=Object.entries(i);c<o.length;c++)u=(0,n.Z)(o[c],2),m=u[0],u[1]||delete i[m];s(i);case 6:case"end":return e.stop()}}),e)})));return function(a,s){return e.apply(this,arguments)}}();return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(u.J9,{initialValues:{mark:"",model:"",type:"",transmission:"",mileage:"",power:"",engine:"",year:"",color:"",fueltype:"",city:"",price:""},validationSchema:r,onSubmit:t,children:function(e){var a=e.values;return(0,v.jsxs)(u.l0,{className:f,children:[(0,v.jsxs)("label",{className:p,children:["Mark",(0,v.jsx)(u.gN,{name:"mark",className:x,as:"select",children:(0,v.jsx)(N.Z,{characteristics:_.wO.marks})}),(0,v.jsx)(u.Bc,{name:"mark",render:function(e){return(0,v.jsx)("div",{className:h,children:e})}})]}),(0,v.jsxs)("label",{className:p,children:["Model",(0,v.jsx)(u.gN,{name:"model",className:x,as:"select",disabled:!a.mark,children:(0,v.jsx)(N.Z,{characteristics:a.mark?_.wO[a.mark]:[]})}),(0,v.jsx)(u.Bc,{name:"model",render:function(e){return(0,v.jsx)("div",{className:h,children:e})}})]}),(0,v.jsxs)("label",{className:p,children:["Type",(0,v.jsx)(u.gN,{name:"type",as:"select",children:(0,v.jsx)(N.Z,{characteristics:_.b1})}),(0,v.jsx)(u.Bc,{name:"type",render:function(e){return(0,v.jsx)("div",{className:h,children:e})}})]}),(0,v.jsxs)("label",{className:p,children:["Year",(0,v.jsx)(u.gN,{name:"year",as:"select",children:(0,v.jsx)(N.Z,{characteristics:_.fi})}),(0,v.jsx)(u.Bc,{name:"year",render:function(e){return(0,v.jsx)("div",{className:h,children:e})}})]}),(0,v.jsxs)("label",{className:p,children:["Transmission",(0,v.jsx)(u.gN,{name:"transmission",as:"select",children:(0,v.jsx)(N.Z,{characteristics:_.xl})}),(0,v.jsx)(u.Bc,{name:"transmission",render:function(e){return(0,v.jsx)("div",{className:h,children:e})}})]}),(0,v.jsxs)("label",{className:p,children:["Fuel type",(0,v.jsx)(u.gN,{name:"fueltype",as:"select",children:(0,v.jsx)(N.Z,{characteristics:_.dX})}),(0,v.jsx)(u.Bc,{name:"fueltype",render:function(e){return(0,v.jsx)("div",{className:h,children:e})}})]}),(0,v.jsxs)("label",{className:p,children:["Mileage",(0,v.jsx)(u.gN,{name:"mileage"}),(0,v.jsx)(u.Bc,{name:"mileage",render:function(e){return(0,v.jsx)("div",{className:h,children:e})}})]}),(0,v.jsxs)("label",{className:p,children:["Engine capacity",(0,v.jsx)(u.gN,{name:"engine"}),(0,v.jsx)(u.Bc,{name:"engine",render:function(e){return(0,v.jsx)("div",{className:h,children:e})}})]}),(0,v.jsxs)("label",{className:p,children:["Power",(0,v.jsx)(u.gN,{name:"power"}),(0,v.jsx)(u.Bc,{name:"power",render:function(e){return(0,v.jsx)("div",{className:h,children:e})}})]}),(0,v.jsxs)("label",{className:p,children:["Color",(0,v.jsx)(u.gN,{name:"color",as:"select",children:(0,v.jsx)(N.Z,{characteristics:_.bG})}),(0,v.jsx)(u.Bc,{name:"color",render:function(e){return(0,v.jsx)("div",{className:h,children:e})}})]}),(0,v.jsxs)("label",{className:p,children:["Price",(0,v.jsx)(u.gN,{name:"price"}),(0,v.jsx)(u.Bc,{name:"price",render:function(e){return(0,v.jsx)("div",{className:h,children:e})}})]}),(0,v.jsxs)("label",{className:p,children:["City",(0,v.jsx)(u.gN,{name:"city"}),(0,v.jsx)(u.Bc,{name:"city",render:function(e){return(0,v.jsx)("div",{className:h,children:e})}})]}),(0,v.jsx)("button",{type:"submit",className:j,children:"Filter"})]})}})})},C={form:"FormSort_form__kBAd5",label:"FormSort_label__spLvw"},I=s(8649),w=s(9434),k=function(e){var a=e.closeModal,s=e.changeSort,n=(0,w.I0)(),r=m.Ry().shape({sort:m.Z_().require}),t=function(e){a(),n((0,I.I)(e.target.value)),s(e.target.value)};return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(u.J9,{initialValues:{sort:""},validationSchema:r,onSubmit:t,children:(0,v.jsxs)(u.l0,{className:C.form,children:[(0,v.jsxs)("label",{className:C.label,children:["Sort by mark up",(0,v.jsx)(u.gN,{name:"sort",className:C.field,type:"radio",value:"mark up",onClick:t})]}),(0,v.jsxs)("label",{className:C.label,children:["Sort by mark down",(0,v.jsx)(u.gN,{name:"sort",className:C.field,type:"radio",value:"mark down",onClick:t})]}),(0,v.jsxs)("label",{className:C.label,children:["Sort by model up",(0,v.jsx)(u.gN,{name:"sort",className:C.field,type:"radio",value:"model up",onClick:t})]}),(0,v.jsxs)("label",{className:C.label,children:["Sort by model down",(0,v.jsx)(u.gN,{name:"sort",className:C.field,type:"radio",value:"model down",onClick:t})]}),(0,v.jsxs)("label",{className:C.label,children:["Sort by price up",(0,v.jsx)(u.gN,{name:"sort",className:C.field,type:"radio",value:"price up",onClick:t})]}),(0,v.jsxs)("label",{className:C.label,children:["Sort by price down",(0,v.jsx)(u.gN,{name:"sort",className:C.field,type:"radio",value:"price down",onClick:t})]}),(0,v.jsxs)("label",{className:C.label,children:["Sort by year up",(0,v.jsx)(u.gN,{name:"sort",className:C.field,type:"radio",value:"year up",onClick:t})]}),(0,v.jsxs)("label",{className:C.label,children:["Sort by year down",(0,v.jsx)(u.gN,{name:"sort",className:C.field,type:"radio",value:"year down",onClick:t})]}),(0,v.jsxs)("label",{className:C.label,children:["Sort by date up",(0,v.jsx)(u.gN,{name:"sort",className:C.field,type:"radio",value:"date up",onClick:t})]}),(0,v.jsxs)("label",{className:C.label,children:["Sort by date down",(0,v.jsx)(u.gN,{name:"sort",className:C.field,type:"radio",value:"date down",onClick:t})]})]})})})},S=s(5715),Z=function(e){var a=e.changeSort,s=e.changeFilter,l=e.resetFilters,c=(0,i.useState)(!1),o=(0,n.Z)(c,2),d=o[0],u=o[1],m=(0,i.useState)(!1),f=(0,n.Z)(m,2),p=f[0],x=f[1],j=function(e){e.target.getAttribute("class").includes("filter")?(x("filter"),u(!0)):e.target.getAttribute("class").includes("sort")&&(u(!0),x("sort"))},h=function(e){u(!1)};return(0,v.jsxs)("section",{className:r,children:[(0,v.jsx)(t.Z,{text:"Reset filters and sort",view:"resetFilters",handleButton:l}),(0,v.jsx)(t.Z,{text:"Filter",view:"filterCars",handleButton:j}),(0,v.jsx)(t.Z,{text:"Sort",view:"sortCars",handleButton:j}),d&&(0,v.jsx)(S.D,{setIsModalWindowOpen:u,onKeyDown:function(e){e.target.getAttribute("class").includes("backdrop")&&u(!1),"Escape"===e.code&&u(!1)},children:"filter"===p?(0,v.jsx)(b,{closeModal:h,changeFilter:s}):(0,v.jsx)(k,{closeModal:h,changeSort:a})})]})}},3429:function(e,a,s){var n=s(9439),r=s(9718),t=s.n(r),i=(s(6892),s(2791)),l=s(1087),c=s(184);a.Z=function(e){var a=e.searchPage,s=e.total,r=e.options,o=e.sort,d=(0,l.lr)(),u=(0,n.Z)(d,2),m=u[0],f=(u[1],(0,i.useState)((function(){var e=m.get("page");return e||1}))),p=(0,n.Z)(f,2),x=p[0],j=p[1];return(0,i.useEffect)((function(){var e=document.getElementById("tui-pagination-container"),n=new(t())(e,r);if(n.reset(s),x>1){n.movePageTo(x),a(x);var i=n.getCurrentPage();n.on("afterMove",(function(e){i=e.page,j(i),a(x)}))}else{var l=n.getCurrentPage();j(l),n.on("afterMove",(function(e){l=e.page,j(l),a(x)}))}}),[s,r,o,x,a]),(0,i.useEffect)((function(){a(x)}),[a,x]),(0,c.jsx)("div",{id:"tui-pagination-container",className:"tui-pagination"})}},3710:function(e,a){var s={carsOptions:{totalItems:0,itemsPerPage:10,visiblePages:window.screen.width<=768?4:5,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}};a.Z=s},4346:function(e,a,s){s.d(a,{b1:function(){return r},bG:function(){return n},dX:function(){return t},fi:function(){return l},wO:function(){return c},xl:function(){return i}});var n=["Red","Black","White","Yellow","Green","Blue","Grey"],r=["Sedan","Coupe","Wagon","Hatchback"],t=["Benzin","Gas","Diesel","Electro"],i=["Manual","Automatic","Robot"];var l=function(e,a,s){for(var n=[e],r=e;r<a;)n.push(r+=s||1);return n}(1960,2023,1),c={marks:["Mercedes","BMW","Renault","Opel","Skoda","Citroen","Mazda","Peugeot","Volkswagen","Audi","Daewoo","Toyota","Ford"],BMW:["316","520"],Renault:["Clio"],Opel:["Astra","Omega"],Skoda:["Octavia","Felicia"],Else:[],Mercedes:["320E","190"],Citroen:["C4","C6","Xsara"],Mazda:["3","6","5","Miata"],Peugeot:["306","305","607","3008"],Volkswagen:["Golf","Passat","Touareg","Touran","Polo"],Audi:["100","A4","A6","QQ","Q5","Q7"],Daewoo:["Lanos","Leganza","Espero"],Toyota:["Corolla","Camry","Avalon","Auris","Avensis"],Ford:["Focus","Mondeo","Fiesta"]}}}]);
//# sourceMappingURL=745.783b6002.chunk.js.map
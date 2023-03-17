"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[633],{9633:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var a=n(9434),r=n(2791),o=n(9439),c=n(5984),s=n(2007),l=n.n(s),i={form:"ContactForm_form__qwOAF",label:"ContactForm_label__Fz4Cs",btnAdd:"ContactForm_btnAdd__uobz+"},u=n(3329),d=function(e){var t=e.onHandleSubmit,n=(0,r.useState)(""),a=(0,o.Z)(n,2),s=a[0],l=a[1],d=(0,r.useState)(""),m=(0,o.Z)(d,2),f=m[0],h=m[1],_=(0,c.x0)(),b=(0,c.x0)(),p=function(e){var t=e.target,n=t.value,a=t.name;"name"===a&&l(n),"number"===a&&h(n)};return(0,u.jsx)("div",{className:i.formContainer,children:(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(s,f),l(""),h("")},className:i.form,children:[(0,u.jsx)("label",{className:i.label,htmlFor:_,children:"Name"}),(0,u.jsx)("input",{id:_,type:"text",value:s,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:p}),(0,u.jsx)("label",{className:i.label,htmlFor:b,children:"Number"}),(0,u.jsx)("input",{id:b,type:"number",name:"number",onChange:p,value:f}),(0,u.jsx)("button",{className:i.btnAdd,type:"submit",children:"Add contact"})]})})},m=d;d.prototypes={onHandleSubmit:l().func};var f=n(1413),h=n(9135),_=n(9467),b=n(4164),p="modal_overlay__fCMjT",v="modal_modal__Nszx8",x="modal_form__XLwVD",j="modal_label__M0oxu",C="modal_title__Td4A0",N="modal_btnClose__XUvWi",y="modal_btnAdd__19APS",g=document.querySelector("#modal-root"),A=function(e){var t=e.close,n=e.contact,s=(0,r.useState)(n.name),l=(0,o.Z)(s,2),i=l[0],d=l[1],m=(0,r.useState)(n.number),f=(0,o.Z)(m,2),h=f[0],A=f[1],F=(0,a.I0)(),S=function(e){var n=e.target,a=e.currentTarget,r=e.code;n!==a&&"Escape"!==r||t()};(0,r.useEffect)((function(){return document.addEventListener("keydown",S),function(){document.removeEventListener("keydown",S)}}));var k=n.id,Z=(0,c.x0)(),w=(0,c.x0)(),z=function(e){var t=e.target,n=t.value,a=t.name;"name"===a&&d(n),"number"===a&&A(n)};return(0,b.createPortal)((0,u.jsx)("div",{className:p,onClick:S,children:(0,u.jsxs)("div",{className:v,children:[(0,u.jsx)("button",{className:N,onClick:S,children:"X"}),(0,u.jsx)("h1",{className:C,children:"Edit contact"}),(0,u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),F((0,_.mP)({id:k,name:i,number:h})),d(""),A(""),t()},className:x,children:[(0,u.jsx)("label",{className:j,htmlFor:Z,children:"Name"}),(0,u.jsx)("input",{id:Z,type:"text",value:i,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:z}),(0,u.jsx)("label",{className:j,htmlFor:w,children:"Number"}),(0,u.jsx)("input",{id:w,type:"phone",name:"number",onChange:z,value:h}),(0,u.jsx)("button",{className:y,type:"submit",children:"Edit contact"})]})]})}),g)},F=A;A.prototypes={close:l().func,contact:l().object};var S="ContactList_btnDelete__Eeo9v",k="ContactList_list__csErn",Z="ContactList_item__EZYHO",w=function(){var e=(0,a.v9)((function(e){return e.contacts.contacts.items})),t=(0,a.v9)((function(e){return e.contacts.filter})),n=e.filter((function(e){return e.name.toLowerCase().includes(t)})),c=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(0,r.useState)(e),n=(0,o.Z)(t,2),a=n[0],c=n[1];return{modalOpen:a,openModalState:function(){return c(!0)},closeModalState:function(){return c(!1)}}}(),s=c.modalOpen,l=c.openModalState,i=c.closeModalState,d=(0,a.I0)(),m=(0,r.useState)({}),b=(0,o.Z)(m,2),p=b[0],v=b[1];return 0===n.length?(0,u.jsx)("p",{children:"There is no contact list"}):(0,u.jsxs)(u.Fragment,{children:[s&&(0,u.jsx)(F,{close:function(){i(),document.body.style.overflow=""},contact:p}),(0,u.jsx)("ul",{className:k,children:n.map((function(e){var t=e.name,n=e.id,a=e.number;return(0,u.jsxs)("li",{className:Z,children:[(0,u.jsxs)("span",{children:[t,": ",a]}),(0,u.jsxs)("div",{children:[" ",(0,u.jsx)("button",{className:S,onClick:function(){return function(e){v((0,f.Z)({},e)),l(),document.body.style.overflow="hidden"}({id:n,name:t,number:a})},type:"button",children:(0,u.jsx)(h.fmQ,{})}),(0,u.jsx)("button",{className:S,onClick:function(){return d((0,_.GK)(n))},type:"button",children:(0,u.jsx)(h.AMf,{})})]})]},n)}))})]})},z=w;w.defaultProps={filterContact:[]};var E="Filter_blocFilter__reiU2",L=function(){var e=(0,a.I0)(),t=(0,a.v9)((function(e){return e.contacts.filter}));return(0,u.jsxs)("div",{className:E,children:[(0,u.jsx)("label",{children:"Filter"}),(0,u.jsx)("input",{name:"filter",onChange:function(t){e((0,_.Tv)(t.target.value))},value:t})]})},M=L;L.prototypes={value:l().string,handleFilter:l().func};var q="contacts-page_title__R-AcY",I="contacts-page_appContainer__Ik9+q",P=function(){var e=(0,a.I0)(),t=(0,a.v9)((function(e){return e.contacts.contacts.items})),n=(0,a.v9)((function(e){return e.contacts.contacts})),o=n.error,c=n.isLoading;(0,r.useEffect)((function(){e((0,_.yF)())}),[e]);return(0,u.jsxs)("div",{className:I,children:[(0,u.jsx)("h1",{className:q,children:"Phonebook"}),(0,u.jsx)(m,{onHandleSubmit:function(n,a){var r=Boolean(t.find((function(e){return e.name.toUpperCase()===n.toUpperCase()}))),o=Boolean(t.find((function(e){return e.number===a})));return r?alert("\u043a\u043e\u043d\u0442\u0430\u043a\u0442 ".concat(n,"  \u0456\u0441\u043d\u0443\u0454")):o?alert("\u043d\u043e\u043c\u0435\u0440 ".concat(a,"  \u0456\u0441\u043d\u0443\u0454")):void e((0,_.el)({name:n,number:a}))}}),t.length>0&&(0,u.jsx)(M,{}),(0,u.jsx)("h2",{className:q,children:"Contacts"}),o&&(0,u.jsxs)("p",{children:["Error: ",o]}),!0===c&&(0,u.jsx)("h2",{children:"Loading..."}),(0,u.jsx)(z,{})]})}}}]);
//# sourceMappingURL=633.55471898.chunk.js.map
(this["webpackJsonpreact-extinguisher"]=this["webpackJsonpreact-extinguisher"]||[]).push([[0],{100:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t),a.d(t,"browserHistory",(function(){return se}));var r=a(2),n=a(0),c=a.n(n),s=a(11),o=a.n(s),i=(a(100),a(22)),l=a(13),j=a(16),u=a.n(j),h=a(23),b=a(12),d=a(148),x=a(153),g=a(154),O=a(158),m=a(157),p=a(151),f=a(155),v=a(156),y=a(110),w=a(68),C=a.n(w),S=a(69),N=a.n(S),T=a(50),I=a(64),k=a(63),F=Object(d.a)({table:{minWidth:650},mainTitle:{marginBottom:20},inconSize:{fontSize:16}}),D=function(){var e=F(),t=c.a.useState([]),a=Object(b.a)(t,2),s=a[0],o=a[1];c.a.useEffect((function(){j()}),[]);var l=function(e){var t=new Date(e).getTime()-(new Date).getTime();return Math.floor(t/864e5)},j=function(){var e=Object(h.a)(u.a.mark((function e(){var t,a,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://extintores.prolight.com/customers");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,{},r=[],a.forEach((function(e){e.exting.map((function(t){var a=l(t.next_recharge);return r.push({customer:e.name,brand:t.brand,model:t.model,lastDate:t.last_recharge,nextDate:t.next_recharge,warningIcon:a}),!0}))})),o(r),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)(n.Fragment,{children:Object(r.jsxs)(p.a,{component:y.a,children:[Object(r.jsxs)(x.a,{container:!0,spacing:2,children:[Object(r.jsx)(x.a,{item:!0,xs:12,md:4,lg:6,children:Object(r.jsx)(T.a,{className:e.mainTitle,variant:"h4",children:"Extintores"})}),Object(r.jsxs)(x.a,{item:!0,xs:12,md:4,lg:6,className:"inconSize",children:[Object(r.jsx)(C.a,{style:{color:I.a.A200,fontSize:20}})," Alerta recargar pronto ",Object(r.jsx)("br",{}),Object(r.jsx)(N.a,{style:{color:k.a[600],fontSize:20}})," Fecha de recarga vencida"]})]}),Object(r.jsxs)(g.a,{className:e.table,"aria-label":"simple table",children:[Object(r.jsx)(f.a,{children:Object(r.jsxs)(v.a,{children:[Object(r.jsx)(m.a,{children:"Propietario"}),Object(r.jsx)(m.a,{align:"center",children:"Marca"}),Object(r.jsx)(m.a,{align:"center",children:"Modelo"}),Object(r.jsx)(m.a,{align:"center",children:"\xdaltima Recarga"}),Object(r.jsx)(m.a,{align:"center",children:"Pr\xf3xima Recarga"})]})}),Object(r.jsx)(O.a,{children:s.map((function(e){return Object(r.jsxs)(v.a,{children:[Object(r.jsxs)(m.a,{component:"th",scope:"row",children:[e.customer,"\xa0",e.warningIcon>"0"&&e.warningIcon<="3"?Object(r.jsx)(C.a,{style:{color:I.a.A200}}):"",e.warningIcon<"0"?Object(r.jsx)(N.a,{style:{color:k.a[600]}}):""]}),Object(r.jsx)(m.a,{align:"center",children:e.brand}),Object(r.jsx)(m.a,{align:"center",children:e.model}),Object(r.jsx)(m.a,{align:"center",children:e.lastDate}),Object(r.jsx)(m.a,{align:"center",children:e.nextDate}),Object(r.jsx)(m.a,{align:"center",children:Object(r.jsx)(i.b,{to:"/users",children:Object(r.jsx)("button",{className:"btn btn-success btn-sm float-right mr-2",children:"Recargar"})})})]},e.name)}))})]})]})})},P=a(49),E=a(80),R=a(159),M=a(160),_=a(81),G=a.n(_),U=a(62),A=Object(d.a)((function(e){return{offset:Object(E.a)({},e.mixins.toolbar),text:{color:"white","&:hover":{color:U.a[900],textDecoration:"none"}},rightSideNavbar:{float:"right"}}})),B=function(){var e,t=A();return Object(r.jsx)(c.a.Fragment,{children:Object(r.jsx)(R.a,{position:"fixed",color:"primary",children:Object(r.jsxs)(x.a,{container:!0,spacing:2,children:[Object(r.jsx)(x.a,{item:!0,xs:12,md:6,lg:6,className:t.fondo,children:Object(r.jsx)(M.a,{children:Object(r.jsxs)("div",{className:"btn-group",children:[Object(r.jsx)(i.b,{to:"/dashboard",className:t.text,children:Object(r.jsx)(G.a,{})}),"\xa0\xa0"]})})}),Object(r.jsx)(x.a,{item:!0,xs:12,md:6,lg:6,className:t.fondo,children:Object(r.jsx)(M.a,(e={className:"btn-group"},Object(P.a)(e,"className",t.rightSideNavbar),Object(P.a)(e,"children",Object(r.jsxs)("div",{className:"btn-group",children:[Object(r.jsx)(i.b,{to:"/extintor",className:t.text,children:"Registrar Extintor"}),"\xa0\xa0\xa0",Object(r.jsx)(i.c,{to:"/",className:t.text,activeClassName:"active",children:"Salir"}),"\xa0\xa0"]})),e))})]})})})},q=a(42),z=a(166),J=a(164),L=a(82),Q=a.n(L),V=a(161),W=a(83),H=a.n(W),K=a(162),X=function(){var e={backgroundColor:"#325ed8"},t=Object(d.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:310}}}))(),a=c.a.useState(""),n=Object(b.a)(a,2),s=n[0],o=n[1],i=c.a.useState(""),l=Object(b.a)(i,2),j=l[0],g=l[1],O=c.a.useState(""),m=Object(b.a)(O,2),p=m[0],f=m[1],v=c.a.useState(""),y=Object(b.a)(v,2),w=y[0],C=y[1],S=c.a.useState(""),N=Object(b.a)(S,2),T=N[0],I=N[1],k=c.a.useState(""),F=Object(b.a)(k,2),D=F[0],P=F[1],E=c.a.useState(""),R=Object(b.a)(E,2),M=R[0],_=R[1],G=c.a.useState(""),U=Object(b.a)(G,2),A=U[0],B=U[1],L=c.a.useState(""),W=Object(b.a)(L,2),X=W[0],Y=W[1],Z=c.a.useState(""),$=Object(b.a)(Z,2),ee=$[0],te=$[1],ae=c.a.useState([]),re=Object(b.a)(ae,2),ne=re[0],ce=re[1],se=function(){var e=Object(h.a)(u.a.mark((function e(){var t,a,r,n,c,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,{},a=[],{},r=[],n="",e.next=8,fetch("https://extintores.prolight.com/customers");case 8:return c=e.sent,e.next=11,c.json();case 11:0!=(s=e.sent).length&&s.forEach((function(e){e.doc===T&&(t+=1,n=e.id,e.exting.map((function(e){e.history.map((function(e){r.push({id:e.id,extinguisher:e.extinguisher,customer:e.customer,user:e.user,last_recharge:e.last_recharge})})),a.push({id:e.id,serial:e.serial,brand:e.brand,model:e.model,last_recharge:e.last_recharge,next_recharge:e.next_recharge,history:r})})))})),0===t?(oe(),window.location.href="./dashboard"):ie(a,r,n);case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),oe=function(){var e=Object(h.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,address:j,phone:p,doc:T,exting:[{serial:A,brand:D,model:M,last_recharge:X,history:[{extinguisher:A,customer:s}]}]})},e.next=3,fetch("https://extintores.prolight.com/customers",t);case 3:return a=e.sent,e.next=6,a.json();case 6:e.sent;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=Object(h.a)(u.a.mark((function e(t,a,r){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t,"localArr"),console.log(a,"historyArr"),console.log(r,"id"),a.push({extinguisher:A,customer:s}),t.push({serial:A,brand:D,model:M,last_recharge:X,history:a}),n={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,address:j,phone:p,doc:T,exting:t})},e.next=8,fetch("https://extintores.prolight.com/customers/id",n);case 8:return c=e.sent,e.next=11,c.json();case 11:e.sent;case 12:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{align:"center",children:"Formulario De Registro"}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s.trim()?j.trim()?p.trim()?w.trim()?T.trim()?D.trim()?M.trim()?A.trim()?X.trim()?ee.trim()?(ce([].concat(Object(q.a)(ne),[{nombraNombre:s,nombreDireccion:j,nombreTelefono:p,nombreCorreo:w,nombreCedula:T,nombreMarca:D,nombreModelo:M,nombreSerial:A,nombreFechaU:X,nombreFechaS:ee}])),e.target.reset(),o(""),g(""),f(""),C(""),I(""),P(""),_(""),B(""),Y(""),te(""),se()):console.log("esta vacio serial"):console.log("esta vacio fechaU"):console.log("esta vacio serial"):console.log("esta vacio modelo"):console.log("esta vacio marca"):console.log("esta vacio cedula"):console.log("esta vacio correo"):console.log("esta vacio telefono"):console.log("esta vacio direccion"):console.log("esta vacio nombre")},children:[Object(r.jsxs)(x.a,{container:!0,spacing:2,children:[Object(r.jsx)(x.a,{item:!0,xs:12,md:6,lg:6,children:Object(r.jsxs)(x.a,{align:"center",children:[Object(r.jsx)(z.a,{style:e,children:Object(r.jsx)(Q.a,{})}),Object(r.jsx)("h2",{children:"Datos del Cliente"}),Object(r.jsx)(J.a,{label:"Nombre",placeholder:"Ingresar Nombre",onChange:function(e){return o(e.target.value)}}),Object(r.jsx)(V.a,{}),Object(r.jsx)(J.a,{label:"Direccion",placeholder:"Ingresar Direccion",onChange:function(e){return g(e.target.value)}}),Object(r.jsx)(V.a,{}),Object(r.jsx)(J.a,{label:"Telefono",placeholder:"Ingresar Telefono",onChange:function(e){return f(e.target.value)}}),Object(r.jsx)(V.a,{}),Object(r.jsx)(J.a,{label:"Correo",placeholder:"Ingresar Correo",onChange:function(e){return C(e.target.value)}}),Object(r.jsx)(V.a,{}),Object(r.jsx)(J.a,{label:"Cedula Cliente",placeholder:"Ingresar CC",onChange:function(e){return I(e.target.value)}}),Object(r.jsx)(V.a,{})]})}),Object(r.jsx)(x.a,{item:!0,xs:12,md:6,lg:6,children:Object(r.jsxs)(x.a,{align:"center",children:[Object(r.jsx)(z.a,{style:e,children:Object(r.jsx)(H.a,{})}),Object(r.jsx)("h2",{children:"Datos del Extintor"}),Object(r.jsx)(J.a,{label:"Marca",placeholder:"Ingresar Marca",onChange:function(e){return P(e.target.value)}}),Object(r.jsx)(V.a,{}),Object(r.jsx)(J.a,{label:"Modelo",placeholder:"Ingresar Modelo",onChange:function(e){return _(e.target.value)}}),Object(r.jsx)(V.a,{}),Object(r.jsx)(J.a,{label:"Serial del Extintor",placeholder:"Ingresar Serial",onChange:function(e){return B(e.target.value)}}),Object(r.jsx)(V.a,{}),Object(r.jsx)(J.a,{id:"date",onChange:function(e){return Y(e.target.value)},label:"Fecha Ultima Recarga",type:"date",className:t.textField,InputLabelProps:{shrink:!0}}),Object(r.jsx)(V.a,{}),Object(r.jsx)(J.a,{id:"date",onChange:function(e){return te(e.target.value)},label:"Fecha Siguiente Recarga",type:"date",className:t.textField,InputLabelProps:{shrink:!0}}),Object(r.jsx)(V.a,{})]})})]}),Object(r.jsx)(x.a,{align:"center",children:Object(r.jsx)(K.a,{type:"submit",color:"primary",variant:"contained",style:{margin:"8px 0",align:"center"},fullwidth:!0,children:"Registrar"})})]})]})},Y=a(61),Z=a.n(Y),$=function(){var e=c.a.useState(""),t=Object(b.a)(e,2),a=t[0],n=t[1],s=c.a.useState(""),o=Object(b.a)(s,2),i=o[0],j=o[1],d=c.a.useState(""),g=Object(b.a)(d,2),O=g[0],m=g[1],p=c.a.useState([]),f=Object(b.a)(p,2),v=f[0],w=f[1],C=(Object(l.f)(),function(){var e=Object(h.a)(u.a.mark((function e(){var t,a,r,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,a={},{method:"GET",headers:{"Content-Type":"application/json"}},e.next=5,fetch("https://extintores.prolight.com/users");case 5:return r=e.sent,e.next=8,r.json();case 8:0!=(n=e.sent).length&&n.forEach((function(e){if(e.login===i)throw t+=1,alert("Usted ya esta registrado, por favor ingrese con su cuenta"),a})),0===t&&(S(),window.location.href="./dashboard");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),S=function(){var e=Object(h.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a,login:i,password:O})},e.next=3,fetch("https://extintores.prolight.com/users",t);case 3:return r=e.sent,e.next=6,r.json();case 6:e.sent;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)(x.a,{children:Object(r.jsx)(y.a,{elevation:10,style:{padding:20,height:"70vh",width:270,margin:"20px auto"},children:Object(r.jsxs)(x.a,{align:"center",children:[Object(r.jsx)(z.a,{style:{backgroundColor:"#325ed8"},children:Object(r.jsx)(Z.a,{})}),Object(r.jsx)("h3",{children:"Nueva Cuenta"}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.trim()?i.trim()?O.trim()?(w([].concat(Object(q.a)(v),[{nombraNombre:a,nombreDireccion:i,nombreTelefono:O}])),e.target.reset(),n(""),j(""),m(""),C()):console.log("esta vacio password"):console.log("esta vacio correo"):console.log("esta vacio nombre")},children:[Object(r.jsx)(J.a,{label:"Nombre",placeholder:"Ingresar Nombre",onChange:function(e){return n(e.target.value)},fullwidth:!0,required:!0}),Object(r.jsx)(J.a,{label:"Correo Electronico",placeholder:"Ingresar Correo",onChange:function(e){return j(e.target.value)},fullwidth:!0,required:!0,type:"email"}),Object(r.jsx)(J.a,{label:"Password",placeholder:"Ingresar Clave",type:"Password",onChange:function(e){return m(e.target.value)},fullwidth:!0,required:!0}),Object(r.jsx)(K.a,{type:"submit",color:"primary",variant:"contained",style:{margin:"8px 0"},fullwidth:!0,children:"Registrar"})]})]})})})},ee=a(163),te=a(165),ae=function(){var e=c.a.useState(""),t=Object(b.a)(e,2),a=t[0],n=t[1],s=c.a.useState(""),o=Object(b.a)(s,2),l=o[0],j=o[1],d=c.a.useState([]),g=Object(b.a)(d,2),O=g[0],m=g[1],p=function(){var e=Object(h.a)(u.a.mark((function e(){var t,r,n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=0,r=0,{},{method:"GET",headers:{"Content-Type":"application/json"}},e.next=6,fetch("https://extintores.prolight.com/users");case 6:return n=e.sent,e.next=9,n.json();case 9:0!=(c=e.sent).length&&c.forEach((function(e){e.login===a&&(t+=1,e.password===l&&(r+=1,console.log(e),window.location.href="./dashboard"))})),0===t?alert("Usted no se encuentra registrado, por favor continue al formulario de registro."):0===r&&alert("Usuario y/o contrase\xf1a incorrectos.");case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)(x.a,{children:Object(r.jsx)(y.a,{elevation:10,style:{padding:20,height:"70vh",width:270,margin:"20px auto"},children:Object(r.jsxs)(x.a,{align:"center",children:[Object(r.jsx)(z.a,{style:{backgroundColor:"#325ed8"},children:Object(r.jsx)(Z.a,{})}),Object(r.jsx)("h3",{children:"Ingresa"}),Object(r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.trim()?l.trim()?(m([].concat(Object(q.a)(O),[{nombraCorreo:a,nombrePassword:l}])),e.target.reset(),n(""),j(""),p()):console.log("esta vacio password"):console.log("esta vacio correo")},children:[Object(r.jsx)(J.a,{label:"Correo Electronico",placeholder:"Ingresar Correo",onChange:function(e){return n(e.target.value)},fullwidth:!0,required:!0,type:"email"}),Object(r.jsx)(J.a,{label:"Password",placeholder:"Ingresar Clave",type:"Password",onChange:function(e){return j(e.target.value)},fullwidth:!0,required:!0}),Object(r.jsx)(ee.a,{control:Object(r.jsx)(te.a,{name:"checkedB",color:"primary"}),label:"Recordar usuario"}),Object(r.jsx)(K.a,{type:"submit",color:"primary",variant:"contained",style:{margin:"8px 0"},fullwidth:!0,children:"Iniciar Sesion"})]}),Object(r.jsx)(T.a,{children:Object(r.jsx)(i.b,{to:"signup",children:"REG\xcdSTRATE"})})]})})})};var re=function(){return Object(r.jsx)(i.a,{children:Object(r.jsxs)("div",{className:"container mt-5",children:[Object(r.jsx)("hr",{}),Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{path:"/",exact:!0,children:Object(r.jsx)(ae,{})}),Object(r.jsx)(l.a,{path:"/signup",exact:!0,children:Object(r.jsx)($,{})}),Object(r.jsxs)(l.a,{path:"/dashboard",exact:!0,children:[Object(r.jsx)("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",integrity:"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",crossorigin:"anonymous"}),Object(r.jsx)(B,{}),Object(r.jsx)(D,{})]}),Object(r.jsxs)(l.a,{path:"/extintor",children:[Object(r.jsx)("link",{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",integrity:"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",crossorigin:"anonymous"}),Object(r.jsx)(B,{}),Object(r.jsx)(X,{})]})]})]})})},ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,168)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))},ce=a(84),se=Object(ce.a)();o.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(re,{})}),document.getElementById("root")),ne()}},[[108,1,2]]]);
//# sourceMappingURL=main.d45a15c0.chunk.js.map
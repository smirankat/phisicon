(this.webpackJsonpphisicon=this.webpackJsonpphisicon||[]).push([[0],{22:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(16),a=c.n(r),i=(c(22),c(6)),j=c(3),l=c(17),u=c.n(l),o=c(0),b=Object(s.lazy)((function(){return c.e(3).then(c.bind(null,43))}));var d=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(s.useState)(!1),l=Object(j.a)(a,2),d=l[0],h=l[1];Object(s.useEffect)((function(){h(!0),u.a.post("https://krapipl.imumk.ru:8443/api/mobilev1/update",{}).then((function(e){h(!1),r(e.data.items)}))}),[]);var O=Object(s.useState)(!0),m=Object(j.a)(O,2),x=m[0],f=m[1],p=n.a.useMemo((function(){return Object(i.a)(new Set(c.map((function(e){return e.subject}))))}),[c]),g=n.a.useMemo((function(){return Object(i.a)(new Set(c.map((function(e){return e.genre}))))}),[c]),v=n.a.useMemo((function(){return Object(i.a)(new Set(c.map((function(e){return e.grade}))))}),[c]),N=Object(s.useState)(""),w=Object(j.a)(N,2),S=w[0],k=w[1],C=Object(s.useState)(""),I=Object(j.a)(C,2),y=I[0],B=I[1],F=Object(s.useState)(""),M=Object(j.a)(F,2),E=M[0],L=M[1],D=Object(s.useState)(""),J=Object(j.a)(D,2),P=J[0],T=J[1],z=Object(s.useState)(""),H=Object(j.a)(z,2),R=H[0],_=H[1],q=new RegExp(R,"i"),A=c.filter((function(e){return(!S||e.subject===S)&&(!y||e.genre===y)&&(!E||e.grade===E)&&(!R||q.test(e.subject)||q.test(e.genre)||q.test(e.grade))}));return Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)("button",{className:"toggle",onClick:function(){f(!x)},children:"\u0440\u0443\u0431\u043b\u0438/\u0431\u043e\u043d\u0443\u0441\u044b"}),Object(o.jsxs)("div",{className:"content",children:[Object(o.jsx)("header",{className:"l-header",children:Object(o.jsxs)("div",{className:"header",children:[Object(o.jsxs)("div",{className:"header-logo-menu",children:[Object(o.jsx)("a",{href:"##",className:"header-logo"}),Object(o.jsx)("div",{className:"menu-host",children:Object(o.jsx)("nav",{className:"menu-wrapper",children:Object(o.jsx)("a",{href:"##",className:"menu-burger",children:Object(o.jsx)("span",{})})})})]}),Object(o.jsxs)("div",{className:"header-nav",children:[Object(o.jsx)("a",{href:"##",className:"header-btn",children:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433"}),Object(o.jsx)("a",{href:"##",className:"header-btn",children:"\u0410\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u044f"}),Object(o.jsx)("a",{href:"##",className:"header-btn",children:"\u0412\u0445\u043e\u0434"})]})]})}),Object(o.jsxs)("main",{className:"l-container",children:[Object(o.jsx)("h1",{className:"heading",children:"\u0412\u0438\u0442\u0440\u0438\u043d\u0430"}),Object(o.jsx)("div",{className:"courses",children:Object(o.jsxs)("form",{className:"courses-form",children:[Object(o.jsx)("div",{children:Object(o.jsxs)("select",{onChange:function(e){return k(e.target.value)},children:[Object(o.jsx)("option",{value:"",children:"\u0412\u0441\u0435 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u044b"}),p.map((function(e){return Object(o.jsx)("option",{children:e},e)}))]})}),Object(o.jsx)("div",{children:Object(o.jsxs)("select",{onChange:function(e){return B(e.target.value)},children:[Object(o.jsx)("option",{value:"",children:"\u0412\u0441\u0435 \u0436\u0430\u043d\u0440\u044b"}),g.map((function(e){return Object(o.jsx)("option",{children:e},e)}))]})}),Object(o.jsx)("div",{children:Object(o.jsxs)("select",{onChange:function(e){return L(e.target.value)},children:[Object(o.jsx)("option",{value:"",children:"\u0412\u0441\u0435 \u043a\u043b\u0430\u0441\u0441\u044b"}),v.map((function(e){return Object(o.jsx)("option",{children:e},e)}))]})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{className:"find",type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a",value:P,onChange:function(e){return T(e.target.value)}}),Object(o.jsx)("button",{className:"courses-form-search-btn",type:"submit",onClick:function(e){e.preventDefault(),_(P),T("")}})]})]})}),Object(o.jsxs)("ul",{className:"courses-list",children:[d?Object(o.jsx)("div",{className:"loader"}):null,Object(o.jsx)(s.Suspense,{fallback:Object(o.jsx)("div",{className:"loader"}),children:A.map((function(e,t){return Object(o.jsx)(b,{courseId:e.courseId,coursesImagesLink:"".concat("https://www.imumk.ru/svc/coursecover/").concat(e.courseId),genre:e.genre,grade:e.grade,subject:e.subject,price:e.price,priceBonus:e.priceBonus,units:x},e.courseHash)}))})]})]})]}),Object(o.jsx)("footer",{className:"l-footer",children:Object(o.jsxs)("div",{className:"footer",children:[Object(o.jsxs)("div",{className:"footer-legal",children:[Object(o.jsxs)("p",{children:["\xa9 ",Object(o.jsx)("a",{href:"##",children:"\u041e\u041e\u041e \xab\u0424\u0438\u0437\u0438\u043a\u043e\u043d \u041b\u0430\u0431\xbb"}),", 2013-2021"]}),Object(o.jsx)("p",{children:Object(o.jsx)("a",{href:"##",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0435 \u0441\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u0435"})})]}),Object(o.jsx)("ul",{className:"footer-social",children:Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"##",children:Object(o.jsx)("img",{src:"https://www.imumk.ru/Content/skins/bubble/images/icons/social_links.svg"})})})}),Object(o.jsxs)("div",{className:"footer-info",children:[Object(o.jsxs)("p",{children:[Object(o.jsx)("a",{href:"##",children:"+7 (499) 322-07-57"}),","," ",Object(o.jsx)("a",{href:"##",children:"info@imumk.ru"})]}),Object(o.jsx)("p",{children:Object(o.jsx)("a",{href:"##",children:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0441\u0430\u0439\u0442\u043e\u043c"})})]})]})})]})},h=function(e){e&&e instanceof Function&&c.e(4).then(c.bind(null,44)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,a=t.getTTFB;c(e),s(e),n(e),r(e),a(e)}))};a.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),h()}},[[42,1,2]]]);
//# sourceMappingURL=main.b5eadf07.chunk.js.map
(this["webpackJsonpmanga-viewer"]=this["webpackJsonpmanga-viewer"]||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(13),r=a.n(c),i=(a(26),a(27),a(3)),s=a(10),b=function(e){return"https://manga-utils-server.herokuapp.com/get_metadata?file_id=".concat(e)},l=a(4),d=a(9),j=function(e){return{type:"SET_META",payload:e}},o=a(1);var m=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.index})),a=Object(n.useState)(!0),c=Object(s.a)(a,2),r=c[0],i=c[1],b=function(t){e(function(e){return{type:"SET_INDEX",payload:e}}(t))};return Object(n.useEffect)((function(){null!==t?i(!1):function(e,t){fetch("https://manga-utils-server.herokuapp.com/get_metadata?file_id=1Jq5rdZUO6NpB16jFHRgdWQdeOYtpHi1h").then((function(e){return e.json()})).then((function(a){e(a),t(!1)}))}(b,i)}),[]),Object(o.jsxs)("div",{className:"chapter-index",children:[Object(o.jsx)("h1",{children:"Content"}),Object(o.jsx)("div",{children:!r&&Object.entries(t).map((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(o.jsx)("div",{className:"index-element",children:Object(o.jsx)(l.b,{to:"/manga/".concat(a),children:n})},a)}))})]})},u=a(15);var h=function(e){var t=e.src,a=e.alt,n=e.tmp;return Object(o.jsx)("div",{className:"image-container ".concat(n),children:Object(o.jsx)("img",{className:"image",src:t,alt:a})})};var p=function(e){var t=e.chapter,a=parseInt(t.number),n=a>0?a-1:0,c=a<t.maxChapter?a+1:a;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark mb-3",children:[Object(o.jsx)("div",{className:"navbar-collapse w-100 order-md-0",children:Object(o.jsx)(l.b,{to:{pathname:"/manga/".concat(t.id)},className:"btn btn-primary mt-2 mb-2",children:"Index"})}),Object(o.jsx)("div",{className:"mx-auto order-0 active",children:Object(o.jsxs)("div",{className:"d-flex justify-content-arround mt-2 mb-2",children:[Object(o.jsx)(l.b,{to:{pathname:"/manga/".concat(t.id,"/viewer/").concat(n)},children:Object(o.jsx)("button",{className:"btn btn-primary mr-2",disabled:a<=0,children:"Previous"})}),Object(o.jsx)(l.b,{to:{pathname:"/manga/".concat(t.id,"/viewer/").concat(c)},children:Object(o.jsx)("button",{className:"btn btn-primary mr-2",disabled:a>=t.maxChapter-1,children:"Next"})})]})}),Object(o.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2"})]}),Object(o.jsx)("p",{className:"text-center text-capitalize mt-3 mr-2",children:" ".concat(t.title)})]})};var O=function(e){var t=e.chapter,a=parseInt(t.number),n=a>0?a-1:0,c=a<t.maxChapter?a+1:a;return Object(o.jsx)("div",{className:"mt-4",children:Object(o.jsxs)("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark",children:[Object(o.jsx)("div",{className:"navbar-collapse w-100 order-1 order-md-0",children:Object(o.jsx)(l.b,{to:{pathname:"/manga/".concat(t.id)},className:"btn btn-primary mt-2 mb-2",children:"Index"})}),Object(o.jsx)("div",{className:"mx-auto order-0 active",children:Object(o.jsxs)("div",{className:"d-flex justify-content-arround mt-2 mb-2",children:[Object(o.jsx)(l.b,{to:{pathname:"/manga/".concat(t.id,"/viewer/").concat(n)},children:Object(o.jsx)("button",{className:"btn btn-primary mr-2",disabled:a<=0,children:"Previous"})}),Object(o.jsx)(l.b,{to:{pathname:"/manga/".concat(t.id,"/viewer/").concat(c)},children:Object(o.jsx)("button",{className:"btn btn-primary mr-2",disabled:a>=t.maxChapter-1,children:"Next"})})]})}),Object(o.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2"})]})})},v=function(){var e=Object(n.useRef)(null);return[e,function(){e.current&&e.current.scrollIntoView({behavior:"smooth"})}]};var x=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.chapterMeta})),a=Object(i.f)(),c=a.id,r=a.chapter,l=Object(n.useState)(!0),m=Object(s.a)(l,2),x=m[0],f=m[1],g=v(),N=Object(s.a)(g,2),_=N[0],w=N[1],E=function(t){e(j(Object(u.a)({id:c},t))),f(!1)};return Object(n.useEffect)((function(){var e,a;null===t||t.id!==c?(e=b(c),a=E,fetch(e).then((function(e){return e.json()})).then((function(e){a(e)}))):f(!1)}),[]),Object(n.useEffect)((function(){w()})),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("div",{ref:_}),!x&&Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(p,{chapter:{id:c,number:r,maxChapter:t.num_chapters,title:t.chapters[r].title}}),Object.entries(t.chapters[r].images_links).map((function(e){return Object(o.jsx)(h,{tmp:"manga"!==t.type&&t.type?"":"margin-yes",src:e[1],alt:e[0]},e[1])})),Object(o.jsx)(O,{chapter:{id:c,number:r,maxChapter:t.num_chapters,title:t.chapters[r].title}})]})]})};var f=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark mb-3",children:[Object(o.jsx)("div",{className:"navbar-collapse w-100 order-md-0",children:Object(o.jsx)(l.b,{to:"/",className:"btn btn-primary mt-2 mb-2",children:"Main Menu"})}),Object(o.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2"})]})})};var g=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.chapterMeta})),a=Object(i.f)().id,c=Object(n.useState)(!0),r=Object(s.a)(c,2),m=r[0],h=r[1],p=function(t){e(j(Object(u.a)({id:a},t))),h(!1)};return Object(n.useEffect)((function(){null!==t&&t.id===a?h(!1):function(e,t){fetch(e).then((function(e){return e.json()})).then((function(e){t(e)}))}(b(a),p)}),[]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(f,{}),!m&&Object(o.jsx)(o.Fragment,{children:t.chapters.map((function(e,t){return Object(o.jsx)("div",{className:"text-left ml-4 mb-4 links",children:Object(o.jsx)(l.b,{to:{pathname:"/manga/".concat(a,"/viewer/").concat(t)},children:e.title})},e.title)}))})]})};var N=function(){return Object(o.jsxs)(i.c,{children:[Object(o.jsx)(i.a,{exact:!0,path:"/",component:m}),Object(o.jsx)(i.a,{exact:!0,path:"/manga/:id",component:g}),Object(o.jsx)(i.a,{exact:!0,path:"/manga/:id/viewer/:chapter",component:x}),Object(o.jsx)(i.a,{path:"*",children:Object(o.jsx)("h1",{children:"404 Error"})})]})},_=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,36)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))},w=a(14);var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"SET_META"===t.type?t.payload:e};var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;return"SET_INDEX"===t.type?t.payload:e},k=Object(w.a)({index:y,chapterMeta:E}),S=Object(w.b)(k,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());r.a.render(Object(o.jsx)(d.a,{store:S,children:Object(o.jsx)(l.a,{basename:"/manga-viewer",children:Object(o.jsx)(N,{})})}),document.getElementById("root")),_()}},[[35,1,2]]]);
//# sourceMappingURL=main.4eb0c32b.chunk.js.map
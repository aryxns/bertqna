(this.webpackJsonpkilnusai=this.webpackJsonpkilnusai||[]).push([[0],{282:function(t,e,n){},306:function(t,e){},307:function(t,e){},315:function(t,e){},317:function(t,e,n){"use strict";n.r(e);var a=n(47),c=n.n(a),s=n(196),i=n.n(s),r=(n(282),n(6)),o=n.n(r),u=n(11),l=n(7),m=n(112),h=n.n(m),p=(n(300),n(36)),x=n(316);var d=function(){var t=c.a.useState(""),e=Object(l.a)(t,2),n=e[0],a=e[1],s=c.a.useState(""),i=Object(l.a)(s,2),r=i[0],d=i[1],j=c.a.useState([]),b=Object(l.a)(j,2),f=b[0],g=b[1];function O(){return(O=Object(u.a)(o.a.mark((function t(){var e,a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.load();case 2:return e=t.sent,t.next=5,e.findAnswers(r,n);case 5:a=t.sent,console.log("Answers: "),c=a.map((function(t){return t.text})),g(c);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return console.log(f),Object(p.jsxs)("div",{className:"h-screen bg-gray-900",children:[Object(p.jsx)("h1",{className:"m-10 mt-0 text-2xl text-white pt-5",children:"BERT-based QnA"}),Object(p.jsx)("textarea",{onChange:function(t){return a(t.target.value)},className:"ml-10 mt-5 w-4/5 h-48 p-2 bg-gray-100",placeholder:"type paragraph here: "}),Object(p.jsx)("input",{onChange:function(t){return d(t.target.value)},className:"ml-10 mt-5 p-2 bg-gray-100 w-4/5 h-12",placeholder:"type question here: "}),Object(p.jsx)("br",{}),Object(p.jsx)("button",{onClick:function(t){!function(){O.apply(this,arguments)}(),m.store.addNotification({title:"Analyzing...",message:"Deconstructing input text...",type:"default",insert:"top",container:"top-left",animationIn:["animate__animated","animate__fadeIn"],animationOut:["animate__animated","animate__fadeOut"],dismiss:{duration:1e4,onScreen:!0}})},className:"bg-gray-600 text-white text-xl p-2 ml-10 mt-10",children:"FIND"}),Object(p.jsx)("h1",{className:"text-xl text-white ml-10 mt-5",children:"Answers: "}),Object(p.jsx)(h.a,{}),f.map((function(t){return Object(p.jsx)("h1",{className:"text-white text-lg ml-10 mt-5",children:t})}))]})},j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,318)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,s=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),s(t),i(t)}))};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(d,{})}),document.getElementById("root")),j()}},[[317,1,2]]]);
//# sourceMappingURL=main.983e99e5.chunk.js.map
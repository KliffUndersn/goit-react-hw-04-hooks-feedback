(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(4),r=c.n(i),s=(c(9),c(2)),o=c(0),b=function(e){var t=e.clickHandler,c=e.name,n=Object.keys(c);return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("ul",{children:n.map((function(e){return Object(o.jsx)("li",{children:Object(o.jsx)("button",{type:"button",onClick:function(){t(e)},children:e})},e)}))})})},j=function(e){var t=e.value,c=e.countTotalFeedback,n=e.countPositiveFeedbackPercentage;return console.log(t),Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:["Good: ",t.good]}),Object(o.jsxs)("li",{children:["Neutral: ",t.neutral]}),Object(o.jsxs)("li",{children:["Bad: ",t.bad]}),Object(o.jsxs)("li",{children:["Total: ",c]}),Object(o.jsxs)("li",{children:["Positive feedback:",n||0," %"]})]})},l=function(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(0),r=Object(s.a)(i,2),l=r[0],d=r[1],u=Object(n.useState)(0),h=Object(s.a)(u,2),O=h[0],k=h[1],x=function(){return c+l+O};return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Please Leave feedback"}),Object(o.jsx)(b,{name:{good:c,neutral:l,bad:O},clickHandler:function(e){switch(e){case"good":a(c+1);break;case"neutral":d(l+1);break;case"bad":k(O+1)}}}),Object(o.jsx)("h2",{children:"Statistics"}),x()?Object(o.jsx)(j,{value:{good:c,neutral:l,bad:O},countTotalFeedback:x(),countPositiveFeedbackPercentage:Math.ceil(c/x()*100)}):Object(o.jsx)("p",{children:"No feedback given"})]})};var d=function(){return Object(o.jsx)(l,{})};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.594bd4ba.chunk.js.map
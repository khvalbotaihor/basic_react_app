(this.webpackJsonpbasic_react_app=this.webpackJsonpbasic_react_app||[]).push([[0],[,,,,function(e,n,t){e.exports=t(11)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var l=t(0),a=t.n(l),c=t(3),o=t.n(c),r=(t(9),t(1));t(10);var i=function(e){console.log("OnOffRendering");var n={width:"30px",height:"20px",border:"1px solid black",display:"inline-block",padding:"2px",marginRight:"5px",backgroundColor:e.on?"green":"white"},t={width:"30px",height:"20px",border:"1px solid black",display:"inline-block",padding:"2px",marginRight:"5px",backgroundColor:e.on?"white":"red"},l={width:"10px",height:"10px",borderRadius:"5px",border:"1px solid black",display:"inline-block",backgroundColor:e.on?"green":"red"};return a.a.createElement("div",null,a.a.createElement("div",{style:n,onClick:function(){e.setOn(!0)}},"On"),a.a.createElement("div",{style:t,onClick:function(){e.setOn(!1)}},"Off"),a.a.createElement("div",{style:l,onClick:function(){}}))};function d(e){console.log("Rating rendering");var n=Object(l.useState)(0),t=Object(r.a)(n,2),c=t[0],o=t[1];return a.a.createElement("div",null,a.a.createElement(u,{selected:c>0,setValue:function(){o(1)}}),a.a.createElement(u,{selected:c>1,setValue:function(){o(2)}}),a.a.createElement(u,{selected:c>2,setValue:function(){o(3)}}),a.a.createElement(u,{selected:c>3,setValue:function(){o(4)}}),a.a.createElement(u,{selected:c>4,setValue:function(){o(5)}}))}function u(e){return console.log("Star rendering"),a.a.createElement("span",{onClick:function(){e.setValue()}},e.selected?a.a.createElement("b",null,"star "):"star ")}function s(e){return console.log("AccordionTitle rendering"),a.a.createElement("h3",{onClick:function(){e.onClick(!e.collapsed)}},e.title)}function g(){return console.log("AccordionBody rendering"),a.a.createElement("ul",null,a.a.createElement("li",null,"1"),a.a.createElement("li",null,"2"),a.a.createElement("li",null,"3"))}var p=function(e){return console.log("Accordion rendering"),a.a.createElement("div",null,a.a.createElement(s,{onClick:e.onClick,title:e.title,collapsed:e.collapsed}),!e.collapsed&&a.a.createElement(g,null))};function m(e){return console.log("Rating rendering"),a.a.createElement("div",null,a.a.createElement(k,{selected:e.value>0,onClick:e.onClick,value:1}),a.a.createElement(k,{selected:e.value>1,onClick:e.onClick,value:2}),a.a.createElement(k,{selected:e.value>2,onClick:e.onClick,value:3}),a.a.createElement(k,{selected:e.value>3,onClick:e.onClick,value:4}),a.a.createElement(k,{selected:e.value>4,onClick:e.onClick,value:5}))}function k(e){return console.log("Star rendering"),a.a.createElement("span",{onClick:function(){e.onClick(e.value)}},e.selected?a.a.createElement("b",null,"star "):"star ")}var b=function(e){console.log("OnOffRendering");var n=Object(l.useState)(!1),t=Object(r.a)(n,2),c=t[0],o=t[1];console.log("On: "+c);var i={width:"30px",height:"20px",border:"1px solid black",display:"inline-block",padding:"2px",marginRight:"5px",backgroundColor:c?"green":"white"},d={width:"30px",height:"20px",border:"1px solid black",display:"inline-block",padding:"2px",marginRight:"5px",backgroundColor:c?"white":"red"},u={width:"10px",height:"10px",borderRadius:"5px",border:"1px solid black",display:"inline-block",backgroundColor:c?"green":"red"};return a.a.createElement("div",null,a.a.createElement("div",{style:i,onClick:function(){e.onChange(!0),o(!0)}},"On"),a.a.createElement("div",{style:d,onClick:function(){e.onChange(!1),o(!1)}},"Off"),a.a.createElement("div",{style:u}))};var E=function(){console.log("App rendering");var e=Object(l.useState)(3),n=Object(r.a)(e,2),t=n[0],c=n[1],o=Object(l.useState)(!1),u=Object(r.a)(o,2),s=u[0],g=u[1],k=Object(l.useState)(!1),E=Object(r.a)(k,2),h=E[0],v=E[1];return a.a.createElement("div",{className:"App"},a.a.createElement("div",null,a.a.createElement(p,{title:"Controlled accordion",collapsed:s,onClick:g}),a.a.createElement(d,null),a.a.createElement(m,{value:t,onClick:c}),a.a.createElement("hr",null),a.a.createElement(i,{on:h,setOn:v}),a.a.createElement(b,{onChange:v})," ",h.toString()))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.0d96995b.chunk.js.map
(this["webpackJsonpexpense-tracker-by-yousif-channa"]=this["webpackJsonpexpense-tracker-by-yousif-channa"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),u=(n(13),function(){return r.a.createElement("h1",{className:"header"},"Expense tracker by M Yousif Channa")}),o=n(2),i=n(7),s=n(4),m=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(s.a)({},e,{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(s.a)({},e,{transactions:[t.payload].concat(Object(i.a)(e.transactions))});default:return e}},d={transactions:[{id:1,description:"salary",amount:1e3},{id:2,description:"bill",amount:-100},{id:3,description:"salary2",amount:1e3},{id:4,description:"shopping",amount:-500}]},E=Object(a.createContext)(d),p=function(e){var t=e.children,n=Object(a.useReducer)(m,d),c=Object(o.a)(n,2),l=c[0],u=c[1];return r.a.createElement(E.Provider,{value:{transactions:l.transactions,deleteTransaction:function(e){u({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){u({type:"ADD_TRANSACTION",payload:e})}}},t)},f=function(){var e=Object(a.useContext)(E).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",null,"Current Balance"),r.a.createElement("h1",null,"$",e))},b=function(){var e=Object(a.useContext)(E).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return r.a.createElement("div",{className:"inc-exp-container"},r.a.createElement("div",null,r.a.createElement("h4",null,"Income"),r.a.createElement("p",{className:"money plus"},"+$",t)),r.a.createElement("div",null,r.a.createElement("h4",null,"Expense"),r.a.createElement("p",{className:"money minus"},"-$",Math.abs(n))))},h=function(e){var t=e.transaction,n=t.amount<0?"-":"+",c=Object(a.useContext)(E).deleteTransaction;return r.a.createElement("li",{className:t.amount<0?"minus":"plus"},t.description," ",r.a.createElement("span",null,n,"$",Math.abs(t.amount)),r.a.createElement("button",{className:"delete-btn",onClick:function(){return c(t.id)}},"x"))},v=function(){var e=Object(a.useContext)(E).transactions;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"History"),r.a.createElement("ul",{className:"list"},e.map((function(e){return r.a.createElement(h,{key:e.id,transaction:e})})),";"))},x=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(0),u=Object(o.a)(l,2),i=u[0],s=u[1],m=Object(a.useContext)(E).addTransaction;return r.a.createElement("div",null,r.a.createElement("h3",null,"Add new transaction"),r.a.createElement("form",{id:"form",onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e7*Math.random()),description:n,amount:+i};m(t)}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"text"},"Text"),r.a.createElement("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)},placeholder:"Enter text..."})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"amount"},"Amount ",r.a.createElement("br",null),"(negative - expense, positive - income)"),r.a.createElement("input",{type:"number",value:i,onChange:function(e){return s(e.target.value)},placeholder:"Enter amount..."})),r.a.createElement("button",{className:"btn"},"Add transaction")))};var y=function(){return r.a.createElement(p,null,r.a.createElement(u,null),r.a.createElement("div",{className:"container"},r.a.createElement(f,null),r.a.createElement(b,null),r.a.createElement(v,null),r.a.createElement(x,null)))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.7b1f81a2.chunk.js.map
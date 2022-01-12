(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{15:function(e,t,s){},16:function(e,t,s){},17:function(e,t,s){},19:function(e,t,s){},20:function(e,t,s){"use strict";s.r(t);var n=s(8),r=s.n(n),c=s(10),o=s(2),a=s(3),i=s(5),l=s(4),d=s(1),u=s.n(d),h=(s(15),s(16),s(17),s(7)),p=s.n(h),j=s(0),b=function(e){var t=e.todo,s=e.selectUser,n=e.userId,r=e.completeToggle;return Object(j.jsxs)("li",{className:p()("TodoList__item",{"TodoList__item--unchecked":!t.completed}),children:[Object(j.jsxs)("label",{htmlFor:"checkbox",children:[Object(j.jsx)("input",{id:"checkbox",type:"checkbox",readOnly:!0,checked:t.completed,onClick:function(){return r(t)}}),Object(j.jsx)("p",{children:t.title})]}),t.userId&&Object(j.jsx)("button",{className:p()("TodoList__user-button","button",{"TodoList__user-button--selected":t.userId===n}),onClick:function(){return s(t.userId)},type:"button",children:t.userId})]},t.id)},m=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={titleFilter:"",selected:"all"},e.shuffle=function(){e.props.preparedTodos.sort((function(){return Math.random()-.5})),e.setState({})},e.reset=function(){e.setState({selected:"all",titleFilter:""}),e.props.preparedTodos.sort((function(e,t){return e.id-t.id}))},e.changeToggler=function(t){var s=t.target,n=s.name,r=s.value;"selected"===n&&e.setState({selected:r}),"titleFilter"===n&&e.setState({titleFilter:r})},e}return Object(a.a)(s,[{key:"render",value:function(){var e=this.props,t=e.selectedUserId,s=e.preparedTodos,n=e.selectUser,r=e.completeToggle,c=this.state,o=c.titleFilter,a=c.selected,i=s.filter((function(e){return e.title.toLowerCase().includes(o.toLowerCase())}));switch(a){case"active":i=i.filter((function(e){return!1===e.completed}));break;case"completed":i=i.filter((function(e){return!0===e.completed}))}return Object(j.jsxs)("div",{className:"TodoList",children:[Object(j.jsx)("h2",{children:"Todos:"}),Object(j.jsxs)("div",{className:"TodoList__list-container",children:[Object(j.jsx)("input",{type:"text",name:"titleFilter",value:this.state.titleFilter,onChange:this.changeToggler}),Object(j.jsxs)("select",{name:"selected",onChange:this.changeToggler,value:this.state.selected,children:[Object(j.jsx)("option",{value:"all",children:"All"}),Object(j.jsx)("option",{value:"completed",children:"Completed"}),Object(j.jsx)("option",{value:"active",children:"Active"})]}),Object(j.jsx)("button",{type:"button",onClick:this.shuffle,children:"shuffle"}),Object(j.jsx)("button",{type:"button",onClick:this.reset,children:"reset"}),Object(j.jsx)("ul",{className:"TodoList__list",children:i.map((function(e){return Object(j.jsx)(b,{todo:e,completeToggle:r,userId:t,selectUser:n})}))})]})]})}}]),s}(u.a.Component);function f(e){return fetch("".concat("https://mate.academy/students-api/users/").concat(e)).then((function(e){return e.json()}))}s(19);var v=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:null},e}return Object(a.a)(s,[{key:"componentDidMount",value:function(){var e=this;f(this.props.userId).then((function(t){e.setState({user:t})}))}},{key:"componentDidUpdate",value:function(){var e=this;f(this.props.userId).then((function(t){e.setState({user:t})}))}},{key:"render",value:function(){if(this.state.user){var e=this.state.user,t=e.id,s=e.phone,n=e.email,r=e.name;return Object(j.jsxs)("div",{className:"CurrentUser",children:[Object(j.jsx)("h2",{className:"CurrentUser__title",children:"User #".concat(t)}),Object(j.jsx)("h3",{className:"CurrentUser__name",children:r}),Object(j.jsx)("p",{className:"CurrentUser__email",children:n}),Object(j.jsx)("p",{className:"CurrentUser__phone",children:s}),Object(j.jsx)("button",{type:"button",onClick:this.props.clear,children:"clear"})]})}return""}}]),s}(u.a.PureComponent),O=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={selectedUserId:0,todosFromServer:[]},e.selectUser=function(t){e.setState({selectedUserId:t})},e.resetUserId=function(){e.setState({selectedUserId:0})},e.completeChanger=function(t){var s=t;s.completed=!s.completed,e.setState((function(e){return{todosFromServer:[].concat(Object(c.a)(e.todosFromServer),[s])}}))},e}return Object(a.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("https://mate.academy/students-api/todos").then((function(e){return e.json()})).then((function(t){e.setState({todosFromServer:t})}))}},{key:"render",value:function(){var e=this.state,t=e.selectedUserId,s=e.todosFromServer;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("div",{className:"App__sidebar",children:Object(j.jsx)(m,{preparedTodos:s,selectUser:this.selectUser,selectedUserId:t,completeToggle:this.completeChanger})}),Object(j.jsx)("div",{className:"App__content",children:Object(j.jsx)("div",{className:"App__content-container",children:t?Object(j.jsx)(v,{userId:t,clear:this.resetUserId}):"No user selected"})})]})}}]),s}(u.a.Component),x=O;r.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.3e288d24.chunk.js.map
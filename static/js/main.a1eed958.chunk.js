(this["webpackJsonpreact-hw-03-phonebook"]=this["webpackJsonpreact-hw-03-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={phonebookForm:"ContactForm_phonebookForm__K3Z2S"}},12:function(e,t,n){e.exports={wrp:"Filter_wrp__3eVbO"}},14:function(e,t,n){e.exports=n(23)},19:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),c=n.n(r),l=(n(19),n(13)),u=n(1),i=n(2),s=n(4),m=n(3),f=n(9),h=(n(22),function(e){var t=e.name,n=e.number,a=e.onDeleteContact;return o.a.createElement("li",null,o.a.createElement("p",null,t," ",n),o.a.createElement("button",{type:"button",onClick:a},"delete"))});h.defaultProps={name:"anonymous",number:"888888888",onDeleteContact:function(){}};var d=h,b=function(e){var t=e.contacts,n=e.onDeleteContact,a=t.map((function(e){var t=e.id,a=e.name,r=e.number;return o.a.createElement(d,{key:t,name:a,number:r,onDeleteContact:function(){return n(t)}})}));return o.a.createElement("ul",null,a)};b.defaultProps={contacts:[],onDeleteContact:function(){}};var p=b,v=n(10),C=n(11),g=n.n(C),E=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={name:"",number:""},e.handleChange=function(t,n){e.setState(Object(v.a)({},n,t.target.value))},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,o=n.number;e.props.onAddContact(a,o),e.setState({name:"",number:""})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("form",{onSubmit:this.handleSubmit,className:g.a.phonebookForm},o.a.createElement("label",{htmlFor:"formName"},"Name",o.a.createElement("input",{required:!0,id:"formName",type:"text",name:"name",value:this.state.name,onChange:function(t){return e.handleChange(t,"name")}})),o.a.createElement("label",{htmlFor:"formNumber"},"Number",o.a.createElement("input",{id:"formNumber",type:"number",name:"number",value:this.state.number,required:!0,onChange:function(t){return e.handleChange(t,"number")}})),o.a.createElement("button",{type:"submit"},"Add contact"))}}]),n}(a.Component);E.defaultProps={onAddContact:function(){}};var y=E,w=n(12),k=n.n(w),S=function(e){var t=e.filter,n=e.onChangeFilter;return o.a.createElement("div",{className:k.a.wrp},o.a.createElement("label",null,"Find Contacts by name",o.a.createElement("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)}})))};S.defaultProps={onChangeFilter:function(){}};var O=S,F=function(e){Object(s.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={contacts:[],filter:""},e.addContact=function(t,n){if(e.state.contacts.some((function(e){return e.name===t})))return alert("".concat(t," is already in contacts"));var a={id:Object(f.v4)(),name:t,number:n};e.setState((function(e){return{contacts:[].concat(Object(l.a)(e.contacts),[a])}}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e.changeFilter=function(t){e.setState({filter:t})},e.getVisibleContacts=function(){var t=e.state,n=t.contacts,a=t.filter;return n.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("contacts");e&&this.setState({contacts:JSON.parse(e)})}},{key:"componentDidUpdate",value:function(e,t){t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var e=this.state,t=e.filter,n=e.contacts,a=this.getVisibleContacts();return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Phonebook"),o.a.createElement(y,{onAddContact:this.addContact}),n.length>0&&o.a.createElement("section",null,o.a.createElement("h2",null,"Contacts"),n.length>1&&o.a.createElement(O,{value:t,onChangeFilter:this.changeFilter}),n.length>1&&0===a.length&&o.a.createElement("p",null,"no results were found for your search"),o.a.createElement(p,{contacts:a,onDeleteContact:this.deleteContact})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.a1eed958.chunk.js.map
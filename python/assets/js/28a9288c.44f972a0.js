"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6430],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),k=r,h=d["".concat(l,".").concat(k)]||d[k]||u[k]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),r=n(9443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),s="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,p=39;var u=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,u=e.values,d=e.groupId,k=e.className,h=o(),m=h.tabGroupChoices,b=h.setTabGroupChoices,f=(0,a.useState)(r),v=f[0],w=f[1],y=a.Children.toArray(e.children),N=[];if(null!=d){var g=m[d];null!=g&&g!==v&&u.some((function(e){return e.value===g}))&&w(g)}var _=function(e){var t=e.currentTarget,n=N.indexOf(t),a=u[n].value;w(a),null!=d&&(b(d,a),setTimeout((function(){var e,n,a,r,o,i,s,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,s=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case p:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case c:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},k)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":v===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:x,onFocus:_,onClick:_},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},129:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var a=n(2122),r=n(9756),o=(n(7294),n(3905)),i=(n(5064),n(8215),{id:"class-websocket",title:"WebSocket"}),s=void 0,l={unversionedId:"api/class-websocket",id:"version-1.15/api/class-websocket",isDocsHomePage:!1,title:"WebSocket",description:"The [WebSocket] class represents websocket connections in the page.",source:"@site/versioned_docs/version-1.15/api/class-websocket.mdx",sourceDirName:"api",slug:"/api/class-websocket",permalink:"/python/docs/api/class-websocket",version:"1.15",frontMatter:{id:"class-websocket",title:"WebSocket"},sidebar:"version-1.15/api",previous:{title:"Video",permalink:"/python/docs/api/class-video"},next:{title:"Worker",permalink:"/python/docs/api/class-worker"}},c=[{value:"web_socket.on(&quot;close&quot;)",id:"web-socket-event-close",children:[]},{value:"web_socket.on(&quot;framereceived&quot;)",id:"web-socket-event-frame-received",children:[]},{value:"web_socket.on(&quot;framesent&quot;)",id:"web-socket-event-frame-sent",children:[]},{value:"web_socket.on(&quot;socketerror&quot;)",id:"web-socket-event-socket-error",children:[]},{value:"web_socket.expect_event(event, **kwargs)",id:"web-socket-wait-for-event",children:[]},{value:"web_socket.is_closed()",id:"web-socket-is-closed",children:[]},{value:"web_socket.url",id:"web-socket-url",children:[]},{value:"web_socket.wait_for_event(event, **kwargs)",id:"web-socket-wait-for-event-2",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-websocket",title:"WebSocket"},"WebSocket")," class represents websocket connections in the page."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-websocket#web-socket-event-close"},'web_socket.on("close")')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-websocket#web-socket-event-frame-received"},'web_socket.on("framereceived")')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-websocket#web-socket-event-frame-sent"},'web_socket.on("framesent")')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-websocket#web-socket-event-socket-error"},'web_socket.on("socketerror")')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-websocket#web-socket-wait-for-event"},"web_socket.expect_event(event, **kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-websocket#web-socket-is-closed"},"web_socket.is_closed()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-websocket#web-socket-url"},"web_socket.url")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-websocket#web-socket-wait-for-event-2"},"web_socket.wait_for_event(event, **kwargs)"))),(0,o.kt)("h2",{id:"web-socket-event-close"},'web_socket.on("close")'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ","<",(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-websocket",title:"WebSocket"},"WebSocket"),">")),(0,o.kt)("p",null,"Fired when the websocket closes."),(0,o.kt)("h2",{id:"web-socket-event-frame-received"},'web_socket.on("framereceived")'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"payload")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"|",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#bytes",title:"bytes"},"bytes"),">"," frame payload")))),(0,o.kt)("p",null,"Fired when the websocket receives a frame."),(0,o.kt)("h2",{id:"web-socket-event-frame-sent"},'web_socket.on("framesent")'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"payload")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"|",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#bytes",title:"bytes"},"bytes"),">"," frame payload")))),(0,o.kt)("p",null,"Fired when the websocket sends a frame."),(0,o.kt)("h2",{id:"web-socket-event-socket-error"},'web_socket.on("socketerror")'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ","<","[String]",">")),(0,o.kt)("p",null,"Fired when the websocket has an error."),(0,o.kt)("h2",{id:"web-socket-wait-for-event"},"web_socket.expect_event(event, **kwargs)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"event"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-option-event"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Event name, same one would pass into ",(0,o.kt)("inlineCode",{parentName:"li"},"webSocket.on(event)"),".",(0,o.kt)("a",{href:"#web-socket-wait-for-event-option-event",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"predicate"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-option-predicate"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Callable",title:"Callable"},"Callable"),">"," Receives the event data and resolves to truthy value when the waiting should resolve.",(0,o.kt)("a",{href:"#web-socket-wait-for-event-option-predicate",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timeout"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-option-timeout"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Maximum time to wait for in milliseconds. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-browsercontext#browser-context-set-default-timeout"},"browser_context.set_default_timeout(timeout)"),".",(0,o.kt)("a",{href:"#web-socket-wait-for-event-option-timeout",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/reference/datamodel.html#context-managers",title:"Event context manager"},"EventContextManager"),">",(0,o.kt)("a",{href:"#web-socket-wait-for-event-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Waits for event to fire and passes its value into the predicate function. Returns when the predicate returns truthy value. Will throw an error if the webSocket is closed before the event is fired. Returns the event data value."),(0,o.kt)("h2",{id:"web-socket-is-closed"},"web_socket.is_closed()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-is-closed-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">",(0,o.kt)("a",{href:"#web-socket-is-closed-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Indicates that the web socket has been closed."),(0,o.kt)("h2",{id:"web-socket-url"},"web_socket.url"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-url-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,o.kt)("a",{href:"#web-socket-url-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Contains the URL of the WebSocket."),(0,o.kt)("h2",{id:"web-socket-wait-for-event-2"},"web_socket.wait_for_event(event, **kwargs)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"event"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-2-option-event"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Event name, same one typically passed into ",(0,o.kt)("inlineCode",{parentName:"li"},"*.on(event)"),".",(0,o.kt)("a",{href:"#web-socket-wait-for-event-2-option-event",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"predicate"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-2-option-predicate"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Callable",title:"Callable"},"Callable"),">"," Receives the event data and resolves to truthy value when the waiting should resolve.",(0,o.kt)("a",{href:"#web-socket-wait-for-event-2-option-predicate",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timeout"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-2-option-timeout"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"},"float"),">"," Maximum time to wait for in milliseconds. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-browsercontext#browser-context-set-default-timeout"},"browser_context.set_default_timeout(timeout)"),".",(0,o.kt)("a",{href:"#web-socket-wait-for-event-2-option-timeout",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-wait-for-event-2-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Any",title:"Any"},"Any"),">",(0,o.kt)("a",{href:"#web-socket-wait-for-event-2-return",class:"list-anchor"},"#"))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In most cases, you should use ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-websocket#web-socket-wait-for-event"},"web_socket.expect_event(event, **kwargs)"),"."))),(0,o.kt)("p",null,"Waits for given ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," to fire. If predicate is provided, it passes event's value into the ",(0,o.kt)("inlineCode",{parentName:"p"},"predicate")," function and waits for ",(0,o.kt)("inlineCode",{parentName:"p"},"predicate(event)")," to return a truthy value. Will throw an error if the socket is closed before the ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," is fired."))}u.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);
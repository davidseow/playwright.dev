"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8040],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,b=m["".concat(s,".").concat(f)]||m[f]||u[f]||o;return r?n.createElement(b,c(c({ref:t},p),{},{components:r})):n.createElement(b,c({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8215:function(e,t,r){r(7294)},5064:function(e,t,r){r(7294),r(9443)},9443:function(e,t,r){var n=(0,r(7294).createContext)(void 0);t.Z=n},2541:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),c=(r(5064),r(8215),{id:"class-websocketframe",title:"WebSocketFrame"}),i=void 0,s={unversionedId:"api/class-websocketframe",id:"version-1.14/api/class-websocketframe",isDocsHomePage:!1,title:"WebSocketFrame",description:"The WebSocketFrame] class represents frames sent over [WebSocket] connections in the page. Frame payload is returned by either [WebSocketFrame.Text or WebSocketFrame.Binary method depending on the its type.",source:"@site/versioned_docs/version-1.14/api/class-websocketframe.mdx",sourceDirName:"api",slug:"/api/class-websocketframe",permalink:"/dotnet/docs/1.14/api/class-websocketframe",version:"1.14",frontMatter:{id:"class-websocketframe",title:"WebSocketFrame"},sidebar:"version-1.14/api",previous:{title:"WebSocket",permalink:"/dotnet/docs/1.14/api/class-websocket"},next:{title:"Worker",permalink:"/dotnet/docs/1.14/api/class-worker"}},l=[{value:"WebSocketFrame.Binary",id:"web-socket-frame-binary",children:[]},{value:"WebSocketFrame.Text",id:"web-socket-frame-text",children:[]}],p={toc:l};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-websocketframe",title:"WebSocketFrame"},"WebSocketFrame")," class represents frames sent over ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-websocket",title:"WebSocket"},"WebSocket")," connections in the page. Frame payload is returned by either ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-websocketframe#web-socket-frame-text"},"WebSocketFrame.Text")," or ",(0,o.kt)("a",{parentName:"p",href:"/dotnet/docs/1.14/api/class-websocketframe#web-socket-frame-binary"},"WebSocketFrame.Binary")," method depending on the its type."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-websocketframe#web-socket-frame-binary"},"WebSocketFrame.Binary")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/dotnet/docs/1.14/api/class-websocketframe#web-socket-frame-text"},"WebSocketFrame.Text"))),(0,o.kt)("h2",{id:"web-socket-frame-binary"},"WebSocketFrame.Binary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-frame-binary-return"})," ","<","[byte","[","]]","?",">",(0,o.kt)("a",{href:"#web-socket-frame-binary-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Returns binary payload."),(0,o.kt)("h2",{id:"web-socket-frame-text"},"WebSocketFrame.Text"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"web-socket-frame-text-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"?",">",(0,o.kt)("a",{href:"#web-socket-frame-text-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Returns text payload."))}u.isMDXComponent=!0}}]);
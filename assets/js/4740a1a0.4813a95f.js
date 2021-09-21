"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[73882],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(67294),o=n(79443);var i=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},a=n(86010),s="tabItem_1uMI",l="tabItemActive_2DSg";var u=37,c=39;var p=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,p=e.values,d=e.groupId,f=e.className,m=i(),h=m.tabGroupChoices,v=m.setTabGroupChoices,b=(0,r.useState)(o),g=b[0],y=b[1],w=r.Children.toArray(e.children),k=[];if(null!=d){var N=h[d];null!=N&&N!==g&&p.some((function(e){return e.value===N}))&&y(N)}var O=function(e){var t=e.currentTarget,n=k.indexOf(t),r=p[n].value;y(r),null!=d&&(v(d,r),setTimeout((function(){var e,n,r,o,i,a,s,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,i=e.right,a=window,s=a.innerHeight,u=a.innerWidth,n>=0&&i<=u&&o<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},j=function(e){var t,n;switch(e.keyCode){case c:var r=k.indexOf(e.target)+1;n=k[r]||k[0];break;case u:var o=k.indexOf(e.target)-1;n=k[o]||k[k.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},f)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,a.Z)("tabs__item",s,{"tabs__item--active":g===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:j,onFocus:O,onClick:O},n)}))),t?(0,r.cloneElement)(w.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},42966:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a=(n(55064),n(58215),{id:"troubleshooting",title:"Troubleshooting"}),s=void 0,l={unversionedId:"troubleshooting",id:"version-1.15/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"- Browser dependencies",source:"@site/versioned_docs/version-1.15/troubleshooting.mdx",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/troubleshooting",version:"1.15",frontMatter:{id:"troubleshooting",title:"Troubleshooting"}},u=[{value:"Browser dependencies",id:"browser-dependencies",children:[]},{value:"Code transpilation issues",id:"code-transpilation-issues",children:[]},{value:"Node.js requirements",id:"nodejs-requirements",children:[{value:"ReferenceError: URL is not defined",id:"referenceerror-url-is-not-defined",children:[]}]}],c={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#browser-dependencies"},"Browser dependencies")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#code-transpilation-issues"},"Code transpilation issues")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#nodejs-requirements"},"Node.js requirements")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#please-file-an-issue"},"Please file an issue"))),(0,i.kt)("h2",{id:"browser-dependencies"},"Browser dependencies"),(0,i.kt)("p",null,"Playwright does self-inspection every time it runs to make sure the browsers can be launched successfully. If there are missing dependencies, playwright will print instructions to acquire them."),(0,i.kt)("p",null,"See also in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/cli#install-system-dependencies"},"Command line tools")," which has a command to install all necessary dependencies automatically for Ubuntu LTS releases."),(0,i.kt)("h2",{id:"code-transpilation-issues"},"Code transpilation issues"),(0,i.kt)("p",null,"If you are using a JavaScript transpiler like babel or TypeScript, calling ",(0,i.kt)("inlineCode",{parentName:"p"},"evaluate()")," with an async function might not work. This is because while ",(0,i.kt)("inlineCode",{parentName:"p"},"playwright")," uses ",(0,i.kt)("inlineCode",{parentName:"p"},"Function.prototype.toString()")," to serialize functions while transpilers could be changing the output code in such a way it's incompatible with ",(0,i.kt)("inlineCode",{parentName:"p"},"playwright"),"."),(0,i.kt)("p",null,"Some workarounds to this problem would be to instruct the transpiler not to mess up with the code, for example, configure TypeScript to use latest ECMAScript version (",(0,i.kt)("inlineCode",{parentName:"p"},'"target": "es2018"'),"). Another workaround could be using string templates instead of functions:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"await page.evaluate(`(async() => {\n   console.log('1');\n})()`);\n")),(0,i.kt)("h2",{id:"nodejs-requirements"},"Node.js requirements"),(0,i.kt)("h3",{id:"referenceerror-url-is-not-defined"},"ReferenceError: URL is not defined"),(0,i.kt)("p",null,"Playwright requires Node.js 12 or higher. Node.js 8 is not supported, and will cause you to receive this error."),(0,i.kt)("h1",{id:"please-file-an-issue"},"Please file an issue"),(0,i.kt)("p",null,"Playwright is a new project, and we are watching the issues very closely. As we solve common issues, this document will grow to include the common answers."))}p.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);
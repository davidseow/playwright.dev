"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7790],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8215:function(e,t,a){var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(7294),r=a(9443);var o=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(6010),s="tabItem_1uMI",i="tabItemActive_2DSg";var c=37,p=39;var u=function(e){var t=e.lazy,a=e.block,r=e.defaultValue,u=e.values,m=e.groupId,d=e.className,g=o(),h=g.tabGroupChoices,f=g.setTabGroupChoices,v=(0,n.useState)(r),k=v[0],w=v[1],b=n.Children.toArray(e.children),y=[];if(null!=m){var x=h[m];null!=x&&x!==k&&u.some((function(e){return e.value===x}))&&w(x)}var N=function(e){var t=e.currentTarget,a=y.indexOf(t),n=u[a].value;w(n),null!=m&&(f(m,n),setTimeout((function(){var e,a,n,r,o,l,s,c;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,o=e.right,l=window,s=l.innerHeight,c=l.innerWidth,a>=0&&o<=c&&r<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},C=function(e){var t,a;switch(e.keyCode){case p:var n=y.indexOf(e.target)+1;a=y[n]||y[0];break;case c:var r=y.indexOf(e.target)-1;a=y[r]||y[y.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},d)},u.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,l.Z)("tabs__item",s,{"tabs__item--active":k===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:C,onFocus:N,onClick:N},a)}))),t?(0,n.cloneElement)(b.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},9443:function(e,t,a){var n=(0,a(7294).createContext)(void 0);t.Z=n},5395:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return i},toc:function(){return c},default:function(){return u}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),l=(a(5064),a(8215),{id:"cli",title:"Command line tools"}),s=void 0,i={unversionedId:"cli",id:"version-1.15/cli",isDocsHomePage:!1,title:"Command line tools",description:"Playwright comes with the command line tools.",source:"@site/versioned_docs/version-1.15/cli.mdx",sourceDirName:".",slug:"/cli",permalink:"/java/docs/cli",version:"1.15",frontMatter:{id:"cli",title:"Command line tools"},sidebar:"version-1.15/docs",previous:{title:"Debugging tools",permalink:"/java/docs/debug"},next:{title:"Supported languages",permalink:"/java/docs/languages"}},c=[{value:"Usage",id:"usage",children:[]},{value:"Install browsers",id:"install-browsers",children:[]},{value:"Generate code",id:"generate-code",children:[{value:"Preserve authenticated state",id:"preserve-authenticated-state",children:[]},{value:"Codegen with custom setup",id:"codegen-with-custom-setup",children:[]}]},{value:"Open pages",id:"open-pages",children:[{value:"Emulate devices",id:"emulate-devices",children:[]},{value:"Emulate color scheme and viewport size",id:"emulate-color-scheme-and-viewport-size",children:[]},{value:"Emulate geolocation, language and timezone",id:"emulate-geolocation-language-and-timezone",children:[]}]},{value:"Inspect selectors",id:"inspect-selectors",children:[]},{value:"Take screenshot",id:"take-screenshot",children:[]},{value:"Generate PDF",id:"generate-pdf",children:[]},{value:"Install system dependencies",id:"install-system-dependencies",children:[]}],p={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright comes with the command line tools."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#install-browsers"},"Install browsers")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#generate-code"},"Generate code")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#open-pages"},"Open pages")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#inspect-selectors"},"Inspect selectors")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#take-screenshot"},"Take screenshot")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#generate-pdf"},"Generate PDF")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#install-system-dependencies"},"Install system dependencies"))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI\n")),(0,o.kt)("h2",{id:"install-browsers"},"Install browsers"),(0,o.kt)("p",null,"Playwright can install supported browsers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Running without arguments will install default browsers\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="install"\n')),(0,o.kt)("p",null,"You can also install specific browsers by providing an argument:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Install WebKit\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="install webkit"\n')),(0,o.kt)("p",null,"See all supported browsers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="install --help"\n')),(0,o.kt)("h2",{id:"generate-code"},"Generate code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="codegen wikipedia.org"\n')),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"codegen")," and perform actions in the browser. Playwright CLI will generate JavaScript code for the user interactions. ",(0,o.kt)("inlineCode",{parentName:"p"},"codegen")," will attempt to generate resilient text-based selectors."),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/284612/92536033-7e7ebe00-f1ed-11ea-9e1a-7cbd912e3391.gif"}),(0,o.kt)("h3",{id:"preserve-authenticated-state"},"Preserve authenticated state"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"codegen")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"--save-storage")," to save ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"cookies")," and ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},"localStorage")," at the end. This is useful to separately record authentication step and reuse it later."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="codegen  --save-storage=auth.json"\n# Perform authentication and exit.\n# auth.json will contain the storage state.\n')),(0,o.kt)("p",null,"Run with ",(0,o.kt)("inlineCode",{parentName:"p"},"--load-storage")," to consume previously loaded storage. This way, all ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"cookies")," and ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},"localStorage")," will be restored, bringing most web apps to the authenticated state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="open --load-storage=auth.json my.web.app"\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="codegen --load-storage=auth.json my.web.app"\n# Perform authentication and exit.\n# auth.json will contain the storage state.\n')),(0,o.kt)("h3",{id:"codegen-with-custom-setup"},"Codegen with custom setup"),(0,o.kt)("p",null,"If you would like to use codegen in some non-standard setup (for example, use ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/api/class-browsercontext#browser-context-route"},"BrowserContext.route(url, handler[, options])"),"), it is possible to call ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/api/class-page#page-pause"},"Page.pause()")," that will open a separate window with codegen controls."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      // Make sure to run headed.\n      Browser browser = chromium.launch(new BrowserType.LaunchOptions().setHeadless(false));\n      // Setup context however you like.\n      BrowserContext context = browser.newContext(/* pass any options */);\n      context.route("**/*", route -> route.resume());\n      // Pause the page, and start recording manually.\n      Page page = context.newPage();\n      page.pause();\n    }\n  }\n}\n')),(0,o.kt)("h2",{id:"open-pages"},"Open pages"),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"open"),", you can use Playwright bundled browsers to browse web pages. Playwright provides cross-platform WebKit builds that can be used to reproduce Safari rendering across Windows, Linux and macOS."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Open page in Chromium\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="open example.com"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Open page in WebKit\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="wk example.com"\n')),(0,o.kt)("h3",{id:"emulate-devices"},"Emulate devices"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"open")," can emulate mobile and tablet devices from the ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-playwright#playwrightdevices"},(0,o.kt)("inlineCode",{parentName:"a"},"playwright.devices"))," list."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Emulate iPhone 11.\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args='open --device=\"iPhone 11\" wikipedia.org'\n")),(0,o.kt)("h3",{id:"emulate-color-scheme-and-viewport-size"},"Emulate color scheme and viewport size"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Emulate screen size and color scheme.\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="open --viewport-size=800,600 --color-scheme=dark twitter.com"\n')),(0,o.kt)("h3",{id:"emulate-geolocation-language-and-timezone"},"Emulate geolocation, language and timezone"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Emulate timezone, language & location\n# Once page opens, click the "my location" button to see geolocation in action\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args=\'open --timezone="Europe/Rome" --geolocation="41.890221,12.492348" --lang="it-IT" maps.google.com\'\n')),(0,o.kt)("h2",{id:"inspect-selectors"},"Inspect selectors"),(0,o.kt)("p",null,"During ",(0,o.kt)("inlineCode",{parentName:"p"},"open")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"codegen"),", you can use following API inside the developer tools console of any browser."),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/284612/92536317-37dd9380-f1ee-11ea-875d-daf1b206dd56.png"}),(0,o.kt)("h4",{id:"playwrightselector"},"playwright.$(selector)"),(0,o.kt)("p",null,"Query Playwright selector, using the actual Playwright query engine, for example:"),(0,o.kt)("h4",{id:"playwrightselector-1"},"playwright.$$(selector)"),(0,o.kt)("p",null,"Same as ",(0,o.kt)("inlineCode",{parentName:"p"},"playwright.$"),", but returns all matching elements."),(0,o.kt)("h4",{id:"playwrightinspectselector"},"playwright.inspect(selector)"),(0,o.kt)("p",null,"Reveal element in the Elements panel (if DevTools of the respective browser supports it)."),(0,o.kt)("h4",{id:"playwrightselectorelement"},"playwright.selector(element)"),(0,o.kt)("p",null,"Generates selector for the given element."),(0,o.kt)("h2",{id:"take-screenshot"},"Take screenshot"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# See command help\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="screenshot --help"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Wait 3 seconds before capturing a screenshot after page loads ('load' event fires)\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args='screenshot --device=\"iPhone 11\" --color-scheme=dark --wait-for-timeout=3000 twitter.com twitter-iphone.png'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Capture a full page screenshot\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args='screenshot --full-page en.wikipedia.org wiki-full.png'\n")),(0,o.kt)("h2",{id:"generate-pdf"},"Generate PDF"),(0,o.kt)("p",null,"PDF generation only works in Headless Chromium."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# See command help\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="pdf https://en.wikipedia.org/wiki/PDF wiki.pdf"\n')),(0,o.kt)("h2",{id:"install-system-dependencies"},"Install system dependencies"),(0,o.kt)("p",null,"Ubuntu 18.04 and Ubuntu 20.04 system dependencies can get installed automatically. This is useful for CI environments."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# See command help\nmvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="install-deps"\n')),(0,o.kt)("p",null,"You can also install the dependencies for a single browser only by passing it as an argument:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="install-deps chromium"\n')))}u.isMDXComponent=!0},6010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);
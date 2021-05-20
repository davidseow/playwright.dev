(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8122],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return g}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=r,h=d["".concat(s,".").concat(g)]||d[g]||c[g]||a;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){"use strict";n(7294)},1395:function(e,t,n){"use strict";n(7294),n(944)},9443:function(e,t,n){"use strict";var o=(0,n(7294).createContext)(void 0);t.Z=o},944:function(e,t,n){"use strict";var o=n(7294),r=n(9443);t.Z=function(){var e=(0,o.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1513:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=(n(1395),n(8215),{id:"debug",title:"Debugging tools"}),l={unversionedId:"debug",id:"debug",isDocsHomePage:!1,title:"Debugging tools",description:"Playwright scripts work with existing debugging tools, like Node.js debuggers and browser developer tools. Playwright also introduces new debugging features for browser automation.",source:"@site/docs/debug.mdx",sourceDirName:".",slug:"/debug",permalink:"/dotnet/docs/debug",version:"current",frontMatter:{id:"debug",title:"Debugging tools"},sidebar:"docs",previous:{title:"Core concepts",permalink:"/dotnet/docs/core-concepts"},next:{title:"Supported languages",permalink:"/dotnet/docs/languages"}},s=[{value:"Playwright Inspector",id:"playwright-inspector",children:[]},{value:"Run in headed mode",id:"run-in-headed-mode",children:[]},{value:"Browser Developer Tools",id:"browser-developer-tools",children:[]},{value:"Run in Debug Mode",id:"run-in-debug-mode",children:[]},{value:"Selectors in Developer Tools Console",id:"selectors-in-developer-tools-console",children:[]},{value:"Visual Studio Code debugger (Node.js)",id:"visual-studio-code-debugger-nodejs",children:[{value:"Use launch config",id:"use-launch-config",children:[]},{value:"Use the JavaScript Debug Terminal",id:"use-the-javascript-debug-terminal",children:[]}]},{value:"Verbose API logs",id:"verbose-api-logs",children:[]}],p={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Playwright scripts work with existing debugging tools, like Node.js debuggers and browser developer tools. Playwright also introduces new debugging features for browser automation."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#playwright-inspector"},"Playwright Inspector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#run-in-headed-mode"},"Run in headed mode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#browser-developer-tools"},"Browser Developer Tools")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#run-in-debug-mode"},"Run in Debug Mode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#selectors-in-developer-tools-console"},"Selectors in Developer Tools Console")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#visual-studio-code-debugger-nodejs"},"Visual Studio Code debugger (Node.js)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#verbose-api-logs"},"Verbose API logs"))),(0,a.kt)("h2",{id:"playwright-inspector"},"Playwright Inspector"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/dotnet/docs/inspector"},"Playwright Inspector")," is a GUI tool that helps authoring and debugging Playwright scripts. That's our default recommended tool for scripts troubleshooting."),(0,a.kt)("img",{width:"712",alt:"Playwright Inspector",src:"https://user-images.githubusercontent.com/883973/108614092-8c478a80-73ac-11eb-9597-67dfce110e00.png"}),(0,a.kt)("h2",{id:"run-in-headed-mode"},"Run in headed mode"),(0,a.kt)("p",null,"Playwright runs browsers in headless mode by default. To change this behavior, use ",(0,a.kt)("inlineCode",{parentName:"p"},"headless: false")," as a launch option. You can also use the ",(0,a.kt)("inlineCode",{parentName:"p"},"slowMo")," option to slow down execution and follow along while debugging."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"// Chromium, Firefox, or Webkit\nawait using var browser = await playwright.Chromium.LaunchAsync(new BrowserTypeLaunchOptions\n{\n    Headless = false,\n    SlowMo = 100\n});\n")),(0,a.kt)("h2",{id:"browser-developer-tools"},"Browser Developer Tools"),(0,a.kt)("p",null,"You can use browser developer tools in Chromium, Firefox and WebKit while running a Playwright script in headed mode. Developer tools help to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Inspect the DOM tree and ",(0,a.kt)("strong",{parentName:"li"},"find element selectors")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"See console logs")," during execution (or learn how to ",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/verification#console-logs"},"read logs via API"),")"),(0,a.kt)("li",{parentName:"ul"},"Check ",(0,a.kt)("strong",{parentName:"li"},"network activity")," and other developer tools features")),(0,a.kt)("a",{href:"https://user-images.githubusercontent.com/284612/77234134-5f21a500-6b69-11ea-92ec-1c146e1333ec.png"},(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/284612/77234134-5f21a500-6b69-11ea-92ec-1c146e1333ec.png",width:"500",alt:"Chromium Developer Tools"})),(0,a.kt)("p",null,"Using a ",(0,a.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#pagepauseasync"},"Page.PauseAsync()")," method is an easy way to pause the Playwright script execution and inspect the page in Developer tools. It will also open ",(0,a.kt)("a",{parentName:"p",href:"/dotnet/docs/inspector"},"Playwright Inspector")," to help with debugging."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"For WebKit"),": launching WebKit Inspector during the execution will   prevent the Playwright script from executing any further."))),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"For Chromium"),": you can also open developer tools through a launch option. ",(0,a.kt)("inlineCode",{parentName:"p"},"js await chromium.launch({ devtools: true }); ")," ",(0,a.kt)("inlineCode",{parentName:"p"},"java chromium.launch(new BrowserType.LaunchOptions().setDevtools(true)); ")," ",(0,a.kt)("inlineCode",{parentName:"p"},"python async await chromium.launch(devtools=True) ")," ",(0,a.kt)("inlineCode",{parentName:"p"},"python sync chromium.launch(devtools=True) ")," ",(0,a.kt)("inlineCode",{parentName:"p"},"csharp await using var browser = await playwright.Chromium.LaunchAsync(new BrowserTypeLaunchOptions { Devtools: true }); ")))),(0,a.kt)("h2",{id:"run-in-debug-mode"},"Run in Debug Mode"),(0,a.kt)("p",null,"Set the ",(0,a.kt)("inlineCode",{parentName:"p"},"PWDEBUG")," environment variable to run your scripts in debug mode. Using ",(0,a.kt)("inlineCode",{parentName:"p"},"PWDEBUG=1")," will open ",(0,a.kt)("a",{parentName:"p",href:"/dotnet/docs/inspector"},"Playwright Inspector"),"."),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"PWDEBUG=console")," will configure the browser for debugging in Developer tools console:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Runs headed"),": Browsers always launch in headed mode"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Disables timeout"),": Sets default timeout to 0 (= no timeout)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Console helper"),": Configures a ",(0,a.kt)("inlineCode",{parentName:"li"},"playwright")," object in the browser to generate and highlight ",(0,a.kt)("a",{parentName:"li",href:"/dotnet/docs/selectors"},"Playwright selectors"),". This can be used to verify text or composite selectors.")),(0,a.kt)("h2",{id:"selectors-in-developer-tools-console"},"Selectors in Developer Tools Console"),(0,a.kt)("p",null,"When running in Debug Mode with ",(0,a.kt)("inlineCode",{parentName:"p"},"PWDEBUG=console"),", a ",(0,a.kt)("inlineCode",{parentName:"p"},"playwright")," object is available in Developer tools console."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run with ",(0,a.kt)("inlineCode",{parentName:"li"},"PWDEBUG=console")),(0,a.kt)("li",{parentName:"ol"},"Setup a breakpoint to pause the execution"),(0,a.kt)("li",{parentName:"ol"},"Open the console panel in browser developer tools"),(0,a.kt)("li",{parentName:"ol"},"Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"playwright")," API",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"playwright.$(selector)"),": Highlight the first occurrence of the selector. This reflects how ",(0,a.kt)("inlineCode",{parentName:"li"},"page.$")," would see the page."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"playwright.$$(selector)"),": Highlight all occurrences of the selector. This reflects how ",(0,a.kt)("inlineCode",{parentName:"li"},"page.$$")," would see the page."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"playwright.inspect(selector)"),": Inspect the selector in the Elements panel."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"playwright.clear()"),": Clear existing highlights."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"playwright.selector(element)"),": Generate a selector that points to the element.")))),(0,a.kt)("a",{href:"https://user-images.githubusercontent.com/284612/86857345-299abc00-c073-11ea-9e31-02923a9f0d4b.png"},(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/284612/86857345-299abc00-c073-11ea-9e31-02923a9f0d4b.png",width:"500",alt:"Highlight selectors"})),(0,a.kt)("h2",{id:"visual-studio-code-debugger-nodejs"},"Visual Studio Code debugger (Node.js)"),(0,a.kt)("p",null,"The VS Code debugger can be used to pause and resume execution of Playwright scripts with breakpoints. The debugger can be configured in two ways."),(0,a.kt)("h3",{id:"use-launch-config"},"Use launch config"),(0,a.kt)("p",null,"Setup ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging"},(0,a.kt)("inlineCode",{parentName:"a"},"launch.json")," configuration")," for your Node.js project. Once configured launch the scripts with F5 and use breakpoints."),(0,a.kt)("h3",{id:"use-the-javascript-debug-terminal"},"Use the JavaScript Debug Terminal"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_javascript-debug-terminal"},"JavaScript Debug Terminal")),(0,a.kt)("li",{parentName:"ol"},"Set a breakpoint in VS Code",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Use the ",(0,a.kt)("inlineCode",{parentName:"li"},"debugger")," keyword or set a breakpoint in the VS Code UI"))),(0,a.kt)("li",{parentName:"ol"},"Run your Node.js script from the terminal")),(0,a.kt)("h2",{id:"verbose-api-logs"},"Verbose API logs"),(0,a.kt)("p",null,"Playwright supports verbose logging with the ",(0,a.kt)("inlineCode",{parentName:"p"},"DEBUG")," environment variable."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'# Powershell (Win/macOS)\n$env:DEBUG="pw:api"\ndotnet run\n')))}u.isMDXComponent=!0}}]);
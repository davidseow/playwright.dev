"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[60711],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return t?r.createElement(h,o(o({ref:n},p),{},{components:t})):r.createElement(h,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},58215:function(e,n,t){var r=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},55064:function(e,n,t){t.d(n,{Z:function(){return u}});var r=t(67294),a=t(79443);var i=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=t(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,p=39;var u=function(e){var n=e.lazy,t=e.block,a=e.defaultValue,u=e.values,m=e.groupId,d=e.className,h=i(),k=h.tabGroupChoices,g=h.setTabGroupChoices,b=(0,r.useState)(a),f=b[0],N=b[1],w=r.Children.toArray(e.children),v=[];if(null!=m){var y=k[m];null!=y&&y!==f&&u.some((function(e){return e.value===y}))&&N(y)}var C=function(e){var n=e.currentTarget,t=v.indexOf(n),r=u[t].value;N(r),null!=m&&(g(m,r),setTimeout((function(){var e,t,r,a,i,o,l,c;(e=n.getBoundingClientRect(),t=e.top,r=e.left,a=e.bottom,i=e.right,o=window,l=o.innerHeight,c=o.innerWidth,t>=0&&i<=c&&a<=l&&r>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(s),setTimeout((function(){return n.classList.remove(s)}),2e3))}),150))},x=function(e){var n,t;switch(e.keyCode){case p:var r=v.indexOf(e.target)+1;t=v[r]||v[0];break;case c:var a=v.indexOf(e.target)-1;t=v[a]||v[v.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},d)},u.map((function(e){var n=e.value,t=e.label;return r.createElement("li",{role:"tab",tabIndex:f===n?0:-1,"aria-selected":f===n,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":f===n}),key:n,ref:function(e){return v.push(e)},onKeyDown:x,onFocus:C,onClick:C},t)}))),n?(0,r.cloneElement)(w.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},w.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==f})}))))}},79443:function(e,n,t){var r=(0,t(67294).createContext)(void 0);n.Z=r},65480:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=t(22122),a=t(19756),i=(t(67294),t(3905)),o=(t(55064),t(58215),{id:"ci",title:"Continuous Integration"}),l=void 0,s={unversionedId:"ci",id:"version-1.12/ci",isDocsHomePage:!1,title:"Continuous Integration",description:"Playwright tests can be executed in CI environments. We have created sample configurations for common CI providers.",source:"@site/versioned_docs/version-1.12/ci.mdx",sourceDirName:".",slug:"/ci",permalink:"/docs/1.12/ci",version:"1.12",frontMatter:{id:"ci",title:"Continuous Integration"},sidebar:"version-1.12/docs",previous:{title:"Docker",permalink:"/docs/1.12/docker"},next:{title:"Third party runners",permalink:"/docs/1.12/test-runners"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"CI configurations",id:"ci-configurations",children:[{value:"GitHub Actions",id:"github-actions",children:[]},{value:"Docker",id:"docker",children:[]},{value:"Azure Pipelines",id:"azure-pipelines",children:[]},{value:"Travis CI",id:"travis-ci",children:[]},{value:"CircleCI",id:"circleci",children:[]},{value:"Jenkins",id:"jenkins",children:[]},{value:"Bitbucket Pipelines",id:"bitbucket-pipelines",children:[]},{value:"GitLab CI",id:"gitlab-ci",children:[]}]},{value:"Caching browsers",id:"caching-browsers",children:[]},{value:"Debugging browser launches",id:"debugging-browser-launches",children:[]},{value:"Running headed",id:"running-headed",children:[]}],p={toc:c};function u(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright tests can be executed in CI environments. We have created sample configurations for common CI providers."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#introduction"},"Introduction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#ci-configurations"},"CI configurations")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#caching-browsers"},"Caching browsers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#debugging-browser-launches"},"Debugging browser launches")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#running-headed"},"Running headed"))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"3 steps to get your tests running on CI:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Ensure CI agent can run browsers"),": Use ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.12/docker"},"our Docker image")," in Linux agents. Windows and macOS agents do not require any additional dependencies.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Install Playwright"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm ci\n# or\nnpm install\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Run your tests"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm test\n")))),(0,i.kt)("h2",{id:"ci-configurations"},"CI configurations"),(0,i.kt)("h3",{id:"github-actions"},"GitHub Actions"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright-github-action"},"Playwright GitHub Action")," can be used to run Playwright tests on GitHub Actions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"steps:\n  - uses: microsoft/playwright-github-action@v1\n  - name: Run your tests\n    run: npm test\n")),(0,i.kt)("p",null,"We run ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/playwright/blob/master/.github/workflows/tests.yml"},"our tests")," on GitHub Actions, across a matrix of 3 platforms (Windows, Linux, macOS) and 3 browsers (Chromium, Firefox, WebKit)."),(0,i.kt)("h3",{id:"docker"},"Docker"),(0,i.kt)("p",null,"We have a ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.12/docker"},"pre-built Docker image")," which can either be used directly, or as a reference to update your existing Docker definitions."),(0,i.kt)("p",null,"Suggested configuration"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"By default, Docker runs a container with a ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/shm")," shared memory space 64MB. This is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/c0b/chrome-in-docker/issues/1"},"typically too small")," for Chromium and will cause Chromium to crash when rendering large pages. To fix, run the container with ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run --shm-size=1gb")," to increase the size of ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/shm"),". Since Chromium 65, this is no longer necessary. Instead, launch the browser with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--disable-dev-shm-usage")," flag:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const browser = await playwright.chromium.launch({\n  args: ['--disable-dev-shm-usage']\n});\n")),(0,i.kt)("p",{parentName:"li"},"This will write shared memory files into ",(0,i.kt)("inlineCode",{parentName:"p"},"/tmp")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/shm"),". See ",(0,i.kt)("a",{parentName:"p",href:"https://bugs.chromium.org/p/chromium/issues/detail?id=736452"},"crbug.com/736452")," for more details.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Using ",(0,i.kt)("inlineCode",{parentName:"p"},"--ipc=host")," is also recommended when using Chromium\u2014without it Chromium can run out of memory and crash. Learn more about this option in ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/run/#ipc-settings---ipc"},"Docker docs"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Seeing other weird errors when launching Chromium? Try running your container with ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run --cap-add=SYS_ADMIN")," when developing locally.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/Yelp/dumb-init"},"dumb-init")," is worth checking out if you're experiencing a lot of zombies Chromium processes sticking around. There's special treatment for processes with PID=1, which makes it hard to terminate Chromium properly in some cases (e.g. in Docker)."))),(0,i.kt)("h3",{id:"azure-pipelines"},"Azure Pipelines"),(0,i.kt)("p",null,"For Windows or macOS agents, no additional configuration required, just install Playwright and run your tests."),(0,i.kt)("p",null,"For Linux agents, you can use ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.12/docker"},"our Docker container")," with Azure Pipelines support for ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/devops/pipelines/process/container-phases?view=azure-devops"},"running containerized jobs"),". Alternatively, you can refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.12/docker"},"Dockerfile")," to see additional dependencies that need to be installed on a Ubuntu agent."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"pool:\n  vmImage: 'ubuntu-20.04'\n\ncontainer: mcr.microsoft.com/playwright:focal\n\nsteps:\n...\n")),(0,i.kt)("h3",{id:"travis-ci"},"Travis CI"),(0,i.kt)("p",null,"Suggested configuration"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"http://man7.org/linux/man-pages/man7/user_namespaces.7.html"},"User namespace cloning")," should be enabled to support proper sandboxing"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Xvfb"},"xvfb")," should be launched in order to run Chromium in non-headless mode (e.g. to test Chrome Extensions)"),(0,i.kt)("li",{parentName:"ol"},"If your project does not have ",(0,i.kt)("inlineCode",{parentName:"li"},"package-lock.json"),", Travis would be auto-caching ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules")," directory. If you run ",(0,i.kt)("inlineCode",{parentName:"li"},"npm install")," (instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"npm ci"),"), it is possible that the browser binaries are not downloaded. Fix this with ",(0,i.kt)("a",{parentName:"li",href:"#exception-node_modules-are-cached"},"these steps")," outlined below.")),(0,i.kt)("p",null,"To sum up, your ",(0,i.kt)("inlineCode",{parentName:"p"},".travis.yml")," might look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},'language: node_js\ndist: bionic\naddons:\n  apt:\n    packages:\n    # These are required to run webkit\n    - libwoff1\n    - libopus0\n    - libwebp6\n    - libwebpdemux2\n    - libenchant1c2a\n    - libgudev-1.0-0\n    - libsecret-1-0\n    - libhyphen0\n    - libgdk-pixbuf2.0-0\n    - libegl1\n    - libgles2\n    - libevent-2.1-6\n    - libnotify4\n    - libxslt1.1\n    - libvpx5\n    # gstreamer and plugins to support video playback in WebKit.\n    - gstreamer1.0-gl\n    - gstreamer1.0-plugins-base\n    - gstreamer1.0-plugins-good\n    - gstreamer1.0-plugins-bad\n    # This is required to run chromium\n    - libgbm1\n    # this is needed for running headed tests\n    - xvfb\n\n# allow headed tests\nbefore_install:\n  # Enable user namespace cloning\n  - "sysctl kernel.unprivileged_userns_clone=1"\n  # Launch XVFB\n  - "export DISPLAY=:99.0"\n  - "sh -e /etc/init.d/xvfb start"\n')),(0,i.kt)("h3",{id:"circleci"},"CircleCI"),(0,i.kt)("p",null,"Running Playwright on CircleCI requires the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use the pre-built ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.12/docker"},"Docker image")," in your config like so:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"docker:\n  - image: mcr.microsoft.com/playwright:focal\nenvironment:\n  NODE_ENV: development # Needed if playwright is in `devDependencies`\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If you\u2019re using Playwright through Jest, then you may encounter an error spawning child processes:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"[00:00.0]  jest args: --e2e --spec --max-workers=36\nError: spawn ENOMEM\n   at ChildProcess.spawn (internal/child_process.js:394:11)\n")),(0,i.kt)("p",{parentName:"li"},"This is likely caused by Jest autodetecting the number of processes on the entire machine (",(0,i.kt)("inlineCode",{parentName:"p"},"36"),") rather than the number allowed to your container (",(0,i.kt)("inlineCode",{parentName:"p"},"2"),"). To fix this, set ",(0,i.kt)("inlineCode",{parentName:"p"},"jest --maxWorkers=2")," in your test command."))),(0,i.kt)("h3",{id:"jenkins"},"Jenkins"),(0,i.kt)("p",null,"Jenkins supports Docker agents for pipelines. Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.12/docker"},"Playwright Docker image")," to run tests on Jenkins."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"pipeline {\n   agent { docker { image 'mcr.microsoft.com/playwright:focal' } }\n   stages {\n      stage('e2e-tests') {\n         steps {\n            sh 'npm install'\n            sh 'npm run test'\n         }\n      }\n   }\n}\n")),(0,i.kt)("h3",{id:"bitbucket-pipelines"},"Bitbucket Pipelines"),(0,i.kt)("p",null,"Bitbucket Pipelines can use public ",(0,i.kt)("a",{parentName:"p",href:"https://confluence.atlassian.com/bitbucket/use-docker-images-as-build-environments-792298897.html"},"Docker images as build environments"),". To run Playwright tests on Bitbucket, use our public Docker image (",(0,i.kt)("a",{parentName:"p",href:"/docs/1.12/docker"},"see Dockerfile"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"image: mcr.microsoft.com/playwright:focal\n")),(0,i.kt)("p",null,"While the Docker image supports sandboxing for Chromium, it does not work in the Bitbucket Pipelines environment. To launch Chromium on Bitbucket Pipelines, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"chromiumSandbox: false")," launch argument."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const { chromium } = require('playwright');\nconst browser = await chromium.launch({ chromiumSandbox: false });\n")),(0,i.kt)("h3",{id:"gitlab-ci"},"GitLab CI"),(0,i.kt)("p",null,"To run Playwright tests on GitLab, use our public Docker image (",(0,i.kt)("a",{parentName:"p",href:"/docs/1.12/docker"},"see Dockerfile"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"stages:\n  - test\n\ntests:\n  stage: test\n  image: mcr.microsoft.com/playwright:focal\n  script:\n  ...\n")),(0,i.kt)("h2",{id:"caching-browsers"},"Caching browsers"),(0,i.kt)("p",null,"By default, Playwright downloads browser binaries when the Playwright NPM package is installed. The NPM packages have a ",(0,i.kt)("inlineCode",{parentName:"p"},"postinstall")," hook that downloads the browser binaries. This behavior can be ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.12/installation"},"customized with environment variables"),"."),(0,i.kt)("p",null,"Caching browsers on CI is ",(0,i.kt)("strong",{parentName:"p"},"strictly optional"),": The ",(0,i.kt)("inlineCode",{parentName:"p"},"postinstall")," hooks should execute and download the browser binaries on every run."),(0,i.kt)("h4",{id:"exception-node_modules-are-cached-node-specific"},"Exception: ",(0,i.kt)("inlineCode",{parentName:"h4"},"node_modules")," are cached (Node-specific)"),(0,i.kt)("p",null,"Most CI providers cache the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli-commands/cache.html"},"npm-cache")," directory (located at ",(0,i.kt)("inlineCode",{parentName:"p"},"$HOME/.npm"),"). If your CI pipelines caches the ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," directory and you run ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install")," (instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"npm ci"),"), the default configuration"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"will not work"),". This is because the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install")," step will find the Playwright NPM package on disk and not execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"postinstall")," step."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Travis CI automatically caches ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," if your repo does not have a ",(0,i.kt)("inlineCode",{parentName:"p"},"package-lock.json")," file.")),(0,i.kt)("p",null,"This behavior can be fixed with one of the following approaches:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Move to caching ",(0,i.kt)("inlineCode",{parentName:"li"},"$HOME/.npm")," or the npm-cache directory. (This is the default behavior in most CI providers.)"),(0,i.kt)("li",{parentName:"ol"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"PLAYWRIGHT_BROWSERS_PATH=0")," as the environment variable before running ",(0,i.kt)("inlineCode",{parentName:"li"},"npm install"),". This will download the browser binaries in the ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules")," directory and cache them with the package code. See ",(0,i.kt)("a",{parentName:"li",href:"/docs/1.12/installation"},"installation docs"),"."),(0,i.kt)("li",{parentName:"ol"},"Use ",(0,i.kt)("inlineCode",{parentName:"li"},"npm ci")," (instead of ",(0,i.kt)("inlineCode",{parentName:"li"},"npm install"),") which forces a clean install: by removing the existing ",(0,i.kt)("inlineCode",{parentName:"li"},"node_modules")," directory. See ",(0,i.kt)("a",{parentName:"li",href:"https://docs.npmjs.com/cli/ci.html"},"npm docs"),"."),(0,i.kt)("li",{parentName:"ol"},"Cache the browser binaries, with the steps below.")),(0,i.kt)("h4",{id:"directories-to-cache"},"Directories to cache"),(0,i.kt)("p",null,"With the default behavior, Playwright downloads the browser binaries in the following directories:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%\\AppData\\Local\\ms-playwright")," on Windows"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"~/Library/Caches/ms-playwright")," on MacOS"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"~/.cache/ms-playwright")," on Linux")),(0,i.kt)("p",null,"To cache the browser downloads between CI runs, cache this location in your CI configuration, against a hash of the Playwright version."),(0,i.kt)("h2",{id:"debugging-browser-launches"},"Debugging browser launches"),(0,i.kt)("p",null,"Playwright supports the ",(0,i.kt)("inlineCode",{parentName:"p"},"DEBUG")," environment variable to output debug logs during execution. Setting it to ",(0,i.kt)("inlineCode",{parentName:"p"},"pw:browser*")," is helpful while debugging ",(0,i.kt)("inlineCode",{parentName:"p"},"Error: Failed to launch browser")," errors."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"DEBUG=pw:browser* npm run test\n")),(0,i.kt)("h2",{id:"running-headed"},"Running headed"),(0,i.kt)("p",null,"By default, Playwright launches browsers in headless mode. This can be changed by passing a flag when the browser is launched."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Works across chromium, firefox and webkit\nconst { chromium } = require('playwright');\nconst browser = await chromium.launch({ headless: false });\n")),(0,i.kt)("p",null,"On Linux agents, headed execution requires ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Xvfb"},"Xvfb")," to be installed. Our ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.12/docker"},"Docker image")," and GitHub Action have Xvfb pre-installed. To run browsers in headed mode with Xvfb, add ",(0,i.kt)("inlineCode",{parentName:"p"},"xvfb-run")," before the Node.js command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"xvfb-run node index.js\n")))}u.isMDXComponent=!0},86010:function(e,n,t){function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function a(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}t.d(n,{Z:function(){return a}})}}]);
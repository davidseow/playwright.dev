"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[85823],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return g}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),g=r,d=m["".concat(o,".").concat(g)]||m[g]||u[g]||s;return a?n.createElement(d,i(i({ref:t},c),{},{components:a})):n.createElement(d,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(67294),r=a(79443);var s=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(86010),l="tabItem_1uMI",o="tabItemActive_2DSg";var p=37,c=39;var u=function(e){var t=e.lazy,a=e.block,r=e.defaultValue,u=e.values,m=e.groupId,g=e.className,d=s(),h=d.tabGroupChoices,f=d.setTabGroupChoices,k=(0,n.useState)(r),y=k[0],w=k[1],b=n.Children.toArray(e.children),N=[];if(null!=m){var x=h[m];null!=x&&x!==y&&u.some((function(e){return e.value===x}))&&w(x)}var v=function(e){var t=e.currentTarget,a=N.indexOf(t),n=u[a].value;w(n),null!=m&&(f(m,n),setTimeout((function(){var e,a,n,r,s,i,l,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,s=e.right,i=window,l=i.innerHeight,p=i.innerWidth,a>=0&&s<=p&&r<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},T=function(e){var t,a;switch(e.keyCode){case c:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case p:var r=N.indexOf(e.target)-1;a=N[r]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},g)},u.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:T,onFocus:v,onClick:v},a)}))),t?(0,n.cloneElement)(b.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},79443:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},22402:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return g}});var n=a(22122),r=a(19756),s=(a(67294),a(3905)),i=a(55064),l=a(58215),o={id:"intro",title:"Getting started"},p=void 0,c={unversionedId:"intro",id:"version-1.15/intro",isDocsHomePage:!1,title:"Getting started",description:"Playwright can either be used as a part of the Playwright Test (this guide), or as a Playwright Library.",source:"@site/versioned_docs/version-1.15/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",version:"1.15",frontMatter:{id:"intro",title:"Getting started"},sidebar:"version-1.15/docs",previous:{title:"Why Playwright?",permalink:"/docs/why-playwright"},next:{title:"Command line tools",permalink:"/docs/cli"}},u=[{value:"Installation",id:"installation",children:[]},{value:"First test",id:"first-test",children:[]},{value:"Writing assertions",id:"writing-assertions",children:[]},{value:"Using test fixtures",id:"using-test-fixtures",children:[]},{value:"Using test hooks",id:"using-test-hooks",children:[]},{value:"Command line",id:"command-line",children:[]},{value:"Creating a configuration file",id:"creating-a-configuration-file",children:[]}],m={toc:u};function g(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Playwright can either be used as a part of the Playwright Test (this guide), or as a ",(0,s.kt)("a",{parentName:"p",href:"/docs/library"},"Playwright Library"),"."),(0,s.kt)("p",null,"Playwright Test was created specifically to accommodate the needs of the end-to-end testing. It does everything you would expect from the regular test runner, and more. Playwright test allows to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Run tests across all browsers."),(0,s.kt)("li",{parentName:"ul"},"Execute tests in parallel."),(0,s.kt)("li",{parentName:"ul"},"Enjoy context isolation out of the box."),(0,s.kt)("li",{parentName:"ul"},"Capture videos, screenshots and other artifacts on failure."),(0,s.kt)("li",{parentName:"ul"},"Integrate your POMs as extensible fixtures.")),(0,s.kt)("br",null),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#first-test"},"First test")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#writing-assertions"},"Writing assertions")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#using-test-fixtures"},"Using test fixtures")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#using-test-hooks"},"Using test hooks")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#command-line"},"Command line")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"#creating-a-configuration-file"},"Creating a configuration file")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/docs/release-notes"},"Release notes"))),(0,s.kt)("br",null),(0,s.kt)("h2",{id:"installation"},"Installation"),(0,s.kt)("p",null,"Playwright has its own test runner for end-to-end tests, we call it Playwright Test."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -D @playwright/test\n# install supported browsers\nnpx playwright install\n")),(0,s.kt)("p",null,"You can optionally install only selected browsers, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/browsers#installing-browsers"},"installing browsers")," for more details. Or you can install no browsers at all and use existing ",(0,s.kt)("a",{parentName:"p",href:"/docs/browsers"},"browser channels"),"."),(0,s.kt)("h2",{id:"first-test"},"First test"),(0,s.kt)("p",null,"Create ",(0,s.kt)("inlineCode",{parentName:"p"},"tests/foo.spec.js")," (or ",(0,s.kt)("inlineCode",{parentName:"p"},"tests/foo.spec.ts")," for TypeScript) to define your test."),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import { test, expect } from '@playwright/test';\n\ntest('basic test', async ({ page }) => {\n  await page.goto('https://playwright.dev/');\n  const title = page.locator('.navbar__inner .navbar__title');\n  await expect(title).toHaveText('Playwright');\n});\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"const { test, expect } = require('@playwright/test');\n\ntest('basic test', async ({ page }) => {\n  await page.goto('https://playwright.dev/');\n  const title = page.locator('.navbar__inner .navbar__title');\n  await expect(title).toHaveText('Playwright');\n});\n")))),(0,s.kt)("p",null,"Now run your tests, assuming that test files are in the ",(0,s.kt)("inlineCode",{parentName:"p"},"tests")," directory."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test\n")),(0,s.kt)("p",null,"Playwright Test just ran a test using Chromium browser, in a headless manner. Let's tell it to use headed browser:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --headed\n")),(0,s.kt)("p",null,"What about other browsers? Let's run the same test using Firefox:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --browser=firefox\n")),(0,s.kt)("p",null,"And finally, on all three browsers:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --browser=all\n")),(0,s.kt)("p",null,"Refer to ",(0,s.kt)("a",{parentName:"p",href:"/docs/test-configuration"},"configuration")," section for configuring test runs in different modes with different browsers."),(0,s.kt)("h2",{id:"writing-assertions"},"Writing assertions"),(0,s.kt)("p",null,"Playwright Test uses ",(0,s.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/expect"},"expect")," library for test assertions. It extends it with the Playwright-specific matchers to achieve greater testing ergonomics."),(0,s.kt)("p",null,"Learn more about ",(0,s.kt)("a",{parentName:"p",href:"/docs/test-assertions"},"test assertions here"),"."),(0,s.kt)("p",null,"Here is a quick example of using them:"),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest('my test', async ({ page }) => {\n  await page.goto('https://playwright.dev/');\n\n  // Expect a title \"to contain\" a substring.\n  await expect(page).toHaveTitle(/Playwright/);\n\n  // Expect an attribute \"to be strictly equal\" to the value.\n  await expect(page.locator('text=Get Started').first()).toHaveAttribute('href', '/docs/intro');\n\n  // Expect an element \"to be visible\".\n  await expect(page.locator('text=Learn more').first()).toBeVisible();\n\n  await page.click('text=Get Started');\n  // Expect some text to be visible on the page.\n  await expect(page.locator('text=System requirements').first()).toBeVisible();\n\n  // Compare screenshot with a stored reference.\n  expect(await page.screenshot()).toMatchSnapshot('get-started.png');\n});\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest('my test', async ({ page }) => {\n  await page.goto('https://playwright.dev/');\n\n  // Expect a title \"to contain\" a substring.\n  await expect(page).toHaveTitle(/Playwright/);\n\n  // Expect an attribute \"to be strictly equal\" to the value.\n  await expect(page.locator('text=Get Started').first()).toHaveAttribute('href', '/docs/intro');\n\n  // Expect an element \"to be visible\".\n  await expect(page.locator('text=Learn more').first()).toBeVisible();\n\n  await page.click('text=Get Started');\n  // Expect some text to be visible on the page.\n  await expect(page.locator('text=System requirements').first()).toBeVisible();\n\n  // Compare screenshot with a stored reference.\n  expect(await page.screenshot()).toMatchSnapshot('get-started.png');\n});\n")))),(0,s.kt)("p",null,"Notice how running this test is saying:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Error: example.spec.ts-snapshots/get-started-chromium-darwin.png is missing in snapshots, writing actual.\n")),(0,s.kt)("p",null,"That's because there was no golden file for your ",(0,s.kt)("inlineCode",{parentName:"p"},"get-started.png")," snapshot. It is now created and is ready to be added to the repository. The name of the folder with the golden expectations starts with the name of your test file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"drwxr-xr-x  5 user  group  160 Jun  4 11:46 .\ndrwxr-xr-x  6 user  group  192 Jun  4 11:45 ..\n-rw-r--r--  1 user  group  231 Jun  4 11:16 example.spec.ts\ndrwxr-xr-x  3 user  group   96 Jun  4 11:46 example.spec.ts-snapshots\n")),(0,s.kt)("p",null,"To update your golden files, you can use the ",(0,s.kt)("inlineCode",{parentName:"p"},"--update-snapshots")," parameter."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --update-snapshots\n")),(0,s.kt)("h2",{id:"using-test-fixtures"},"Using test fixtures"),(0,s.kt)("p",null,"You noticed an argument ",(0,s.kt)("inlineCode",{parentName:"p"},"{ page }")," that the test above has access to:"),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"test('basic test', async ({ page }) => {\n  ...\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"test('basic test', async ({ page }) => {\n  ...\n")))),(0,s.kt)("p",null,"We call these arguments ",(0,s.kt)("inlineCode",{parentName:"p"},"fixtures"),". Fixtures are objects that are created for each test run. Playwright Test comes loaded with those fixtures, and you can add your own fixtures as well. When running tests, Playwright Test looks at each test declaration, analyses the set of fixtures the test needs and prepares those fixtures specifically for the test."),(0,s.kt)("p",null,"Here is a list of the pre-defined fixtures that you are likely to use most of the time:"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},"Fixture"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"page"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/docs/api/class-page",title:"Page"},"Page")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Isolated page for this test run.")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"context"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/docs/api/class-browsercontext",title:"BrowserContext"},"BrowserContext")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Isolated context for this test run. The ",(0,s.kt)("inlineCode",{parentName:"td"},"page")," fixture belongs to this context as well. Learn how to ",(0,s.kt)("a",{parentName:"td",href:"/docs/test-configuration"},"configure context"),".")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"browser"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"/docs/api/class-browser",title:"Browser"},"Browser")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Browsers are shared across tests to optimize resources. Learn how to ",(0,s.kt)("a",{parentName:"td",href:"/docs/test-configuration"},"configure browser"),".")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},"browserName"),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string")),(0,s.kt)("td",{parentName:"tr",align:"left"},"The name of the browser currently running the test. Either ",(0,s.kt)("inlineCode",{parentName:"td"},"chromium"),", ",(0,s.kt)("inlineCode",{parentName:"td"},"firefox")," or ",(0,s.kt)("inlineCode",{parentName:"td"},"webkit"),".")))),(0,s.kt)("h2",{id:"using-test-hooks"},"Using test hooks"),(0,s.kt)("p",null,"You can use ",(0,s.kt)("inlineCode",{parentName:"p"},"test.beforeAll")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"test.afterAll")," hooks to set up and tear down resources shared between tests. And you can use ",(0,s.kt)("inlineCode",{parentName:"p"},"test.beforeEach")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"test.afterEach")," hooks to set up and tear down resources for each test individually."),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest.describe('feature foo', () => {\n  test.beforeEach(async ({ page }) => {\n    // Go to the starting url before each test.\n    await page.goto('https://my.start.url/');\n  });\n\n  test('my test', async ({ page }) => {\n    // Assertions use the expect API.\n    await expect(page).toHaveURL('https://my.start.url/');\n  });\n});\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest.describe('feature foo', () => {\n  test.beforeEach(async ({ page }) => {\n    // Go to the starting url before each test.\n    await page.goto('https://my.start.url/');\n  });\n\n  test('my test', async ({ page }) => {\n    // Assertions use the expect API.\n    await expect(page).toHaveURL('https://my.start.url/');\n  });\n});\n")))),(0,s.kt)("h2",{id:"command-line"},"Command line"),(0,s.kt)("p",null,"Following are the usual command line patterns. Learn more about the ",(0,s.kt)("a",{parentName:"p",href:"/docs/test-cli"},"command line"),"."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Run all the tests"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Run a single test file"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test tests/todo-page.spec.ts\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Run a set of test files"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test tests/todo-page/ tests/landing-page/\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Run files that have ",(0,s.kt)("inlineCode",{parentName:"p"},"my-spec")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"my-spec-2")," in the file name"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test my-spec my-spec-2\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Run the test with the title"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'npx playwright test -g "add a todo item"\n'))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Run tests in headed browsers"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --headed\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Run tests in a particular browser (config-less mode)"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --browser=webkit\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Run tests in all browsers (config-less mode)"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --browser=all\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Disable ",(0,s.kt)("a",{parentName:"p",href:"/docs/test-parallel"},"parallelization")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --workers=1\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Choose a ",(0,s.kt)("a",{parentName:"p",href:"/docs/test-reporters"},"reporter")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --reporter=dot\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Run in debug mode with ",(0,s.kt)("a",{parentName:"p",href:"/docs/inspector"},"Playwright Inspector")),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --debug\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"Ask for help"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --help\n")))),(0,s.kt)("h2",{id:"creating-a-configuration-file"},"Creating a configuration file"),(0,s.kt)("p",null,"So far, we've looked at the zero-config operation of Playwright Test. For a real world application, it is likely that you would want to use a config."),(0,s.kt)("p",null,"Create ",(0,s.kt)("inlineCode",{parentName:"p"},"playwright.config.ts")," (or ",(0,s.kt)("inlineCode",{parentName:"p"},"playwright.config.js"),") to configure your tests. You can specify browser launch options, run tests in multiple browsers and much more with the config. Here is an example configuration that runs every test in Chromium, Firefox and WebKit, both Desktop and Mobile versions. Look for more options in the ",(0,s.kt)("a",{parentName:"p",href:"/docs/test-configuration"},"configuration section"),"."),(0,s.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.ts\nimport { PlaywrightTestConfig, devices } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  projects: [\n    {\n      name: 'Chrome Stable',\n      use: {\n        browserName: 'chromium',\n        // Test against Chrome Stable channel.\n        channel: 'chrome',\n      },\n    },\n    {\n      name: 'Desktop Safari',\n      use: {\n        browserName: 'webkit',\n        viewport: { width: 1200, height: 750 },\n      }\n    },\n    // Test against mobile viewports.\n    {\n      name: 'Mobile Chrome',\n      use: devices['Pixel 5'],\n    },\n    {\n      name: 'Mobile Safari',\n      use: devices['iPhone 12'],\n    },\n    {\n      name: 'Desktop Firefox',\n      use: {\n        browserName: 'firefox',\n        viewport: { width: 800, height: 600 },\n      }\n    },\n  ],\n};\nexport default config;\n"))),(0,s.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\n// @ts-check\nconst { devices } = require('@playwright/test');\n\n/** @type {import('@playwright/test').PlaywrightTestConfig} */\nconst config = {\n  projects: [\n    {\n      name: 'Desktop Chromium',\n      use: {\n        browserName: 'chromium',\n        // Test against Chrome Beta channel.\n        channel: 'chrome-beta',\n      },\n    },\n    {\n      name: 'Desktop Safari',\n      use: {\n        browserName: 'webkit',\n        viewport: { width: 1200, height: 750 },\n      }\n    },\n    // Test against mobile viewports.\n    {\n      name: 'Mobile Chrome',\n      use: devices['Pixel 5'],\n    },\n    {\n      name: 'Mobile Safari',\n      use: devices['iPhone 12'],\n    },\n    {\n      name: 'Desktop Firefox',\n      use: {\n        browserName: 'firefox',\n        viewport: { width: 800, height: 600 },\n      }\n    },\n  ],\n};\n\nmodule.exports = config;\n")))),(0,s.kt)("p",null,"Configure NPM script to run tests. Playwright Test will automatically pick up ",(0,s.kt)("inlineCode",{parentName:"p"},"playwright.config.js")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"playwright.config.ts"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "test": "playwright test"\n  }\n}\n')),(0,s.kt)("p",null,"If you put your configuration file in a different place, pass it with ",(0,s.kt)("inlineCode",{parentName:"p"},"--config")," option."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "test": "playwright test --config=tests/example.config.js"\n  }\n}\n')))}g.isMDXComponent=!0},86010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);
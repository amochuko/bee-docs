(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[2852],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,g=p["".concat(s,".").concat(h)]||p[h]||d[h]||i;return n?o.createElement(g,a(a({ref:t},c),{},{components:n})):o.createElement(g,a({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2959:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var o=n(2122),r=n(9756),i=(n(7294),n(3905)),a=["components"],u={title:"Introduction",id:"introduction"},s={unversionedId:"working-with-bee/introduction",id:"working-with-bee/introduction",isDocsHomePage:!1,title:"Introduction",description:"For the most part, your Bee will happily run in the background, but there are some things we will occasionally need to do to ensure that your Bee stays healthy! In this section we will show you how to get the most out of your Bee,",source:"@site/docs/working-with-bee/introduction.md",sourceDirName:"working-with-bee",slug:"/working-with-bee/introduction",permalink:"/docs/working-with-bee/introduction",editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/working-with-bee/introduction.md",version:"current",frontMatter:{title:"Introduction",id:"introduction"},sidebar:"Balls",previous:{title:"Fund Your Node",permalink:"/docs/installation/fund-your-node"},next:{title:"Configuration",permalink:"/docs/working-with-bee/configuration"}},l=[{value:"Configuration",id:"configuration",children:[{value:"Debug API",id:"debug-api",children:[]},{value:"Logs and Files",id:"logs-and-files",children:[]}]},{value:"Bee Dashboard and Swarm CLI",id:"bee-dashboard-and-swarm-cli",children:[]},{value:"Cashing Out",id:"cashing-out",children:[]},{value:"Monitoring and Metrics",id:"monitoring-and-metrics",children:[]},{value:"Backups",id:"backups",children:[]},{value:"Upgrading",id:"upgrading",children:[]},{value:"Uninstalling Bee",id:"uninstalling-bee",children:[]}],c={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For the most part, your Bee will happily run in the background, but there are some things we will occasionally need to do to ensure that your Bee stays healthy! In this section we will show you how to get the most out of your Bee,\nand to get more information on what your Bee is buzzing about."),(0,i.kt)("p",null,"This section covers information relating to managing your node, ensuring everything is going well, and best practices for backups and upgrading. For information on using Bee to upload files, host your website on the unstoppable Swarm network and more, check out ",(0,i.kt)("a",{parentName:"p",href:"/docs/access-the-swarm/introduction"},"Using Bee")),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Learn how to ",(0,i.kt)("a",{parentName:"p",href:"/docs/working-with-bee/configuration"},"configure your node"),", and the details behind all the configuration options Bee provides."),(0,i.kt)("h3",{id:"debug-api"},"Debug API"),(0,i.kt)("p",null,"Access the HTTP Debug API directly for ",(0,i.kt)("a",{parentName:"p",href:"/docs/working-with-bee/debug-api"},"detailed information about your Bee"),"."),(0,i.kt)("h3",{id:"logs-and-files"},"Logs and Files"),(0,i.kt)("p",null,"Find out where Bee stores your ",(0,i.kt)("a",{parentName:"p",href:"/docs/working-with-bee/logs-and-files"},"logs and files"),"."),(0,i.kt)("h2",{id:"bee-dashboard-and-swarm-cli"},"Bee Dashboard and Swarm CLI"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/working-with-bee/bee-tools"},"Try out")," our brand new Bee Dashboard app and ",(0,i.kt)("inlineCode",{parentName:"p"},"swarm-cli")," tool to monitor your Bee's status, cash out your cheques, upload data to the swarm and more!"),(0,i.kt)("h2",{id:"cashing-out"},"Cashing Out"),(0,i.kt)("p",null,"Get your cheques cashed and bank your BZZs. ",(0,i.kt)("a",{parentName:"p",href:"/docs/working-with-bee/cashing-out"},"See this guide")," to receiving payments from your peers."),(0,i.kt)("h2",{id:"monitoring-and-metrics"},"Monitoring and Metrics"),(0,i.kt)("p",null,"There is a lot going on inside Bee, we provide tools and metrics to help you ",(0,i.kt)("a",{parentName:"p",href:"/docs/working-with-bee/monitoring"},"find out what's going on"),"."),(0,i.kt)("h2",{id:"backups"},"Backups"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/working-with-bee/backups"},"Keep your important data safe"),", Bee stores important state and key information on your hardrive, make sure you keep a secure copy in case of disaster."),(0,i.kt)("h2",{id:"upgrading"},"Upgrading"),(0,i.kt)("p",null,"Find out how to ",(0,i.kt)("a",{parentName:"p",href:"/docs/working-with-bee/upgrading-bee"},"keep your Bee up to date")," with the latest and greatest releases, and make sure you're tuned into our release announcements."),(0,i.kt)("h2",{id:"uninstalling-bee"},"Uninstalling Bee"),(0,i.kt)("p",null,"We hope you won't need to remove Bee. If you do, please let us know if you had issues so we can help resolve them for our beloved network. Here's the guide to ",(0,i.kt)("a",{parentName:"p",href:"/docs/working-with-bee/uninstalling-bee"},"removing Bee from your system"),"."))}d.isMDXComponent=!0}}]);
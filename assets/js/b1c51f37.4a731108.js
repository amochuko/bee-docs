"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[938],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),f=r,m=c["".concat(p,".").concat(f)]||c[f]||d[f]||a;return n?o.createElement(m,l(l({ref:t},u),{},{components:n})):o.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},337:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),l=["components"],i={title:"Useful Developer Info",id:"useful-dev-info"},p=void 0,s={unversionedId:"develop/bee-developers/useful-dev-info",id:"develop/bee-developers/useful-dev-info",title:"Useful Developer Info",description:"Welcome to the Dev area! We love PR's! \ud83d\udc1d",source:"@site/docs/develop/bee-developers/useful-dev-info.md",sourceDirName:"develop/bee-developers",slug:"/develop/bee-developers/useful-dev-info",permalink:"/docs/develop/bee-developers/useful-dev-info",draft:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/develop/bee-developers/useful-dev-info.md",tags:[],version:"current",frontMatter:{title:"Useful Developer Info",id:"useful-dev-info"},sidebar:"develop",previous:{title:"PSS Messaging",permalink:"/docs/develop/dapps-on-swarm/pss"},next:{title:"Developer mode",permalink:"/docs/develop/bee-developers/bee-dev-mode"}},u={},c=[],d={toc:c},f="wrapper";function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)(f,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Welcome to the Dev area! We love PR's! \ud83d\udc1d"),(0,a.kt)("p",null,"We would would love you to get involved with our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee"},"Github repo"),"."),(0,a.kt)("p",null,"All the action can be found on our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/wdghaQsGq5"},"Discord Server"),". Sign up and get involved with our buzzing hive of daily dev chat."),(0,a.kt)("p",null,"If you would like to contribute, please read the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee/blob/master/CODING.md"},"coding guidelines")," before you get started."),(0,a.kt)("p",null,"Installation from source is described in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/bee/installation/build-from-source"},"Installation"),"."),(0,a.kt)("h1",{id:"testing-a-connection-with-pingpong-protocol"},"Testing a connection with PingPong protocol"),(0,a.kt)("p",null,"To check if two nodes are connected and to see the round trip time for message exchange between them, get the overlay address from one node, for example local node 2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl localhost:1835/addresses\n")),(0,a.kt)("p",null,"Make sure that Debug API is enabled and addresses configured as in examples above."),(0,a.kt)("p",null,"And use that address in the Debug API call on another node, for example, local node 1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -XPOST localhost:1735/pingpong/d4440baf2d79e481c3c6fd93a2014d2e6fe0386418829439f26d13a8253d04f1\n")),(0,a.kt)("h1",{id:"generating-protobuf"},"Generating protobuf"),(0,a.kt)("p",null,"To process protocol buffer files and generate the Go code from it two tools are needed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/protocolbuffers/protobuf/releases"},"protoc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/gogo/protobuf"},"protoc-gen-gogofaster"))),(0,a.kt)("p",null,"Makefile rule ",(0,a.kt)("inlineCode",{parentName:"p"},"protobuf")," can be used to automate ",(0,a.kt)("inlineCode",{parentName:"p"},"protoc-gen-gogofaster")," installation and code generation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"make protobuf\n")),(0,a.kt)("h1",{id:"tracing"},"Tracing"),(0,a.kt)("p",null,"Developers can gain an additional level of insight into the node by enabling ",(0,a.kt)("inlineCode",{parentName:"p"},"tracing"),". To make use of Tracing, we advice to make use of ",(0,a.kt)("a",{parentName:"p",href:"https://www.jaegertracing.io/"},"jaeger"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Set up tracing by:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Start jaeger:\n",(0,a.kt)("inlineCode",{parentName:"p"},"docker run -p 6831:6831/udp -p 16686:16686 jaegertracing/all-in-one:latest"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'start locally two bee nodes (different data dirs and ports) and connect them (see "Start a test network" in the ',(0,a.kt)("a",{parentName:"p",href:"/docs/develop/bee-developers/starting-a-test-network"},"advanced section"),") with ",(0,a.kt)("inlineCode",{parentName:"p"},"--tracing")," flag provided for both nodes")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Make a call to the PingPong API on one of the two nodes (",(0,a.kt)("inlineCode",{parentName:"p"},"curl -XPOST localhost:1735/pingpong/<overlay address other node>"),")."))),(0,a.kt)("p",null,"Validate tracing in the web interface (",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:16686/"),")."))}m.isMDXComponent=!0}}]);
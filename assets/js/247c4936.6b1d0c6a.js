"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[4145],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,h=u["".concat(i,".").concat(f)]||u[f]||d[f]||n;return r?a.createElement(h,c(c({ref:t},p),{},{components:r})):a.createElement(h,c({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,c=new Array(n);c[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:o,c[1]=s;for(var l=2;l<n;l++)c[l]=r[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9518:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=r(7462),o=r(3366),n=(r(7294),r(3905)),c=["components"],s={title:"Price Oracle",id:"price-oracle"},i=void 0,l={unversionedId:"learn/technology/contracts/price-oracle",id:"learn/technology/contracts/price-oracle",title:"Price Oracle",description:"The job of the Oracle contract is to set the price of Postage Stamps. The oracle contract uses data from the Postage Stamp contract in order to set the appropriate price for Postage Stamps. The data in the Postage Stamp contract is used to calculate a \u201cutilization signal\u201d. This signal is an indicator of how much the Swarm network\u2019s data storage capacity is being utilized. Specifically, the signal is a measure of data redundancy on the network. Redundancy is a measure of how many copies of each piece of data can be stored by the network. The protocol targets a fourfold level of data redundancy as a safe minimum.",source:"@site/docs/learn/technology/contracts/price-oracle.md",sourceDirName:"learn/technology/contracts",slug:"/learn/technology/contracts/price-oracle",permalink:"/docs/learn/technology/contracts/price-oracle",draft:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/learn/technology/contracts/price-oracle.md",tags:[],version:"current",frontMatter:{title:"Price Oracle",id:"price-oracle"},sidebar:"learn",previous:{title:"Postage Stamp",permalink:"/docs/learn/technology/contracts/postage-stamp"},next:{title:"Foundation",permalink:"/docs/learn/ecosystem/swarm-foundation"}},p={},u=[],d={toc:u},f="wrapper";function h(e){var t=e.components,r=(0,o.Z)(e,c);return(0,n.kt)(f,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The job of the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/price-oracle"},"Oracle contract")," is to set the price of Postage Stamps. The oracle contract uses data from the ",(0,n.kt)("a",{parentName:"p",href:"/docs/learn/technology/contracts/postage-stamp"},"Postage Stamp contract")," in order to set the appropriate price for Postage Stamps. The data in the Postage Stamp contract is used to calculate a \u201cutilization signal\u201d. This signal is an indicator of how much the Swarm network\u2019s data storage capacity is being utilized. Specifically, the signal is a measure of data redundancy on the network. Redundancy is a measure of how many copies of each piece of data can be stored by the network. The protocol targets a fourfold level of data redundancy as a safe minimum. "),(0,n.kt)("p",null,"For example, if there is an increase in postage stamps being purchased while the number of nodes remains constant, the data redundancy level will begin to fall as data storers\u2019 available space begins to become reserved. If too many postage stamps are purchased without an equivalent increase in storage providers, the redundancy level may fall below four. In this case, the oracle will increase the price of postage stamps so that it becomes more expensive to store data on Swarm. The higher cost of storage will then lead to less postage stamps being purchased, and will push the redundancy level back up towards four. "),(0,n.kt)("p",null,"Conversely, if the amount of Stamps being purchased decreases while the number of storage provider nodes remains constant, the redundancy level will increase as there are fewer chunks of data to be distributed amongst the same number of nodes. In this case, the oracle will decrease the Postage Stamp price in order to promote more data storers to store their data on Swarm. The lower cost of storage will then lead to more Postage Stamps being purchased and push the redundancy level back down towards four."))}h.isMDXComponent=!0}}]);
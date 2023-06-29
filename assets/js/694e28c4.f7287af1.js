"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[8224],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),d=o,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||r;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},84623:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),i=["components"],s={title:"Keep Your Data Alive",id:"keep-your-data-alive"},l=void 0,c={unversionedId:"develop/access-the-swarm/keep-your-data-alive",id:"develop/access-the-swarm/keep-your-data-alive",title:"Keep Your Data Alive",description:"The swarm comprises the sum total of all storage space provided by all of our nodes, called the DISC (Distributed Immutable Store of Chunks). The right to write data into this distributed store is determined by the postage stamps that have been attached.",source:"@site/docs/develop/access-the-swarm/keep-your-data-alive.md",sourceDirName:"develop/access-the-swarm",slug:"/develop/access-the-swarm/keep-your-data-alive",permalink:"/docs/develop/access-the-swarm/keep-your-data-alive",draft:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/develop/access-the-swarm/keep-your-data-alive.md",tags:[],version:"current",frontMatter:{title:"Keep Your Data Alive",id:"keep-your-data-alive"},sidebar:"develop",previous:{title:"Track Upload Status",permalink:"/docs/develop/access-the-swarm/syncing"},next:{title:"Pinning",permalink:"/docs/develop/access-the-swarm/pinning"}},p={},u=[{value:"Fund your node&#39;s wallet.",id:"fund-your-nodes-wallet",level:3},{value:"Purchase a Batch of Stamps",id:"purchase-a-batch-of-stamps",level:2},{value:"Amount",id:"amount",level:3},{value:"Batch Depth",id:"batch-depth",level:3},{value:"Calculating the Depth and Amount of Your Batch of Stamps",id:"calculating-the-depth-and-amount-of-your-batch-of-stamps",level:3},{value:"Calculating the Remaining TTL of Your Batch",id:"calculating-the-remaining-ttl-of-your-batch",level:3},{value:"Top Up Your Batch",id:"top-up-your-batch",level:3},{value:"Stewardship",id:"stewardship",level:2}],h={toc:u},d="wrapper";function m(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)(d,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The swarm comprises the sum total of all storage space provided by all of our nodes, called the DISC (Distributed Immutable Store of Chunks). The ",(0,r.kt)("em",{parentName:"p"},"right to write")," data into this distributed store is determined by the postage stamps that have been attached."),(0,r.kt)("h3",{id:"fund-your-nodes-wallet"},"Fund your node's wallet."),(0,r.kt)("p",null,"To start up your node, you will already have provided your node with\nxDAI for gas and xBZZ which was transferred into your chequebook when\nyour node was initialised. This will be used to interact with other\nnodes using the ",(0,r.kt)("em",{parentName:"p"},"SWAP")," protocol. In order to access more funds to buy\nbatches of stamps, your wallet must be funded with xBZZ. The easiest\nway to acheive this is to withdraw funds from your chequebook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -XPOST "http://localhost:1635/chequebook/withdraw?amount=1000"\n')),(0,r.kt)("h2",{id:"purchase-a-batch-of-stamps"},"Purchase a Batch of Stamps"),(0,r.kt)("p",null,"Stamps are created in batches, so that storer nodes may calculate the\nvalidity of a chunk's stamp with only local knowledge. This enables\nthe privacy you enjoy in the swarm."),(0,r.kt)("p",null,"Stamp batches are created in ",(0,r.kt)("em",{parentName:"p"},"buckets")," with a ",(0,r.kt)("em",{parentName:"p"},"depth")," 16. The entire\nswarm ",(0,r.kt)("em",{parentName:"p"},"address space")," is divided into 2^16 = 65,536 different\nbuckets. When uploaded, each of your file's are split into 4kb chunks\nand assigned to a specific bucket based on it's address."),(0,r.kt)("p",null,"When creating a batch you must specify two values, ",(0,r.kt)("em",{parentName:"p"},"batch depth")," and ",(0,r.kt)("em",{parentName:"p"},"amount"),"."),(0,r.kt)("h3",{id:"amount"},"Amount"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"amount")," represents the quantity of xBZZ that is assigned to this batch. The total amount of xBZZ that will be paid for the batch is calulated from this figure and the ",(0,r.kt)("em",{parentName:"p"},"batch depth"),"."),(0,r.kt)("p",null,"The paid amount forms the ",(0,r.kt)("em",{parentName:"p"},"balance")," of the ",(0,r.kt)("em",{parentName:"p"},"batch"),". This ",(0,r.kt)("em",{parentName:"p"},"balance")," is then slowly depleted as time ticks on and ",(0,r.kt)("em",{parentName:"p"},"blocks")," are mined on the xDAI blockchain."),(0,r.kt)("h3",{id:"batch-depth"},"Batch Depth"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"batch depth")," determines ",(0,r.kt)("em",{parentName:"p"},"how many chunks")," are allowed to be in each ",(0,r.kt)("em",{parentName:"p"},"bucket"),". The number of chunks allowed in each ",(0,r.kt)("em",{parentName:"p"},"bucket")," is calculated to be a ",(0,r.kt)("inlineCode",{parentName:"p"},"2^(batch depth - bucket depth) = 2^(batch depth - 16)"),"."),(0,r.kt)("h3",{id:"calculating-the-depth-and-amount-of-your-batch-of-stamps"},"Calculating the Depth and Amount of Your Batch of Stamps"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Postage Stamps")," are a brand new feature addition to Swarm, and it's early days in the conception of how to get the best out of the stamp batches."),(0,r.kt)("p",null,"Right now, the easiest way to start uploading content, is to buy a large enough batch so that it is incredibly unlikely you will end up with too many ",(0,r.kt)("em",{parentName:"p"},"chunks")," falling into the same ",(0,r.kt)("em",{parentName:"p"},"bucket"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"amount")," you specify will determine the amount of time your chunks live in the swarm. Because pricing is variable, it is not possible to predict with accuracy exactly when your chunks will run out of balance, however, it can be estimated based on the ",(0,r.kt)("em",{parentName:"p"},"current price")," and the ",(0,r.kt)("em",{parentName:"p"},"remaining batch balance"),"."),(0,r.kt)("p",null,"For now, we suggest you specify depth 20 and amount 10000000 for your\nbatches. This should be ample to upload quite some data, and to keep\nyour files in the swarm for the forseeable future."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"When you purchase a batch of stamps, you agree to burn xBZZ. Although your 'balance' slowly decrements as time goes on, there is no way to withdraw xBZZ from a batch. This is an outcome of Swarm's decentralised design, to read more about how the swarm fits together, read ",(0,r.kt)("a",{href:"/the-book-of-swarm.pdf",target:"_blank",rel:"noopener noreferrer"},"The Book of Swarm")," .")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s -XPOST http://localhost:1635/stamps/1000000000/20\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Once your batch has been purchased, it will take a few minutes for other Bee nodes in the Swarm to catch up and register your batch. Allow some time for your batch to propagate in the network before proceeding to the next step.")),(0,r.kt)("p",null,"Look out for more ways to more accurately estimate the correct size of your batch coming soon!"),(0,r.kt)("p",null,"To check on your stamps, send a GET request to the stamp endpoint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl http://localhost:1635/stamps\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When uploading content which has been stamped using an already expired postage stamp, the node will not attempt to sync the content. You are advised to use longer-lived postage stamps and encrypt your content to work around this. It is not possible to reupload unencrypted content which was stamped using an expired postage stamp. We're working on improving on this.")),(0,r.kt)("h3",{id:"calculating-the-remaining-ttl-of-your-batch"},"Calculating the Remaining TTL of Your Batch"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"At present, TTL is a primitive calculation based on the current storage price and the assumption that storage price will remain static in the future. As more data is uploaded into Swarm, the price of storage will begin to increase. For data that it is important to keep alive, make sure your batches have plenty of time to live!")),(0,r.kt)("p",null,"In order to make sure your ",(0,r.kt)("em",{parentName:"p"},"batch")," has sufficient ",(0,r.kt)("em",{parentName:"p"},"remaining balance")," to be stored and served by nodes in its ",(0,r.kt)("em",{parentName:"p"},"neighbourhood of responsibility"),", you must regularly check on its ",(0,r.kt)("em",{parentName:"p"},"time to live")," and act accordingly. The ",(0,r.kt)("em",{parentName:"p"},"time to live")," is the number of seconds before the chunks will be considered for garbage collection by nodes in the network."),(0,r.kt)("p",null,"The remaining ",(0,r.kt)("em",{parentName:"p"},"time to live")," in seconds is shown in the returned json object as the value for ",(0,r.kt)("inlineCode",{parentName:"p"},"batchTTL"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'    curl "http://localhost:1635/stamps"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "stamps": [\n    {\n      "batchID": "6d32e6f1b724f8658830e51f8f57aa6029f82ee7a30e4fc0c1bfe23ab5632b27",\n      "utilization": 0,\n      "usable": true,\n      "label": "",\n      "depth": 20,\n      "amount": "113314620",\n      "bucketDepth": 16,\n      "blockNumber": 19727733,\n      "immutableFlag": false,\n      "exists": true,\n      "batchTTL": 68795140\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"top-up-your-batch"},"Top Up Your Batch"),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Don't let your batch run out! If it does, you will need to restamp and resync your content.")),(0,r.kt)("p",null,"If your batch is starting to run out, or you would like to extend the life of your batch to protect against storage price rises, you can increase the batch TTL by topping up your batch using the stamps endpoint, passing in the relevant batchID into the HTTP PATCH request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PATCH "http://localhost:1635/stamps/topup/6d32e6f1b724f8658830e51f8f57aa6029f82ee7a30e4fc0c1bfe23ab5632b27/10000000"\n')),(0,r.kt)("h2",{id:"stewardship"},"Stewardship"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{href:"/api/#tag/Stewardship",target:"_blank"},"stewardship endpoint")," in combination with ",(0,r.kt)("a",{parentName:"p",href:"/docs/develop/access-the-swarm/pinning"},"pinning")," can be used to guarantee that important content is always available. It is used for checking whether the content for a Swarm reference is retrievable and for re-uploading the content if it is not."),(0,r.kt)("p",null,"An HTTP GET request to the ",(0,r.kt)("inlineCode",{parentName:"p"},"stewardship")," endpoint checks to see whether the content for the specified Swarm reference is retrievable:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl "http://localhost:1633/stewardship/c0c2b70b01db8cdfaf114cde176a1e30972b556c7e72d5403bea32e\nc0207136f"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"isRetrievable":true}\n')),(0,r.kt)("p",null,"If the content is not retrievable, an HTTP PUT request can be used to re-upload the content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X PUT "http://localhost:1633/stewardship/c0c2b70b01db8cdfaf114cde176a1e30972b556c7e72d5403bea32ec0207136f"\n')),(0,r.kt)("p",null,"Note that for the re-upload to succeed, the associated content must be available locally, either pinned or cached. Since it isn't easy to predict if the content will be cached, for important content pinning is recommended."))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[4165],{3905:function(e,t,A){A.d(t,{Zo:function(){return c},kt:function(){return m}});var n=A(67294);function r(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function o(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,n)}return A}function a(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?o(Object(A),!0).forEach((function(t){r(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):o(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function i(e,t){if(null==e)return{};var A,n,r=function(e,t){if(null==e)return{};var A,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)A=o[n],t.indexOf(A)>=0||(r[A]=e[A]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)A=o[n],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(r[A]=e[A])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),A=t;return e&&(A="function"==typeof e?e(t):a(a({},t),e)),A},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var A=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(A),d=r,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||o;return A?n.createElement(m,a(a({ref:t},c),{},{components:A})):n.createElement(m,a({ref:t},c))}));function m(e,t){var A=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=A.length,a=new Array(o);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,a[1]=i;for(var l=2;l<o;l++)a[l]=A[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,A)}d.displayName="MDXCreateElement"},25584:function(e,t,A){A.r(t),A.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=A(87462),r=A(63366),o=(A(67294),A(3905)),a=["components"],i={title:"Host Your Website on Swarm",id:"host-your-website"},s=void 0,l={unversionedId:"develop/access-the-swarm/host-your-website",id:"develop/access-the-swarm/host-your-website",title:"Host Your Website on Swarm",description:"Comfortable with nodeJS and JavaScript? Check out swarm-cli, a command line tool you can use to easily interact with your Bee node!",source:"@site/docs/develop/access-the-swarm/host-your-website.md",sourceDirName:"develop/access-the-swarm",slug:"/develop/access-the-swarm/host-your-website",permalink:"/docs/develop/access-the-swarm/host-your-website",draft:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/develop/access-the-swarm/host-your-website.md",tags:[],version:"current",frontMatter:{title:"Host Your Website on Swarm",id:"host-your-website"},sidebar:"develop",previous:{title:"Store with Encryption",permalink:"/docs/develop/access-the-swarm/store-with-encryption"},next:{title:"Track Upload Status",permalink:"/docs/develop/access-the-swarm/syncing"}},c={},p=[{value:"Enable ENS on Your Node",id:"enable-ens-on-your-node",level:3},{value:"Link an ENS domain to a website.",id:"link-an-ens-domain-to-a-website",level:3}],u={toc:p},d="wrapper";function m(e){var t=e.components,i=(0,r.Z)(e,a);return(0,o.kt)(d,(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Comfortable with nodeJS and JavaScript? Check out ",(0,o.kt)("a",{parentName:"p",href:"/docs/bee/working-with-bee/bee-tools"},"swarm-cli"),", a command line tool you can use to easily interact with your Bee node!")),(0,o.kt)("p",null,"Bee treats ENS as a first class citizen, wherever you can use a Swarm reference, you can also use an ENS domain where the ",(0,o.kt)("inlineCode",{parentName:"p"},"content")," ENS Resolver record is set to be a ",(0,o.kt)("inlineCode",{parentName:"p"},"bzz://")," reference."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You may substitute ENS names for Swarm references in any of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/"},"API methods")," where you would normally use a Swarm reference.")),(0,o.kt)("h3",{id:"enable-ens-on-your-node"},"Enable ENS on Your Node"),(0,o.kt)("p",null,"In order to resolve ENS names using your API endpoints, you must specify a valid ENS resolver endpoint when starting your Bee node. We recommend that users run their own Geth node, which can be trusted absolutely, however service providers such as ",(0,o.kt)("a",{parentName:"p",href:"https://cloudflare-eth.com"},"https://cloudflare-eth.com")," or ",(0,o.kt)("a",{parentName:"p",href:"https://infura.io"},"Infura")," may suffice. Public gateways such as ",(0,o.kt)("a",{parentName:"p",href:"https://gateway.ethswarm.org"},"gateway.ethswarm.org")," will also usually provide ENS resolution."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'bee start --resolver-options "https://cloudflare-eth.com"\n')),(0,o.kt)("p",null,"If specifying using your ",(0,o.kt)("inlineCode",{parentName:"p"},"bee.yaml")," configuration file, the syntax is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'resolver-options: [ "https://cloudflare-eth.com" ]\n')),(0,o.kt)("p",null,"Once you have restarted your node, you should be able to see the Swarm homepage at:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://localhost:1633/bzz/swarm.eth/"},"http://localhost:1633/bzz/swarm.eth/")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"resolver-options")," flag to point the Bee resolver to any ENS compatible smart-contract on any EVM compatible chain")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Make sure you trust the gateway you are interacting with! To ensure that you are retrieving the correct content, run your own ENS resolver and Bee node.")),(0,o.kt)("h3",{id:"link-an-ens-domain-to-a-website"},"Link an ENS domain to a website."),(0,o.kt)("p",null,"First we will need to upload the website assets to Swarm in order to\nget its Swarm reference hash, see\n",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/access-the-swarm/upload-a-directory"},"uploading a directory"),"\nfor more information."),(0,o.kt)("p",null,"This time we will also include the ",(0,o.kt)("inlineCode",{parentName:"p"},"Swarm-Index-Document")," header set to the ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html"),". This will cause Bee to serve each directories ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," file as default when browsing to the directory root ",(0,o.kt)("inlineCode",{parentName:"p"},"/")," url. We will also provide a custom error page, using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Swarm-Error-Document")," header."),(0,o.kt)("p",null,"In the case that your website is a single page app, where you would like to direct to the JavaScript history API powered router, you may provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," page for both settings."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl \\\n    -X POST \\\n    -H "Content-Type: application/x-tar" \\\n    -H "Swarm-Index-Document: index.html" \\\n    -H "Swarm-Error-Document: index.html" \\\n    --data-binary @my_website.tar http://localhost:1633/dirs\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "reference": "b25c89a401d9f26811680476619a1eb4a4e189e614bc6161cbfd8b343214917b"\n}\n')),(0,o.kt)("p",null,"Next, we add a ",(0,o.kt)("inlineCode",{parentName:"p"},"Content")," record to your ENS domain's resolver contract."),(0,o.kt)("p",null,"We recommend the excellent ",(0,o.kt)("a",{parentName:"p",href:"https://app.ens.domains/"},"ENS Domains Dapp")," used\nwith the ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," browser extension for registering and\nadministrating your ENS domain."),(0,o.kt)("p",null,"Once you have registered your name, and have connected MetaMask with the\nrelevant Ethereum account, you must first set the resolver to use the public ENS\nif you have not already done so."),(0,o.kt)("p",null,"First, navigate to 'My Names', and select the name you would like to link your Swarm content to."),(0,o.kt)("p",null,"Press 'Set' next to your resolver record."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt text",src:A(22790).Z,title:"Press set resolver.",width:"959",height:"704"})),(0,o.kt)("p",null,"Select 'Use Public Resolver'."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt text",src:A(21091).Z,title:"Use Public Resolver.",width:"959",height:"724"})),(0,o.kt)("p",null,"Select '+' to add a record."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt text",src:A(37917).Z,title:"Press add a record.",width:"962",height:"729"})),(0,o.kt)("p",null,"Choose the 'Content' record type from the drop down menu."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt text",src:A(43868).Z,title:"Choose the content record type from the drop down menu.",width:"961",height:"783"})),(0,o.kt)("p",null,"Add the Swarm reference you created earlier and press 'Save'."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt text",src:A(64163).Z,title:"Add the Swarm reference you created earlier and press 'Save'.",width:"959",height:"779"})),(0,o.kt)("p",null,"Verify the Content Record has been created!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt text",src:A(76485).Z,title:"Verify the Content Record has been created.",width:"958",height:"789"})),(0,o.kt)("p",null,"Done! \ud83d\udc4f"),(0,o.kt)("p",null,"Now you will be able to see your website hosted using the ENS name instead of the Swarm Reference!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"alt text",src:A(17046).Z,title:"View your website using the ENS name.",width:"787",height:"599"})))}m.isMDXComponent=!0},22790:function(e,t,A){t.Z=A.p+"assets/images/ens-1-ddd685c7bcf99590bb76ac916b243801.png"},21091:function(e,t,A){t.Z=A.p+"assets/images/ens-2-f1f1434b589951b517cc881e56a6523e.png"},37917:function(e,t,A){t.Z=A.p+"assets/images/ens-3-8e403ae2eea1dfc15079f8cafe81de75.png"},43868:function(e,t,A){t.Z=A.p+"assets/images/ens-4-eb1ae798769a9cb0a2f32feb5cf4d2e1.png"},64163:function(e,t,A){t.Z=A.p+"assets/images/ens-5-fdad27519b64c237cad95f055fc1ca9b.png"},76485:function(e,t,A){t.Z=A.p+"assets/images/ens-6-a9f1b5b8192e598d8edf54d32077d0d3.png"},17046:function(e,t){t.Z="data:image/png;base64,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"}}]);
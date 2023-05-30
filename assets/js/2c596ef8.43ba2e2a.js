"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[6279],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3828:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),i=["components"],s={title:"Upload a Directory",id:"upload-a-directory"},l=void 0,c={unversionedId:"develop/access-the-swarm/upload-a-directory",id:"develop/access-the-swarm/upload-a-directory",title:"Upload a Directory",description:"It is possible to use Bee to upload directories of files all at once.",source:"@site/docs/develop/access-the-swarm/upload-a-directory.md",sourceDirName:"develop/access-the-swarm",slug:"/develop/access-the-swarm/upload-a-directory",permalink:"/docs/develop/access-the-swarm/upload-a-directory",draft:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/develop/access-the-swarm/upload-a-directory.md",tags:[],version:"current",frontMatter:{title:"Upload a Directory",id:"upload-a-directory"},sidebar:"develop",previous:{title:"Upload and Download Files",permalink:"/docs/develop/access-the-swarm/upload-and-download"},next:{title:"Direct upload",permalink:"/docs/develop/access-the-swarm/direct-upload"}},p={},d=[{value:"Upload the Directory Containing Your Website",id:"upload-the-directory-containing-your-website",level:2}],u={toc:d},m="wrapper";function h(e){var t=e.components,a=(0,n.Z)(e,i);return(0,o.kt)(m,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It is possible to use Bee to upload directories of files all at once."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Comfortable with nodeJS and JavaScript? Check out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/swarm-cli"},"swarm-cli"),", a command line tool you can use to easily interact with your Bee node!")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If an uploaded directory contains an ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," file, when you navigate to the directory in a web browser it will automatically be served to users from our ",(0,o.kt)("a",{parentName:"p",href:"https://gateway.ethswarm.org"},"Swarm gateways")," as if it were a website hosted by a normal web server. Use this feature to host your unstoppable website on Swarm!")),(0,o.kt)("p",null,"This feature makes use of the ",(0,o.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/tar/"},"tar")," command line utility to package the directory into a single file that can then be uploaded to the Bee API for processing and distributed into the swarm for later retrieval."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"GZIP compression is not supported in the current version of Bee, so make sure not to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"-z")," flag when using the ",(0,o.kt)("inlineCode",{parentName:"p"},"tar")," command!")),(0,o.kt)("h2",{id:"upload-the-directory-containing-your-website"},"Upload the Directory Containing Your Website"),(0,o.kt)("p",null,"First, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"tar")," command line utility to create an archive containing all the files of your directory. If uploading a website, we must take care to ensure that the ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," file is at the root of the directory tree."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tree my_website\n>\nmy_website\n\u251c\u2500\u2500 assets\n\u2502\xa0\xa0 \u2514\u2500\u2500 style.css\n\u251c\u2500\u2500 index.html\n\u2514\u2500\u2500 error.html\n")),(0,o.kt)("p",null,"Use the following command to ensure that the ",(0,o.kt)("inlineCode",{parentName:"p"},"tar")," package maintains the correct directory structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd my_website\ntar -cf ../my_website.tar .\ncd ..\n")),(0,o.kt)("p",null,"Next, simply POST the ",(0,o.kt)("inlineCode",{parentName:"p"},"tar")," file as binary data to Bee's ",(0,o.kt)("inlineCode",{parentName:"p"},"dir")," endpoint, taking care to include the header ",(0,o.kt)("inlineCode",{parentName:"p"},"Content Type: application/x-tar"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In order to upload your data to swarm, you must agree to burn some of your xBZZ to signify to storer and fowarder nodes that the content is important. Before you progress to the next step, you must buy stamps! See this guide on how to ",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/access-the-swarm/keep-your-data-alive"},"purchase an appropriate batch of stamps"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl \\\n    -X POST \\\n    -H "Content-Type: application/x-tar" \\\n    -H "Swarm-Index-Document: index.html" \\\n    -H "Swarm-Error-Document: error.html" \\\n    -H "Swarm-Collection: true" \\\n    -H "Swarm-Postage-Batch-Id: 78a26be9b42317fe6f0cbea3e47cbd0cf34f533db4e9c91cf92be40eb2968264" \\\n    --data-binary @my_website.tar http://localhost:1633/bzz\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For instances where a single page app has a JavaScript router that handles url queries itself, simply pass ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," as the error document. Bee will pass over control to the JavaScript served by the ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," file in the circumstance that a path does not yield a file from the manifest.")),(0,o.kt)("p",null,"When the upload is successful, Bee will return a JSON document containing the Swarm Reference."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "reference": "b25c89a401d9f26811680476619a1eb4a4e189e614bc6161cbfd8b343214917b"\n}\n')),(0,o.kt)("p",null,"Now, simply navigate your browser to view the reference using the ",(0,o.kt)("inlineCode",{parentName:"p"},"bzz")," endpoint and your website will be served!"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://localhost:1633/bzz/b25c89a401d9f26811680476619a1eb4a4e189e614bc6161cbfd8b343214917b/"},"http://localhost:1633/bzz/b25c89a...214917b/")),(0,o.kt)("p",null,"Other files are served at their relative paths, e.g:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://localhost:1633/bzz/b25c89a401d9f26811680476619a1eb4a4e189e614bc6161cbfd8b343214917b/assets/style.css"},"http://localhost:1633/bzz/b25c89a...214917b/assets/style.css")),(0,o.kt)("p",null,"Once your data has been ",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/access-the-swarm/syncing"},"fully processed into the network"),", you will then be able to retrieve it from any Bee node."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://gateway.ethswarm.org/bzz/b25c89a401d9f26811680476619a1eb4a4e189e614bc6161cbfd8b343214917b/"},"https://gateway.ethswarm.org/bzz/b25c89a...214917b/index.html")),(0,o.kt)("p",null,"If you are not able to download your file from a different Bee node, you may be experiencing connection issues, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/bee/installation/connectivity"},"troubleshooting connectivity")," for assistance."))}h.isMDXComponent=!0}}]);
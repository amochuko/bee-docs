"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[4875],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8750:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],s={title:"Starting a Test Network",id:"starting-a-test-network"},l=void 0,d={unversionedId:"develop/bee-developers/starting-a-test-network",id:"develop/bee-developers/starting-a-test-network",title:"Starting a Test Network",description:"A test network can be used to test your applications in an isolated environment before you deploy to Swarm mainnet. It can be started by overriding the default configuration values of your Swarm node. Throughout this tutorial, we will make use of configuration files to configure the nodes but of course you can also do the same using flags or environment variables (see Start your node).",source:"@site/docs/develop/bee-developers/starting-a-test-network.md",sourceDirName:"develop/bee-developers",slug:"/develop/bee-developers/starting-a-test-network",permalink:"/docs/develop/bee-developers/starting-a-test-network",draft:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/develop/bee-developers/starting-a-test-network.md",tags:[],version:"current",frontMatter:{title:"Starting a Test Network",id:"starting-a-test-network"}},p={},u=[{value:"Start a network on your own computer",id:"start-a-network-on-your-own-computer",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Starting Your Nodes",id:"starting-your-nodes",level:3},{value:"Making a network",id:"making-a-network",level:3}],c={toc:u},m="wrapper";function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)(m,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A test network can be used to test your applications in an isolated environment before you deploy to Swarm mainnet. It can be started by overriding the default configuration values of your Swarm node. Throughout this tutorial, we will make use of configuration files to configure the nodes but of course you can also do the same using flags or environment variables (see ",(0,r.kt)("a",{parentName:"p",href:"/docs/bee/working-with-bee/configuration"},"Start your node"),")."),(0,r.kt)("h2",{id:"start-a-network-on-your-own-computer"},"Start a network on your own computer"),(0,r.kt)("h3",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Starting a network is easiest achieved by making use of configuration files. We need at least two nodes to start a network. Hence, below two configuration files are provided. Save them respectively as ",(0,r.kt)("inlineCode",{parentName:"p"},"config_1.yaml")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"config_2.yaml"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"config_1.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'network-id: 7357\napi-addr: :1633\np2p-addr: :1634\ndebug-api-addr: 127.0.0.1:1635\ndebug-api-enable: true\nbootnode: ""\ndata-dir: /tmp/bee/node1\npassword: some pass phze\nswap-enable: false\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"config_2.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'network-id: 7357\napi-addr: :1733\np2p-addr: :1734\ndebug-api-addr: 127.0.0.1:1735\ndebug-api-enable: true\ndata-dir: /tmp/bee/node2\nbootnode: ""\npassword: some pass phze\nwelcome-message: "Bzz Bzz Bzz"\nswap-enable: false\n')),(0,r.kt)("p",null,"Note that for each node, we provide a different ",(0,r.kt)("inlineCode",{parentName:"p"},"api-addr"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"debug-api-addr"),". If we had not specified different addresses here, we\nwould get an ",(0,r.kt)("inlineCode",{parentName:"p"},"address already in use")," error, as no two applications\ncan listen to the same port. We also specify a different\n",(0,r.kt)("inlineCode",{parentName:"p"},"p2p-addr"),". If we had not, our nodes would not be able to communicate\nwith each other. We also specify a separate ",(0,r.kt)("inlineCode",{parentName:"p"},"data-dir")," for each node,\nas each node must have its own separate key and chunk data store."),(0,r.kt)("p",null,"We also provide a network-id, so that our network remains separate\nfrom the Swarm mainnet, which has network-id 1. Nodes will not connect\nto peers which have a different network id. We also set our bootnode\nto be the empty string ",(0,r.kt)("inlineCode",{parentName:"p"},'""'),". A bootnode is responsible for\nbootstrapping the network so that a new node can find its first few\npeers before it begins its own journey to find friends in the\nSwarm. In Swarm any node can be used as a bootnode. Later, we will\nmanually join our nodes together so in this case a bootnode isn't\nrequired."),(0,r.kt)("p",null,"Finally, note the ",(0,r.kt)("inlineCode",{parentName:"p"},"welcome-message")," in the first nodes configuration file. This is a friendly feature allowing you to send a message to peers that connect to you!"),(0,r.kt)("h3",{id:"starting-your-nodes"},"Starting Your Nodes"),(0,r.kt)("p",null,"Now we have created our configuration files, let's start our nodes by running ",(0,r.kt)("inlineCode",{parentName:"p"},"bee start --config config_1.yaml"),", then in another Terminal session, run ",(0,r.kt)("inlineCode",{parentName:"p"},"bee start --config-file config_2.yaml"),"."),(0,r.kt)("p",null,"We can now inspect the state of our network by sending HTTP requests to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/"},"Debug API"),".."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s http://localhost:1635/topology | jq .connected\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"0\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s http://localhost:1735/topology | jq .connected\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"0\n")),(0,r.kt)("p",null,"No connections yet? Right! Let's remedy that!"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Here we are using the ",(0,r.kt)("inlineCode",{parentName:"p"},"jq")," command line utility to count the amount of objects in the ",(0,r.kt)("inlineCode",{parentName:"p"},"peers")," array in the JSON response we have received from our Debug API, learn more about how to install and use ",(0,r.kt)("inlineCode",{parentName:"p"},"jq")," ",(0,r.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/"},"here"),".")),(0,r.kt)("h3",{id:"making-a-network"},"Making a network"),(0,r.kt)("p",null,"In order to create a network from our two isolated nodes, we must first instruct our nodes to connect to each other. This step is not explicitly needed if you connect to the main Swarm network, as the default bootnodes in the Swarm network will automatically suggest peers."),(0,r.kt)("p",null,"First, we will need to find out the network address of the first node. To do this, we send a HTTP request to the ",(0,r.kt)("inlineCode",{parentName:"p"},"addresses")," endpoint of the Debug API."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl localhost:1635/addresses | jq\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "overlay": "f57a65207f5766084d3ebb6bea5e2e4a712504e54d86a00961136b514f07cdac",\n  "underlay": [\n    "/ip4/127.0.0.1/tcp/1634/p2p/16Uiu2HAmUdCRWmyQCEahHthy7G4VsbBQ6dY9Hnk79337NfadKJEs",\n    "/ip4/192.168.0.10/tcp/1634/p2p/16Uiu2HAmUdCRWmyQCEahHthy7G4VsbBQ6dY9Hnk79337NfadKJEs",\n    "/ip6/::1/tcp/1634/p2p/16Uiu2HAmUdCRWmyQCEahHthy7G4VsbBQ6dY9Hnk79337NfadKJEs",\n    "/ip4/xx.xx.xx.xx/tcp/40317/p2p/16Uiu2HAmUdCRWmyQCEahHthy7G4VsbBQ6dY9Hnk79337NfadKJEs"\n  ]\n}\n')),(0,r.kt)("p",null,"Here, we get firstly the ",(0,r.kt)("strong",{parentName:"p"},"overlay address")," - this is the permanent address Swarm uses as your anonymous identity in the network and secondly, a list of all the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.libp2p.io/reference/glossary/#multiaddr"},"multiaddresses"),", which are physical network addresses at which you node can be found by peers."),(0,r.kt)("p",null,"Note the addresses starting with an ",(0,r.kt)("inlineCode",{parentName:"p"},"/ip4"),", followed by ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),", which is the ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," internal network in your computer. Now we can use this full address to be the bootnode of our second node so that when it starts up, it goes to this address and both nodes become peers of each other. Let's add this into our config_2.yaml file."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"config_2.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'network-id: 7357\napi-addr: :1733\np2p-addr: :1734\ndebug-api-addr: 127.0.0.1:1735\ndebug-api-enable: true\ndata-dir: /tmp/bee/node2\nbootnode: "/ip4/127.0.0.1/tcp/1634/p2p/16Uiu2HAmUdCRWmyQCEahHthy7G4VsbBQ6dY9Hnk79337NfadKJEs"\npassword: some pass phze\nwelcome-message: "Bzz Bzz Bzz"\nswap-enable: false\n')),(0,r.kt)("p",null,"Now, we can shut our second node and reboot with the new configuration."),(0,r.kt)("p",null,"Look at the the output for your first node, you should see our connection message!"),(0,r.kt)("p",null,"Let's also verify that we can see both nodes in using each other's Debug API's."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s http://localhost:1635/peers | jq\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s http://localhost:1635/peers | jq\n")),(0,r.kt)("p",null,"Congratulations! You have made your own tiny two bee Swarm! \ud83d\udc1d \ud83d\udc1d"))}f.isMDXComponent=!0}}]);
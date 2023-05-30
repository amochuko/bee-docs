"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[2352],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(6010),l={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:a},t)}},4866:function(e,t,a){a.d(t,{Z:function(){return w}});var n=a(7462),r=a(7294),l=a(6010),i=a(2466),o=a(6550),s=a(1980),u=a(7392),c=a(12);function p(e){return function(e){var t,a;return null!=(t=null==(a=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:p(a);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,l=(0,o.k6)(),i=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(l.location.search);t.set(i,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[i,l])]}function b(e){var t,a,n,l,i=e.defaultValue,o=e.queryString,s=void 0!==o&&o,u=e.groupId,p=d(e),b=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),h=b[0],v=b[1],g=f({queryString:s,groupId:u}),k=g[0],y=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),a=(0,c.Nk)(t),n=a[0],l=a[1],[n,(0,r.useCallback)((function(e){t&&l.set(e)}),[t,l])]),N=w[0],C=w[1],I=function(){var e=null!=k?k:N;return m({value:e,tabValues:p})?e:null}();return(0,r.useLayoutEffect)((function(){I&&v(I)}),[I]),{selectedValue:h,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),C(e)}),[y,C,p]),tabValues:p}}var h=a(2389),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){var t=e.className,a=e.block,o=e.selectedValue,s=e.selectValue,u=e.tabValues,c=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==o&&(p(t),s(n))},m=function(e){var t,a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var n,r=c.indexOf(e.currentTarget)+1;a=null!=(n=c[r])?n:c[0];break;case"ArrowLeft":var l,i=c.indexOf(e.currentTarget)-1;a=null!=(l=c[i])?l:c[c.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},u.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return c.push(e)},onKeyDown:m,onClick:d},i,{className:(0,l.Z)("tabs__item",v.tabItem,null==i?void 0:i.className,{"tabs__item--active":o===t})}),null!=a?a:t)})))}function k(e){var t=e.lazy,a=e.children,n=e.selectedValue,l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var i=l.find((function(e){return e.props.value===n}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function y(e){var t=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},r.createElement(g,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function w(e){var t=(0,h.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},9732:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=a(4866),o=a(5162),s=["components"],u={title:"Bee Clef",id:"bee-clef"},c=void 0,p={unversionedId:"bee/installation/bee-clef",id:"bee/installation/bee-clef",title:"Bee Clef",description:"Bee Clef is deprecated and is no longer under active development. It is not required for running a Bee node.",source:"@site/docs/bee/installation/bee-clef.md",sourceDirName:"bee/installation",slug:"/bee/installation/bee-clef",permalink:"/docs/bee/installation/bee-clef",draft:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/bee/installation/bee-clef.md",tags:[],version:"current",frontMatter:{title:"Bee Clef",id:"bee-clef"},sidebar:"bee",previous:{title:"Bee Using Docker",permalink:"/docs/bee/installation/docker"},next:{title:"Connectivity",permalink:"/docs/bee/installation/connectivity"}},d={},m=[{value:"Packages",id:"packages",level:2},{value:"AMD64",id:"amd64",level:4},{value:"ARM (Raspberry Pi)",id:"arm-raspberry-pi",level:4},{value:"ARMv7",id:"armv7",level:5},{value:"ARM64",id:"arm64",level:5},{value:"AMD64",id:"amd64-1",level:4},{value:"ARM (Raspberry Pi)",id:"arm-raspberry-pi-1",level:4},{value:"ARMv7",id:"armv7-1",level:5},{value:"ARM64",id:"arm64-1",level:5},{value:"Configuring Bee Clef",id:"configuring-bee-clef",level:3},{value:"Interact With Bee Clef",id:"interact-with-bee-clef",level:3},{value:"Data Locations",id:"data-locations",level:2},{value:"Manual Installation",id:"manual-installation",level:2}],f={toc:m},b="wrapper";function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,l.kt)(b,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Bee Clef is deprecated and is no longer under active development. It is not required for running a Bee node.")),(0,l.kt)("p",null,"Bee makes use of Go Ethereum's external signer, ",(0,l.kt)("a",{parentName:"p",href:"https://geth.ethereum.org/docs/tools/clef/introduction"},"Clef"),"."),(0,l.kt)("p",null,"Because Bee must sign a lot of transactions automatically and quickly, a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-clef"},"Bee specific version of Clef, Bee Clef")," has been packaged which includes all the relevant configuration needed to make Clef work with Bee."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Bee Clef will create a new Ethereum key pair for you during installation. Make sure you keep a ",(0,l.kt)("a",{parentName:"p",href:"/docs/bee/working-with-bee/backups"},"backup")," of your key pair somewhere safe and secure!")),(0,l.kt)("h2",{id:"packages"},"Packages"),(0,l.kt)("p",null,"Bee Clef can be installed automatically using your system's package manager."),(0,l.kt)(i.Z,{defaultValue:"debian",values:[{label:"Ubuntu / Debian / Raspbian",value:"debian"},{label:"CentOS",value:"centos"},{label:"MacOS",value:"macos"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"debian",mdxType:"TabItem"},(0,l.kt)("h4",{id:"amd64"},"AMD64"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/ethersphere/bee-clef/releases/download/v0.12.0/bee-clef_0.12.0_amd64.deb\nsudo dpkg -i bee-clef_0.12.0_amd64.deb\n")),(0,l.kt)("h4",{id:"arm-raspberry-pi"},"ARM (Raspberry Pi)"),(0,l.kt)("h5",{id:"armv7"},"ARMv7"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/ethersphere/bee-clef/releases/download/v0.12.0/bee-clef_0.12.0_armv7.deb\nsudo dpkg -i bee-clef_0.12.0_armv7.deb\n")),(0,l.kt)("h5",{id:"arm64"},"ARM64"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/ethersphere/bee-clef/releases/download/v0.12.0/bee-clef_0.12.0_arm64.deb\nsudo dpkg -i bee-clef_0.12.0_arm64.deb\n"))),(0,l.kt)(o.Z,{value:"centos",mdxType:"TabItem"},(0,l.kt)("h4",{id:"amd64-1"},"AMD64"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/ethersphere/bee-clef/releases/download/v0.12.0/bee-clef_0.12.0_amd64.rpm\nsudo rpm -i bee-clef_0.12.0_amd64.rpm\n")),(0,l.kt)("h4",{id:"arm-raspberry-pi-1"},"ARM (Raspberry Pi)"),(0,l.kt)("h5",{id:"armv7-1"},"ARMv7"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/ethersphere/bee-clef/releases/download/v0.12.0/bee-clef_0.12.0_armv7.rpm\nsudo rpm -i bee-clef_0.12.0_armv7.rpm\n")),(0,l.kt)("h5",{id:"arm64-1"},"ARM64"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/ethersphere/bee-clef/releases/download/v0.12.0/bee-clef_0.12.0_arm64.rpm\nsudo rpm -i bee-clef_0.12.0_arm64.rpm\n"))),(0,l.kt)(o.Z,{value:"macos",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew tap ethersphere/tap\nbrew install swarm-clef\n")),(0,l.kt)("p",null,"To run Bee Clef as a service now and on startup, run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"brew services start swarm-clef\n")))),(0,l.kt)("h3",{id:"configuring-bee-clef"},"Configuring Bee Clef"),(0,l.kt)("p",null,"Configuration files are stored in ",(0,l.kt)("inlineCode",{parentName:"p"},"/etc/default/bee-clef/")," on Linux and ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/etc/swarm-clef/default")," on MacOS."),(0,l.kt)("p",null,"To install clef for Swarm mainnet, change ",(0,l.kt)("inlineCode",{parentName:"p"},"BEE_CLEF_CHAIN_ID")," to be ",(0,l.kt)("inlineCode",{parentName:"p"},"100")," in order to interact with the xDAI network. For testnet, use chain id ",(0,l.kt)("inlineCode",{parentName:"p"},"5"),"."),(0,l.kt)("p",null,"For a normal installation using a package manager, this should be the only configuration changes necessary to start using Bee Clef."),(0,l.kt)("h3",{id:"interact-with-bee-clef"},"Interact With Bee Clef"),(0,l.kt)("p",null,"Once Bee Clef has been installed, it will begin running as a service."),(0,l.kt)("p",null,"To check Bee Clef is running ok, we may use ",(0,l.kt)("inlineCode",{parentName:"p"},"systemctl")," (on Linux) or ",(0,l.kt)("inlineCode",{parentName:"p"},"launchctl")," (on MacOS) to query the status of the ",(0,l.kt)("inlineCode",{parentName:"p"},"bee-clef")," service."),(0,l.kt)(i.Z,{defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"MacOS",value:"macos"}],mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status bee-clef\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"\u25cf bee-clef.service - Bee Clef\n     Loaded: loaded (/lib/systemd/system/bee-clef.service; enabled; vendor preset: enabled)\n     Active: active (running) since Fri 2020-11-20 23:45:16 GMT; 1min 29s ago\n")),(0,l.kt)("p",null,"And if you want to get Bee Clef's logs, you can use:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl -f -u bee-clef.service\n"))),(0,l.kt)(o.Z,{value:"macos",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"launchctl list | grep swarm-clef\n")))),(0,l.kt)("p",null,"When Bee Clef first starts, you should see something very similar to the following:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-log"},'Feb 21 19:52:43 comp-name systemd[1]: Started Bee Clef.\nFeb 21 19:52:43 comp-name bee-clef-service[494678]: WARNING!\nFeb 21 19:52:43 comp-name bee-clef-service[494678]: Clef is an account management tool. It may, like any software, contain bugs.\nFeb 21 19:52:43 comp-name bee-clef-service[494678]: Please take care to\nFeb 21 19:52:43 comp-name bee-clef-service[494678]: - backup your keystore files,\nFeb 21 19:52:43 comp-name bee-clef-service[494678]: - verify that the keystore(s) can be opened with your password.\nFeb 21 19:52:43 comp-name bee-clef-service[494678]: Clef is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\nFeb 21 19:52:43 comp-name bee-clef-service[494678]: without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR\nFeb 21 19:52:43 comp-name bee-clef-service[494678]: PURPOSE. See the GNU General Public License for more details.\nFeb 21 19:52:43 comp-name bee-clef-service[494678]: INFO [02-21|19:52:43.862] Using stdin/stdout as UI-channel\nFeb 21 19:52:44 comp-name bee-clef-service[494678]: INFO [02-21|19:52:44.036] Loaded 4byte database                    embeds=146841 locals=3 local=/etc/bee-clef/4byte.json\nFeb 21 19:52:44 comp-name bee-clef-service[494678]: {"jsonrpc":"2.0","id":1,"method":"ui_onInputRequired","params":[{"title":"Master Password","prompt":"Please enter the password to decrypt the master seed","isPassword":true}]}\nFeb 21 19:54:25 comp-name bee-clef-service[494678]: INFO [02-21|19:54:25.048] Rule engine configured                   file=/etc/bee-clef/rules.js\nFeb 21 19:54:25 comp-name bee-clef-service[494678]: INFO [02-21|19:54:25.048] Starting signer                          chainid=5 keystore=/var/lib/bee-clef/keystore light-kdf=false advanced=false\nFeb 21 19:54:25 comp-name bee-clef-service[494678]: INFO [02-21|19:54:25.049] IPC endpoint opened                      url=/var/lib/bee-clef/clef.ipc\nFeb 21 19:54:25 comp-name bee-clef-service[494678]: {"jsonrpc":"2.0","method":"ui_onSignerStartup","params":[{"info":{"extapi_http":"n/a","extapi_ipc":"/var/lib/bee-clef/clef.ipc","extapi_version":"6.1.0","intapi_version":"7.0.1"}}]}\n')),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"This line can be safely ignored, there is no action required: ",(0,l.kt)("inlineCode",{parentName:"p"},'{"jsonrpc":"2.0","id":1,"method":"ui_onInputRequired","params":[{"title":"Master Password","prompt":"Please enter the password to decrypt the master seed","isPassword":true}]}'))),(0,l.kt)("p",null,"As soon as ",(0,l.kt)("inlineCode",{parentName:"p"},"bee")," starts interacting with ",(0,l.kt)("inlineCode",{parentName:"p"},"bee-clef")," you should start to see log messages populate, for a regularly active and connected node they will appear every few seconds:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"Feb 24 22:29:15 comp-name bee-clef-service[1118]: INFO [02-24|22:29:15.118] Op approved\nFeb 24 22:30:17 comp-name bee-clef-service[1118]: INFO [02-24|22:30:17.371] Op approved\nFeb 24 22:30:19 comp-name bee-clef-service[1118]: INFO [02-24|22:30:19.344] Op approved\n...\n")),(0,l.kt)("h2",{id:"data-locations"},"Data Locations"),(0,l.kt)("p",null,"Key material and other data is stored in ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/lib/bee-clef/")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Bee can communicate with Bee Clef in a variety of ways. The default way, if installed via the packages, will use an Inter-process communication (IPC) file. This is a special file that ",(0,l.kt)("inlineCode",{parentName:"p"},"bee-clef")," creates on startup that Bee will use to send requests back-and-forth. When the ",(0,l.kt)("inlineCode",{parentName:"p"},"bee-clef")," service is running you'll notice that a ",(0,l.kt)("inlineCode",{parentName:"p"},"/var/lib/bee-clef/clef.ipc")," file is created.")),(0,l.kt)("h2",{id:"manual-installation"},"Manual Installation"),(0,l.kt)("p",null,"Try the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-clef/releases"},"Github releases page")," for binaries for your platform. Otherwise to install Clef manually first retrieve the relevant Clef binary from Ethereum's ",(0,l.kt)("a",{parentName:"p",href:"https://geth.ethereum.org/downloads/"},"Geth & Tools")," download page, or build directly from the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ethereum/go-ethereum/wiki/Building-Ethereum"},"source"),"."),(0,l.kt)("p",null,"Because Bee needs Clef to sign many transactions automatically, we must run Clef as a service with relaxed permissions and rules set. To ensure Clef only signs transactions from Bee, we must protect the ",(0,l.kt)("inlineCode",{parentName:"p"},"clef.ipc")," file by ",(0,l.kt)("strong",{parentName:"p"},"creating a Bee user and setting permissions so that it is only possible for this user to make use of the ipc socket.")),(0,l.kt)("p",null,"Additionally, Clef requires transaction signatures for the Bee's chequebook interaction."),(0,l.kt)("p",null,"A shell script automating the post-initialisation permission changing and including the Clef config, ",(0,l.kt)("inlineCode",{parentName:"p"},"clef-service"),", as well as the ",(0,l.kt)("inlineCode",{parentName:"p"},"4byte.json")," transaction signature file and ",(0,l.kt)("inlineCode",{parentName:"p"},"rules.js")," file can all be found in the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-clef/tree/master/packaging"},"bee-clef repository"),"."),(0,l.kt)("p",null,"Finally, once Clef is running, simply ",(0,l.kt)("a",{parentName:"p",href:"/docs/bee/working-with-bee/configuration"},"configure your Bee node")," to enable Clef using ",(0,l.kt)("inlineCode",{parentName:"p"},"--clef-signer-enable")," and point Bee to the correct ipc socket using ",(0,l.kt)("inlineCode",{parentName:"p"},"--clef-signer-endpoint"),"."))}h.isMDXComponent=!0}}]);
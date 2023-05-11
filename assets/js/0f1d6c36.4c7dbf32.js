"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[9521],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?o.createElement(m,i(i({ref:t},c),{},{components:n})):o.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8684:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"Staking",id:"staking"},l=void 0,u={unversionedId:"working-with-bee/staking",id:"working-with-bee/staking",title:"Staking",description:"In order to participate in the redistribution of xBZZ from uploaders to storers, storers must first deposit a non-refundable xBZZ stake with a smart contract. Then, they are going to be chosen for payout with a probability proportional to their stake in their neighbourhood, as long as they can log storing the part of the content that they are supposed to be storing according to protocol rules.",source:"@site/docs/working-with-bee/staking.md",sourceDirName:"working-with-bee",slug:"/working-with-bee/staking",permalink:"/docs/working-with-bee/staking",draft:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/working-with-bee/staking.md",tags:[],version:"current",frontMatter:{title:"Staking",id:"staking"},sidebar:"Balls",previous:{title:"Security",permalink:"/docs/working-with-bee/security"},next:{title:"Cashing Out",permalink:"/docs/working-with-bee/cashing-out"}},c={},d=[{value:"Stake your node with Bee",id:"stake-your-node-with-bee",level:2},{value:"Check redistribution status",id:"check-redistribution-status",level:2},{value:"Check node performance",id:"check-node-performance",level:2}],p={toc:d},h="wrapper";function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)(h,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In order to participate in the redistribution of xBZZ from uploaders to storers, storers must first deposit a non-refundable xBZZ stake with a smart contract. Then, they are going to be chosen for payout with a probability proportional to their stake in their neighbourhood, as long as they can log storing the part of the content that they are supposed to be storing according to protocol rules."),(0,a.kt)("p",null,"In order to participate in redistribution, storers need to do the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Join the network and download all the data that the protocol assigns to them. They can only participate if they are fully synchronised with the network."),(0,a.kt)("li",{parentName:"ul"},"Deposit a stake with the staking contract. There is a minimum staking requirement, presently 10 xBZZ. It can change in the future."),(0,a.kt)("li",{parentName:"ul"},"Stay online and fully synced, so that when a redistribution round comes, their node can check whether their neighbourhood (nodes that are assigned the same content to store) has been selected and if so, they can perform a certain calculation (a random sampling) on their content and submit the result to the redistribution contract. This happens in two phases (commit and reveal), so that the nodes cannot know the results of others\u2019 calculations when committing to their own."),(0,a.kt)("li",{parentName:"ul"},"Round length is estimated around 15 minutes (152 blocks to be precise), though it can be extended.")),(0,a.kt)("p",null,"Amongst the nodes that agree with the correct result, one is chosen \u2014 with a probability in proportion to their stake \u2014 as the winner. The winner must execute an on-chain transaction claiming their reward, which is the entire pot of storage rent paid since the previous round, or even more, if the previous pot has not been claimed at that time."),(0,a.kt)("h2",{id:"stake-your-node-with-bee"},"Stake your node with Bee"),(0,a.kt)("p",null,"Bee has builtin endpoints for depositing the stake. Currently the minimum staking requirement is 10 xBZZ, so make sure that there is enough tokens in the node's wallet and you must have some native token as well for paying the gas."),(0,a.kt)("p",null,"Then you can run the following command to stake 10 xBZZ. The amount is given in PLURs which is the smallest denomination of xBZZ and ",(0,a.kt)("inlineCode",{parentName:"p"},"1 xBZZ == 1e16 PLUR"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -XPOST localhost:1635/stake/100000000000000000\n")),(0,a.kt)("p",null,"If the command executed successfully it returns a transaction hash that you can use to verify on a block explorer."),(0,a.kt)("p",null,"It is possible to deposit more by repeatedly using the command above."),(0,a.kt)("p",null,"You can also check the amount staked with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl localhost:1635/stake\n")),(0,a.kt)("h2",{id:"check-redistribution-status"},"Check redistribution status"),(0,a.kt)("p",null,"Use the ",(0,a.kt)("a",{href:"/debug-api/#tag/RedistributionState",target:"_blank",rel:"noopener noreferrer"},"RedistributionState")," endpoint of the API to get more information about the redistribution status of the node."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -X GET http://localhost:1635/redistributionstate | jq\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{ \n  "minimumFunds": "18750000000000000",\n  "hasSufficientFunds": true,\n  "isFrozen": false,\n  "isFullySynced": true,\n  "phase": "commit",\n  "round": 176319,\n  "lastWonRound": 176024,\n  "lastPlayedRound": 176182,\n  "lastFrozenRound": 0,\n  "block": 26800488,\n  "reward": "10479124611072000",\n  "fees": "30166618102500000"\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"minimumFunds": <integer>')," - The minimum xDAI needed to play a single round of the redistribution game (the unit is 1e-18 xDAI)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"hasSufficientFunds": <bool>')," - Shows whether the node has enough xDAI balance to submit at least five storage incentives redistribution related transactions.  If ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," the node will not be permitted to participate in next round."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"isFrozen": <bool>')," - Shows node frozen status."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"isFullySynced": <bool>')," - Shows whether node's localstore has completed full historical syncing with all connected peers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"phase": <string>')," - Current phase of redistribution game."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"round": <integer>'),' - Current round of redistribution game. The round number is determined by dividing the current Gnosis Chain block height by the number of blocks in one round. One round takes 152 blocks, so using the "block" output from the example above we can confirm that the round number is 176319 (block 26800488 / 152 blocks = round 176319).   '),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"lastWonRound": <integer>')," - Number of round last won by this node."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"lastPlayedRound": <integer>')," - Number of the last round where node's neighborhood was selected to participate in redistribution game."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"lastFrozenRound": <integer>')," The number the round when node was last frozen. "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"block": <integer>')," - Gnosis block of the current redistribution game."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"reward": <string (BigInt)>')," - Record of total reward received in ",(0,a.kt)("a",{parentName:"li",href:"/docs/introduction/terminology#plur"},"PLUR"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"fees": <string (BigInt)>')," - Record of total spent in 1E-18 xDAI on all redistribution related transactions.")),(0,a.kt)("h2",{id:"check-node-performance"},"Check node performance"),(0,a.kt)("p",null,"One of the most common issues affecting staking is the ",(0,a.kt)("inlineCode",{parentName:"p"},"sampler")," process failing. The sampler is a resource intensive process which is run by nodes which are selected to take part in redistribution. The process may fail or time out if the node's hardware specifications aren't high enough. To check a node's performance the ",(0,a.kt)("inlineCode",{parentName:"p"},"/rchash/{depth}/{anchor}")," endpoint of the API may be used. "),(0,a.kt)("p",null,"Before proceeding, first check that the node is fully synced, is not frozen, and has sufficient funds to participate in staking. To check node sync status, call the ",(0,a.kt)("inlineCode",{parentName:"p"},"redistributionstate")," endpoint:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -X GET http://localhost:1635/redistributionstate | jq\n")),(0,a.kt)("p",null,"Response:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{ \n  "minimumFunds": "18750000000000000",\n  "hasSufficientFunds": true,\n  "isFrozen": false,\n  "isFullySynced": true,\n  "phase": "commit",\n  "round": 176319,\n  "lastWonRound": 176024,\n  "lastPlayedRound": 176182,\n  "lastFrozenRound": 0,\n  "block": 26800488,\n  "reward": "10479124611072000",\n  "fees": "30166618102500000"\n}\n')),(0,a.kt)("p",null,"Confirm that ",(0,a.kt)("inlineCode",{parentName:"p"},"hasSufficientFunds")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"isFullySynced")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," before moving to the next step. If ",(0,a.kt)("inlineCode",{parentName:"p"},"hasSufficientFunds")," if ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", make sure to add at least the amount of xDAI shown in ",(0,a.kt)("inlineCode",{parentName:"p"},"minimumFunds")," (unit of 1e-18 xDAI). If the node was recently installed and ",(0,a.kt)("inlineCode",{parentName:"p"},"isFullySynced")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", wait for the node to fully sync before continuing. After confirming the node's status, continue to the next step."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"{anchor}")," value can be set to any random string. To get the ",(0,a.kt)("inlineCode",{parentName:"p"},"{depth}")," value, first call the ",(0,a.kt)("inlineCode",{parentName:"p"},"topology")," debug API endpoint using ",(0,a.kt)("a",{parentName:"p",href:"https://stedolan.github.io/jq/manual/#Basicfilters"},"jq")," to filter for the ",(0,a.kt)("inlineCode",{parentName:"p"},"depth")," `value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo curl -sX GET http://localhost:1635/topology | jq '.depth'\n")),(0,a.kt)("p",null,"Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"8\n")),(0,a.kt)("p",null,"Call the endpoint using the value returned (8 in our example) like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo curl -X GET http://localhost:1633/rchash/8/randomstring | jq\n")),(0,a.kt)("p",null,"If the sampler runs successfully, you should see output like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current\n                                 Dload  Upload   Total   Spent    Left  Speed\n100   659  100   659    0     0      3      0  0:03:39  0:02:54  0:00:45   161\n{\n  "Sample": {\n    "Items": [\n      "000003dac2b2f75842e410474dfa4c1e6e0b9970d81b57b33564c5620667ba96",\n      "00000baace30916f7445dbcc44d9b55cb699925acfbe157e4498c63bde834f40",\n      "0000126f48fb1e99e471efc683565e4b245703c922b9956f89cbe09e1238e983",\n      "000012db04a281b7cc0e6436a49bdc5b06ff85396fcb327330ca307e409d2a04",\n      "000014f365b1a381dda85bbeabdd3040fb1395ca9e222e72a597f4cc76ecf6c2",\n      "00001869a9216b3da6814a877fdbc31f156fc2e983b52bc68ffc6d3f3cc79af0",\n      "0000198c0456230b555d5261091cf9206e75b4ad738495a60640b425ecdf408f",\n      "00001a523bd1b688472c6ea5a3c87c697db64d54744829372ac808de8ec1d427"\n    ],\n    "Hash": "7f7d93c6235855fedc34e32c6b67253e27910ca4e3b8f2d942efcd758a6d8829"\n  },\n  "Time": "2m54.087909745s"\n}\n')),(0,a.kt)("p",null,"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"Time")," value is higher than 6 minutes, then the hardware specifications for the node may need to be upgraded. "),(0,a.kt)("p",null,"If there is an evictions related error such as the one below, try running the call to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/rchash/{depth}/{anchor}")," endpoint again:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'error: "level"="error" "logger"="node/storageincentives" "msg"="make sample" "error"="sampler: failed creating sample: sampler stopped due to ongoing evictions"\n')),(0,a.kt)("p",null,"While evictions are a normal part of Bee's standard operation, the event of an eviction will interrupt the sampler process."),(0,a.kt)("p",null,"If you are still experiencing problems, you can find more help in the ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/kHRyMNpw7t"},"node-operators")," Discord channel (for your safety, do not accept advice from anyone sending a private message on Discord)."))}m.isMDXComponent=!0}}]);
(()=>{var e={};e.id=220,e.ids=[220],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},59958:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,originalPathname:()=>d,pages:()=>u,routeModule:()=>m,tree:()=>c}),r(36882),r(32029),r(35866);var a=r(23191),s=r(88716),i=r(37922),o=r.n(i),n=r(95231),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);r.d(t,l);let c=["",{children:["configuration",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,36882)),"/Users/pashayakubovsky/Desktop/skripta/src/app/configuration/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,32029)),"/Users/pashayakubovsky/Desktop/skripta/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/Users/pashayakubovsky/Desktop/skripta/src/app/configuration/page.tsx"],d="/configuration/page",p={require:r,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/configuration/page",pathname:"/configuration",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},29180:(e,t,r)=>{Promise.resolve().then(r.bind(r,53041))},69856:(e,t,r)=>{"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=r(17577),s="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=a.useState,o=a.useEffect,n=a.useLayoutEffect,l=a.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!s(e,r)}catch(e){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),a=i({inst:{value:r,getSnapshot:t}}),s=a[0].inst,u=a[1];return n(function(){s.value=r,s.getSnapshot=t,c(s)&&u({inst:s})},[e,r,t]),o(function(){return c(s)&&u({inst:s}),e(function(){c(s)&&u({inst:s})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==a.useSyncExternalStore?a.useSyncExternalStore:u},77513:(e,t,r)=>{"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=r(17577),s=r(94095),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=s.useSyncExternalStore,n=a.useRef,l=a.useEffect,c=a.useMemo,u=a.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,a,s){var d=n(null);if(null===d.current){var p={hasValue:!1,value:null};d.current=p}else p=d.current;var m=o(e,(d=c(function(){function e(e){if(!l){if(l=!0,o=e,e=a(e),void 0!==s&&p.hasValue){var t=p.value;if(s(t,e))return n=t}return n=e}if(t=n,i(o,e))return t;var r=a(e);return void 0!==s&&s(t,r)?t:(o=e,n=r)}var o,n,l=!1,c=void 0===r?null:r;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,r,a,s]))[0],d[1]);return l(function(){p.hasValue=!0,p.value=m},[m]),u(m),m}},94095:(e,t,r)=>{"use strict";e.exports=r(69856)},21508:(e,t,r)=>{"use strict";e.exports=r(77513)},53041:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Z});var a=r(10326);let s=(0,r(60114).Ue)((e,t)=>({episodes:1,episodeLength:3,genre:"",subGenre:"",budget:"",primaryStoryLocation:"",mainCharacters:[],mainCharacterEthnicity:"",desiredPrimaryFilmingLocation:"",language:"english",additionalElements:"",storyReference:"",emotionalEvents:[],desiredPrimaryFilmingLocations:"",mainCharactersLength:1,errors:{episodes:"",episodesLength:"",primaryStoryLocation:"",budget:"",genre:"",subGenre:""},setConfig:t=>{"function"==typeof t?e(e=>t(e)):e(t)},setError:(r,a)=>{let s=t().errors;s[a]=r,e({errors:s})}}));var i=r(17577),o=r.n(i),n=r(74034);function l(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"},child:[]}]})(e)}function c(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z"},child:[]},{tag:"path",attr:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8Z"},child:[]}]})(e)}var u=r(24490);async function d(e){return(await u.Z.post("api/filmScript",e,{headers:{"Content-Type":"application/json"}})).data}var p=r(40381),m=r(35047),h=r(2559),g=r(22918),f=r(38638),x=r(45353),y=r(71496),v=r(42094),b=r(26954),j=r(13868),w=["type","children","className","invert"],N=function(e,t,r){var a={default:{color:t.foreground},success:{color:t.success},warning:{color:t.warning},error:{color:t.error},secondary:{color:t.secondary},dark:{color:t.foreground,bgColor:t.background},lite:{color:t.foreground,bgColor:t.accents_2}},s=(0,x.Z)({},a[e],{bgColor:a[e].bgColor||t.background,borderColor:r||"lite"===e?"transparent":a[e].color});return r?(0,x.Z)({},s,{color:s.bgColor,bgColor:s.color}):s},S=function(e){var t=e.type,r=e.children,a=e.className,s=e.invert,n=(0,f.Z)(e,w),l=(0,v.Z)(),c=(0,b.ZP)().SCALES,u=(0,i.useMemo)(function(){return N(t,l.palette,s)},[t,l.palette,s]),d=u.color,p=u.bgColor,m=u.borderColor;return o().createElement("span",(0,x.Z)({},n,{className:y.Z.dynamic([["3652870078",[m,p,d,c.height(.3125),c.font(.875),c.width(1,"auto"),c.height(1.75),c.pt(.375),c.pr(.375),c.pb(.375),c.pl(.375),c.mt(0),c.mr(0),c.mb(0),c.ml(0)]]])+" "+(n&&null!=n.className&&n.className||a||"")}),r,o().createElement(y.Z,{id:"3652870078",dynamic:[m,p,d,c.height(.3125),c.font(.875),c.width(1,"auto"),c.height(1.75),c.pt(.375),c.pr(.375),c.pb(.375),c.pl(.375),c.mt(0),c.mr(0),c.mb(0),c.ml(0)]},"span.__jsx-style-dynamic-selector{display:inline-block;border:1px solid ".concat(m,";background-color:").concat(p,";color:").concat(d,";box-sizing:border-box;line-height:1em;border-radius:").concat(c.height(.3125),";font-size:").concat(c.font(.875),";width:").concat(c.width(1,"auto"),";height:").concat(c.height(1.75),";padding:").concat(c.pt(.375)," ").concat(c.pr(.375)," ").concat(c.pb(.375)," ").concat(c.pl(.375),";margin:").concat(c.mt(0)," ").concat(c.mr(0)," ").concat(c.mb(0)," ").concat(c.ml(0),";}")))};S.defaultProps={type:"default",invert:!1,className:""},S.displayName="GeistTag";var C=(0,j.Z)(S),k=r(4004),E=r(98029);let P=()=>{let e=s(e=>e.mainCharacters),t=s(e=>e.setConfig);return(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[a.jsx(h.Z,{h4:!0,className:"text-lg font-semibold",children:"Please Add Main Characters By Type And Age (optional)"}),a.jsx(h.Z,{h5:!0,children:"Separate characters with a comma ',' and add their age after a space"}),(0,a.jsxs)("div",{className:"flex flex-col gap-[0.25rem]",children:[e.map((r,s)=>(0,a.jsxs)("div",{className:"flex items-center",children:[a.jsx(g.Z,{className:"!w-[20rem] max-sm:!w-[80vw]",type:"secondary",placeholder:["eg. Scientist, 50","eg. Student, 20","eg. Police Officer, 35","eg. Teacher, 42","eg. Creature, unknown age"][s?s%5:Math.floor(5*Math.random())],value:r,onChange:r=>{let a=[...e];a[s]=r.target.value,t({mainCharacters:a})},crossOrigin:void 0}),a.jsx(l,{onClick:()=>{t({mainCharacters:e.filter((e,t)=>t!==s)})},className:"text-red-500 w-[1.5rem] h-[1.5rem] cursor-pointer hover:scale-110 transition-all"})]},s)),a.jsx(k.Z,{type:"secondary-light",icon:a.jsx(c,{}),className:"!rounded-xl bg-slate-400 !w-[3rem] !min-w-[auto] !p-0",onClick:()=>{t({mainCharacters:[...e,""]})},placeholder:void 0})]})]})};function Z(){let e=(0,m.useRouter)(),[t,r]=(0,i.useState)(!1),{setConfig:o,setError:n,episodeLength:u,subGenre:f,episodes:x,genre:y,budget:v,primaryStoryLocation:b,additionalElements:j,desiredPrimaryFilmingLocation:w,desiredPrimaryFilmingLocations:N,emotionalEvents:S,language:Z,mainCharacterEthnicity:O,mainCharacters:q,mainCharactersLength:L,storyReference:M,errors:D}=s(),T=()=>{let e=!0;return x||(n("Episodes is required","episodes"),e=!1),u||(n("Episode length is required","episodesLength"),e=!1),y||(n("Genre is required","genre"),e=!1),f||(n("Sub Genre is required","subGenre"),e=!1),v||(n("Budget is required","budget"),e=!1),b||(n("Primary story location is required","primaryStoryLocation"),e=!1),e},A=async()=>{let t=localStorage.getItem("userId");if(!t){p.ZP.error("userId not found");return}if(!T()){window.scrollTo({top:0,behavior:"smooth"});return}r(!0);try{await d({episodeLength:u,episodes:x,genre:y,subGenre:f,budget:v,primaryStoryLocation:b,additionalElements:j,desiredPrimaryFilmingLocation:w,desiredPrimaryFilmingLocations:N,emotionalEvents:S,language:Z,mainCharacterEthnicity:O,mainCharacters:q,mainCharactersLength:L,storyReference:M,userId:t}),e.push("/response"),r(!1)}catch(e){p.ZP.error(e?.message),r(!1)}};return(0,a.jsxs)("div",{className:"bg-stone-100",children:[a.jsx(h.Z,{h2:!0,className:"!w-full border-b-2 border-black text-center",children:"Vertical Film Script Generator"}),a.jsx(h.Z,{className:"font-semibold text-sm text-center max-w-[80vw] m-auto",children:"Please answer the following questions to the best of your ability"}),a.jsx("div",{className:"flex min-h-screen flex-col items-center justify-between pb-[2rem] px-4 w-fit m-auto",children:(0,a.jsxs)("div",{className:"px-4 mt-[0.5rem] flex flex-col w-full gap-4",children:[(0,a.jsxs)("div",{className:"mt-2 flex flex-col gap-2",children:[a.jsx(h.Z,{h4:!0,className:"font-semibold",children:"How Many Episodes Should There Be?"}),a.jsx(g.Z,{clearable:!0,type:D.episodes?"error":"secondary",htmlType:"text",className:"max-sm:!w-full",placeholder:"eg. 100",value:x+"",onChange:e=>{let t=+e.target.value;t<=0||t>=100?n("Max episodes is 100","episodes"):D.episodes&&n("","episodes"),o({episodes:t})},crossOrigin:void 0}),D.episodes&&a.jsx(h.Z,{className:"!m-0",type:"error",children:D.episodes})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[a.jsx(h.Z,{h4:!0,className:"font-semibold",children:"How Long Should Each Episode Be? (in minutes)"}),a.jsx(g.Z,{className:"max-sm:!w-full",clearable:!0,type:D.episodesLength?"error":"secondary",placeholder:"eg. 3",value:u+"",onChange:e=>{let t=+e.target.value;t<1||t>5?n("Max length is 5 minutes","episodesLength"):D.episodesLength&&n("","episodesLength"),o({episodeLength:t})},crossOrigin:void 0}),D.episodesLength&&a.jsx(h.Z,{className:"!m-0",type:"error",children:D.episodesLength})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[a.jsx(h.Z,{h4:!0,className:"text-lg font-semibold block",children:"Choose A Genre"}),a.jsx("div",{className:"flex flex-wrap gap-[0.5rem]",children:["Action","Adventure","Comedy","Drama","Fantasy","Historical","Horror","Noir","Romance","Science Fiction","Thriller","Western"].map(e=>a.jsx(C,{className:"cursor-pointer",type:y===e?"success":"default",onClick:()=>{o({genre:e})},children:`${e}`},e))}),D.genre&&a.jsx(h.Z,{className:"!m-0",type:"error",children:D.genre})]}),(0,a.jsxs)("div",{children:[a.jsx(h.Z,{h4:!0,children:"Sub Genre"}),a.jsx("div",{className:"flex flex-wrap gap-[0.5rem]",children:({Action:["Disaster","Heroic Bloodshed","Martial Arts","Spy","Superhero ","War "],Adventure:["Pirate","Swashbuckler","Samurai"],Comedy:["Action","Buddy","Dark/Black","Mockumentary","Parody ","Romantic ","Screwball ","Slapstick "],Drama:["Docudrama","Legal","Medical","Melodrama","Political","Psychological","Teen"],Fantasy:["Contemporary","Dark","High/Epic","Urban"],Historical:["Alternate History","Biopic","Historical Epic","Historical Event","Historical Fiction","Period Piece"],Horror:["Found Footage","Ghost","Monster","Slasher","Splatter","Zombie","Supernatural"],Noir:["Neo-noir","Horror-noir","Tech-noir"],Romance:["Historical","Paranormal","Comedy","Fantasy","Thriller"],"Science Fiction":["Dystopian","Post-apocalyptic","Military","Steampunk","Tech Noir","Utopian","Space Opera"],Thriller:["Psychological","Mystery","Techno","Political"],Western:["Epic","Revisionist","Spaghetti"]})[y]?.map(e=>a.jsx(C,{className:"cursor-pointer",type:f===e?"success":"default",onClick:()=>{o({subGenre:e})},children:`${e}`},e))}),D.subGenre&&a.jsx(h.Z,{className:"!m-0",type:"error",children:D.subGenre})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[a.jsx(h.Z,{h4:!0,className:"text-lg font-semibold",children:"What is your budget?"}),(0,a.jsxs)("div",{className:"flex flex-wrap gap-[0.5rem]",children:[a.jsx(C,{className:"cursor-pointer",type:"micro"===v?"success":"default",onClick:()=>{o({budget:"micro"})},children:"Micro"}),a.jsx(C,{className:"cursor-pointer",type:"low"===v?"success":"default",onClick:()=>{o({budget:"low"})},children:"Low"}),a.jsx(C,{className:"cursor-pointer",type:"medium"===v?"success":"default",onClick:()=>{o({budget:"medium"})},children:"Medium"}),a.jsx(C,{className:"cursor-pointer",type:"hight"===v?"success":"default",onClick:()=>{o({budget:"hight"})},children:"Hight"})]}),D.budget&&a.jsx(h.Z,{className:"!m-0",type:"error",children:D.budget})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[a.jsx(h.Z,{h4:!0,className:"text-lg font-semibold",children:"What Is The Primary Story Location?"}),a.jsx(g.Z,{className:"max-sm:!w-full",type:D.primaryStoryLocation?"error":"secondary",placeholder:"eg. New York City",value:b,onChange:e=>{e.target.value.length<4?n("Min length is 3 letter","primaryStoryLocation"):D.primaryStoryLocation&&n("","primaryStoryLocation"),o({primaryStoryLocation:e.target.value})},crossOrigin:void 0}),D.primaryStoryLocation&&a.jsx(h.Z,{className:"!m-0",type:"error",children:D.primaryStoryLocation})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[a.jsx(h.Z,{h4:!0,className:"text-lg font-semibold",children:"Number Of Main Characters (optional)"}),a.jsx(g.Z,{className:"max-sm:!w-full",clearable:!0,type:"secondary",inputMode:"numeric",placeholder:"eg. 6",value:L+"",onChange:e=>{o({mainCharactersLength:+e.target.value})},crossOrigin:void 0})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[a.jsx(h.Z,{h4:!0,className:"text-lg font-semibold",children:"Do You Have A Preference For The Main Character(s)' Ethnicity?"}),(0,a.jsxs)("div",{className:"flex flex-wrap gap-[0.5rem]",children:[a.jsx(C,{className:"cursor-pointer",type:"white"===O?"success":"default",onClick:()=>{o({mainCharacterEthnicity:"white"})},children:"White"}),a.jsx(C,{className:"cursor-pointer",type:"black"===O?"success":"default",onClick:()=>{o({mainCharacterEthnicity:"black"})},children:"Black"}),a.jsx(C,{className:"cursor-pointer",type:"asian"===O?"success":"default",onClick:()=>{o({mainCharacterEthnicity:"asian"})},children:"Asian"}),a.jsx(C,{className:"cursor-pointer",type:"hispanic"===O?"success":"default",onClick:()=>{o({mainCharacterEthnicity:"hispanic"})},children:"Hispanic"}),a.jsx(C,{className:"cursor-pointer",type:"indigenous"===O?"success":"default",onClick:()=>{o({mainCharacterEthnicity:"indigenous"})},children:"Indigenous"}),a.jsx(C,{className:"cursor-pointer",type:"unimportant"===O?"success":"default",onClick:()=>{o({mainCharacterEthnicity:"unimportant"})},children:"Unimportant"})]})]}),a.jsx(P,{}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[a.jsx(h.Z,{h4:!0,className:"text-lg font-semibold",children:"Emotional Events Or Behavior By Character (optional)"}),S.map((e,t)=>(0,a.jsxs)("div",{className:"flex items-center w-full",children:[a.jsx(g.Z,{className:"!w-[20rem] max-sm:!w-[80vw]",type:"secondary",placeholder:["eg. Discovery of creature","eg. Murder of captain"][t?t%2:Math.floor(2*Math.random())],value:e+"",onChange:e=>{let r=e.target.value;S[t]=r,o({emotionalEvents:S})},crossOrigin:void 0}),a.jsx(l,{onClick:()=>{o({emotionalEvents:S.filter((e,r)=>r!==t)})},className:"w-[1.5rem] h-[1.5rem] text-red-500 cursor-pointer hover:scale-110 transition-all"})]},t)),a.jsx(k.Z,{type:"secondary-light",icon:a.jsx(c,{}),className:"!rounded-xl bg-slate-400 !w-[3rem] !min-w-[auto] !p-0",onClick:()=>{o({emotionalEvents:[...S,""]})},placeholder:void 0})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[a.jsx(h.Z,{h4:!0,className:"text-lg font-semibold",children:"Please Choose Some Desired Primary Filming Locations"}),a.jsx("span",{children:"Separate locations with 'and'"}),a.jsx(E.Z,{resize:"both",className:"!w-[20rem] max-sm:!w-full",value:N,onChange:e=>{o({desiredPrimaryFilmingLocations:e.target.value})},type:"secondary",placeholder:"eg. coffee shop and hotel and beach and office building"})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsxs)(h.Z,{h4:!0,className:"text-lg font-semibold",children:["Add A Story Reference From A Film Or Novel (optional)"," "]}),a.jsx(E.Z,{className:"max-sm:!w-full",value:M,onChange:e=>{o({storyReference:e.target.value})},type:"secondary",placeholder:"eg. Pride and Prejudice, Star Trek TNG, Blazing Saddles"})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[a.jsx(h.Z,{h4:!0,className:"text-lg font-semibold",children:"Language"}),a.jsx(C,{className:"!w-fit cursor-pointer",type:"english"===Z?"success":"default",onClick:()=>{o({language:"english"})},children:"English"})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[a.jsx(h.Z,{h4:!0,className:"text-lg font-semibold",children:"Additional Elements That Should Be Included? (optional)"}),a.jsx(h.Z,{h5:!0,children:"Separate locations with a comma ','"}),a.jsx(E.Z,{className:"max-sm:!w-full",value:j,onChange:e=>{o({additionalElements:e.target.value})},type:"secondary",placeholder:"eg. mental instability, murder, expensive clothes, sparse product placement for 'Dior'"})]}),a.jsx(k.Z,{loading:t,className:"!w-fit",disabled:t,type:"secondary-light",onClick:A,placeholder:void 0,children:"Generate Script"})]})})]})}},36882:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>o,__esModule:()=>i,default:()=>n});var a=r(68570);let s=(0,a.createProxy)(String.raw`/Users/pashayakubovsky/Desktop/skripta/src/app/configuration/page.tsx`),{__esModule:i,$$typeof:o}=s;s.default;let n=(0,a.createProxy)(String.raw`/Users/pashayakubovsky/Desktop/skripta/src/app/configuration/page.tsx#default`)},73881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var a=r(66621);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},74034:(e,t,r)=>{"use strict";r.d(t,{w_:()=>u});var a=r(17577),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=a.createContext&&a.createContext(s),o=["attr","size","title"];function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){var a,s;a=t,s=r[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(a))in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>a.createElement(d,n({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>a.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:s,size:i,title:l}=e,u=function(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}(e,o),d=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",n({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),l&&a.createElement("title",null,l),e.children)};return void 0!==i?a.createElement(i.Consumer,null,e=>t(e)):t(s)}},60114:(e,t,r)=>{"use strict";r.d(t,{Ue:()=>p});let a=e=>{let t;let r=new Set,a=(e,a)=>{let s="function"==typeof e?e(t):e;if(!Object.is(s,t)){let e=t;t=(null!=a?a:"object"!=typeof s||null===s)?s:Object.assign({},t,s),r.forEach(r=>r(t,e))}},s=()=>t,i={setState:a,getState:s,getInitialState:()=>o,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},o=t=e(a,s,i);return i},s=e=>e?a(e):a;var i=r(17577),o=r(21508);let{useDebugValue:n}=i,{useSyncExternalStoreWithSelector:l}=o,c=!1,u=e=>e,d=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?s(e):e,r=(e,r)=>(function(e,t=u,r){r&&!c&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),c=!0);let a=l(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,r);return n(a),a})(t,e,r);return Object.assign(r,t),r},p=e=>e?d(e):d}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[948,586,621,98,490,884],()=>r(59958));module.exports=a})();
(()=>{var e={};e.id=220,e.ids=[220],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},39491:e=>{"use strict";e.exports=require("assert")},82361:e=>{"use strict";e.exports=require("events")},57147:e=>{"use strict";e.exports=require("fs")},13685:e=>{"use strict";e.exports=require("http")},95687:e=>{"use strict";e.exports=require("https")},22037:e=>{"use strict";e.exports=require("os")},71017:e=>{"use strict";e.exports=require("path")},12781:e=>{"use strict";e.exports=require("stream")},76224:e=>{"use strict";e.exports=require("tty")},57310:e=>{"use strict";e.exports=require("url")},73837:e=>{"use strict";e.exports=require("util")},59796:e=>{"use strict";e.exports=require("zlib")},59958:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>c}),t(36882),t(32029),t(35866);var a=t(23191),s=t(88716),i=t(37922),o=t.n(i),n=t(95231),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);t.d(r,l);let c=["",{children:["configuration",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,36882)),"/Users/pashayakubovsky/Desktop/skripta/src/app/configuration/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,32029)),"/Users/pashayakubovsky/Desktop/skripta/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/pashayakubovsky/Desktop/skripta/src/app/configuration/page.tsx"],p="/configuration/page",u={require:t,loadChunk:()=>Promise.resolve()},m=new a.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/configuration/page",pathname:"/configuration",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},29180:(e,r,t)=>{Promise.resolve().then(t.bind(t,53041))},53041:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>E});var a=t(10326);let s=(0,t(60114).Ue)((e,r)=>({episodes:1,episodeLength:3,genre:"",subGenre:"",budget:"",primaryStoryLocation:"",mainCharacters:[],mainCharacterEthnicity:"",desiredPrimaryFilmingLocation:"",language:"english",additionalElements:"",storyReference:"",emotionalEvents:[],desiredPrimaryFilmingLocations:"",mainCharactersLength:1,errors:{episodes:"",episodesLength:"",primaryStoryLocation:"",budget:"",genre:"",subGenre:""},setConfig:r=>{"function"==typeof r?e(e=>r(e)):e(r)},setError:(t,a)=>{let s=r().errors;s[a]=t,e({errors:s})}}));var i=t(17577),o=t.n(i),n=t(74034);function l(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"},child:[]}]})(e)}function c(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z"},child:[]},{tag:"path",attr:{d:"M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8Z"},child:[]}]})(e)}var d=t(24490);async function p(e){return(await d.Z.post("api/filmScript",e,{headers:{"Content-Type":"application/json"}})).data}var u=t(40381),m=t(35047),h=t(2559),g=t(22918),x=t(38638),f=t(45353),y=t(71496),v=t(42094),b=t(26954),j=t(13868),N=["type","children","className","invert"],w=function(e,r,t){var a={default:{color:r.foreground},success:{color:r.success},warning:{color:r.warning},error:{color:r.error},secondary:{color:r.secondary},dark:{color:r.foreground,bgColor:r.background},lite:{color:r.foreground,bgColor:r.accents_2}},s=(0,f.Z)({},a[e],{bgColor:a[e].bgColor||r.background,borderColor:t||"lite"===e?"transparent":a[e].color});return t?(0,f.Z)({},s,{color:s.bgColor,bgColor:s.color}):s},C=function(e){var r=e.type,t=e.children,a=e.className,s=e.invert,n=(0,x.Z)(e,N),l=(0,v.Z)(),c=(0,b.ZP)().SCALES,d=(0,i.useMemo)(function(){return w(r,l.palette,s)},[r,l.palette,s]),p=d.color,u=d.bgColor,m=d.borderColor;return o().createElement("span",(0,f.Z)({},n,{className:y.Z.dynamic([["3652870078",[m,u,p,c.height(.3125),c.font(.875),c.width(1,"auto"),c.height(1.75),c.pt(.375),c.pr(.375),c.pb(.375),c.pl(.375),c.mt(0),c.mr(0),c.mb(0),c.ml(0)]]])+" "+(n&&null!=n.className&&n.className||a||"")}),t,o().createElement(y.Z,{id:"3652870078",dynamic:[m,u,p,c.height(.3125),c.font(.875),c.width(1,"auto"),c.height(1.75),c.pt(.375),c.pr(.375),c.pb(.375),c.pl(.375),c.mt(0),c.mr(0),c.mb(0),c.ml(0)]},"span.__jsx-style-dynamic-selector{display:inline-block;border:1px solid ".concat(m,";background-color:").concat(u,";color:").concat(p,";box-sizing:border-box;line-height:1em;border-radius:").concat(c.height(.3125),";font-size:").concat(c.font(.875),";width:").concat(c.width(1,"auto"),";height:").concat(c.height(1.75),";padding:").concat(c.pt(.375)," ").concat(c.pr(.375)," ").concat(c.pb(.375)," ").concat(c.pl(.375),";margin:").concat(c.mt(0)," ").concat(c.mr(0)," ").concat(c.mb(0)," ").concat(c.ml(0),";}")))};C.defaultProps={type:"default",invert:!1,className:""},C.displayName="GeistTag";var k=(0,j.Z)(C),P=t(75988),S=t(98029);let Z=()=>{let e=s(e=>e.mainCharacters),r=s(e=>e.setConfig);return(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[a.jsx(h.Z,{h4:!0,className:"text-lg font-semibold",children:"Please Add Main Characters By Type And Age (optional)"}),a.jsx(h.Z,{h5:!0,children:"Separate characters with a comma ',' and add their age after a space"}),(0,a.jsxs)("div",{className:"flex flex-col gap-[0.25rem]",children:[e.map((t,s)=>(0,a.jsxs)("div",{className:"flex items-center",children:[a.jsx(g.Z,{className:"!w-[20rem] max-sm:!w-[80vw]",type:"secondary",placeholder:["eg. Scientist, 50","eg. Student, 20","eg. Police Officer, 35","eg. Teacher, 42","eg. Creature, unknown age"][s?s%5:Math.floor(5*Math.random())],value:t,onChange:t=>{let a=[...e];a[s]=t.target.value,r({mainCharacters:a})},crossOrigin:void 0}),a.jsx(l,{onClick:()=>{r({mainCharacters:e.filter((e,r)=>r!==s)})},className:"text-red-500 w-[1.5rem] h-[1.5rem] cursor-pointer hover:scale-110 transition-all"})]},s)),a.jsx(P.Z,{type:"secondary-light",icon:a.jsx(c,{}),className:"!rounded-xl bg-slate-400 !w-[3rem] !min-w-[auto] !p-0",onClick:()=>{r({mainCharacters:[...e,""]})},placeholder:void 0})]})]})};function E(){let e=(0,m.useRouter)(),[r,t]=(0,i.useState)(!1),{setConfig:o,setError:n,episodeLength:d,subGenre:x,episodes:f,genre:y,budget:v,primaryStoryLocation:b,additionalElements:j,desiredPrimaryFilmingLocation:N,desiredPrimaryFilmingLocations:w,emotionalEvents:C,language:E,mainCharacterEthnicity:O,mainCharacters:q,mainCharactersLength:L,storyReference:M,errors:_}=s(),A=()=>{let e=!0;return f||(n("Episodes is required","episodes"),e=!1),d||(n("Episode length is required","episodesLength"),e=!1),y||(n("Genre is required","genre"),e=!1),x||(n("Sub Genre is required","subGenre"),e=!1),v||(n("Budget is required","budget"),e=!1),b||(n("Primary story location is required","primaryStoryLocation"),e=!1),e},H=async()=>{let r=localStorage.getItem("userId");if(!r){u.ZP.error("userId not found");return}if(!A()){window.scrollTo({top:0,behavior:"smooth"});return}t(!0);try{await p({episodeLength:d,episodes:f,genre:y,subGenre:x,budget:v,primaryStoryLocation:b,additionalElements:j,desiredPrimaryFilmingLocation:N,desiredPrimaryFilmingLocations:w,emotionalEvents:C,language:E,mainCharacterEthnicity:O,mainCharacters:q,mainCharactersLength:L,storyReference:M,userId:r}),e.push("/response"),t(!1)}catch(e){u.ZP.error(e?.message),t(!1)}};return(0,a.jsxs)("div",{className:"bg-stone-100",children:[a.jsx(h.Z,{h2:!0,className:"!w-full border-b-2 border-black text-center",children:"Vertical Film Script Generator"}),a.jsx(h.Z,{className:"font-semibold text-sm text-center max-w-[80vw] m-auto",children:"Please answer the following questions to the best of your ability"}),a.jsx("div",{className:"flex min-h-screen flex-col items-center justify-between pb-[2rem] px-4 w-fit m-auto",children:(0,a.jsxs)("div",{className:"px-4 mt-[0.5rem] flex flex-col w-full gap-4",children:[(0,a.jsxs)("div",{className:"mt-2 flex flex-col gap-2",children:[a.jsx(h.Z,{h4:!0,className:"font-semibold",children:"How Many Episodes Should There Be?"}),a.jsx(g.Z,{clearable:!0,type:_.episodes?"error":"secondary",htmlType:"text",className:"max-sm:!w-full",placeholder:"eg. 100",value:f+"",onChange:e=>{let r=+e.target.value;r<=0||r>=100?n("Max episodes is 100","episodes"):_.episodes&&n("","episodes"),o({episodes:r})},crossOrigin:void 0}),_.episodes&&a.jsx(h.Z,{className:"!m-0",type:"error",children:_.episodes})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[a.jsx(h.Z,{h4:!0,className:"font-semibold",children:"How Long Should Each Episode Be? (in minutes)"}),a.jsx(g.Z,{className:"max-sm:!w-full",clearable:!0,type:_.episodesLength?"error":"secondary",placeholder:"eg. 3",value:d+"",onChange:e=>{let r=+e.target.value;r<1||r>5?n("Max length is 5 minutes","episodesLength"):_.episodesLength&&n("","episodesLength"),o({episodeLength:r})},crossOrigin:void 0}),_.episodesLength&&a.jsx(h.Z,{className:"!m-0",type:"error",children:_.episodesLength})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[a.jsx(h.Z,{h4:!0,className:"text-lg font-semibold block",children:"Choose A Genre"}),a.jsx("div",{className:"flex flex-wrap gap-[0.5rem]",children:["Action","Adventure","Comedy","Drama","Fantasy","Historical","Horror","Noir","Romance","Science Fiction","Thriller","Western"].map(e=>a.jsx(k,{className:"cursor-pointer",type:y===e?"success":"default",onClick:()=>{o({genre:e})},children:`${e}`},e))}),_.genre&&a.jsx(h.Z,{className:"!m-0",type:"error",children:_.genre})]}),(0,a.jsxs)("div",{children:[a.jsx(h.Z,{h4:!0,children:"Sub Genre"}),a.jsx("div",{className:"flex flex-wrap gap-[0.5rem]",children:({Action:["Disaster","Heroic Bloodshed","Martial Arts","Spy","Superhero ","War "],Adventure:["Pirate","Swashbuckler","Samurai"],Comedy:["Action","Buddy","Dark/Black","Mockumentary","Parody ","Romantic ","Screwball ","Slapstick "],Drama:["Docudrama","Legal","Medical","Melodrama","Political","Psychological","Teen"],Fantasy:["Contemporary","Dark","High/Epic","Urban"],Historical:["Alternate History","Biopic","Historical Epic","Historical Event","Historical Fiction","Period Piece"],Horror:["Found Footage","Ghost","Monster","Slasher","Splatter","Zombie","Supernatural"],Noir:["Neo-noir","Horror-noir","Tech-noir"],Romance:["Historical","Paranormal","Comedy","Fantasy","Thriller"],"Science Fiction":["Dystopian","Post-apocalyptic","Military","Steampunk","Tech Noir","Utopian","Space Opera"],Thriller:["Psychological","Mystery","Techno","Political"],Western:["Epic","Revisionist","Spaghetti"]})[y]?.map(e=>a.jsx(k,{className:"cursor-pointer",type:x===e?"success":"default",onClick:()=>{o({subGenre:e})},children:`${e}`},e))}),_.subGenre&&a.jsx(h.Z,{className:"!m-0",type:"error",children:_.subGenre})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[a.jsx(h.Z,{h4:!0,className:"text-lg font-semibold",children:"What is your budget?"}),(0,a.jsxs)("div",{className:"flex flex-wrap gap-[0.5rem]",children:[a.jsx(k,{className:"cursor-pointer",type:"micro"===v?"success":"default",onClick:()=>{o({budget:"micro"})},children:"Micro"}),a.jsx(k,{className:"cursor-pointer",type:"low"===v?"success":"default",onClick:()=>{o({budget:"low"})},children:"Low"}),a.jsx(k,{className:"cursor-pointer",type:"medium"===v?"success":"default",onClick:()=>{o({budget:"medium"})},children:"Medium"}),a.jsx(k,{className:"cursor-pointer",type:"hight"===v?"success":"default",onClick:()=>{o({budget:"hight"})},children:"Hight"})]}),_.budget&&a.jsx(h.Z,{className:"!m-0",type:"error",children:_.budget})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[a.jsx(h.Z,{h4:!0,className:"text-lg font-semibold",children:"What Is The Primary Story Location?"}),a.jsx(g.Z,{className:"max-sm:!w-full",type:_.primaryStoryLocation?"error":"secondary",placeholder:"eg. New York City",value:b,onChange:e=>{e.target.value.length<4?n("Min length is 3 letter","primaryStoryLocation"):_.primaryStoryLocation&&n("","primaryStoryLocation"),o({primaryStoryLocation:e.target.value})},crossOrigin:void 0}),_.primaryStoryLocation&&a.jsx(h.Z,{className:"!m-0",type:"error",children:_.primaryStoryLocation})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[a.jsx(h.Z,{h4:!0,className:"text-lg font-semibold",children:"Number Of Main Characters (optional)"}),a.jsx(g.Z,{className:"max-sm:!w-full",clearable:!0,type:"secondary",inputMode:"numeric",placeholder:"eg. 6",value:L+"",onChange:e=>{o({mainCharactersLength:+e.target.value})},crossOrigin:void 0})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[a.jsx(h.Z,{h4:!0,className:"text-lg font-semibold",children:"Do You Have A Preference For The Main Character(s)' Ethnicity?"}),(0,a.jsxs)("div",{className:"flex flex-wrap gap-[0.5rem]",children:[a.jsx(k,{className:"cursor-pointer",type:"white"===O?"success":"default",onClick:()=>{o({mainCharacterEthnicity:"white"})},children:"White"}),a.jsx(k,{className:"cursor-pointer",type:"black"===O?"success":"default",onClick:()=>{o({mainCharacterEthnicity:"black"})},children:"Black"}),a.jsx(k,{className:"cursor-pointer",type:"asian"===O?"success":"default",onClick:()=>{o({mainCharacterEthnicity:"asian"})},children:"Asian"}),a.jsx(k,{className:"cursor-pointer",type:"hispanic"===O?"success":"default",onClick:()=>{o({mainCharacterEthnicity:"hispanic"})},children:"Hispanic"}),a.jsx(k,{className:"cursor-pointer",type:"indigenous"===O?"success":"default",onClick:()=>{o({mainCharacterEthnicity:"indigenous"})},children:"Indigenous"}),a.jsx(k,{className:"cursor-pointer",type:"unimportant"===O?"success":"default",onClick:()=>{o({mainCharacterEthnicity:"unimportant"})},children:"Unimportant"})]})]}),a.jsx(Z,{}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[a.jsx(h.Z,{h4:!0,className:"text-lg font-semibold",children:"Emotional Events Or Behavior By Character (optional)"}),C.map((e,r)=>(0,a.jsxs)("div",{className:"flex items-center w-full",children:[a.jsx(g.Z,{className:"!w-[20rem] max-sm:!w-[80vw]",type:"secondary",placeholder:["eg. Discovery of creature","eg. Murder of captain"][r?r%2:Math.floor(2*Math.random())],value:e+"",onChange:e=>{let t=e.target.value;C[r]=t,o({emotionalEvents:C})},crossOrigin:void 0}),a.jsx(l,{onClick:()=>{o({emotionalEvents:C.filter((e,t)=>t!==r)})},className:"w-[1.5rem] h-[1.5rem] text-red-500 cursor-pointer hover:scale-110 transition-all"})]},r)),a.jsx(P.Z,{type:"secondary-light",icon:a.jsx(c,{}),className:"!rounded-xl bg-slate-400 !w-[3rem] !min-w-[auto] !p-0",onClick:()=>{o({emotionalEvents:[...C,""]})},placeholder:void 0})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[a.jsx(h.Z,{h4:!0,className:"text-lg font-semibold",children:"Please Choose Some Desired Primary Filming Locations"}),a.jsx("span",{children:"Separate locations with 'and'"}),a.jsx(S.Z,{resize:"both",className:"!w-[20rem] max-sm:!w-full",value:w,onChange:e=>{o({desiredPrimaryFilmingLocations:e.target.value})},type:"secondary",placeholder:"eg. coffee shop and hotel and beach and office building"})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsxs)(h.Z,{h4:!0,className:"text-lg font-semibold",children:["Add A Story Reference From A Film Or Novel (optional)"," "]}),a.jsx(S.Z,{className:"max-sm:!w-full",value:M,onChange:e=>{o({storyReference:e.target.value})},type:"secondary",placeholder:"eg. Pride and Prejudice, Star Trek TNG, Blazing Saddles"})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[a.jsx(h.Z,{h4:!0,className:"text-lg font-semibold",children:"Language"}),a.jsx(k,{className:"!w-fit cursor-pointer",type:"english"===E?"success":"default",onClick:()=>{o({language:"english"})},children:"English"})]}),(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[a.jsx(h.Z,{h4:!0,className:"text-lg font-semibold",children:"Additional Elements That Should Be Included? (optional)"}),a.jsx(h.Z,{h5:!0,children:"Separate locations with a comma ','"}),a.jsx(S.Z,{className:"max-sm:!w-full",value:j,onChange:e=>{o({additionalElements:e.target.value})},type:"secondary",placeholder:"eg. mental instability, murder, expensive clothes, sparse product placement for 'Dior'"})]}),a.jsx(P.Z,{loading:r,className:"!w-fit",disabled:r,type:"secondary-light",onClick:H,placeholder:void 0,children:"Generate Script"})]})})]})}},36882:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>o,__esModule:()=>i,default:()=>n});var a=t(68570);let s=(0,a.createProxy)(String.raw`/Users/pashayakubovsky/Desktop/skripta/src/app/configuration/page.tsx`),{__esModule:i,$$typeof:o}=s;s.default;let n=(0,a.createProxy)(String.raw`/Users/pashayakubovsky/Desktop/skripta/src/app/configuration/page.tsx#default`)},73881:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});var a=t(66621);let s=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},74034:(e,r,t)=>{"use strict";t.d(r,{w_:()=>d});var a=t(17577),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=a.createContext&&a.createContext(s),o=["attr","size","title"];function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,a)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach(function(r){var a,s;a=r,s=t[r],(a=function(e){var r=function(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var a=t.call(e,r||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==typeof r?r:String(r)}(a))in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function d(e){return r=>a.createElement(p,n({attr:c({},e.attr)},r),function e(r){return r&&r.map((r,t)=>a.createElement(r.tag,c({key:t},r.attr),e(r.child)))}(e.child))}function p(e){var r=r=>{var t,{attr:s,size:i,title:l}=e,d=function(e,r){if(null==e)return{};var t,a,s=function(e,r){if(null==e)return{};var t,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}(e,o),p=i||r.size||"1em";return r.className&&(t=r.className),e.className&&(t=(t?t+" ":"")+e.className),a.createElement("svg",n({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,s,d,{className:t,style:c(c({color:e.color||r.color},r.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),l&&a.createElement("title",null,l),e.children)};return void 0!==i?a.createElement(i.Consumer,null,e=>r(e)):r(s)}}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[948,199,621,98,490,884],()=>t(59958));module.exports=a})();
(()=>{var e={};e.id=966,e.ids=[966],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},72081:(e,s,t)=>{"use strict";t.r(s),t.d(s,{GlobalError:()=>i.a,__next_app__:()=>u,originalPathname:()=>c,pages:()=>d,routeModule:()=>m,tree:()=>p}),t(64839),t(32029),t(35866);var r=t(23191),a=t(88716),o=t(37922),i=t.n(o),l=t(95231),n={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>l[e]);t.d(s,n);let p=["",{children:["signup",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,64839)),"/Users/pashayakubovsky/Desktop/skripta/src/app/signup/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,32029)),"/Users/pashayakubovsky/Desktop/skripta/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,35866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,73881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/pashayakubovsky/Desktop/skripta/src/app/signup/page.tsx"],c="/signup/page",u={require:t,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/signup/page",pathname:"/signup",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},24260:(e,s,t)=>{Promise.resolve().then(t.bind(t,92750))},92750:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>x});var r=t(10326),a=t(41997),o=t(2559),i=t(22918),l=t(75988),n=t(35047),p=t(17577),d=t(17767),c=t(77109),u=t(40381);let m=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);function x(){let{data:e,status:s}=(0,c.useSession)(),[t,x]=(0,p.useState)({showPassword:!1,password:"",repeatPassword:"",errorPassword:"",email:"",errorEmail:""});(0,n.useRouter)();let h=()=>m(t.email)?t.password===t.repeatPassword||(x(e=>({...e,errorPassword:"Passwords do not match"})),!1):(x(e=>({...e,errorEmail:"Invalid email"})),!1);return(0,r.jsxs)("div",{className:"bg-black !h-screen",children:[r.jsx(o.Z,{h1:!0,className:"m-auto text-center",children:"Skripta..."}),(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center w-full h-[80vh] max-w-[600px] m-auto max-md:max-w-[80vw]",children:[r.jsx(o.Z,{h2:!0,className:"text-4xl !text-white text-center relative z-10",children:"Hello there!"}),r.jsx(o.Z,{p:!0,className:"!mb-4 !mt-0 text-sm !text-white text-center relative z-10",children:"Fill out the form below to get started."}),r.jsx(d.Z,{}),(0,r.jsxs)("form",{className:"w-full gap-2 mb-4 flex flex-col bg-black relative z-10 ",children:[r.jsx(i.Z,{type:t.errorEmail?"error":"default",value:t.email,onChange:e=>{x({...t,email:e.target.value,errorEmail:m(e.target.value)?"":"Invalid email"})},ref:e=>{e&&(e.style.color="#fff")},inputMode:"email",className:"w-full !text-white",width:"100%",placeholder:"Email"}),(0,r.jsxs)("div",{className:"relative w-full",children:[r.jsx(i.Z,{onChange:e=>x({...t,password:e.target.value}),value:t.password,ref:e=>{e&&(e.style.color="#fff")},htmlType:t.showPassword?"text":"password",className:"w-full !text-white",width:"100%",placeholder:"Password"}),r.jsx("button",{onClick:()=>x(e=>({...e,showPassword:!t.showPassword})),className:"text-white",children:t.showPassword?r.jsx(a.gxi,{className:"absolute right-2 top-[50%] translate-y-[-50%] cursor-pointer w-[1.5rem] h-[1.5rem]"}):r.jsx(a.ilU,{className:"absolute right-2 top-[50%] translate-y-[-50%] cursor-pointer w-[1.5rem] h-[1.5rem]"})})]}),r.jsx(i.Z,{onChange:e=>x({...t,repeatPassword:e.target.value,errorPassword:e.target.value!==t.password?"Passwords do not match":""}),value:t.repeatPassword,ref:e=>{e&&(e.style.color="#fff")},type:t.errorPassword?"error":"default",htmlType:t.showPassword?"text":"password",className:"w-full !text-white",width:"100%",placeholder:"Repeat Password"})]}),r.jsx(l.Z,{width:"100%",className:"!mb-2",onClick:()=>{h()&&(0,c.signIn)("credentials",{email:t.email,password:t.password,repeatPassword:t.repeatPassword}).catch(e=>{console.error(e),u.ZP.error("Error signing up")})},children:"Sign Up"})]})]})}},64839:(e,s,t)=>{"use strict";t.r(s),t.d(s,{$$typeof:()=>i,__esModule:()=>o,default:()=>l});var r=t(68570);let a=(0,r.createProxy)(String.raw`/Users/pashayakubovsky/Desktop/skripta/src/app/signup/page.tsx`),{__esModule:o,$$typeof:i}=a;a.default;let l=(0,r.createProxy)(String.raw`/Users/pashayakubovsky/Desktop/skripta/src/app/signup/page.tsx#default`)}};var s=require("../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),r=s.X(0,[948,431,621,767,98,997,564],()=>t(72081));module.exports=r})();
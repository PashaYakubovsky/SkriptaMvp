(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[372],{4940:function(e,t,r){Promise.resolve().then(r.bind(r,7760))},7760:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var l=r(7437),n=r(2265),i=r(7650),a=r(7571),s=r(9819),o=r(8726),d=r(2800),c=r(7818);let p={List:(0,n.forwardRef)((e,t)=>{let{style:r,children:n,...i}=e;return(0,l.jsx)("div",{ref:t,...i,style:{...r,display:"flex",flexWrap:"wrap",justifyContent:"center",width:"100%",margin:"1rem auto",gap:"1rem"},children:n})}),Item:e=>{let{children:t,...r}=e;return(0,l.jsx)("div",{...r,className:"bg-gray-200 flex items-center justify-center text-2xl rounded-lg w-fit overflow-hidden border border-gray-300 hover:scale-105 transition-all hover:border-emerald-600",children:t})}},u=(0,c.default)(()=>Promise.all([r.e(826),r.e(247),r.e(175)]).then(r.bind(r,9175)),{loadableGenerated:{webpack:()=>[9175]},ssr:!1}),f=(0,c.default)(()=>Promise.all([r.e(259),r.e(127)]).then(r.bind(r,9635)),{loadableGenerated:{webpack:()=>[9635]},ssr:!1});var h=()=>{let[e,t]=(0,n.useState)({series:[],filteredSeries:[],popupOpen:!1,popupType:"edit",selectedScript:null,loading:!1});return(0,n.useEffect)(()=>((async()=>{var r;let l=null!==(r=localStorage.getItem("userId"))&&void 0!==r?r:"";try{t({...e,loading:!0});let r=await (0,d.g)({userId:l});t({...e,series:r,loading:!1,filteredSeries:r})}catch(r){o.ZP.error("Failed to fetch series"),t({...e,loading:!1})}})(),()=>{document.body.style.overflow="auto"}),[]),(0,l.jsxs)("div",{children:[(0,l.jsx)("header",{className:"text-center text-white bg-black py-5",children:(0,l.jsx)(i.Z,{h2:!0,children:"Series"})}),(0,l.jsx)("div",{className:"w-[15rem] mt-4 mx-auto",children:(0,l.jsx)(a.Z,{onChange:r=>{let l=r.target.value.toLowerCase();t({...e,filteredSeries:e.series.filter(e=>{let t=RegExp(l,"i");return t.test((null==e?void 0:e.name)||"")||t.test((null==e?void 0:e.id)||"")})})},placeholder:"Search",width:"100%",crossOrigin:void 0})}),(0,l.jsx)("div",{className:"py-5",children:(0,l.jsx)(s.Mr,{style:{height:window.innerHeight-200,display:"flex"},totalCount:e.filteredSeries.length,components:p,itemContent:r=>{var n;let i=e.filteredSeries[r];return(0,l.jsx)(f,{onDelete:()=>{t({...e,popupOpen:!0,popupType:"delete",selectedScript:i})},loading:e.loading,onClick:()=>{t({...e,popupOpen:!0,popupType:"edit",selectedScript:i})},children:null!==(n=null==i?void 0:i.name)&&void 0!==n?n:null==i?void 0:i.id})}})}),(0,l.jsx)(u,{open:e.popupOpen,close:()=>{t({...e,popupOpen:!1})},type:e.popupType,script:e.selectedScript,onUpdate:()=>{var r;t({...e,loading:!0}),(0,d.g)({userId:null!==(r=localStorage.getItem("userId"))&&void 0!==r?r:""}).then(e=>{t(t=>({...t,series:e,loading:!1,filteredSeries:e}))}).catch(()=>{t({...e,loading:!1})})}})]})}},2800:function(e,t,r){"use strict";r.d(t,{g:function(){return i},k:function(){return n}});var l=r(2126);let n=async e=>{let{history:t,seriesId:r,message:n}=e,i=[...t,null!=n?n:{role:"user",content:"Create new episode"}];return(await l.Z.post("/api/series/".concat(r),{history:i})).data},i=async e=>{let{userId:t}=e;try{return(await l.Z.get("/api/series?userId="+t)).data.data}catch(e){return console.error(e),[]}}}},function(e){e.O(0,[806,726,627,126,423,971,23,744],function(){return e(e.s=4940)}),_N_E=e.O()}]);
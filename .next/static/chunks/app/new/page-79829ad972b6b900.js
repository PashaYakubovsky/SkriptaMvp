(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[453],{5808:function(e,t,r){Promise.resolve().then(r.bind(r,7152))},7650:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var n=r(2988),a=r(3627),c=r(2265),o=r(7734),i=r(6602),l=r(1161),s=["children","tag","className","type"],u=function(e,t){var r={default:"inherit",secondary:t.secondary,success:t.success,warning:t.warning,error:t.error};return r[e]||r.default},m=function(e){var t=e.children,r=e.tag,m=e.className,f=e.type,d=(0,a.Z)(e,s),p=(0,i.Z)(),h=(0,l.ZP)(),v=h.SCALES,y=h.getScaleProps,b=y("font"),g=y(["margin","marginLeft","marginRight","mx","ml","mr"]),x=y(["margin","marginTop","marginBottom","my","mt","mb"]),j=y(["padding","paddingLeft","paddingRight","pl","pr","px"]),w=y(["padding","paddingTop","paddingBottom","pt","pb","py"]),N=(0,c.useMemo)(function(){return u(f,p.palette)},[f,p.palette]),O=(0,c.useMemo)(function(){var e=[{value:g,className:"mx"},{value:x,className:"my"},{value:j,className:"px"},{value:w,className:"py"},{value:b,className:"font"}].reduce(function(e,t){return void 0===t.value?e:"".concat(e," ").concat(t.className)},"");return"".concat(e," ").concat(m).trim()},[g,x,j,w,b,m]);return c.createElement(r,(0,n.Z)({},d,{className:o.Z.dynamic([["3155699851",[r,N,v.width(1,"auto"),v.height(1,"auto"),v.font(1,"inherit"),v.ml(0,"revert"),v.mr(0,"revert"),v.mt(0,"revert"),v.mb(0,"revert"),v.pl(0,"revert"),v.pr(0,"revert"),v.pt(0,"revert"),v.pb(0,"revert")]]])+" "+(d&&null!=d.className&&d.className||O||"")}),t,c.createElement(o.Z,{id:"3155699851",dynamic:[r,N,v.width(1,"auto"),v.height(1,"auto"),v.font(1,"inherit"),v.ml(0,"revert"),v.mr(0,"revert"),v.mt(0,"revert"),v.mb(0,"revert"),v.pl(0,"revert"),v.pr(0,"revert"),v.pt(0,"revert"),v.pb(0,"revert")]},"".concat(r,".__jsx-style-dynamic-selector{color:").concat(N,";width:").concat(v.width(1,"auto"),";height:").concat(v.height(1,"auto"),";}.font.__jsx-style-dynamic-selector{font-size:").concat(v.font(1,"inherit"),";}.mx.__jsx-style-dynamic-selector{margin-left:").concat(v.ml(0,"revert"),";margin-right:").concat(v.mr(0,"revert"),";}.my.__jsx-style-dynamic-selector{margin-top:").concat(v.mt(0,"revert"),";margin-bottom:").concat(v.mb(0,"revert"),";}.px.__jsx-style-dynamic-selector{padding-left:").concat(v.pl(0,"revert"),";padding-right:").concat(v.pr(0,"revert"),";}.py.__jsx-style-dynamic-selector{padding-top:").concat(v.pt(0,"revert"),";padding-bottom:").concat(v.pb(0,"revert"),";}")))};m.defaultProps={type:"default",className:""},m.displayName="GeistTextChild";var f=r(4245),d=["h1","h2","h3","h4","h5","h6","p","b","small","i","span","del","em","blockquote","children","className"],p=function e(t,r){if(!t.length)return r;var n=t.slice(1,t.length);return c.createElement(m,{tag:t[0]},e(n,r))},h=function(e){var t=e.h1,r=e.h2,o=e.h3,i=e.h4,l=e.h5,s=e.h6,u=e.p,f=e.b,h=e.small,v=e.i,y=e.span,b=e.del,g=e.em,x=e.blockquote,j=e.children,w=e.className,N=(0,a.Z)(e,d),O={h1:t,h2:r,h3:o,h4:i,h5:l,h6:s,p:u,blockquote:x},E={span:y,small:h,b:f,em:g,i:v,del:b},P=Object.keys(O).filter(function(e){return O[e]}),S=Object.keys(E).filter(function(e){return E[e]}),_=(0,c.useMemo)(function(){return P[0]?P[0]:S[0]?S[0]:"p"},[P,S]),k=S.filter(function(e){return e!==_}),Z=(0,c.useMemo)(function(){return k.length?p(k,j):j},[k,j]);return c.createElement(m,(0,n.Z)({className:w,tag:_},N),Z)};h.defaultProps={h1:!1,h2:!1,h3:!1,h4:!1,h5:!1,h6:!1,p:!1,b:!1,small:!1,i:!1,span:!1,del:!1,em:!1,blockquote:!1,className:"",type:"default"},h.displayName="GeistText";var v=(0,f.Z)(h)},7509:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(8620),a=function(e){for(var t=Object.keys(e),r=t.length,n="",a=0;a<r;a++){var c=t[a];e[t[a]]&&(n=n?"".concat(n," ").concat(String(c)):String(c))}return n},c=function(){var e=arguments.length,t="";if(0===e)return t;for(var r=0;r<e;r++){var c=r<0||arguments.length<=r?void 0:arguments[r];c&&("object"!==(0,n.Z)(c)||Array.isArray(c)?t+=" ".concat(String(c).trim()):t+=" ".concat(a(c)))}return t.trim()}},2579:function(e,t,r){"use strict";r.d(t,{j:function(){return o}});var n=r(9963),a=function(e){var t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,r,n){return"".concat(t).concat(t).concat(r).concat(r).concat(n).concat(n)}),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);if(!r)throw Error("Geist UI: Unsupported ".concat(e," color."));return[Number.parseInt(r[1],16),Number.parseInt(r[2],16),Number.parseInt(r[3],16)]},c=function(e){if("#"===e.charAt(0))return a(e);var t=e.replace(/ /g,""),r=e.substr(0,4),n=t.match(/\((.+)\)/);if(!r.startsWith("rgb")||!n)throw console.log(e),Error('Geist UI: Only support ["RGB", "RGBA", "HEX"] color.');return n[1].split(",").map(function(e){return Number.parseFloat(e)})},o=function(e,t){if(!/^#|rgb|RGB/.test(e))return e;var r=c(e),a=(0,n.Z)(r,3),o=a[0],i=a[1],l=a[2];return"rgba(".concat(o,", ").concat(i,", ").concat(l,", ").concat(t>1?1:t<0?0:t,")")}},7152:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(7437),a=r(3051),c=r(7650),o=r(762),i=r(6463);function l(){let e=(0,i.useRouter)();return(0,n.jsxs)("main",{className:"flex min-h-screen flex-col items-start flex-start px-4 bg-black",children:[(0,n.jsx)(c.Z,{h2:!0,className:" border-b-2 border-white  !w-full !py-[2rem] !text-white  !flex inter-center justify-center  align-center align-middle text-center max-md:text-3xl ",children:"What Do You Want To Do?"}),(0,n.jsx)("div",{className:"flex flex-col items-start justify-start w-full h-[80vh] px-4 pt-[0.5rem] ",children:(0,n.jsxs)(o.Z,{onClick:()=>{e.push("/configuration")},hoverable:!0,className:" !bg-slate-600 !w-[14rem] !h-[12rem] shadow-md rounded-md hover:shadow-xl hover:scale-105 cursor-pointer active:scale-95  transform transition duration-300 ease-in-out",children:[(0,n.jsxs)("div",{className:"h-[70%] rounded-sm bg-[#39D2C0] p-2 flex flex-col justify-between text-white text-sm ",children:[(0,n.jsxs)("div",{className:"relative w-fit rounded-md overflow-hidden p-2",children:[(0,n.jsx)("div",{className:"absolute w-full h-full left-0 top-0 bg-white opacity-25"}),(0,n.jsx)(a.QeY,{className:"w-[1.5rem] h-[1.5rem] text-white"})]}),(0,n.jsxs)("div",{className:"text-start  drop-shadow-md",children:[(0,n.jsx)("div",{children:"Vertical Films"}),(0,n.jsx)("div",{children:"Script Generation"})]})]}),(0,n.jsx)(c.Z,{className:"h-[30%] flex  !text-white items-center justify-center text-2xl ",children:"Begin"})]})})]})}},9963:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,c,o,i=[],l=!0,s=!1;try{if(c=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=c.call(r)).done)&&(i.push(n.value),i.length!==t);l=!0);}catch(e){s=!0,a=e}finally{try{if(!l&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(s)throw a}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,{Z:function(){return a}})},1810:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var n=r(2265),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=n.createContext&&n.createContext(a),o=["attr","size","title"];function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){var n,a;n=t,a=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(m,i({attr:s({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,s({key:r},t.attr),e(t.child)))}(e.child))}function m(e){var t=t=>{var r,{attr:a,size:c,title:l}=e,u=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}(e,o),m=c||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,u,{className:r,style:s(s({color:e.color||t.color},t.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),l&&n.createElement("title",null,l),e.children)};return void 0!==c?n.createElement(c.Consumer,null,e=>t(e)):t(a)}}},function(e){e.O(0,[522,919,6,971,23,744],function(){return e(e.s=5808)}),_N_E=e.O()}]);
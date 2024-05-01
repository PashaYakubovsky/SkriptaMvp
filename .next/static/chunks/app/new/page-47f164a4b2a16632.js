(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[453],{5808:function(e,t,n){Promise.resolve().then(n.bind(n,7152))},7650:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(2988),a=n(3627),i=n(2265),o=n(7734),c=n(6602),s=n(1161),u=["children","tag","className","type"],l=function(e,t){var n={default:"inherit",secondary:t.secondary,success:t.success,warning:t.warning,error:t.error};return n[e]||n.default},m=function(e){var t=e.children,n=e.tag,m=e.className,d=e.type,v=(0,a.Z)(e,u),h=(0,c.Z)(),f=(0,s.ZP)(),p=f.SCALES,x=f.getScaleProps,g=x("font"),w=x(["margin","marginLeft","marginRight","mx","ml","mr"]),y=x(["margin","marginTop","marginBottom","my","mt","mb"]),b=x(["padding","paddingLeft","paddingRight","pl","pr","px"]),C=x(["padding","paddingTop","paddingBottom","pt","pb","py"]),j=(0,i.useMemo)(function(){return l(d,h.palette)},[d,h.palette]),P=(0,i.useMemo)(function(){var e=[{value:w,className:"mx"},{value:y,className:"my"},{value:b,className:"px"},{value:C,className:"py"},{value:g,className:"font"}].reduce(function(e,t){return void 0===t.value?e:"".concat(e," ").concat(t.className)},"");return"".concat(e," ").concat(m).trim()},[w,y,b,C,g,m]);return i.createElement(n,(0,r.Z)({},v,{className:o.Z.dynamic([["3155699851",[n,j,p.width(1,"auto"),p.height(1,"auto"),p.font(1,"inherit"),p.ml(0,"revert"),p.mr(0,"revert"),p.mt(0,"revert"),p.mb(0,"revert"),p.pl(0,"revert"),p.pr(0,"revert"),p.pt(0,"revert"),p.pb(0,"revert")]]])+" "+(v&&null!=v.className&&v.className||P||"")}),t,i.createElement(o.Z,{id:"3155699851",dynamic:[n,j,p.width(1,"auto"),p.height(1,"auto"),p.font(1,"inherit"),p.ml(0,"revert"),p.mr(0,"revert"),p.mt(0,"revert"),p.mb(0,"revert"),p.pl(0,"revert"),p.pr(0,"revert"),p.pt(0,"revert"),p.pb(0,"revert")]},"".concat(n,".__jsx-style-dynamic-selector{color:").concat(j,";width:").concat(p.width(1,"auto"),";height:").concat(p.height(1,"auto"),";}.font.__jsx-style-dynamic-selector{font-size:").concat(p.font(1,"inherit"),";}.mx.__jsx-style-dynamic-selector{margin-left:").concat(p.ml(0,"revert"),";margin-right:").concat(p.mr(0,"revert"),";}.my.__jsx-style-dynamic-selector{margin-top:").concat(p.mt(0,"revert"),";margin-bottom:").concat(p.mb(0,"revert"),";}.px.__jsx-style-dynamic-selector{padding-left:").concat(p.pl(0,"revert"),";padding-right:").concat(p.pr(0,"revert"),";}.py.__jsx-style-dynamic-selector{padding-top:").concat(p.pt(0,"revert"),";padding-bottom:").concat(p.pb(0,"revert"),";}")))};m.defaultProps={type:"default",className:""},m.displayName="GeistTextChild";var d=n(4245),v=["h1","h2","h3","h4","h5","h6","p","b","small","i","span","del","em","blockquote","children","className"],h=function e(t,n){if(!t.length)return n;var r=t.slice(1,t.length);return i.createElement(m,{tag:t[0]},e(r,n))},f=function(e){var t=e.h1,n=e.h2,o=e.h3,c=e.h4,s=e.h5,u=e.h6,l=e.p,d=e.b,f=e.small,p=e.i,x=e.span,g=e.del,w=e.em,y=e.blockquote,b=e.children,C=e.className,j=(0,a.Z)(e,v),P={h1:t,h2:n,h3:o,h4:c,h5:s,h6:u,p:l,blockquote:y},N={span:x,small:f,b:d,em:w,i:p,del:g},M=Object.keys(P).filter(function(e){return P[e]}),S=Object.keys(N).filter(function(e){return N[e]}),A=(0,i.useMemo)(function(){return M[0]?M[0]:S[0]?S[0]:"p"},[M,S]),I=S.filter(function(e){return e!==A}),_=(0,i.useMemo)(function(){return I.length?h(I,b):b},[I,b]);return i.createElement(m,(0,r.Z)({className:C,tag:A},j),_)};f.defaultProps={h1:!1,h2:!1,h3:!1,h4:!1,h5:!1,h6:!1,p:!1,b:!1,small:!1,i:!1,span:!1,del:!1,em:!1,blockquote:!1,className:"",type:"default"},f.displayName="GeistText";var p=(0,d.Z)(f)},2579:function(e,t,n){"use strict";n.d(t,{j:function(){return o}});var r=n(9963),a=function(e){var t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,t,n,r){return"".concat(t).concat(t).concat(n).concat(n).concat(r).concat(r)}),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);if(!n)throw Error("Geist UI: Unsupported ".concat(e," color."));return[Number.parseInt(n[1],16),Number.parseInt(n[2],16),Number.parseInt(n[3],16)]},i=function(e){if("#"===e.charAt(0))return a(e);var t=e.replace(/ /g,""),n=e.substr(0,4),r=t.match(/\((.+)\)/);if(!n.startsWith("rgb")||!r)throw console.log(e),Error('Geist UI: Only support ["RGB", "RGBA", "HEX"] color.');return r[1].split(",").map(function(e){return Number.parseFloat(e)})},o=function(e,t){if(!/^#|rgb|RGB/.test(e))return e;var n=i(e),a=(0,r.Z)(n,3),o=a[0],c=a[1],s=a[2];return"rgba(".concat(o,", ").concat(c,", ").concat(s,", ").concat(t>1?1:t<0?0:t,")")}},6463:function(e,t,n){"use strict";var r=n(1169);n.o(r,"usePathname")&&n.d(t,{usePathname:function(){return r.usePathname}}),n.o(r,"useRouter")&&n.d(t,{useRouter:function(){return r.useRouter}}),n.o(r,"useSearchParams")&&n.d(t,{useSearchParams:function(){return r.useSearchParams}})},7152:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(7437),a=n(3051),i=n(7650),o=n(762),c=n(6463),s=n(9155);function u(){let e=(0,c.useRouter)();return(0,r.jsxs)("div",{className:"relative bg-black",children:[(0,r.jsx)(s.Z,{}),(0,r.jsxs)("div",{className:"flex min-h-screen flex-col items-start flex-start px-4 ",children:[(0,r.jsx)(i.Z,{h2:!0,className:" border-b-2 border-white  !w-full !py-[2rem] !text-white  !flex inter-center justify-center  align-center align-middle text-center max-md:text-3xl relative z-20 ",children:"What Do You Want To Do?"}),(0,r.jsx)("div",{className:"flex flex-col items-start justify-start w-full h-[80vh] px-4 pt-[0.5rem] ",children:(0,r.jsxs)(o.Z,{onClick:()=>{e.push("/configuration")},hoverable:!0,className:" !bg-slate-600 relative z-20 !w-[14rem] !h-[12rem] shadow-md rounded-md hover:shadow-xl hover:scale-105 cursor-pointer active:scale-95  transform transition duration-300 ease-in-out",children:[(0,r.jsxs)("div",{className:"h-[70%] rounded-sm bg-[#39D2C0] p-2 flex flex-col justify-between text-white text-sm ",children:[(0,r.jsxs)("div",{className:"relative w-fit rounded-md overflow-hidden p-2",children:[(0,r.jsx)("div",{className:"absolute w-full h-full left-0 top-0 bg-white opacity-25"}),(0,r.jsx)(a.QeY,{className:"w-[1.5rem] h-[1.5rem] text-white"})]}),(0,r.jsxs)("div",{className:"text-start  drop-shadow-md",children:[(0,r.jsx)("div",{children:"Vertical Films"}),(0,r.jsx)("div",{children:"Script Generation"})]})]}),(0,r.jsx)(i.Z,{className:"h-[30%] flex  !text-white items-center justify-center text-2xl ",children:"Begin"})]})})]})]})}},9155:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var r=n(7437),a=n(3199),i=n.n(a),o=n(2265),c=n(7647),s=n(3149),u=n(7776),l=n(2087);let m=(0,o.memo)(()=>{let e=(0,c.A)(e=>e.viewport),t=(0,o.useRef)(null),n=(0,o.useRef)({x:0,y:0,z:0}),a=(0,o.useRef)(null),i=(0,o.useMemo)(()=>({side:u.DoubleSide,uniforms:{uColor:new u.Uniform(new u.Color("black")),uMouse:new u.Uniform(new u.Vector3(-150,-150,0)),uTime:new u.Uniform(0),uPixelRatio:new u.Uniform(window.devicePixelRatio),uSize:new u.Uniform(1),uResolution:new u.Uniform(new u.Vector2(window.innerWidth,window.innerHeight)),uDisplacementTexture:new u.Uniform(null),uAngleScale:new u.Uniform(10),uDisplacementScale:new u.Uniform(1),uDisplacementSpeed:new u.Uniform(1),uRandomScale:new u.Uniform(!0)},fragmentShader:"#define GLSLIFY 1\nvarying vec3 vColor;\nuniform vec3 uColor;\n\nvoid main()\n{\n    vec2 uv = gl_PointCoord;\n    float distanceToCenter = length(uv - vec2(0.5));\n\n    if(distanceToCenter > 0.5)\n        discard;\n\n    gl_FragColor = vec4(vColor, 1.0);\n    #include <tonemapping_fragment>\n}",vertexShader:"#define GLSLIFY 1\n uniform vec2 uResolution;\nuniform sampler2D uPictureTexture;\nuniform sampler2D uDisplacementTexture;\nuniform float uSize;\nuniform float uTime;\nuniform float uAngleScale;\nuniform float uDisplacementScale;\nuniform float uDisplacementSpeed;\nuniform bool uRandomScale;\n\nattribute float aIntensity;\nattribute float aAngle;\nattribute float aScale;\n\nvarying vec3 vColor;\nvoid main() {\n    // Displacement\n    vec3 newPosition = position;\n    vec2 newUv = uv;\n    newUv.y = 1.0 - newUv.y;\n    newUv.x = 1.0 - newUv.x;\n    float displacementIntensity = texture(uDisplacementTexture, newUv).r;\n    displacementIntensity = smoothstep(0.1, uDisplacementSpeed, displacementIntensity);\n\n    vec3 displacement = vec3(\n        cos(aAngle) * uAngleScale,\n        sin(aAngle) * uAngleScale,\n        1.0\n    );\n    displacement = normalize(displacement);\n    displacement *= displacementIntensity;\n    displacement *= uDisplacementScale;\n    displacement *= aIntensity;\n    \n    newPosition += displacement;\n\n    // Final position\n    vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectedPosition = projectionMatrix * viewPosition;\n    gl_Position = projectedPosition;\n\n    // Point size\n    float pz = 0.2 * uResolution.y * uSize * (1.0 / - viewPosition.z);\n    if(uRandomScale) {\n        pz *= aScale;\n    }\n    gl_PointSize = pz;\n\n    // Varyings\n    vColor = vec3(pow(displacementIntensity, 2.0));\n}",transparent:!0,depthWrite:!1,blending:u.AdditiveBlending}),[]),s=(0,o.useMemo)(()=>{let e=new u.BufferGeometry,t=Math.floor(Math.sqrt(5e3/(window.innerWidth/window.innerHeight))),n=Math.ceil(5e3/t),r=new Float32Array(15e3),a=new Float32Array(5e3),i=new Float32Array(5e3),o=new Float32Array(5e3),c=new Float32Array(1e4);for(let e=0;e<5e3;e++){let s=Math.floor(e/n),u=e%n;r[3*e+0]=(u-n/2)*.5,r[3*e+1]=(s-t/2)*.5,r[3*e+2]=-1,a[e]=.1,i[e]=Math.random(),o[e]=Math.random()*Math.PI*2;let l=u/(n-1),m=s/(t-1);c[2*e+0]=l,c[2*e+1]=m}return e.setAttribute("position",new u.BufferAttribute(r,3)),e.setAttribute("aScale",new u.BufferAttribute(a,1)),e.setAttribute("aIntensity",new u.BufferAttribute(i,1)),e.setAttribute("aAngle",new u.BufferAttribute(o,1)),e.setAttribute("uv",new u.BufferAttribute(c,2)),e},[]);(0,c.C)(e=>{let{clock:t}=e;if(i.uniforms.uMouse.value.x=n.current.x,i.uniforms.uMouse.value.y=n.current.y,i.uniforms.uMouse.value.z=n.current.z,i.uniforms.uTime.value=t.elapsedTime,i.uniforms.uSize.value=1,l.current.context&&(l.current.context.globalCompositeOperation="source-over",l.current.context.globalAlpha=.02,l.current.context.fillRect(0,0,l.current.canvas.width,l.current.canvas.height)),!l.current.canvasCursor)return;let r=l.current.canvasCursorPrevious.distanceTo(l.current.canvasCursor);if(l.current.canvasCursorPrevious.copy(l.current.canvasCursor),l.current.context&&l.current.canvasCursor){let e=.2*l.current.canvas.width;l.current.context.globalCompositeOperation="lighten",l.current.context.globalAlpha=Math.min(.05*r,1),l.current.context.drawImage(l.current.glowImage,l.current.canvasCursor.x-.5*e,l.current.canvasCursor.y-.5*e,e,e)}i.uniforms.uDisplacementTexture.value=l.current.texture,l.current.texture&&(l.current.texture.needsUpdate=!0)});let l=(0,o.useRef)({canvasCursor:new u.Vector2(999999),canvasCursorPrevious:new u.Vector2(999999)});return(0,o.useEffect)(()=>{l.current.canvas=document.createElement("canvas"),l.current.canvas.style.position="fixed",l.current.canvas.style.objectFit="contain",l.current.canvas.style.aspectRatio="1/1",l.current.canvas.style.border="1px solid white",l.current.canvas.style.borderRadius="0.5rem",l.current.canvas.style.top="16px",l.current.canvas.style.left="16px",l.current.canvas.style.zIndex="10",l.current.context=l.current.canvas.getContext("2d");let e=l.current.context,t=window.innerWidth/window.innerHeight;l.current.canvas.width=320*t,l.current.canvas.height=320,l.current.canvas.style.width=320*t+"px",l.current.canvas.style.height="320px",e.fillRect(0,0,l.current.canvas.width,l.current.canvas.height),l.current.glowImage=new Image,l.current.glowImage.src="/glow.png";let n=new u.CanvasTexture(l.current.canvas);l.current.texture=n,document.body.contains(l.current.canvas)&&l.current.canvas.remove();let r={width:window.innerWidth,height:window.innerHeight},a=e=>{l.current.screenCursor||(l.current.screenCursor=new u.Vector2),l.current.screenCursor.x=e.clientX/r.width*2-1,l.current.screenCursor.y=-(e.clientY/r.height*2)+1};return window.addEventListener("pointermove",a),()=>{l.current.canvas.remove(),window.removeEventListener("pointermove",a)}},[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("group",{children:[(0,r.jsxs)("mesh",{onClick:()=>{let e=l.current.context;if(!e)return;let t=.4*l.current.canvas.width;e.globalCompositeOperation="lighten",e.globalAlpha=1,e.drawImage(l.current.glowImage,l.current.canvasCursor.x-.5*t,l.current.canvasCursor.y-.5*t,t,t)},ref:a,onPointerMove:e=>{n.current.x=e.point.x,n.current.y=e.point.y,n.current.z=e.point.z,i.uniforms.uMouse.value.x=e.point.x,i.uniforms.uMouse.value.y=e.point.y,i.uniforms.uMouse.value.z=e.point.z,l.current.canvasCursor||(l.current.canvasCursor=new u.Vector2),l.current.canvasCursor.x=e.uv.x*l.current.canvas.width,l.current.canvasCursor.y=(1-e.uv.y)*l.current.canvas.height},onPointerOut:()=>{i.uniforms.uMouse.value.x=-150,i.uniforms.uMouse.value.y=-150,i.uniforms.uMouse.value.z=0},position:[0,0,0],rotation:[0,0,0],matrixAutoUpdate:!0,children:[(0,r.jsx)("planeGeometry",{attach:"geometry",args:[e.width,e.height,1]}),(0,r.jsx)("meshBasicMaterial",{attach:"material",color:new u.Color("red"),side:u.DoubleSide})]}),(0,r.jsx)("points",{rotation:[0,0,Math.PI],ref:t,geometry:s,position:[0,0,0],scale:[1,1,1],children:(0,r.jsx)("shaderMaterial",{attach:"material",...i})})]})})});var d=()=>(0,r.jsxs)(s.Xz,{className:i().hero,children:[(0,r.jsx)("ambientLight",{intensity:Math.PI/2}),(0,r.jsx)("spotLight",{position:[10,10,10],angle:.15,penumbra:1,decay:0,intensity:Math.PI}),(0,r.jsx)(l.i,{makeDefault:!0,position:[0,0,0],zoom:35}),(0,r.jsx)("pointLight",{position:[-10,-10,-10],decay:0,intensity:Math.PI}),(0,r.jsx)(m,{})]})},3199:function(e){e.exports={hero:"Hero_hero__ekVvT"}}},function(e){e.O(0,[821,689,522,806,874,762,971,23,744],function(){return e(e.s=5808)}),_N_E=e.O()}]);
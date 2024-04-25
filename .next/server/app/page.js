(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},2772:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>d,pages:()=>l,routeModule:()=>p,tree:()=>u}),r(5480),r(2029),r(5866);var n=r(3191),a=r(8716),s=r(7922),i=r.n(s),o=r(5231),c={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>o[e]);r.d(t,c);let u=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,5480)),"/Users/pashayakubovsky/Desktop/skripta/src/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,2029)),"/Users/pashayakubovsky/Desktop/skripta/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,5866,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["/Users/pashayakubovsky/Desktop/skripta/src/app/page.tsx"],d="/page",m={require:r,loadChunk:()=>Promise.resolve()},p=new n.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},6700:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2994,23)),Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23))},8565:(e,t,r)=>{Promise.resolve().then(r.bind(r,933)),Promise.resolve().then(r.bind(r,6618)),Promise.resolve().then(r.bind(r,8742))},9044:(e,t,r)=>{Promise.resolve().then(r.bind(r,8370))},8370:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(326),a=r(4034);function s(e){return(0,a.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M295.6 163.7c-5.1 5-5.1 13.3-.1 18.4l60.8 60.9H124.9c-7.1 0-12.9 5.8-12.9 13s5.8 13 12.9 13h231.3l-60.8 60.9c-5 5.1-4.9 13.3.1 18.4 5.1 5 13.2 5 18.3-.1l82.4-83c1.1-1.2 2-2.5 2.7-4.1.7-1.6 1-3.3 1-5 0-3.4-1.3-6.6-3.7-9.1l-82.4-83c-4.9-5.2-13.1-5.3-18.2-.3z"},child:[]}]})(e)}var i=r(2559),o=r(5988),c=r(5047),u=r(9313);function l(){let e=(0,c.useRouter)();return(0,n.jsxs)("div",{className:"flex min-h-screen flex-col items-center flex-start bg-black",children:[n.jsx(i.Z,{className:"!w-full !h-[90px] !m-0 text-center shadow-md flex items-center justify-center text-3xl font-bold !bg-black !text-white !relative !z-10",children:"Skripta..."}),(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center w-full h-[80vh] px-4",children:[n.jsx(u.Z,{}),(0,n.jsxs)(o.Z,{onClick:()=>{e.push("/login")},scale:1,className:"!w-fit !relative !z-10",placeholder:void 0,onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,children:["Get Started",n.jsx("div",{className:"",children:n.jsx(s,{className:"w-[2.5rem] h-[2.5rem] text-black"})})]})]})]})}},8742:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(326),a=r(4218),s=r.n(a),i=r(7577),o=r(381),c=r(7580),u=r(7321);let l=({children:e})=>((0,i.useEffect)(()=>{let e=new URL(window.location.href),t=e.searchParams.get("userId");t||(t=localStorage.getItem("userId")),t||(t=Math.random().toString(36).substring(7)+""),localStorage.setItem("userId",t),e.searchParams.set("userId",t),window.history.replaceState({},"",e.toString())}),(0,n.jsxs)(c.Z,{children:[n.jsx(u.Z,{}),(0,n.jsxs)("div",{className:s().className,children:[e,n.jsx(o.x7,{})]})]}))},9313:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(326),a=r(7577),s=r(4998),i=r(2586),o=r(5797),c=r(8652);let u=`
    varying vec3 vColor;
    uniform vec3 uColor;

    void main()
    {
        vec2 uv = gl_PointCoord;
        float distanceToCenter = length(uv - vec2(0.5));

        if(distanceToCenter > 0.5)
            discard;

        gl_FragColor = vec4(vColor, 1.0);
        #include <tonemapping_fragment>
    }
`,l=`
    uniform vec2 uResolution;
    uniform sampler2D uPictureTexture;
    uniform sampler2D uDisplacementTexture;
    uniform float uSize;
    uniform float uTime;
    uniform float uAngleScale;
    uniform float uDisplacementScale;
    uniform float uDisplacementSpeed;
    uniform bool uRandomScale;

    attribute float aIntensity;
    attribute float aAngle;
    attribute float aScale;

    varying vec3 vColor;
    void main() {
        // Displacement
        vec3 newPosition = position;
        vec2 newUv = uv;
        newUv.y = 1.0 - newUv.y;
        newUv.x = 1.0 - newUv.x;
        float displacementIntensity = texture(uDisplacementTexture, newUv).r;
        displacementIntensity = smoothstep(0.1, uDisplacementSpeed, displacementIntensity);

        vec3 displacement = vec3(
            cos(aAngle) * uAngleScale,
            sin(aAngle) * uAngleScale,
            1.0
        );
        displacement = normalize(displacement);
        displacement *= displacementIntensity;
        displacement *= uDisplacementScale;
        displacement *= aIntensity;
        
        newPosition += displacement;


        // Final position
        vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;
        gl_Position = projectedPosition;

        // Point size
        float pz = 0.2 * uResolution.y * uSize * (1.0 / - viewPosition.z);
        if(uRandomScale) {
            pz *= aScale;
        }
        gl_PointSize = pz;

        // Varyings
        vColor = vec3(pow(displacementIntensity, 2.0));
    }
`,d=(0,a.memo)(()=>{let e=(0,a.useRef)(null),t=(0,a.useRef)({x:0,y:0,z:0}),r=(0,a.useRef)(null),i=(0,a.useMemo)(()=>({side:o.DoubleSide,uniforms:{uColor:new o.Uniform(new o.Color("black")),uMouse:new o.Uniform(new o.Vector3(-150,-150,0)),uTime:new o.Uniform(0),uPixelRatio:new o.Uniform(window.devicePixelRatio),uSize:new o.Uniform(1),uResolution:new o.Uniform(new o.Vector2(window.innerWidth,window.innerHeight)),uDisplacementTexture:new o.Uniform(null),uAngleScale:new o.Uniform(1.2),uDisplacementScale:new o.Uniform(.1),uDisplacementSpeed:new o.Uniform(1),uRandomScale:new o.Uniform(!0)},fragmentShader:u,vertexShader:l,transparent:!0,depthWrite:!1,blending:o.AdditiveBlending}),[]),c=(0,a.useMemo)(()=>{let e=new o.BufferGeometry,t=Math.floor(Math.sqrt(2e3/(window.innerWidth/window.innerHeight))),r=Math.ceil(2e3/t),n=new Float32Array(6e3),a=new Float32Array(2e3),s=new Float32Array(2e3),i=new Float32Array(2e3),c=new Float32Array(4e3);for(let e=0;e<2e3;e++){let o=Math.floor(e/r),u=e%r;n[3*e+0]=(u-r/2)*.8,n[3*e+1]=(o-t/2)*.8,n[3*e+2]=-1,a[e]=.1,s[e]=Math.random(),i[e]=Math.random()*Math.PI*2;let l=u/(r-1),d=o/(t-1);c[2*e+0]=l,c[2*e+1]=d}return e.setAttribute("position",new o.BufferAttribute(n,3)),e.setAttribute("aScale",new o.BufferAttribute(a,1)),e.setAttribute("aIntensity",new o.BufferAttribute(s,1)),e.setAttribute("aAngle",new o.BufferAttribute(i,1)),e.setAttribute("uv",new o.BufferAttribute(c,2)),e},[]);(0,s.C)(({clock:e})=>{if(i.uniforms.uMouse.value.x=t.current.x,i.uniforms.uMouse.value.y=t.current.y,i.uniforms.uMouse.value.z=t.current.z,i.uniforms.uTime.value=e.elapsedTime,i.uniforms.uSize.value=1,d.current.context&&(d.current.context.globalCompositeOperation="source-over",d.current.context.globalAlpha=.02,d.current.context.fillRect(0,0,d.current.canvas.width,d.current.canvas.height)),!d.current.canvasCursor)return;let r=d.current.canvasCursorPrevious.distanceTo(d.current.canvasCursor);if(d.current.canvasCursorPrevious.copy(d.current.canvasCursor),d.current.context&&d.current.canvasCursor){let e=.4*d.current.canvas.width;d.current.context.globalCompositeOperation="lighten",d.current.context.globalAlpha=Math.min(.05*r,1),d.current.context.drawImage(d.current.glowImage,d.current.canvasCursor.x-.5*e,d.current.canvasCursor.y-.5*e,e,e)}i.uniforms.uDisplacementTexture.value=d.current.texture,d.current.texture&&(d.current.texture.needsUpdate=!0)});let d=(0,a.useRef)({canvasCursor:new o.Vector2(999999),canvasCursorPrevious:new o.Vector2(999999)});return(0,a.useEffect)(()=>{d.current.canvas=document.createElement("canvas"),d.current.canvas.style.position="fixed",d.current.canvas.style.objectFit="contain",d.current.canvas.style.aspectRatio="1/1",d.current.canvas.style.width="320px",d.current.canvas.style.height="320px",d.current.canvas.style.border="1px solid white",d.current.canvas.style.borderRadius="0.5rem",d.current.canvas.style.top="16px",d.current.canvas.style.left="16px",d.current.canvas.style.zIndex="10",d.current.context=d.current.canvas.getContext("2d");let e=d.current.context;d.current.canvas.width=320,d.current.canvas.height=320,e.fillRect(0,0,d.current.canvas.width,d.current.canvas.height),d.current.glowImage=new Image,d.current.glowImage.src="/glow.png";let t=new o.CanvasTexture(d.current.canvas);d.current.texture=t,document.body.contains(d.current.canvas)&&d.current.canvas.remove();let r={width:window.innerWidth,height:window.innerHeight},n=e=>{d.current.screenCursor||(d.current.screenCursor=new o.Vector2),d.current.screenCursor.x=e.clientX/r.width*2-1,d.current.screenCursor.y=-(e.clientY/r.height*2)+1};return window.addEventListener("pointermove",n),()=>{d.current.canvas.remove(),window.removeEventListener("pointermove",n)}},[]),n.jsx(n.Fragment,{children:(0,n.jsxs)("group",{children:[(0,n.jsxs)("mesh",{ref:r,onPointerMove:e=>{t.current.x=e.point.x,t.current.y=e.point.y,t.current.z=e.point.z,i.uniforms.uMouse.value.x=e.point.x,i.uniforms.uMouse.value.y=e.point.y,i.uniforms.uMouse.value.z=e.point.z,d.current.canvasCursor||(d.current.canvasCursor=new o.Vector2),d.current.canvasCursor.x=e.uv.x*d.current.canvas.width,d.current.canvasCursor.y=(1-e.uv.y)*d.current.canvas.height},onPointerOut:()=>{i.uniforms.uMouse.value.x=-150,i.uniforms.uMouse.value.y=-150,i.uniforms.uMouse.value.z=0},position:[0,0,-1],rotation:[0,0,0],matrixAutoUpdate:!0,children:[n.jsx("planeGeometry",{attach:"geometry",args:[40,20]}),n.jsx("meshBasicMaterial",{attach:"material",color:new o.Color("red"),visible:!1,side:o.DoubleSide})]}),n.jsx("points",{rotation:[0,0,Math.PI],ref:e,geometry:c,position:[0,0,-1],scale:[1,1,1],children:n.jsx("shaderMaterial",{attach:"material",...i})})]})})}),m=()=>(0,n.jsxs)(i.Xz,{className:"!absolute !w-full !h-full ",children:[n.jsx("ambientLight",{intensity:Math.PI/2}),n.jsx("spotLight",{position:[10,10,10],angle:.15,penumbra:1,decay:0,intensity:Math.PI}),n.jsx(c.i,{makeDefault:!0,position:[0,0,0],zoom:40}),n.jsx("pointLight",{position:[-10,-10,-10],decay:0,intensity:Math.PI}),n.jsx(d,{})]})},2029:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u,metadata:()=>o});var n=r(9510),a=r(5317),s=r.n(a);r(5023);var i=r(5782);let o={title:"Skripta",description:""},c=(0,i.default)(()=>r.e(129).then(r.bind(r,8129)),{loadableGenerated:{modules:["app/layout.tsx -> ./pageWrapper"]},ssr:!1});function u({children:e}){return n.jsx("html",{lang:"en",children:n.jsx("body",{className:s().className,children:n.jsx(c,{children:e})})})}},5480:(e,t,r)=>{"use strict";r.r(t),r.d(t,{$$typeof:()=>i,__esModule:()=>s,default:()=>o});var n=r(8570);let a=(0,n.createProxy)(String.raw`/Users/pashayakubovsky/Desktop/skripta/src/app/page.tsx`),{__esModule:s,$$typeof:i}=a;a.default;let o=(0,n.createProxy)(String.raw`/Users/pashayakubovsky/Desktop/skripta/src/app/page.tsx#default`)},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n=r(6621);let a=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,n.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[948,639,621,853],()=>r(2772));module.exports=n})();
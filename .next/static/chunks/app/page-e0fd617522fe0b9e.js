(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9161:function(e,n,t){Promise.resolve().then(t.bind(t,8212))},8212:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return s}});var r=t(7437),i=t(9824),o=t(6642),a=t(6463),u=t(9155);function s(){let e=(0,a.useRouter)();return(0,r.jsx)("div",{className:"flex flex-col items-center flex-start bg-black",children:(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center w-full h-screen px-4",children:[(0,r.jsx)(u.Z,{}),(0,r.jsxs)(o.Z,{onClick:()=>{e.push("/login")},scale:1,className:"!w-fit !relative !z-10",placeholder:void 0,onPointerEnterCapture:void 0,onPointerLeaveCapture:void 0,children:["Get Started",(0,r.jsx)("div",{className:"",children:(0,r.jsx)(i.fNt,{className:"w-[2.5rem] h-[2.5rem] text-black"})})]})]})})}t(2265)},9155:function(e,n,t){"use strict";t.d(n,{Z:function(){return v}});var r=t(7437),i=t(3199),o=t.n(i),a=t(2265),u=t(7647),s=t(3149),c=t(7776),l=t(2087);let m=(0,a.memo)(()=>{let e=(0,a.useRef)(null),n=(0,a.useRef)({x:0,y:0,z:0}),t=(0,a.useRef)(null),i=(0,a.useMemo)(()=>({side:c.DoubleSide,uniforms:{uColor:new c.Uniform(new c.Color("black")),uMouse:new c.Uniform(new c.Vector3(-150,-150,0)),uTime:new c.Uniform(0),uPixelRatio:new c.Uniform(window.devicePixelRatio),uSize:new c.Uniform(1),uResolution:new c.Uniform(new c.Vector2(window.innerWidth,window.innerHeight)),uDisplacementTexture:new c.Uniform(null),uAngleScale:new c.Uniform(1.2),uDisplacementScale:new c.Uniform(.1),uDisplacementSpeed:new c.Uniform(1),uRandomScale:new c.Uniform(!0)},fragmentShader:"#define GLSLIFY 1\nvarying vec3 vColor;\nuniform vec3 uColor;\n\nvoid main()\n{\n    vec2 uv = gl_PointCoord;\n    float distanceToCenter = length(uv - vec2(0.5));\n\n    if(distanceToCenter > 0.5)\n        discard;\n\n    gl_FragColor = vec4(vColor, 1.0);\n    #include <tonemapping_fragment>\n}",vertexShader:"#define GLSLIFY 1\n uniform vec2 uResolution;\nuniform sampler2D uPictureTexture;\nuniform sampler2D uDisplacementTexture;\nuniform float uSize;\nuniform float uTime;\nuniform float uAngleScale;\nuniform float uDisplacementScale;\nuniform float uDisplacementSpeed;\nuniform bool uRandomScale;\n\nattribute float aIntensity;\nattribute float aAngle;\nattribute float aScale;\n\nvarying vec3 vColor;\nvoid main() {\n    // Displacement\n    vec3 newPosition = position;\n    vec2 newUv = uv;\n    newUv.y = 1.0 - newUv.y;\n    newUv.x = 1.0 - newUv.x;\n    float displacementIntensity = texture(uDisplacementTexture, newUv).r;\n    displacementIntensity = smoothstep(0.1, uDisplacementSpeed, displacementIntensity);\n\n    vec3 displacement = vec3(\n        cos(aAngle) * uAngleScale,\n        sin(aAngle) * uAngleScale,\n        1.0\n    );\n    displacement = normalize(displacement);\n    displacement *= displacementIntensity;\n    displacement *= uDisplacementScale;\n    displacement *= aIntensity;\n    \n    newPosition += displacement;\n\n    // Final position\n    vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 projectedPosition = projectionMatrix * viewPosition;\n    gl_Position = projectedPosition;\n\n    // Point size\n    float pz = 0.2 * uResolution.y * uSize * (1.0 / - viewPosition.z);\n    if(uRandomScale) {\n        pz *= aScale;\n    }\n    gl_PointSize = pz;\n\n    // Varyings\n    vColor = vec3(pow(displacementIntensity, 2.0));\n}",transparent:!0,depthWrite:!1,blending:c.AdditiveBlending}),[]),o=(0,a.useMemo)(()=>{let e=new c.BufferGeometry,n=Math.floor(Math.sqrt(2e3/(window.innerWidth/window.innerHeight))),t=Math.ceil(2e3/n),r=new Float32Array(6e3),i=new Float32Array(2e3),o=new Float32Array(2e3),a=new Float32Array(2e3),u=new Float32Array(4e3);for(let e=0;e<2e3;e++){let s=Math.floor(e/t),c=e%t;r[3*e+0]=(c-t/2)*.8,r[3*e+1]=(s-n/2)*.8,r[3*e+2]=-1,i[e]=.1,o[e]=Math.random(),a[e]=Math.random()*Math.PI*2;let l=c/(t-1),m=s/(n-1);u[2*e+0]=l,u[2*e+1]=m}return e.setAttribute("position",new c.BufferAttribute(r,3)),e.setAttribute("aScale",new c.BufferAttribute(i,1)),e.setAttribute("aIntensity",new c.BufferAttribute(o,1)),e.setAttribute("aAngle",new c.BufferAttribute(a,1)),e.setAttribute("uv",new c.BufferAttribute(u,2)),e},[]);(0,u.C)(e=>{let{clock:t}=e;if(i.uniforms.uMouse.value.x=n.current.x,i.uniforms.uMouse.value.y=n.current.y,i.uniforms.uMouse.value.z=n.current.z,i.uniforms.uTime.value=t.elapsedTime,i.uniforms.uSize.value=1,s.current.context&&(s.current.context.globalCompositeOperation="source-over",s.current.context.globalAlpha=.02,s.current.context.fillRect(0,0,s.current.canvas.width,s.current.canvas.height)),!s.current.canvasCursor)return;let r=s.current.canvasCursorPrevious.distanceTo(s.current.canvasCursor);if(s.current.canvasCursorPrevious.copy(s.current.canvasCursor),s.current.context&&s.current.canvasCursor){let e=.4*s.current.canvas.width;s.current.context.globalCompositeOperation="lighten",s.current.context.globalAlpha=Math.min(.05*r,1),s.current.context.drawImage(s.current.glowImage,s.current.canvasCursor.x-.5*e,s.current.canvasCursor.y-.5*e,e,e)}i.uniforms.uDisplacementTexture.value=s.current.texture,s.current.texture&&(s.current.texture.needsUpdate=!0)});let s=(0,a.useRef)({canvasCursor:new c.Vector2(999999),canvasCursorPrevious:new c.Vector2(999999)});return(0,a.useEffect)(()=>{s.current.canvas=document.createElement("canvas"),s.current.canvas.style.position="fixed",s.current.canvas.style.objectFit="contain",s.current.canvas.style.aspectRatio="1/1",s.current.canvas.style.width="320px",s.current.canvas.style.height="320px",s.current.canvas.style.border="1px solid white",s.current.canvas.style.borderRadius="0.5rem",s.current.canvas.style.top="16px",s.current.canvas.style.left="16px",s.current.canvas.style.zIndex="10",s.current.context=s.current.canvas.getContext("2d");let e=s.current.context;s.current.canvas.width=320,s.current.canvas.height=320,e.fillRect(0,0,s.current.canvas.width,s.current.canvas.height),s.current.glowImage=new Image,s.current.glowImage.src="/glow.png";let n=new c.CanvasTexture(s.current.canvas);s.current.texture=n,document.body.contains(s.current.canvas)&&s.current.canvas.remove();let t={width:window.innerWidth,height:window.innerHeight},r=e=>{s.current.screenCursor||(s.current.screenCursor=new c.Vector2),s.current.screenCursor.x=e.clientX/t.width*2-1,s.current.screenCursor.y=-(e.clientY/t.height*2)+1};return window.addEventListener("pointermove",r),()=>{s.current.canvas.remove(),window.removeEventListener("pointermove",r)}},[]),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("group",{children:[(0,r.jsxs)("mesh",{onClick:()=>{let e=s.current.context;if(!e)return;let n=.4*s.current.canvas.width;e.globalCompositeOperation="lighten",e.globalAlpha=1,e.drawImage(s.current.glowImage,s.current.canvasCursor.x-.5*n,s.current.canvasCursor.y-.5*n,n,n)},ref:t,onPointerMove:e=>{n.current.x=e.point.x,n.current.y=e.point.y,n.current.z=e.point.z,i.uniforms.uMouse.value.x=e.point.x,i.uniforms.uMouse.value.y=e.point.y,i.uniforms.uMouse.value.z=e.point.z,s.current.canvasCursor||(s.current.canvasCursor=new c.Vector2),s.current.canvasCursor.x=e.uv.x*s.current.canvas.width,s.current.canvasCursor.y=(1-e.uv.y)*s.current.canvas.height},onPointerOut:()=>{i.uniforms.uMouse.value.x=-150,i.uniforms.uMouse.value.y=-150,i.uniforms.uMouse.value.z=0},position:[0,0,-1],rotation:[0,0,0],matrixAutoUpdate:!0,children:[(0,r.jsx)("planeGeometry",{attach:"geometry",args:[40,20]}),(0,r.jsx)("meshBasicMaterial",{attach:"material",color:new c.Color("red"),visible:!1,side:c.DoubleSide})]}),(0,r.jsx)("points",{rotation:[0,0,Math.PI],ref:e,geometry:o,position:[0,0,-1],scale:[1,1,1],children:(0,r.jsx)("shaderMaterial",{attach:"material",...i})})]})})});var v=()=>(0,r.jsxs)(s.Xz,{className:o().hero,children:[(0,r.jsx)("ambientLight",{intensity:Math.PI/2}),(0,r.jsx)("spotLight",{position:[10,10,10],angle:.15,penumbra:1,decay:0,intensity:Math.PI}),(0,r.jsx)(l.i,{makeDefault:!0,position:[0,0,0],zoom:40}),(0,r.jsx)("pointLight",{position:[-10,-10,-10],decay:0,intensity:Math.PI}),(0,r.jsx)(m,{})]})},3199:function(e){e.exports={hero:"Hero_hero__ekVvT"}}},function(e){e.O(0,[821,689,452,668,642,325,971,23,744],function(){return e(e.s=9161)}),_N_E=e.O()}]);
"use strict";(()=>{var e={};e.id=441,e.ids=[441],e.modules={11185:e=>{e.exports=require("mongoose")},20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},39491:e=>{e.exports=require("assert")},82361:e=>{e.exports=require("events")},57147:e=>{e.exports=require("fs")},13685:e=>{e.exports=require("http")},95687:e=>{e.exports=require("https")},87561:e=>{e.exports=require("node:fs")},84492:e=>{e.exports=require("node:stream")},22037:e=>{e.exports=require("os")},71017:e=>{e.exports=require("path")},85477:e=>{e.exports=require("punycode")},12781:e=>{e.exports=require("stream")},76224:e=>{e.exports=require("tty")},57310:e=>{e.exports=require("url")},73837:e=>{e.exports=require("util")},71267:e=>{e.exports=require("worker_threads")},59796:e=>{e.exports=require("zlib")},38487:(e,t,r)=>{r.r(t),r.d(t,{originalPathname:()=>b,patchFetch:()=>R,requestAsyncStorage:()=>q,routeModule:()=>S,serverHooks:()=>v,staticGenerationAsyncStorage:()=>x});var s={};r.r(s),r.d(s,{DELETE:()=>g,GET:()=>w,POST:()=>h,PUT:()=>f});var i=r(49303),n=r(88716),a=r(60670),o=r(25563),u=r(92831),d=r(25493),p=r(42336);let l=({filmScript:e})=>{let{episodes:t,episodeLength:r,genre:s,subGenre:i,budget:n,primaryStoryLocation:a,desiredPrimaryFilmingLocations:o,mainCharacters:u,storyReference:d,additionalElements:p,desiredPrimaryFilmingLocation:l,language:c,mainCharacterEthnicity:m,emotionalEvents:h,mainCharactersLength:g}=e;return`
      Please create a synopsis for a series that will last ${t} episodes at ${r} minutes each, keeping in mind the budget for production will be ${n}
      It has been requested by the client that the genre of this series should be ${s} 
      and take place in ${a}    
      More specifically, there are various places the show is set in such as a ${o||l}
      The client has stated their preference for certain main characters to be used in the film. The type, age and traits of the characters are as follows:
      ${u.map(e=>`a ${e} 
`)}  
                
      The tone of the story should be a minor reference to the film ${d}        
      Other elements that should be included are: ${p}
      The primary language of the series should be ${c} ${m?`and the main characters should be ${m}`:""}
      ${h&&h.length>0?`The main characters should experience the following emotional events: ${h.join(", ")}`:""}
      ${g?`The main characters should be ${g} in number`:""}
    `};var c=r(87070),m=r(60667);async function h(e){try{await (0,d.Z)();let t=await e.json(),r=e.url.split("/").pop();if(!r)return c.NextResponse.json({message:"id is required"},{status:p.WE.BadRequest});let s=t.history.slice(),i=await o.f.chat.completions.create({model:"gpt-4",messages:s});for(let e of s)e.id||(e.id=Math.random().toString());s.push({...i.choices[0].message,id:Math.random().toString()});let n=await u.Z.findByIdAndUpdate(r,{...t,history:s},{new:!0});return c.NextResponse.json({series:n,message:"Your Series updated"},{status:p.WE.Created})}catch(e){return c.NextResponse.json({message:e},{status:p.WE.BadRequest})}}async function g(e){try{await (0,d.Z)();let t=e.url.split("/").pop();if(!t)return c.NextResponse.json({message:"id is required"},{status:p.WE.BadRequest});let r=await u.Z.findByIdAndDelete(t);return c.NextResponse.json({message:"Your Series deleted",series:r},{status:p.WE.Ok})}catch(e){return c.NextResponse.json({message:e},{status:p.WE.BadRequest})}}async function f(e){try{await (0,d.Z)();let t=await e.json(),r=e.url.split("/").pop();if(!r)return c.NextResponse.json({message:"id is required"},{status:p.WE.BadRequest});let s=await u.Z.findByIdAndUpdate(r,t,{new:!0});return c.NextResponse.json({series:s,message:"Your Series updated"},{status:p.WE.Created})}catch(e){return c.NextResponse.json({message:e},{status:p.WE.BadRequest})}}let y=async(e,t)=>{let r="",s=null;try{try{s=await u.Z.findById(e)}catch(e){}if(s||console.error("Series not found",e),s&&0!==s.length)return{success:!0,data:s};{let e=await m.Z.findOne({userId:t});if(r=l({filmScript:e}),!e)throw Error("No film script found.");let s=[{role:"system",content:`
                        You are a film script creation AI assistant. 
                        Write episodes while understanding that the series should feature one overarching story will mini-arcs throughout. 
                        Each episode should end on a minor or major cliffhanger to keep viewers coming back.
                        
                        Output Format:
                        1. Opening Scene (15% of episode time given by user write actual time in minutes)
                        2. Middle Scenes (50% of episode time given by user write actual time in minutes)
                        3. Climax (15% of episode time given by user write actual time in minutes)
                        4. Ending (15% of episode time given by user write actual time in minutes)

                        On first request always return synopsis of the series;
                       
                        Always return new episode scenario on each request without additional questioning the user.
                        Return rich text field type response.
                        `,id:Math.random().toString()},{role:"user",content:r,id:Math.random().toString()}],i=await u.Z.create({userId:t,filmScriptId:e.id,history:s});return{success:!0,new:!0,data:i}}}catch(e){return console.error(e),{success:!1,message:"An error occurred while generating the response."}}};async function w(e){let t=e.url.split("/").pop()??"";t=t.split("?")[0];let r=new URLSearchParams(e.url.split("?")[1]).get("userId");if(!r)return c.NextResponse.json({error:"userId is required"});try{await (0,d.Z)();let e=await y(t,r),s=e.data;return c.NextResponse.json({data:s,new:e.new})}catch(e){return c.NextResponse.json({error:e})}}let S=new i.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/series/[id]/route",pathname:"/api/series/[id]",filename:"route",bundlePath:"app/api/series/[id]/route"},resolvedPagePath:"/Users/pashayakubovsky/Desktop/skripta/src/app/api/series/[id]/route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:q,staticGenerationAsyncStorage:x,serverHooks:v}=S,b="/api/series/[id]/route";function R(){return(0,a.patchFetch)({serverHooks:v,staticGenerationAsyncStorage:x})}},25563:(e,t,r)=>{r.d(t,{f:()=>n});var s=r(14205);let i=process.env.OPENAI_API_KEY||"",n=new s.ZP.OpenAI({apiKey:i})},60667:(e,t,r)=>{r.d(t,{Z:()=>n});var s=r(11185);let i=new s.Schema({additionalElements:String,budget:String,desiredPrimaryFilmingLocation:String,desiredPrimaryFilmingLocations:String,emotionalEvents:[String],episodeLength:Number,episodes:Number,genre:String,subGenre:String,language:String,mainCharacters:[String],mainCharactersLength:Number,mainCharacterEthnicity:String,primaryStoryLocation:String,storyReference:String,title:String,userId:{type:String,required:!0,unique:!0}},{timestamps:!0,toJSON:{versionKey:!1,virtuals:!0,transform:(e,t)=>{delete t._id}}}),n=s.models.FilmScript||(0,s.model)("FilmScript",i)},92831:(e,t,r)=>{r.d(t,{Z:()=>n});var s=r(11185);let i=new s.Schema({filmScriptId:{type:String,required:!0,unique:!1},userId:{type:String,required:!0},history:{type:JSON,required:!0},name:{type:String,required:!1}},{timestamps:!0,toJSON:{versionKey:!1,virtuals:!0,transform:(e,t)=>{delete t._id}}}),n=s.models.Series||(0,s.model)("Series",i)},25493:(e,t,r)=>{r.d(t,{Z:()=>o});var s=r(11185),i=r.n(s);let n=process.env.MONGO_URI,a={},o=async function(){if(!n)throw Error("Please define the MONGO_URI environment variable inside .env.local");if(a.connection)return a.connection;a.promise||(a.promise=i().connect(n,{bufferCommands:!1}));try{a.connection=await a.promise}catch(e){throw a.promise=void 0,e}return a.connection}}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[948,969,205],()=>r(38487));module.exports=s})();
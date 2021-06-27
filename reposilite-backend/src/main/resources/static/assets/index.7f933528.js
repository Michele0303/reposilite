var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,o=(t,n,a)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,r=(e,r)=>{for(var s in r||(r={}))t.call(r,s)&&o(e,s,r[s]);if(n)for(var s of n(r))a.call(r,s)&&o(e,s,r[s]);return e};import{r as s,d as l,u as d,o as i,c,a as u,b as p,e as m,w as b,f as v,t as f,g,F as w,h,p as x,i as y,j as k,k as I,l as T,m as E,n as M,v as _,J as O,T as j}from"./vendor.43b1e636.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const a=new URL(e,location),o=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,r)=>{const s=new URL(e,a);if(self[t].moduleMap[s])return n(self[t].moduleMap[s]);const l=new Blob([`import * as m from '${s}';`,`${t}.moduleMap['${s}']=m;`],{type:"text/javascript"}),d=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){r(new Error(`Failed to import: ${e}`)),o(d)},onload(){n(self[t].moduleMap[s]),o(d)}});document.head.appendChild(d)})),self[t].moduleMap={}}}("/assets/");const L=s({isDark:!1});function S(){return{theme:L,fetchTheme:()=>{L.isDark="true"===localStorage.getItem("dark-theme")},toggleTheme:()=>{L.isDark=!L.isDark,localStorage.setItem("dark-theme",L.isDark)}}}const $=l({setup(){d({title:window.REPOSILITE_TITLE,description:window.REPOSILITE_DESCRIPTION});const{theme:e,fetchTheme:t}=S();return i((()=>{t()})),{theme:e}}});$.render=function(e,t,n,a,o,r){const s=p("router-view");return m(),c("div",{class:{dark:e.theme.isDark}},[u(s,{class:"min-h-screen dark:bg-black dark:text-white"})],2)};const P={},U={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},V=u("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"},null,-1);P.render=function(e,t){return m(),c("svg",U,[V])};const D={},R={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},B=u("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"},null,-1);D.render=function(e,t){return m(),c("svg",R,[B])};const C={name:"Index",components:{MoonIcon:P,SunIcon:D},setup(){const{theme:e,toggleTheme:t}=S();return{theme:e,toggleTheme:t}},data:()=>({title:window.REPOSILITE_TITLE})},G={class:"bg-white dark:bg-black dark:text-white"},H={class:"container mx-auto flex flex-row py-10 justify-between"},z={class:"text-xl font-medium py-1"},A={class:"flex flex-row mt-0.5"},F=u("div",{class:"border rounded-full py-1 px-6 text-sm dark:border-gray-900"}," Dashboard ",-1);C.render=function(e,t,n,a,o,r){const s=p("router-link"),l=p("SunIcon"),d=p("MoonIcon");return m(),c("header",G,[u("div",H,[u("h1",z,[u(s,{to:"/"},{default:b((()=>[v(f(o.title),1)])),_:1})]),u("nav",A,[u(s,{to:"/dashboard"},{default:b((()=>[F])),_:1}),u("div",{class:"pl-6 py-1 cursor-pointer",onClick:t[1]||(t[1]=e=>a.toggleTheme())},[a.theme.isDark?(m(),c(l,{key:0})):(m(),c(d,{key:1}))])])])])};const K={},J={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},N=u("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1);K.render=function(e,t){return m(),c("svg",J,[N])};const q={components:{GlobeIcon:K}},Q={class:"bg-white dark:bg-black"},W={class:"container mx-auto flex flex-row pt-17 pb-12"},X=u("div",{class:"w-35"},[u("img",{class:"border-2 rounded-full dark:border-gray-700",src:"https://avatars.githubusercontent.com/u/75123628?s=200&v=4"})],-1),Y={class:"flex flex-col justify-center px-10"},Z=u("div",null,[u("p",null,"Public Maven repository for Bookkity organization")],-1),ee={class:"flex flex-row py-2"},te=u("a",{class:"px-3 text-gray-500",href:"https://github.com/bookkity"},"https://github.com/bookkity",-1);q.render=function(e,t,n,a,o,r){const s=p("GlobeIcon");return m(),c("div",Q,[u("div",W,[X,u("div",Y,[Z,u("div",ee,[u(s),te])])])])};const ne=[{name:"Maven",value:"\n<dependency>\n    <groupId>{groupId}</groupId>\n    <artifactId>{artifactId}</artifactId>\n    <version>{version}</version>\n</dependency>"},{name:"Gradle Groovy",value:'implementation "{groupId}:{artifactId}:{version}"'},{name:"Gradle Kotlin",value:'implementation("{groupId:{artifactId}:{version}")'},{name:"Panda",value:"maven:{groupId}/{artifactId}@{version}"},{name:"SBT",value:'libraryDependencies  += "{groupId}" %% "{artifactId}" %% "{version}"'}],ae={setup(){const e=s({selectedTab:ne[0].name});return r({tabs:ne},g(e))}},oe={class:"bg-white dark:bg-black shadow-lg p-7 border rounded-lg border-gray-100 dark:border-gray-900"},re=u("div",{class:"flex flex-row justify-between"},[u("h1",{class:"font-medium pt-2"},"Artifact details"),u("button",{class:"bg-black dark:bg-white text-white dark:text-black px-6 py-1 rounded"},"Download")],-1),se=u("hr",{class:"dark:border-gray-800"},null,-1),le={class:"mt-6 p-4 mr-1 rounded-lg bg-gray-100 dark:bg-hex-090909"},de={class:"text-sm max-w-22"};ae.render=function(e,t,n,a,o,r){const s=p("tab"),l=p("tabs"),d=p("tab-panel"),i=p("tab-panels");return m(),c("div",oe,[re,u(l,{modelValue:e.selectedTab,"onUpdate:modelValue":t[1]||(t[1]=t=>e.selectedTab=t),class:"pt-6"},{default:b((()=>[(m(!0),c(w,null,h(a.tabs,((e,t)=>(m(),c(s,{class:"buildtool py-1 px-2 cursor-pointer",key:`t${t}`,val:e.name,label:e.name,indicator:!0},null,8,["val","label"])))),128))])),_:1},8,["modelValue"]),se,u(i,{modelValue:e.selectedTab,"onUpdate:modelValue":t[2]||(t[2]=t=>e.selectedTab=t),animate:!0},{default:b((()=>[(m(!0),c(w,null,h(a.tabs,((e,t)=>(m(),c(d,{key:`tp${t}`,val:e.name},{default:b((()=>[u("div",le,[u("pre",de,f(e.value.trim()),1)])])),_:2},1032,["val"])))),128))])),_:1},8,["modelValue"])])};const ie={components:{Card:ae},data:()=>({files:["releases","snapshot"]})},ce=u("div",{class:"bg-white dark:bg-black"},[u("div",{class:"container mx-auto"},[u("p",{class:"py-4 font-semibold"},"Index of /")])],-1),ue=u("hr",{class:"border-gray-100 dark:border-gray-900"},null,-1),pe={class:"container mx-auto relative"},me={class:"lg:absolute pt-5 -top-24.5 right-8"},be={class:"pt-2 min-h-90"},ve=u("div",{class:"text-xm pt-1.6"},"⚫",-1),fe={class:"px-6"};ie.render=function(e,t,n,a,o,r){const s=p("Card");return m(),c("div",null,[ce,ue,u("div",null,[u("div",pe,[u("div",me,[u(s)]),u("div",be,[(m(!0),c(w,null,h(o.files,(e=>(m(),c("div",{key:e,class:"flex flex-row py-3"},[ve,u("div",fe,f(e),1)])))),128))])])])])};const ge={components:{Hero:q,Browser:ie}};ge.render=function(e,t,n,a,o,r){const s=p("Hero"),l=p("Browser");return m(),c(w,null,[u(s),u(l,{ref:""},null,512)],64)};const we=[{type:"Maven",snippet:`\n    <repositories>\n        <repository>\n            <name>${window.REPOSILITE_TITLE}</name>\n            <id>${window.REPOSILITE_ID}</id>\n            <url>${window.location}</url>\n        </repository>\n    </repositories>\n    `},{type:"Gradle Groovy",snippet:`\n    maven {\n        url "${window.location}"\n    }\n    `},{type:"Gradle Kotlin",snippet:`\n    maven {\n        url = uri("${window.location}")\n    }\n    `},{type:"Panda",snippet:`\n    repositories: [\n        ${window.location}\n    ]\n    `},{type:"SBT",snippet:`\n    resolvers += "${window.REPOSILITE_TITLE}" at "${window.location}"\n    `}],he={setup:()=>({configurations:we}),methods:{trim(e){const t=e.length-e.trimStart().length-1;return e.split("\n").map((e=>e.substring(t))).join("\n").trim()}}},xe={class:"container mx-auto pt-10 px-6"},ye={class:"text-lg font-bold"},ke={class:"my-5 py-5 px-6 rounded-lg shadow-md bg-gray-50 dark:bg-gray-900"};he.render=function(e,t,n,a,o,r){return m(),c("div",xe,[(m(!0),c(w,null,h(a.configurations,(e=>(m(),c("div",{key:e.type},[u("h1",ye,f(e.type),1),u("pre",ke,f(r.trim(e.snippet)),1)])))),128))])};const Ie={},Te={class:"container mx-auto pt-10 px-6"},Ee=u("i",null,"Endpoints :: soon™",-1);Ie.render=function(e,t){return m(),c("div",Te,[Ee])};const Me=["Overview","Usage","Endpoints"],_e={name:"Index",components:{Header:C,Overview:ge,Usage:he,Endpoints:Ie},setup(){const e=s({selectedMenuTab:Me[0]});return r({menuTabs:Me},g(e))}},Oe=k();x("data-v-c8330b98");const je={class:"container mx-auto"},Le=u("hr",{class:"dark:border-gray-700"},null,-1);y();const Se=Oe(((e,t,n,a,o,r)=>{const s=p("Header"),l=p("tab"),d=p("tabs"),i=p("Overview"),b=p("tab-panel"),v=p("Usage"),f=p("Endpoints"),g=p("tab-panels");return m(),c("div",null,[u(s),u("div",null,[u("div",je,[u(d,{modelValue:e.selectedMenuTab,"onUpdate:modelValue":t[1]||(t[1]=t=>e.selectedMenuTab=t)},{default:Oe((()=>[(m(!0),c(w,null,h(a.menuTabs,((e,t)=>(m(),c(l,{class:"item font-normal",key:`menu${t}`,val:e,label:e,indicator:!0},null,8,["val","label"])))),128))])),_:1},8,["modelValue"])]),Le,u("div",null,[u(g,{modelValue:e.selectedMenuTab,"onUpdate:modelValue":t[2]||(t[2]=t=>e.selectedMenuTab=t),animate:!0},{default:Oe((()=>[u(b,{val:"Overview"},{default:Oe((()=>[u(i)])),_:1}),u(b,{val:"Usage"},{default:Oe((()=>[u(v)])),_:1}),u(b,{val:"Endpoints"},{default:Oe((()=>[u(f)])),_:1})])),_:1},8,["modelValue"])])])])}));_e.render=Se,_e.__scopeId="data-v-c8330b98";const $e={name:"Index",components:{Header:C},methods:{login(){}}},Pe=k();x("data-v-27d98e3f");const Ue={class:"container mx-auto pt-10 px-6 flex justify-center"},Ve={class:"border border-gray-100 dark:border-gray-700 m-w-20 p-10 rounded-2xl shadow-md text-center"},De=u("h1",{class:"font-bold text-xl pb-4"},"Login",-1),Re={class:"flex flex-col w-96"},Be=u("input",{placeholder:"Alias",type:"text",class:"input"},null,-1),Ce=u("input",{placeholder:"Token",type:"password",class:"input"},null,-1),Ge={class:"text-right mt-1"},He=v("← Back to index");y();const ze=Pe(((e,t,n,a,o,r)=>{const s=p("Header"),l=p("router-link");return m(),c("div",null,[u(s),u("div",Ue,[u("div",Ve,[De,u("form",Re,[Be,Ce,u("div",Ge,[u(l,{to:"/",class:"text-blue-400 text-xs"},{default:Pe((()=>[He])),_:1})]),u("div",{class:"bg-gray-100 dark:bg-gray-900 py-2 my-3 cursor-pointer",click:r.login},"Sign in",8,["click"])])])])])}));$e.render=ze,$e.__scopeId="data-v-27d98e3f";const Ae=[{path:"/",name:"Index",component:_e},{path:"/dashboard",name:"Dashboard",component:$e}],Fe=I({history:T(),routes:Ae});E($).use(M()).use(_,O).use(j).use(Fe).mount("#app");

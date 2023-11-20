import{h as e,m as t,o as a,k as i,a as s,p as l,q as o,ar as n,as as r,F as c,l as d,t as p,c as m,at as u,d as f,e as x}from"./vendor.78461187.js";import{f as v}from"./fireAPI.d6c112e0.js";import{a as h,c as w}from"./app.6e8926da.js";import{_ as y}from"./ClinicsSlideOver.b73c22e5.js";import{_ as g}from"./ButtonInput.cc47249f.js";import"./LoadingSpinner.f2e737a5.js";const b={class:"flex flex-col my-4"},k={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},C={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},j={class:"overflow-hidden border-b border-appromed sm:rounded-lg"},I={class:"min-w-full divide-y divide-appromed"},R={class:"bg-white"},_=s("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-appromed uppercase tracking-wider"}," Name ",-1),L={scope:"col",class:"relative px-6 py-3 ml-auto"},E=s("span",{class:"text-white group-hover:text-gray-200 font-normal"},"Hinzufügen",-1),N={class:"bg-white divide-y divide-appromed"},V={class:"px-6 py-4 whitespace-nowrap text-sm font-medium text-appromed-dark"},B={class:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium flex gap-x-2 justify-end items-center"},K=x(" UNVERIFIZIERT "),O=["onClick"],q={class:"bg-white divide-y divide-appromed"},F={class:"px-6 py-4 whitespace-nowrap text-sm font-medium text-appromed-dark"},H={class:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium"},S=["onClick"],U={__name:"clinics",setup(x){e();const w=t(""),U=e=>{h.clinics_slide_over.data=e,h.clinics_slide_over.open=!0};return(e,t)=>{const x=g,z=y;return a(),i(c,null,[s("div",b,[s("div",k,[s("div",C,[s("div",j,[l(x,{modelValue:w.value,"onUpdate:modelValue":t[0]||(t[0]=e=>w.value=e),onClick:t[1]||(t[1]=e=>(async()=>{if(!w.value.length)return;const[e,t]=await v("/api/v2/medching/admins/clinics/search",{query:w.value});if(t)return console.log(t),403==t.code?window.location.href="/admins/login":alert("ERROR");e.value.clinics.length&&(h.clinics=e.value.clinics)})()),icon:o(n),placeholder:"Nach Kliniknamen suchen",class:"my-3 pl-1"},null,8,["modelValue","icon"]),s("table",I,[s("thead",R,[s("tr",null,[_,s("th",L,[s("button",{type:"button",class:"flex items-center justify-center gap-2 bg-appromed rounded py-1.5 px-3 ml-auto",onClick:t[2]||(t[2]=e=>(async()=>{const[e,t]=await v("/api/v2/medching/admins/clinics/add",{name:"MEDCHING KLINIK"},!0);if(t)return console.log(t),403==t.code?window.location.href="/admins/login":alert("ERROR");h.clinics.push(e.value)})())},[l(o(r),{class:"text-white group-hover:text-gray-200 w-6 h-6"}),E])])])]),s("tbody",N,[(a(!0),i(c,null,d(o(h).clinics.filter((e=>!w.value.length||e.name.toLowerCase().includes(w.value.toLowerCase()))).filter((e=>0==e.verified)),((e,t)=>(a(),i("tr",{key:t},[s("td",V,p(e.name),1),s("td",B,[K,0==(null==e?void 0:e.verified)?(a(),m(o(u),{key:0,class:"text-appromed w-6 h-6"})):f("",!0),s("button",{type:"button",onClick:t=>U(e),class:"text-appromed hover:text-appromed"},"Bearbeiten",8,O)])])))),128))]),s("tbody",q,[(a(!0),i(c,null,d(o(h).clinics.filter((e=>!w.value.length||e.name.toLowerCase().includes(w.value.toLowerCase()))).filter((e=>1==e.verified)),((e,t)=>(a(),i("tr",{key:t},[s("td",F,p(e.name),1),s("td",H,[s("button",{type:"button",onClick:t=>U(e),class:"text-appromed hover:text-appromed"},"Bearbeiten",8,S)])])))),128))])])])])])]),l(z)],64)}}};"function"==typeof w&&w(U);export{U as default};

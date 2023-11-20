import{h as e,o as a,k as o,a as t,q as r,c as l,b as s}from"./vendor.78461187.js";import{a as d}from"./app.6e8926da.js";import{_ as n}from"./LoadingSpinner.f2e737a5.js";const i={class:"mt-1 flex rounded-md"},u={class:"relative flex flex-grow items-stretch focus-within:z-10"},c={class:"pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"},p=["value","placeholder"],m=["disabled"],g={__name:"ButtonInput",props:["modelValue","icon","placeholder","disabled"],emits:["update:modelValue","click"],setup:g=>(e(),(e,b)=>{const f=n;return a(),o("div",null,[t("div",i,[t("div",u,[t("div",c,[r(d).loading?(a(),l(f,{key:1})):(a(),l(s(g.icon),{key:0,class:"h-5 w-5 text-gray-400","aria-hidden":"true"}))]),t("input",{type:"text",name:"text",id:"text",value:g.modelValue,onInput:b[0]||(b[0]=a=>e.$emit("update:modelValue",a.target.value)),class:"block w-full rounded-none rounded-l-md border-gray-300 pl-10 focus:border-appromed focus:ring-appromed sm:text-sm",placeholder:g.placeholder||"Nach Zusatzbezeichnung, Position, Vor- oder Nachname suchen"},null,40,p)]),t("button",{type:"button",disabled:g.disabled||!1,onClick:b[1]||(b[1]=a=>e.$emit("click")),class:"disabled:bg-gray-700 relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-appromed focus:outline-none focus:ring-1 focus:ring-appromed"},[r(d).loading?(a(),l(f,{key:1})):(a(),l(s(g.icon),{key:0,class:"h-5 w-5 text-gray-400","aria-hidden":"true"}))],8,m)])])})};export{g as _};

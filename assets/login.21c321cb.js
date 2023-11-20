import{h as e,m as s,o as t,k as a,a as l,M as o,N as i}from"./vendor.78461187.js";import{c as n,d as r,a as u}from"./app.6e8926da.js";import{f as d}from"./fireAPI.d6c112e0.js";const m={class:"flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8"},c=l("div",{class:"sm:mx-auto sm:w-full sm:max-w-sm"},[l("img",{class:"mx-auto h-10 w-auto",src:r}),l("h2",{class:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"},"Sign in to your account")],-1),p={class:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm"},g={class:"space-y-6"},f=l("label",{for:"id",class:"block text-sm font-medium leading-6 text-gray-900"},"Hunter ID oder Username",-1),x={class:"mt-2"},v=l("label",{for:"password",class:"block text-sm font-medium leading-6 text-gray-900"},"Password",-1),y={class:"mt-2"},b={__name:"login",setup(n){const r=e(),b=s(""),w=s(""),h=async()=>{u.ticket=null,u.admin=null,u.hunter=null;const[e,s]=await d("/api/v2/medching/hunters/login",{id:b.value,password:w.value},!0);if(s)return console.log(s),alert("ERROR");u.hunter=e.value.hunter,u.ticket=e.value.ticket,u.admin=void 0,r.push("/hunters/docs")};return(e,s)=>(t(),a("div",m,[c,l("div",p,[l("div",g,[l("div",null,[f,l("div",x,[o(l("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>b.value=e),id:"id",name:"id",type:"text",autocomplete:"id",required:"",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-appromed sm:text-sm sm:leading-6"},null,512),[[i,b.value]])])]),l("div",null,[v,l("div",y,[o(l("input",{"onUpdate:modelValue":s[1]||(s[1]=e=>w.value=e),id:"password",name:"password",type:"password",autocomplete:"password",required:"",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-appromed sm:text-sm sm:leading-6"},null,512),[[i,w.value]])])]),l("div",null,[l("button",{type:"button",onClick:h,class:"flex w-full justify-center rounded-md bg-appromed px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-appromed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-appromed"},"Sign in")])])])]))}};"function"==typeof n&&n(b);export{b as default};

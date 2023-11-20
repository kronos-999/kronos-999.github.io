import{h as e,o as l,k as t,a as s,p as a,q as i,ai as r,e as o,m as n,M as d,N as u,t as c,c as m,b as p,d as f,C as x,J as v,aj as g,ak as b,al as w,am as y,w as h,F as k,l as _,an as j,v as V,r as R,x as q,ao as C,ap as U}from"./vendor.78461187.js";import{f as P}from"./fireAPI.d6c112e0.js";import{c as S,d as I,a as L,e as z}from"./app.6e8926da.js";const E={class:"mt-6"},F={href:"/clinics/request",class:"flex justify-center items-center w-full rounded-md border border-transparent bg-appromed px-4 py-2 text-base font-medium text-white hover:bg-appromed-dark focus:outline-none focus:ring-2 focus:ring-appromed focus:ring-offset-2 sm:text-sm"},M=o(" Hier klicken und Klinik verifizieren lassen "),K={__name:"RegisterFormClinics",setup:o=>(e(),(e,o)=>(l(),t("div",E,[s("a",F,[M,a(i(r),{class:"mx-2 h-4 w-4 text-white"})])])))},A={class:"flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8"},D=s("div",{class:"sm:mx-auto sm:w-full sm:max-w-sm"},[s("img",{class:"mx-auto h-10 w-auto",src:I}),s("h2",{class:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"},"Klinik Login")],-1),O={class:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm"},H={class:"space-y-6"},J=s("label",{for:"id",class:"block text-sm font-medium leading-6 text-gray-900"},"Clinic ID oder Username",-1),N={class:"mt-2"},$=s("label",{for:"password",class:"block text-sm font-medium leading-6 text-gray-900"},"Password",-1),B={class:"mt-2"},G={__name:"LoginFormClinics",setup(a){const i=e(),r=n(""),o=n(""),c=async()=>{const[e,l]=await P("/api/v2/medching/clinics/login",{id:r.value,password:o.value},!0);if(l)return console.log(l),alert("ERROR");L.clinic.data=e.value.clinic,L.ticket=e.value.ticket,L.admin=void 0,i.push("/clinics/docs")};return(e,a)=>(l(),t("div",A,[D,s("div",O,[s("div",H,[s("div",null,[J,s("div",N,[d(s("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>r.value=e),id:"id",name:"id",type:"text",autocomplete:"id",required:"",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-appromed sm:text-sm sm:leading-6"},null,512),[[u,r.value]])])]),s("div",null,[$,s("div",B,[d(s("input",{"onUpdate:modelValue":a[1]||(a[1]=e=>o.value=e),id:"password",name:"password",type:"password",autocomplete:"password",required:"",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-appromed sm:text-sm sm:leading-6"},null,512),[[u,o.value]])])]),s("div",null,[s("button",{type:"button",onClick:c,class:"flex w-full justify-center rounded-md bg-appromed px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-appromed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-appromed"},"Sign in")])])])]))}};"function"==typeof S&&S(G);const Q=["for"],T={class:"relative mt-1 rounded-md"},W=["required","type","value","placeholder","id","name"],X={class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"},Y={key:0,class:"mt-2 text-sm text-red-600"},Z={__name:"IconInput",props:["modelValue","icon","label","type","required","placeholder","has_error","error_text"],emits:["update:modelValue"],setup:a=>(e(),(e,i)=>(l(),t("div",null,[s("label",{for:a.label,class:"block text-sm font-medium text-gray-700"},c(a.label),9,Q),s("div",T,[s("input",{required:a.required||!1,type:a.type||"text",value:a.modelValue,onInput:i[0]||(i[0]=l=>e.$emit("update:modelValue",l.target.value)),class:"block w-full rounded-md border-appromed p-3 pr-10 focus:border-appromed focus:ring-appromed sm:text-sm",placeholder:a.placeholder,id:a.label,name:a.label},null,40,W),s("div",X,[(l(),m(p(a.icon),{class:"h-5 w-5 text-gray-400","aria-hidden":"true"}))]),1==a.has_error?(l(),t("p",Y,c(a.error_text),1)):f("",!0)])])))},ee={class:"flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8"},le=s("div",{class:"sm:mx-auto sm:w-full sm:max-w-sm"},[s("img",{class:"mx-auto h-10 w-auto",src:I}),s("h2",{class:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"},"Ärzte Registrierung")],-1),te={class:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm"},se=["onSubmit"],ae=["disabled"],ie={__name:"RegisterFormDocs",setup(r){const o=e(),d=n(""),u=n(""),c=n(""),m=x((()=>!d.value.length||!u.value.length||!c.value.length||u.value!==c.value)),p=async()=>{const[e,l]=await P("/api/v2/medching/docs/register",{email:d.value,password:u.value},!0);if(l)return console.log(l),alert("ERROR");L.doc=e.value.doc,L.ticket=e.value.ticket,L.admin=void 0,o.push("/docs/clinics")};return(e,r)=>{const o=Z;return l(),t("div",ee,[le,s("div",te,[s("form",{onSubmit:v(p,["prevent"]),class:"space-y-6"},[a(o,{modelValue:d.value,"onUpdate:modelValue":r[0]||(r[0]=e=>d.value=e),type:"text",required:!0,label:"Email"},null,8,["modelValue"]),a(o,{modelValue:u.value,"onUpdate:modelValue":r[1]||(r[1]=e=>u.value=e),type:"password",required:!0,label:"Passwort",error_text:u.value!==c.value?"Passwort muss 2 Mal gleich eingegeben werden":"",has_error:u.value!==c.value},null,8,["modelValue","error_text","has_error"]),a(o,{modelValue:c.value,"onUpdate:modelValue":r[2]||(r[2]=e=>c.value=e),type:"password",required:!0,label:"Passwort wiederholen",error_text:c.value!==u.value?"Passwort muss 2 Mal gleich eingegeben werden":"",has_error:c.value!==u.value},null,8,["modelValue","error_text","has_error"]),s("div",null,[s("button",{type:"submit",disabled:i(m),class:"flex w-full justify-center rounded-md bg-appromed px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-appromed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-appromed"},"Sign in",8,ae)])],40,se)])])}}};"function"==typeof S&&S(ie);const re={class:"flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8"},oe=s("div",{class:"sm:mx-auto sm:w-full sm:max-w-sm"},[s("img",{class:"mx-auto h-10 w-auto",src:I}),s("h2",{class:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"},"Ärzte Login")],-1),ne={class:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm"},de={class:"space-y-6"},ue=s("label",{for:"id",class:"block text-sm font-medium leading-6 text-gray-900"},"Email",-1),ce={class:"mt-2"},me=s("label",{for:"password",class:"block text-sm font-medium leading-6 text-gray-900"},"Password",-1),pe={class:"mt-2"},fe={__name:"LoginFormDocs",setup(a){const i=e(),r=n(""),o=n(""),c=async()=>{const[e,l]=await P("/api/v2/medching/docs/login",{id:r.value,password:o.value},!0);if(l)return console.log(l),alert("ERROR");L.doc=e.value.doc,L.ticket=e.value.ticket,L.admin=null,i.push("/docs/clinics")};return(e,a)=>(l(),t("div",re,[oe,s("div",ne,[s("div",de,[s("div",null,[ue,s("div",ce,[d(s("input",{"onUpdate:modelValue":a[0]||(a[0]=e=>r.value=e),id:"id",name:"id",type:"text",autocomplete:"id",required:"",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-appromed sm:text-sm sm:leading-6"},null,512),[[u,r.value]])])]),s("div",null,[me,s("div",pe,[d(s("input",{"onUpdate:modelValue":a[1]||(a[1]=e=>o.value=e),id:"password",name:"password",type:"password",autocomplete:"password",required:"",class:"block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-appromed sm:text-sm sm:leading-6"},null,512),[[u,o.value]])])]),s("div",null,[s("button",{type:"button",onClick:c,class:"flex w-full justify-center rounded-md bg-appromed px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-appromed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-appromed"},"Sign in")])])])]))}};"function"==typeof S&&S(fe);const xe={class:"min-h-screen bg-white flex"},ve={class:"flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"},ge={class:"mx-auto w-full max-w-sm lg:w-96"},be={key:0},we=s("img",{class:"h-28 w-auto mx-auto",src:I},null,-1),ye=s("h2",{class:"mt-6 text-3xl font-extrabold text-appromed-dark"}," Melden Sie sich an ",-1),he={class:"mt-2 text-sm text-appromed-dark"},ke=o(" und "+c(" ")+" "),_e=o(" finden Sie Ihren Match "),je={key:1,class:"mt-8"},Ve=V('<div class="mt-2 relative"><div class="absolute inset-0 flex items-center" aria-hidden="true"><div class="w-full border-t border-appromed"></div></div><div class="relative flex justify-center text-sm"><span class="px-2 bg-white text-appromed"> Arzt / Krankenhaus </span></div></div>',1),Re={class:"mt-1"},qe={class:"text-xs dark:text-white"},Ce={key:0,class:"mt-2 relative"},Ue=[s("div",{class:"absolute inset-0 flex items-center","aria-hidden":"true"},[s("div",{class:"w-full border-t border-appromed"})],-1),s("div",{class:"relative flex justify-center text-sm"},[s("span",{class:"px-2 bg-white text-appromed"}," Login / Registrierung ")],-1)],Pe={class:"text-xs dark:text-white"},Se=s("div",{class:"hidden lg:block relative w-0 flex-1"},[s("img",{class:"absolute inset-0 h-full w-full object-cover object-left",src:z})],-1),Ie={__name:"auth",setup(r){e();const o=n([{id:1,label:"Arzt",icon:g},{id:2,label:"Krankenhaus",icon:b}]),d=n([{id:1,label:"Login",icon:w},{id:2,label:"Registrierung",icon:y}]),u=n(void 0),x=n(void 0);return(e,r)=>{const n=R("router-link"),v=fe,g=ie,b=G,w=K;return l(),t("div",xe,[s("div",ve,[s("div",ge,[u.value&&x.value?f("",!0):(l(),t("div",be,[we,ye,s("p",he,[ke,a(n,{to:"#",class:"font-medium text-slate-600 hover:text-slate-500"},{default:h((()=>[_e])),_:1})])])),u.value&&x.value?f("",!0):(l(),t("div",je,[s("div",null,[s("div",null,[Ve,s("div",Re,[a(i(j),{class:"flex w-full justify-between overflow-x-hidden"},{default:h((()=>[(l(!0),t(k,null,_(o.value,(e=>(l(),m(i(U),{class:"flex w-full min-w-min m-3 whitespace-nowrap",key:e.id,as:"template",onClick:l=>u.value=e.id},{default:h((()=>[s("div",{class:q([e.id==u.value?"bg-appromed text-white":"text-appromed","flex justify-center relative border border-appromed rounded-lg p-3 cursor-pointer focus:outline-none"])},[a(i(C),{as:"p",class:"text-base font-medium flex w-full justify-center gap-x-3 items-center"},{default:h((()=>[(l(),m(p(e.icon),{class:"h-5 w-5","aria-hidden":"true"})),s("span",qe,c(e.label),1)])),_:2},1024)],2)])),_:2},1032,["onClick"])))),128))])),_:1})])]),u.value?(l(),t("div",Ce,Ue)):f("",!0),u.value?(l(),m(i(j),{key:1,class:"flex w-full justify-between overflow-x-hidden"},{default:h((()=>[(l(!0),t(k,null,_(d.value,(e=>(l(),m(i(U),{class:"flex w-full min-w-min m-3 whitespace-nowrap",key:e.id,as:"template",onClick:l=>x.value=e.id},{default:h((()=>[s("div",{class:q([e.id==x.value?"bg-appromed text-white":"text-appromed","flex justify-center relative border border-appromed rounded-lg p-3 cursor-pointer focus:outline-none"])},[a(i(C),{as:"p",class:"text-base font-medium flex w-full justify-center gap-x-3 items-center"},{default:h((()=>[(l(),m(p(e.icon),{class:"h-5 w-5","aria-hidden":"true"})),s("span",Pe,c(e.label),1)])),_:2},1024)],2)])),_:2},1032,["onClick"])))),128))])),_:1})):f("",!0)])])),1==u.value&&1==x.value?(l(),m(v,{key:2})):f("",!0),1==u.value&&2==x.value?(l(),m(g,{key:3})):f("",!0),2==u.value&&1==x.value?(l(),m(b,{key:4})):f("",!0),2==u.value&&2==x.value?(l(),m(w,{key:5})):f("",!0)])]),Se])}}};"function"==typeof S&&S(Ie);export{Ie as default};

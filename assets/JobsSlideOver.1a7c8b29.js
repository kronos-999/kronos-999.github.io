import{m as e,h as a,o as d,c as s,w as t,p as o,a as l,q as r,ae as p,af as i,ag as n,e as m,t as c,Q as u,M as f,N as b,k as x,d as v,R as _,I as y}from"./vendor.78461187.js";import{a as k}from"./app.6e8926da.js";import{f as j}from"./fireAPI.d6c112e0.js";const w={class:"absolute inset-0 overflow-hidden"},h={class:"fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16"},g={class:"w-screen max-w-2xl"},q={class:"h-full flex flex-col bg-white shadow-xl overflow-y-scroll"},U={class:"px-4 py-6 sm:px-6"},V={class:"flex items-start justify-between"},C={class:"ml-3 h-7 flex items-center"},I=l("span",{class:"sr-only"},"Close panel",-1),R={class:"divide-y divide-appromed"},A={class:"pb-6"},D={class:"mt-4 flow-root px-4 sm:flex sm:items-end sm:px-6"},J={class:"mt-4 sm:ml-6 sm:flex-1"},L={class:"col-span-2 my-3"},M=l("label",{for:"data.name",class:"block text-sm font-medium text-appromed-dark dark:text-appromed"},"Titel",-1),O={class:"mt-1"},P={class:"col-span-2 my-3 lg:col-span-full"},S=l("div",{class:"flex justify-between"},[l("label",{for:"data.address",class:"block text-sm font-medium text-appromed-dark dark:text-appromed"},"Addresse")],-1),E={class:"mt-1"},G=["href"],K={class:"col-span-2 my-3 lg:col-span-full"},N=l("div",{class:"flex justify-between"},[l("label",{for:"data.address",class:"block text-sm font-medium text-appromed-dark dark:text-appromed"},"Position")],-1),Q={class:"mt-1"},T={class:"col-span-2 my-3"},z=l("div",{class:"flex justify-between"},[l("label",{for:"data.contact",class:"block text-sm font-medium text-appromed-dark dark:text-appromed"},"Ansprechpartner")],-1),B={class:"mt-1"},F={class:"col-span-2 my-3"},H=l("div",{class:"flex justify-between"},[l("label",{for:"data.contact",class:"block text-sm font-medium text-appromed-dark dark:text-appromed"},"Klinik")],-1),W={class:"mt-1"},X={class:"col-span-2 my-3 lg:col-span-full"},Y=l("div",{class:"flex justify-between"},[l("label",{for:"data.address",class:"block text-sm font-medium text-appromed-dark dark:text-appromed"},"Datum")],-1),Z={class:"mt-1"},$={class:"col-span-2 my-3 lg:col-span-full"},ee=l("div",{class:"flex justify-between"},[l("label",{for:"data.address",class:"block text-sm font-medium text-appromed-dark dark:text-appromed"},"Link")],-1),ae={class:"mt-1"},de=["disabled"],se={__name:"JobsSlideOver",setup(se){e(""),a();return(e,a)=>(d(),s(r(y),{as:"template",show:1==r(k).jobs_slide_over.open&&!!r(k).jobs_slide_over.data},{default:t((()=>[o(r(_),{as:"div",static:"",class:"fixed inset-0 overflow-hidden",onClose:a[10]||(a[10]=e=>r(k).jobs_slide_over.open=!1),open:1==r(k).jobs_slide_over.open},{default:t((()=>[l("div",w,[o(r(p),{class:"absolute inset-0"}),l("div",h,[o(r(i),{as:"template",enter:"transform transition ease-in-out duration-500 sm:duration-700","enter-from":"translate-x-full","enter-to":"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700","leave-from":"translate-x-0","leave-to":"translate-x-full"},{default:t((()=>[l("div",g,[l("div",q,[l("div",U,[l("div",V,[o(r(n),{class:"text-lg font-medium text-appromed"},{default:t((()=>[m(" Job ID: "+c(r(k).jobs_slide_over.data.id),1)])),_:1}),l("div",C,[l("button",{class:"bg-white rounded-md text-appromed-light hover:text-appromed focus:ring-2 focus:ring-appromed",onClick:a[0]||(a[0]=e=>r(k).jobs_slide_over.open=!1)},[I,o(r(u),{class:"h-6 w-6","aria-hidden":"true"})])])])]),l("div",R,[l("div",A,[l("div",D,[l("div",J,[l("div",L,[M,l("div",O,[f(l("input",{"onUpdate:modelValue":a[1]||(a[1]=e=>r(k).jobs_slide_over.data.title=e),required:"",type:"text",name:"data.name",id:"data.name",autocomplete:"data.name",class:"py-3 px-4 block w-full text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md"},null,512),[[b,r(k).jobs_slide_over.data.title]])])]),l("div",P,[S,l("div",E,[f(l("input",{"onUpdate:modelValue":a[2]||(a[2]=e=>r(k).jobs_slide_over.data.city=e),required:"",id:"data.address",name:"data.address",type:"text",autocomplete:"data.address",class:"py-3 px-4 block w-full text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md"},null,512),[[b,r(k).jobs_slide_over.data.city]])]),l("a",{target:"_blank",href:"https://www.google.com/maps/search/?api=1&query="+encodeURI(r(k).jobs_slide_over.data.city),class:"flex justify-center w-full px-3 py-2 bg-appromed hover:bg-appromed-dark text-white rounded mt-4"}," In Google Maps öffnen ",8,G)]),l("div",K,[N,l("div",Q,[f(l("input",{"onUpdate:modelValue":a[3]||(a[3]=e=>r(k).jobs_slide_over.data.position=e),required:"",id:"data.address",name:"data.address",type:"text",autocomplete:"data.address",class:"py-3 px-4 block w-full text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md"},null,512),[[b,r(k).jobs_slide_over.data.position]])])]),l("div",T,[z,l("div",B,[f(l("input",{"onUpdate:modelValue":a[4]||(a[4]=e=>r(k).jobs_slide_over.data.contact=e),required:"",name:"data.contact",id:"data.contact",type:"text",class:"py-3 px-4 block w-full text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md","aria-describedby":"phone-optional"},null,512),[[b,r(k).jobs_slide_over.data.contact]])])]),l("div",F,[H,l("div",W,[f(l("input",{"onUpdate:modelValue":a[5]||(a[5]=e=>r(k).jobs_slide_over.data.clinic=e),required:"",name:"data.contact",id:"data.contact",type:"text",class:"py-3 px-4 block w-full text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md","aria-describedby":"phone-optional"},null,512),[[b,r(k).jobs_slide_over.data.clinic]])])]),l("div",X,[Y,l("div",Z,[f(l("input",{"onUpdate:modelValue":a[6]||(a[6]=e=>r(k).jobs_slide_over.data.date=e),required:"",id:"data.address",name:"data.address",type:"text",autocomplete:"data.address",class:"py-3 px-4 block w-full text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md"},null,512),[[b,r(k).jobs_slide_over.data.date]])])]),l("div",$,[ee,l("div",ae,[f(l("input",{"onUpdate:modelValue":a[7]||(a[7]=e=>r(k).jobs_slide_over.data.link=e),required:"",id:"data.address",name:"data.address",type:"text",autocomplete:"data.address",class:"py-3 px-4 block w-full text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md"},null,512),[[b,r(k).jobs_slide_over.data.link]])])]),l("button",{type:"button",onClick:a[8]||(a[8]=e=>(async()=>{const e=k.hunter?"/api/v2/medching/hunters/jobs/update":"/api/v2/medching/admins/jobs/update",[a,d]=await j(e,k.jobs_slide_over.data,!1);if(d)return console.log(d),403==d.code?window.location.href="/admins/login":alert("ERROR");k.jobs_slide_over.open=!1})()),disabled:!r(k).jobs_slide_over.data.clinic,class:"w-full px-3 py-2 bg-appromed hover:bg-appromed-dark text-white rounded mt-12"}," Speichern ",8,de),r(k).admin?(d(),x("button",{key:0,type:"button",onClick:a[9]||(a[9]=e=>(async({id:e})=>{await j("/api/v2/medching/admins/jobs/cut",{id:e},!1),k.jobs=k.jobs.filter((a=>a.id!==e)),k.jobs_slide_over.open=!1})({id:r(k).jobs_slide_over.data.id})),class:"w-full px-3 py-2 bg-red-600 text-white rounded mt-12"}," Löschen ")):v("",!0)])])])])])])])),_:1})])])])),_:1},8,["open"])])),_:1},8,["show"]))}};export{se as _};

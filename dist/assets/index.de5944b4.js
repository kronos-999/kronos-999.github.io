import{o as e,g as i,a as n,t as a,u as r,M as d,O as l,j as o}from"./vendor.669405f7.js";import{_ as m}from"./EditableTable.ec482aab.js";import{a as t,t as s,b as c,f as p}from"./app.390248d5.js";const u={class:"contents"},h={class:"w-full"},g={class:"h-full flex flex-col bg-white overflow-y-scroll w-full"},f=n("div",{class:"px-4 py-6 sm:px-6"},null,-1),k={class:"divide-y divide-appromed"},b={class:"pb-6"},x={class:"mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6 lg:-mt-15"},y={class:"mt-12 sm:ml-6 sm:flex-1"},_={class:"flex items-center"},v={class:"font-bold text-xl text-appromed sm:text-2xl"},z={class:"text-sm text-appromed"},P={class:"col-span-2 my-3"},w={for:"clinic_form.name",class:"block text-sm font-medium text-appromed-dark dark:text-appromed"},I={class:"mt-1"},A={class:"col-span-2 my-3"},N={for:"clinic_form.partnership",class:"block text-sm font-medium text-appromed-dark dark:text-appromed"},K={class:"mt-1"},M={class:"col-span-2 my-3 lg:col-span-full"},S={class:"flex justify-between"},C={for:"clinic_form.address",class:"block text-sm font-medium text-appromed-dark dark:text-appromed"},U={class:"mt-1"},j={class:"col-span-2 my-3 lg:col-span-1"},G={class:"flex justify-between"},H={for:"clinic_form.beds",class:"block text-sm font-medium text-appromed-dark dark:text-appromed"},V={class:"mt-1"},O={class:"col-span-2 my-3 lg:col-span-1"},T={class:"flex justify-between"},q={for:"clinic_form.patients",class:"block text-sm font-medium text-appromed-dark dark:text-appromed"},F={class:"mt-1"},R={class:"col-span-2 my-3 lg:col-span-1"},B={class:"flex justify-between"},E={for:"clinic_form.employees",class:"block text-sm font-medium text-appromed-dark dark:text-appromed"},J={class:"mt-1"},L={class:"col-span-2 my-3 lg:col-span-1"},D=n("div",{class:"flex justify-between"},[n("label",{for:"clinic_form.education",class:"block text-sm font-medium text-appromed-dark dark:text-appromed"},"Weiterbildungsermächtigung")],-1),W={class:"mt-1"},Z={class:"col-span-2 my-3"},Q={class:"flex justify-between"},X={for:"clinic_form.leader",class:"block text-sm font-medium text-appromed-dark dark:text-appromed"},Y={class:"mt-1"},$={class:"col-span-2 my-3"},ee={class:"flex justify-between"},ie={for:"clinic_form.email",class:"block text-sm font-medium text-appromed-dark dark:text-appromed"},ne={class:"mt-1"},ae={class:"col-span-2 my-3"},re={class:"flex justify-between"},de={for:"clinic_form.website",class:"block text-sm font-medium text-appromed-dark dark:text-appromed"},le={class:"mt-1"},oe={class:"col-span-2 my-3"},me={class:"flex justify-between"},te={for:"clinic_form.phone",class:"block text-sm font-medium text-appromed-dark dark:text-appromed"},se={class:"mt-1"},ce={class:"col-span-full my-3"},pe={class:"flex justify-between"},ue={for:"clinic_form.about",class:"block text-sm font-medium text-appromed-dark dark:text-appromed"},he={class:"mt-1"},ge={class:"my-3 max-w-1/2"},fe={class:"block text-sm font-medium text-appromed-dark dark:text-appromed"},ke={__name:"index",setup(c){const ke=[{id:1,name:"Allgemeine Chirurgie "},{id:2,name:"Allgemeine Chirurgie - Intensivmedizin "},{id:3,name:"Allgemeine Chirurgie - Schwerpunkt Abdominal- und Gefäßchirurgie "},{id:4,name:"Allgemeine Chirurgie - Gefäßchirurgie"},{id:5,name:"Allgemeine Chirurgie - Handchirurgie"},{id:6,name:"Allgemeine Chirurgie - Kinderchirurgie"},{id:7,name:"Allgemeine Chirurgie - Plastische Chirurgie"},{id:8,name:"Allgemeine Chirurgie - Thoraxchirurgie"},{id:9,name:"Allgemeine Chirurgie - Unfallchirurgie"},{id:10,name:"Allgemeine Psychiatrie"},{id:11,name:"Allgemeine Psychiatrie - Nachtklinik "},{id:12,name:"Allgemeine Psychiatrie - Forensische Behandlung"},{id:13,name:"Allgemeine Psychiatrie - Gerontopsychiatrie"},{id:14,name:"Allgemeine Psychiatrie - Gerontopsychiatrie, Tagesklinik"},{id:15,name:"Allgemeine Psychiatrie Kinder- und Jugendpsychiatrie"},{id:16,name:"Allgemeine Psychiatrie - Neurologie"},{id:17,name:"Allgemeine Psychiatrie - Psychosomatik/Psychotherapie"},{id:18,name:"Allgemeine Psychiatrie - Schwerpunkt Suchtbehandlung "},{id:19,name:"Allgemeine Psychiatrie - Schwerpunkt Suchtbehandlung, Tagesklinik "},{id:20,name:"Allgemeine Psychiatrie, Tagesklinik "},{id:21,name:"Angiologie"},{id:22,name:"Augenheilkunde "},{id:23,name:"Chirurgie - Orthopädie "},{id:24,name:"Dermatologie"},{id:25,name:"Dermatologie - Tagesklinik "},{id:26,name:"Endokriminologie"},{id:27,name:"Frauennheilkunde und Geburtshilfe"},{id:28,name:"Frauenheilkunde - Endokriminologie "},{id:29,name:"Frauenheilkunde - Hämatologie und internistische Onkologie "},{id:30,name:"Gastroenterologie "},{id:31,name:"Gastroenterologie - Pädiatrie "},{id:32,name:"Gefäßchirurgie "},{id:34,name:"Geriatrie"},{id:35,name:"Geriatrie, Nachtklinik "},{id:36,name:"Geriatrie, Tagesklinik "},{id:37,name:"Hals-Nasen-Ohrenheilkunde "},{id:38,name:"Hämatologie und internistische Onkologie - Pädiatrie "},{id:39,name:"Hämatologie und internistische Onkologie - Strahlenheilkunde "},{id:40,name:"Heiltherapeutische Abteilung "},{id:41,name:"Herzchirurgie - Intensivmedizin "},{id:42,name:"Herzchirurgie und internistische Onkologie "},{id:43,name:"Innere Medizin"},{id:44,name:"Innere Medizin - Coloproktologie"},{id:45,name:"Innere Medizin - Diabetes"},{id:46,name:"Innere Medizin - Endokrinologie "},{id:47,name:"Innere Medizin - Gastroenterologie "},{id:48,name:"Innere Medizin - Geriatrie"},{id:49,name:"Innere Medizin - Hämatologie und internistische Onkologie "},{id:50,name:"Innere Medizin - Infektionskrankheiten "},{id:51,name:"Innere Medzin - Kardiologie "},{id:52,name:"Innere Medzin - Lungen- und Brochialheilkunde"},{id:53,name:"Innere Medizin - Naturheilkunde "},{id:54,name:"Innere Medizin - Nephrologie"},{id:55,name:"Innere Medzin - Pneumologie "},{id:56,name:"Innere Medizin - Rheumatologie "},{id:57,name:"Innere Medizin - Schlaganfallpatienten "},{id:58,name:"Innere Medizin - Tumorforschung "},{id:59,name:"Intensivmedizin, Anästhesie"},{id:60,name:"Intensivmedizin Orthopädie - Reumatologie "},{id:61,name:"Intensivmedizin - Chirurgie "},{id:62,name:"Intensivmedizin - Herzchirurgie "},{id:63,name:"Intensivmedizin - Innere Medizin "},{id:64,name:"Intensivmedizin - Neurochirurgie "},{id:65,name:"Intensivmedizin - Neurologie "},{id:66,name:"Intensivmedizin - Pädiatrie"},{id:67,name:"Intensivmedizin - Urologie"},{id:68,name:"Kardiologie"},{id:69,name:"Kinder- und Jugendpsychiatrie"},{id:70,name:"Kinder- und Jugendpsychiatrie, Nachtklinik"},{id:71,name:"Kinder- und Jugendpsychiatrie, Tagesklinik "},{id:72,name:"Kinderchirurgie "},{id:73,name:"Kinderkardiologie "},{id:74,name:"Kinderkardiologie - Intensivmedizin "},{id:75,name:"Langzeitbereich Kinder "},{id:76,name:"Lungen- und Brochialheilkunde "},{id:77,name:"Neonatologie - Früh- und Neugeborenmedizin"},{id:78,name:"Nephrologie"},{id:79,name:"Neurochirurgie"},{id:80,name:"Neurologie"},{id:81,name:"Neurologie - Pädiatrie"},{id:82,name:"Neurologie - Schlaganfallpatienten "},{id:83,name:"Nuklearmedizin "},{id:84,name:"Nuklearmedizin - Strahlenheilkunde "},{id:85,name:"Operative Intensivmedzin - Chirurgie "},{id:86,name:"Orthopädie - Chirurgie "},{id:87,name:"Senologie und Brustzentrum"},{id:88,name:"Palliativmedizin "},{id:89,name:"Pädiatrie - Endokrinologie "},{id:90,name:"Pädiatrie - Gastroenterologie"},{id:91,name:"Pädiatrie - Hämatologie und internistische Onkologie "},{id:92,name:"Pädiatrie - Kinderkardiologie"},{id:93,name:"Pädiatrie - Kinderneurologie "},{id:94,name:"Pädiatrie - Lungen- und Bronchialheilkunde "},{id:95,name:"Pädiatrie - Neonatologie"},{id:96,name:"Pädiatrie - Nephrologie"},{id:97,name:"Pädiatrie - Rheumatologie"},{id:98,name:"Plastische Chirurgie"},{id:99,name:"Pneumologie"},{id:100,name:"Psychosomatik - Psychotherapie"},{id:101,name:"Psychosomatik - Psychotherapie, Nachtklinik"},{id:102,name:"Psychosomatik - Psychotherapie, Tagesklinik"},{id:103,name:"Psychosotamik - Kinder- und Jugendpsychosomatik"},{id:104,name:"Pädiatrie"},{id:105,name:"Radiologie"},{id:106,name:"Pheumatologie"},{id:107,name:"Schmerztherapie"},{id:108,name:"Sonstige Fachabteilung "},{id:109,name:"Strahlenheilkunde"},{id:110,name:"Strahlenheilkunde - Hämatologie und internistische Onkologie"},{id:111,name:"Strahlenheilkunde - Radiologie "},{id:112,name:"Suchtmedizin "},{id:113,name:"Thoraxchirurgie "},{id:114,name:"Thoraxchirurgie - Intensivmedizin "},{id:115,name:"Thoraxchirurgie - Herzchirurgie "},{id:116,name:"Unfallchirurgie"},{id:117,name:"Urologie"},{id:118,name:"Viszeralchirurgie"},{id:119,name:"Wirbelsäulenchirurgie"},{id:120,name:"Zahn- und Kieferheilkunde - Mund- und Kieferchirurgie "},{id:121,name:"Physiotherapie, Ergotherapie "},{id:122,name:"Rehabilitätion"},{id:123,name:"Kopf- und Halschirurgie"},{id:124,name:"Koloproktologie"},{id:125,name:"Kinder- und Jugendmedizin"},{id:126,name:"Allergologie"}];return(c,be)=>{const xe=p,ye=m;return e(),i("div",u,[n("div",h,[n("div",g,[f,n("div",k,[n("div",b,[n("div",x,[n("div",y,[n("div",null,[n("div",_,[n("h3",v,a(r(t).user_clinic.name),1)]),n("p",z,a(r(t).user_clinic.email)+" / +"+a(r(t).user_clinic.phone),1)]),n("div",P,[n("label",w,a(r(s)("_31")),1),n("div",I,[d(n("input",{"onUpdate:modelValue":be[0]||(be[0]=e=>r(t).user_clinic.name=e),required:"",type:"text",name:"clinic_form.name",id:"clinic_form.name",autocomplete:"clinic_form.name",class:"py-3 px-4 block w-full text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md"},null,512),[[l,r(t).user_clinic.name]])])]),n("div",A,[n("label",N,a(r(s)("_32")),1),n("div",K,[d(n("input",{"onUpdate:modelValue":be[1]||(be[1]=e=>r(t).user_clinic.partnership=e),required:"",type:"text",name:"clinic_form.partnership",id:"clinic_form.partnership",autocomplete:"family-name",class:"py-3 px-4 block w-full text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md"},null,512),[[l,r(t).user_clinic.partnership]])])]),n("div",M,[n("div",S,[n("label",C,a(r(s)("_33")),1)]),n("div",U,[d(n("input",{"onUpdate:modelValue":be[2]||(be[2]=e=>r(t).user_clinic.address=e),required:"",id:"clinic_form.address",name:"clinic_form.address",type:"text",autocomplete:"clinic_form.address",class:"py-3 px-4 block w-full text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md"},null,512),[[l,r(t).user_clinic.address]])])]),n("div",j,[n("div",G,[n("label",H,a(r(s)("_40")),1)]),n("div",V,[d(n("input",{"onUpdate:modelValue":be[3]||(be[3]=e=>r(t).user_clinic.beds=e),required:"",id:"clinic_form.beds",name:"clinic_form.beds",type:"number",autocomplete:"clinic_form.beds",class:"py-3 px-4 block w-full text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md"},null,512),[[l,r(t).user_clinic.beds]])])]),n("div",O,[n("div",T,[n("label",q,a(r(s)("_41")),1)]),n("div",F,[d(n("input",{"onUpdate:modelValue":be[4]||(be[4]=e=>r(t).user_clinic.patients=e),required:"",id:"clinic_form.patients",name:"clinic_form.patients",type:"number",autocomplete:"clinic_form.patients",class:"py-3 px-4 block w-full text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md"},null,512),[[l,r(t).user_clinic.patients]])])]),n("div",R,[n("div",B,[n("label",E,a(r(s)("_42")),1)]),n("div",J,[d(n("input",{"onUpdate:modelValue":be[5]||(be[5]=e=>r(t).user_clinic.employees=e),required:"",id:"clinic_form.employees",name:"clinic_form.employees",type:"number",autocomplete:"clinic_form.employees",class:"py-3 px-4 block w-full text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md"},null,512),[[l,r(t).user_clinic.employees]])])]),n("div",L,[D,n("div",W,[d(n("input",{"onUpdate:modelValue":be[6]||(be[6]=e=>r(t).user_clinic.education=e),required:"",id:"clinic_form.education",name:"clinic_form.education",type:"text",autocomplete:"clinic_form.education",class:"py-3 px-4 block w-full text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md"},null,512),[[l,r(t).user_clinic.education]])])]),n("div",Z,[n("div",Q,[n("label",X,a(r(s)("_35")),1)]),n("div",Y,[d(n("input",{"onUpdate:modelValue":be[7]||(be[7]=e=>r(t).user_clinic.leader=e),required:"",name:"clinic_form.leader",id:"clinic_form.leader",type:"text",class:"py-3 px-4 block w-full text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md","aria-describedby":"phone-optional"},null,512),[[l,r(t).user_clinic.leader]])])]),n("div",$,[n("div",ee,[n("label",ie,a(r(s)("_39")),1)]),n("div",ne,[d(n("input",{"onUpdate:modelValue":be[8]||(be[8]=e=>r(t).user_clinic.email=e),required:"",name:"clinic_form.email",id:"clinic_form.email",type:"email",class:"py-3 px-4 block w-full text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md","aria-describedby":"phone-optional"},null,512),[[l,r(t).user_clinic.email]])])]),n("div",ae,[n("div",re,[n("label",de,a(r(s)("_37")),1)]),n("div",le,[d(n("input",{"onUpdate:modelValue":be[9]||(be[9]=e=>r(t).user_clinic.website=e),required:"",name:"clinic_form.website",id:"clinic_form.website",type:"text",class:"py-3 px-4 block w-full text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md","aria-describedby":"phone-optional"},null,512),[[l,r(t).user_clinic.website]])])]),n("div",oe,[n("div",me,[n("label",te,a(r(s)("_38")),1)]),n("div",se,[d(n("input",{"onUpdate:modelValue":be[10]||(be[10]=e=>r(t).user_clinic.phone=e),required:"",name:"clinic_form.phone",id:"clinic_form.phone",type:"number",class:"py-3 px-4 block w-full text-appromed-dark focus:ring-appromed focus:border-appromed border-appromed rounded-md","aria-describedby":"phone-optional"},null,512),[[l,r(t).user_clinic.phone]])])]),n("div",ce,[n("div",pe,[n("label",ue,a(r(s)("_44")),1)]),n("div",he,[d(n("textarea",{"onUpdate:modelValue":be[11]||(be[11]=e=>r(t).user_clinic.about=e),id:"about",placeholder:"Infos zur Lage (Standort, Region), Betriebskita/ Kindergarten in der Nähe, Verkehrsanbindung, Kurzbeschreibung der Klinik, Firmenphilosophie etc.",name:"message",rows:"4",class:"py-3 px-4 block w-full text-appromed-dark focus:ring-appromed focus:border-appromed border border-appromed rounded-md","aria-describedby":"message-max"},null,512),[[l,r(t).user_clinic.about]])])]),n("div",ge,[n("label",fe,a(r(s)("_13")),1),o(xe,{onChange:be[12]||(be[12]=e=>r(t).user_clinic.specializations.push(e)),show_3_suggestions:!1,multiple:!0,placeholder:"Search Specializations...",options:ke}),o(ye,{rows:r(t).user_clinic.specializations,fields:["name"],headers:["Name"]},null,8,["rows"])])])])])])])])])}}};"function"==typeof c&&c(ke);export{ke as default};

"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2925],{3905:(e,A,t)=>{t.d(A,{Zo:()=>l,kt:()=>u});var a=t(67294);function r(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function o(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);A&&(a=a.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?o(Object(t),!0).forEach((function(A){r(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}function n(e,A){if(null==e)return{};var t,a,r=function(e,A){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],A.indexOf(t)>=0||(r[t]=e[t]);return r}(e,A);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),s=function(e){var A=a.useContext(c),t=A;return e&&(t="function"==typeof e?e(A):i(i({},A),e)),t},l=function(e){var A=s(e.components);return a.createElement(c.Provider,{value:A},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var A=e.children;return a.createElement(a.Fragment,{},A)}},m=a.forwardRef((function(e,A){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=n(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,u=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(u,i(i({ref:A},l),{},{components:t})):a.createElement(u,i({ref:A},l))}));function u(e,A){var t=arguments,r=A&&A.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var n={};for(var c in A)hasOwnProperty.call(A,c)&&(n[c]=A[c]);n.originalType=e,n[p]="string"==typeof e?e:r,i[1]=n;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},48284:(e,A,t)=>{t.r(A),t.d(A,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>n,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const o={},i="Restri\xe7\xe3o Movimenta\xe7\xe3o Banc\xe1ria",n={unversionedId:"Homologa\xe7\xe3o/bmvbancario",id:"Homologa\xe7\xe3o/bmvbancario",title:"Restri\xe7\xe3o Movimenta\xe7\xe3o Banc\xe1ria",description:"Limitar acesso das filiais na movimenta\xe7\xe3o banc\xe1ria",source:"@site/docs/6-Homologa\xe7\xe3o/bmvbancario.md",sourceDirName:"6-Homologa\xe7\xe3o",slug:"/Homologa\xe7\xe3o/bmvbancario",permalink:"/docushark/docs/Homologa\xe7\xe3o/bmvbancario",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Retirar Pedido do Faturamento Autom\xe1tico",permalink:"/docushark/docs/Homologa\xe7\xe3o/Retirar Pedido do Faturamento Automatico"},next:{title:"Lan\xe7amento Pre Nota - Erro Chave UF",permalink:"/docushark/docs/Homologa\xe7\xe3o/imp-prenota"}},c={},s=[{value:"Dados da Customiza\xe7\xe3o",id:"dados-da-customiza\xe7\xe3o",level:2},{value:"Especifica\xe7\xe3oo da customiza\xe7\xe3o",id:"especifica\xe7\xe3oo-da-customiza\xe7\xe3o",level:2},{value:"Crit\xe9rios da customiza\xe7\xe3o",id:"crit\xe9rios-da-customiza\xe7\xe3o",level:2},{value:"Fontes e Parametros envolvidos",id:"fontes-e-parametros-envolvidos",level:2},{value:"Processo",id:"processo",level:2}],l={toc:s};function p(e){let{components:A,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,o,{components:A,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"restri\xe7\xe3o-movimenta\xe7\xe3o-banc\xe1ria"},"Restri\xe7\xe3o Movimenta\xe7\xe3o Banc\xe1ria"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Limitar acesso das filiais na movimenta\xe7\xe3o banc\xe1ria")),(0,r.kt)("p",null,"Modulo: 06 - Financeiro (SIGAFIN)"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"dados-da-customiza\xe7\xe3o"},"Dados da Customiza\xe7\xe3o"),(0,r.kt)("p",null,"Analista: Carlos Henrique"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"especifica\xe7\xe3oo-da-customiza\xe7\xe3o"},"Especifica\xe7\xe3oo da customiza\xe7\xe3o"),(0,r.kt)("p",null,"Solicitado pelo departamento financeiro holding a limita\xe7\xe3o do campo E5_BANCO para as demais filiais, limitando o seu acesso de acordo com as regras estabelecidas para garantir o funcionamente correto da rotina."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"crit\xe9rios-da-customiza\xe7\xe3o"},"Crit\xe9rios da customiza\xe7\xe3o"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"PAGAR, RECEBER: Somente \xe9 permitido ",(0,r.kt)("strong",{parentName:"p"},"PAGAR")," ou ",(0,r.kt)("strong",{parentName:"p"},"RECEBER")," pelo proprio banco da filial (E5_BANCO).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Transfer\xeancia entre C/C: "))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Banco origem deve ser o da propria filial ou de acordo com as regras devinidas no param\xeatro;"),(0,r.kt)("li",{parentName:"ol"},"Banco destino n\xe3o pode ser igual a origem e somente \xe9 permitido bancos determinados no param\xeatro;"),(0,r.kt)("li",{parentName:"ol"},"Tipo de movimenta\xe7\xe3o deve ser igual ao estabelecido no param\xeatro.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Apenas usu\xe1rios do financeiro holding cadastrados na tabela SZJ ter\xe3o acesso total.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"fontes-e-parametros-envolvidos"},"Fontes e Parametros envolvidos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SHARKXFIN.PRW"),(0,r.kt)("li",{parentName:"ul"},"FA100TRF.PRW")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"processo"},"Processo"),(0,r.kt)("p",null,"Rotina: ",(0,r.kt)("strong",{parentName:"p"},"Movimenta\xe7\xe3o Banc\xe1ria")),(0,r.kt)("p",null,'Colocar no X3_VALID no campo E5_CAMPO =  ExistCpo("SA6",,,,,.F.) .AND. U_XVLDBCOF()                                                                                      '),(0,r.kt)("p",null,"Bot\xe3o: Pagar"),(0,r.kt)("p",null,"1- Preencher no campo Banco*\n",(0,r.kt)("img",{src:t(99899).Z,width:"1270",height:"552"})),(0,r.kt)("admonition",{title:"Se n\xe3o for usu\xe1rio filial,s\xf3 ser\xe1 permitido selecionar o banco da propria filial",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("img",{src:t(94345).Z,width:"509",height:"343"}))),(0,r.kt)("p",null,"2- Repita o processo no bot\xe3o Receber"),(0,r.kt)("p",null,"3-  Bot\xe3o Transfer\xeancia entre C/C "),(0,r.kt)("p",null,"Preencher os campos respeitando as seguintes regras"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(82426).Z,width:"455",height:"340"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Banco origem de ser a propria filial ou que contenha no parametro ES_TBCORIG.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Banco destino n\xe3o pode ser igual a origem e precisa conter dentro do parametro ES_TBCDEST.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Tipo Mov deve conter no pamatro ES_TTPMOVI."))),(0,r.kt)("p",null,":::INFO\nOs parametros ser\xe3o controlados pelo cockpit do fincanceiro. Por padr\xe3o se n\xe3o exister o parametro ir\xe1 nascer com as informa\xe7\xf5es DEFAULT:\nES_TBCORIG =\nES_TBCDEST = CHQ|DEP|CAR|BCF|\nES_TTPMOVI = CC|CD|CH|R$|\n:::"),(0,r.kt)("p",null,"Se todas as condi\xe7\xf5es acima forem verdadeiras, ir\xe1 apresentar a mensagem de sucesso."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(52876).Z,width:"514",height:"204"})),(0,r.kt)("p",null,"Caso contr\xe1rio ir\xe1 apresentar a mensagem de erro."))}p.isMDXComponent=!0},99899:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/bmvbancario_imagem01-bd619109ea711b37b224a471d6937a30.png"},94345:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/bmvbancario_imagem02-2650699176586487fb9f60bf1ff8bffc.png"},82426:(e,A,t)=>{t.d(A,{Z:()=>a});const a=t.p+"assets/images/bmvbancario_imagem03-ba1e633307d17cc229a479351b11b0f5.png"},52876:(e,A,t)=>{t.d(A,{Z:()=>a});const a="data:image/png;base64,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"}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2974],{3905:(e,a,A)=>{A.d(a,{Zo:()=>l,kt:()=>p});var t=A(7294);function r(e,a,A){return a in e?Object.defineProperty(e,a,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[a]=A,e}function n(e,a){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),A.push.apply(A,t)}return A}function i(e){for(var a=1;a<arguments.length;a++){var A=null!=arguments[a]?arguments[a]:{};a%2?n(Object(A),!0).forEach((function(a){r(e,a,A[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):n(Object(A)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(A,a))}))}return e}function o(e,a){if(null==e)return{};var A,t,r=function(e,a){if(null==e)return{};var A,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)A=n[t],a.indexOf(A)>=0||(r[A]=e[A]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)A=n[t],a.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(r[A]=e[A])}return r}var c=t.createContext({}),f=function(e){var a=t.useContext(c),A=a;return e&&(A="function"==typeof e?e(a):i(i({},a),e)),A},l=function(e){var a=f(e.components);return t.createElement(c.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},s=t.forwardRef((function(e,a){var A=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=f(A),s=r,p=d["".concat(c,".").concat(s)]||d[s]||u[s]||n;return A?t.createElement(p,i(i({ref:a},l),{},{components:A})):t.createElement(p,i({ref:a},l))}));function p(e,a){var A=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=A.length,i=new Array(n);i[0]=s;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var f=2;f<n;f++)i[f]=A[f];return t.createElement.apply(null,i)}return t.createElement.apply(null,A)}s.displayName="MDXCreateElement"},3041:(e,a,A)=>{A.r(a),A.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>f});var t=A(7462),r=(A(7294),A(3905));const n={},i="Planilha Orcamentaria - Wizard Copia orcamento",o={unversionedId:"Processos/wizard-copia-planilha",id:"Processos/wizard-copia-planilha",title:"Planilha Orcamentaria - Wizard Copia orcamento",description:"Rotina para copiar planilha financeira",source:"@site/docs/5-Processos/wizard-copia-planilha.md",sourceDirName:"5-Processos",slug:"/Processos/wizard-copia-planilha",permalink:"/docushark/docs/Processos/wizard-copia-planilha",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Pr\xe9-Conciclia\xe7\xe3o Autom\xe1tica",permalink:"/docushark/docs/Processos/preconc_automatica"},next:{title:"Bonus Comercial",permalink:"/docushark/docs/Homologa\xe7\xe3o/Bonus Comercial"}},c={},f=[{value:"Dados da Customiza\xe7\xe3o",id:"dados-da-customiza\xe7\xe3o",level:2},{value:"Especifica\xe7\xf5es da customiza\xe7\xe3o",id:"especifica\xe7\xf5es-da-customiza\xe7\xe3o",level:2},{value:"Processo",id:"processo",level:2},{value:"Fontes",id:"fontes",level:2}],l={toc:f};function d(e){let{components:a,...n}=e;return(0,r.kt)("wrapper",(0,t.Z)({},l,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"planilha-orcamentaria---wizard-copia-orcamento"},"Planilha Orcamentaria - Wizard Copia orcamento"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Rotina para copiar planilha financeira")),(0,r.kt)("p",null,"Modulo: 97 - Distribui\xe7\xe3o de Pe\xe7as (SIGAESP)"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"dados-da-customiza\xe7\xe3o"},"Dados da Customiza\xe7\xe3o"),(0,r.kt)("p",null,"Analista: Carlos Henrique Mendes da Silva"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"especifica\xe7\xf5es-da-customiza\xe7\xe3o"},"Especifica\xe7\xf5es da customiza\xe7\xe3o"),(0,r.kt)("p",null," Est\xe1 rotina tem como objetivo buscar copiar a Estrutura e Lan\xe7amentos de uma planilha j\xe1 lan\xe7ada e criar uma nova para qualquer ano e filial dentro do grupo."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"processo"},"Processo"),(0,r.kt)("p",null,"Rotina: ",(0,r.kt)("strong",{parentName:"p"},"Wizard - Copia Planilha Orcamentaria")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Acesse a rotina no seu menu e pule a descria\xe7\xe3o para a pagina de parametros.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Digite as informa\xe7\xf5es necessarias para realizar a copia e clique em concluir."))),(0,r.kt)("p",null,(0,r.kt)("img",{src:A(4422).Z,width:"826",height:"660"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Empresa origem -> Codigo da empresa a ser copiada;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Filial origem  -> Codigo da filial a ser copiada;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ano Origem     -> Ano a ser copiado;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Empresa Destino -> Codigo da empresa ir\xe1 receber os dados;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Filial Destino  -> Codigo da filial ir\xe1 receber os dados;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ano Destino     -> Ano que ir\xe1 receber os dados;")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Copia valor     -> Informa se quer copiar os valores ou n\xe3o."))),(0,r.kt)("p",null,(0,r.kt)("img",{src:A(92).Z,width:"511",height:"209"})," "),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ao final de cada processamento ir\xe1 informar uma mensagem de sucesso. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Acesse a rotina Orcamento Shark para conferencia.\nAtualiza\xe7\xf5es > Plano Orcamentario > Orcamento Shark "))),(0,r.kt)("p",null,(0,r.kt)("img",{src:A(4597).Z,width:"1256",height:"156"}),"\n",(0,r.kt)("img",{src:A(5739).Z,width:"1270",height:"912"})," "),(0,r.kt)("hr",null),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"fontes"},"Fontes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"XCOPYPCO.PRW")))}d.isMDXComponent=!0},4422:(e,a,A)=>{A.d(a,{Z:()=>t});const t=A.p+"assets/images/imagem01-c7ca909c60b05a244ce891bcfa707ea0.png"},92:(e,a,A)=>{A.d(a,{Z:()=>t});const t="data:image/png;base64,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"},4597:(e,a,A)=>{A.d(a,{Z:()=>t});const t=A.p+"assets/images/imagem05-9cea9ed4fa73915e1e175f07f370db58.png"},5739:(e,a,A)=>{A.d(a,{Z:()=>t});const t=A.p+"assets/images/imagem06-1561ae2f336c23d44cc154487af16cc8.png"}}]);
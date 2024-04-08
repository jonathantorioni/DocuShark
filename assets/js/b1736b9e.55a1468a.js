"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7758],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||n;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2439:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=a(7462),o=(a(7294),a(3905));const n={},i="RELRATSE.PRW",l={unversionedId:"Fontes/relratse",id:"Fontes/relratse",title:"RELRATSE.PRW",description:"Relat\xf3rio Integra\xe7\xe3o Serasa",source:"@site/docs/2-Fontes/relratse.md",sourceDirName:"2-Fontes",slug:"/Fontes/relratse",permalink:"/docushark/docs/Fontes/relratse",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RELPOSFIN.PRW",permalink:"/docushark/docs/Fontes/relposfin"},next:{title:"RFAT001.PRW",permalink:"/docushark/docs/Fontes/rfat001"}},s={},p=[{value:"Dados da Customiza\xe7\xe3o",id:"dados-da-customiza\xe7\xe3o",level:2},{value:"Especifica\xe7\xe3oo da customiza\xe7\xe3o",id:"especifica\xe7\xe3oo-da-customiza\xe7\xe3o",level:2},{value:"Especifica\xe7\xe3o de fun\xe7\xf5es e rotinas",id:"especifica\xe7\xe3o-de-fun\xe7\xf5es-e-rotinas",level:2},{value:"Especifica\xe7\xe3o de parametros",id:"especifica\xe7\xe3o-de-parametros",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"relratseprw"},"RELRATSE.PRW"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Relat\xf3rio Integra\xe7\xe3o Serasa")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"dados-da-customiza\xe7\xe3o"},"Dados da Customiza\xe7\xe3o"),(0,o.kt)("p",null,"Analista: Carlos Henrique Mendes da Silva"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"especifica\xe7\xe3oo-da-customiza\xe7\xe3o"},"Especifica\xe7\xe3oo da customiza\xe7\xe3o"),(0,o.kt)("p",null,"Tem como objetivo realizar um relat\xf3rio contendo todas as movimenta\xe7\xf5es com a Integra\xe7\xe3o Serasa."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"especifica\xe7\xe3o-de-fun\xe7\xf5es-e-rotinas"},"Especifica\xe7\xe3o de fun\xe7\xf5es e rotinas"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"RELRATSE")," - Fun\xe7\xe3o principal que cont\xe9m a tela de parametros para determinar o filtro utilizado na gera\xe7\xe3o do relatorio. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"PRCQUERY")," - Realiza a consulta na tabela ZN9 e armazena as informa\xe7\xf5es dentro de um array."),(0,o.kt)("p",null,"Parametros: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"cDataIni - Data inical ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"cDataFim - Data final")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"cEmpDe  - Empresa de")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"cEmpAte - Empresa ate")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"cFilDe  - Filial de")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"cFilAte - Filial ate"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"GERACSV")," - Fun\xe7\xe3o respos\xe1vel por gerar o arquivo CSV de acordo com as regras estabelecidas. "),(0,o.kt)("p",null,"Regras:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Se o cliente for do Tipo Fisico, o valor deve ser atribuido a coluna: ",(0,o.kt)("em",{parentName:"li"},"VALOR PF"),";"),(0,o.kt)("li",{parentName:"ul"},"Se o cliente for do tipo Juridico e possuir quadro social, o valor deve ser atribuido a coluna: ",(0,o.kt)("em",{parentName:"li"},"VALOR PJ COM QUADRO SOCIAL"),";"),(0,o.kt)("li",{parentName:"ul"},"Se o cliente for do tipo Juridico e n\xe3o possuir quadro social, o valor deve ser atribuido a coluna: ",(0,o.kt)("em",{parentName:"li"},"VALOR PJ SEM QUADRO SOCIAL"),";")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"especifica\xe7\xe3o-de-parametros"},"Especifica\xe7\xe3o de parametros"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Tabela SXB")," - Consulta padr\xe3o"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"XB_ALIAS")," - ATVEMP, ATVFIL")))}u.isMDXComponent=!0}}]);
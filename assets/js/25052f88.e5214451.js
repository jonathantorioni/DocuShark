"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4408],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),i=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||n;return r?a.createElement(f,s(s({ref:t},p),{},{components:r})):a.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var i=2;i<n;i++)s[i]=r[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6324:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>i});var a=r(7462),o=(r(7294),r(3905));const n={},s="SHPRCCOM.PRW",l={unversionedId:"Fontes/shprccom",id:"Fontes/shprccom",title:"SHPRCCOM.PRW",description:"Coleta estat\xedstica pra sugest\xe3o de compras",source:"@site/docs/2-Fontes/shprccom.md",sourceDirName:"2-Fontes",slug:"/Fontes/shprccom",permalink:"/docushark/docs/Fontes/shprccom",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MSCHXML.PRW",permalink:"/docushark/docs/Fontes/mschxml"},next:{title:"SHTRANES.PRW",permalink:"/docushark/docs/Fontes/shtranes"}},c={},i=[{value:"<strong>Dados da Customiza\xe7\xe3o</strong>",id:"dados-da-customiza\xe7\xe3o",level:3},{value:"<strong>Objetivo</strong>",id:"objetivo",level:3},{value:"<strong>Especifica\xe7\xf5es das Fun\xe7\xf5es e Rotinas</strong>",id:"especifica\xe7\xf5es-das-fun\xe7\xf5es-e-rotinas",level:3},{value:"<strong>Regra de processamento</strong>",id:"regra-de-processamento",level:3}],p={toc:i};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"shprccomprw"},"SHPRCCOM.PRW"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Coleta estat\xedstica pra sugest\xe3o de compras")),(0,o.kt)("h3",{id:"dados-da-customiza\xe7\xe3o"},(0,o.kt)("strong",{parentName:"h3"},"Dados da Customiza\xe7\xe3o")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Analista: Jonathan Torioni"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"objetivo"},(0,o.kt)("strong",{parentName:"h3"},"Objetivo")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Efetuar os c\xe1lculos de curva estat\xedstica para obter valores de m\xe9dia de vendas, vari\xe2ncia, desvio padr\xe3o e fator multiplicador de Z."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"especifica\xe7\xf5es-das-fun\xe7\xf5es-e-rotinas"},(0,o.kt)("strong",{parentName:"h3"},"Especifica\xe7\xf5es das Fun\xe7\xf5es e Rotinas")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SHPRCCOM(aParam)")," -  Fun\xe7\xe3o principal, que ser\xe1 cadastrada no schedule."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"GetProd()")," \u2013 Fun\xe7\xe3o respons\xe1vel por retornar a lista de produtos que ser\xe3o processados. Retorna um vetor com os produtos."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"GetAmost(aArray)")," \u2013 Fun\xe7\xe3o respons\xe1vel por receber um array com os produtos e devolver uma amostra ajustada, removendo picos e vales e/ou acrescenta os dias que n\xe3o tiveram vendas."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"GRVTEMP(aArray)")," -  Grava os dados do vetor recebido em uma tabela tempor\xe1ria."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"GERADADOS()")," \u2013 Grava os dados j\xe1 calculados de m\xe9dia, desvio padr\xe3o, vari\xe2ncia, quantidade de amostras na tabela DESVXPROD."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"regra-de-processamento"},(0,o.kt)("strong",{parentName:"h3"},"Regra de processamento")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"A Fun\xe7\xe3o U_SHPRCCOM est\xe1 projetada para ter sua chamada via schedule e efetuar os devidos processamento conforme cadastramento realizado na tabela PCX."),(0,o.kt)("p",null,"A fun\xe7\xe3o tem como base os campos: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PCX_ANOANT - QUANTIDADE DE DIAS DE ANALISE ANO ANTERIOR \t- NUMERICO 3"),(0,o.kt)("li",{parentName:"ul"},"PCX_ANOATU - QUANTIDADE DE DIAS DE ANALISE ANO ATUAL\t- NUMERICO 3"),(0,o.kt)("li",{parentName:"ul"},"PCX_EXCPIC - EXCLUSAO DE PICOS\t\t\t\t- NUMERICO 3"),(0,o.kt)("li",{parentName:"ul"},"PCX_EXCVAL - EXCLUSAO DE VALES\t\t\t\t- NUMERICO 3"),(0,o.kt)("li",{parentName:"ul"},"PCX_EXCZER - EXCLUSAO DIAS ZERADOS\t\t\t- CHAR 1"),(0,o.kt)("li",{parentName:"ul"},"Os campos descritos acima, influenciam diretamente nos c\xe1lculos.")))}u.isMDXComponent=!0}}]);
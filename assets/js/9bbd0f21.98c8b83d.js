"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9084],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>f});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||n;return a?r.createElement(f,i(i({ref:t},l),{},{components:a})):r.createElement(f,i({ref:t},l))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7166:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(7462),o=(a(7294),a(3905));const n={},i="New Flag de Produtos - Importador",s={unversionedId:"Rotinas/Central de compras/new_flag_produto_2",id:"Rotinas/Central de compras/new_flag_produto_2",title:"New Flag de Produtos - Importador",description:"Importa\xe7\xe3o de Itens atrav\xe9s de um CSV",source:"@site/docs/4-Rotinas/Central de compras/new_flag_produto_2.md",sourceDirName:"4-Rotinas/Central de compras",slug:"/Rotinas/Central de compras/new_flag_produto_2",permalink:"/docushark/docs/Rotinas/Central de compras/new_flag_produto_2",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"New Flag de Produtos",permalink:"/docushark/docs/Rotinas/Central de compras/new_flag_produto_1"},next:{title:"Documenta\xe7\xe3o de Endpoints ERP/FLUIG",permalink:"/docushark/docs/Rotinas/Fluig/doc_Integracao_fluig"}},p={},c=[{value:"Dados da customiza\xe7\xe3o",id:"dados-da-customiza\xe7\xe3o",level:3},{value:"Especifica\xe7\xe3o da customiza\xe7\xe3o",id:"especifica\xe7\xe3o-da-customiza\xe7\xe3o",level:3},{value:"Especifica\xe7\xe3o de fun\xe7\xf5es e rotinas",id:"especifica\xe7\xe3o-de-fun\xe7\xf5es-e-rotinas",level:3},{value:"Especifica\xe7\xe3o de parametros",id:"especifica\xe7\xe3o-de-parametros",level:3},{value:"Execu\xe7\xe3o do Processo",id:"execu\xe7\xe3o-do-processo",level:3}],l={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"new-flag-de-produtos---importador"},"New Flag de Produtos - Importador"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Importa\xe7\xe3o de Itens atrav\xe9s de um CSV")),(0,o.kt)("h3",{id:"dados-da-customiza\xe7\xe3o"},"Dados da customiza\xe7\xe3o"),(0,o.kt)("p",null,"Analista respons\xe1vel: Rafael Gomes"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"especifica\xe7\xe3o-da-customiza\xe7\xe3o"},"Especifica\xe7\xe3o da customiza\xe7\xe3o"),(0,o.kt)("p",null,"Nova fun\xe7\xe3o como objetivo fazer importa\xe7\xe3o de produtos em massa atrav\xe9s de um CSV."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"especifica\xe7\xe3o-de-fun\xe7\xf5es-e-rotinas"},"Especifica\xe7\xe3o de fun\xe7\xf5es e rotinas"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"U_SHIMPFLAG")," - Fun\xe7\xe3o para importar itens atrav\xe9s do CSV")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"especifica\xe7\xe3o-de-parametros"},"Especifica\xe7\xe3o de parametros"),(0,o.kt)("p",null,"Nenhum"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"O arquivoi CSV deve conter os campos na sequencia ",(0,o.kt)("strong",{parentName:"p"},'"FILIAL;COD.PROD;QTD MIN EST;QTD DIAS REP"'),".")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"execu\xe7\xe3o-do-processo"},"Execu\xe7\xe3o do Processo"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Acesso a rotina\n",(0,o.kt)("strong",{parentName:"p"},"Atualiza\xe7\xf5es>Compras>Central de Compras*>Est. Min Novos Produtos"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Ao abrir o Browser, v\xe1 em ",(0,o.kt)("strong",{parentName:"p"},"Outras A\xe7\xf5es")," e clica em ",(0,o.kt)("strong",{parentName:"p"},"Importar"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"fd",src:a(8889).Z,width:"637",height:"317"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Vai abrir a tela para selecionar o arquivo CSV",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{alt:"fd",src:a(622).Z,width:"501",height:"332"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Ap\xf3s selecionar o arquivo os produtos vai aparecer na tela conforme mostra abaixo no exemplo:\n",(0,o.kt)("img",{alt:"fd",src:a(2409).Z,width:"1216",height:"415"})))))}d.isMDXComponent=!0},8889:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Tela1-c47fb4e0533ed262b5776720acaa2baa.png"},622:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Tela2-407061d8875de2e3ed33d84bd5c81617.png"},2409:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/Tela3-27e7880e2267b94883956c62fcdd84e8.png"}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4480],{3905:(t,a,e)=>{e.d(a,{Zo:()=>s,kt:()=>g});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var d=n.createContext({}),p=function(t){var a=n.useContext(d),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},s=function(t){var a=p(t.components);return n.createElement(d.Provider,{value:a},t.children)},u="mdxType",c={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=p(e),m=r,g=u["".concat(d,".").concat(m)]||u[m]||c[m]||l;return e?n.createElement(g,o(o({ref:a},s),{},{components:e})):n.createElement(g,o({ref:a},s))}));function g(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,o=new Array(l);o[0]=m;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=t,i[u]="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=e[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}m.displayName="MDXCreateElement"},7352:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=e(7462),r=(e(7294),e(3905));const l={},o="Cadastro de MKP",i={unversionedId:"Rotinas/Venda Assistida/Cadastro_MKP",id:"Rotinas/Venda Assistida/Cadastro_MKP",title:"Cadastro de MKP",description:"Cadastro de MKP - Autorrad",source:"@site/docs/4-Rotinas/Venda Assistida/Cadastro_MKP.md",sourceDirName:"4-Rotinas/Venda Assistida",slug:"/Rotinas/Venda Assistida/Cadastro_MKP",permalink:"/docushark/docs/Rotinas/Venda Assistida/Cadastro_MKP",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SHTRCDTBASE.PRW",permalink:"/docushark/docs/Rotinas/TRC-AGCO/shtrcdtbase"},next:{title:"Importar Lista de Pre\xe7os",permalink:"/docushark/docs/Rotinas/Venda Assistida/Importar Lista de Pre\xe7o"}},d={},p=[{value:"Dados da Customiza\xe7\xe3o",id:"dados-da-customiza\xe7\xe3o",level:2},{value:"Objetivo da customiza\xe7\xe3o",id:"objetivo-da-customiza\xe7\xe3o",level:2},{value:"Especifica\xe7\xe3o de tabelas",id:"especifica\xe7\xe3o-de-tabelas",level:2},{value:"Especifica\xe7\xe3o de INDICE",id:"especifica\xe7\xe3o-de-indice",level:2},{value:"Especifica\xe7\xe3o de fun\xe7\xf5es",id:"especifica\xe7\xe3o-de-fun\xe7\xf5es",level:2},{value:"Especifica\xe7\xe3o de MENU",id:"especifica\xe7\xe3o-de-menu",level:2},{value:"Funcionamento da Rotina",id:"funcionamento-da-rotina",level:2},{value:"Downloads",id:"downloads",level:2}],s={toc:p};function u(t){let{components:a,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,l,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cadastro-de-mkp"},"Cadastro de MKP"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cadastro de MKP - Autorrad")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"dados-da-customiza\xe7\xe3o"},"Dados da Customiza\xe7\xe3o"),(0,r.kt)("p",null,"Analista: Jonathan Torioni\nData: 03/07/2023"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"objetivo-da-customiza\xe7\xe3o"},"Objetivo da customiza\xe7\xe3o"),(0,r.kt)("p",null,"Ter uma tela de cadastro de MKP de seguran\xe7a por linha/marca, onde\nsomente a gest\xe3o geral da Autorrad ou T.I/Digital poder\xe1 ter acesso para altera\xe7\xe3o, uma\nvez cadastrada."),(0,r.kt)("p",null,"Ter uma tela de inser\xe7\xe3o de MKP de produtos, com a possibilidade de\ninser\xe7\xe3o em lote. N\xe3o sendo poss\xedvel um MKP menor que o de seguran\xe7a da\nmarca/linha"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"especifica\xe7\xe3o-de-tabelas"},"Especifica\xe7\xe3o de tabelas"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Alias"),(0,r.kt)("th",{parentName:"tr",align:null},"Campo"),(0,r.kt)("th",{parentName:"tr",align:null},"Tipo"),(0,r.kt)("th",{parentName:"tr",align:null},"Tamanho"),(0,r.kt)("th",{parentName:"tr",align:null},"Decimal"),(0,r.kt)("th",{parentName:"tr",align:null},"Mascara"),(0,r.kt)("th",{parentName:"tr",align:null},"Nome"),(0,r.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PD9"),(0,r.kt)("td",{parentName:"tr",align:null},"PD9_FILIAL"),(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"@!"),(0,r.kt)("td",{parentName:"tr",align:null},"FILIAL"),(0,r.kt)("td",{parentName:"tr",align:null},"FILIAL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PD9"),(0,r.kt)("td",{parentName:"tr",align:null},"PD9_TIPO"),(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"@!"),(0,r.kt)("td",{parentName:"tr",align:null},"TIPO"),(0,r.kt)("td",{parentName:"tr",align:null},"TIPO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PD9"),(0,r.kt)("td",{parentName:"tr",align:null},"PD9_LINHA"),(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"@!"),(0,r.kt)("td",{parentName:"tr",align:null},"LINHA"),(0,r.kt)("td",{parentName:"tr",align:null},"LINHA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PD9"),(0,r.kt)("td",{parentName:"tr",align:null},"PD9_MARCA"),(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"@!"),(0,r.kt)("td",{parentName:"tr",align:null},"MARCA/CLASSE"),(0,r.kt)("td",{parentName:"tr",align:null},"MARCA/CLASSE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PD9"),(0,r.kt)("td",{parentName:"tr",align:null},"PD9_COD"),(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"27"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"@!"),(0,r.kt)("td",{parentName:"tr",align:null},"PRODUTO"),(0,r.kt)("td",{parentName:"tr",align:null},"PRODUTO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PD9"),(0,r.kt)("td",{parentName:"tr",align:null},"PD9_MKP"),(0,r.kt)("td",{parentName:"tr",align:null},"N"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"@!"),(0,r.kt)("td",{parentName:"tr",align:null},"MKP"),(0,r.kt)("td",{parentName:"tr",align:null},"MKP")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"especifica\xe7\xe3o-de-indice"},"Especifica\xe7\xe3o de INDICE"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"INDICE"),(0,r.kt)("th",{parentName:"tr",align:null},"ORDEM"),(0,r.kt)("th",{parentName:"tr",align:null},"CHAVE"),(0,r.kt)("th",{parentName:"tr",align:null},"DESC"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PD9"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"PD9_FILIAL+PD9_LINHA"),(0,r.kt)("td",{parentName:"tr",align:null},"Filial+Linha")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PD9"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"PD9_FILIAL+PD9_MARCA"),(0,r.kt)("td",{parentName:"tr",align:null},"Filial+Marca")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PD9"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"PD9_FILIAL+PD9_TIPO"),(0,r.kt)("td",{parentName:"tr",align:null},"Filial+Tipo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PD9"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"PD9_FILIAL+PD9_COD"),(0,r.kt)("td",{parentName:"tr",align:null},"Filial+Cod")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"especifica\xe7\xe3o-de-fun\xe7\xf5es"},"Especifica\xe7\xe3o de fun\xe7\xf5es"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"U_ACADMKP")," - Cadastro (AxCadastro) responsavel para a formacao de precos da SK - Autorrad"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"U_AMKPOK")," - Funcao responsavel por aprovar o cadastro da axcadastro"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"U_MKPRSEG")," - Funcao responsavel por retornar o mkp de seguran\xe7a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"U_MKPMKP")," - Funcao responsavel por retornar o MKP do produto"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"U_MKPIMP")," - Funcao responsavel por fazer a importacao em lote a partir de um modelo csv"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"especifica\xe7\xe3o-de-menu"},"Especifica\xe7\xe3o de MENU"),(0,r.kt)("p",null,"O cadastro da rotina deve ser realizado no menu de controle de lojas (SIGALOJA)"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"cadastro_menu",src:e(9007).Z,width:"248",height:"149"}),"\n",(0,r.kt)("img",{alt:"cadastro_menu",src:e(940).Z,width:"791",height:"720"})),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"funcionamento-da-rotina"},"Funcionamento da Rotina"),(0,r.kt)("p",null,"Ao acessar a rotina via menu: ",(0,r.kt)("strong",{parentName:"p"},"Atualiza\xe7\xf5es > Autorrad > Cadastro MKP")," a seguinte tela ser\xe1 apresentada:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rotina_Cadastro_MKP",src:e(2382).Z,width:"1280",height:"417"})),(0,r.kt)("p",null,"Clique em Incluir para acessar a tela de inclus\xe3o do MKP:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rotina_Cadastro_MKP",src:e(9553).Z,width:"1280",height:"314"})),(0,r.kt)("p",null,"Nesta tela, existem alguns tipos de cadastros, as regras de MKP por Tipo: ",(0,r.kt)("strong",{parentName:"p"},"Marca e Linha")," ou cadastrar o MKP espec\xedfico por ",(0,r.kt)("strong",{parentName:"p"},"Produto"),"."),(0,r.kt)("p",null,"Para realizar o cadastro espec\xedfico por produto, basta deixar o campo ",(0,r.kt)("strong",{parentName:"p"},"Tipo")," em branco e somente os campos de c\xf3digo de produto e MKP ser\xe3o liberados."),(0,r.kt)("p",null,"Para cadastrar um registro espec\xedfico por ",(0,r.kt)("strong",{parentName:"p"},"Marca")," basta preencher o campo ",(0,r.kt)("strong",{parentName:"p"},"Tipo")," com o M-Marca e somente os campos de ",(0,r.kt)("strong",{parentName:"p"},"Marca/Classe")," e ",(0,r.kt)("strong",{parentName:"p"},"MKP")," ser\xe3o liberados para o cadastro."),(0,r.kt)("p",null,"Para cadastrar um registro espec\xedfico por ",(0,r.kt)("strong",{parentName:"p"},"Linha")," basta preencher o campo ",(0,r.kt)("strong",{parentName:"p"},"Tipo")," com L-Linha e somente os campos de ",(0,r.kt)("strong",{parentName:"p"},"Linha")," e ",(0,r.kt)("strong",{parentName:"p"},"MKP")," ser\xe3o liberados para o cadastro."),(0,r.kt)("p",null,"MKP por Marca/Classe ou Linha, s\xe3o considerados como MKP de seguran\xe7a. Ao tentar cadastrar um MKP de produto menor que o MKP de seguran\xe7a, o sistema impedir\xe1 de concluir o cadastro."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Caso haja um cadastro por marca/linha, e posteriormente seja feito um cadastro espec\xedfico de um produto que \xe9 de uma determinada marca/linha j\xe1 cadastrados anteriormente, o MKP n\xe3o poder\xe1 ser menor que o MKP Geral.",(0,r.kt)("br",{parentName:"strong"}),"Isto foi pr\xe9-estabelecido pela gerencia da filial Autorrad.\n"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"downloads"},"Downloads"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:e(6971).Z},"Download dicon\xe1rio tabela PD9")))}u.isMDXComponent=!0},6971:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/files/Dicionario_PD9-91e70ba8bdff76cf4d75a8f8e62d3219.zip"},9007:(t,a,e)=>{e.d(a,{Z:()=>n});const n="data:image/png;base64,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"},940:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/images/Cadastro_menu_MKP_02-aefb86f69fc48332e13eeb9f12dc20a0.png"},2382:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/images/MKP_1-67b156e3775ec4a124c8fe943e8f6a0a.png"},9553:(t,a,e)=>{e.d(a,{Z:()=>n});const n=e.p+"assets/images/MKP_2-af6ec8ea9509a99bbe209773dd423afb.png"}}]);
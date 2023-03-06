"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4429],{3905:(a,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>f});var r=t(7294);function o(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function n(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,r)}return t}function s(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?n(Object(t),!0).forEach((function(e){o(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function i(a,e){if(null==a)return{};var t,r,o=function(a,e){if(null==a)return{};var t,r,o={},n=Object.keys(a);for(r=0;r<n.length;r++)t=n[r],e.indexOf(t)>=0||(o[t]=a[t]);return o}(a,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);for(r=0;r<n.length;r++)t=n[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(o[t]=a[t])}return o}var c=r.createContext({}),p=function(a){var e=r.useContext(c),t=e;return a&&(t="function"==typeof a?a(e):s(s({},e),a)),t},d=function(a){var e=p(a.components);return r.createElement(c.Provider,{value:e},a.children)},l="mdxType",m={inlineCode:"code",wrapper:function(a){var e=a.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(a,e){var t=a.components,o=a.mdxType,n=a.originalType,c=a.parentName,d=i(a,["components","mdxType","originalType","parentName"]),l=p(t),u=o,f=l["".concat(c,".").concat(u)]||l[u]||m[u]||n;return t?r.createElement(f,s(s({ref:e},d),{},{components:t})):r.createElement(f,s({ref:e},d))}));function f(a,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof a||o){var n=t.length,s=new Array(n);s[0]=u;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=a,i[l]="string"==typeof a?a:o,s[1]=i;for(var p=2;p<n;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9466:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const n={sidebar_position:5},s="Escala Autom\xe1tica (SIGAOFI)",i={unversionedId:"Rotinas/Oficina SIGAOFI/Escala_automatica",id:"Rotinas/Oficina SIGAOFI/Escala_automatica",title:"Escala Autom\xe1tica (SIGAOFI)",description:"----",source:"@site/docs/4-Rotinas/Oficina SIGAOFI/Escala_automatica.md",sourceDirName:"4-Rotinas/Oficina SIGAOFI",slug:"/Rotinas/Oficina SIGAOFI/Escala_automatica",permalink:"/docushark/docs/Rotinas/Oficina SIGAOFI/Escala_automatica",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Or\xe7amento por fases (SIGAOFI)",permalink:"/docushark/docs/Rotinas/Oficina SIGAOFI/Orcamento_fases"},next:{title:"Ordem de Servi\xe7o (SIGAOFI)",permalink:"/docushark/docs/Rotinas/Oficina SIGAOFI/Ordem_Servico"}},c={},p=[{value:"Objetivo",id:"objetivo",level:3},{value:"Procedimentos",id:"procedimentos",level:3}],d={toc:p};function l(a){let{components:e,...t}=a;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"escala-autom\xe1tica-sigaofi"},"Escala Autom\xe1tica (SIGAOFI)"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"objetivo"},"Objetivo"),(0,o.kt)("p",null,"Esta rotina foi criada para possibilitar que o usu\xe1rio realize o cadastro das escalas de\ntrabalho dos produtivos de forma automatizada, sem a necessidade de realizar o\ncadastramento dia a dia, ou seja, registro por registro de forma manual (a forma\nmanual \xe9 realizada atrav\xe9s da rotina Escala Produtivos (OFIOM040). Uma vez\ncadastrados os per\xedodos existentes dentro da empresa para os produtivos, o usu\xe1rio\npoder\xe1 informar as escalas utilizadas por dias da semana, bem como domingos e\nferiados."),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"procedimentos"},"Procedimentos"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ATEN\xc7\xc3O!")," Antes de utilizar esta rotina, \xe9 necess\xe1rio que os per\xedodos estejam\npreviamente cadastrados no sistema. Para isso, utilize a rotina ",(0,o.kt)("strong",{parentName:"p"},"Per\xedodos (OFIOA080)"),"\npara cadastrar os per\xedodos de trabalho existentes para os produtivos."),(0,o.kt)("p",null,"No ",(0,o.kt)("strong",{parentName:"p"},"Oficina (SIGAOFI)"),", acesse ",(0,o.kt)("strong",{parentName:"p"},"Atualiza\xe7\xf5es > Mov Produtivos > Escala Autom\xe1tica (OFIOM270)"),"."),(0,o.kt)("p",null,"Ser\xe1 exibida uma janela contendo as informa\xe7\xf5es necess\xe1rias para que a escala seja\ncadastrada."),(0,o.kt)("p",null,"Informe os campos conforme abaixo:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Produtivo"),": informe qual o c\xf3digo do produtivo que ser\xe1 cadastrada a escala;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Per\xedodo"),": informe para qual per\xedodo deseja cadastrar as escalas. O per\xedodo\nm\xe1ximo permitido pelo sistema \xe9 1 ano. Caso deseje cadastrar um per\xedodo\nmaior do que um ano, ser\xe1 necess\xe1rio repetir a opera\xe7\xe3o para cada ano\ndesejado;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Escalas"),": para cada campo de dia da semana existente aqui, ser\xe1 necess\xe1rio\ninformar um per\xedodo previamente cadastrado. Desta forma, \xe9 ",(0,o.kt)("strong",{parentName:"p"},"OBRIGAT\xd3RIO"),"\ninformar per\xedodos para s\xe1bados, domingos e feriados, mesmo que n\xe3o haja\nexpediente no dia. Nestes casos, cadastre um per\xedodo com todas as\ninforma\xe7\xf5es zeradas e informe seu c\xf3digo para estes dias;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Bot\xe3o ... (Feriados)"),": caso a rotina ",(0,o.kt)("strong",{parentName:"p"},"Feriados (OFIOA380)")," esteja presente no\nmenu do usu\xe1rio, ficar\xe1 dispon\xedvel um bot\xe3o que servir\xe1 de atalho para\nexecu\xe7\xe3o desta mesma rotina, facilitando o cadastramento/ atualiza\xe7\xf5es dos\nferiados do sistema."))),(0,o.kt)("p",null,"Ap\xf3s informar os per\xedodos desejados para todos os dias, clique em ",(0,o.kt)("strong",{parentName:"p"},"ESCALAR")," para que o sistema realize as escalas automaticamente no sistema."),(0,o.kt)("p",null,"Para fechar a rotina, clique em ",(0,o.kt)("strong",{parentName:"p"},"SAIR"),"."),(0,o.kt)("p",null,"Caso deseja conferir as escalas cadastradas, utilize a rotina ",(0,o.kt)("strong",{parentName:"p"},"Escala Produtivos (OFIOM040)"),"."))}l.isMDXComponent=!0}}]);
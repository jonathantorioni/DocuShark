"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3460],{3905:(e,a,s)=>{s.d(a,{Zo:()=>p,kt:()=>g});var o=s(7294);function r(e,a,s){return a in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s,e}function t(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),s.push.apply(s,o)}return s}function i(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?t(Object(s),!0).forEach((function(a){r(e,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):t(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}))}return e}function n(e,a){if(null==e)return{};var s,o,r=function(e,a){if(null==e)return{};var s,o,r={},t=Object.keys(e);for(o=0;o<t.length;o++)s=t[o],a.indexOf(s)>=0||(r[s]=e[s]);return r}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)s=t[o],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var d=o.createContext({}),c=function(e){var a=o.useContext(d),s=a;return e&&(s="function"==typeof e?e(a):i(i({},a),e)),s},p=function(e){var a=c(e.components);return o.createElement(d.Provider,{value:a},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},l=o.forwardRef((function(e,a){var s=e.components,r=e.mdxType,t=e.originalType,d=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),m=c(s),l=r,g=m["".concat(d,".").concat(l)]||m[l]||u[l]||t;return s?o.createElement(g,i(i({ref:a},p),{},{components:s})):o.createElement(g,i({ref:a},p))}));function g(e,a){var s=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var t=s.length,i=new Array(t);i[0]=l;var n={};for(var d in a)hasOwnProperty.call(a,d)&&(n[d]=a[d]);n.originalType=e,n[m]="string"==typeof e?e:r,i[1]=n;for(var c=2;c<t;c++)i[c]=s[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,s)}l.displayName="MDXCreateElement"},6557:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>t,metadata:()=>n,toc:()=>c});var o=s(7462),r=(s(7294),s(3905));const t={sidebar_position:1},i="Wizzard Central de compras",n={unversionedId:"Rotinas/Central de compras/wizzard_central_de_compras",id:"Rotinas/Central de compras/wizzard_central_de_compras",title:"Wizzard Central de compras",description:"Wizzard Central de compras",source:"@site/docs/4-Rotinas/Central de compras/wizzard_central_de_compras.md",sourceDirName:"4-Rotinas/Central de compras",slug:"/Rotinas/Central de compras/wizzard_central_de_compras",permalink:"/docushark/docs/Rotinas/Central de compras/wizzard_central_de_compras",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Rotinas",permalink:"/docushark/docs/category/rotinas"},next:{title:"SK Crossdocking",permalink:"/docushark/docs/Rotinas/Central de compras/shcrossdocking"}},d={},c=[{value:"Dados da Customiza\xe7\xe3o",id:"dados-da-customiza\xe7\xe3o",level:3},{value:"Especifica\xe7\xe3o da Customiza\xe7\xe3o",id:"especifica\xe7\xe3o-da-customiza\xe7\xe3o",level:3},{value:"Especifica\xe7\xf5es dos steps",id:"especifica\xe7\xf5es-dos-steps",level:3},{value:"Cadastro espec\xedfico",id:"cadastro-espec\xedfico",level:3}],p={toc:c};function m(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wizzard-central-de-compras"},"Wizzard Central de compras"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Wizzard Central de compras")),(0,r.kt)("h3",{id:"dados-da-customiza\xe7\xe3o"},"Dados da Customiza\xe7\xe3o"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Analista: Jonathan Torioni"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"especifica\xe7\xe3o-da-customiza\xe7\xe3o"},"Especifica\xe7\xe3o da Customiza\xe7\xe3o"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"O objetivo wizard, \xe9 armazenar todas as prefer\xeancias cadastradas para gerar uma sugest\xe3o de compra com base no hist\xf3rico de vendas dos produtos cadastrados no estoque. Al\xe9m de permitir realizar um cadastro gen\xe9rico (onde todos os produtos ir\xe3o se enquadrar), existe a possibilidade de realizar cadastros espec\xedficos para determinados, produtos, linhas, marcas, grupos, etc."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"especifica\xe7\xf5es-dos-steps"},"Especifica\xe7\xf5es dos steps"),(0,r.kt)("hr",null),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Prazo para Analise\n",(0,r.kt)("img",{alt:"Funcionamento visual",src:s(3401).Z,width:"1202",height:"625"}),"\nNesta tela, ser\xe1 informado a quantidade de dias que o processo autom\xe1tico de avalia\xe7\xe3o do estoque ser\xe1 executado, recomendamos que deixe o campo geral com 7 dias, dentro desses dias o programa ir\xe1 gerar dados estat\xedsticos para as sugest\xf5es de compras.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Per\xedodo de An\xe1lise\n",(0,r.kt)("img",{alt:"Funcionamento visual",src:s(7804).Z,width:"1197",height:"622"}),"\nNesta tela, \xe9 definido os per\xedodos de vendas que ser\xe3o analisadas pela rotina autom\xe1tica, com base na quantidade de dias informadas, o programa ir\xe1 avaliar todas as vendas realizadas do ano anterior e do ano atual. Por conven\xe7\xe3o em reuni\xf5es passadas, obtivemos excelentes resultados com os par\xe2metros Ano anterior com 180 dias e Ano atual com 30.\nRecomendamos que os mesmos permane\xe7am com esta defini\xe7\xe3o.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Arredondamento\n",(0,r.kt)("img",{alt:"Funcionamento visual",src:s(6579).Z,width:"1203",height:"620"}),"\nNesta tela, ser\xe1 definido se os produtos ter\xe3o arredondamento, na pratica isso reflete diretamente nas quantidades sugeridas, durante os c\xe1lculos estat\xedsticos, muitas vezes obtemos valores quebrados, Ex: 4,125 pe\xe7as, para que possamos realizar uma sugest\xe3o efetiva, recomendamos que o par\xe2metro geral esteja com Sim, os arredondamentos seguem o principio matem\xe1tico, acima de 0,5 arredonda para cima e abaixo de 0,5 arredonda para baixo. Ex: 1,51 passa a ser 2,0 e 1,49 passa a ser 1.\nNo que se refere a m\xfaltiplos de compras, o programa de sugest\xe3o de compras j\xe1 consolida os valores pelos seus respectivos m\xfaltiplos, isso significa que por mais que um determinado item tenha sugest\xe3o de 11 unidades, ele consolida pelo m\xfaltiplo de compra.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Dados de C\xe1lculo para an\xe1lise\n",(0,r.kt)("img",{alt:"Funcionamento visual",src:s(5563).Z,width:"1200",height:"623"}),"\nNesta tela, ser\xe1 definido a quantidade de exclus\xf5es de picos e vales das amostras estat\xedsticas coletadas pelo programa de execu\xe7\xe3o autom\xe1tica. Isso est\xe1 relacionado especificamente as formulas matem\xe1ticas utilizadas para os c\xe1lculos. Durante todos os testes realizados, ficou definido a quantidade 1 para exclus\xe3o de picos e 0 para a exclus\xe3o de vales.\nO par\xe2metro Excluir dias zerados, deve permanecer como n\xe3o, isso garantir\xe1 que toda a amostra ser\xe1 preservada, ou seja, tamb\xe9m considera os dias que n\xe3o tiveram vendas nos per\xedodos informados na tela 2 - Per\xedodo de an\xe1lise.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Dados para forma\xe7\xe3o do estoque\n",(0,r.kt)("img",{alt:"Funcionamento visual",src:s(2634).Z,width:"1199",height:"619"}),"\nNesta tela, ser\xe1 definido as preferencias para forma\xe7\xe3o do estoque, isso reflete diretamente na sugest\xe3o de compras, onde, no momento da gera\xe7\xe3o da sugest\xe3o, o programa ir\xe1 identificar os BO Fabrica, Transito Transf., Estoque atual e Produtos por reposi\xe7\xe3o de garantias, e ir\xe1 considerar ou n\xe3o esses valores para definir a quantidade sugerida.\nEx: Se o produto 32208 estiver com 30 unidades em BO Fabrica, e o programa calcular uma sugest\xe3o de 50 unidades, ele ir\xe1 consultar o par\xe2metro Excluir BO Fabrica e estiver como Sim, ele ir\xe1 desconsiderar os BO e ir\xe1 sugerir as 50 unidades, caso o par\xe2metro esteja com N\xe3o, ele passa a considerar os BO e ir\xe1 sugerir a compra de apenas 20 unidades. O mesmo principio segue para os outros par\xe2metros.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Percentual de ajuste\n",(0,r.kt)("img",{alt:"Funcionamento visual",src:s(4380).Z,width:"1202",height:"620"}),"\nNesta tela, ser\xe1 definido o percentual de ajuste para cada categoria informada, ou geral. Quando n\xe3o preenchido o programa ir\xe1 considerar os percentuais de ajuste como 0.\nOs percentuais de ajuste servem basicamente para caso voc\xea identifique que os c\xe1lculos de sugest\xe3o de compras n\xe3o estejam indicando quantidades o suficiente para abastecer a filial pelo per\xedodo determinado (na tela seguinte), voc\xea possa acrescentar o percentual para o valor ser ajustado para mais.\nEx: Supondo que eu defini prazo m\xednimo de dias de estoque para 60 dias, e com base nisso, a sugest\xe3o de compra identificou que para o produto 32208, seria necess\xe1rio comprar 100 unidades, por\xe9m o comprador com a sua experiencia identificou que 100 unidades n\xe3o conseguem suprir a filial por 60 dias e que a quantidade ideal seria 110. Para este caso, recomenda-se criar um cadastro no wizard espec\xedfico para este produto e no percentual de ajuste, informar o conte\xfado 10 na categoria Produto. Dessa forma o programa ir\xe1 sugerir 10% a mais na sua compra, sendo 110 unidades.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Prazo m\xednimo para dias de estoque\n",(0,r.kt)("img",{alt:"Funcionamento visual",src:s(3908).Z,width:"1206",height:"625"}),"\nEsta \xe9 uma das telas com maior import\xe2ncia em todo o cadastro do Wizard. Nesta tela, ser\xe1 definido a quantidade de dias para os produtos em estoque, Ex: Se informado 60 dias no campo Geral, o Central de compras ir\xe1 gerar uma sugest\xe3o de compras (para todos os produtos que tenham c\xe1lculos estat\xedsticos), sugerindo a compra de x produtos, esse x produtos ser\xe3o a quantidade necess\xe1ria para abastecer a filial por 60 dias, sem a necessidade recompra dentro deste per\xedodo.\nEx: Produto 32208 para 60 dias, ir\xe1 me sugerir comprar 100 unidades, para 30 dias, ir\xe1 me sugerir comprar 50 unidades.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Quantidade m\xednima de produtos em estoque\n",(0,r.kt)("img",{alt:"Funcionamento visual",src:s(5105).Z,width:"1202",height:"623"}),"\nNesta tela, dever\xe1 ser informado a quantidade m\xednima de produtos em estoque, recomendamos fortemente que utilizem o cadastro de produtos para definir a quantidade m\xednima de produtos em estoque e mantenha essa tela mantenha com os preenchimentos iguais a 0\nEx: Caso voc\xea tenham uma mercadoria que custe 500 mil reais, e voc\xea preenche essa tela com 7, o programa de sugest\xe3o de compra ir\xe1 indicar para voc\xea comprar 7 unidades deste produto para ter de estoque m\xednimo, isso pode acarretar em uma sugest\xe3o com o valor de 3,5 milh\xf5es de reais.\nObs: Use essa tela com muita cautela.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Par\xe2metros Gerais\n",(0,r.kt)("img",{alt:"Funcionamento visual",src:s(1017).Z,width:"1202",height:"621"}),"\nNesta tela, ser\xe1 configurado a exclus\xe3o em porcentagem das curvas e o intervalo de confian\xe7a.\nA exclus\xe3o da curva segue o mesmo principio explicado na tela 6, por\xe9m excluindo a quantidade sugerida em porcentagem dos produtos com suas respectivas curvas.\nO intervalo de confian\xe7a se refere a uma porcentagem definida nas formulas matem\xe1ticas para os c\xe1lculos estat\xedsticos.\nPor padr\xe3o definimos 99,5%, isso indica que em 99,5 % das sugest\xf5es, as quantidades sugeridas conseguir\xe3o atender as necessidades da filial conforme os par\xe2metros preenchidos."))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Observa\xe7\xe3o: As orienta\xe7\xf5es acima foram exemplificando um cadastro gen\xe9rico, logo todos os produtos que tiverem c\xe1lculos estat\xedsticos seguir\xe3o essas parametriza\xe7\xf5es.\nTodas as filiais devem possuir esse cadastro generalizado, pois \xe9 com base nele que os dados estat\xedsticos ser\xe3o gerados. Abaixo vou exemplificar um cadastro para um produto espec\xedfico.")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"cadastro-espec\xedfico"},"Cadastro espec\xedfico"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"As orienta\xe7\xf5es abaixo s\xe3o para um produto espec\xedfico, mas o mesmo conceito se aplica para qualquer linha, categoria, curva, etc."),(0,r.kt)("p",null,"Repare que como o produto \xe9 espec\xedfico, todos os dados s\xe3o pensando apenas no produto que est\xe1 sendo cadastrando, nas telas 1, 3, 5, 6, 7 e 8  sempre preenchida na categoria do produto.\nQuando for cadastrar regrar para uma determinada categoria, grupo, subgrupo... deve-se seguir o preenchimento nas telas 1, 3, 5, 6, 7 e 8."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Funcionamento visual",src:s(7274).Z,width:"1204",height:"625"}),"\n",(0,r.kt)("img",{alt:"Funcionamento visual",src:s(9038).Z,width:"1205",height:"620"}),"\n",(0,r.kt)("img",{alt:"Funcionamento visual",src:s(2446).Z,width:"1202",height:"622"}),"\n",(0,r.kt)("img",{alt:"Funcionamento visual",src:s(5170).Z,width:"1202",height:"623"}),"\n",(0,r.kt)("img",{alt:"Funcionamento visual",src:s(7367).Z,width:"1203",height:"621"}),"\n",(0,r.kt)("img",{alt:"Funcionamento visual",src:s(6948).Z,width:"1203",height:"622"}),"\n",(0,r.kt)("img",{alt:"Funcionamento visual",src:s(6843).Z,width:"1201",height:"621"}),"\n",(0,r.kt)("img",{alt:"Funcionamento visual",src:s(5889).Z,width:"1204",height:"626"}),"\n",(0,r.kt)("img",{alt:"Funcionamento visual",src:s(8250).Z,width:"1202",height:"620"})),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Observa\xe7\xe3o: Mesmo tendo cadastros gen\xe9ricos, quando um cadastro \xe9 espec\xedfico, a sugest\xe3o e os c\xe1lculos sempre ser\xe3o com base neste cadastro espec\xedfico e os demais produtos seguem o gen\xe9rico.")))}m.isMDXComponent=!0},7274:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/central_compras_esp1-e161d4e214887aba32e9f1452181152c.png"},9038:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/central_compras_esp2-920777f263b0820aa30d3f53f6a311b9.png"},2446:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/central_compras_esp3-bef300cb1c390d5738868adfa3024fb0.png"},5170:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/central_compras_esp4-56bd6e6f8eef907c11292c9e8405664f.png"},7367:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/central_compras_esp5-9ca2537b9246db8939d454a6c3bc923a.png"},6948:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/central_compras_esp6-1f4fdcf9fb499037e9618645309a1cff.png"},6843:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/central_compras_esp7-f544a2941ebf39e2dfbc86e81c22d95f.png"},5889:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/central_compras_esp8-46c1037363f7abe001d182f0adef32e2.png"},8250:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/central_compras_esp9-955b7e9fea76dbe24219050900fd3f2d.png"},3401:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/central_compras_step1-20812ee224f8b8f62935fab82fa3484e.png"},7804:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/central_compras_step2-9d9f344a7683d34891e3835a51c9a179.png"},6579:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/central_compras_step3-fdbe0a7141e3ef706ec2718fe9e255ee.png"},5563:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/central_compras_step4-da6d68a28914326a3c8357b3fbbdc9d1.png"},2634:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/central_compras_step5-9b0370f6fd8b3f96d9feeaaed6e872e1.png"},4380:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/central_compras_step6-3a73c9a4186e49b53308d3e88373a756.png"},3908:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/central_compras_step7-6ef55b617e5f96e3d6ad914184ad2ead.png"},5105:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/central_compras_step8-335812fc1ce38d585cceb44b001e1495.png"},1017:(e,a,s)=>{s.d(a,{Z:()=>o});const o=s.p+"assets/images/central_compras_step9-1802ebe9fe9e584318b73b1ab9e79e8d.png"}}]);
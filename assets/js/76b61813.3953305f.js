"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1699],{3905:(t,a,e)=>{e.d(a,{Zo:()=>d,kt:()=>N});var n=e(7294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function o(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var p=n.createContext({}),m=function(t){var a=n.useContext(p),e=a;return t&&(e="function"==typeof t?t(a):i(i({},a),t)),e},d=function(t){var a=m(t.components);return n.createElement(p.Provider,{value:a},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=m(e),k=r,N=s["".concat(p,".").concat(k)]||s[k]||u[k]||l;return e?n.createElement(N,i(i({ref:a},d),{},{components:e})):n.createElement(N,i({ref:a},d))}));function N(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=k;var o={};for(var p in a)hasOwnProperty.call(a,p)&&(o[p]=a[p]);o.originalType=t,o[s]="string"==typeof t?t:r,i[1]=o;for(var m=2;m<l;m++)i[m]=e[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,e)}k.displayName="MDXCreateElement"},1364:(t,a,e)=>{e.r(a),e.d(a,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=e(7462),r=(e(7294),e(3905));const l={},i="MENVMAIL.PRW",o={unversionedId:"Fontes/menvmail",id:"Fontes/menvmail",title:"MENVMAIL.PRW",description:"Envio de e-mail ass\xedncrono Protheus",source:"@site/docs/2-Fontes/menvmail.md",sourceDirName:"2-Fontes",slug:"/Fontes/menvmail",permalink:"/docushark/docs/Fontes/menvmail",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"CONSCLI.PRW",permalink:"/docushark/docs/Fontes/conscli"},next:{title:"MSCHXML.PRW",permalink:"/docushark/docs/Fontes/mschxml"}},p={},m=[{value:"<strong>Dados da Customiza\xe7\xe3o</strong>",id:"dados-da-customiza\xe7\xe3o",level:3},{value:"<strong>Especifica\xe7\xe3o da Customiza\xe7\xe3o</strong>",id:"especifica\xe7\xe3o-da-customiza\xe7\xe3o",level:3},{value:"<strong>Especifica\xe7\xf5es das Fun\xe7\xf5es e Rotinas</strong>",id:"especifica\xe7\xf5es-das-fun\xe7\xf5es-e-rotinas",level:3},{value:"<strong>Especifica\xe7\xf5es de tabelas/campos/par\xe2metros</strong>",id:"especifica\xe7\xf5es-de-tabelascampospar\xe2metros",level:3},{value:"<strong>Crit\xe9rios para Valida\xe7\xe3o</strong>",id:"crit\xe9rios-para-valida\xe7\xe3o",level:3}],d={toc:m};function s(t){let{components:a,...e}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,e,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"menvmailprw"},"MENVMAIL.PRW"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Envio de e-mail ass\xedncrono Protheus")),(0,r.kt)("h3",{id:"dados-da-customiza\xe7\xe3o"},(0,r.kt)("strong",{parentName:"h3"},"Dados da Customiza\xe7\xe3o")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Analista: Jonathan Torioni"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"especifica\xe7\xe3o-da-customiza\xe7\xe3o"},(0,r.kt)("strong",{parentName:"h3"},"Especifica\xe7\xe3o da Customiza\xe7\xe3o")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Est\xe1 customiza\xe7\xe3o tem o objetivo de realizar o envio de e-mails ass\xedncronos."),(0,r.kt)("p",null,"Inicialmente est\xe1 customiza\xe7\xe3o foi desenvolvida para destravar as libera\xe7\xf5es, visto os problemas recorrentes de lentid\xe3o na plataforma G-Suite (Google - Gmail)."),(0,r.kt)("p",null,'Todos os e-mail ser\xe3o enviados via AWS, visando ter mais simplicidade nos envios e nas autentica\xe7\xf5es das contas. Esta decis\xe3o foi tomada, pois ap\xf3s algumas autentica\xe7\xf5es com a Google - Gmail, a plataforma come\xe7ou a bloquear os "Aplicativos menos seguros".'),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"especifica\xe7\xf5es-das-fun\xe7\xf5es-e-rotinas"},(0,r.kt)("strong",{parentName:"h3"},"Especifica\xe7\xf5es das Fun\xe7\xf5es e Rotinas")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"U_MENVMAIL(_aParam)")," - Utilizada para realizar a integra\xe7\xe3o com o envio de e-mail ass\xedncrono. Esta fun\xe7\xe3o \xe9 respons\xe1vel por pegar as informa\xe7\xf5es de (Origem, Destino, Assunto, Corpo do e-mail e Anexos)."),(0,r.kt)("p",null,"Esta fun\xe7\xe3o tamb\xe9m \xe9 respons\xe1vel por criptografar os dados da Conta, Senha e Servidor SMTP do AWS e gravar os dados na tabela PCM."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"U_MPRCMAIL()")," - Fun\xe7\xe3o respons\xe1vel pela separa\xe7\xe3o do recnos da tabela PCM que contenham a coluna PCM_STATUS em 1 ou 4. "),(0,r.kt)("p",null,"Est\xe1 fun\xe7\xe3o ser\xe1 configurada no JOB com um refresh rate de um minuto."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"U_MSEND(_cEmp,_cFil, _aRecno)")," - Fun\xe7\xe3o respons\xe1vel pelo envio de e-mail dos recnos passados pela fun\xe7\xe3o U_MPRCMAIL()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Observa\xe7\xf5es")),(0,r.kt)("p",null,"As fun\xe7\xf5es U_MPRCMAIL e U_MSEND s\xe3o feitas exclusivamente para execu\xe7\xe3o via JOB."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"especifica\xe7\xf5es-de-tabelascampospar\xe2metros"},(0,r.kt)("strong",{parentName:"h3"},"Especifica\xe7\xf5es de tabelas/campos/par\xe2metros")),(0,r.kt)("hr",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Alias"),(0,r.kt)("th",{parentName:"tr",align:null},"Campo"),(0,r.kt)("th",{parentName:"tr",align:null},"Tipo"),(0,r.kt)("th",{parentName:"tr",align:null},"Tamanho"),(0,r.kt)("th",{parentName:"tr",align:null},"Decimal"),(0,r.kt)("th",{parentName:"tr",align:null},"Mascara"),(0,r.kt)("th",{parentName:"tr",align:null},"Nome"),(0,r.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PCM"),(0,r.kt)("td",{parentName:"tr",align:null},"PCM_EMPORI"),(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"@!"),(0,r.kt)("td",{parentName:"tr",align:null},"EMP ORIG"),(0,r.kt)("td",{parentName:"tr",align:null},"EMPRESA ORIGEM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PCM"),(0,r.kt)("td",{parentName:"tr",align:null},"PCM_SMTPPW"),(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"254"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"@!"),(0,r.kt)("td",{parentName:"tr",align:null},"SENHA SMTP"),(0,r.kt)("td",{parentName:"tr",align:null},"SENHA SMTP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PCM"),(0,r.kt)("td",{parentName:"tr",align:null},"PCM_SMTPSV"),(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"254"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"@!"),(0,r.kt)("td",{parentName:"tr",align:null},"SERVER SMTP"),(0,r.kt)("td",{parentName:"tr",align:null},"SERVER SMTP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PCM"),(0,r.kt)("td",{parentName:"tr",align:null},"PCM_SMTPCT"),(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"254"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"@!"),(0,r.kt)("td",{parentName:"tr",align:null},"CONTA SMTP"),(0,r.kt)("td",{parentName:"tr",align:null},"CONTA SMTP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PCM"),(0,r.kt)("td",{parentName:"tr",align:null},"PCM_STATUS"),(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"@!"),(0,r.kt)("td",{parentName:"tr",align:null},"STATUS ENV"),(0,r.kt)("td",{parentName:"tr",align:null},"STATUS ENVIO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PCM"),(0,r.kt)("td",{parentName:"tr",align:null},"PCM_FROM"),(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"@!"),(0,r.kt)("td",{parentName:"tr",align:null},"FROM"),(0,r.kt)("td",{parentName:"tr",align:null},"FROM")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PCM"),(0,r.kt)("td",{parentName:"tr",align:null},"PCM_DEST"),(0,r.kt)("td",{parentName:"tr",align:null},"M"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"@M"),(0,r.kt)("td",{parentName:"tr",align:null},"DESTINATARIO"),(0,r.kt)("td",{parentName:"tr",align:null},"DESTINATARIO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PCM"),(0,r.kt)("td",{parentName:"tr",align:null},"PCM_ASSUN"),(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"254"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"@!"),(0,r.kt)("td",{parentName:"tr",align:null},"ASSUNTO"),(0,r.kt)("td",{parentName:"tr",align:null},"ASSUNTO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PCM"),(0,r.kt)("td",{parentName:"tr",align:null},"PCM_BODY"),(0,r.kt)("td",{parentName:"tr",align:null},"M"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"@M"),(0,r.kt)("td",{parentName:"tr",align:null},"BODY"),(0,r.kt)("td",{parentName:"tr",align:null},"BODY")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PCM"),(0,r.kt)("td",{parentName:"tr",align:null},"PCM_ATTAC"),(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"254"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"@!"),(0,r.kt)("td",{parentName:"tr",align:null},"ANEXO"),(0,r.kt)("td",{parentName:"tr",align:null},"ANEXO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PCM"),(0,r.kt)("td",{parentName:"tr",align:null},"PCM_CUSRID"),(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"@!"),(0,r.kt)("td",{parentName:"tr",align:null},"ID USUARIO"),(0,r.kt)("td",{parentName:"tr",align:null},"ID USUARIO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PCM"),(0,r.kt)("td",{parentName:"tr",align:null},"PCM_RC4"),(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"99"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"@!"),(0,r.kt)("td",{parentName:"tr",align:null},"CHAVE RC4"),(0,r.kt)("td",{parentName:"tr",align:null},"CHAVE DECRIP RC4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PCM"),(0,r.kt)("td",{parentName:"tr",align:null},"PCM_DTIN"),(0,r.kt)("td",{parentName:"tr",align:null},"D"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"@D"),(0,r.kt)("td",{parentName:"tr",align:null},"DATA INC"),(0,r.kt)("td",{parentName:"tr",align:null},"DATA INCLUSAO DO ENVIO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PCM"),(0,r.kt)("td",{parentName:"tr",align:null},"PCM_HRIN"),(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"@!"),(0,r.kt)("td",{parentName:"tr",align:null},"HORA INC"),(0,r.kt)("td",{parentName:"tr",align:null},"HORA INCLUSAO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PCM"),(0,r.kt)("td",{parentName:"tr",align:null},"PCM_DTOUT"),(0,r.kt)("td",{parentName:"tr",align:null},"D"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"@D"),(0,r.kt)("td",{parentName:"tr",align:null},"DATA SAIDA"),(0,r.kt)("td",{parentName:"tr",align:null},"DATA DE SAIDA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PCM"),(0,r.kt)("td",{parentName:"tr",align:null},"PCM_HROUT"),(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"@!"),(0,r.kt)("td",{parentName:"tr",align:null},"HORA SAIDA"),(0,r.kt)("td",{parentName:"tr",align:null},"HORA SAIDA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PCM"),(0,r.kt)("td",{parentName:"tr",align:null},"PCM_MSERR"),(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"99"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"@!"),(0,r.kt)("td",{parentName:"tr",align:null},"MSG ERRO"),(0,r.kt)("td",{parentName:"tr",align:null},"MENSAGEM DE ERRO")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PCM"),(0,r.kt)("td",{parentName:"tr",align:null},"PCM_ROTINA"),(0,r.kt)("td",{parentName:"tr",align:null},"C"),(0,r.kt)("td",{parentName:"tr",align:null},"50"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"@!"),(0,r.kt)("td",{parentName:"tr",align:null},"ROTINA"),(0,r.kt)("td",{parentName:"tr",align:null},"ROTINA")))),(0,r.kt)("p",null,"A tabela PCM deve ser criada com compartilhamento entre filiais, empresas e grupos com o nome PCMG01.\nAp\xf3s a cria\xe7\xe3o da tabela, deve-se rodar a cria\xe7\xe3o de campos utilizando a ferramenta MDIC importando o arquivos schema_campos_pcm.txt na pasta \\system."),(0,r.kt)("p",null,"A tabela PCM deve ser importada na SX2 de todas as empresas, juntamente com a tabela SIX."),(0,r.kt)("p",null,"Criar o par\xe2metro ES_MAILASS na tabela SX6 de todas as empresas da producao27 e producaosk. Este par\xe2metro ser\xe1 respons\xe1vel por definir se o envio de e-mail ser\xe1 de forma ass\xedncrona ou da forma tradicional.\nAo criar este par\xe2metro, deixe o conte\xfado como .F. para que ap\xf3s a implanta\xe7\xe3o, possamos controlar o envio por empresas e testar a estabilidade da aplica\xe7\xe3o."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"crit\xe9rios-para-valida\xe7\xe3o"},(0,r.kt)("strong",{parentName:"h3"},"Crit\xe9rios para Valida\xe7\xe3o")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Efetivar a libera\xe7\xe3o e verificar se as informa\xe7\xf5es do e-mail em quest\xe3o se encontram na tabela PCM com o Status 1."),(0,r.kt)("p",null,"Ap\xf3s isso rodar a fun\xe7\xe3o U_MPRCMAIL() e verificar se o status altera de 1 para 6."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Status:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1 - EMAIL RECEBIDO\n4 - EMAIL N\xc3O TRANSMITIDO\n6 - EMAIL ENVIADO\n")),(0,r.kt)("p",null,"Para os e-mails com status 4, \xe9 informada o motivo da falha na transmis\xe3o na coluna PCM_MSERR.\nCaso o envio de e-mail esteja com o status 4, verifique se dentro do appserver.ini consta a Session ","[MAIL]","."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[MAIL]\nAUTHLOGIN = 1\nAUTHNTLM  = 1\nAUTHPLAIN = 1\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Documenta\xe7\xe3o oficial"),": ",(0,r.kt)("a",{parentName:"p",href:"https://centraldeatendimento.totvs.com/hc/pt-br/articles/360016727371-MP-ADVPL-ERRO-THE-USER-COMMAND-FAILED"},"https://centraldeatendimento.totvs.com/hc/pt-br/articles/360016727371-MP-ADVPL-ERRO-THE-USER-COMMAND-FAILED")))}s.isMDXComponent=!0}}]);
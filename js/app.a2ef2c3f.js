(function(e){function t(t){for(var c,i,a=t[0],l=t[1],u=t[2],d=0,b=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&b.push(r[i][0]),r[i]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);s&&s(t);while(b.length)b.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],c=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(c=!1)}c&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},r={app:0},o=[];function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var s=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"01af":function(e,t,n){},"036f":function(e,t,n){},"0d66":function(e,t,n){},1702:function(e,t,n){},"176b":function(e,t,n){},"1ce1":function(e,t,n){"use strict";n("709c")},2537:function(e,t,n){},"262b":function(e,t,n){"use strict";n("52b8")},"26b3":function(e,t,n){"use strict";n("748d")},"362f":function(e,t,n){"use strict";n("2537")},"3bdf":function(e,t,n){"use strict";n("7959")},"3dc8":function(e,t,n){"use strict";n("d0ce")},4040:function(e,t,n){"use strict";n("598f")},"46e8":function(e,t,n){"use strict";n("47cf")},"47cf":function(e,t,n){},4991:function(e,t,n){},"4a58":function(e,t,n){},"4cf3":function(e,t,n){"use strict";n("01af")},"52b8":function(e,t,n){},"53cf":function(e,t,n){},"598f":function(e,t,n){},"59d1":function(e,t,n){e.exports=n.p+"img/plus-circle-solid.cff29527.svg"},"5c38":function(e,t,n){e.exports=n.p+"img/search-solid.1ba86ee0.svg"},6204:function(e,t,n){e.exports=n.p+"img/minus-circle-solid.3af80343.svg"},"62a3":function(e,t,n){"use strict";n("0d66")},"709c":function(e,t,n){},"748d":function(e,t,n){},7959:function(e,t,n){},8801:function(e,t,n){e.exports=n.p+"img/dollar-sign-solid.7e6631da.svg"},9010:function(e,t,n){e.exports=n.p+"img/info-circle-solid.f8b35438.svg"},a61d:function(e,t,n){"use strict";n("1702")},ac0b:function(e,t,n){e.exports=n.p+"img/exclamation-circle-solid.920f2fad.svg"},b9e0:function(e,t,n){},ba55:function(e,t,n){e.exports=n.p+"img/app-logo.9586e1de.png"},c979:function(e,t,n){e.exports=n.p+"img/calendar-day-solid.14565641.svg"},ca0b:function(e,t,n){"use strict";n("176b")},ca6e:function(e,t,n){e.exports=n.p+"img/box-solid.516bd7ae.svg"},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r=Object(c["i"])("div",{id:"modal"},null,-1);function o(e,t,n,o,i,a){var l=Object(c["z"])("RouterView");return Object(c["s"])(),Object(c["f"])(c["a"],null,[Object(c["i"])(l,null,{default:Object(c["F"])((function(e){var t=e.Component;return[Object(c["i"])(c["c"],{name:"slide-fade",mode:"out-in"},{default:Object(c["F"])((function(){return[(Object(c["s"])(),Object(c["f"])(Object(c["A"])(t)))]})),_:2},1024)]})),_:1}),r],64)}var i=n("1da1"),a=(n("96cf"),n("d3b7"),[function(e){var t=e.target.result;t.createObjectStore("products",{keyPath:"id",autoIncrement:!0}),t.createObjectStore("records",{keyPath:"id",autoIncrement:!0})}]);function l(e){var t=e.oldVersion;if(e.newVersion)while(t<e.newVersion)a[t](e),t++}var u="Sorry, but the IndexedDB is not available in your browser";function s(e){return d.apply(this,arguments)}function d(){return d=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){window.indexedDB||n(new Error(u));var c=window.indexedDB.open(t.dbName,t.dbVersion);c.onsuccess=function(n){t.database=n.target.result,e(t)},c.onupgradeneeded=function(n){l(n),t.database=n.target.result,e(t)},c.onerror=function(e){n(e)}})));case 1:case"end":return e.stop()}}),e)}))),d.apply(this,arguments)}function b(e,t,n){return p.apply(this,arguments)}function p(){return p=Object(i["a"])(regeneratorRuntime.mark((function e(t,n,c){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){var o,i=null===(o=t.database)||void 0===o?void 0:o.transaction(n).objectStore(n).get(c);i&&(i.onsuccess=function(){e(i.result)},i.onerror=function(e){r(e)})})));case 1:case"end":return e.stop()}}),e)}))),p.apply(this,arguments)}function f(e,t){return j.apply(this,arguments)}function j(){return j=Object(i["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,c){var r,o=null===(r=t.database)||void 0===r?void 0:r.transaction(n).objectStore(n).getAll();o&&(o.onsuccess=function(){e(o.result)},o.onerror=function(e){c(e)})})));case 1:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}function v(e,t,n){return O.apply(this,arguments)}function O(){return O=Object(i["a"])(regeneratorRuntime.mark((function e(t,n,c){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){var o,i=null===(o=t.database)||void 0===o?void 0:o.transaction(n,"readwrite").objectStore(n).add(c);i&&(i.onsuccess=function(){e()},i.onerror=function(e){r(e)})})));case 1:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function m(e,t,n){return g.apply(this,arguments)}function g(){return g=Object(i["a"])(regeneratorRuntime.mark((function e(t,n,c){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){var o,i=null===(o=t.database)||void 0===o?void 0:o.transaction(n,"readwrite").objectStore(n).put(c);i&&(i.onsuccess=function(){e()},i.onerror=function(e){r(e)})})));case 1:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function h(e,t,n){return y.apply(this,arguments)}function y(){return y=Object(i["a"])(regeneratorRuntime.mark((function e(t,n,c){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){var o,i=null===(o=t.database)||void 0===o?void 0:o.transaction(n,"readwrite").objectStore(n).delete(c);i&&(i.onsuccess=function(){e()},i.onerror=function(e){r(e)})})));case 1:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}var C=Object(c["j"])({name:"App",setup:function(){var e={dbName:"StudioDB",dbVersion:1};s(e).then(),Object(c["u"])("dbConnection",e)}});n("262b");C.render=o;var w=C,k=n("6c02"),A=n("ba55"),x=n.n(A),S=Object(c["G"])("data-v-65351af3");Object(c["v"])("data-v-65351af3");var I={class:"home"},P=Object(c["i"])("div",{class:"header"},[Object(c["i"])("div",{class:"title"},"Cake App"),Object(c["i"])("div",{class:"subtitle"},"App de Controle de Vendas")],-1),R=Object(c["i"])("div",{class:"logo"},[Object(c["i"])("img",{src:x.a,alt:"Logo do aplicativo"})],-1),V=Object(c["i"])("div",{class:"instructions"},"Selecione uma opção",-1),B={class:"cards"},_={class:"footer"},E={class:"release-notes"};Object(c["t"])();var F=S((function(e,t,n,r,o,i){var a=Object(c["z"])("Card"),l=Object(c["z"])("ReleaseModal");return Object(c["s"])(),Object(c["f"])("div",I,[P,R,V,Object(c["i"])("div",B,[Object(c["i"])(a,{description:"Minhas Vendas",onClick:t[1]||(t[1]=function(t){return e.navigateTo({name:"Records"})})}),Object(c["i"])(a,{description:"Meus Produtos",onClick:t[2]||(t[2]=function(t){return e.navigateTo({name:"Products"})})}),Object(c["i"])(a,{description:"Relatórios",onClick:t[3]||(t[3]=function(t){return e.navigateTo({name:"PlaceholderView"})})})]),Object(c["i"])("div",_," Cake App v"+Object(c["C"])(e.releaseNotes[e.releaseNotes.length-1].version)+" @ 2021 ",1),Object(c["i"])("div",E,[Object(c["i"])("a",{href:"#",onClick:t[4]||(t[4]=function(){return e.openReleaseNotes&&e.openReleaseNotes.apply(e,arguments)})},"Abrir notas de versão")]),Object(c["i"])(l,{ref:"releaseModal"},null,512)])})),N=(n("fb6a"),n("25f0"),[{version:"1.00",descriptions:["Primeiro Acesso!","Olá! Este é o seu primeiro acesso ao app.","* Para instalar o app no celular, toque em 'Acicionar o app Cake App à tela inicial'","* Para instalar o app no computador, clique em 'Instalar' na parte superior direita da tela do seu navegador.","Esta é a versão inicial do aplicativo, com funções de registro de vendas e produtos de forma simplificada."]}]),z=(n("a4d3"),n("e01a"),Object(c["G"])("data-v-919d9780"));Object(c["v"])("data-v-919d9780");var D={class:"card"};Object(c["t"])();var L=z((function(e,t,n,r,o,i){return Object(c["s"])(),Object(c["f"])("div",D,Object(c["C"])(e.description),1)})),M=Object(c["j"])({name:"Card",props:{description:{type:String,default:"Card Description"}}});n("62a3");M.render=L,M.__scopeId="data-v-919d9780";var T=M,G=n("ac0b"),q=n.n(G),H=Object(c["G"])("data-v-0312345e");Object(c["v"])("data-v-0312345e");var U={class:"container"},J=Object(c["i"])("img",{src:q.a,alt:"Exclamation mark"},null,-1),$=Object(c["i"])("div",{class:"title"},"Seu App foi Atualizado!",-1),Y={class:"content"},W={class:"version"};Object(c["t"])();var K=H((function(e,t,n,r,o,i){var a=Object(c["z"])("Button");return Object(c["s"])(),Object(c["f"])(c["b"],{to:"#modal"},[Object(c["i"])("div",{class:["release-modal",{visible:e.isOpened}]},[Object(c["i"])("div",U,[J,$,Object(c["i"])("div",Y,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(e.releaseItems,(function(e){return Object(c["s"])(),Object(c["f"])("div",{key:e.version,class:"release-item"},[Object(c["i"])("p",W,"Versão "+Object(c["C"])(e.version),1),(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(e.descriptions,(function(e,t){return Object(c["s"])(),Object(c["f"])("p",{key:t},Object(c["C"])(e),1)})),128))])})),128))]),Object(c["i"])("div",null,[Object(c["i"])(a,{isAlternativeColor:"",label:"Confirmar",onClick:e.close},null,8,["onClick"])])])],2)])})),Q=Object(c["G"])("data-v-f7b353d6"),X=Q((function(e,t,n,r,o,i){return Object(c["s"])(),Object(c["f"])("button",{class:[{"alternative-color":e.isAlternativeColor},"button"]},Object(c["C"])(e.label),3)})),Z=Object(c["j"])({name:"Button",props:{label:{type:String,default:"Label"},isAlternativeColor:{type:Boolean,default:!1}}});n("ca0b");Z.render=X,Z.__scopeId="data-v-f7b353d6";var ee=Z,te=Object(c["j"])({name:"ReleaseModal",components:{Button:ee},setup:function(){var e=Object(c["x"])(!1),t=Object(c["x"])([]),n=function(n){t.value=n,e.value=!0},r=function(){e.value=!1};return{isOpened:e,open:n,close:r,releaseItems:t}}});n("26b3");te.render=K,te.__scopeId="data-v-0312345e";var ne=te,ce=Object(c["j"])({name:"Home",components:{Card:T,ReleaseModal:ne},setup:function(){var e=Object(c["x"])();null===localStorage.getItem("releaseNotesCounter")&&localStorage.setItem("releaseNotesCounter","0"),Object(c["q"])((function(){var t=localStorage.getItem("releaseNotesCounter");if(t){var n=parseInt(t,10);n<N.length&&(e.value.open(N.slice(n,N.length)),localStorage.setItem("releaseNotesCounter",N.length.toString()))}}));var t=function(){e.value.open(N)};return{releaseModal:e,releaseNotes:N,openReleaseNotes:t}}});n("de27");ce.render=F,ce.__scopeId="data-v-65351af3";var re=ce,oe=Object(c["G"])("data-v-666ce878");Object(c["v"])("data-v-666ce878");var ie={class:"products"};Object(c["t"])();var ae=oe((function(e,t,r,o,i,a){var l=Object(c["z"])("ScrollableList");return Object(c["s"])(),Object(c["f"])("div",ie,[Object(c["i"])(l,{title:"Meus Produtos",icon:n("ca6e"),searchPlaceholder:"Pesquisar produtos...",items:e.products,addAction:e.productAddAction,itemAction:e.productItemAction},null,8,["icon","searchPlaceholder","items","addAction","itemAction"])])})),le=(n("b0c0"),Object(c["G"])("data-v-e004f908"));Object(c["v"])("data-v-e004f908");var ue={class:"scrollable-list"},se={key:0,class:"counter"},de={key:1,class:"no-record"},be=Object(c["i"])("p",null,"Nenhuma item foi registrado 😢",-1),pe=Object(c["i"])("p",null,'Clique no botão de "+" para adicionar um novo item.',-1),fe={class:"items"};Object(c["t"])();var je=le((function(e,t,r,o,i,a){var l=Object(c["z"])("TitleBar"),u=Object(c["z"])("InputField"),s=Object(c["z"])("ListItem"),d=Object(c["z"])("AddCircleButton");return Object(c["s"])(),Object(c["f"])("div",ue,[Object(c["i"])(l,{title:e.title,icon:e.icon},null,8,["title","icon"]),e.items&&e.items.length>0?(Object(c["s"])(),Object(c["f"])("div",se,[Object(c["i"])("div",null,"Há "+Object(c["C"])(e.items.length)+" item(s) registrado(s).",1)])):Object(c["g"])("",!0),e.items&&0!==e.items.length?Object(c["g"])("",!0):(Object(c["s"])(),Object(c["f"])("div",de,[be,pe])),e.items&&e.items.length>0?(Object(c["s"])(),Object(c["f"])(u,{key:2,hasIcon:"",icon:n("5c38"),placeholder:e.searchPlaceholder,modelValue:e.searchValue,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.searchValue=t})},null,8,["icon","placeholder","modelValue"])):Object(c["g"])("",!0),Object(c["i"])("div",fe,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(e.filteredItems,(function(t){return Object(c["s"])(),Object(c["f"])(s,{key:t.id,content:t.name,onClick:function(n){return e.itemAction(t.id)}},null,8,["content","onClick"])})),128))]),Object(c["i"])(d,{onClick:e.addAction},null,8,["onClick"])])})),ve=(n("4de4"),n("caad"),n("2532"),n("f0c5")),Oe=n.n(ve),me=Object(c["G"])("data-v-07b02b16");Object(c["v"])("data-v-07b02b16");var ge={class:"add-circle-button"},he=Object(c["i"])("img",{src:Oe.a,alt:"Plus icon"},null,-1);Object(c["t"])();var ye=me((function(e,t,n,r,o,i){return Object(c["s"])(),Object(c["f"])("div",ge,[he])})),Ce=Object(c["j"])({name:"AddCircleButton"});n("ffa9");Ce.render=ye,Ce.__scopeId="data-v-07b02b16";var we=Ce,ke=n("6204"),Ae=n.n(ke),xe=Object(c["G"])("data-v-09b96ea4");Object(c["v"])("data-v-09b96ea4");var Se={class:"list-item"},Ie={class:"left-side"},Pe={class:"right-side"},Re={key:0};Object(c["t"])();var Ve=xe((function(e,t,n,r,o,i){return Object(c["s"])(),Object(c["f"])("div",Se,[Object(c["i"])("div",Ie,Object(c["C"])(e.content),1),Object(c["i"])("div",Pe,[e.sideContent?(Object(c["s"])(),Object(c["f"])("span",Re,Object(c["C"])(e.sideContent),1)):Object(c["g"])("",!0),e.hasDeleteIcon?(Object(c["s"])(),Object(c["f"])("img",{key:1,src:Ae.a,alt:"Remove icon",onClick:t[1]||(t[1]=function(t){return e.deleteAction()})})):Object(c["g"])("",!0)])])})),Be=Object(c["j"])({name:"ListItem",props:{isHoverable:{type:Boolean,default:!0},content:{type:String,default:"List Item"},sideContent:{type:String},hasDeleteIcon:{type:Boolean,default:!1},deleteAction:{type:Function}}});n("ec15");Be.render=Ve,Be.__scopeId="data-v-09b96ea4";var _e=Be,Ee=Object(c["G"])("data-v-1ef8f422");Object(c["v"])("data-v-1ef8f422");var Fe={class:"title-bar"};Object(c["t"])();var Ne=Ee((function(e,t,n,r,o,i){return Object(c["s"])(),Object(c["f"])("div",Fe,[Object(c["i"])("img",{src:e.icon,alt:"Clients icon"},null,8,["src"]),Object(c["i"])("span",null,Object(c["C"])(e.title),1)])})),ze=Object(c["j"])({name:"TitleBar",props:{title:{type:String,default:"Title Bar"},icon:{type:String}}});n("4040");ze.render=Ne,ze.__scopeId="data-v-1ef8f422";var De=ze,Le=Object(c["G"])("data-v-bbe38170");Object(c["v"])("data-v-bbe38170");var Me={class:"input-field"};Object(c["t"])();var Te=Le((function(e,t,n,r,o,i){return Object(c["s"])(),Object(c["f"])("div",Me,[Object(c["i"])("input",{class:["input-field",{"text-align-center":e.textAlignCenter}],type:e.type,value:e.modelValue,placeholder:e.placeholder,disabled:e.disabled,inputmode:e.inputMode,maxlength:e.maxLength,onInput:t[1]||(t[1]=function(){return e.inputHandler&&e.inputHandler.apply(e,arguments)})},null,42,["type","value","placeholder","disabled","inputmode","maxlength"]),e.hasIcon?(Object(c["s"])(),Object(c["f"])("img",{key:0,src:e.icon,alt:"Search icon"},null,8,["src"])):Object(c["g"])("",!0)])})),Ge=Object(c["j"])({name:"InputField",props:{modelValue:{type:String},type:{type:String,default:"text"},placeholder:{type:String,default:""},hasIcon:{type:Boolean,default:!1},icon:{type:String},disabled:{type:Boolean,default:!1},inputMode:{type:String,default:""},maxLength:{type:String,default:""},textAlignCenter:{type:Boolean,default:!1}},emits:["update:modelValue"],setup:function(e,t){var n=function(e){var n=e.target.value;t.emit("update:modelValue",n)};return{inputHandler:n}}});n("cdbc");Ge.render=Te,Ge.__scopeId="data-v-bbe38170";var qe=Ge,He=Object(c["j"])({name:"ScrollableList",components:{AddCircleButton:we,ListItem:_e,TitleBar:De,InputField:qe},props:{title:{type:String},icon:{type:String},items:{type:Object,default:new Array},searchPlaceholder:{type:String},addAction:{type:Function},itemAction:{type:Function}},setup:function(e){var t=Object(c["x"])(""),n=Object(c["d"])((function(){return e.items.filter((function(e){return e.name.toLowerCase().includes(t.value.toLowerCase())}))}));return{searchValue:t,filteredItems:n}}});n("a61d");He.render=je,He.__scopeId="data-v-e004f908";var Ue=He,Je=n("d4ec"),$e=n("bee2"),Ye=function(){function e(t,n){Object(Je["a"])(this,e),this.db=t,this.store=n}return Object($e["a"])(e,[{key:"get",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",b(this.db,this.store,t).then());case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"getAll",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",f(this.db,this.store).then());case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"create",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",v(this.db,this.store,t));case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"update",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",m(this.db,this.store,t));case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",h(this.db,this.store,t));case 1:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),We=Object(c["j"])({name:"Products",components:{ScrollableList:Ue},setup:function(){var e=Object(c["x"])(),t=Object(c["m"])("dbConnection"),n=new Ye(t,"products");n.getAll().then((function(t){e.value=t}));var r=function(){return Vn.push({name:"NewProduct"})},o=function(e){return Vn.push({name:"EditProduct",params:{id:e}})};return{products:e,productAddAction:r,productItemAction:o}}});n("46e8");We.render=ae,We.__scopeId="data-v-666ce878";var Ke=We,Qe=Object(c["G"])("data-v-57d020a4");Object(c["v"])("data-v-57d020a4");var Xe={class:"product-form"},Ze={class:"content"},et={class:"header"},tt={class:"input-group"},nt={class:"input-group"},ct={class:"input-group"},rt={class:"buttons"};Object(c["t"])();var ot=Qe((function(e,t,r,o,i,a){var l=Object(c["z"])("TitleBar"),u=Object(c["z"])("Label"),s=Object(c["z"])("InputField"),d=Object(c["z"])("Button");return Object(c["s"])(),Object(c["f"])("div",Xe,[Object(c["i"])(l,{title:"Meus Produtos",icon:n("ca6e")},null,8,["icon"]),Object(c["i"])("div",Ze,[Object(c["i"])("div",et,Object(c["C"])(e.header),1),Object(c["i"])("div",tt,[Object(c["i"])(u,{label:"Nome do produto",src:n("ca6e")},null,8,["src"]),Object(c["i"])(s,{placeholder:"Digite o nome do produto...",modelValue:e.name,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.name=t})},null,8,["modelValue"])]),Object(c["i"])("div",nt,[Object(c["i"])(u,{label:"Preço Padrão",src:n("8801")},null,8,["src"]),Object(c["i"])(s,{placeholder:"Digite o preço do produto...",inputMode:"numeric",modelValue:e.defaultPrice,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.defaultPrice=t})},null,8,["modelValue"])]),Object(c["i"])("div",ct,[Object(c["i"])(u,{label:"Outras Informações",src:n("9010")},null,8,["src"]),Object(c["i"])(s,{placeholder:"Digite outras informações do produto...",modelValue:e.details,"onUpdate:modelValue":t[3]||(t[3]=function(t){return e.details=t})},null,8,["modelValue"])]),Object(c["i"])("div",rt,[e.isEditing?Object(c["g"])("",!0):(Object(c["s"])(),Object(c["f"])(d,{key:0,isAlternativeColor:"",label:"Salvar Produto",onClick:e.saveAction},null,8,["onClick"])),e.isEditing?Object(c["g"])("",!0):(Object(c["s"])(),Object(c["f"])(d,{key:1,label:"Cancelar",onClick:e.cancelAction},null,8,["onClick"])),e.isEditing?(Object(c["s"])(),Object(c["f"])(d,{key:2,isAlternativeColor:"",label:"Salvar Produto",onClick:e.editAction},null,8,["onClick"])):Object(c["g"])("",!0),e.isEditing?(Object(c["s"])(),Object(c["f"])(d,{key:3,label:"Excluir Produto",onClick:e.deleteAction},null,8,["onClick"])):Object(c["g"])("",!0)])])])})),it=(n("ac1f"),n("5319"),n("b680"),Object(c["G"])("data-v-7fc0a864")),at=it((function(e,t,n,r,o,i){return Object(c["s"])(),Object(c["f"])("div",{class:["label",{"no-padding":e.noPadding}]},[e.hideIcon?Object(c["g"])("",!0):(Object(c["s"])(),Object(c["f"])("img",{key:0,src:e.src,alt:"Label icon"},null,8,["src"])),Object(c["h"])(" "+Object(c["C"])(e.label),1)],2)})),lt=Object(c["j"])({name:"Label",props:{src:{type:String},hideIcon:{type:Boolean,default:!1},noPadding:{type:Boolean,default:!1},label:{type:String,default:"Label"}}});n("fbe2");lt.render=at,lt.__scopeId="data-v-7fc0a864";var ut=lt,st=function e(t,n,c){Object(Je["a"])(this,e),this.name=t,this.defaultPrice=n,this.details=c},dt=function e(t,n,c,r){Object(Je["a"])(this,e),this.id=t,this.name=n,this.defaultPrice=c,this.details=r},bt=Object(c["j"])({name:"ProductForm",components:{TitleBar:De,InputField:qe,Label:ut,Button:ee},props:{isEditing:{type:Boolean,default:!1}},setup:function(e){var t=Object(c["x"])(""),n=Object(c["x"])(""),r=Object(c["x"])(""),o=Object(k["c"])(),i=Object(c["m"])("dbConnection"),a=new Ye(i,"products"),l=Object(c["d"])((function(){return e.isEditing?"Editar produto":"Cadastrar novo produto"})),u=function(){return!!t.value||(window.alert("Digite um nome válido para o produto."),!1)},s=function(){return parseInt(o.params.id,10)},d=function(e){var t=/\d*[.|,]?\d+/,n=t.exec(e);return n?parseFloat(n[0].replace(",",".")):null},b=function(){var e=t.value,c=d(n.value),o=r.value;return new st(e,c,o)},p=function(){var e=t.value,c=d(n.value),o=r.value;return new dt(s(),e,c,o)},f=function(){Vn.go(-1)},j=function(){if(t.value){var e=b();a.create(e).then((function(){Vn.go(-1)}))}else window.alert("Digite um nome válido para o produto.")},v=function(){if(u()){var e=p();a.update(e).then((function(){Vn.go(-1)}))}},O=function(){var e=s();a.delete(e).then((function(){Vn.go(-1)}))};if(e.isEditing){var m=s();a.get(m).then((function(e){t.value=e.name,n.value=e.defaultPrice?"R$ ".concat(e.defaultPrice.toFixed(2).replace(".",",")):"",r.value=e.details}))}return{name:t,defaultPrice:n,details:r,header:l,cancelAction:f,saveAction:j,editAction:v,deleteAction:O}}});n("3bdf");bt.render=ot,bt.__scopeId="data-v-57d020a4";var pt=bt,ft=Object(c["G"])("data-v-157b5d93");Object(c["v"])("data-v-157b5d93");var jt={class:"records"},vt={key:0,class:"counter"},Ot={key:1,class:"no-record"},mt=Object(c["i"])("p",null,"Nenhuma venda foi registrada 😢",-1),gt=Object(c["i"])("p",null,'Clique no botão de "+" para adicionar uma nova venda.',-1),ht={class:"content"},yt={class:"items"};Object(c["t"])();var Ct=ft((function(e,t,r,o,i,a){var l=Object(c["z"])("TitleBar"),u=Object(c["z"])("RecordItem"),s=Object(c["z"])("AddCircleButton");return Object(c["s"])(),Object(c["f"])("div",jt,[Object(c["i"])(l,{title:"Minhas Vendas",icon:n("8801")},null,8,["icon"]),e.records&&e.records.length>0?(Object(c["s"])(),Object(c["f"])("div",vt,[Object(c["i"])("div",null,"Há "+Object(c["C"])(e.records.length)+" venda(s) realizadas.",1)])):Object(c["g"])("",!0),e.records&&0!==e.records.length?Object(c["g"])("",!0):(Object(c["s"])(),Object(c["f"])("div",Ot,[mt,gt])),Object(c["i"])("div",ht,[Object(c["i"])("div",yt,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(e.records,(function(t){return Object(c["s"])(),Object(c["f"])(u,{key:t.id,record:t,onClick:function(n){return e.recordItemAction(t.id)}},null,8,["record","onClick"])})),128))])]),Object(c["i"])(s,{onClick:t[1]||(t[1]=function(t){return e.recordAddAction()})})])})),wt=Object(c["G"])("data-v-fc0331fc");Object(c["v"])("data-v-fc0331fc");var kt={class:"record-item"},At={class:"top"},xt={class:"left"},St=Object(c["i"])("div",{class:"circle"},null,-1),It={class:"right"},Pt={class:"products"},Rt={class:"left"},Vt={class:"right"},Bt={key:0,class:"details"};Object(c["t"])();var _t=wt((function(e,t,n,r,o,i){return Object(c["s"])(),Object(c["f"])("div",kt,[Object(c["i"])("div",At,[Object(c["i"])("div",xt,[St,Object(c["h"])(" "+Object(c["C"])(e.computedDate),1)]),Object(c["i"])("div",It,Object(c["C"])(e.computedTotal),1)]),Object(c["i"])("div",Pt,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(e.record.products,(function(e){return Object(c["s"])(),Object(c["f"])("div",{key:e.id,class:"product"},[Object(c["i"])("div",Rt,Object(c["C"])(e.name),1),Object(c["i"])("div",Vt,Object(c["C"])("R$ ".concat(e.price.toFixed(2).replace(".",","))),1)])})),128))]),e.record.details?(Object(c["s"])(),Object(c["f"])("div",Bt,Object(c["C"])(e.record.details),1)):Object(c["g"])("",!0)])})),Et=(n("99af"),n("13d5"),n("d81d"),function e(t,n,c,r,o){Object(Je["a"])(this,e),this.id=t,this.products=n,this.date=c,this.time=r,this.details=o}),Ft=Object(c["j"])({name:"RecordItem",props:{record:{type:Object,default:new Et(0,[],new Date,"00:00","Details")}},setup:function(e){var t=Object(c["d"])((function(){if(!e.record.date)return"Sem informação de data";var t=e.record.date.getFullYear().toString(),n=(e.record.date.getMonth()+1).toString(),c=1==n.length?"0".concat(n):n,r=e.record.date.getDate().toString(),o=1==r.length?"0".concat(r):r,i=e.record.time?e.record.time:"Sem horário",a=["dom","seg","ter","qua","qui","sex","sáb"],l=a[e.record.date.getDay()];return"".concat(o,"/").concat(c,"/").concat(t," (").concat(l,") às ").concat(i)})),n=Object(c["d"])((function(){var t=e.record.products.map((function(e){return e.price})).reduce((function(e,t){return e+t}),0);return"R$ ".concat(t.toFixed(2).replace(".",","))}));return{computedDate:t,computedTotal:n}}});n("362f");Ft.render=_t,Ft.__scopeId="data-v-fc0331fc";var Nt=Ft,zt=Object(c["j"])({name:"Records",components:{TitleBar:De,RecordItem:Nt,AddCircleButton:we},setup:function(){var e=Object(c["x"])(),t=Object(c["m"])("dbConnection"),n=new Ye(t,"records");n.getAll().then((function(t){e.value=t}));var r=function(){Vn.push({name:"NewRecord"})},o=function(e){Vn.push({name:"EditRecord",params:{id:e}})};return{records:e,recordAddAction:r,recordItemAction:o}}});n("f6c0");zt.render=Ct,zt.__scopeId="data-v-157b5d93";var Dt=zt,Lt=Object(c["G"])("data-v-e384572a");Object(c["v"])("data-v-e384572a");var Mt={class:"record-form"},Tt={class:"content"},Gt={class:"header"},qt={class:"input-group"},Ht={class:"input-group"},Ut={class:"input-group"},Jt={class:"input-group"},$t={class:"buttons"};Object(c["t"])();var Yt=Lt((function(e,t,r,o,i,a){var l=Object(c["z"])("TitleBar"),u=Object(c["z"])("Label"),s=Object(c["z"])("InputField"),d=Object(c["z"])("ListItem"),b=Object(c["z"])("Button"),p=Object(c["z"])("ProductSelector");return Object(c["s"])(),Object(c["f"])("div",Mt,[Object(c["i"])(l,{title:"Minhas Vendas",icon:n("8801")},null,8,["icon"]),Object(c["i"])("div",Tt,[Object(c["i"])("div",Gt,Object(c["C"])(e.header),1),Object(c["i"])("div",qt,[Object(c["i"])(u,{label:"Lista de Produtos",src:n("ca6e")},null,8,["src"]),Object(c["i"])(s,{placeholder:"Adicionar Produto",disabled:"",hasIcon:"",icon:n("59d1"),onClick:e.handleProductEntryOpen},null,8,["icon","onClick"]),(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(e.productEntries,(function(t){return Object(c["s"])(),Object(c["f"])(d,{key:t.id,content:t.name,sideContent:"R$ ".concat(t.price.toFixed(2).replace(".",",")),deleteAction:function(){return e.handleProductEntryDelete(t.id)},hasDeleteIcon:""},null,8,["content","sideContent","deleteAction"])})),128)),Object(c["i"])(d,{content:"Total (R$)",sideContent:e.total},null,8,["sideContent"])]),Object(c["i"])("div",Ht,[Object(c["i"])(u,{label:"Data",src:n("c979")},null,8,["src"]),Object(c["i"])(s,{placeholder:"Selecione uma data...",type:"date",modelValue:e.date,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.date=t})},null,8,["modelValue"])]),Object(c["i"])("div",Ut,[Object(c["i"])(u,{label:"Horário",src:n("ec6b")},null,8,["src"]),Object(c["i"])(s,{placeholder:"Digite um horário...",modelValue:e.time,"onUpdate:modelValue":[t[2]||(t[2]=function(t){return e.time=t}),t[3]||(t[3]=function(t){return e.maskTimeField()})],inputMode:"numeric",maxLength:"5"},null,8,["modelValue"])]),Object(c["i"])("div",Jt,[Object(c["i"])(u,{label:"Detalhes da venda",src:n("9010")},null,8,["src"]),Object(c["i"])(s,{placeholder:"Digite outras informações da venda...",modelValue:e.details,"onUpdate:modelValue":t[4]||(t[4]=function(t){return e.details=t})},null,8,["modelValue"])]),Object(c["i"])("div",$t,[e.isEditing?Object(c["g"])("",!0):(Object(c["s"])(),Object(c["f"])(b,{key:0,isAlternativeColor:"",label:"Salvar Registro",onClick:e.saveAction},null,8,["onClick"])),e.isEditing?Object(c["g"])("",!0):(Object(c["s"])(),Object(c["f"])(b,{key:1,label:"Cancelar",onClick:e.cancelAction},null,8,["onClick"])),e.isEditing?(Object(c["s"])(),Object(c["f"])(b,{key:2,isAlternativeColor:"",label:"Salvar Registro",onClick:e.editAction},null,8,["onClick"])):Object(c["g"])("",!0),e.isEditing?(Object(c["s"])(),Object(c["f"])(b,{key:3,label:"Excluir Registro",onClick:e.deleteAction},null,8,["onClick"])):Object(c["g"])("",!0)])]),Object(c["i"])(p,{ref:"productSelector",items:e.products,onSelected:e.handleProductSelection},null,8,["items","onSelected"])])})),Wt=n("2909");n("c740"),n("a434");function Kt(e){if(!e)return"";var t=e.getFullYear().toString(),n=(e.getMonth()+1).toString(),c=1==n.length?"0".concat(n):n,r=e.getDate().toString(),o=1==r.length?"0".concat(r):r;return"".concat(t,"-").concat(c,"-").concat(o)}function Qt(e){var t=/(\d{4})-(\d{2})-(\d{2})/,n=t.exec(e);if(n){var c=parseInt(n[1],10),r=parseInt(n[2],10),o=parseInt(n[3],10);return new Date(c,r-1,o)}return null}function Xt(e){if(!e)return"";var t=e.getHours().toString(),n=1==t.length?"0".concat(t):t,c=e.getMinutes().toString(),r=1==c.length?"0".concat(c):c;return"".concat(n,":").concat(r)}var Zt=Object(c["G"])("data-v-583d66ef");Object(c["v"])("data-v-583d66ef");var en={class:"container"},tn=Object(c["i"])("div",{class:"title"},"Selecione ou digite um produto",-1),nn={class:"content"},cn={class:"footer"},rn={class:"product-inputs"};Object(c["t"])();var on=Zt((function(e,t,n,r,o,i){var a=Object(c["z"])("ListItem"),l=Object(c["z"])("InputField"),u=Object(c["z"])("Button");return Object(c["s"])(),Object(c["f"])(c["b"],{to:"#modal"},[Object(c["i"])("div",{class:["product-selector",{visible:e.isOpened}]},[Object(c["i"])("div",en,[tn,Object(c["i"])("div",nn,[(Object(c["s"])(!0),Object(c["f"])(c["a"],null,Object(c["y"])(e.items,(function(t){return Object(c["s"])(),Object(c["f"])(a,{key:t.id,content:t.name,onClick:function(n){return e.itemAction(t)}},null,8,["content","onClick"])})),128))]),Object(c["i"])("div",cn,[Object(c["i"])("div",rn,[Object(c["i"])(l,{textAlignCenter:"",placeholder:"Nome do produto",modelValue:e.product,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.product=t})},null,8,["modelValue"]),Object(c["i"])(l,{textAlignCenter:"",placeholder:"Valor do produto",type:"number",modelValue:e.price,"onUpdate:modelValue":t[2]||(t[2]=function(t){return e.price=t})},null,8,["modelValue"])]),Object(c["i"])(u,{isAlternativeColor:"",label:"Confirmar",onClick:e.confirm},null,8,["onClick"]),Object(c["i"])(u,{label:"Cancelar",onClick:e.close},null,8,["onClick"])])])],2)])})),an=function e(t,n,c){Object(Je["a"])(this,e),this.id=t,this.name=n,this.price=c},ln=Object(c["j"])({name:"ProductSelector",components:{ListItem:_e,InputField:qe,Button:ee},props:{items:{type:Object,default:new Array}},emits:["selected"],setup:function(e,t){var n=Object(c["x"])(0),r=Object(c["x"])(""),o=Object(c["x"])(""),i=Object(c["x"])(!1),a=function(){return r.value?o.value?!isNaN(parseFloat(o.value.replace(",",".")))||(window.alert("O valor digitado para o preço não é válido."),!1):(window.alert("Adicione um preço para o produto oferecido."),!1):(window.alert("Selecione ou digite um nome para o produto oferecido."),!1)},l=function(e){r.value="",o.value="",n.value=e,i.value=!0},u=function(){i.value=!1},s=function(){if(a()){var e=new an(n.value,r.value,parseFloat(o.value.replace(",",".")));t.emit("selected",e),u()}},d=function(e){r.value=e.name,e.defaultPrice?o.value="".concat(e.defaultPrice.toFixed(2)):o.value=""};return{product:r,price:o,isOpened:i,open:l,close:u,confirm:s,itemAction:d}}});n("1ce1");ln.render=on,ln.__scopeId="data-v-583d66ef";var un=ln,sn=function e(t,n,c,r){Object(Je["a"])(this,e),this.products=t,this.date=n,this.time=c,this.details=r},dn=Object(c["j"])({name:"RecordForm",components:{TitleBar:De,InputField:qe,Label:ut,Button:ee,ProductSelector:un,ListItem:_e},props:{isEditing:{type:Boolean,default:!1}},setup:function(e){var t=Object(c["x"])(),n=Object(c["x"])(),r=Object(c["x"])([]),o=Object(c["x"])(""),i=Object(c["x"])(""),a=Object(c["x"])(""),l=Object(k["c"])(),u=Object(c["m"])("dbConnection"),s=new Ye(u,"records"),d=new Ye(u,"products"),b=Object(c["d"])((function(){return e.isEditing?"Editar registro de venda":"Novo registro de venda"})),p=Object(c["d"])((function(){var e=r.value.map((function(e){return e.price})).reduce((function(e,t){return e+t}),0);return"R$ ".concat(e.toFixed(2).replace(".",","))})),f=function(){return 0!==r.value.length||(window.alert("Adicione pelo menos um produto válido para o cliente."),!1)},j=function(){return parseInt(l.params.id,10)},v=function(){var e=JSON.parse(JSON.stringify(r.value)),t=Qt(o.value),n=i.value,c=a.value;return new sn(e,t,n,c)},O=function(){var e=JSON.parse(JSON.stringify(r.value)),t=Qt(o.value),n=i.value,c=a.value;return new Et(j(),e,t,n,c)},m=function(){var e=Math.max.apply(Math,Object(Wt["a"])(r.value.map((function(e){return e.id}))));return e===Math.max()?1:e+1},g=function(){t.value.open(m())},h=function(e){r.value.push(e)},y=function(e){var t=r.value.findIndex((function(t){return t.id===e}));r.value.splice(t,1)},C=function(){Vn.go(-1)},w=function(){if(f()){var e=v();s.create(e).then((function(){Vn.go(-1)}))}},A=function(){if(f()){var e=O();s.update(e).then((function(){Vn.go(-1)}))}},x=function(){var e=j();s.delete(e).then((function(){Vn.go(-1)}))},S=function(){i.value.length<2||i.value.includes(":")||(i.value=i.value+":")};if(d.getAll().then((function(e){n.value=e})),e.isEditing){var I=j();s.get(I).then((function(e){r.value=e.products,o.value=Kt(e.date),i.value=e.time,a.value=e.details}))}else{var P=new Date;o.value=Kt(P),i.value=Xt(P)}return{header:b,productEntries:r,date:o,time:i,details:a,productSelector:t,products:n,total:p,handleProductEntryOpen:g,handleProductSelection:h,handleProductEntryDelete:y,cancelAction:C,saveAction:w,editAction:A,deleteAction:x,maskTimeField:S}}});n("4cf3");dn.render=Yt,dn.__scopeId="data-v-e384572a";var bn=dn,pn={class:"placeholder-view"},fn=Object(c["i"])("p",null,"Esta página ainda não foi implementada",-1),jn=Object(c["i"])("p",null,"🐶",-1),vn=Object(c["i"])("p",null," Contate o desenvolvedor do app para dar ideias do que poderia estar nesta página 🤙 ",-1),On={href:"whatsapp://send?phone=+5519994115113"},mn=Object(c["i"])("p",null,"🔥 Sugestões 🔥",-1),gn=Object(c["i"])("div",null,"Consulta do estoque atual",-1),hn=Object(c["i"])("div",null,"Consulta do quanto vendeu no mês",-1),yn=Object(c["i"])("div",null,"Consulta do lucro do mês",-1),Cn=Object(c["i"])("div",null,"Consulta das margens de cada produto",-1),wn=Object(c["i"])("div",null,"Consulta da velocidade das vendas",-1),kn=Object(c["i"])("div",null,"Uma tela com o resumo de tudo",-1),An=Object(c["i"])("div",null,"Ranking dos produtos mais lucráveis",-1);function xn(e,t,n,r,o,i){var a=Object(c["z"])("Button");return Object(c["s"])(),Object(c["f"])("div",pn,[fn,jn,vn,Object(c["i"])("p",null,[Object(c["i"])("a",On,[Object(c["i"])(a,{label:"Chamar no Whatsapp"})])]),mn,gn,hn,yn,Cn,wn,kn,An])}var Sn=Object(c["j"])({name:"PlaceholderView",components:{Button:ee}});n("3dc8");Sn.render=xn;var In=Sn,Pn=[{path:"/",name:"Home",component:re},{path:"/records",name:"Records",component:Dt},{path:"/records/new",name:"NewRecord",component:bn},{path:"/records/:id/edit",name:"EditRecord",props:{isEditing:!0},component:bn},{path:"/products",name:"Products",component:Ke},{path:"/products/new",name:"NewProduct",component:pt},{path:"/products/:id/edit",name:"EditProduct",props:{isEditing:!0},component:pt},{path:"/placeholder-view",name:"PlaceholderView",component:In}],Rn=Object(k["a"])({history:Object(k["b"])(),routes:Pn}),Vn=Rn,Bn={methods:{navigateTo:function(e){Vn.push(e)}}},_n=Bn,En=n("9483");Object(En["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),Object(c["e"])(w).use(Vn).mixin(_n).mount("#app")},cdbc:function(e,t,n){"use strict";n("b9e0")},d0ce:function(e,t,n){},d3b9:function(e,t,n){},de27:function(e,t,n){"use strict";n("4a58")},ec15:function(e,t,n){"use strict";n("53cf")},ec6b:function(e,t,n){e.exports=n.p+"img/clock-solid.95fe55d9.svg"},f0c5:function(e,t,n){e.exports=n.p+"img/plus-solid.7496c38f.svg"},f6c0:function(e,t,n){"use strict";n("d3b9")},fbe2:function(e,t,n){"use strict";n("4991")},ffa9:function(e,t,n){"use strict";n("036f")}});
//# sourceMappingURL=app.a2ef2c3f.js.map
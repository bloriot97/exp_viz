(function(e){function t(t){for(var n,u,i=t[0],s=t[1],l=t[2],c=0,f=[];c<i.length;c++)u=i[c],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&f.push(o[u][0]),o[u]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,u=1;u<r.length;u++){var s=r[u];0!==o[s]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function u(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"6815fd09"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var l=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(c);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,r[1](l)}o[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/exp_viz/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var p=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"193e":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),r("router-view")],1)},a=[],u=(r("5c0b"),r("2877")),i={},s=Object(u["a"])(i,o,a,!1,null,null,null),l=s.exports,c=(r("d3b7"),r("8c4f")),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[e.url?r("ExperimentReport",{attrs:{url:e.url}}):e._e()],1)},f=[],d=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v(" General Information ")]),e._v(" Number of files : "+e._s(e.generalInformation.nFiles)+" "),r("table",{staticClass:"center"},[r("tr",{staticClass:"header"},[r("td",[e._v(" tool ")]),e._l(e.repairTypes,(function(t){return r("td",{key:t,class:t},[e._v(" "+e._s(t)+" ")])}))],2),e._l(e.generalInformation.repairTypesCount,(function(t){return r("tr",{key:t.tool},[r("td",[e._v(" "+e._s(t.tool)+" ")]),e._l(e.repairTypes,(function(n){return r("td",{key:n,class:n},[e._v(" "+e._s(t.count[n])+" ")])}))],2)}))],2),r("h2",[e._v(" Details ")]),e.loaded?r("table",{staticClass:"center"},[r("tr",[r("td",[e._v(" files ID ")]),r("td",{staticStyle:{width:"250px"}},[e._v(" error ")]),e._l(e.response.data[0].results,(function(t,n){return r("td",{key:n},[e._v(" "+e._s(n)+" ")])}))],2),e._l(e.response.data,(function(t,n){return r("tr",{key:n},[r("td",[e._v(" "+e._s(n)+" ")]),r("td",[e._v(" "+e._s(e.getErrorSummary(t.information.errors[0]))+" ")]),e._l(t.results,(function(n,o){return r("td",{directives:[{name:"tooltip",rawName:"v-tooltip.top-center",value:e.getRepairTooltip(n),expression:"getRepairTooltip(errors)",modifiers:{"top-center":!0}}],key:o,class:e.getErrorCorrectionClass(t.information.errors[0],n)},[e._v(" "+e._s(e.getErrorCount(n))+" ")])}))],2)}))],2):e._e()])},m=[],v=(r("caad"),r("a15b"),r("d81d"),r("b64b"),r("ac1f"),r("2532"),r("1276"),r("ddb0"),r("bc3a")),h=r.n(v),b=r("2ef0"),g=r.n(b),_={name:"ExperimentReport",props:{url:String},data:function(){return{loaded:!1,response:null,generalInformation:null,repairTypes:["good","broken","same","more","new"]}},mounted:function(){var e=this;h.a.get(this.url).then((function(t){e.response=t,e.loaded=!0,e.generalInformation=e.computeGeneralInformation(t.data)}))},methods:{computeGeneralInformation:function(e){var t=g.a.keys(e[0].results),r=g.a.zipObject(n,g.a.map(n,(function(){return 0}))),n=g.a.map(e,function(e){var t=this;return g.a.mapValues(e.results,(function(r){return t.getErrorCorrectionClass(e.information.errors[0],r)}))}.bind(this)),o=g.a.map(t,(function(e){return{count:g.a.defaults(g.a.countBy(g.a.map(n,(function(t){return t[e]}))),r),tool:e}}));return{nFiles:Object.keys(e).length,repairTypesCount:o}},getErrorCount:function(e){return null!=e?e.length:"X"},getErrorType:function(e){var t=e.source.split(".");return t[t.length-1]},getErrorSummary:function(e){return this.getErrorType(e)+" (l. "+e.line+")"},getErrorCorrectionClass:function(e,t){if(null==t)return"broken";var r=this.getErrorType(e),n=t.map(this.getErrorType);return 0==n.length?"good":n.includes(r)?1==n.length?"same":"more":"new"},getRepairTooltip:function(e){return null==e?"broken":e.map(this.getErrorSummary).join("<br/>")}}},y=_,E=(r("5bc1"),Object(u["a"])(y,d,m,!1,null,"1102190b",null)),w=E.exports,k={name:"home",data:function(){return{url:null}},components:{ExperimentReport:w},mounted:function(){this.url=this.$route.query.url}},j=k,T=Object(u["a"])(j,p,f,!1,null,null,null),C=T.exports;n["a"].use(c["a"]);var O=[{path:"/",name:"home",component:C},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],x=new c["a"]({routes:O}),S=x,P=r("e37d");n["a"].config.productionTip=!1,n["a"].use(P["a"]),new n["a"]({router:S,render:function(e){return e(l)}}).$mount("#app")},"5bc1":function(e,t,r){"use strict";var n=r("193e"),o=r.n(n);o.a},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),o=r.n(n);o.a},"9c0c":function(e,t,r){}});
//# sourceMappingURL=app.62fd2cb7.js.map
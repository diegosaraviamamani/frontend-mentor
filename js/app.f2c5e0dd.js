(function(t){function e(e){for(var a,i,r=e[0],c=e[1],l=e[2],d=0,f=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,r=1;r<s.length;r++){var c=s[r];0!==o[c]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},o={app:0},n=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/frontend-mentor/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0524":function(t,e,s){},"066c":function(t,e,s){},"0766":function(t,e,s){"use strict";var a=s("bba1"),o=s.n(a);o.a},"0887":function(t,e,s){"use strict";var a=s("1ec4"),o=s.n(a);o.a},"0d1a":function(t,e,s){"use strict";var a=s("b8a3"),o=s.n(a);o.a},"0dfb":function(t,e,s){},"1ec4":function(t,e,s){},2453:function(t,e,s){},2531:function(t,e,s){"use strict";var a=s("5159"),o=s.n(a);o.a},2561:function(t,e,s){},"282f":function(t,e,s){"use strict";var a=s("c490"),o=s.n(a);o.a},"2e63":function(t,e,s){"use strict";var a=s("2453"),o=s.n(a);o.a},"2ea6":function(t,e,s){t.exports=s.p+"img/icon-phone.47e54a44.svg"},"30db":function(t,e,s){},3113:function(t,e,s){"use strict";var a=s("9661"),o=s.n(a);o.a},"3ab1":function(t,e,s){"use strict";var a=s("c015"),o=s.n(a);o.a},"430b":function(t,e,s){},4472:function(t,e,s){"use strict";var a=s("c790"),o=s.n(a);o.a},4825:function(t,e,s){"use strict";var a=s("8c82"),o=s.n(a);o.a},"48b0":function(t,e,s){t.exports=s.p+"img/icon-quotes.a51e6880.svg"},"4c32":function(t,e,s){t.exports=s.p+"img/bg-curve-desktop.52c94b39.svg"},5159:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},n=[],i=(s("5c0b"),s("2877")),r={},c=Object(i["a"])(r,o,n,!1,null,null,null),l=c.exports,u=s("9483");Object(u["a"])("/frontend-mentor/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var d=s("8c4f"),f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("Index",{attrs:{msg:"Front-End Mentor"}})],1)},p=[],v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),s("h3",[t._v("Lista de Projectos")]),s("ul",t._l(t.projects,(function(e){return s("li",{key:e},[s("router-link",{attrs:{to:e.link,exact:""}},[t._v(t._s(e.title))])],1)})),0),s("h3",[t._v("Installed CLI Plugins")]),s("ul",t._l(t.plugins,(function(e){return s("li",{key:e},[s("a",{attrs:{href:e.link,exact:""}},[t._v(t._s(e.title))])])})),0)])},m=[],g={props:{msg:String},data(){const t="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-";return{projects:[{title:"Proyecto 1",link:"/reto-a"},{title:"Proyecto 2",link:"/reto-b"},{title:"Proyecto 3",link:"/reto-c"},{title:"Proyecto 4",link:"/reto-d"}],plugins:[{title:"pwa",link:t+"pwa"},{title:"router",link:t+"router"},{title:"vuex",link:t+"vuex"}]}}},h=g,b=(s("fe73"),Object(i["a"])(h,v,m,!1,null,"aebb65b8",null)),A=b.exports,y={name:"Home",components:{Index:A}},C=y,w=Object(i["a"])(C,f,p,!1,null,null,null),_=w.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("Header"),s("First"),s("Curve"),s("Second"),s("Third"),s("Footer")],1)},E=[],k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav"},[a("img",{staticClass:"logo",attrs:{src:s("f129"),alt:""}}),a("div",{staticClass:"links"},t._l(t.links,(function(e){return a("span",{key:e,staticClass:"link"},[t._v(t._s(e))])})),0)])},j=[],B={data(){return{links:["Features","Team","Sign in"]}}},S=B,O=(s("bd0d"),Object(i["a"])(S,k,j,!1,null,"77b08ca7",null)),M=O.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"first"},[a("img",{staticClass:"image",attrs:{src:s("8c56"),alt:""}}),a("div",{staticClass:"content"},[a("h2",{staticClass:"title"},[t._v("All your files in one secure location, accessible anywhere.")]),a("p",{staticClass:"text"},[t._v(" Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers. ")]),a("div",[a("input",{staticClass:"input",attrs:{type:"text",placeholder:"Enter your email"}}),a("button",{staticClass:"btn"},[t._v("Get Started")])])])])}],J={},Q=J,D=(s("3113"),Object(i["a"])(Q,I,F,!1,null,null,null)),U=D.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"curve"},[t.mobile?a("img",{staticClass:"curve-svg",attrs:{src:s("fa3e")}}):a("img",{staticClass:"curve-svg",attrs:{src:s("4c32")}})])},H=[],N={data(){return{mobile:!0}},mounted(){this.resize()},created(){window.addEventListener("resize",this.resize)},destroyed(){window.removeEventListener("resize",this.resize)},methods:{resize(){this.width<500?this.mobile=!0:this.mobile=!1}}},T=N,Y=(s("a27c"),Object(i["a"])(T,R,H,!1,null,"5e2db43a",null)),P=Y.exports,z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},G=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"second"},[a("img",{staticClass:"image",attrs:{src:s("9139")}}),a("div",{staticClass:"content"},[a("h4",{staticClass:"title"},[t._v("Stay productive, wherever you are")]),a("p",{staticClass:"text"},[t._v("Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.")]),a("p",{staticClass:"text"},[t._v("Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!")]),a("span",{staticClass:"link"},[t._v(" See how Fylo works "),a("img",{staticClass:"arrow",attrs:{src:s("7f5b"),alt:""}})]),a("div",{staticClass:"card"},[a("img",{staticClass:"quotes",attrs:{src:s("48b0")}}),a("p",{staticClass:"card-text"},[t._v(" Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine. ")]),a("div",{staticClass:"user"},[a("img",{staticClass:"avatar",attrs:{src:s("7599"),alt:""}}),a("div",{staticClass:"info"},[a("span",{staticClass:"name"},[t._v("Kyle Burton")]),a("span",{staticClass:"position"},[t._v("founder & CEO, Huddle")])])])])])])}],q={},L=q,W=(s("d02b"),Object(i["a"])(L,z,G,!1,null,"75f3fc84",null)),Z=W.exports,V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},X=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"third"},[s("div",{staticClass:"left"},[s("h3",{staticClass:"title"},[t._v("Get early access today")]),s("p",{staticClass:"text"},[t._v(" It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you. ")])]),s("div",{staticClass:"right"},[s("input",{staticClass:"input",attrs:{type:"text",placeholder:"email@example.com"}}),s("button",{staticClass:"btn"},[t._v("Get Started for Free")])])])}],K={},$=K,tt=(s("74de"),Object(i["a"])($,V,X,!1,null,"1df6e840",null)),et=tt.exports,st=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[t._m(0),s("div",{staticClass:"content"},[t._m(1),t._l(t.lists,(function(e){return s("div",{key:e.id,staticClass:"list"},t._l(e,(function(e){return s("p",{key:e},[t._v(t._s(e))])})),0)})),t._m(2)],2)])},at=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"logo"},[a("img",{staticClass:"image",attrs:{src:s("dccb")}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info"},[a("p",[a("img",{staticClass:"phone",attrs:{src:s("2ea6")}}),t._v("Phone: +1-543-123-4567 ")]),a("p",[a("img",{staticClass:"email",attrs:{src:s("5b99")}}),t._v(" example@fylo.com ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"socials"},[s("span",{staticClass:"social"},[t._v("f")]),s("span",{staticClass:"social"},[t._v("t")]),s("span",{staticClass:"social"},[t._v("i")])])}],ot={data(){return{lists:[["About Us","Jobs","Press","Blog"],["Contact Us","Terms","Privacy"]]}}},nt=ot,it=(s("6c5b"),Object(i["a"])(nt,st,at,!1,null,"99c76e60",null)),rt=it.exports,ct={components:{Header:M,First:U,Second:Z,Third:et,Curve:P,Footer:rt}},lt=ct,ut=(s("0887"),Object(i["a"])(lt,x,E,!1,null,null,null)),dt=ut.exports,ft=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"reto-b"},[s("div",{staticClass:"container",style:[t.styles.colors]},[s("div",{staticClass:"subContainer"},[s("Header",{on:{changeMode:t.changeMode}}),s("TopCards"),s("Overview")],1)])])},pt=[],vt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"header"},[s("div",{staticClass:"header-grid"},[t._m(0),s("DarkModeSwitch",{on:{changeMode:function(e){return t.changeMode()}}})],1)])},mt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",{staticClass:"header-title"},[t._v("Social Media Dashboard")]),s("p",{staticClass:"header-total"},[t._v("Total Followers: 23,004")])])}],gt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"dark-mode"},[s("p",{staticClass:"dark-mode-title"},[t._v("Dark Mode")]),s("input",{staticClass:"checkbox",attrs:{type:"checkbox",id:"checkbox"},on:{click:function(e){return t.changeMode()}}}),s("label",{staticClass:"switch",attrs:{for:"checkbox"}})])},ht=[],bt={methods:{changeMode(){this.$emit("changeMode")}}},At=bt,yt=(s("bb22"),Object(i["a"])(At,gt,ht,!1,null,"63fffa19",null)),Ct=yt.exports,wt={components:{DarkModeSwitch:Ct},methods:{changeMode(){this.$emit("changeMode")}}},_t=wt,xt=(s("0d1a"),Object(i["a"])(_t,vt,mt,!1,null,"42d0c688",null)),Et=xt.exports,kt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"top-cards"},[s("div",{staticClass:"grid"},t._l(t.socials,(function(t){return s("Card",{key:t.id,attrs:{social:t}})})),1)])},jt=[],Bt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("article",{staticClass:"card",style:"--social-color: "+t.social.color},[s("p",{staticClass:"card-title"},[s("img",{attrs:{src:t.getImage(t.social.image),alt:t.social.image}}),t._v("@DiegoSaravia ")]),s("p",{staticClass:"card-followers"},[s("span",{staticClass:"card-followers-number"},[t._v(t._s(t.social.total))]),s("span",{staticClass:"card-followers-title"},[t._v("Followers")])]),s("p",{staticClass:"card-today",style:t.todayColor},[s("img",{attrs:{src:t.getImage(t.social.status)}}),t._v(" "+t._s(t.social.today)+" Today ")])])])},St=[],Ot={props:["social"],computed:{todayColor(){let t;return t="up"===this.social.status?{"--status-color":"hsl(163, 72%, 41%)"}:{"--status-color":"hsl(356, 69%, 56%)"},t}},methods:{getImage(t){return"img/reto-b/icon-"+t+".svg"}}},Mt=Ot,It=(s("87e4"),Object(i["a"])(Mt,Bt,St,!1,null,"019c9282",null)),Ft=It.exports,Jt={components:{Card:Ft},data(){return{socials:[{image:"facebook",total:"13k",today:"9",status:"up",color:"#168ef4"},{image:"twitter",total:"326",today:"5",status:"down",color:"hsl(203, 89%, 53%)"},{image:"instagram",total:"187",today:"2",status:"down",color:"linear-gradient(to right,hsl(37, 97%, 70%) 0%,hsl(329, 70%, 58%) 100%);"},{image:"youtube",total:"1987",today:"4",status:"up",color:"hsl(348, 97%, 39%)"}]}}},Qt=Jt,Dt=(s("3ab1"),Object(i["a"])(Qt,kt,jt,!1,null,"a5119aae",null)),Ut=Dt.exports,Rt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"overview"},[s("h1",{staticClass:"overview-title"},[t._v("Overview today")]),s("div",{staticClass:"grid"},t._l(t.socials,(function(t){return s("TodayCard",{key:t.id,attrs:{social:t}})})),1)])},Ht=[],Nt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-sm"},[s("p",{staticClass:"card-sm-title"},[t._v(t._s(t.social.title))]),s("p",{staticClass:"card-sm-icon"},[s("img",{attrs:{src:t.getImage(t.social.image)}})]),s("p",{staticClass:"card-sm-number"},[t._v(t._s(t.social.count))]),s("p",{staticClass:"card-sm-perc",style:t.todayColor},[s("span",[s("img",{attrs:{src:t.getImage(t.social.status)}}),t._v(" "+t._s(t.social.perc)+" ")])])])},Tt=[],Yt={props:["social"],computed:{todayColor(){let t;return t="up"===this.social.status?{"--status-color":"hsl(163, 72%, 41%)"}:{"--status-color":"hsl(356, 69%, 56%)"},t}},methods:{getImage(t){return"img/reto-b/icon-"+t+".svg"}}},Pt=Yt,zt=(s("2e63"),Object(i["a"])(Pt,Nt,Tt,!1,null,"644536ca",null)),Gt=zt.exports,qt={components:{TodayCard:Gt},data(){return{socials:[{title:"Pages views",image:"facebook",count:87,status:"up",perc:"3"},{title:"Likes",image:"facebook",count:52,status:"down",perc:"2"},{title:"Likes",image:"instagram",count:546,status:"up",perc:"22"},{title:"Profile Views",image:"instagram",count:534,status:"up",perc:"13"},{title:"Retweets",image:"twitter",count:117,status:"up",perc:"302"},{title:"Likes",image:"twitter",count:704,status:"up",perc:"24"},{title:"Likes",image:"youtube",count:546,status:"down",perc:"19"},{title:"Total Views",image:"youtube",count:534,status:"down",perc:"12"}]}}},Lt=qt,Wt=(s("835b"),Object(i["a"])(Lt,Rt,Ht,!1,null,"d2aae76a",null)),Zt=Wt.exports;const Vt={"--card-color":"#252C43","--text-color":"white","--bg-color":"#1F2330","--switch-color":"linear-gradient(to right, #437FB1 0%, #39BB98 100%)"},Xt={"--card-color":"#f0f3fa","--text-color":"black","--bg-color":"white","--switch-color":"#5f616d"};var Kt={components:{Header:Et,TopCards:Ut,Overview:Zt},data(){return{darkMode:!0,styles:{colors:Vt}}},methods:{changeMode(){this.darkMode=!this.darkMode,this.darkMode&&(this.styles.colors=Vt),!this.darkMode&&(this.styles.colors=Xt)}}},$t=Kt,te=(s("da00"),Object(i["a"])($t,ft,pt,!1,null,null,null)),ee=te.exports,se=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"reto-c",style:t.colors},[s("div",{staticClass:"container"},[s("div",{staticClass:"header"}),s("div",{staticClass:"subcontainer"},[s("FilterCard",{attrs:{filters:t.filters},on:{remove:t.remove,clear:t.clear}}),t._l(t.data,(function(e){return s("JobCard",{directives:[{name:"show",rawName:"v-show",value:t.show(e),expression:"show(item)"}],key:e.id,attrs:{job:e,filters:t.filters},on:{add:t.add}})}))],2)])])},ae=[],oe=s("88e1"),ne=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"job-card",class:{featured:t.job.featured}},[s("img",{staticClass:"job-logo",attrs:{src:"img/reto-c/"+t.job.logo}}),s("div",{staticClass:"job-description"},[s("div",[s("span",{staticClass:"title"},[t._v(t._s(t.job.company))]),t.job.new?s("span",{staticClass:"pill bg-a"},[t._v("NEW!")]):t._e(),t.job.featured?s("span",{staticClass:"pill bg-e"},[t._v("FEATURED")]):t._e()]),s("div",[s("span",{staticClass:"position"},[t._v(t._s(t.job.position))])]),s("div",[s("span",[t._v(t._s(t.job.postedAt))]),s("span",[t._v(t._s(" - "+t.job.contract))]),s("span",[t._v(t._s(" - "+t.job.location))])])]),s("div",{staticClass:"divider"}),s("div",{staticClass:"job-filters"},t._l(t.tags,(function(e){return s("Tag",{key:e.id,attrs:{text:e},on:{click:t.add}})})),1)])},ie=[],re=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"tag",class:{filter:t.filter},on:{click:function(e){return t.$emit("click",t.text)}}},[s("div",{staticClass:"text"},[t._v(t._s(t.text))]),t.filter?s("div",{staticClass:"image"},[s("img",{attrs:{src:"img/reto-c/icon-remove.svg"}})]):t._e()])},ce=[],le={props:{text:{type:String,default:"Tag"},filter:{type:Boolean,default:!1}}},ue=le,de=(s("ffc8"),Object(i["a"])(ue,re,ce,!1,null,"de1ee77e",null)),fe=de.exports,pe={components:{Tag:fe},props:{job:{type:Object,default:{}},filters:{type:Array,default:[]}},data(){const t=[this.job.role,this.job.level,...this.job.languages,...this.job.tools];return{tags:t}},methods:{add(t){this.$emit("add",t)}}},ve=pe,me=(s("b624"),Object(i["a"])(ve,ne,ie,!1,null,"36b872d2",null)),ge=me.exports,he=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.show?s("div",{staticClass:"filter-card"},[s("div",{staticClass:"tags"},t._l(t.filters,(function(e){return s("Tag",{key:e.id,attrs:{text:e,filter:""},on:{click:t.remove}})})),1),s("span",{staticClass:"clear",on:{click:function(e){return t.clear()}}},[t._v("Clear")])]):t._e()},be=[],Ae={components:{Tag:fe},props:{filters:{type:Array,default:[]}},computed:{show(){return 0!==this.filters.length}},methods:{clear(){this.$emit("clear")},remove(t){this.$emit("remove",t)}}},ye=Ae,Ce=(s("de16"),Object(i["a"])(ye,he,be,!1,null,"f3796800",null)),we=Ce.exports,_e={components:{JobCard:ge,FilterCard:we},data(){return{filters:[],data:oe,colors:{"--a":"hsl(180, 29%, 50%)","--b":"hsl(180, 52%, 96%)","--c":"hsl(180, 31%, 95%)","--d":"hsl(180, 8%, 52%)","--e":"hsl(180, 14%, 20%)"}}},methods:{add(t){!this.filters.includes(t)&&this.filters.push(t)},clear(){this.filters=[]},remove(t){this.filters=this.filters.filter(e=>e!==t)},tags(t){return[t.role,t.level,...t.languages,...t.tools]},show(t){const e=this.tags(t);let s=0;if(this.filters.forEach(t=>{e.includes(t)&&s++}),s==this.filters.length)return!0}}},xe=_e,Ee=(s("4472"),Object(i["a"])(xe,se,ae,!1,null,null,null)),ke=Ee.exports,je=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"reto-d"},[s("div",{staticClass:"container"},[s("Header"),s("div",{staticClass:"subcontainer bg-n3"},[s("SectionA"),s("SectionB"),s("SectionC"),s("Footer")],1)],1)])},Be=[],Se=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",[s("nav",[s("Logo"),t.menu?s("div",{staticClass:"mask"},[s("div",{staticClass:"menu-mobile"},t._l(t.links,(function(e){return s("span",{key:e.id},[t._v(t._s(e))])})),0)]):t._e(),s("div",{staticClass:"menu-desktop"},t._l(t.links,(function(e){return s("span",{key:e.id},[t._v(t._s(e))])})),0),s("img",{attrs:{src:"img/reto-d/icon-"+(t.menu?"close":"hamburger")+".svg"},on:{click:function(e){t.menu=!t.menu}}}),s("div",{staticClass:"btn"},[s("InviteBtn")],1)],1)])},Oe=[],Me=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"139",height:"20"}},[s("defs",[s("linearGradient",{attrs:{id:"a",x1:"72.195%",x2:"17.503%",y1:"0%",y2:"100%"}},[s("stop",{attrs:{offset:"0%","stop-color":"#33D35E"}}),s("stop",{attrs:{offset:"100%","stop-color":"#2AB6D9"}})],1)],1),s("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[s("path",{attrs:{fill:t.dark?"#ffffff":"#2D314D","fill-rule":"nonzero",d:"M37.754 15.847c2.852 0 5.152-1.622 5.952-4.216h-3.897c-.376.665-1.14 1.066-2.055 1.066-1.237 0-2.065-.674-2.32-1.978h8.44c.051-.352.081-.694.081-1.037 0-3.335-2.537-5.95-6.201-5.95-3.568 0-6.175 2.564-6.175 6.049 0 3.473 2.628 6.066 6.175 6.066zm2.344-7.297h-4.596c.317-1.129 1.11-1.749 2.252-1.749 1.181 0 2 .613 2.344 1.75zm10.946 7.296c1.32 0 2.5-.434 3.43-1.188l.336.804h3.027V4.093h-2.919l-.4.88c-.94-.775-2.135-1.222-3.474-1.222-3.476 0-5.961 2.505-5.961 6.026 0 3.533 2.485 6.07 5.961 6.07zm.524-3.467c-1.467 0-2.545-1.108-2.545-2.593 0-1.475 1.069-2.583 2.545-2.583 1.466 0 2.544 1.108 2.544 2.583 0 1.485-1.078 2.593-2.544 2.593zm13.123 3.467c3.02 0 5.025-1.554 5.025-3.93 0-2.883-2.387-3.256-4.183-3.575-1.08-.193-1.95-.344-1.95-.99 0-.527.422-.838 1.05-.838.71 0 1.197.337 1.197 1.063h3.667c-.044-2.303-1.92-3.843-4.816-3.843-2.912 0-4.854 1.47-4.854 3.75 0 2.757 2.337 3.289 4.1 3.574 1.092.181 1.952.368 1.952 1.024 0 .587-.543.88-1.116.88-.742 0-1.32-.383-1.32-1.214h-3.77c.036 2.463 1.919 4.1 5.018 4.1zm8.1 3.858c2.936 0 4.344-1.257 5.877-4.736l4.764-10.863h-4.206l-2.249 6.263-2.412-6.263H70.31l4.698 10.43c-.53 1.414-.983 1.804-2.48 1.804H71.45v3.365h1.341zm18.504-3.858c3.5 0 5.973-2.515 5.973-6.048S94.796 3.75 91.295 3.75a5.332 5.332 0 00-2.825.784V0H84.6v15.474h2.897l.37-.844c.923.771 2.102 1.216 3.428 1.216zm-.523-3.467c-1.467 0-2.545-1.108-2.545-2.58 0-1.486 1.078-2.594 2.545-2.594 1.466 0 2.544 1.108 2.544 2.593 0 1.473-1.087 2.58-2.544 2.58zm13.598 3.467c1.32 0 2.5-.434 3.43-1.188l.336.804h3.027V4.093h-2.918l-.401.88c-.939-.775-2.135-1.222-3.474-1.222-3.476 0-5.96 2.505-5.96 6.026 0 3.533 2.484 6.07 5.96 6.07zm.524-3.467c-1.467 0-2.545-1.108-2.545-2.593 0-1.475 1.07-2.583 2.545-2.583 1.467 0 2.545 1.108 2.545 2.583 0 1.485-1.078 2.593-2.545 2.593zm12.653 3.095V9.403c0-1.447.702-2.3 1.923-2.3.986 0 1.483.657 1.483 1.98v6.39h3.915V8.543c0-2.897-1.733-4.773-4.373-4.773-1.47 0-2.733.565-3.58 1.508l-.537-1.172h-2.747v11.369h3.916zm13.748 0v-4.808l2.848 4.808h4.616l-3.902-5.95 3.543-5.419h-4.397l-2.708 4.454V0h-3.916v15.474h3.916z"}}),s("g",{attrs:{fill:"url(#a)"}},[s("path",{attrs:{d:"M10.802 0L0 19.704h5.986L16.789 0z"}}),s("path",{attrs:{opacity:".5",d:"M18.171 0L7.368 19.704h5.986L24.157 0z"}}),s("path",{attrs:{opacity:".15",d:"M25.539 0L14.737 19.704h5.986L31.525 0z"}})])])])},Ie=[],Fe={props:{dark:{type:Boolean,default:!1}}},Je=Fe,Qe=Object(i["a"])(Je,Me,Ie,!1,null,"0d7767c0",null),De=Qe.exports,Ue=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{style:t.styles},[t._v("Request Invite")])},Re=[],He={props:{styles:Object}},Ne=He,Te=(s("0766"),Object(i["a"])(Ne,Ue,Re,!1,null,"26645932",null)),Ye=Te.exports,Pe={components:{Logo:De,InviteBtn:Ye},data(){return{menu:!1,links:["Home","About","Contact","Blog","Careers"]}}},ze=Pe,Ge=(s("c9c8"),Object(i["a"])(ze,Se,Oe,!1,null,"55541b4c",null)),qe=Ge.exports,Le=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section-a"},[t._m(0),s("div",{staticClass:"desc"},[s("h1",[t._v(t._s(t.title))]),s("p",[t._v(t._s(t.content))]),s("InviteBtn",{style:{margin:"2.2em auto"}})],1)])},We=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hero"},[a("img",{attrs:{src:s("6c87"),alt:""}})])}],Ze={components:{InviteBtn:Ye},data(){return{title:"Next generation digital banking",content:"Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more."}}},Ve=Ze,Xe=(s("daa8"),Object(i["a"])(Ve,Le,We,!1,null,"a5adca7a",null)),Ke=Xe.exports,$e=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section-b"},[s("div",{staticClass:"intro"},[s("h1",[t._v(t._s(t.title))]),s("p",[t._v(t._s(t.text))])]),s("div",{staticClass:"content"},t._l(t.content,(function(e){return s("div",{key:e.id,staticClass:"feature"},[s("img",{attrs:{src:t.iconURL(e.icon),alt:""}}),s("h3",[t._v(t._s(e.title))]),s("p",[t._v(t._s(e.text))])])})),0)])},ts=[],es={data(){return{title:"Why choose Easybank?",text:"We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.",content:[{icon:"online",title:"Online Banking",text:"Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."},{icon:"budgeting",title:"Simple Budgeting",text:"See exactly where your money goes each month. Receive notifications when you’re close to your hitting limits."},{icon:"onboarding",title:"Fast Onboarding",text:"We don’t do branches. Open your account in minutes online and start taking control of your finances right away."},{icon:"api",title:"Open API",text:"Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier."}]}},methods:{iconURL(t){let e="img/reto-d/icon-"+t+".svg";return e}}},ss=es,as=(s("282f"),Object(i["a"])(ss,$e,ts,!1,null,"6f01e63e",null)),os=as.exports,ns=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"section-c"},[s("h1",[t._v("Latest Articles")]),s("div",{staticClass:"grid"},t._l(t.articles,(function(e){return s("article",{key:e.id},[s("img",{attrs:{src:t.imageURL(e.image),alt:""}}),s("div",{staticClass:"content"},[s("h6",{staticClass:"autor"},[t._v("By "+t._s(e.autor))]),s("h4",{staticClass:"title"},[t._v(t._s(e.title))]),s("p",{staticClass:"text"},[t._v(t._s(e.text))])])])})),0)])},is=[],rs={data(){return{articles:[{image:"currency",autor:"Claire Robinson",title:"Receive money in any currency with no fees",text:"The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"},{image:"restaurant",autor:"Wilson Hutton",title:"Treat yourself without worrying about money",text:"Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"},{image:"plane",autor:"Wilson Hutton",title:"Take your Easybank card wherever you go",text:"We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"},{image:"confetti",autor:"Claire Robinson",title:"Our invite-only Beta accounts are now live!",text:"After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."}]}},methods:{imageURL(t){return"img/reto-d/image-"+t+".jpg"}}},cs=rs,ls=(s("4825"),Object(i["a"])(cs,ns,is,!1,null,"54a8aa43",null)),us=ls.exports,ds=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[s("div",{staticClass:"logo"},[s("Logo",{attrs:{dark:""}})],1),s("div",{staticClass:"socials"},t._l(t.socials,(function(e){return s("img",{key:e,attrs:{src:t.iconURL(e),alt:""}})})),0),s("div",{staticClass:"links"},t._l(t.links,(function(e){return s("p",{key:e},[t._v(t._s(e))])})),0),s("div",{staticClass:"btn"},[s("InviteBtn",{staticClass:"a"})],1),t._m(0)])},fs=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"copy"},[s("p",[t._v("© Easybank. All Rights Reserved")])])}],ps={components:{Logo:De,InviteBtn:Ye},data(){return{socials:["facebook","youtube","twitter","pinterest","instagram"],links:["About Us","Contact","Blog","Careers","Support","Privacy Policy"]}},methods:{iconURL(t){return"img/reto-d/icon-"+t+".svg"}}},vs=ps,ms=(s("2531"),Object(i["a"])(vs,ds,fs,!1,null,"0f107bf2",null)),gs=ms.exports,hs={components:{Header:qe,SectionA:Ke,SectionB:os,SectionC:us,Footer:gs}},bs=hs,As=(s("79d2"),Object(i["a"])(bs,je,Be,!1,null,null,null)),ys=As.exports;a["a"].use(d["a"]);const Cs=[{path:"/",name:"Home",component:_},{path:"/reto-a",name:"RetoA",component:dt},{path:"/reto-b",name:"RetoB",component:ee},{path:"/reto-c",name:"RetoC",component:ke},{path:"/reto-d",name:"RetoD",component:ys}],ws=new d["a"]({routes:Cs});var _s=ws,xs=s("2f62");a["a"].use(xs["a"]);var Es=new xs["a"].Store({state:{cont:5},mutations:{},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:_s,store:Es,render:function(t){return t(l)}}).$mount("#app")},"5b99":function(t,e,s){t.exports=s.p+"img/icon-email.f0f5b24a.svg"},"5c0b":function(t,e,s){"use strict";var a=s("9c0c"),o=s.n(a);o.a},"6c5b":function(t,e,s){"use strict";var a=s("c193"),o=s.n(a);o.a},"6c87":function(t,e,s){t.exports=s.p+"img/image-mockups.edc63e85.png"},"74de":function(t,e,s){"use strict";var a=s("cee4"),o=s.n(a);o.a},7599:function(t,e){t.exports="data:image/jpeg;base64,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"},"79d2":function(t,e,s){"use strict";var a=s("30db"),o=s.n(a);o.a},"7f5b":function(t,e,s){t.exports=s.p+"img/icon-arrow.e9fdc104.svg"},8236:function(t,e,s){},"835b":function(t,e,s){"use strict";var a=s("fbc8"),o=s.n(a);o.a},"87e4":function(t,e,s){"use strict";var a=s("2561"),o=s.n(a);o.a},"88e1":function(t){t.exports=JSON.parse('[{"id":1,"company":"Photosnap","logo":"photosnap.svg","new":true,"featured":true,"position":"Senior Frontend Developer","role":"Frontend","level":"Senior","postedAt":"1d ago","contract":"Full Time","location":"USA Only","languages":["HTML","CSS","JavaScript"],"tools":[]},{"id":2,"company":"Manage","logo":"manage.svg","new":true,"featured":true,"position":"Fullstack Developer","role":"Fullstack","level":"Midweight","postedAt":"1d ago","contract":"Part Time","location":"Remote","languages":["Python"],"tools":["React"]},{"id":3,"company":"Account","logo":"account.svg","new":true,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2d ago","contract":"Part Time","location":"USA Only","languages":["JavaScript"],"tools":["React","Sass"]},{"id":4,"company":"MyHome","logo":"myhome.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"5d ago","contract":"Contract","location":"USA Only","languages":["CSS","JavaScript"],"tools":[]},{"id":5,"company":"Loop Studios","logo":"loop-studios.svg","new":false,"featured":false,"position":"Software Engineer","role":"FullStack","level":"Midweight","postedAt":"1w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript"],"tools":["Ruby","Sass"]},{"id":6,"company":"FaceIt","logo":"faceit.svg","new":false,"featured":false,"position":"Junior Backend Developer","role":"Backend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"UK Only","languages":["Ruby"],"tools":["RoR"]},{"id":7,"company":"Shortly","logo":"shortly.svg","new":false,"featured":false,"position":"Junior Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"Worldwide","languages":["HTML","JavaScript"],"tools":["Sass"]},{"id":8,"company":"Insure","logo":"insure.svg","new":false,"featured":false,"position":"Junior Frontend Developer","role":"Frontend","level":"Junior","postedAt":"2w ago","contract":"Full Time","location":"USA Only","languages":["JavaScript"],"tools":["Vue","Sass"]},{"id":9,"company":"Eyecam Co.","logo":"eyecam-co.svg","new":false,"featured":false,"position":"Full Stack Engineer","role":"Fullstack","level":"Midweight","postedAt":"3w ago","contract":"Full Time","location":"Worldwide","languages":["JavaScript","Python"],"tools":["Django"]},{"id":10,"company":"The Air Filter Company","logo":"the-air-filter-company.svg","new":false,"featured":false,"position":"Front-end Dev","role":"Frontend","level":"Junior","postedAt":"1mo ago","contract":"Part Time","location":"Worldwide","languages":["JavaScript"],"tools":["React","Sass"]}]')},"8c56":function(t,e,s){t.exports=s.p+"img/illustration-1.b54a6971.svg"},"8c82":function(t,e,s){},"8e82":function(t,e,s){},9139:function(t,e,s){t.exports=s.p+"img/illustration-2.13d8305b.svg"},9603:function(t,e,s){},9661:function(t,e,s){},"9c0c":function(t,e,s){},a27c:function(t,e,s){"use strict";var a=s("9603"),o=s.n(a);o.a},af82:function(t,e,s){},b624:function(t,e,s){"use strict";var a=s("c5fc"),o=s.n(a);o.a},b8a3:function(t,e,s){},bb22:function(t,e,s){"use strict";var a=s("0524"),o=s.n(a);o.a},bba1:function(t,e,s){},bd0d:function(t,e,s){"use strict";var a=s("066c"),o=s.n(a);o.a},c015:function(t,e,s){},c193:function(t,e,s){},c490:function(t,e,s){},c5fc:function(t,e,s){},c790:function(t,e,s){},c9c8:function(t,e,s){"use strict";var a=s("8236"),o=s.n(a);o.a},cee4:function(t,e,s){},d02b:function(t,e,s){"use strict";var a=s("0dfb"),o=s.n(a);o.a},d769:function(t,e,s){},da00:function(t,e,s){"use strict";var a=s("af82"),o=s.n(a);o.a},daa8:function(t,e,s){"use strict";var a=s("8e82"),o=s.n(a);o.a},dccb:function(t,e,s){t.exports=s.p+"img/logo-dark.ac83810f.svg"},de16:function(t,e,s){"use strict";var a=s("d769"),o=s.n(a);o.a},e3e2:function(t,e,s){},f129:function(t,e,s){t.exports=s.p+"img/logo.0786a620.svg"},fa3e:function(t,e,s){t.exports=s.p+"img/bg-curve-mobile.e5592c28.svg"},fbc8:function(t,e,s){},fe73:function(t,e,s){"use strict";var a=s("e3e2"),o=s.n(a);o.a},ffc8:function(t,e,s){"use strict";var a=s("430b"),o=s.n(a);o.a}});
//# sourceMappingURL=app.f2c5e0dd.js.map
(function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],f=0,v=[];f<o.length;f++)r=o[f],s[r]&&v.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(v.length)v.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==s[l]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={0:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/personal-web-app/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,1]),a()})({0:function(t,e,a){t.exports=a("Vtdi")},"3Vhl":function(t,e,a){t.exports=a.p+"img/logos-Vue-React-jQuery.aeea7628.png"},"6H21":function(t,e,a){},"94Vf":function(t,e,a){"use strict";var n=a("LJG0"),s=a.n(n);s.a},BQ20:function(t,e,a){},"EG/1":function(t,e,a){},INaG:function(t,e,a){},LJG0:function(t,e,a){},Vtdi:function(t,e,a){"use strict";a.r(e);a("yt8O"),a("VRzm");var n=a("Kw5r"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("app-header"),a("div",{staticClass:"main-content"},[a("router-view")],1),a("app-footer")],1)},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("navbar",{attrs:{navbarClass:"col-12",items:[{to:"home",title:"Home"},{to:"about",title:"About"}]}})],1)])])},o=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"col-12 header-menu",class:t.navbarClass},t._l(t.items,function(e,n){return a("li",{key:n,staticClass:"header-menu__item"},[a("router-link",{attrs:{to:{name:e.to}}},[t._v(t._s(e.title))])],1)}))},c=[],u={name:"Navbar",props:{navbarClass:String,items:Array}},f=u,v=(a("hw8s"),a("KHd+")),p=Object(v["a"])(f,l,c,!1,null,"79df908c",null),d=p.exports,m={name:"Header",components:{navbar:d}},_=m,h=(a("94Vf"),Object(v["a"])(_,r,o,!1,null,"5d95cfc8",null)),b=h.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("ul",{staticClass:"col-12 footer-menu"},[a("li",{staticClass:"footer-menu__item"},[a("a",{attrs:{href:"mailto:larisaangald@gmail.com",target:"_blank"}},[a("i",{staticClass:"far fa-envelope"})])]),a("li",{staticClass:"footer-menu__item"},[a("a",{attrs:{href:"https://t.me/Larissa_Angald",target:"_blank"}},[a("i",{staticClass:"fab fa-telegram-plane"})])]),a("li",{staticClass:"footer-menu__item"},[a("a",{attrs:{href:"https://github.com/langald",target:"_blank"}},[a("i",{staticClass:"fab fa-github"})])]),a("li",{staticClass:"footer-menu__item"},[a("a",{attrs:{href:"https://www.facebook.com/people/%D0%9B%D0%B0%D1%80%D0%B8%D1%81%D0%B0-%D0%90%D0%BD%D0%B3%D0%B0%D0%BB%D1%8C%D0%B4/100001912967674",target:"_blank"}},[a("i",{staticClass:"fab fa-facebook-f"})])])])])])])}],w={name:"Footer",data:function(){return{}}},y=w,j=(a("v8IK"),Object(v["a"])(y,g,C,!1,null,"5d7acf4f",null)),k=j.exports,x={name:"App",components:{"app-header":b,"app-footer":k}},E=x,O=(a("XAuw"),Object(v["a"])(E,s,i,!1,null,null,null)),S=O.exports,D=a("jE9Z"),A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("section",{staticClass:"top-section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center justify-content-center top-section__wrap"},[n("div",{staticClass:"col-12 col-md-3"},[n("div",{staticClass:"image-container top-section__avatar"},[n("img",{attrs:{src:a("kV7A")}})])]),n("div",{staticClass:"col-12 col-md-8 top-section__title"},[t._v("\r\n          Hello!"),n("br"),t._v("\r\n          I'm Larissa Angald\r\n          "),n("p",{staticClass:"top-section__subtitle"},[t._v("Frontend Developer")])])])])]),n("section",{staticClass:"about-section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row align-items-center"},[n("div",{staticClass:"d-none d-md-block col-md-3 col-lg-4"},[n("div",{staticClass:"image-container"},[n("img",{attrs:{src:a("nYHi")}})])]),n("div",{staticClass:"col-md-6 col-lg-4"},[n("h3",{staticClass:"about-section__title"},[t._v(" My skills")]),n("ul",{staticClass:"about-section__skills"},[n("li",[t._v("HTML, CSS, JavaScript, jQuery")]),n("li",[t._v("AJAX requests")]),n("li",[t._v("REST API")]),n("li",[t._v("Axios")]),n("li",[t._v("ES5/6")]),n("li",[t._v("Vue.js + Vuex + Router")]),n("li",[t._v("Basic React + Redux")])])]),n("div",{staticClass:"d-none d-md-block col-md-3 col-lg-4"},[n("div",{staticClass:"image-container"},[n("img",{attrs:{src:a("3Vhl")}})])])])])])])}],H={name:"home",components:{}},V=H,I=(a("aH4B"),Object(v["a"])(V,A,B,!1,null,"3f735146",null)),$=I.exports,P=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"quote-wrapper"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12 col-md-8"},[a("p",{staticClass:"quote animated fadeInDown"},[t._v("\r\n            „I believe that thoughtful technology can solve any problem. "),a("br"),t._v("\r\n            And maybe save the world. "),a("br"),t._v("\r\n            At least make it more awesome.“\r\n          ")])])])])]),a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-4 goal animated fadeInLeft"},[a("i",{staticClass:"far fa-star-half fa-rotate-90 hidden"}),a("h3",[t._v("Creativity")]),a("p",[t._v("The ability to see connections and relationships where others have not")])]),a("div",{staticClass:"col-12 col-md-4 goal animated zoomIn"},[a("i",{staticClass:"fas fa-chart-line"}),a("h3",[t._v("Strategy")]),a("p",[t._v("Plan for achieving vision, prioritizing objectives, competing successfully")])]),a("div",{staticClass:"col-12 col-md-4 goal animated fadeInRight"},[a("i",{staticClass:"fas fa-laptop"}),a("h3",[t._v("Technology")]),a("p",[t._v("The right tech stack is the key to project’s growth and success")])])])])])}],J=(a("z5EF"),{}),L=Object(v["a"])(J,P,T,!1,null,"6c3e4847",null),M=L.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",[t._v("Page not found")]),a("router-link",{attrs:{to:{name:"home"}}},[t._v("Start from main page")])],1)},G=[],q={},z=Object(v["a"])(q,R,G,!1,null,null,null),N=z.exports;n["a"].use(D["a"]);var F=new D["a"]({routes:[{path:"/",name:"home",component:$},{path:"/about",name:"about",component:M},{path:"*",component:N}],mode:"history"}),K=a("L2JU");n["a"].use(K["a"]);var Q=new K["a"].Store({state:{},mutations:{},actions:{}});n["a"].config.productionTip=!1,new n["a"]({router:F,store:Q,render:function(t){return t(S)}}).$mount("#app")},XAuw:function(t,e,a){"use strict";var n=a("EG/1"),s=a.n(n);s.a},aH4B:function(t,e,a){"use strict";var n=a("6H21"),s=a.n(n);s.a},hw8s:function(t,e,a){"use strict";var n=a("INaG"),s=a.n(n);s.a},kV7A:function(t,e,a){t.exports=a.p+"img/avatar.70b447aa.jpg"},nYHi:function(t,e,a){t.exports=a.p+"img/logos-HTML-CSS-JS.b2935bec.png"},q5Nu:function(t,e,a){},v8IK:function(t,e,a){"use strict";var n=a("q5Nu"),s=a.n(n);s.a},z5EF:function(t,e,a){"use strict";var n=a("BQ20"),s=a.n(n);s.a}});
//# sourceMappingURL=app.c30ca7f6.js.map
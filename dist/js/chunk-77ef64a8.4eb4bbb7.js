(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77ef64a8"],{2061:function(e,t,s){"use strict";s.r(t);var n=s("4fc0"),i=s.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){s.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},"365c":function(e,t,s){"use strict";var n=s("4ea4");s("1c01"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(s("bc3a")),a=i.default.create({baseURL:"https://reactify.theironnetwork.org/data/"});t.default=a},4416:function(e,t,s){"use strict";s.r(t);var n=s("d4bb"),i=s("e73a");for(var a in i)["default"].indexOf(a)<0&&function(e){s.d(t,e,(function(){return i[e]}))}(a);var r=s("2877"),o=Object(r["a"])(i["default"],n["render"],n["staticRenderFns"],!1,null,null,null);t["default"]=o.exports},"4fc0":function(e,t,s){"use strict";var n=s("4ea4");s("1c01"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(s("7ecd")),a=n(s("365c")),r={components:{Slick:i.default},mounted:function(){this.getTestimonials()},computed:{slickOptions:function(){return{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:!0,arrows:!1}}},data:function(){return{loader:!0,testimonials:null}},methods:{getTestimonials:function(){var e=this;a.default.get("testimonials.js").then((function(t){e.loader=!1,e.testimonials=t.data})).catch((function(e){console.log(e)}))}}};t.default=r},5162:function(e,t,s){"use strict";var n=s("848a");s.o(n,"render")&&s.d(t,"render",(function(){return n["render"]})),s.o(n,"staticRenderFns")&&s.d(t,"staticRenderFns",(function(){return n["staticRenderFns"]}))},"7d36":function(e,t,s){"use strict";s.r(t);var n=s("5162"),i=s("2061");for(var a in i)["default"].indexOf(a)<0&&function(e){s.d(t,e,(function(){return i[e]}))}(a);var r=s("2877"),o=Object(r["a"])(i["default"],n["render"],n["staticRenderFns"],!1,null,null,null);t["default"]=o.exports},"848a":function(e,t,s){"use strict";s("1c01"),Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0,s("7f7f");var n=function(){var e=this,t=e._self._c;return t("div",[t("app-section-loader",{attrs:{status:e.loader}}),e.testimonials?t("slick",{attrs:{options:e.slickOptions}},[e._l(e.testimonials,(function(s){return[t("div",{key:s.id,staticClass:"session-slider"},[t("div",{staticClass:"slider-content"},[t("img",{staticClass:"rounded-circle img-responsive",attrs:{src:s.avatar,width:"170",height:"170"}}),t("div",{staticClass:"slider-meta mb-4"},[t("span",{staticClass:"d-block client-name fw-bold"},[t("i",[e._v(e._s(s.name))])]),t("span",{staticClass:"d-block client-digg"},[e._v(e._s(s.designation))])]),t("p",{staticClass:"px-4"},[e._v(e._s(s.body))])])])]}))],2):e._e()],1)};t.render=n;var i=[];t.staticRenderFns=i},ac7d:function(e,t,s){"use strict";s("1c01"),Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0;var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"session-wrapper"},[t("div",{staticClass:"session-left"},[t("session-slider-widget")],1),t("div",{staticClass:"session-right text-center"},[t("div",{staticClass:"session-table-cell"},[t("div",{staticClass:"session-content"},[t("img",{staticClass:"img-responsive mb-4",attrs:{src:e.appLogo,width:"78",height:"78"}}),t("h2",{staticClass:"mb-4"},[e._v(e._s(e.$t("message.forgotPassword")))]),t("p",{staticClass:"fs-14"},[e._v(e._s(e.$t("message.enterYourEmailToSendYouAResetLink"))+".")]),t("v-form",{staticClass:"mb-6",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t("v-text-field",{attrs:{label:"E-mail ID",rules:e.emailRules,required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),t("v-btn",{attrs:{color:"primary",block:"",to:"/session/reset-password"},on:{click:function(e){}}},[e._v("Send Email")])],1),t("div",[t("router-link",{attrs:{to:"/session/login"}},[e._v(e._s(e.$t("message.backToSignIn")))])],1)],1)])])])};t.render=n;var i=[];t.staticRenderFns=i},d4bb:function(e,t,s){"use strict";var n=s("ac7d");s.o(n,"render")&&s.d(t,"render",(function(){return n["render"]})),s.o(n,"staticRenderFns")&&s.d(t,"staticRenderFns",(function(){return n["staticRenderFns"]}))},dfe1:function(e,t,s){"use strict";var n=s("4ea4");s("1c01"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(s("7d36")),a=n(s("e065")),r={components:{SessionSliderWidget:i.default},data:function(){return{email:"",valid:!1,emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)||"E-mail must be valid"}],appLogo:a.default.appLogo2}}};t.default=r},e73a:function(e,t,s){"use strict";s.r(t);var n=s("dfe1"),i=s.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){s.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a}}]);
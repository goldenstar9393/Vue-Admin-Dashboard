(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ebb94682"],{8518:function(l,e,t){"use strict";t.r(e);var o=t("f6da"),r=t.n(o);for(var a in o)["default"].indexOf(a)<0&&function(l){t.d(e,l,(function(){return o[l]}))}(a);e["default"]=r.a},f106:function(l,e,t){"use strict";t.r(e);var o=t("fe4e"),r=t("8518");for(var a in r)["default"].indexOf(a)<0&&function(l){t.d(e,l,(function(){return r[l]}))}(a);var n=t("2877"),c=Object(n["a"])(r["default"],o["render"],o["staticRenderFns"],!1,null,null,null);e["default"]=c.exports},f6da:function(l,e,t){"use strict";t("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{elevateOnScroll:!1,hideOnScroll:!1,fadeOnScroll:!1,fadeImgOnScroll:!1,invertedScroll:!1,collapse:!1,collapseOnScroll:!1,shrinkOnScroll:!1,extended:!1,color:"accent",colors:["primary","accent","warning lighten-2","teal","orange"]}}};e.default=o},fbeb:function(l,e,t){"use strict";t("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0;var o=function(){var l=this,e=l._self._c;return e("div",[e("page-title-bar"),e("v-container",{attrs:{"grid-list-xl":"","pt-0":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("app-card",{attrs:{heading:l.$t("message.appBars"),customClasses:"mb-30",colClasses:"xl12 lg12 md12 sm12 xs12"}},[e("div",{staticClass:"mb-5"},[e("p",[l._v("The "),e("code",[l._v("v-app-bar")]),l._v(" component is pivotal to any graphical user interface (GUI), as it\n\t\t\t\t\t\tgenerally is the primary source of site navigation.")])]),e("v-app-bar",{attrs:{color:"primary",dark:""}},[e("v-app-bar-nav-icon"),e("v-toolbar-title",[l._v("Page title")]),e("div",{staticClass:"flex-grow-1"}),e("v-btn",{attrs:{icon:""}},[e("v-icon",[l._v("mdi-heart")])],1),e("v-btn",{attrs:{icon:""}},[e("v-icon",[l._v("mdi-magnify")])],1),e("v-menu",{attrs:{left:"",bottom:""},scopedSlots:l._u([{key:"activator",fn:function(t){var o=t.on;return[e("v-btn",l._g({attrs:{icon:""}},o),[e("v-icon",[l._v("mdi-dots-vertical")])],1)]}}])},[e("v-list",l._l(5,(function(t){return e("v-list-item",{key:t,on:{click:function(){}}},[e("v-list-item-title",[l._v("Option "+l._s(t))])],1)})),1)],1)],1)],1),e("app-card",{attrs:{heading:l.$t("message.playground"),customClasses:"mb-30",colClasses:"xl12 lg12 md12 sm12 xs12"}},[e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"6",md:"4"}},[e("v-select",{attrs:{label:"Color",items:l.colors},model:{value:l.color,callback:function(e){l.color=e},expression:"color"}})],1),e("v-col",{attrs:{cols:"12"}}),e("v-col",{attrs:{cols:"6",md:"3",lg:"2"}},[e("v-switch",{attrs:{label:"Elevate-on-scroll"},model:{value:l.elevateOnScroll,callback:function(e){l.elevateOnScroll=e},expression:"elevateOnScroll"}})],1),e("v-col",{attrs:{cols:"6",md:"3",lg:"2"}},[e("v-switch",{attrs:{label:"Hide-on-scroll"},model:{value:l.hideOnScroll,callback:function(e){l.hideOnScroll=e},expression:"hideOnScroll"}})],1),e("v-col",{attrs:{cols:"6",md:"3",lg:"2"}},[e("v-switch",{attrs:{label:"Fade-on-scroll"},model:{value:l.fadeOnScroll,callback:function(e){l.fadeOnScroll=e},expression:"fadeOnScroll"}})],1),e("v-col",{attrs:{cols:"6",md:"3",lg:"2"}},[e("v-switch",{attrs:{label:"Fade-img-on-scroll"},model:{value:l.fadeImgOnScroll,callback:function(e){l.fadeImgOnScroll=e},expression:"fadeImgOnScroll"}})],1),e("v-col",{attrs:{cols:"6",md:"3",lg:"2"}},[e("v-switch",{attrs:{label:"Inverted scroll"},model:{value:l.invertedScroll,callback:function(e){l.invertedScroll=e},expression:"invertedScroll"}})],1),e("v-col",{attrs:{cols:"6",md:"3",lg:"2"}},[e("v-switch",{attrs:{label:"Collapse"},model:{value:l.collapse,callback:function(e){l.collapse=e},expression:"collapse"}})],1),e("v-col",{attrs:{cols:"6",md:"3",lg:"2"}},[e("v-switch",{attrs:{label:"Collapse-on-scroll"},model:{value:l.collapseOnScroll,callback:function(e){l.collapseOnScroll=e},expression:"collapseOnScroll"}})],1),e("v-col",{attrs:{cols:"6",md:"3",lg:"2"}},[e("v-switch",{attrs:{label:"Shrink-on-scroll"},model:{value:l.shrinkOnScroll,callback:function(e){l.shrinkOnScroll=e},expression:"shrinkOnScroll"}})],1),e("v-col",{attrs:{cols:"6",md:"3",lg:"2"}},[e("v-switch",{attrs:{label:"Extended"},model:{value:l.extended,callback:function(e){l.extended=e},expression:"extended"}})],1)],1),e("v-card",{staticClass:"overflow-hidden"},[e("v-app-bar",{attrs:{absolute:"",dark:"","scroll-target":"#playground-example",color:l.color,"elevate-on-scroll":l.elevateOnScroll,"hide-on-scroll":l.hideOnScroll,"fade-on-scroll":l.fadeOnScroll,"fade-img-on-scroll":l.fadeImgOnScroll,"inverted-scroll":l.invertedScroll,collapse:l.collapse,"collapse-on-scroll":l.collapseOnScroll,"shrink-on-scroll":l.shrinkOnScroll,extended:l.extended}},[e("v-app-bar-nav-icon"),e("v-toolbar-title",[l._v("Title")]),e("div",{staticClass:"flex-grow-1"}),e("v-btn",{attrs:{icon:""}},[e("v-icon",[l._v("search")])],1)],1),e("v-sheet",{staticClass:"overflow-y-auto",attrs:{id:"playground-example","min-height":"400"}},[e("v-container")],1)],1)],1)],1)],1)],1)};e.render=o;var r=[];e.staticRenderFns=r},fe4e:function(l,e,t){"use strict";var o=t("fbeb");t.o(o,"render")&&t.d(e,"render",(function(){return o["render"]})),t.o(o,"staticRenderFns")&&t.d(e,"staticRenderFns",(function(){return o["staticRenderFns"]}))}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-366eaeeb"],{"0f73":function(t,e,a){"use strict";var n=a("6d91");a.o(n,"render")&&a.d(e,"render",(function(){return n["render"]})),a.o(n,"staticRenderFns")&&a.d(e,"staticRenderFns",(function(){return n["staticRenderFns"]}))},2281:function(t,e,a){"use strict";var n=a("4ea4");a("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("365c")),i={data:function(){return{loader:!0,headers:[{text:"Dessert (100g serving)",align:"left",sortable:!1,value:"name"},{text:"Calories",value:"calories"},{text:"Fat (g)",value:"fat"},{text:"Carbs (g)",value:"carbs"},{text:"Protein (g)",value:"protein"},{text:"Sodium (mg)",value:"sodium"},{text:"Calcium (%)",value:"calcium"},{text:"Iron (%)",value:"iron"}],items:[]}},mounted:function(){this.getTablesData()},methods:{getTablesData:function(){var t=this;r.default.get("vuely/tablesData.js").then((function(e){t.loader=!1,t.items=e.data})).catch((function(t){console.log(t)}))}}};e.default=i},"365c":function(t,e,a){"use strict";var n=a("4ea4");a("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("bc3a")),i=r.default.create({baseURL:"https://reactify.theironnetwork.org/data/"});e.default=i},3998:function(t,e,a){"use strict";a.r(e);var n=a("0f73"),r=a("c9be");for(var i in r)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(i);var s=a("2877"),o=Object(s["a"])(r["default"],n["render"],n["staticRenderFns"],!1,null,null,null);e["default"]=o.exports},"6d91":function(t,e,a){"use strict";a("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0,a("7f7f");var n=function(){var t=this,e=t._self._c;return e("div",[e("page-title-bar"),e("app-section-loader",{attrs:{status:t.loader}}),e("v-container",{attrs:{fluid:"","grid-list-xl":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("app-card",{attrs:{heading:t.$t("message.standard"),fullBlock:!0,colClasses:"xl12 lg12 md12 sm12 xs12"}},[e("div",{staticClass:"pa-3"},[e("p",{staticClass:"mb-0"},[t._v("The standard data-table contains data with no additional functionality. You can opt out of displaying table actions that allow you to control the pagination of information with the "),e("code",[t._v("hide-actions")]),t._v(" prop.")])]),e("v-data-table",{attrs:{headers:t.headers,items:t.items,"hide-default-footer":""},scopedSlots:t._u([{key:"items",fn:function(a){return[e("td",[t._v(t._s(a.item.name))]),e("td",[t._v(t._s(a.item.calories))]),e("td",[t._v(t._s(a.item.fat))]),e("td",[t._v(t._s(a.item.carbs))]),e("td",[t._v(t._s(a.item.protein))]),e("td",[t._v(t._s(a.item.sodium))]),e("td",[t._v(t._s(a.item.calcium))]),e("td",[t._v(t._s(a.item.iron))])]}}])})],1)],1)],1)],1)};e.render=n;var r=[];e.staticRenderFns=r},c9be:function(t,e,a){"use strict";a.r(e);var n=a("2281"),r=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a}}]);
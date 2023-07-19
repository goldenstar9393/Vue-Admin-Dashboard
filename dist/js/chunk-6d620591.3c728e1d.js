(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d620591"],{"1a6c":function(t,e,r){"use strict";r("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0;var a=function(){var t=this,e=t._self._c;return e("div",[e("page-title-bar"),e("v-container",{attrs:{fluid:"","grid-list-xl":"","pt-0":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("app-card",{attrs:{heading:t.$t("message.default"),colClasses:"xs12 md6"}},[e("div",{staticClass:"mb-6"},[e("p",[t._v("By default, progress circular uses the applications secondary color.")])]),[e("div",{staticClass:"text-center"},[e("v-progress-circular",{staticClass:"mx-2",attrs:{value:20,color:"primary"}}),e("v-progress-circular",{staticClass:"mx-2",attrs:{value:40,color:"error"}}),e("v-progress-circular",{staticClass:"mx-2",attrs:{value:60,color:"success"}}),e("v-progress-circular",{staticClass:"mx-2",attrs:{value:80,color:"warning"}}),e("v-progress-circular",{staticClass:"mx-2",attrs:{value:100,color:"info"}})],1)]],2),e("app-card",{attrs:{heading:t.$t("message.colored"),colClasses:"xs12 md6"}},[e("div",{staticClass:"mb-6"},[e("p",[t._v("Alternate colors can be applied.")])]),[e("div",{staticClass:"text-center"},[e("v-progress-circular",{staticClass:"mx-2",attrs:{value:100,color:"blue-grey"}}),e("v-progress-circular",{staticClass:"mx-2",attrs:{value:80,color:"deep-orange lighten-2"}}),e("v-progress-circular",{staticClass:"mx-2",attrs:{value:60,color:"brown"}}),e("v-progress-circular",{staticClass:"mx-2",attrs:{value:40,color:"lime"}}),e("v-progress-circular",{staticClass:"mx-2",attrs:{value:20,color:"indigo darken-2"}})],1)]],2)],1),e("v-layout",{attrs:{row:"",wrap:""}},[e("app-card",{attrs:{heading:t.$t("message.indeterminate"),colClasses:"xs12 md6"}},[e("div",{staticClass:"mb-6"},[e("p",[t._v("An indeterminate progress circular animates forever.")])]),[e("div",{staticClass:"text-center"},[e("v-progress-circular",{staticClass:"mx-2",attrs:{indeterminate:"",color:"primary"}}),e("v-progress-circular",{staticClass:"mx-2",attrs:{indeterminate:"",color:"red"}}),e("v-progress-circular",{staticClass:"mx-2",attrs:{indeterminate:"",color:"purple"}}),e("v-progress-circular",{staticClass:"mx-2",attrs:{indeterminate:"",color:"green"}}),e("v-progress-circular",{staticClass:"mx-2",attrs:{indeterminate:"",color:"amber"}})],1)]],2),e("app-card",{attrs:{heading:t.$t("message.sizeAndWidth"),colClasses:"xs12 md6"}},[e("div",{staticClass:"mb-6"},[e("p",[t._v("The progress circular component can have an altered width and size.")])]),[e("div",{staticClass:"text-center"},[e("v-progress-circular",{staticClass:"mx-2",attrs:{indeterminate:"",size:50,color:"primary"}}),e("v-progress-circular",{staticClass:"mx-2",attrs:{indeterminate:"",width:3,color:"red"}}),e("v-progress-circular",{staticClass:"mx-2",attrs:{indeterminate:"",size:70,width:7,color:"purple"}}),e("v-progress-circular",{staticClass:"mx-2",attrs:{indeterminate:"",width:3,color:"green"}}),e("v-progress-circular",{staticClass:"mx-2",attrs:{indeterminate:"",size:50,color:"amber"}})],1)]],2)],1),e("v-layout",{attrs:{row:"",wrap:""}},[e("app-card",{attrs:{heading:t.$t("message.rotate"),colClasses:"xs12 md6"}},[e("div",{staticClass:"mb-6"},[e("p",[t._v("The "),e("code",[t._v("rotate")]),t._v(" prop gives you the ability to customize the\n\t\t\t\t\t\t"),e("code",[t._v("v-progress-circular's")]),t._v(" origin.")])]),e("div",{staticClass:"text-center"},[e("v-progress-circular",{staticClass:"ma-2",attrs:{rotate:360,size:100,width:15,value:t.value,color:"teal"}},[t._v("\n\t\t\t\t\t\t"+t._s(t.value)+"\n\t\t\t\t\t")]),e("v-progress-circular",{staticClass:"ma-2",attrs:{rotate:-90,size:100,width:15,value:t.value,color:"primary"}},[t._v("\n\t\t\t\t\t\t"+t._s(t.value)+"\n\t\t\t\t\t")]),e("v-progress-circular",{staticClass:"ma-2",attrs:{rotate:90,size:100,width:15,value:t.value,color:"red"}},[t._v("\n\t\t\t\t\t\t"+t._s(t.value)+"\n\t\t\t\t\t")]),e("v-progress-circular",{staticClass:"ma-2",attrs:{rotate:180,size:100,width:15,value:t.value,color:"pink"}},[t._v("\n\t\t\t\t\t\t"+t._s(t.value)+"\n\t\t\t\t\t")])],1)]),e("app-card",{attrs:{heading:t.$t("message.determinate"),colClasses:"xs12 md6 determinate-progress"}},[e("div",{staticClass:"mb-6"},[e("p",[t._v("The progress linear component can have a determinate state modified by\n\t\t\t\t\t\t"),e("code",[t._v("v-model")]),t._v(".")])]),e("v-progress-linear",{attrs:{height:"7",color:"pink"},model:{value:t.valueDeterminate,callback:function(e){t.valueDeterminate=e},expression:"valueDeterminate"}})],1)],1),e("v-layout",{attrs:{row:"",wrap:""}},[e("app-card",{attrs:{heading:t.$t("message.indeterminate"),colClasses:"xs12 md6"}},[e("div",{staticClass:"mb-6"},[e("p",[t._v("Just as with the progress circular component, progress linear has an indeterminate state.")])]),e("v-progress-linear",{attrs:{indeterminate:"",color:"green",height:"7"}})],1),e("app-card",{attrs:{heading:t.$t("message.buffer"),colClasses:"xs12 md6"}},[e("div",{staticClass:"mb-4"},[e("p",[t._v("A buffer state represents two values simultaneously. The primary value is controlled by the model,\n\t\t\t\t\t\twhereas the buffer is controlled by the\n\t\t\t\t\t\t"),e("code",[t._v("buffer-value")]),t._v(" prop.")])]),e("v-progress-linear",{attrs:{"buffer-value":t.bufferValue,color:"yellow",height:"7"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)],1)],1)],1)};e.render=a;var s=[];e.staticRenderFns=s},4855:function(t,e,r){"use strict";var a=r("1a6c");r.o(a,"render")&&r.d(e,"render",(function(){return a["render"]})),r.o(a,"staticRenderFns")&&r.d(e,"staticRenderFns",(function(){return a["staticRenderFns"]}))},"4cd7":function(t,e,r){"use strict";r.r(e);var a=r("4855"),s=r("d964");for(var i in s)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return s[t]}))}(i);var l=r("2877"),c=Object(l["a"])(s["default"],a["render"],a["staticRenderFns"],!1,null,null,null);e["default"]=c.exports},d964:function(t,e,r){"use strict";r.r(e);var a=r("dfa4"),s=r.n(a);for(var i in a)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return a[t]}))}(i);e["default"]=s.a},dfa4:function(t,e,r){"use strict";r("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{interval:{},value:0,valueDeterminate:50,buffer:10,bufferValue:20}},beforeDestroy:function(){clearInterval(this.interval)},methods:{startBuffer:function(){var t=this;this.interval=setInterval((function(){t.buffer+=10*Math.random()+5,t.bufferValue+=10*Math.random()+5}),2e3)}},mounted:function(){var t=this;this.interval=setInterval((function(){if(100===t.value)return t.value=0;t.value+=10}),1e3),this.startBuffer()}};e.default=a}}]);
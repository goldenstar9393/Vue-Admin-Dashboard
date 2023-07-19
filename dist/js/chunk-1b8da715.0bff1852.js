(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b8da715"],{"0388":function(e,t,a){"use strict";a("1c01"),Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0,a("7f7f");var i=function(){var e=this,t=e._self._c;return t("v-card",[t("v-card-title",[e._v(" Package ")]),t("v-card-text",[t("v-container",{attrs:{fluid:"","grid-list-xl":"","pt-0":""}},[t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{staticClass:"col-height-auto",attrs:{xs12:"",md12:"",lg12:"",sm12:""}},[t("div",[t("v-card",{attrs:{loading:e.loading,height:"2px",flat:""}}),t("div",{staticClass:"profile-top mt-4"},[t("v-img",{ref:"categoryImage",staticClass:"user-image text-center mb-4",attrs:{src:e.selectedPackage.src?e.selectedPackage.src:"https://via.placeholder.com/150",height:"200px",contain:""}},[t("v-card-title",[t("v-file-input",{attrs:{rules:e.rules,accept:"image/png, image/jpeg, image/bmp",placeholder:"Pick an image","prepend-icon":"mdi-camera",label:"Image",clearable:"","hide-input":"","show-size":""},on:{change:function(t){return e.changeImage(t)}},model:{value:e.imageFile,callback:function(t){e.imageFile=t},expression:"imageFile"}}),t("v-btn",{staticClass:"mb-30",attrs:{fab:"","x-small":"",color:"error"},on:{click:function(t){return t.stopPropagation(),e.clearImageInput.apply(null,arguments)}}},[t("v-icon",{attrs:{small:""}},[e._v("delete")])],1)],1)],1),t("div",{staticClass:"user-list-content"},[t("v-flex",{staticClass:"col-height-auto",attrs:{xs12:"",md12:"",lg12:"",sm12:""}},[t("div",[t("v-text-field",{attrs:{label:"Name",filled:""},on:{change:function(t){e.changed=!0}},model:{value:e.selectedPackage.name,callback:function(t){e.$set(e.selectedPackage,"name",t)},expression:"selectedPackage.name"}}),t("v-text-field",{attrs:{label:"Name Arabic",filled:""},on:{change:function(t){e.changed=!0}},model:{value:e.selectedPackage.name_ar,callback:function(t){e.$set(e.selectedPackage,"name_ar",t)},expression:"selectedPackage.name_ar"}}),t("v-text-field",{attrs:{label:"Cost",filled:""},on:{change:function(t){e.changed=!0}},model:{value:e.selectedPackage.cost,callback:function(t){e.$set(e.selectedPackage,"cost",t)},expression:"selectedPackage.cost"}}),t("v-chip",{attrs:{color:"red","text-color":"white",small:""}},[t("v-icon",{attrs:{small:"",left:""}},[e._v(" warning ")]),e._v("\n                      Min Cost : "+e._s(e.minCost)+"\n                    ")],1),t("v-text-field",{attrs:{label:"Featured Duration in Days",filled:""},on:{change:function(t){e.changed=!0}},model:{value:e.selectedPackage.duration_in_days,callback:function(t){e.$set(e.selectedPackage,"duration_in_days",t)},expression:"selectedPackage.duration_in_days"}}),t("v-text-field",{attrs:{label:"Points",filled:""},on:{change:function(t){e.changed=!0}},model:{value:e.selectedPackage.points,callback:function(t){e.$set(e.selectedPackage,"points",t)},expression:"selectedPackage.points"}}),t("v-text-field",{attrs:{label:"Time Limit",filled:""},on:{change:function(t){e.changed=!0}},model:{value:e.selectedPackage.limit,callback:function(t){e.$set(e.selectedPackage,"limit",t)},expression:"selectedPackage.limit"}}),t("v-color-picker",{attrs:{"dot-size":"25",mode:"hexa","swatches-max-height":"200"},model:{value:e.selectedPackage.font_color,callback:function(t){e.$set(e.selectedPackage,"font_color",t)},expression:"selectedPackage.font_color"}})],1)])],1)],1)],1)])],1)],1)],1),t("v-card-actions",[t("v-row",{staticClass:"mb-4 pr-2 pl-2",attrs:{justify:"space-between"}},[t("v-btn",{attrs:{color:"primary",loading:e.loading,disabled:e.loading},on:{click:function(t){return t.stopPropagation(),e.save.apply(null,arguments)}}},[e._v("Save\n      ")]),t("v-btn",{attrs:{color:"warning"},on:{click:function(t){return t.stopPropagation(),e.close.apply(null,arguments)}}},[e._v("Cancel")])],1)],1)],1)};t.render=i;var n=[];t.staticRenderFns=n},"03e7":function(e,t,a){"use strict";var i=a("4ea4");a("1c01"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("7f7f");var n=i(a("3e34")),s={props:["isNew","close"],computed:{selectedPackage:function(){return this.$store.getters.selectedPackage},minCost:function(){return 1==this.country.id?5:1}},data:function(){return{VIEW:n.default.actions.view,CREATE:n.default.actions.create,UPDATE:n.default.actions.update,DELETE:n.default.actions.delete,RESOURCE:n.default.resources.category,loading:!1,imageFile:null,rules:[function(e){return!e||e.size<5e5||"Avatar size should be less than 2 MB!"}]}},methods:{changeImage:function(e){this.changed=!0,this.selectedPackage.src=URL.createObjectURL(e),this.selectedPackage.image=e},clearImageInput:function(){this.changed=!0,this.selectedPackage.src="https://via.placeholder.com/150",this.selectedPackage.image="",this.imageFile=null},save:function(){this.isNew?this.createPackage():this.updatePackage()},createPackage:function(){var e=this;this.appendFormDataParams(),this.loading=!0,this.$store.dispatch("createPackage",this.packageFormData).then((function(){e.loading=!1,e.imageFile=null,e.close()})).finally((function(){return e.loading=!1}))},updatePackage:function(){var e=this;this.appendFormDataParams(),this.loading=!0,this.$store.dispatch("updatePackage",this.packageFormData).finally((function(){e.loading=!1,e.imageFile=null,e.close()}))},appendFormDataParams:function(){this.packageFormData=new FormData,this.packageFormData.append("name",this.selectedPackage.name),this.packageFormData.append("name_ar",this.selectedPackage.name_ar),this.packageFormData.append("cost",this.selectedPackage.cost),this.packageFormData.append("duration_in_days",this.selectedPackage.duration_in_days),this.packageFormData.append("limit",this.selectedPackage.limit?this.selectedPackage.limit:""),this.packageFormData.append("points",this.selectedPackage.points),this.packageFormData.append("font_color",this.selectedPackage.font_color),void 0!=this.selectedPackage.image&&this.packageFormData.append("image",this.selectedPackage.image)}}};t.default=s},"07e9":function(e,t,a){"use strict";a.r(t);var i=a("6b3e"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t["default"]=n.a},1018:function(e,t,a){"use strict";a.r(t);var i=a("b457"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t["default"]=n.a},"133d4":function(e,t,a){"use strict";a.r(t);var i=a("62e9"),n=a("07e9");for(var s in n)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(s);a("15aa");var c=a("2877"),o=Object(c["a"])(n["default"],i["render"],i["staticRenderFns"],!1,null,"16488f7c",null);t["default"]=o.exports},"15aa":function(e,t,a){"use strict";a("e0f1")},5844:function(e,t,a){"use strict";a.r(t);var i=a("6939"),n=a("1018");for(var s in n)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(s);var c=a("2877"),o=Object(c["a"])(n["default"],i["render"],i["staticRenderFns"],!1,null,null,null);t["default"]=o.exports},"5d8e":function(e,t,a){"use strict";var i=a("0388");a.o(i,"render")&&a.d(t,"render",(function(){return i["render"]})),a.o(i,"staticRenderFns")&&a.d(t,"staticRenderFns",(function(){return i["staticRenderFns"]}))},"5eeb":function(e,t,a){"use strict";a("1c01"),Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0,a("7f7f");var i=function(){var e=this,t=e._self._c;return t("div",[t("page-title-bar"),t("app-section-loader",{attrs:{status:e.loader}}),t("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[t("v-layout",{attrs:{row:"",wrap:""}},[t("v-flex",{attrs:{xl12:"",md12:"",lg12:"",sm12:"",xs12:""}},[t("div",[t("div",{staticClass:"pricing-wrapper"},[t("div",{staticClass:"pricing-list"},[t("v-layout",{attrs:{row:"",wrap:"","row-eq-height":""}},e._l(e.packages,(function(a){return t("app-card",{key:a.id,attrs:{colClasses:"xs12 sm4 md4 lg4 w-full",customClasses:"text-center",fullBlock:!0}},[t("div",{staticClass:"pricing-icon mb-30"},[t("img",{staticClass:"img-responsive",attrs:{src:a.src?a.src:"/static/img/pricing-icon.png",alt:"package card",width:"",height:""}})]),t("h2",{staticClass:"primary--text pricing-title"},[e._v(e._s(a.name))]),t("h2",{staticClass:"primary--text pricing-title"},[e._v(e._s(a.name_ar))]),t("div",{staticClass:"mb-4"},[t("h2",{staticClass:"amount-title"},[e._v("$ "+e._s(a.cost))]),t("span",{staticClass:"text-muted small"},[t("v-chip",[e._v(" Duration:")]),e._v("\n                      "+e._s(a.duration_in_days)+" Days")],1)]),t("ul",{staticClass:"price-detail list-unstyled"},[t("li",[t("v-chip",[e._v(" Limit:")]),e._v("\n                      "+e._s(a.limit?a.limit+" Days":"Unlimited")+"\n                    ")],1)]),t("v-btn",{staticClass:"mr-2",attrs:{color:"primary",fab:"",small:"",disabled:!e.$can(e.UPDATE,e.RESOURCE)},on:{click:function(t){return e.edit(a)}}},[t("v-icon",{attrs:{small:""}},[e._v("edit")])],1),t("v-btn",{attrs:{fab:"",small:"",color:"error",disabled:!e.$can(e.DELETE,e.RESOURCE)},on:{click:function(t){return t.stopPropagation(),e.openConfirmationDialog(a)}}},[t("v-icon",{attrs:{small:""}},[e._v("delete")])],1)],1)})),1)],1)])])]),t("v-dialog",{attrs:{"max-width":"700px"},on:{"click:outside":this.close},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t("package-dialog",{ref:"packageDialog",attrs:{"is-new":e.newPackage,close:e.close}})],1),t("v-dialog",{attrs:{"max-width":"700px"},on:{"click:outside":this.close},model:{value:e.sortDialog,callback:function(t){e.sortDialog=t},expression:"sortDialog"}},[t("package-sort-table",{attrs:{close:e.close}})],1),t("v-dialog",{attrs:{"max-width":"500px"},on:{"click:outside":e.closeConfirmationDialog},model:{value:e.confirmationDialog,callback:function(t){e.confirmationDialog=t},expression:"confirmationDialog"}},[t("v-card",[t("v-card-title",[e._v("\n            Are you sure you want to delete this package?\n          ")]),t("v-card-actions",[t("v-btn",{attrs:{color:"error",loading:e.loading,disabled:e.loading},on:{click:function(t){return t.stopPropagation(),e.deletePackage.apply(null,arguments)}}},[e._v("\n              Delete\n            ")]),t("v-btn",{attrs:{color:"warning"},on:{click:function(t){return t.stopPropagation(),e.closeConfirmationDialog.apply(null,arguments)}}},[e._v("Cancel")])],1)],1)],1),t("v-btn",{staticClass:"mt-70 mr-2",attrs:{color:"primary",disabled:!e.$can(e.CREATE,e.RESOURCE)},on:{click:e.create}},[e._v("\n        + Add New\n      ")]),t("v-btn",{staticClass:"mt-70",attrs:{color:"info",disabled:!e.$can(e.UPDATE,e.RESOURCE)},on:{click:e.openSortDialog}},[e._v("\n        Sort\n      ")])],1)],1)],1)};t.render=i;var n=[];t.staticRenderFns=n},"62e9":function(e,t,a){"use strict";var i=a("cbae");a.o(i,"render")&&a.d(t,"render",(function(){return i["render"]})),a.o(i,"staticRenderFns")&&a.d(t,"staticRenderFns",(function(){return i["staticRenderFns"]}))},6939:function(e,t,a){"use strict";var i=a("5eeb");a.o(i,"render")&&a.d(t,"render",(function(){return i["render"]})),a.o(i,"staticRenderFns")&&a.d(t,"staticRenderFns",(function(){return i["staticRenderFns"]}))},"6b3e":function(e,t,a){"use strict";var i=a("4ea4");a("1c01"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("b76a")),s={props:["close"],components:{draggable:n.default},oldPackages:null,created:function(){this.$options.oldPackages=this.packages},computed:{packages:{get:function(){return this.$store.getters.packages},set:function(e){this.$store.commit("setPackages",e)}}},data:function(){return{loading:!1,rowStyle:{cursor:"grab"},dragging:!1}},methods:{save:function(){var e=this;this.loading=!0,this.$store.dispatch("sortPackages",this.packages).finally((function(){e.loading=!1,e.close()}))},cancel:function(){this.$store.commit("setPackages",this.$options.oldPackages),this.close()}}};t.default=s},"7b84":function(e,t,a){"use strict";a.r(t);var i=a("5d8e"),n=a("cc29");for(var s in n)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(s);var c=a("2877"),o=Object(c["a"])(n["default"],i["render"],i["staticRenderFns"],!1,null,null,null);t["default"]=o.exports},b457:function(e,t,a){"use strict";var i=a("4ea4");a("1c01"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("7b84")),s=i(a("133d4")),c=i(a("3e34")),o=i(a("b76a")),l={components:{PackageDialog:n.default,PackageSortTable:s.default,draggable:o.default},data:function(){return{VIEW:c.default.actions.view,CREATE:c.default.actions.create,UPDATE:c.default.actions.update,DELETE:c.default.actions.delete,RESOURCE:c.default.resources.featuredPackage,loader:!0,loading:!1,switchPlan:!0,dialog:!1,sortDialog:!1,newPackage:!1,confirmationDialog:!1}},computed:{packages:function(){return this.$store.getters.packages}},created:function(){this.fetchPackages()},methods:{fetchPackages:function(){var e=this;this.$store.dispatch("fetchPackages").then((function(){e.loader=!1}))},deletePackage:function(){var e=this;this.loading=!0,this.$store.dispatch("deletePackage").finally((function(){e.closeConfirmationDialog(),e.close()}))},close:function(){this.newPackage=!1,this.dialog=!1,this.sortDialog=!1,this.loading=!1,void 0!==this.$refs.packageDialog&&(this.$refs.packageDialog.imageFile=null),this.$store.commit("updateSelectedPackage",{})},openDialog:function(){this.dialog=!0},edit:function(e){this.$store.commit("updateSelectedPackage",e),this.openDialog()},create:function(){this.newPackage=!0,this.$store.commit("updateSelectedPackage",{name:"",name_ar:"",cost:"",points:"",src:"",font_color:"",image:"",limit:""}),this.openDialog()},openConfirmationDialog:function(e){this.$store.commit("updateSelectedPackage",e),this.confirmationDialog=!0},closeConfirmationDialog:function(){this.$store.commit("updateSelectedPackage",{}),this.confirmationDialog=!1},openSortDialog:function(){this.sortDialog=!0}}};t.default=l},cbae:function(e,t,a){"use strict";a("1c01"),Object.defineProperty(t,"__esModule",{value:!0}),t.staticRenderFns=t.render=void 0,a("7f7f");var i=function(){var e=this,t=e._self._c;return t("v-card",{staticClass:"px-2 py-2"},[t("v-card-title",[e._v("\n    Package\n  ")]),t("v-simple-table",{style:e.rowStyle},[t("thead",{staticClass:"thead-dark"},[t("tr",[t("th",{staticClass:"text-left"},[e._v("Name")]),t("th",{staticClass:"text-left"},[e._v("Name Arabic")]),t("th",{staticClass:"text-left"},[e._v("Cost")])])]),t("draggable",{attrs:{tag:"tbody"},model:{value:e.packages,callback:function(t){e.packages=t},expression:"packages"}},e._l(e.packages,(function(a){return t("tr",{key:a.id},[t("td",[e._v(e._s(a.name))]),t("td",[e._v(e._s(a.name_ar))]),t("td",[e._v(e._s(a.cost))])])})),0)],1),t("v-card-actions",[t("v-row",{staticClass:"py-4 px-2",attrs:{justify:"space-between"}},[t("v-btn",{attrs:{color:"primary",loading:e.loading,disabled:e.loading},on:{click:function(t){return t.stopPropagation(),e.save.apply(null,arguments)}}},[e._v("\n        Save\n      ")]),t("v-btn",{attrs:{color:"warning"},on:{click:function(t){return t.stopPropagation(),e.cancel.apply(null,arguments)}}},[e._v("Cancel")])],1)],1)],1)};t.render=i;var n=[];t.staticRenderFns=n},cc29:function(e,t,a){"use strict";a.r(t);var i=a("03e7"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(s);t["default"]=n.a},e0f1:function(e,t,a){}}]);
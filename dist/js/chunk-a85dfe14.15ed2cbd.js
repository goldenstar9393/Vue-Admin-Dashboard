(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a85dfe14"],{"05d5":function(t,e,a){"use strict";var s=a("0bf2");a.o(s,"render")&&a.d(e,"render",(function(){return s["render"]})),a.o(s,"staticRenderFns")&&a.d(e,"staticRenderFns",(function(){return s["staticRenderFns"]}))},"0bf2":function(t,e,a){"use strict";a("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0;var s=function(){var t=this,e=t._self._c;return e("div",[e("v-card",{attrs:{loading:t.loading,height:"2px",flat:""}}),e("v-simple-table",[e("thead",[e("tr",[e("th",{staticClass:"text-left"},[t._v("ID")]),e("th",{staticClass:"text-left"},[t._v("Type")]),e("th",{staticClass:"text-left"},[t._v("Type Arabic")]),e("th",{staticClass:"text-center"})])]),e("tbody",t._l(t.types,(function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.id))]),e("td",[t._v(t._s(a.type))]),e("td",[t._v(t._s(a.type_ar))]),e("td",[e("v-btn",{staticClass:"ma-2",attrs:{color:"info",fab:"","x-small":"",disabled:!t.$can(t.UPDATE,t.RESOURCE)},on:{click:function(e){return t.editDialog(a)}}},[e("v-icon",[t._v("edit")])],1),e("v-btn",{attrs:{fab:"",dark:"","x-small":"",color:"error"},on:{click:function(e){return t.confirmDeletion(a)}}},[e("v-icon",{attrs:{dark:"",small:""}},[t._v("delete")])],1)],1)])})),0)]),e("v-btn",{staticClass:"mt-5",attrs:{color:"primary"},on:{click:t.openNewDialog}},[t._v("\n    + Add New\n  ")]),e("v-dialog",{attrs:{"max-width":"500px"},on:{"click:outside":t.closeDialog},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("v-card",[e("v-card-title",[t._v("\n        New/Edit\n      ")]),e("v-card-text",[e("v-text-field",{attrs:{label:"Title",required:""},model:{value:t.selectedType.type,callback:function(e){t.$set(t.selectedType,"type",e)},expression:"selectedType.type"}}),e("v-text-field",{attrs:{label:"Title Arabic",required:""},model:{value:t.selectedType.type_ar,callback:function(e){t.$set(t.selectedType,"type_ar",e)},expression:"selectedType.type_ar"}}),e("v-btn",{staticClass:"mr-3 mt-2",attrs:{disabled:t.loading,color:"success",loading:t.loading},on:{click:t.save}},[e("div",[t._v("Save")])]),e("v-btn",{staticClass:"float-right mt-2",attrs:{color:"warning"},on:{click:function(e){return e.stopPropagation(),t.closeDialog.apply(null,arguments)}}},[t._v("Cancel")])],1)],1)],1),e("v-dialog",{attrs:{"max-width":"500px"},on:{"click:outside":t.closeConfirmDialog},model:{value:t.confirmDialog,callback:function(e){t.confirmDialog=e},expression:"confirmDialog"}},[e("v-card",[e("v-card-title",[t._v("\n        Are you sure you want to delete this type?\n      ")]),e("v-card-text",[e("v-btn",{staticClass:"mr-3 mt-2",attrs:{disabled:t.loading,color:"error",loading:t.loading},on:{click:t.deleteType}},[e("div",[t._v("Delete")])]),e("v-btn",{staticClass:"float-right mt-2",attrs:{color:"warning"},on:{click:function(e){return e.stopPropagation(),t.closeConfirmDialog.apply(null,arguments)}}},[t._v("Cancel")])],1)],1)],1)],1)};e.render=s;var n=[];e.staticRenderFns=n},"29c3":function(t,e,a){"use strict";var s=a("2d36");a.o(s,"render")&&a.d(e,"render",(function(){return s["render"]})),a.o(s,"staticRenderFns")&&a.d(e,"staticRenderFns",(function(){return s["staticRenderFns"]}))},"2d36":function(t,e,a){"use strict";a("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0;var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"contact-wrapper"},[e("page-title-bar"),e("v-container",{attrs:{fluid:"","pt-0":"","grid-list-xl":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("app-card",{attrs:{colClasses:"xl12 lg12 md12 sm12 xs12",customClasses:"mb-0 client-wrapper"}},[e("div",{staticClass:"contact-tab-wrapper"},[e("v-tabs",{attrs:{"slider-color":"primary"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[t._l(t.tabHead,(function(a){return e("v-tab",{key:a.key,staticClass:"text-capitalize",attrs:{ripple:""},on:{change:function(e){return t.changeTab(a)}}},[t._v("\n              "+t._s(t.$t("message."+a.tab_name))+"\n            ")])})),e("v-tab-item",[e("br"),e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",sm12:"",md12:"","lg-12":""}},[e("reports-table")],1)],1)],1),e("v-tab-item",[e("br"),e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",sm12:"",md12:"","lg-12":""}},[e("report-types")],1)],1)],1)],2)],1)])],1)],1)],1)};e.render=s;var n=[];e.staticRenderFns=n},"2fb3":function(t,e,a){"use strict";a.r(e);var s=a("ca40"),n=a.n(s);for(var i in s)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(i);e["default"]=n.a},"508d":function(t,e,a){"use strict";a.r(e);var s=a("8fa8"),n=a.n(s);for(var i in s)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(i);e["default"]=n.a},5196:function(t,e,a){"use strict";a.r(e);var s=a("da6a"),n=a("2fb3");for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);var c=a("2877"),o=Object(c["a"])(n["default"],s["render"],s["staticRenderFns"],!1,null,null,null);e["default"]=o.exports},"609d":function(t,e,a){"use strict";a.r(e);var s=a("29c3"),n=a("508d");for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);a("b6513");var c=a("2877"),o=Object(c["a"])(n["default"],s["render"],s["staticRenderFns"],!1,null,"694a886c",null);e["default"]=o.exports},"8fa8":function(t,e,a){"use strict";var s=a("4ea4");a("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(a("5196")),i=s(a("f517")),c={created:function(){this.fetchMessages(),this.fetchTypes()},mounted:function(){console.log(this.$route.params)},components:{ReportsTable:n.default,ReportTypes:i.default},data:function(){return{active:null,tabHead:[{key:"messages",tab_name:"messages"},{key:"types",tab_name:"types"}],rowStyle:{cursor:"pointer"},selectedTab:"messages"}},methods:{fetchMessages:function(){this.$store.dispatch("contactUs/fetchMessages")},fetchTypes:function(){this.$store.dispatch("contactUs/fetchTypes")},changeTab:function(t){this.selectedTab=t.key,console.log(this.$route.params)}}};e.default=c},a34e:function(t,e,a){"use strict";a.r(e);var s=a("fa6f"),n=a.n(s);for(var i in s)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return s[t]}))}(i);e["default"]=n.a},b6513:function(t,e,a){"use strict";a("bc36")},bc36:function(t,e,a){},c3d0:function(t,e,a){"use strict";a("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0,a("7f7f"),a("d25f");var s=function(){var t=this,e=t._self._c;return e("div",[e("v-card",{attrs:{loading:t.loading,height:"2px",flat:""}}),e("div",{staticClass:"d-flex mb-5 justify-center align-items-center"},[e("v-select",{staticClass:"mr-md-5",attrs:{items:t.types,"item-value":"id","item-text":"type",label:"Type","hide-details":"","return-object":"",clearable:"",outlined:"",dense:""},on:{change:t.filter},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}}),e("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on,n=a.attrs;return[e("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",n,!1),s),[e("v-icon",[t._v("mdi-menu-down-outline")])],1)]}}])},[e("v-list",[e("v-list-item",{attrs:{link:""},on:{click:function(e){return t.makeAction("deleteAllMessage")}}},[e("v-list-item-icon",[e("v-icon",[t._v("delete")])],1),e("v-list-item-title",[t._v("Delete all selected")])],1),e("v-list-item",{on:{click:function(e){return t.makeAction("seenAllMessage")}}},[e("v-list-item-icon",[e("v-icon",[t._v("mdi-check-all")])],1),e("v-list-item-title",[t._v("Mark as read")])],1)],1)],1)],1),e("v-data-table",{attrs:{headers:t.headers,items:t.messages,"show-select":"","hide-default-footer":"","items-per-page":25},scopedSlots:t._u([{key:"item.country",fn:function(t){var a=t.item;return[e("img",{staticClass:"img-responsive mr-3",attrs:{src:"/static/flag-icons/".concat(a.country,".png")}})]}},{key:"item.type_id",fn:function(e){var a=e.item;return[t._v("\n\t\t\t"+t._s(t.getType(a.type_id))+"\n\t\t")]}},{key:"item.actions",fn:function(a){var s=a.item;return[e("v-btn",{attrs:{disabled:t.loading||s.seen||!t.$can(t.UPDATE,t.RESOURCE),loading:t.loading,color:"teal accent-4",fab:"","x-small":"",title:"Mark as seen"},on:{click:function(e){return t.seen(s)}}},[e("p",[e("i",{staticClass:"zmdi zmdi-check-all font-lg mt-4 white--text"})])]),e("v-btn",{staticClass:"ma-2",attrs:{color:"info",fab:"","x-small":"",disabled:!t.$can(t.UPDATE,t.RESOURCE),title:"Reply"},on:{click:function(e){return t.replyDialog(s)}}},[e("v-icon",[t._v("reply")])],1),e("v-btn",{attrs:{fab:"",dark:"","x-small":"",color:"error"},on:{click:function(e){return t.confirmDeletion(s)}}},[e("v-icon",{attrs:{dark:"",small:""}},[t._v("delete")])],1)]}}],null,!0),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),e("v-dialog",{attrs:{"max-width":"500px"},on:{"click:outside":t.closeDialog},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[e("v-card",[e("v-card-title",[t._v(" Message ")]),e("v-card-text",[e("v-chip",[t._v("Date:")]),t._v("\n\t\t\t\t"+t._s(t.selectedMessage.created_at)+"\n\t\t\t")],1),e("v-card-text",[e("v-chip",[t._v("Subject:")]),t._v("\n\t\t\t\t"+t._s(t.selectedMessage.subject)+"\n\t\t\t")],1),e("v-card-text",[e("v-chip",[t._v("Type:")]),t._v("\n\t\t\t\t"+t._s(t.getType(t.selectedMessage.type_id))+"\n\t\t\t")],1),e("v-card-text",[e("v-chip",[t._v("Name:")]),t._v("\n\t\t\t\t"+t._s(t.selectedMessage.name)+"\n\t\t\t")],1),e("v-card-text",[e("v-chip",[t._v("Email:")]),t._v("\n\t\t\t\t"+t._s(t.selectedMessage.email)+"\n\t\t\t")],1),e("v-card-text",[e("v-chip",[t._v("Mobile:")]),t._v("\n\t\t\t\t"+t._s(t.selectedMessage.mobile)+"\n\t\t\t")],1),e("v-card-text",[e("v-chip",[t._v("Body:")]),t._v("\n\t\t\t\t"+t._s(t.selectedMessage.message)+"\n\t\t\t")],1),e("v-card-title",[t._v(" Reply ")]),e("v-card-text",[e("v-text-field",{attrs:{label:"Title",required:""},model:{value:t.reply.title,callback:function(e){t.$set(t.reply,"title",e)},expression:"reply.title"}}),e("v-textarea",{staticClass:"pt-2 pr-3",attrs:{label:"Body"},model:{value:t.reply.body,callback:function(e){t.$set(t.reply,"body",e)},expression:"reply.body"}}),e("v-btn",{staticClass:"mr-3 mt-2",attrs:{disabled:t.loading,color:"success",loading:t.loading},on:{click:t.replyMessage}},[e("div",[t._v("Send")])]),e("v-btn",{staticClass:"float-right mt-2",attrs:{color:"warning"},on:{click:function(e){return e.stopPropagation(),t.closeDialog.apply(null,arguments)}}},[t._v("Cancel")])],1)],1)],1),e("v-dialog",{attrs:{"max-width":"500px"},on:{"click:outside":t.closeConfirmDialog},model:{value:t.confirmDialog,callback:function(e){t.confirmDialog=e},expression:"confirmDialog"}},[e("v-card",[e("v-card-title",[t._v(" Are you sure you want to delete this? ")]),e("v-card-text",[e("v-btn",{staticClass:"mr-3 mt-2",attrs:{disabled:t.loading,color:"error",loading:t.loading},on:{click:t.deleteMessage}},[e("div",[t._v("Delete")])]),e("v-btn",{staticClass:"float-right mt-2",attrs:{color:"warning"},on:{click:function(e){return e.stopPropagation(),t.closeConfirmDialog.apply(null,arguments)}}},[t._v("Cancel")])],1)],1)],1),[e("div",{staticClass:"text-center"},[e("v-container",[e("v-row",{attrs:{justify:"center"}},[e("v-col",{attrs:{cols:"8"}},[e("v-container",{staticClass:"max-width"},[e("v-pagination",{staticClass:"my-4",attrs:{length:t.lastPage},on:{input:t.changePage},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)],1)],1)],1)]],2)};e.render=s;var n=[];e.staticRenderFns=n},ca40:function(t,e,a){"use strict";var s=a("4ea4");a("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("6d67");var n=s(a("3e34")),i=a("4da1"),c={data:function(){return{VIEW:n.default.actions.view,CREATE:n.default.actions.create,UPDATE:n.default.actions.update,DELETE:n.default.actions.delete,RESOURCE:n.default.resources.contactUsReport,selected:[],dialog:!1,confirmDialog:!1,loading:!1,reply:{title:"Re: ",body:""},headers:[{text:"ID",align:"start",sortable:!1,value:"id"},{text:"Country",align:"start",sortable:!1,value:"country"},{text:"Type",align:"start",sortable:!1,value:"type_id"},{text:"Name",align:"start",sortable:!1,value:"name"},{text:"Mobile",align:"start",sortable:!1,value:"mobile"},{text:"Subject",align:"start",sortable:!1,value:"subject"},{text:"Message",align:"start",sortable:!1,value:"message"},{text:"Date",align:"start",sortable:!1,value:"created_at"},{text:"Actions",align:"start",sortable:!1,value:"actions"}]}},methods:{getType:function(t){for(var e=0;e<this.types.length;e++)if(this.types[e].id===t)return this.types[e].type},changePage:function(t){var e=this;this.page=t,this.loading=!0,this.$store.commit("contactUs/resetMessages"),this.$store.dispatch("contactUs/fetchMessages").finally((function(){e.loading=!1}))},replyMessage:function(){var t=this;this.loading=!0,this.$store.dispatch("contactUs/replyMessage",this.reply).finally((function(){t.loading=!1,t.$store.commit("contactUs/resetSelectedMessage"),t.closeDialog()}))},replyDialog:function(t){this.$store.commit("contactUs/setSelectedMessage",t),this.reply.title="Re: ".concat(t.subject),this.dialog=!0},closeDialog:function(){this.dialog=!1},filter:function(){var t=this;this.loading=!0,this.page=1,this.$store.commit("contactUs/resetMessages"),this.$store.dispatch("contactUs/fetchMessages").finally((function(){t.loading=!1}))},confirmDeletion:function(t){this.$store.commit("contactUs/setSelectedMessage",t),this.confirmDialog=!0},closeConfirmDialog:function(){this.$store.commit("contactUs/resetSelectedMessage"),this.confirmDialog=!1},deleteMessage:function(){var t=this;this.loading=!0,this.$store.dispatch("contactUs/deleteMessage").finally((function(){t.loading=!1,t.closeConfirmDialog(),t.$store.dispatch("adminNotifications/fetchNotifications")}))},makeAction:function(t){var e=this;if(this.selected.length>0){this.loading=!0;var a=this.selected.map((function(t){return t.id}));this.$store.dispatch("contactUs/".concat(t),{ids:a}).finally((function(){e.loading=!1,e.$store.dispatch("adminNotifications/fetchNotifications")}))}},textTruncate:function(t){return(0,i.textTruncate)(t,18)},seen:function(t){var e=this;this.$store.commit("contactUs/setSelectedMessage",t),this.loading=!0,this.$store.dispatch("contactUs/seenMessage").finally((function(){e.loading=!1,e.$store.commit("contactUs/resetSelectedMessage"),e.$store.dispatch("adminNotifications/fetchNotifications")}))}},computed:{messages:function(){return this.$store.getters["contactUs/messages"]},selectedMessage:function(){return this.$store.getters["contactUs/selectedMessage"]},types:function(){return this.$store.getters["contactUs/types"]},page:{get:function(){return this.$store.getters["contactUs/messagesFilter"].page},set:function(t){this.$store.commit("contactUs/changePage",t)}},lastPage:function(){return this.$store.getters["contactUs/messagesMeta"].last_page},type:{get:function(){return this.$store.getters["contactUs/messagesFilter"].type},set:function(t){this.$store.commit("contactUs/changeFilter",t)}}}};e.default=c},da6a:function(t,e,a){"use strict";var s=a("c3d0");a.o(s,"render")&&a.d(e,"render",(function(){return s["render"]})),a.o(s,"staticRenderFns")&&a.d(e,"staticRenderFns",(function(){return s["staticRenderFns"]}))},f517:function(t,e,a){"use strict";a.r(e);var s=a("05d5"),n=a("a34e");for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);var c=a("2877"),o=Object(c["a"])(n["default"],s["render"],s["staticRenderFns"],!1,null,null,null);e["default"]=o.exports},fa6f:function(t,e,a){"use strict";var s=a("4ea4");a("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=s(a("3e34")),i=["Warning","Search","Voucher"],c={data:function(){return{VIEW:n.default.actions.view,CREATE:n.default.actions.create,UPDATE:n.default.actions.update,DELETE:n.default.actions.delete,RESOURCE:n.default.resources.contactUsReport,dialog:!1,confirmDialog:!1,loading:!1,newType:!1}},methods:{getType:function(t){return i[t-1]},fetchTypes:function(){this.$store.dispatch("contactUs/fetchTypes")},updateMessage:function(){var t=this;this.loading=!0,this.$store.dispatch("notifications/updateMessage").finally((function(){t.loading=!1,t.closeDialog()}))},editDialog:function(t){this.newType?this.$store.commit("contactUs/resetSelectedType"):this.$store.commit("contactUs/setSelectedType",t),this.dialog=!0},closeDialog:function(){this.dialog=!1,this.newType=!1,this.$store.commit("contactUs/resetSelectedType")},openNewDialog:function(){this.newType=!0,this.editDialog(null)},save:function(){var t=this;this.loading=!0,this.newType?this.$store.dispatch("contactUs/createType").finally((function(){t.loading=!1,t.closeDialog()})):this.$store.dispatch("contactUs/updateType").finally((function(){t.loading=!1,t.closeDialog()}))},confirmDeletion:function(t){this.$store.commit("contactUs/setSelectedType",t),this.confirmDialog=!0},closeConfirmDialog:function(){this.$store.commit("contactUs/resetSelectedType"),this.confirmDialog=!1},deleteType:function(){var t=this;this.loading=!0,this.$store.dispatch("contactUs/deleteType").finally((function(){t.loading=!1,t.closeConfirmDialog()}))}},computed:{types:function(){return this.$store.getters["contactUs/types"]},selectedType:function(){return this.$store.getters["contactUs/selectedType"]}},created:function(){this.fetchTypes()}};e.default=c}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8e54c71a"],{"0a3b":function(t,e,s){"use strict";s.r(e);var a=s("0b7b"),n=s.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){s.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"0b7b":function(t,e,s){"use strict";var a=s("4ea4");s("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(s("92c3")),r={components:{Dropzone:n.default},data:function(){return{dropzoneOptions:{url:"https://httpbin.org/post",thumbnailWidth:150,maxFilesize:.5,headers:{"My-Awesome-Header":"header value"}}}}};e.default=r},"12ee":function(t,e,s){"use strict";var a=s("5f90");s.o(a,"render")&&s.d(e,"render",(function(){return a["render"]})),s.o(a,"staticRenderFns")&&s.d(e,"staticRenderFns",(function(){return a["staticRenderFns"]}))},"1e0f":function(t,e,s){"use strict";s.r(e);var a=s("98e5"),n=s("2877"),r={},i=Object(n["a"])(r,a["render"],a["staticRenderFns"],!1,null,null,null);e["default"]=i.exports},"1ed2":function(t,e,s){"use strict";s("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0;var a=function(){var t=this,e=t._self._c;return e("div",[e("page-title-bar"),e("v-container",{attrs:{fluid:"","grid-list-xl":"","pt-0":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("app-card",{attrs:{colClasses:"xl4 lg4 md4 sm6 xs12",heading:t.$t("message.supportRequest"),fullScreen:!0,reloadable:!0,closeable:!0,footer:!0,fullBlock:!0,customClasses:"support-widget-wrap"}},[e("support-request"),e("div",{staticClass:"justify-space-between footer-flex align-items-center",attrs:{slot:"footer"},slot:"footer"},[e("span",{staticClass:"grey--text d-custom-flex align-items-center"},[e("i",{staticClass:"zmdi zmdi-replay mr-2"}),e("span",{staticClass:"fs-12 fw-normal"},[t._v("Updated 10 min ago")])]),e("v-btn",{staticClass:"ma-0",attrs:{color:"primary",small:""}},[t._v(t._s(t.$t("message.assignNow")))])],1)],1),e("app-card",{attrs:{fullBlock:!0,colClasses:"xl4 lg4 md4 sm6 xs12"}},[e("blog-layout-two")],1),e("app-card",{attrs:{fullBlock:!0,colClasses:"xl4 lg4 md4 sm12 xs12"}},[e("blog-layout-three")],1)],1),e("v-layout",{attrs:{row:"",wrap:""}},[e("app-card",{attrs:{colClasses:"xl12 lg12 md12 xs12 sm12",heading:"New Emails",fullBlock:!0,closeable:!0,reloadable:!0,fullScreen:!0}},[e("new-emails")],1)],1)],1)],1)};e.render=a;var n=[];e.staticRenderFns=n},2100:function(t,e,s){"use strict";s.r(e);var a=s("2a01"),n=s("a34b");for(var r in n)["default"].indexOf(r)<0&&function(t){s.d(e,t,(function(){return n[t]}))}(r);var i=s("2877"),l=Object(i["a"])(n["default"],a["render"],a["staticRenderFns"],!1,null,null,null);e["default"]=l.exports},2725:function(t,e,s){"use strict";s.r(e);var a=s("a251"),n=s("9576");for(var r in n)["default"].indexOf(r)<0&&function(t){s.d(e,t,(function(){return n[t]}))}(r);var i=s("2877"),l=Object(i["a"])(n["default"],a["render"],a["staticRenderFns"],!1,null,null,null);e["default"]=l.exports},2761:function(t,e,s){"use strict";s("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0;var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog-widget"},[e("div",{staticClass:"blog-layout-v1"},[e("a",{attrs:{href:"javascript:;"}},[e("img",{staticClass:"img-responsive mb-4",attrs:{src:t.data.thumbnail}}),e("div",{staticClass:"app-card-title pa-0 mb-2"},[e("h5",[t._v(t._s(t.data.title))])])]),e("span",{staticClass:"grey--text fs-12 fw-normal mb-2 d-block"},[t._v("Last updated: "+t._s(t.data.date))]),e("p",[t._v(t._s(t.data.body))])]),e("div",{staticClass:"d-custom-flex justify-space-between"},[e("div",[e("v-btn",{staticClass:"mr-3",attrs:{icon:""}},[e("v-icon",{attrs:{color:"grey"}},[t._v("share")])],1),e("v-btn",{attrs:{icon:""}},[e("v-icon",{attrs:{color:"grey"}},[t._v("favorite")])],1)],1),e("v-btn",{attrs:{icon:""}},[e("v-icon",{staticClass:"grey--text"},[t._v("more_horiz")])],1)],1)])};e.render=a;var n=[];e.staticRenderFns=n},"2a01":function(t,e,s){"use strict";var a=s("d1ec");s.o(a,"render")&&s.d(e,"render",(function(){return a["render"]})),s.o(a,"staticRenderFns")&&s.d(e,"staticRenderFns",(function(){return a["staticRenderFns"]}))},"33f9":function(t,e,s){"use strict";s("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s("1fca"),n=s("4b4c"),r={extends:a.Doughnut,data:function(){return{ChartConfig:n.ChartConfig,options:{legend:{display:!1},cutoutPercentage:60,padding:10}}},mounted:function(){this.renderChart({labels:["Total Request","New","Pending"],datasets:[{data:[250,25,125],backgroundColor:[n.ChartConfig.color.primary,n.ChartConfig.color.warning,n.ChartConfig.color.danger],hoverBackgroundColor:[n.ChartConfig.color.primary,n.ChartConfig.color.warning,n.ChartConfig.color.danger]}]},this.options)}};e.default=r},"3b19d":function(t,e,s){"use strict";s.r(e);var a=s("8e86"),n=s("0a3b");for(var r in n)["default"].indexOf(r)<0&&function(t){s.d(e,t,(function(){return n[t]}))}(r);var i=s("2877"),l=Object(i["a"])(n["default"],a["render"],a["staticRenderFns"],!1,null,null,null);e["default"]=l.exports},"43a8":function(t,e,s){"use strict";s.r(e);var a=s("9c89"),n=s.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){s.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"4bb2":function(t,e,s){"use strict";s.r(e);var a=s("c703"),n=s.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){s.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"555c":function(t,e,s){"use strict";s.r(e);var a=s("fa8c"),n=s("2877"),r={},i=Object(n["a"])(r,a["render"],a["staticRenderFns"],!1,null,null,null);e["default"]=i.exports},5938:function(t,e,s){"use strict";s("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0;var a=function(){var t=this,e=t._self._c;return e("v-form",{staticClass:"add-blog-form d-custom-flex justify-space-between"},[e("dropzone",{staticClass:"mb-2",attrs:{id:"myVueDropzone",options:t.dropzoneOptions}},[e("input",{attrs:{type:"hidden",name:"token",value:"xxx"}})]),e("div",{staticClass:"add-blog-widget"},[e("v-text-field",{attrs:{name:"subject",label:"Subject"}}),e("v-textarea",{attrs:{name:"content",label:"Content"}}),e("div",{staticClass:"mb-2"},[e("v-btn",{attrs:{color:"success"}},[t._v(t._s(t.$t("message.publish")))])],1)],1)],1)};e.render=a;var n=[];e.staticRenderFns=n},"5c47":function(t,e,s){"use strict";var a=s("a724");s.o(a,"render")&&s.d(e,"render",(function(){return a["render"]})),s.o(a,"staticRenderFns")&&s.d(e,"staticRenderFns",(function(){return a["staticRenderFns"]}))},"5c91":function(t,e,s){"use strict";var a=s("1ed2");s.o(a,"render")&&s.d(e,"render",(function(){return a["render"]})),s.o(a,"staticRenderFns")&&s.d(e,"staticRenderFns",(function(){return a["staticRenderFns"]}))},"5f90":function(t,e,s){"use strict";s("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0,s("7f7f");var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"table-responsive"},[e("app-section-loader",{attrs:{status:t.loader}}),e("v-data-table",{attrs:{headers:t.headers,items:t.invoice,"hide-default-footer":""},scopedSlots:t._u([{key:"item",fn:function(s){var a=s.item;return[e("tr",[e("td",[t._v(t._s(a.id))]),e("td",{staticClass:"text-nowrap"},[t._v("\n\t\t\t\t\t"+t._s(a.name)+"\n\t\t\t\t")]),e("td",[t._v(t._s(a.date))]),e("td",[e("v-badge",{class:a.labelClasses},[t._v(t._s(a.status))])],1),e("td",[t._v(t._s(a.amount))])])]}}])})],1)};e.render=a;var n=[];e.staticRenderFns=n},"6f36":function(t,e,s){"use strict";s("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0;var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog-layout-two"},[e("v-card-title",{staticClass:"pa-6"},[e("div",[e("h4",{staticClass:"mb-0"},[t._v("Where Can You Find Unique Myspace Layouts Nowadays")]),e("span",{staticClass:"grey--text fs-12 fw-normal"},[t._v("11 Nov 2017 , By: Admin , 5 Comments ")])])]),e("v-img",{attrs:{src:"/static/img/blog-6.jpg",height:"240px"}}),e("v-card-text",{staticClass:"px-6 py-4"},[t._v("\n\t\t\tConsectetur adipisicing elit. Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore, similique nulla minima distinctio illo iste dignissimos vero nostrum, magni pariatur delectus natus.      \n\t\t")]),e("v-card-actions",{staticClass:"px-6 py-2"},[e("v-btn",{staticClass:"mr-4",attrs:{icon:""}},[e("v-icon",{attrs:{color:"success"}},[t._v("share")])],1),e("v-btn",{attrs:{icon:""}},[e("v-icon",{attrs:{color:"error"}},[t._v("favorite")])],1),e("v-spacer"),e("v-btn",{attrs:{icon:""}},[e("v-icon",{staticClass:"grey--text"},[t._v("more_horiz")])],1)],1)],1)};e.render=a;var n=[];e.staticRenderFns=n},7154:function(t,e,s){"use strict";s.r(e);var a=s("5c91"),n=s("43a8");for(var r in n)["default"].indexOf(r)<0&&function(t){s.d(e,t,(function(){return n[t]}))}(r);var i=s("2877"),l=Object(i["a"])(n["default"],a["render"],a["staticRenderFns"],!1,null,null,null);e["default"]=l.exports},"840c":function(t,e,s){"use strict";var a=s("4ea4");s("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(s("365c")),r={data:function(){return{loader:!0,supportTickets:null,settings:{maxScrollbarLength:100}}},mounted:function(){this.getTickets()},methods:{getTickets:function(){var t=this;n.default.get("vuely/supportTickets.js").then((function(e){t.loader=!1,t.supportTickets=e.data})).catch((function(t){console.log(t)}))}}};e.default=r},"8e86":function(t,e,s){"use strict";var a=s("5938");s.o(a,"render")&&s.d(e,"render",(function(){return a["render"]})),s.o(a,"staticRenderFns")&&s.d(e,"staticRenderFns",(function(){return a["staticRenderFns"]}))},"936e":function(t,e,s){"use strict";s.r(e);var a=s("b7e99"),n=s.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){s.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},9576:function(t,e,s){"use strict";s.r(e);var a=s("f7cc"),n=s.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){s.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"97a3":function(t,e,s){"use strict";s.r(e);var a=s("5c47"),n=s("936e");for(var r in n)["default"].indexOf(r)<0&&function(t){s.d(e,t,(function(){return n[t]}))}(r);var i=s("2877"),l=Object(i["a"])(n["default"],a["render"],a["staticRenderFns"],!1,null,null,null);e["default"]=l.exports},"98e5":function(t,e,s){"use strict";var a=s("6f36");s.o(a,"render")&&s.d(e,"render",(function(){return a["render"]})),s.o(a,"staticRenderFns")&&s.d(e,"staticRenderFns",(function(){return a["staticRenderFns"]}))},"9c89":function(t,e,s){"use strict";var a=s("4ea4");s("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(s("2100")),r=a(s("2fb1")),i=a(s("3b19d")),l=a(s("885f")),c=a(s("dd57")),o=a(s("ee16")),u=a(s("8a3e")),d=a(s("fb96")),f=a(s("2725")),v=a(s("1e0f")),m=a(s("555c")),p=a(s("5f66")),b=a(s("97a3")),g=s("6e13"),_={components:{SupportTickets:n.default,ToDoList:r.default,AddNewBlog:i.default,ActiveUser:l.default,SupportRequest:c.default,UsersList:o.default,ProjectStatus:u.default,Invoice:d.default,BlogLayoutOne:f.default,BlogLayoutTwo:v.default,BlogLayoutThree:m.default,QuoteOfTheDay:p.default,NewEmails:b.default},data:function(){return{activeUser:g.activeUser}}};e.default=_},a251:function(t,e,s){"use strict";var a=s("2761");s.o(a,"render")&&s.d(e,"render",(function(){return a["render"]})),s.o(a,"staticRenderFns")&&s.d(e,"staticRenderFns",(function(){return a["staticRenderFns"]}))},a34b:function(t,e,s){"use strict";s.r(e);var a=s("840c"),n=s.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){s.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},a724:function(t,e,s){"use strict";s("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0;var a=function(){var t=this,e=t._self._c;return e("div",[e("app-section-loader",{attrs:{status:t.loader}}),e("vue-perfect-scrollbar",{staticStyle:{height:"540px"},attrs:{settings:t.settings}},[e("ul",{staticClass:"new-mail list-unstyled"},t._l(t.emails,(function(s){return e("li",{key:s.id},[e("div",{staticClass:"d-flex flex-wrap justify-space-between align-items-center"},[e("div",{staticClass:"d-flex justify-start"},[""!==s.sender_avatar?e("v-list-item-avatar",[e("img",{staticClass:"img-responsive",attrs:{src:s.sender_avatar,alt:"user"}})]):[e("v-avatar",{staticClass:"warning mr-3"},[e("span",{staticClass:"white--text",attrs:{small:""}},[t._v(" "+t._s(s.sender_name.charAt(0)))])])],e("v-list-item-content",[e("h5",{staticClass:"mb-0"},[t._v(t._s(s.sender_name))]),e("span",{staticClass:"fs-12 grey--text fw-normal"},[t._v(t._s(s.from))])])],2),e("div",{},[e("span",{staticClass:"fs-12 fw-normal"},[t._v("19 Mar 2017")])])]),e("h6",{staticClass:"mb-1"},[t._v(t._s(s.subject))]),e("div",{staticClass:"mail-content"},[e("p",{staticClass:"fs-14"},[t._v(t._s(s.message))]),e("div",{staticClass:"mail-action w-20 text-right"},[e("div",[e("v-btn",{staticClass:"mr-1",attrs:{fab:"",dark:"",small:"",color:"primary"},on:{click:function(e){return t.onViewEmail(s)}}},[e("v-icon",[t._v("visibility")])],1),e("v-btn",{staticClass:"mr-1",attrs:{fab:"",dark:"",small:"",color:"error"},on:{click:function(e){return t.onDeleteEmail(s)}}},[e("v-icon",[t._v("delete")])],1),e("v-btn",{attrs:{fab:"",dark:"",small:"",color:"success"},on:{click:function(e){return t.showReplyTextBox(s)}}},[e("v-icon",[t._v("reply")])],1)],1)])]),s.replyTextBox?[e("div",{staticClass:"d-custom-flex"},[e("v-text-field",{attrs:{placeholder:"Reply Message"},model:{value:t.messageReply,callback:function(e){t.messageReply=e},expression:"messageReply"}}),e("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.replyEmail(s)}}},[t._v("Reply")])],1)]:t._e()],2)})),0)]),e("delete-confirmation-dialog",{ref:"deleteConfirmationDialog",attrs:{heading:"Are You Sure You Want To Delete?",message:"Are you sure you want to delete this email permanently?"},on:{onConfirm:t.deleteEmail}}),null!==t.selectEmail?e("v-dialog",{attrs:{"max-width":"600"},model:{value:t.viewEmailDialog,callback:function(e){t.viewEmailDialog=e},expression:"viewEmailDialog"}},[e("v-list",[e("v-list-item",{staticClass:"py-2"},[""!==t.selectEmail.sender_avatar?e("v-list-item-avatar",[e("img",{staticClass:"img-responsive",attrs:{src:t.selectEmail.sender_avatar,alt:"user"}})]):e("v-list-item-avatar",[e("v-avatar",{staticClass:"teal"},[e("span",{staticClass:"white--text headline"},[t._v(" "+t._s(t.selectEmail.sender_name.charAt(0)))])])],1),e("v-list-item-content",[e("v-list-item-subtitle",[e("p",{staticClass:"fs-14 fw-bold mb-0 gray--text"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.selectEmail.sender_name)+"\n\t\t\t\t\t\t\t")]),e("span",[t._v(t._s(t.selectEmail.from))])])],1),e("v-list-item-action",[e("span",{staticClass:"fs-14"},[t._v("19 Mar 2017")])])],1),e("div",{staticClass:"pa-3"},[e("h3",{staticClass:"subject"},[t._v(t._s(t.selectEmail.subject))]),e("p",{staticClass:"fs-14 mb-0"},[t._v("\n                "+t._s(t.selectEmail.message)+"\n              ")])])],1)],1):t._e(),e("app-section-loader",{attrs:{status:t.loader}}),e("v-snackbar",{attrs:{top:"top"===t.y,timeout:t.timeout},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n         "+t._s(t.snackbarMessage)+"\n      ")])],1)};e.render=a;var n=[];e.staticRenderFns=n},b70c:function(t,e,s){"use strict";s("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0;var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"support-widget"},[e("doughnut-chart",{attrs:{height:150}}),e("ul",{staticClass:"list-unstyled"},[e("li",{staticClass:"justify-space-between align-center"},[e("p",{staticClass:"mb-0 content-title"},[t._v(t._s(t.$t("message.totalRequest")))]),e("span",{staticClass:"badge-wrap"},[e("v-badge",{staticClass:"primary"},[t._v("250")])],1),e("v-btn",{attrs:{icon:""}},[e("v-icon",{staticClass:"grey--text"},[t._v("visibility")])],1)],1),e("li",{staticClass:"justify-space-between align-center"},[e("p",{staticClass:"mb-0 content-title"},[t._v(t._s(t.$t("message.new")))]),e("span",{staticClass:"badge-wrap"},[e("v-badge",{staticClass:"warning"},[t._v("25")])],1),e("v-btn",{attrs:{icon:""}},[e("v-icon",{staticClass:"grey--text"},[t._v("visibility")])],1)],1),e("li",{staticClass:"justify-space-between align-center"},[e("p",{staticClass:"mb-0 content-title"},[t._v(t._s(t.$t("message.pending")))]),e("span",{staticClass:"badge-wrap"},[e("v-badge",{staticClass:"error"},[t._v("125")])],1),e("v-btn",{attrs:{icon:""}},[e("v-icon",{staticClass:"grey--text"},[t._v("visibility")])],1)],1)])],1)};e.render=a;var n=[];e.staticRenderFns=n},b7e99:function(t,e,s){"use strict";var a=s("4ea4");s("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,s("57e7");var n=a(s("365c")),r={data:function(){return{loader:!1,viewEmailDialog:!1,selectDeletedEmail:null,selectEmail:null,settings:{maxScrollbarLength:100},emails:null,replyTextBox:!1,messageReply:"",snackbar:!1,snackbarMessage:"",timeout:2e3,y:"top"}},mounted:function(){this.getEmails()},methods:{getEmails:function(){var t=this;this.loader=!0,n.default.get("newEmails.js").then((function(e){t.loader=!1,t.emails=e.data})).catch((function(t){console.log(t)}))},onViewEmail:function(t){this.viewEmailDialog=!0,this.selectEmail=t},onDeleteEmail:function(t){this.$refs.deleteConfirmationDialog.openDialog(),this.selectDeletedEmail=t},deleteEmail:function(){var t=this;this.$refs.deleteConfirmationDialog.close(),this.loader=!0;var e=this.emails,s=e.indexOf(this.selectDeletedEmail);setTimeout((function(){t.loader=!1,t.selectDeletedEmail=null,t.emails.splice(s,1),t.snackbar=!0,t.snackbarMessage="Email Deleted Successfully!"}),1500)},showReplyTextBox:function(t){var e=this.emails.indexOf(t);this.replyTextBox=!0,this.emails[e].replyTextBox=this.replyTextBox},replyEmail:function(t){var e=this,s=this.emails.indexOf(t);this.loader=!0,this.replyTextBox=!1,this.emails[s].replyTextBox=this.replyTextBox,setTimeout((function(){e.messageReply="",e.loader=!1,e.snackbar=!0,e.snackbarMessage="Reply Sent Successfully!"}),1500)}}};e.default=r},b870:function(t,e,s){"use strict";s("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0;var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog-layout-three"},[e("v-img",{staticClass:"white--text",attrs:{src:"/static/img/carousel-slider-2.jpg",height:"330px"}},[e("v-container",{attrs:{"fill-height":"",fluid:""}},[e("v-layout",{attrs:{"fill-height":""}},[e("v-flex",{attrs:{xs12:"","align-end":"",flexbox:""}},[e("span",{staticClass:"headline"},[t._v("Top 10 Australian beaches")])])],1)],1)],1),e("v-card-title",{staticClass:"px-6 py-4"},[e("div",[e("span",{staticClass:"grey--text fs-12 fw-normal"},[t._v("Number 10")]),e("br"),e("p",{staticClass:"mb-0"},[t._v("Whitehaven Beach Whitsunday Island, Whitsunday Islands, \n               Ullam expedita, necessitatibus sit exercitationem aut quo quos inventore,\n            ")])])]),e("v-card-actions",[e("v-btn",{staticClass:"mr-4",attrs:{icon:""}},[e("v-icon",{attrs:{color:"success"}},[t._v("share")])],1),e("v-btn",{attrs:{icon:""}},[e("v-icon",{attrs:{color:"error"}},[t._v("favorite")])],1),e("v-spacer"),e("v-btn",{attrs:{icon:""}},[e("v-icon",{staticClass:"grey--text"},[t._v("more_horiz")])],1)],1)],1)};e.render=a;var n=[];e.staticRenderFns=n},bd9e:function(t,e,s){"use strict";var a=s("b70c");s.o(a,"render")&&s.d(e,"render",(function(){return a["render"]})),s.o(a,"staticRenderFns")&&s.d(e,"staticRenderFns",(function(){return a["staticRenderFns"]}))},c703:function(t,e,s){"use strict";var a=s("4ea4");s("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(s("33f9")),r={components:{DoughnutChart:n.default}};e.default=r},cc24:function(t,e,s){"use strict";var a=s("4ea4");s("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(s("365c")),r={data:function(){return{loader:!0,invoice:[],headers:[{text:"#",sortable:!1,value:"#"},{text:"Buyer",sortable:!1,value:"Buyer"},{text:"Date",sortable:!1,value:"Date"},{text:"Status",sortable:!1,value:"status"},{text:"Amount",sortable:!1,value:"amount"}]}},mounted:function(){this.getInvoice()},methods:{getInvoice:function(){var t=this;n.default.get("vuely/invoice.js").then((function(e){t.loader=!1,t.invoice=e.data})).catch((function(t){console.log(t)}))}}};e.default=r},d1ec:function(t,e,s){"use strict";s("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0;var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"support-ticket-wrap"},[e("app-section-loader",{attrs:{status:t.loader}}),e("vue-perfect-scrollbar",{staticStyle:{height:"411px"},attrs:{settings:t.settings}},[e("v-list",[t._l(t.supportTickets,(function(s){return[e("div",{key:s.userName,staticClass:"listing"},[e("v-list-item",[e("v-list-item-avatar",[e("img",{staticClass:"img-responsive",attrs:{src:s.avatar,alt:"user image"}})]),e("v-list-item-content",[e("v-list-item-subtitle",[e("div",{staticClass:"d-custom-flex align-items-center mb-2"},[e("h5",{staticClass:"fs-14 mb-0 mr-2"},[t._v(t._s(s.userName))]),1===s.status?e("v-badge",{staticClass:"primary"},[t._v("Open")]):e("v-badge",{staticClass:"warning"},[t._v("Closed")])],1)]),e("p",{key:s.id,staticClass:"fs-14 mb-0 grey--text"},[t._v("            \n\t\t\t\t\t\t\t\t"+t._s(s.body)+"\n\t\t\t\t\t\t\t")]),e("div",{staticClass:"d-custom-flex"},[e("a",{staticClass:"mr-3 ripple",attrs:{href:"javascript:void(0)"}},[e("i",{staticClass:"zmdi zmdi-eye primary--text"})]),e("a",{staticClass:"mr-3",attrs:{href:"javascript:void(0)"}},[e("i",{staticClass:"zmdi zmdi-edit success--text"})]),e("a",{staticClass:"mr-3",attrs:{href:"javascript:void(0)"}},[e("i",{staticClass:"zmdi zmdi-delete error--text"})])])],1),e("v-list-item-action",{staticClass:"w-20"},[e("span",{staticClass:"fs-12 grey--text fw-normal"},[t._v(t._s(s.date))])])],1)],1)]}))],2)],1)],1)};e.render=a;var n=[];e.staticRenderFns=n},dd57:function(t,e,s){"use strict";s.r(e);var a=s("bd9e"),n=s("4bb2");for(var r in n)["default"].indexOf(r)<0&&function(t){s.d(e,t,(function(){return n[t]}))}(r);var i=s("2877"),l=Object(i["a"])(n["default"],a["render"],a["staticRenderFns"],!1,null,null,null);e["default"]=l.exports},f6c6:function(t,e,s){"use strict";s.r(e);var a=s("cc24"),n=s.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){s.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},f7cc:function(t,e,s){"use strict";s("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s("4da1"),n={props:["data"],methods:{getCurrentAppLayoutHandler:function(){return(0,a.getCurrentAppLayout)(this.$router)}}};e.default=n},fa8c:function(t,e,s){"use strict";var a=s("b870");s.o(a,"render")&&s.d(e,"render",(function(){return a["render"]})),s.o(a,"staticRenderFns")&&s.d(e,"staticRenderFns",(function(){return a["staticRenderFns"]}))},fb96:function(t,e,s){"use strict";s.r(e);var a=s("12ee"),n=s("f6c6");for(var r in n)["default"].indexOf(r)<0&&function(t){s.d(e,t,(function(){return n[t]}))}(r);var i=s("2877"),l=Object(i["a"])(n["default"],a["render"],a["staticRenderFns"],!1,null,null,null);e["default"]=l.exports}}]);
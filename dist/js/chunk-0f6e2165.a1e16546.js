(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f6e2165"],{"06c5":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r("6b75");function a(t,e){if(t){if("string"===typeof t)return Object(n["a"])(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(n["a"])(t,e):void 0}}},"1da1":function(t,e,r){"use strict";function n(t,e,r,n,a,i,o){try{var c=t[i](o),s=c.value}catch(l){return void r(l)}c.done?e(s):Promise.resolve(s).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,i){var o=t.apply(e,r);function c(t){n(o,a,i,c,s,"next",t)}function s(t){n(o,a,i,c,s,"throw",t)}c(void 0)}))}}r.r(e),r.d(e,"default",(function(){return a}))},2909:function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return s}));var n=r("6b75");function a(t){if(Array.isArray(t))return Object(n["a"])(t)}function i(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var o=r("06c5");function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t){return a(t)||i(t)||Object(o["a"])(t)||c()}},"59b5":function(t,e,r){"use strict";var n=r("ffc6");r.o(n,"render")&&r.d(e,"render",(function(){return n["render"]})),r.o(n,"staticRenderFns")&&r.d(e,"staticRenderFns",(function(){return n["staticRenderFns"]}))},"6b75":function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,"a",(function(){return n}))},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(A){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof v?e:v,i=Object.create(a.prototype),o=new L(n||[]);return i._invoke=k(t,r,o),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(A){return{type:"throw",arg:A}}}t.wrap=l;var d="suspendedStart",f="suspendedYield",h="executing",p="completed",m={};function v(){}function y(){}function g(){}var b={};s(b,i,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(E([])));x&&x!==r&&n.call(x,i)&&(b=x);var _=g.prototype=v.prototype=Object.create(b);function C(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function T(t,e){function r(a,i,o,c){var s=u(t[a],t,i);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"===typeof d&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,o,c)}),(function(t){r("throw",t,o,c)})):e.resolve(d).then((function(t){l.value=t,o(l)}),(function(t){return r("throw",t,o,c)}))}c(s.arg)}var a;function i(t,n){function i(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(i,i):i()}this._invoke=i}function k(t,e,r){var n=d;return function(a,i){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===a)throw i;return P()}r.method=a,r.arg=i;while(1){var o=r.delegate;if(o){var c=j(o,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===d)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=u(t,e,r);if("normal"===s.type){if(n=r.done?p:f,s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=p,r.method="throw",r.arg=s.arg)}}}function j(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,j(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=u(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function E(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){while(++a<t.length)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:P}}function P(){return{value:e,done:!0}}return y.prototype=g,s(_,"constructor",g),s(g,"constructor",y),y.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},C(T.prototype),s(T.prototype,o,(function(){return this})),t.AsyncIterator=T,t.async=function(e,r,n,a,i){void 0===i&&(i=Promise);var o=new T(l(e,r,n,a),i);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},C(_),s(_,c,"Generator"),s(_,i,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],c=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(s&&l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;S(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:E(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(a){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},b006:function(t,e,r){"use strict";r.r(e);var n=r("59b5"),a=r("b93e");for(var i in a)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return a[t]}))}(i);var o=r("2877"),c=Object(o["a"])(a["default"],n["render"],n["staticRenderFns"],!1,null,null,null);e["default"]=c.exports},b93e:function(t,e,r){"use strict";r.r(e);var n=r("be1b"),a=r.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){r.d(e,t,(function(){return n[t]}))}(i);e["default"]=a.a},be1b:function(t,e,r){"use strict";var n=r("4ea4");r("1c01"),r("58b2"),r("8e6e"),r("f3e2"),r("d25f"),r("ac6a"),r("456d"),r("2caf"),r("ac4d"),r("8a81"),r("5df3"),r("1c4c"),r("6b54"),r("87b3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(r("ade3"));r("7f7f");var i=n(r("2909"));r("96cf");var o=n(r("1da1"));function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){(0,a.default)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){var r="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=u(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return o=t.done,t},e:function(t){c=!0,i=t},f:function(){try{o||null==r.return||r.return()}finally{if(c)throw i}}}}function u(t,e){if(t){if("string"===typeof t)return d(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(t,e):void 0}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r("6762"),r("2fdb"),r("0cd8"),r("55dd"),r("6d67"),r("7514");var f=["?accessoriesType=Blank&avatarStyle=Circle&clotheColor=PastelGreen&clotheType=ShirtScoopNeck&eyeType=Wink&eyebrowType=UnibrowNatural&facialHairColor=Black&facialHairType=MoustacheMagnum&hairColor=Platinum&mouthType=Concerned&skinColor=Tanned&topType=Turban","?accessoriesType=Sunglasses&avatarStyle=Circle&clotheColor=Gray02&clotheType=ShirtScoopNeck&eyeType=EyeRoll&eyebrowType=RaisedExcited&facialHairColor=Red&facialHairType=BeardMagestic&hairColor=Red&hatColor=White&mouthType=Twinkle&skinColor=DarkBrown&topType=LongHairBun","?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=Black&clotheType=ShirtVNeck&eyeType=Surprised&eyebrowType=Angry&facialHairColor=Blonde&facialHairType=Blank&hairColor=Blonde&hatColor=PastelOrange&mouthType=Smile&skinColor=Black&topType=LongHairNotTooLong","?accessoriesType=Round&avatarStyle=Circle&clotheColor=PastelOrange&clotheType=Overall&eyeType=Close&eyebrowType=AngryNatural&facialHairColor=Blonde&facialHairType=Blank&graphicType=Pizza&hairColor=Black&hatColor=PastelBlue&mouthType=Serious&skinColor=Light&topType=LongHairBigHair","?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Gray01&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Default&facialHairColor=Red&facialHairType=Blank&graphicType=Selena&hairColor=Red&hatColor=Blue02&mouthType=Twinkle&skinColor=Pale&topType=LongHairCurly"],h=function(t){return new Promise((function(e){return setTimeout(e,t)}))},p={data:function(){return{items:[{id:1,name:"Applications :",children:[{id:2,name:"Calendar : app"},{id:3,name:"Chrome : app"},{id:4,name:"Webstorm : app"}]},{id:5,name:"Documents :",children:[{id:6,name:"vuetify :",children:[{id:7,name:"src :",children:[{id:8,name:"index : ts"},{id:9,name:"bootstrap : ts"}]}]},{id:10,name:"material2 :",children:[{id:11,name:"src :",children:[{id:12,name:"v-btn : ts"},{id:13,name:"v-card : ts"},{id:14,name:"v-window : ts"}]}]}]},{id:15,name:"Downloads :",children:[{id:16,name:"October : pdf"},{id:17,name:"November : pdf"},{id:18,name:"Tutorial : html"}]},{id:19,name:"Videos :",children:[{id:20,name:"Tutorials :",children:[{id:21,name:"Basic layouts : mp4"},{id:22,name:"Advanced techniques : mp4"},{id:23,name:"All about app : dir"}]},{id:24,name:"Intro : mov"},{id:25,name:"Conference introduction : avi"}]}],open:["public"],files:{html:"mdi-language-html5",js:"mdi-nodejs",json:"mdi-json",md:"mdi-markdown",pdf:"mdi-file-pdf",png:"mdi-file-image",txt:"mdi-file-document-outline",xls:"mdi-file-excel"},tree:[],slotsItems:[{name:".git"},{name:"node_modules"},{name:"public",children:[{name:"static",children:[{name:"logo.png",file:"png"}]},{name:"favicon.ico",file:"png"},{name:"index.html",file:"html"}]},{name:".gitignore",file:"txt"},{name:"babel.config.js",file:"js"},{name:"package.json",file:"json"},{name:"README.md",file:"md"},{name:"vue.config.js",file:"js"}],active:[],avatar:null,asyncItemsOpen:[],users:[],breweries:[],isLoading:!1,customTree:[],types:[]}},computed:{asyncItems:function(){return[{name:"Users",children:this.users}]},selected:function(){if(this.active.length){var t=this.active[0];return this.users.find((function(e){return e.id===t}))}},selectableIcons:function(){var t=this,e=this.types.map((function(e){return{id:e,name:t.getName(e),children:t.getChildren(e)}}));return[{id:1,name:"All Breweries",children:e}]},selections:function(){var t,e=this,r=[],n=l(this.customTree);try{var a=function(){var n=t.value,a=e.breweries.find((function(t){return t.id===n}));if(!a)return"continue";r.push(a)};for(n.s();!(t=n.n()).done;)a()}catch(i){n.e(i)}finally{n.f()}return r},shouldShowTree:function(){return this.breweries.length>0&&!this.isLoading}},watch:{selected:"randomAvatar",breweries:function(t){this.types=t.reduce((function(t,e){var r=e.brewery_type;return t.includes(r)||t.push(r),t}),[]).sort()}},methods:{fetchUsers:function(){var t=(0,o.default)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,h(1500);case 2:return t.abrupt("return",fetch("https://jsonplaceholder.typicode.com/users").then((function(t){return t.json()})).then((function(t){var r;return(r=e.children).push.apply(r,(0,i.default)(t))})).catch((function(t){return console.warn(t)})));case 3:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),randomAvatar:function(){this.avatar=f[Math.floor(Math.random()*f.length)]},fetched:function(){var t=this;if(!this.breweries.length)return fetch("https://api.openbrewerydb.org/breweries").then((function(t){return t.json()})).then((function(e){return t.breweries=e})).catch((function(t){return console.log(t)}))},getChildren:function(t){var e,r=[],n=l(this.breweries);try{for(n.s();!(e=n.n()).done;){var a=e.value;a.brewery_type===t&&r.push(s(s({},a),{},{name:this.getName(a.name)}))}}catch(i){n.e(i)}finally{n.f()}return r.sort((function(t,e){return t.name>e.name?1:-1}))},getName:function(t){return"".concat(t.charAt(0).toUpperCase()).concat(t.slice(1))}}};e.default=p},ffc6:function(t,e,r){"use strict";r("1c01"),Object.defineProperty(e,"__esModule",{value:!0}),e.staticRenderFns=e.render=void 0,r("7f7f");var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hover-wrapper"},[e("page-title-bar"),e("v-container",{attrs:{"grid-list-xl":"","pt-0":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("app-card",{attrs:{heading:t.$t("message.usage"),customClasses:"mb-20",colClasses:"xl12 lg12 md12 sm12 xs12"}},[e("div",{staticClass:"mb-5"},[e("p",[t._v("The "),e("code",[t._v("v-treeview")]),t._v(" component is useful for displaying large amounts of nested data.")])]),[e("v-treeview",{attrs:{items:t.items}})]],2),e("app-card",{attrs:{heading:t.$t("message.scopedSlots"),customClasses:"mb-20",colClasses:"xl12 lg12 md12 sm12 xs12"}},[e("div",{staticClass:"mb-5"},[e("p",[t._v("Using scoped slots we are able to create an intuitive file explorer")])]),e("v-treeview",{attrs:{open:t.open,items:t.slotsItems,activatable:"","item-key":"name","open-on-click":""},scopedSlots:t._u([{key:"prepend",fn:function(r){var n=r.item,a=r.open;r.leaf;return[n.file?e("v-icon",[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.files[n.file])+"\n\t\t\t\t\t\t\t")]):e("v-icon",[t._v("\n\t\t\t\t\t\t\t\t"+t._s(a?"mdi-folder-open":"mdi-folder")+"\n\t\t\t\t\t\t\t")])]}}]),model:{value:t.tree,callback:function(e){t.tree=e},expression:"tree"}})],1),e("app-card",{attrs:{heading:t.$t("message.asyncItems"),customClasses:"mb-20",colClasses:"xl12 lg12 md12 sm12 xs12"}},[e("div",{staticClass:"mb-5"},[e("p",[t._v("You can dynamically load child data by supplying a Promise callback to the "),e("code",[t._v("load-children")]),t._v(" prop. This callback will be executed the first time a user tries to expand an item that has a children property that is an empty array.")])]),e("v-card",[e("v-card-title",{staticClass:"indigo white--text headline"},[t._v("\n\t\t\t\t\t\t\tUser Directory\n\t\t\t\t\t\t")]),e("v-layout",{attrs:{"justify-space-between":"","pa-3":"","d-md-flex":"","d-block":""}},[e("v-flex",{attrs:{xl5:"",lg5:"",md5:"",sm12:"",xs12:""}},[e("v-treeview",{staticClass:"grey lighten-5",attrs:{active:t.active,items:t.asyncItems,"load-children":t.fetchUsers,open:t.asyncItemsOpen,activatable:"","active-class":"primary--text","open-on-click":"",transition:""},on:{"update:active":function(e){t.active=e},"update:open":function(e){t.asyncItemsOpen=e}},scopedSlots:t._u([{key:"prepend",fn:function(r){var n=r.item,a=r.active;return n.children?t._e():e("v-icon",{attrs:{color:a?"primary":""}},[t._v("mdi-account\n\t\t\t\t\t\t\t\t\t")])}}],null,!0)})],1),e("v-flex",{attrs:{"d-flex":"","text-center":"",xl7:"",lg7:"",md7:"",sm12:"",xs12:""}},[e("v-scroll-y-transition",{attrs:{mode:"out-in"}},[t.selected?e("v-card",{key:t.selected.id,staticClass:"mx-auto",attrs:{text:"","max-width":"400"}},[e("v-card-text",[t.avatar?e("v-avatar",{attrs:{size:"88"}},[e("v-img",{staticClass:"mb-5",attrs:{src:"https://avataaars.io/".concat(t.avatar)}})],1):t._e(),e("h3",{staticClass:"headline mb-2"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t\t"+t._s(t.selected.name)+"\n\t\t\t\t\t\t\t\t\t\t\t")]),e("div",{staticClass:"blue--text mb-2"},[t._v(t._s(t.selected.email))]),e("div",{staticClass:"blue--text subheading font-weight-bold"},[t._v(t._s(t.selected.username))])],1),e("v-divider"),e("v-layout",{attrs:{tag:"v-card-text","text-left":"",wrap:""}},[e("v-flex",{attrs:{tag:"strong",xs5:"","text-right":"","mr-3":"","mb-2":""}},[t._v("Company:")]),e("v-flex",[t._v(t._s(t.selected.company.name))]),e("v-flex",{attrs:{tag:"strong",xs5:"","text-right":"","mr-3":"","mb-2":""}},[t._v("Website:")]),e("v-flex",[e("a",{attrs:{href:"//".concat(t.selected.website),target:"_blank"}},[t._v(t._s(t.selected.website))])]),e("v-flex",{attrs:{tag:"strong",xs5:"","text-right":"","mr-3":"","mb-2":""}},[t._v("Phone:")]),e("v-flex",[t._v(t._s(t.selected.phone))])],1)],1):e("div",{staticClass:"title grey--text text--lighten-1 font-weight-light",staticStyle:{"align-self":"center"}},[t._v("\n\t\t\t\t\t\t\t\t\t\tSelect a User\n\t\t\t\t\t\t\t\t\t")])],1)],1)],1)],1)],1),e("app-card",{attrs:{heading:t.$t("message.customSelectableIcons"),customClasses:"mb-20",colClasses:"xl12 lg12 md12 sm12 xs12"}},[e("div",{staticClass:"mb-5"},[e("p",[t._v("Customize the on, off and indeterminate icons for your selectable tree. Combine with other advanced functionality like API loaded items.")])]),e("v-card",[e("v-app-bar",{attrs:{color:"grey lighten-3"}},[e("v-icon",[t._v("mdi-silverware")]),e("v-toolbar-title",[t._v("Local hotspots")])],1),e("v-layout",{attrs:{"d-md-flex":"","d-block":""}},[e("v-flex",{attrs:{xl6:"",lg6:"",md6:"",sm12:"",xs12:""}},[e("v-card-text",[e("v-treeview",{attrs:{"load-children":t.fetched,items:t.selectableIcons,activatable:"","active-class":"grey lighten-4 indigo--text","selected-color":"indigo","open-on-click":"",selectable:"","expand-icon":"mdi-chevron-down","on-icon":"mdi-bookmark","off-icon":"mdi-bookmark-outline","indeterminate-icon":"mdi-bookmark-minus"},model:{value:t.customTree,callback:function(e){t.customTree=e},expression:"customTree"}})],1)],1),e("v-divider",{attrs:{vertical:""}}),e("v-flex",{attrs:{xl6:"",lg6:"",md6:"",sm12:"",xs12:""}},[e("v-card-text",[0===t.selections.length?e("div",{key:"title",staticClass:"title font-weight-light grey--text pa-3 text-center"},[t._v("\n\t\t\t\t\t\t\t\t\t\tSelect your favorite breweries\n\t\t\t\t\t\t\t\t\t")]):t._e(),e("v-scroll-x-transition",{attrs:{group:"","hide-on-leave":""}},t._l(t.selections,(function(r,n){return e("v-chip",{key:n,attrs:{color:"grey",dark:"",small:""}},[e("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-beer")]),t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(r.name)+"\n\t\t\t\t\t\t\t\t\t\t")],1)})),1)],1)],1)],1),e("v-divider"),e("v-card-actions",[e("v-btn",{attrs:{text:""},on:{click:function(e){t.customTree=[]}}},[t._v("\n\t\t\t\t\t\t\t\tReset\n\t\t\t\t\t\t\t")]),e("v-spacer"),e("v-btn",{staticClass:"white--text",attrs:{color:"green darken-1",depressed:""}},[t._v("\n\t\t\t\t\t\t\t\tSave\n\t\t\t\t\t\t\t\t"),e("v-icon",{attrs:{right:""}},[t._v("mdi-content-save")])],1)],1)],1)],1)],1)],1)],1)};e.render=n;var a=[];e.staticRenderFns=a}}]);
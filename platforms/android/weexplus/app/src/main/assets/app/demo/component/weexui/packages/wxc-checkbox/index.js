!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=311)}({0:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=n(2),c=function(e){return e&&e.__esModule?e:{default:e}}(i),s={UrlParser:c.default,_typeof:function(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()},isPlainObject:function(e){return"object"===s._typeof(e)},isString:function(e){return"string"==typeof e},isNonEmptyArray:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e&&e.length>0&&Array.isArray(e)&&void 0!==e},isObject:function(e){return e&&"object"===(void 0===e?"undefined":r(e))&&!Array.isArray(e)},isEmptyObject:function(e){return 0===Object.keys(e).length&&e.constructor===Object},decodeIconFont:function(e){var t=/&#x[a-z|0-9]{4,5};?/g;return t.test(e)?e.replace(new RegExp(t,"g"),function(e){var t=e.replace(/&#x/,"0x").replace(/;$/,"");return String.fromCharCode(t)}):e},mergeDeep:function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(!n.length)return e;var i=n.shift();if(s.isObject(e)&&s.isObject(i))for(var c in i)s.isObject(i[c])?(e[c]||Object.assign(e,o({},c,{})),s.mergeDeep(e[c],i[c])):Object.assign(e,o({},c,i[c]));return s.mergeDeep.apply(s,[e].concat(n))},appendProtocol:function(e){if(/^\/\//.test(e)){return"http"+(/^https:/.test(weex.config.bundleUrl)?"s":"")+":"+e}return e},encodeURLParams:function(e){return new c.default(e,!0).toString()},goToH5Page:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=weex.requireModule("navigator"),r=new s.UrlParser(e,!0),i=s.appendProtocol(r.toString());o.push({url:s.encodeURLParams(i),animated:t.toString()},n)},env:{isTaobao:function(){return/(tb|taobao|淘宝)/i.test(weex.config.env.appName)},isTrip:function(){return"LX"===weex.config.env.appName},isBoat:function(){var e=weex.config.env.appName;return"Boat"===e||"BoatPlayground"===e},isWeb:function(){var e=weex.config.env.platform;return"object"===("undefined"==typeof window?"undefined":r(window))&&"web"===e.toLowerCase()},isIOS:function(){return"ios"===weex.config.env.platform.toLowerCase()},isIPhoneX:function(){var e=weex.config.env.deviceHeight;return s.env.isWeb()?void 0!==("undefined"==typeof window?"undefined":r(window))&&window.screen&&window.screen.width&&window.screen.height&&375===parseInt(window.screen.width,10)&&812===parseInt(window.screen.height,10):s.env.isIOS()&&2436===e},isAndroid:function(){return"android"===weex.config.env.platform.toLowerCase()},isAlipay:function(){return"AP"===weex.config.env.appName},isTmall:function(){return/(tm|tmall|天猫)/i.test(weex.config.env.appName)},isAliWeex:function(){return s.env.isTmall()||s.env.isTrip()||s.env.isTaobao()},supportsEB:function(){var e=weex.config.env.weexVersion||"0",t=s.compareVersion(e,"0.10.1.4")&&(s.env.isIOS()||s.env.isAndroid()),n=weex.requireModule("expressionBinding");return n&&n.enableBinding&&t},supportsEBForAndroid:function(){return s.env.isAndroid()&&s.env.supportsEB()},supportsEBForIos:function(){return s.env.isIOS()&&s.env.supportsEB()},getPageHeight:function(){var e=weex.config.env,t=s.env.isWeb()?0:s.env.isIPhoneX()?176:132;return e.deviceHeight/e.deviceWidth*750-t}},compareVersion:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0.0.0",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0.0.0";if(e===t)return!0;for(var n=e.split("."),o=t.split("."),r=Math.max(n.length,o.length),i=0;i<r;i++){var c=~~o[i],s=~~n[i];if(c<s)return!0;if(c>s)return!1}return!1},arrayChunk:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4,n=[];return e&&e.length>0&&(n=e.map(function(n,o){return o%t==0?e.slice(o,o+t):null}).filter(function(e){return e})),n},truncateString:function(e,t){for(var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=0,r="",i="",c=/[^\x00-\xff]/g,s=e.replace(c,"**").length,a=0;a<s&&(i=e.charAt(a).toString(),null!==i.match(c)?o+=2:o++,!(o>t));a++)r+=i;return n&&s>t&&(r+="..."),r}};t.default=s},1:function(e,t,n){"use strict";var o,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};o=function(){return this}();try{o=o||Function("return this")()||(0,eval)("this")}catch(e){"object"===("undefined"==typeof window?"undefined":r(window))&&(o=window)}e.exports=o},10:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(15);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(r).default}})},11:function(e,t){e.exports={"wxc-cell":{height:"100",flexDirection:"row",alignItems:"center",paddingLeft:"24",paddingRight:"24",backgroundColor:"#ffffff"},"cell-margin":{marginBottom:"24"},"cell-title":{flex:1},"cell-indent":{paddingBottom:"30",paddingTop:"30"},"has-desc":{paddingBottom:"18",paddingTop:"18"},"cell-top-border":{borderTopColor:"#e2e2e2",borderTopWidth:"1"},"cell-bottom-border":{borderBottomColor:"#e2e2e2",borderBottomWidth:"1"},"cell-label-text":{fontSize:"30",color:"#666666",width:"188",marginRight:"10"},"cell-arrow-icon":{width:"22",height:"22"},"cell-content":{color:"#333333",fontSize:"30",lineHeight:"40"},"cell-desc-text":{color:"#999999",fontSize:"24",lineHeight:"30",marginTop:"4"}}},12:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={props:{label:{type:String,default:""},title:{type:String,default:""},desc:{type:String,default:""},link:{type:String,default:""},hasTopBorder:{type:Boolean,default:!1},hasMargin:{type:Boolean,default:!1},hasBottomBorder:{type:Boolean,default:!0},hasArrow:{type:Boolean,default:!1},arrowIcon:{type:String,default:"https://gw.alicdn.com/tfs/TB11zBUpwMPMeJjy1XbXXcwxVXa-22-22.png"},hasVerticalIndent:{type:Boolean,default:!0},cellStyle:{type:Object,default:function(){return{}}},autoAccessible:{type:Boolean,default:!0}},methods:{cellClicked:function(e){var t=this.link;this.$emit("wxcCellClicked",{e:e}),t&&r.default.goToH5Page(t,!0)}}}},13:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["wxc-cell",e.hasTopBorder&&"cell-top-border",e.hasBottomBorder&&"cell-bottom-border",e.hasMargin&&"cell-margin",e.hasVerticalIndent&&"cell-indent",e.desc&&"has-desc"],style:e.cellStyle,attrs:{accessible:e.autoAccessible,ariaLabel:e.label+","+e.title+","+e.desc},on:{click:e.cellClicked}},[e._t("label",[e.label?n("div",[n("text",{staticClass:["cell-label-text"]},[e._v(e._s(e.label))])]):e._e()]),n("div",{staticClass:["cell-title"]},[e._t("title",[n("text",{staticClass:["cell-content"]},[e._v(e._s(e.title))]),e.desc?n("text",{staticClass:["cell-desc-text"]},[e._v(e._s(e.desc))]):e._e()])],2),e._t("value"),e._t("default"),e.hasArrow?n("image",{staticClass:["cell-arrow-icon"],attrs:{src:e.arrowIcon,ariaHidden:!0}}):e._e()],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},15:function(e,t,n){var o,r,i=[];i.push(n(11)),o=n(12);var c=n(13);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=o=o.default),"function"==typeof r&&(r=r.options),r.__file="/Users/zhengjiangrong/Documents/GitHub/weexplus/src/demo/component/weexui/packages/wxc-cell/index.vue",r.render=c.render,r.staticRenderFns=c.staticRenderFns,r._scopeId="data-v-c2c12f94",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=o},2:function(e,t,n){"use strict";(function(t){function o(e){e=e||t.location||{};var n,o={},r=void 0===e?"undefined":l(e);if("blob:"===e.protocol)o=new c(unescape(e.pathname),{});else if("string"===r){o=new c(e,{});for(n in g)delete o[n]}else if("object"===r){for(n in e)n in g||(o[n]=e[n]);void 0===o.slashes&&(o.slashes=p.test(e.href))}return o}function r(e){var t=d.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!t[2],rest:t[3]}}function i(e,t){for(var n=(t||"/").split("/").slice(0,-1).concat(e.split("/")),o=n.length,r=n[o-1],i=!1,c=0;o--;)"."===n[o]?n.splice(o,1):".."===n[o]?(n.splice(o,1),c++):c&&(0===o&&(i=!0),n.splice(o,1),c--);return i&&n.unshift(""),"."!==r&&".."!==r||n.push(""),n.join("/")}function c(e,t,n){if(!(this instanceof c))return new c(e,t,n);var s,a,d,p,g,y,v=h.slice(),b=void 0===t?"undefined":l(t),m=this,w=0;for("object"!==b&&"string"!==b&&(n=t,t=null),n&&"function"!=typeof n&&(n=f.parse),t=o(t),a=r(e||""),s=!a.protocol&&!a.slashes,m.slashes=a.slashes||s&&t.slashes,m.protocol=a.protocol||t.protocol||"",e=a.rest,a.slashes||(v[2]=[/(.*)/,"pathname"]);w<v.length;w++)p=v[w],d=p[0],y=p[1],d!==d?m[y]=e:"string"==typeof d?~(g=e.indexOf(d))&&("number"==typeof p[2]?(m[y]=e.slice(0,g),e=e.slice(g+p[2])):(m[y]=e.slice(g),e=e.slice(0,g))):(g=d.exec(e))&&(m[y]=g[1],e=e.slice(0,g.index)),m[y]=m[y]||(s&&p[3]?t[y]||"":""),p[4]&&(m[y]=m[y].toLowerCase());n&&(m.query=n(m.query)),s&&t.slashes&&"/"!==m.pathname.charAt(0)&&(""!==m.pathname||""!==t.pathname)&&(m.pathname=i(m.pathname,t.pathname)),u(m.port,m.protocol)||(m.host=m.hostname,m.port=""),m.username=m.password="",m.auth&&(p=m.auth.split(":"),m.username=p[0]||"",m.password=p[1]||""),m.origin=m.protocol&&m.host&&"file:"!==m.protocol?m.protocol+"//"+m.host:"null",m.href=m.toString()}function s(e,t,n){var o=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(n||f.parse)(t)),o[e]=t;break;case"port":o[e]=t,u(t,o.protocol)?t&&(o.host=o.hostname+":"+t):(o.host=o.hostname,o[e]="");break;case"hostname":o[e]=t,o.port&&(t+=":"+o.port),o.host=t;break;case"host":o[e]=t,/:\d+$/.test(t)?(t=t.split(":"),o.port=t.pop(),o.hostname=t.join(":")):(o.hostname=t,o.port="");break;case"protocol":o.protocol=t.toLowerCase(),o.slashes=!n;break;case"pathname":case"hash":if(t){var r="pathname"===e?"/":"#";o[e]=t.charAt(0)!==r?r+t:t}else o[e]=t;break;default:o[e]=t}for(var i=0;i<h.length;i++){var c=h[i];c[4]&&(o[c[1]]=o[c[1]].toLowerCase())}return o.origin=o.protocol&&o.host&&"file:"!==o.protocol?o.protocol+"//"+o.host:"null",o.href=o.toString(),o}function a(e){e&&"function"==typeof e||(e=f.stringify);var t,n=this,o=n.protocol;o&&":"!==o.charAt(o.length-1)&&(o+=":");var r=o+(n.slashes?"//":"");return n.username&&(r+=n.username,n.password&&(r+=":"+n.password),r+="@"),r+=n.host+n.pathname,t="object"===l(n.query)?e(n.query):n.query,t&&(r+="?"!==t.charAt(0)?"?"+t:t),n.hash&&(r+=n.hash),r}var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=n(3),f=n(4),d=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,p=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,h=[["#","hash"],["?","query"],["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]],g={hash:1,query:1};c.prototype={set:s,toString:a},c.extractProtocol=r,c.location=o,c.qs=f,e.exports=c}).call(t,n(1))},3:function(e,t,n){"use strict";e.exports=function(e,t){if(t=t.split(":")[0],!(e=+e))return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},31:function(e,t){e.exports={checkbox:{width:"48",height:"48"},"title-text":{fontSize:"30"}}},311:function(e,t,n){var o,r,i=[];i.push(n(31)),o=n(32);var c=n(34);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r=o=o.default),"function"==typeof r&&(r=r.options),r.__file="/Users/zhengjiangrong/Documents/GitHub/weexplus/src/demo/component/weexui/packages/wxc-checkbox/index.vue",r.render=c.render,r.staticRenderFns=c.staticRenderFns,r._scopeId="data-v-d7591e52",r.style=r.style||{},i.forEach(function(e){for(var t in e)r.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),e.exports=o,e.exports.el="true",new Vue(e.exports)},32:function(e,t,n){"use strict";function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(10),i=function(e){return e&&e.__esModule?e:{default:e}}(r),c=n(33);t.default={components:{WxcCell:i.default},props:{hasTopBorder:{type:Boolean,default:!1},title:{type:String,require:!0},value:{type:[String,Number,Object],require:!0},disabled:{type:Boolean,default:!1},checked:{type:Boolean,default:!1},config:{type:Object,default:function(){return{}}}},data:function(){return{icon:[c.CHECKED,c.UNCHECKED,c.CHECKED_DISABLED,c.UNCHECKED_DISABLED],color:"#3D3D3D",innerChecked:!1}},computed:{checkIcon:function(){var e=this.icon,t=this.disabled,n=this.innerChecked,r=this.config,i=[].concat(o(e));return r.checkedIcon&&(i[0]=r.checkedIcon),r.unCheckedIcon&&(i[1]=r.unCheckedIcon),r.checkedDisabledIcon&&(i[2]=r.checkedDisabledIcon),r.unCheckedDisabledIcon&&(i[3]=r.unCheckedDisabledIcon),t?i[n?2:3]:i[n?0:1]},textColor:function(){var e=this.innerChecked,t=this.disabled,n=this.config,o=n.checkedColor?n.checkedColor:"#EE9900";return e&&!t?o:"#3D3D3D"}},watch:{checked:function(e){this.innerChecked=e}},created:function(){var e=this.checked;this.innerChecked=e},methods:{wxcCellClicked:function(){var e=this.disabled,t=this.innerChecked,n=this.value;e||(this.innerChecked=!t,this.$emit("wxcCheckBoxItemChecked",{value:n,checked:this.innerChecked}))}}}},33:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.CHECKED="https://gw.alicdn.com/tfs/TB14fp2pwMPMeJjy1XbXXcwxVXa-72-72.png",t.UNCHECKED="https://gw.alicdn.com/tfs/TB1U6SbpwMPMeJjy1XcXXXpppXa-72-72.png",t.CHECKED_DISABLED="https://gw.alicdn.com/tfs/TB1aPabpwMPMeJjy1XcXXXpppXa-72-72.png",t.UNCHECKED_DISABLED="https://gw.alicdn.com/tfs/TB1lTuzpwoQMeJjy0FoXXcShVXa-72-72.png"},34:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("wxc-cell",{attrs:{hasTopBorder:e.hasTopBorder,accessible:!0,ariaLabel:e.title+",状态为"+(e.checked?"已选中":"未选中")+","+(e.disabled?"不可更改":"点击可切换")},on:{wxcCellClicked:e.wxcCellClicked}},[n("text",{staticClass:["title-text"],style:{color:e.textColor},attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.title))]),n("image",{staticClass:["checkbox"],attrs:{slot:"value",src:e.checkIcon},slot:"value"})])},staticRenderFns:[]},e.exports.render._withStripped=!0},4:function(e,t,n){"use strict";function o(e){return decodeURIComponent(e.replace(/\+/g," "))}function r(e){for(var t,n=/([^=?&]+)=?([^&]*)/g,r={};t=n.exec(e);r[o(t[1])]=o(t[2]));return r}function i(e,t){t=t||"";var n=[];"string"!=typeof t&&(t="?");for(var o in e)c.call(e,o)&&n.push(encodeURIComponent(o)+"="+encodeURIComponent(e[o]));return n.length?t+n.join("&"):""}var c=Object.prototype.hasOwnProperty;t.stringify=i,t.parse=r}});
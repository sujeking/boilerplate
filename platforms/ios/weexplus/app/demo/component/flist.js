!function(t){function e(o){if(i[o])return i[o].exports;var n=i[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,o){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=227)}({227:function(t,e,i){var o,n,r=[];r.push(i(96)),o=i(97);var s=i(99);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=o=o.default),"function"==typeof n&&(n=n.options),n.__file="/Users/zhengjiangrong/Documents/GitHub/weexplus/src/demo/component/flist.vue",n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-3deade54",n.style=n.style||{},r.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,r),t.exports=o,t.exports.el="true",new Vue(t.exports)},24:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={postShort:function(t,e,i,o,n,r){var s=weex.requireModule("modal");this.postFull(t,e,i,o,n,function(t){s.toast({message:t.msg})},function(){s.toast({message:"网络异常！"})},function(){r()})},postFull:function(t,e,i,o,n,r,s,a){var l=weex.requireModule("net"),u=(weex.requireModule("modal"),"http://59.110.169.246/movie/"+t),c=weex.requireModule("static"),f=c.getString("token");void 0!=f&&""!=f&&(i.token=f),l.post(u,e,i,function(){o()},function(t){if(0==t.res.err)n(t.res);else{if(void 0!=f&&""!=f)return void c.remove("token");1e3==t.res.err||r(t.res)}},function(t){a()},function(t){s()})},post:function(t,e,i){var o=weex.requireModule("progress");this.postShort(t,e,{},function(){o.show()},i,function(){o.dismiss()})},postSilent:function(t,e,i){this.postFull(t,e,{},function(){},i,function(t){},function(){},function(){})}}},40:function(t,e){t.exports={limg:{width:32,height:46},refresh:{height:128,width:750,flexDirection:"row",alignItems:"center",justifyContent:"center"},refreshText:{color:"#888888",fontSize:30},indicator:{color:"#888888",height:40,width:40,marginRight:10},panel:{width:"600",height:"250",marginLeft:"75",marginTop:"35",marginBottom:"35",flexDirection:"column",justifyContent:"center",borderWidth:"2",borderStyle:"solid",borderColor:"#DDDDDD",backgroundColor:"#F5F5F5"},text:{fontSize:"50",textAlign:"center",color:"#41B883"}}},41:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{rtext:"下拉以加载",updatetime:"没有更新",offset:0,deg:20,refreshing:!1,pulldistance:135,hasrotate:!1,key:"ky"+Math.random()}},methods:{animateArrow:function(t){var e=weex.requireModule("animation"),i=this.$refs.arrow;e.transition(i,{styles:{transform:"rotate("+t+"deg)"},duration:150,timingFunction:"ease",delay:0},function(){})},onrefresh:function(t){this.offset>=this.pulldistance&&(this.refreshing=!0,this.rtext="加载中",this.$emit("onRefresh"))},end:function(){this.refreshing=!1,this.updatetime=this.getNowFormatDate()},onpullingdown:function(t){var e=t.pullingDistance;if(e<0&&(e*=-1),this.offset=e,0==this.refreshing)if(e>this.pulldistance)this.rtext="松开刷新",this.deg=180,this.hasrotate=!1,this.animateArrow(180);else{var i=e/this.pulldistance;this.deg=180*i,this.animateArrow(0),this.rtext="下拉以加载"}},getNowFormatDate:function(){var t=new Date,e=t.getMonth()+1,i=t.getDate(),o=t.getMinutes(),n=t.getSeconds();return e>=1&&e<=9&&(e="0"+e),i>=0&&i<=9&&(i="0"+i),o>=0&&o<=9&&(o="0"+o),n>=0&&n<=9&&(n="0"+n),t.getFullYear()+"-"+e+"-"+i+" "+t.getHours()+":"+o+":"+n}},created:function(){}}},42:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("refresh",{key:t.key,staticClass:["refresh"],attrs:{id:"rex",display:t.refreshing?"show":"hide"},on:{refresh:t.onrefresh,pullingdown:t.onpullingdown}},[i("div",{staticStyle:{flexDirection:"row"}},[t.refreshing?i("floading",{staticClass:["indicator"],attrs:{color:"#555555"}}):t._e(),t.refreshing?t._e():i("image",{ref:"arrow",staticClass:["limg"],attrs:{src:"root:img/pull_arrow.png"}}),i("div",{staticStyle:{alignItems:"center"}},[i("text",{staticClass:["refreshText"]},[t._v(t._s(t.rtext))]),i("text",{staticStyle:{fontSize:"25",color:"#888888"}},[t._v("上次更新:"+t._s(t.updatetime))])])],1)])},staticRenderFns:[]},t.exports.render._withStripped=!0},96:function(t,e){t.exports={progress:{width:220,height:220,opacity:.8,backgroundColor:"#000000",borderRadius:30,justifyContent:"center",alignItems:"center",position:"absolute",left:265,top:300},exception:{marginTop:50,borderRadius:10,justifyContent:"center",alignItems:"center",width:300,height:80,borderWidth:2,borderColor:"#949494",backgroundColor:"#ffffff","backgroundColor:active":"#dddddd"},emptytxt:{marginTop:100,color:"#999999"},empty:{height:500,alignItems:"center"},loading:{height:90,justifyContent:"center",alignItems:"center",flexDirection:"row",borderRadius:5,borderWidth:1,borderColor:"#e6e6e6",backgroundColor:"#fdfdfd",marginTop:15,marginRight:30,marginBottom:15,marginLeft:30},c:{flex:1},page:{backgroundColor:"#ffffff",width:750,flex:1}}},97:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(98),n=i(24);e.default={components:{pull:o},props:{columnCount:{default:1},key:{default:"key1"},columnGap:{default:20},columnWidth:{default:"auto"},scrollable:{default:!0},showScrollbar:{default:!0},showheader:{default:!1},usePullRefresh:{default:!0},items:{default:[]},isEmpty:{default:!1},background:{default:"#ffffff"},isException:{default:!1},pageSize:{default:15},isloading:{default:!1},loadOnInit:{default:!0},hasmore:{default:!0},emptyTxt:{default:"您的订单为空~"},img_empty_src:{default:"root:img/ico_empty.png"},img_exception_src:{default:"root:img/ico_exception.png"},showweg:{default:!1},ispull:{default:!1}},data:function(){return{pullkey:this.key+"pull",waterkey:this.key+"water",_columnCount:this.getCount()}},mounted:function(){if(this.loadOnInit){this.$emit("load")}},methods:{loadmore:function(t){this.hasmore&&this.$emit("load")},getCount:function(){return this.isEmpty||this.isException?1:this.columnCount},clear:function(){this.hasmore=!0,this.items.length=0},showEmpty:function(){this._columnCount=this.getCount(),this.isEmpty=!0,this.isException=!1},showException:function(){this._columnCount=this.getCount(),this.isEmpty=!1,this.isException=!0},load:function(t,e,i,o){this.loadFull(t,e,i,o,function(){},function(){},function(){},function(){})},loadFull:function(t,e,i,o,r,s,a,l){if(!this.isloading){this.isException=!1,this.isEmpty=!1,this.isloading=!0;var u=this,c=weex.requireModule("modal");n.postFull(t,e,{},function(){r()},function(t){t.list.length<15&&(u.hasmore=!1),t.list.length>0&&(i=i.concat(t.list),u.items=i),0==i.length&&u.showEmpty(),o(i),u._columnCount=u.getCount()},function(t){s(),c.toast({message:t.res.error})},function(){a(),0==i.length?u.showException():c.toast({message:"网络异常"})},function(t){u.isloading=!1,u.$refs.refresh.end(),l()})}},hideRefresh:function(){this.$refs.refresh.end(),this.ispull=!1},refresh:function(){this.isEmpty=!1,this.isException=!1,this.isloading=!1,this.ispull=!0,this.$emit("refresh")},reload:function(){this.isEmpty=!1,this.isException=!1,this.isloading=!1,this.ispull=!1,this.$emit("refresh")}}}},98:function(t,e,i){var o,n,r=[];r.push(i(40)),o=i(41);var s=i(42);n=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),n=o=o.default),"function"==typeof n&&(n=n.options),n.__file="/Users/zhengjiangrong/Documents/GitHub/weexplus/src/demo/component/pullrefresh.vue",n.render=s.render,n.staticRenderFns=s.staticRenderFns,n._scopeId="data-v-56fe3970",n.style=n.style||{},r.forEach(function(t){for(var e in t)n.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,r),t.exports=o},99:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:["c"]},[i("waterfall",{key:t.waterkey,staticClass:["page"],style:{"background-color":t.background},attrs:{columnCount:t.getCount(),columnGap:t.columnGap,showScrollbar:t.showScrollbar,scrollable:t.scrollable,loadmoreoffset:"141"},on:{loadmore:t.loadmore}},[t.usePullRefresh?i("pull",{ref:"refresh",on:{onRefresh:t.refresh}}):t._e(),i("header",{appendAsTree:!0,attrs:{append:"tree"}},[i("div",[t._t("head")],2)]),t._t("cell"),i("cell",{appendAsTree:!0,attrs:{append:"tree"}},[i("div",[t._t("foot")],2)]),t.isEmpty?i("cell",{appendAsTree:!0,attrs:{append:"tree"}},[i("div",{staticClass:["empty"]},[i("image",{staticStyle:{width:"252",height:"201",marginTop:"100"},attrs:{src:t.img_empty_src}}),i("text",{staticClass:["emptytxt"],staticStyle:{marginTop:"20"}},[t._v(t._s(t.emptyTxt))])])]):t._e(),t.isException?i("cell",{appendAsTree:!0,attrs:{append:"tree"}},[i("div",{staticClass:["empty"]},[i("image",{staticStyle:{width:"252",height:"201",marginTop:"100"},attrs:{src:t.img_exception_src}}),i("text",{staticStyle:{color:"#000000",marginTop:"20"}},[t._v("网络请求失败")]),i("div",{staticClass:["exception"],on:{click:t.reload}},[i("text",{staticStyle:{color:"#000000",fontSize:"28"}},[t._v("重新加载")])])])]):t._e(),!t.ispull&&t.isloading&&t.items.length>0?i("cell",{appendAsTree:!0,attrs:{append:"tree"}},[i("div",{staticClass:["loading"]},[i("floading",{staticStyle:{height:"40",width:"40"},attrs:{color:"#999999",loadingStyle:"small"}}),i("text",{staticStyle:{marginLeft:"10",color:"#999999",fontSize:"28"}},[t._v("正在载入")])],1)]):t._e()],2),!t.ispull&&t.isloading&&0==t.items.length?i("div",{staticClass:["progress"]},[i("floading",{staticStyle:{height:"40",width:"40",marginTop:"20"},attrs:{color:"#ffffff",loadingStyle:"big"}}),i("text",{staticStyle:{marginLeft:"0",color:"#ffffff",fontSize:"30",marginTop:"30",fontWeight:"bold"}},[t._v("加载中...")])],1):t._e()],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});
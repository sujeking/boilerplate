!function(e){function t(i){if(o[i])return o[i].exports;var n=o[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,i){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=401)}({401:function(e,t,o){var i,n,r=[];r.push(o(402)),r.push(o(403)),i=o(404);var l=o(405);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=i=i.default),"function"==typeof n&&(n=n.options),n.__file="/Users/zhengjiangrong/Documents/GitHub/weexplus/src/demo/looper.vue",n.render=l.render,n.staticRenderFns=l.staticRenderFns,n._scopeId="data-v-2abcc3c6",n.style=n.style||{},r.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,r),e.exports=i,e.exports.el="true",new Vue(e.exports)},402:function(e,t){e.exports={cl:{alignItems:"center"}}},403:function(e,t){e.exports={header:{backgroundColor:"#FF0000",flex:1,flexDirection:"row"},tz:{color:"#FF0000"},logo:{width:300,height:300,marginTop:80},k1:{alignItems:"center"},titleback:{flex:1,alignItems:"center"},title:{color:"#FFFFFF",flex:1,marginTop:73,fontWeight:"bold"},leftimage:{width:30,height:45,bottom:25,left:30,position:"absolute"},rightimage:{width:45,height:45,bottom:23,right:32,position:"absolute"},bottomline:{height:1,backgroundColor:"#000000",position:"absolute",bottom:0,left:0,right:0,flex:1},btn:{backgroundColor:"#0085ee",height:100,width:200,marginTop:50,borderRadius:10,alignItems:"center",justifyContent:"center","backgroundColor:active":"#006ce7"}}},404:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(9);t.default={components:{head:i},data:function(){return{src:"",index:0,items:["1111","2222","33333","44444"]}},methods:{ok:function(){var e=this;this.$refs.looper.getIndex(function(t){e.index=t.index})},getindex:function(){var e=this;this.$refs.looper.getIndex(function(t){e.index=t.index})},onchange:function(e){this.index=e.index},openCamera:function(){var e=this;weex.requireModule("photo").openCamera(500,800,"#000000",function(t){e.src=t.path,weex.requireModule("net").postFile("http://59.110.169.246/movie/imgupload.do",{},{},{file:t.path},function(){},function(e){weex.requireModule("modal").toast({message:"上传成功！"})},function(){},function(){weex.requireModule("modal").toast({message:"上传异常！"})})})},jk:function(){var e=this;weex.requireModule("photo").open(500,800,"#000000","#ffffff","#ffffff",function(t){e.src=t.path,weex.requireModule("net").postFile("http://59.110.169.246/movie/imgupload.do",{},{},{file:t.path},function(){},function(e){weex.requireModule("modal").toast({message:"上传成功！"})},function(){},function(){weex.requireModule("modal").toast({message:"上传异常！"})})})}},created:function(){weex.requireModule("globalEvent").addEventListener("onPageInit",function(e){})}}},405:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("head",{appendAsTree:!0,attrs:{title:"相机",append:"tree"}}),o("looper",{ref:"looper",staticStyle:{width:"300",height:"100",backgroundColor:"#0088fb"},attrs:{fontSize:"25",data:e.items,color:"#eeeeee"},on:{change:e.onchange,click:e.ok}}),o("text",[e._v(e._s(e.index))]),o("text",[e._v(e._s(e.index))]),o("div",{staticStyle:{width:"200",height:"100",backgroundColor:"#006ce7"},on:{click:e.getindex}})],1)},staticRenderFns:[]},e.exports.render._withStripped=!0},5:function(e,t){e.exports={header:{backgroundColor:"#FF0000",flex:1,flexDirection:"row"},tz:{color:"#FF0000"},logo:{width:300,height:300,marginTop:80},k1:{alignItems:"center"},titleback:{flex:1,alignItems:"center"},title:{color:"#FFFFFF",flex:1,marginTop:73,fontWeight:"bold"},leftimage:{width:30,height:45,bottom:25,left:30,position:"absolute"},rightimage:{width:45,height:45,bottom:23,right:32,position:"absolute"},bottomline:{height:1,backgroundColor:"#000000",position:"absolute",bottom:0,left:0,right:0,flex:1},btn:{backgroundColor:"#0085ee",height:100,width:500,marginTop:50,borderRadius:20,alignItems:"center",justifyContent:"center","backgroundColor:active":"#006ce7"}}},6:function(e,t){e.exports={layout:{backgroundColor:"#333333",height:128,flexDirection:"row",alignItems:"center",justifyContent:"center"}}},7:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{title:{default:""},back:{default:!0},bgcolor:{default:"#222222"},isloading:{default:!1},disabled:{default:!1},type:{type:String,default:"text"},font_size:{default:20},height:{default:128},top:{default:40},titletop:{default:10}},data:function(){return{}},methods:{titleClick:function(){this.$emit("titleClick")},rightclick:function(){this.$emit("rightClick")},backTo:function(){weex.requireModule("navigator").back(),this.$emit("backClick")},onclick:function(){this.disabled||this.$emit("onclick")},adjust:function(){if("android"==weex.config.env.platform){var e=weex.config.env.osVersion;e=e.replace(/\./g,""),e.length<3&&(e+="0"),e<="440"&&(this.height=108,this.top=16,this.titletop=4)}}},created:function(){this.adjust()},ready:function(){}}},8:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:["layout"],style:{"background-color":e.bgcolor,height:e.height}},[o("div",{staticStyle:{flexDirection:"row"},style:{top:e.titletop}},[e.isloading?o("div",{staticStyle:{height:"40",width:"40",marginRight:"10"}}):e._e(),o("text",{staticStyle:{flex:"1",color:"#ffffff",textAlign:"center",fontSize:"38"},on:{click:e.titleClick}},[e._v(e._s(e.title))]),e.isloading?o("floading",{staticStyle:{height:"40",width:"40",marginLeft:"10",marginTop:"5"},attrs:{color:"#ffffff",loadingStyle:"small"}}):e._e()],1),e.back?o("div",{staticStyle:{width:"200",top:"40",position:"absolute",left:"0"},style:{height:e.height,top:e.top},on:{click:e.backTo}},[o("image",{staticStyle:{width:"80",height:"80"},attrs:{src:"root:img/back.png"}})]):e._e(),o("div",{staticStyle:{width:"200",position:"absolute",right:"0",top:"0",alignItems:"center",justifyContent:"center"},style:{height:e.height},on:{click:e.rightclick}},[e._t("right")],2),o("div",{staticStyle:{height:"1",backgroundColor:"#111111",position:"absolute",bottom:"0",left:"0",right:"0"}})])},staticRenderFns:[]},e.exports.render._withStripped=!0},9:function(e,t,o){var i,n,r=[];r.push(o(5)),r.push(o(6)),i=o(7);var l=o(8);n=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(Object.keys(i).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),n=i=i.default),"function"==typeof n&&(n=n.options),n.__file="/Users/zhengjiangrong/Documents/GitHub/weexplus/src/demo/header.vue",n.render=l.render,n.staticRenderFns=l.staticRenderFns,n._scopeId="data-v-25b44859",n.style=n.style||{},r.forEach(function(e){for(var t in e)n.style[t]=e[t]}),"function"==typeof __register_static_styles__&&__register_static_styles__(n._scopeId,r),e.exports=i}});
!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=318)}({121:function(t,e){t.exports={"time-dot-wrap":{flexDirection:"row",alignItems:"center"}}},122:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t};e.default={props:{time:{type:Number,default:15012e8},interval:{type:Number,default:1e3},tpl:{type:String,default:"{h}:{m}:{s}"},timeWrapStyle:Object,timeBoxStyle:Object,dotBoxStyle:Object,timeTextStyle:Object,dotTextStyle:Object},data:function(){return{NOW_DATE:(new Date).getTime(),completed:!1,tplIndexOfDays:-1,tplIndexOfHours:-1,tplIndexOfMinutes:-1,tplIndexOfSeconds:-1,TIME_WRAP_STYLE:{flexDirection:"row",alignItems:"center",marginLeft:"12px",marginRight:"12px"},TIME_BOX_STYLE:{flexDirection:"row",justifyContent:"center",alignItems:"center",backgroundColor:"#333333",height:"30px",width:"30px"},DOT_BOX_STYLE:{width:"18px",flexDirection:"row",justifyContent:"center",alignItems:"center"},TIME_TEXT_STYLE:{color:"#FFCC80",fontSize:"18px"},DOT_TEXT_STYLE:{color:"#333333",fontSize:"18px",fontWeight:"bold"}}},mounted:function(){var t=this;setInterval(function(){t.NOW_DATE=(new Date).getTime()},this.interval),this.tplIndexOfDays=this.tpl.indexOf("d"),this.tplIndexOfHours=this.tpl.indexOf("h"),this.tplIndexOfMinutes=this.tpl.indexOf("m"),this.tplIndexOfSeconds=this.tpl.indexOf("s")},computed:{mrTimeWrapStyle:function(){return o({},this.TIME_WRAP_STYLE,this.timeWrapStyle)},mrTimeBoxStyle:function(){return o({},this.TIME_BOX_STYLE,this.timeBoxStyle)},mrDotBoxStyle:function(){return o({},this.DOT_BOX_STYLE,this.dotBoxStyle)},mrTimeTextStyle:function(){return o({},this.TIME_TEXT_STYLE,this.timeTextStyle)},mrDotTextStyle:function(){return o({},this.DOT_TEXT_STYLE,this.dotTextStyle)},countDownData:function(){var t=this.time-this.NOW_DATE;if(t<0)return!1===this.completed&&this.$emit("wxcOnComplete"),this.completed=!0,{day:"00",hour:"00",minute:"00",second:"00"};var e=0,n=0,o=0,r=0;return-1!==this.tplIndexOfDays?(e=Math.floor(t/864e5),n=Math.floor(t%864e5/36e5)):(e=0,n=Math.floor(t/36e5)),-1!==this.tplIndexOfHours?(n=Math.floor((t-24*e*60*60*1e3)/36e5),o=Math.floor((t-24*e*60*60*1e3)%36e5/6e4)):(n=0,o=Math.floor((t-24*e*60*60*1e3)/6e4)),-1!==this.tplIndexOfMinutes?(o=Math.floor((t-24*e*60*60*1e3-60*n*60*1e3)/6e4),r=Math.floor((t-24*e*60*60*1e3-60*n*60*1e3)%6e4/1e3)):(o=0,r=Math.floor((t-24*e*60*60*1e3-60*n*60*1e3)/1e3)),{day:e<10?"0"+e:""+e,hour:n<10?"0"+n:""+n,minute:o<10?"0"+o:""+o,second:r<10?"0"+r:""+r}}},methods:{getDot:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return-1===e?this.tpl.slice(t+2):this.tpl.slice(t+2,e-1)}}}},123:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:t.mrTimeWrapStyle},[n("div",{staticClass:["time-dot-wrap"]},[-1!==t.tplIndexOfDays?n("div",{style:t.mrTimeBoxStyle,attrs:{accessible:!0,ariaLabel:t.countDownData.day+"天"}},[n("text",{style:t.mrTimeTextStyle},[t._v(t._s(t.countDownData.day))])]):t._e(),-1!==t.tplIndexOfDays?n("div",{style:t.mrDotBoxStyle,attrs:{ariaHidden:!0}},[n("text",{style:t.mrDotTextStyle},[t._v(t._s(t.getDot(t.tplIndexOfDays,t.tplIndexOfHours)))])]):t._e(),-1!==t.tplIndexOfHours?n("div",{style:t.mrTimeBoxStyle,attrs:{accessible:!0,ariaLabel:t.countDownData.hour+"时"}},[n("text",{style:t.mrTimeTextStyle},[t._v(t._s(t.countDownData.hour))])]):t._e(),-1!==t.tplIndexOfHours?n("div",{style:t.mrDotBoxStyle,attrs:{ariaHidden:!0}},[n("text",{style:t.mrDotTextStyle},[t._v(t._s(t.getDot(t.tplIndexOfHours,t.tplIndexOfMinutes)))])]):t._e(),-1!==t.tplIndexOfMinutes?n("div",{style:t.mrTimeBoxStyle,attrs:{accessible:!0,ariaLabel:t.countDownData.minute+"分"}},[n("text",{style:t.mrTimeTextStyle},[t._v(t._s(t.countDownData.minute))])]):t._e(),-1!==t.tplIndexOfMinutes?n("div",{style:t.mrDotBoxStyle,attrs:{ariaHidden:!0}},[n("text",{style:t.mrDotTextStyle},[t._v(t._s(t.getDot(t.tplIndexOfMinutes,t.tplIndexOfSeconds)))])]):t._e(),-1!==t.tplIndexOfSeconds?n("div",{style:t.mrTimeBoxStyle,attrs:{accessible:!0,ariaLabel:t.countDownData.second+"秒"}},[n("text",{style:t.mrTimeTextStyle},[t._v(t._s(t.countDownData.second))])]):t._e(),-1!==t.tplIndexOfSeconds?n("div",{style:t.mrDotBoxStyle,attrs:{ariaHidden:!0}},[n("text",{style:t.mrDotTextStyle},[t._v(t._s(t.getDot(t.tplIndexOfSeconds,-1)))])]):t._e()])])},staticRenderFns:[]},t.exports.render._withStripped=!0},318:function(t,e,n){var o,r,i=[];i.push(n(121)),o=n(122);var s=n(123);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=o=o.default),"function"==typeof r&&(r=r.options),r.__file="/Users/zhengjiangrong/Documents/GitHub/weexplus/src/demo/component/weexui/packages/wxc-countdown/index.vue",r.render=s.render,r.staticRenderFns=s.staticRenderFns,r._scopeId="data-v-1a74a573",r.style=r.style||{},i.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,i),t.exports=o,t.exports.el="true",new Vue(t.exports)}});
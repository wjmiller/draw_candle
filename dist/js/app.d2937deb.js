(function(t){function e(e){for(var i,o,s=e[0],r=e[1],d=e[2],h=0,u=[];h<s.length;h++)o=s[h],c[o]&&u.push(c[o][0]),c[o]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);l&&l(e);while(u.length)u.shift()();return n.push.apply(n,d||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],i=!0,s=1;s<a.length;s++){var r=a[s];0!==c[r]&&(i=!1)}i&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},c={app:0},n=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var l=r;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var i=a("64a9"),c=a.n(i);c.a},"09b2":function(t,e,a){},"0a8d0":function(t,e,a){},"2c1c":function(t,e,a){},"357f":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var i=a("2b0e"),c=a("9f7b"),n=a.n(c);a("ab8b"),a("2dd8");i["a"].use(n.a);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},t._l(t.activities,function(t){return a("ActivityGroup",{attrs:{activity:t}})}),1)])},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"activity-group"},[a("h2",[t._v(t._s(t.activity.title))]),a("p",[t._v(t._s(t.activity.questions[0].instruction))]),t._l(t.activity.candles,function(e,i){return a("CandleRow",{key:t.activity.id+"-"+i+"-candle",attrs:{candle:e},on:{"candle-correct":function(e){return t.checkCandles(e,i)}}})}),t._l(t.activity.questions,function(e,i){return a("QuestionRow",{key:t.activity.id+"-"+i+"-question",attrs:{question:e,active:t.openQuestion}})})],2)},d=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row candle-row"},[a("div",{staticClass:"col-sm-12 col-md-12 col-lg-4"},[a("PriceChart",{attrs:{pcdata:t.candle.candlechart.cdata}})],1),a("div",{staticClass:"col-sm-12 col-md-12 col-lg-5"},[a("CandleBuilder",{attrs:{cbdata:t.candle.candlechart},on:{candleChange:t.isCorrect}})],1),a("div",{staticClass:"col-sm-12 col-md-12 col-lg-3"},[a("CandleFeedback",{attrs:{active:t.active,feedbackData:t.feedbackData,correct:t.correct,checked:t.checked}})],1)])},h=[],u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row candle-builder"},[t._m(0),a("div",{staticClass:"col-sm-8 col-md-8 col-lg-8"},[a("svg",{attrs:{id:"chart",width:"100%",height:51+40*(t.cbdata.cdata.prices.length-1)}},[a("g",[a("rect",{staticClass:"chart-bg",attrs:{width:"100%",height:"100%"}}),a("text",{staticClass:"chart-num",attrs:{x:"0",y:"15"}},[t._v("Price")]),t._l(t.cbdata.cdata.prices,function(e,i){return a("text",{key:"price-"+i,staticClass:"chart-num",attrs:{x:"0",y:50+40*i}},[t._v(t._s(e))])}),t._l(t.cbdata.cdata.prices,function(t,e){return a("line",{key:"line-"+e,staticClass:"chart-pline",attrs:{x1:"50",y1:50+40*e,x2:"96%",y2:50+40*e}})})],2),a("g",[a("line",{staticClass:"candle-wick",attrs:{x1:"155",y1:t.chartBodyTop,x2:"155",y2:t.chartWickTop}}),a("rect",{class:t.chartBodyColor,attrs:{x:125,y:t.chartBodyTop,width:"60",height:t.chartBodyHeight}}),a("line",{staticClass:"candle-wick",attrs:{x1:"155",y1:t.chartBodyHeight+t.chartBodyTop,x2:"155",y2:t.chartWickBottom}})])])]),a("div",{staticClass:"col-sm-4 col-md-4 col-lg-4"},[a("div",{staticClass:"candle-controls"},[a("div",{staticClass:"slidecontainer"},[a("label",[t._v("Top Wick")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.rangeWickTop,expression:"rangeWickTop"}],staticClass:"slide",attrs:{type:"range",min:"0",max:"10",step:"1"},domProps:{value:t.rangeWickTop},on:{input:function(e){return t.changeCandle("WickTop")},__r:function(e){t.rangeWickTop=e.target.value}}})]),a("div",{staticClass:"slidecontainer"},[a("label",[t._v("Top of Body")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.rangeBodyTop,expression:"rangeBodyTop"}],staticClass:"slide",attrs:{type:"range",min:"0",max:"10",step:"1"},domProps:{value:t.rangeBodyTop},on:{input:function(e){return t.changeCandle("BodyTop")},__r:function(e){t.rangeBodyTop=e.target.value}}})]),a("div",{staticClass:"slidecontainer"},[a("label",[t._v("Bottom of Body")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.rangeBodyBottom,expression:"rangeBodyBottom"}],staticClass:"slide",attrs:{type:"range",min:"0",max:"10",step:"1"},domProps:{value:t.rangeBodyBottom},on:{input:function(e){return t.changeCandle("BodyBottom")},__r:function(e){t.rangeBodyBottom=e.target.value}}})]),a("div",{staticClass:"slidecontainer"},[a("label",[t._v("Bottom Wick")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.rangeWickBottom,expression:"rangeWickBottom"}],staticClass:"slide",attrs:{type:"range",min:"0",max:"10",step:"1"},domProps:{value:t.rangeWickBottom},on:{input:function(e){return t.changeCandle("WickBottom")},__r:function(e){t.rangeWickBottom=e.target.value}}})]),a("p",{staticClass:"candle-color"},[t._v("Color")]),a("label",{staticClass:"switch"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.candleRed,expression:"candleRed"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.candleRed)?t._i(t.candleRed,null)>-1:t.candleRed},on:{change:[function(e){var a=t.candleRed,i=e.target,c=!!i.checked;if(Array.isArray(a)){var n=null,o=t._i(a,n);i.checked?o<0&&(t.candleRed=a.concat([n])):o>-1&&(t.candleRed=a.slice(0,o).concat(a.slice(o+1)))}else t.candleRed=c},function(e){return t.changeCandle("BodyColor")}]}}),a("span",{staticClass:"slider round"})])])])])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-12"},[a("h3",[t._v("Candle Builder")])])}],m={name:"CandleBuilder",data:function(){return{chartTop:250,sliderMax:10,chartTick:20,bodyBase:5,bodyTop:0,bodyBottom:0,wickTop:0,wickBottom:0,candleRed:!1,rangeBodyTop:0,rangeBodyBottom:0,rangeWickTop:0,rangeWickBottom:0}},computed:{cBodyTop:function(){return this.bodyTop},cBodyBottom:function(){return Math.max(this.bodyTop-this.bodyBottom,0)},cWickTop:function(){return Math.max(this.wickTop-this.bodyTop,0)},cWickBottom:function(){return Math.max(this.bodyBottom-this.wickBottom,0)},chartBodyTop:function(){return this.chartTop-this.chartTick*this.bodyTop-this.bodyBase/2},chartBodyHeight:function(){return this.bodyBase+this.cBodyBottom*this.chartTick},chartBodyColor:function(){return this.candleRed?"candle-red":"candle-green"},chartWickTop:function(){return Math.max(0,this.chartBodyTop-this.chartTick*this.cWickTop)},chartWickBottom:function(){return Math.max(0,this.chartBodyHeight+this.chartBodyTop+this.chartTick*this.cWickBottom)}},props:["cbdata"],methods:{makeInteger:function(t){return parseInt(t,10)},returnData:function(){return this.$data},changeCandle:function(t){this["modify".concat(t)](),this.$emit("candleChange",{open:this.candleRed?this.bodyTop:this.bodyBottom,close:this.candleRed?this.bodyBottom:this.bodyTop,high:this.wickTop,low:this.wickBottom})},modifyBodyColor:function(){},modifyBodyTop:function(){this.bodyTop=this.makeInteger(this.rangeBodyTop),this.bodyBottom=this.bodyBottom>this.bodyTop?this.bodyTop:this.bodyBottom,this.wickTop=this.wickTop<this.bodyTop?this.bodyTop:this.wickTop,this.rangeBodyBottom=this.bodyBottom,this.rangeWickTop=this.wickTop},modifyBodyBottom:function(){var t=this.makeInteger(this.rangeBodyBottom);this.bodyBottom=t>this.bodyTop?this.bodyTop:t,this.wickBottom=this.bodyBottom<this.wickBottom?this.bodyBottom:this.wickBottom,this.rangeBodyBottom=this.bodyBottom,this.rangeWickBottom=this.wickBottom},modifyWickTop:function(){var t=this.makeInteger(this.rangeWickTop);this.wickTop=t<this.bodyTop?this.bodyTop:t,this.rangeWickTop=this.wickTop},modifyWickBottom:function(){var t=this.makeInteger(this.rangeWickBottom);this.wickBottom=this.bodyBottom<t?this.bodyBottom:t,this.rangeWickBottom=this.wickBottom}}},v=m,f=(a("e69b"),a("2877")),b=Object(f["a"])(v,u,p,!1,null,null,null),k=b.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"price-chart row"},[t._m(0),a("div",{staticClass:"col-sm-12"},[a("svg",{attrs:{id:"pchart",width:"100%",height:88+40*(t.pcdata.prices.length-1)}},[a("g",[a("rect",{staticClass:"chart-bg",attrs:{width:"100%",height:"100%"}}),a("text",{staticClass:"chart-num",attrs:{x:"0",y:"15"}},[t._v("Price")]),t._l(t.pcdata.prices,function(e,i){return a("text",{key:"price-"+i,staticClass:"chart-num",attrs:{x:"0",y:50+40*i}},[t._v(t._s(e))])}),a("g",t._l(t.pcdata.prices,function(t,e){return a("line",{key:"pline-"+e,staticClass:"chart-pline",attrs:{x1:"50",y1:50+40*e,x2:"100%",y2:50+40*e}})}),0),t._l(t.pcdata.timeIntervals,function(e,i){return a("line",{key:"tline-"+i,staticClass:"chart-tline",attrs:{x1:70+40*i,y1:58+40*(t.pcdata.prices.length-1),x2:70+40*i,y2:50+40*(t.pcdata.prices.length-1)}})}),t._l(t.pcdata.timeIntervals,function(e,i){return a("text",{key:"time-"+i,staticClass:"chart-time",attrs:{x:66+40*i,y:74+40*(t.pcdata.prices.length-1)}},[t._v(t._s(e))])}),a("text",{staticClass:"chart-num",attrs:{x:113+40*(t.pcdata.timeIntervals.length-1),y:74+40*(t.pcdata.prices.length-1)}},[t._v(t._s(t.pcdata.timeLabel))]),a("g",t._l(t.pricePointData.lines,function(t,e){return a("line",{key:"ppline-"+e,staticClass:"chart-ppline",attrs:{x1:t[0],y1:t[1],x2:t[2],y2:t[3]}})}),0),t._l(t.pricePointData.points,function(t,e){return a("circle",{key:"ppoint-"+e,staticClass:"price-point",attrs:{cx:t[0],cy:t[1],r:"5"}})})],2)])])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-sm-12"},[a("h3",[t._v("Price Chart")])])}],w={name:"PriceChart",props:["pcdata"],data:function(){return{pricePointData:[],chartTick:40,pointMargin:70,lineMargin:50,priceBase:10}},created:function(){var t=this;this.pricePointData=this.pcdata.pricePoints.reduce(function(e,a,i,c){var n=t.pointMargin+i*t.chartTick,o=t.lineMargin+(t.priceBase-a)*t.chartTick/2;return e.points.push([n,o]),c[i+1]&&e.lines.push([n,o,t.pointMargin+(i+1)*t.chartTick,t.lineMargin+(t.priceBase-c[i+1])*t.chartTick/2]),e},{lines:[],points:[]})}},B=w,C=(a("8571"),Object(f["a"])(B,y,g,!1,null,null,null)),_=C.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"feedback"},[a("b-button",{staticClass:"feedback-btn",attrs:{size:"sm",disabled:!t.active},on:{click:function(e){return t.revealFeedback()}}},[t._v(t._s(t.buttonTitle))]),a("div",[a("div",{staticClass:"feedback-display"},[t.revealed?a("div",{staticClass:"feedback-message"},[t.correct&&t.revealed?a("div",{staticClass:"feedback-correct"},[t._v("\n            Correct\n          ")]):t._e(),!t.correct&&t.revealed?a("div",{staticClass:"feedback-incorrect"},[t._v("\n            Incorrect\n          ")]):t._e(),a("div",{staticClass:"feedback-message"},[0!==t.feedbackData.open?a("div",{staticClass:"message-open"},[t._v("\n              Adjust the opening price by $"+t._s(t.feedbackData.open)+"\n            ")]):t._e(),0!==t.feedbackData.close?a("div",{staticClass:"message-close"},[t._v("\n              Adjust the closing price by $"+t._s(t.feedbackData.close)+"\n            ")]):t._e(),0!==t.feedbackData.high?a("div",{staticClass:"message-high"},[t._v("\n              Adjust the high price by $"+t._s(t.feedbackData.high)+"\n            ")]):t._e(),0!==t.feedbackData.low?a("div",{staticClass:"message-low"},[t._v("\n              Adjust the low price by $"+t._s(t.feedbackData.low)+"\n            ")]):t._e()])]):t._e()])])],1)},x=[],W={name:"CandleFeedback",props:{active:Boolean,feedbackData:Object,correct:Boolean,checked:Boolean},data:function(){return{revealed:!1,buttonTitle:"Check My Candlestick"}},methods:{revealFeedback:function(){this.active&&(this.revealed=!0)}}},P=W,q=(a("f244"),Object(f["a"])(P,T,x,!1,null,"45b0e12a",null)),R=q.exports,D={name:"CandleRow",props:["candle"],data:function(){return{active:!0,correct:!1,checked:!1,feedbackData:{},checkData:{}}},methods:{isCorrect:function(t){this.feedbackData={open:Math.abs(this.candle.candlechart.csdata.open-t.open),close:Math.abs(this.candle.candlechart.csdata.close-t.close),high:Math.abs(this.candle.candlechart.csdata.high-t.high),low:Math.abs(this.candle.candlechart.csdata.low-t.low)},this.checked=!1,this.correct=0===this.feedbackData.open&&0===this.feedbackData.close&&0===this.feedbackData.high&&0===this.feedbackData.low,this.$emit("candle-correct",this.correct)}},components:{CandleBuilder:k,CandleFeedback:R,PriceChart:_}},M=D,j=(a("8b8d"),Object(f["a"])(M,l,h,!1,null,null,null)),I=j.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",{staticClass:"question-row"},[t.active?t._e():a("b-col",{attrs:{cols:"12"}},[a("h4",[t._v("Question")]),a("span",{staticClass:"prompt"},[t._v("Correctly complete the activity above to unlock this question.")])]),t.active?a("b-col",{attrs:{cols:"12",md:"9"}},[a("QuestionOpen",{attrs:{active:t.active,question:t.question.question},on:{"valid-change":function(e){return t.activateFeedback(e)}}})],1):t._e(),t.active?a("b-col",{attrs:{cols:"12",md:"3"}},[a("QuestionFeedback",{attrs:{active:t.feedbackActive,feedback:t.question.feedback}})],1):t._e()],1)},A=[],$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-row",{staticClass:"question-open"},[a("b-col",{attrs:{md:"4"}},[t._v(t._s(t.question))]),a("b-col",{attrs:{md:"8"}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.response,expression:"response"}],staticClass:"response",attrs:{type:"text"},domProps:{value:t.response},on:{keyup:t.isValid,input:function(e){e.target.composing||(t.response=e.target.value)}}}),a("span",[t._v(t._s(t.response.length))])])],1)},F=[],L={name:"QuestionOpen",props:["active","question"],data:function(){return{valid:!1,minimumChar:50,instruction:"Question goes here",response:""}},methods:{isValid:function(){var t=this.valid;this.valid=this.response.length>=this.minimumChar,t!==this.valid&&this.validChange()},validChange:function(){this.$emit("valid-change",this.valid)}}},Q=L,E=(a("adf4"),Object(f["a"])(Q,$,F,!1,null,"1b7f70f6",null)),H=E.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"feedback"},[a("b-button",{attrs:{size:"sm",disabled:t.activeFeedback},on:{click:function(e){return t.revealFeedback()}}},[t._v(t._s(t.buttonTitle))]),a("div",{staticClass:"feedback-display"},[t.revealed?a("div",{staticClass:"feedback-message"},[t._v("\n        "+t._s(t.feedback.correct)+"\n    ")]):t._e(),t.revealed?t._e():a("div",{staticClass:"feedback-overlay"},[t._v("\n      "+t._s(t.inactiveMessage)+"\n    ")])])],1)},N=[],G={name:"QuestionFeedback",props:{active:Boolean,feedback:Object},data:function(){return{revealed:!1,message:"this is a test",inactiveMessage:"You must type 50 characters or more of your own response to compare.",buttonTitle:"Compare My Response"}},computed:{activeFeedback:function(){return!this.active}},methods:{revealFeedback:function(){this.active&&(this.revealed=!0)}}},z=G,J=(a("9d71"),Object(f["a"])(z,S,N,!1,null,"7d3e3b14",null)),V=J.exports,Y={name:"QuestionRow",props:["question","active"],data:function(){return{feedbackActive:!1}},components:{QuestionOpen:H,QuestionFeedback:V},methods:{activateFeedback:function(t){this.feedbackActive=t}}},K=Y,U=(a("85c7"),Object(f["a"])(K,O,A,!1,null,null,null)),X=U.exports,Z={name:"ActivityGroup",props:["activity"],data:function(){return{candlesCorrect:[],openQuestion:!1}},components:{CandleRow:I,QuestionRow:X},created:function(){this.candlesCorrect=Array.from(this.activity.candles).fill(!1)},methods:{checkCandles:function(t,e){this.candlesCorrect[e]=t,this.candlesCorrect.every(function(t){return!0===t})&&this.candlesCorrect.length===this.activity.candles.length&&(this.openQuestion=!0)}}},tt=Z,et=(a("dc89"),Object(f["a"])(tt,r,d,!1,null,null,null)),at=et.exports,it={activities:[{id:"samecandle",title:"Candle Builder Activity #1",candles:[{pricechart:{},candlechart:{theme:"dark",cdata:{theme:"dark",prices:[10,8,6,4,2,0],timeIntervals:["10","11","12","13","14","15"],timeLabel:"Hr",pricePoints:[4,5,2,8,3,6]},csdata:{open:4,close:6,high:8,low:2,candleRed:!1}},feedback:{}},{pricechart:{},candlechart:{theme:"dark",cdata:{theme:"dark",prices:[10,8,6,4,2,0],timeIntervals:["2/22","2/25","2/26","2/27","2/28"],timeLabel:"Day",pricePoints:[4,2,3,8,6]},csdata:{open:4,close:6,high:8,low:2,candleRed:!1}},feedback:{}}],questions:[{instruction:"Build the candles in this group correctly to view the question.",question:"Why are the two candles the same even though the two charts are different time frames?",feedback:{correct:"Even though there are two different time frames, the two candles have the exact same open, close, high and low values."}}]},{id:"nowick",title:"Candle Builder Activity #2",candles:[{pricechart:{},candlechart:{theme:"dark",cdata:{theme:"dark",prices:[10,8,6,4,2,0],timeIntervals:["2/22","2/25","2/26","2/27","2/28"],timeLabel:"Day",pricePoints:[10,4,3,10,3]},csdata:{open:10,close:3,high:10,low:3,candleRed:!0}},feedback:{}},{pricechart:{},candlechart:{theme:"dark",cdata:{theme:"dark",prices:[10,8,6,4,2,0],timeIntervals:["10","11","12","13","14","15"],timeLabel:"Hr",pricePoints:[5,5,7,6,7,8]},csdata:{open:5,close:8,high:8,low:5,candleRed:!1}},feedback:{}}],questions:[{instruction:"Build the candles in this group correctly to view the question.",question:"What does a candlestick tell you when no wick is showing?",feedback:{correct:"When no wick is showing, it means that the high and low are also the opening and closing value of the candle."}}]},{id:"differentcolor",title:"Candle Builder Activity #3",candles:[{pricechart:{},candlechart:{theme:"dark",cdata:{theme:"dark",prices:[10,8,6,4,2,0],timeIntervals:["10","11","12","13","14","15"],timeLabel:"Hr",pricePoints:[3,1,5,6,4,9]},csdata:{open:3,close:9,high:9,low:1,candleRed:!1}},feedback:{}},{pricechart:{},candlechart:{theme:"dark",cdata:{theme:"dark",prices:[10,8,6,4,2,0],timeIntervals:["2/22","2/25","2/26","2/27","2/28"],timeLabel:"Day",pricePoints:[9,1,5,1,3]},csdata:{open:9,close:3,high:9,low:1,candleRed:!0}},feedback:{}}],questions:[{instruction:"Build the candles in this group correctly to view the question.",question:"If two candles are the same except for the color of the body, what does it mean?",feedback:{correct:"Two identical candles mean that the high and low values were the same, but the opening and closing values are reversed. The bottom of the green candle is the opening and the top the closing. The bottom of the red candle is the closing and the top the opening."}}]},{id:"shortbodywick",title:"Candle Builder Activity #4",candles:[{pricechart:{},candlechart:{theme:"dark",cdata:{theme:"dark",prices:[10,8,6,4,2,0],timeIntervals:["10","11","12","13","14","15"],timeLabel:"Hr",pricePoints:[9,10,10,9,7,8]},csdata:{open:9,close:8,high:10,low:7,candleRed:!0}},feedback:{}},{pricechart:{},candlechart:{theme:"dark",cdata:{theme:"dark",prices:[10,8,6,4,2,0],timeIntervals:["2/22","2/25","2/26","2/27","2/28"],timeLabel:"Day",pricePoints:[3,2,3,4,5]},csdata:{open:3,close:5,high:5,low:2,candleRed:!1}},feedback:{}}],questions:[{instruction:"Build the candles in this group correctly to view the question.",question:"What do short candle bodies with short wicks tell you about price in the represented time period?",feedback:{correct:"Short bodies with short wicks tell you that price did not change much in the represented time period."}}]},{id:"shortbodylongwick",title:"Candle Builder Activity #5",candles:[{pricechart:{},candlechart:{theme:"dark",cdata:{theme:"dark",prices:[10,8,6,4,2,0],timeIntervals:["10","11","12","13","14","15"],timeLabel:"Hr",pricePoints:[4,2,1,7,10,6]},csdata:{open:4,close:6,high:10,low:1,candleRed:!1}},feedback:{}},{pricechart:{},candlechart:{theme:"dark",cdata:{theme:"dark",prices:[10,8,6,4,2,0],timeIntervals:["2/22","2/25","2/26","2/27","2/28"],timeLabel:"Day",pricePoints:[7,9,2,1,6]},csdata:{open:7,close:6,high:9,low:1,candleRed:!0}},feedback:{}}],questions:[{instruction:"Build the candles in this group correctly to view the question.",question:"What do short candle bodies with long wicks tell you about price in the represented time period?",feedback:{correct:"Short bodies and long wicks tell you that price fluctuated greatly in the represented time period, but the opening and closing price were not very different."}}]},{id:"longbodywick",title:"Candle Builder Activity #6",candles:[{pricechart:{},candlechart:{theme:"dark",cdata:{theme:"dark",prices:[10,8,6,4,2,0],timeIntervals:["10","11","12","13","14","15"],timeLabel:"Hr",pricePoints:[2,5,2,8,3,10]},csdata:{open:2,close:10,high:10,low:2,candleRed:!1}},feedback:{}},{pricechart:{},candlechart:{theme:"dark",cdata:{theme:"dark",prices:[10,8,6,4,2,0],timeIntervals:["2/22","2/25","2/26","2/27","2/28"],timeLabel:"Day",pricePoints:[9,4,5,1,2]},csdata:{open:9,close:2,high:9,low:1,candleRed:!0}},feedback:{}}],questions:[{instruction:"Build the candles in this group correctly to view the question.",question:"What do long candle bodies with small or no wicks tell you about the change of price in the given time period?",feedback:{correct:"Long candle bodies tell you that the opening and closing prices moved a great distance. Green bodies indicate that the closing price was much greater than the opening and red bodies indicate that the closing price was a lot less that the opening."}}]}]},ct=it,nt={name:"app",data:function(){return ct},components:{ActivityGroup:at}},ot=nt,st=(a("034f"),Object(f["a"])(ot,o,s,!1,null,null,null)),rt=st.exports;a("357f");a.d(e,"eventBus",function(){return dt}),i["a"].config.productionTip=!1;var dt=new i["a"];new i["a"]({render:function(t){return t(rt)}}).$mount("#app")},"64a9":function(t,e,a){},8571:function(t,e,a){"use strict";var i=a("0a8d0"),c=a.n(i);c.a},"85c7":function(t,e,a){"use strict";var i=a("a114"),c=a.n(i);c.a},"8b8d":function(t,e,a){"use strict";var i=a("d565"),c=a.n(i);c.a},"9d71":function(t,e,a){"use strict";var i=a("2c1c"),c=a.n(i);c.a},a114:function(t,e,a){},adf4:function(t,e,a){"use strict";var i=a("f46c"),c=a.n(i);c.a},b0ce:function(t,e,a){},d565:function(t,e,a){},dc89:function(t,e,a){"use strict";var i=a("e2e8"),c=a.n(i);c.a},e2e8:function(t,e,a){},e69b:function(t,e,a){"use strict";var i=a("b0ce"),c=a.n(i);c.a},f244:function(t,e,a){"use strict";var i=a("09b2"),c=a.n(i);c.a},f46c:function(t,e,a){}});
//# sourceMappingURL=app.d2937deb.js.map
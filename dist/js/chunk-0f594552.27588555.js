(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f594552"],{1148:function(e,t,a){"use strict";var r=a("a691"),n=a("1d80");e.exports="".repeat||function(e){var t=String(n(this)),a="",o=r(e);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(a+=t);return a}},"12aa":function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var r=a("2b0e"),n=a("b42e"),o=a("c637"),i=a("a723"),s=a("d82f"),c=a("cf75"),l=a("1947");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){u(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var p=Object(c["d"])(Object(s["m"])(b(b({},Object(s["k"])(l["b"],["size"])),{},{ariaRole:Object(c["c"])(i["u"],"group"),size:Object(c["c"])(i["u"]),tag:Object(c["c"])(i["u"],"div"),vertical:Object(c["c"])(i["g"],!1)})),o["k"]),h=r["default"].extend({name:o["k"],functional:!0,props:p,render:function(e,t){var a=t.props,r=t.data,o=t.children;return e(a.tag,Object(n["a"])(r,{class:u({"btn-group":!a.vertical,"btn-group-vertical":a.vertical},"btn-group-".concat(a.size),a.size),attrs:{role:a.ariaRole}}),o)}})},"25f0":function(e,t,a){"use strict";var r=a("6eeb"),n=a("825a"),o=a("d039"),i=a("ad6d"),s="toString",c=RegExp.prototype,l=c[s],d=o((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),b=l.name!=s;(d||b)&&r(RegExp.prototype,s,(function(){var e=n(this),t=String(e.source),a=e.flags,r=String(void 0===a&&e instanceof RegExp&&!("flags"in c)?i.call(e):a);return"/"+t+"/"+r}),{unsafe:!0})},"408a":function(e,t,a){var r=a("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=r(e))throw TypeError("Incorrect invocation");return+e}},"685f":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",{staticClass:"match-height"},[a("b-col",{attrs:{cols:"12"}},[a("NewMembersVsWithDeposits")],1)],1)},n=[],o=a("a15b7"),i=a("b28b"),s=a("aa59"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",{attrs:{"no-body":""}},[a("b-card-header",[a("div",[a("b-card-title",{staticClass:"mb-1"},[e._v(" Balance ")]),a("b-card-sub-title",[e._v("Commercial networks & enterprises")])],1),a("div",{staticClass:"d-flex align-items-center flex-wrap mt-sm-0 mt-1"},[a("h5",{staticClass:"font-weight-bolder mb-0 mr-1"},[e._v(" $ 100,000 ")]),a("b-badge",{attrs:{variant:"light-secondary"}},[a("feather-icon",{staticClass:"text-danger mr-25",attrs:{icon:"ArrowDownIcon",size:"16"}}),a("span",{staticClass:"align-middle"},[e._v("20%")])],1)],1)]),a("b-card-body",[a("vue-apex-charts",{attrs:{type:"line",height:"400",options:e.apexChatData.lineChartSimple.chartOptions,series:e.apexChatData.lineChartSimple.series}})],1)],1)},l=[],d=a("b885"),b=a("205f"),u=a("e98b"),p=a("6197"),h=a("4968"),f=a("ba06"),m=a("1321"),g=a.n(m),O=(a("d3b7"),a("25f0"),a("b680"),a("1dff"));function x(e,t){var a=0,r=[];while(a<e){var n="w".concat((a+1).toString()),o=Math.floor(Math.random()*(t.max-t.min+1))+t.min;r.push({x:n,y:o}),a++}return r}var C={column:{series1:"#826af9",series2:"#d2b0ff",bg:"#f8d3ff"},success:{shade_100:"#7eefc7",shade_200:"#06774f"},donut:{series1:"#ffe700",series2:"#00d4bd",series3:"#826bf8",series4:"#2b9bf4",series5:"#FFA1A1"},area:{series3:"#a4f8cd",series2:"#60f2ca",series1:"#2bdac7"}},y={lineChartSimple:{series:[{data:[280,200,220,180,270,250,70,90,200,150,160,100,150,100,50]}],chartOptions:{chart:{zoom:{enabled:!1},toolbar:{show:!1}},markers:{strokeWidth:7,strokeOpacity:1,strokeColors:[O["b"].light],colors:[O["b"].warning]},colors:[O["b"].warning],dataLabels:{enabled:!1},stroke:{curve:"straight"},grid:{xaxis:{lines:{show:!0}}},tooltip:{custom:function(e){return'<div class="px-1 py-50"><span>'.concat(e.series[e.seriesIndex][e.dataPointIndex],"%</span></div>")}},xaxis:{categories:["7/12","8/12","9/12","10/12","11/12","12/12","13/12","14/12","15/12","16/12","17/12","18/12","19/12","20/12","21/12"]},yaxis:{}}},lineAreaChartSpline:{series:[{name:"Visits",data:[100,120,90,170,130,160,140,240,220,180,270,280,375]},{name:"Clicks",data:[60,80,70,110,80,100,90,180,160,140,200,220,275]},{name:"Sales",data:[20,40,30,70,40,60,50,140,120,100,140,180,220]}],chartOptions:{chart:{toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{show:!1,curve:"straight"},legend:{show:!0,position:"top",horizontalAlign:"left",fontSize:"14px",fontFamily:"Montserrat"},grid:{xaxis:{lines:{show:!0}}},xaxis:{categories:["7/12","8/12","9/12","10/12","11/12","12/12","13/12","14/12","15/12","16/12","17/12","18/12","19/12","20/12"]},yaxis:{},fill:{opacity:1,type:"solid"},tooltip:{shared:!1},colors:[C.area.series3,C.area.series2,C.area.series1]}},columnChart:{series:[{name:"Apple",data:[90,120,55,100,80,125,175,70,88,180]},{name:"Samsung",data:[85,100,30,40,95,90,30,110,62,20]}],chartOptions:{chart:{stacked:!0,toolbar:{show:!1}},colors:[C.column.series1,C.column.series2],plotOptions:{bar:{columnWidth:"15%",colors:{backgroundBarColors:[C.column.bg,C.column.bg,C.column.bg,C.column.bg,C.column.bg],backgroundBarRadius:10}}},dataLabels:{enabled:!1},legend:{show:!0,position:"top",fontSize:"14px",fontFamily:"Montserrat",horizontalAlign:"left"},stroke:{show:!0,colors:["transparent"]},grid:{xaxis:{lines:{show:!0}}},xaxis:{categories:["7/12","8/12","9/12","10/12","11/12","12/12","13/12","14/12","15/12","16/12"]},yaxis:{},fill:{opacity:1}}},barChart:{series:[{data:[700,350,480,600,210,550,150]}],chartOptions:{chart:{toolbar:{show:!1}},colors:O["b"].info,plotOptions:{bar:{horizontal:!0,barHeight:"30%",endingShape:"rounded"}},grid:{xaxis:{lines:{show:!1}}},dataLabels:{enabled:!1},xaxis:{categories:["MON, 11","THU, 14","FRI, 15","MON, 18","WED, 20","FRI, 21","MON, 23"]},yaxis:{}}},candlestickChart:{series:[{data:[{x:new Date(15387786e5),y:[150,170,50,100]},{x:new Date(15387804e5),y:[200,400,170,330]},{x:new Date(15387822e5),y:[330,340,250,280]},{x:new Date(1538784e6),y:[300,330,200,320]},{x:new Date(15387858e5),y:[320,450,280,350]},{x:new Date(15387876e5),y:[300,350,80,250]},{x:new Date(15387894e5),y:[200,330,170,300]},{x:new Date(15387912e5),y:[200,220,70,130]},{x:new Date(1538793e6),y:[220,270,180,250]},{x:new Date(15387948e5),y:[200,250,80,100]},{x:new Date(15387966e5),y:[150,170,50,120]},{x:new Date(15387984e5),y:[110,450,10,420]},{x:new Date(15388002e5),y:[400,480,300,320]},{x:new Date(1538802e6),y:[380,480,350,450]}]}],chartOptions:{chart:{toolbar:{show:!1}},xaxis:{type:"datetime"},yaxis:{tooltip:{enabled:!0}},grid:{xaxis:{lines:{show:!0}}},legend:{show:!1},plotOptions:{candlestick:{colors:{upward:O["b"].success,downward:O["b"].danger}},bar:{columnWidth:"40%"}}}},scatterChart:{series:[{name:"Angular",data:[[5.4,170],[5.4,100],[6.3,170],[5.7,140],[5.9,130],[7,150],[8,120],[9,170],[10,190],[11,220],[12,170],[13,230]]},{name:"Vue",data:[[14,220],[15,280],[16,230],[18,320],[17.5,280],[19,250],[20,350],[20.5,320],[20,320],[19,280],[17,280],[22,300],[18,120]]},{name:"React",data:[[14,290],[13,190],[20,220],[21,350],[21.5,290],[22,220],[23,140],[19,400],[20,200],[22,90],[20,120]]}],chartOptions:{chart:{zoom:{enabled:!0,type:"xy"},toolbar:{show:!1}},grid:{xaxis:{lines:{show:!0}}},colors:[O["b"].warning,O["b"].primary,O["b"].success],legend:{show:!0,position:"top",horizontalAlign:"left"},xaxis:{tickAmount:10,labels:{formatter:function(e){return parseFloat(e).toFixed(1)}}},yaxis:{}}},heatMapChart:{series:[{name:"SUN",data:x(24,{min:0,max:60})},{name:"MON",data:x(24,{min:0,max:60})},{name:"TUE",data:x(24,{min:0,max:60})},{name:"WED",data:x(24,{min:0,max:60})},{name:"THU",data:x(24,{min:0,max:60})},{name:"FRI",data:x(24,{min:0,max:60})},{name:"SAT",data:x(24,{min:0,max:60})}],chartOptions:{dataLabels:{enabled:!1},legend:{show:!0,position:"bottom"},colors:["#7367F0"],plotOptions:{heatmap:{enableShades:!1,colorScale:{ranges:[{from:0,to:10,name:"0-10",color:"#b9b3f8"},{from:11,to:20,name:"10-20",color:"#aba4f6"},{from:21,to:30,name:"20-30",color:"#9d95f5"},{from:31,to:40,name:"30-40",color:"#8f85f3"},{from:41,to:50,name:"40-50",color:"#8176f2"},{from:51,to:60,name:"50-60",color:"#7367f0"}]}}},xaxis:{labels:{show:!1},axisBorder:{show:!1},axisTicks:{show:!1}},chart:{height:350,type:"heatmap",toolbar:{show:!1}}}},donutChart:{series:[85,16,50,50],chartOptions:{legend:{show:!0,position:"bottom",fontSize:"14px",fontFamily:"Montserrat"},colors:[C.donut.series1,C.donut.series5,C.donut.series3,C.donut.series2],dataLabels:{enabled:!0,formatter:function(e){return"".concat(parseInt(e),"%")}},plotOptions:{pie:{donut:{labels:{show:!0,name:{fontSize:"2rem",fontFamily:"Montserrat"},value:{fontSize:"1rem",fontFamily:"Montserrat",formatter:function(e){return"".concat(parseInt(e),"%")}},total:{show:!0,fontSize:"1.5rem",label:"Operational",formatter:function(){return"31%"}}}}}},labels:["Operational","Networking","Hiring","R&D"],responsive:[{breakpoint:992,options:{chart:{height:380},legend:{position:"bottom"}}},{breakpoint:576,options:{chart:{height:320},plotOptions:{pie:{donut:{labels:{show:!0,name:{fontSize:"1.5rem"},value:{fontSize:"1rem"},total:{fontSize:"1.5rem"}}}}},legend:{show:!0}}}]}},radialBarChart:{series:[80,50,35],chartOptions:{colors:[C.donut.series1,C.donut.series2,C.donut.series4],plotOptions:{radialBar:{size:185,hollow:{size:"25%"},track:{margin:15},dataLabels:{name:{fontSize:"2rem",fontFamily:"Montserrat"},value:{fontSize:"1rem",fontFamily:"Montserrat"},total:{show:!0,fontSize:"1rem",label:"Comments",formatter:function(){return"80%"}}}}},legend:{show:!0,position:"bottom",horizontalAlign:"center"},stroke:{lineCap:"round"},labels:["Comments","Replies","Shares"]}},radarChart:{series:[{name:"iPhone 11",data:[41,64,81,60,42,42,33,23]},{name:"Samsung s20",data:[65,46,42,25,58,63,76,43]}],chartOptions:{chart:{toolbar:{show:!1},dropShadow:{enabled:!1,blur:8,left:1,top:1,opacity:.2}},legend:{show:!0,fontSize:"14px",fontFamily:"Montserrat"},yaxis:{show:!1},colors:[C.donut.series1,C.donut.series3],xaxis:{categories:["Battery","Brand","Camera","Memory","Storage","Display","OS","Price"]},fill:{opacity:[1,.8]},stroke:{show:!1,width:0},markers:{size:0},grid:{show:!1}}}},v={components:{VueApexCharts:g.a,BCardHeader:d["a"],BCard:b["a"],BBadge:u["a"],BCardBody:p["a"],BCardTitle:h["a"],BCardSubTitle:f["a"]},data:function(){return{apexChatData:y}}},w=v,j=a("2877"),D=Object(j["a"])(w,c,l,!1,null,null,null),B=D.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",{attrs:{"no-body":""}},[a("b-card-header",[a("div",[a("b-card-title",{staticClass:"mb-1"},[e._v(" Line Chart ")]),a("b-card-sub-title",[e._v("Commercial networks")])],1),a("div",{staticClass:"d-flex align-items-center"},[a("feather-icon",{attrs:{icon:"CalendarIcon",size:"16"}}),a("flat-pickr",{staticClass:"form-control flat-picker bg-transparent border-0 shadow-none",attrs:{config:{mode:"range"},placeholder:"YYYY-MM-DD"},model:{value:e.rangePicker,callback:function(t){e.rangePicker=t},expression:"rangePicker"}})],1)]),a("b-card-body",[a("vue-apex-charts",{attrs:{type:"area",height:"400",options:e.apexChatData.lineAreaChartSpline.chartOptions,series:e.apexChatData.lineAreaChartSpline.series}})],1)],1)},P=[],S=a("c38f"),_=a.n(S),M={components:{BCard:b["a"],VueApexCharts:g.a,BCardHeader:d["a"],BCardBody:p["a"],BCardTitle:h["a"],BCardSubTitle:f["a"],flatPickr:_.a},data:function(){return{apexChatData:y,rangePicker:["2019-05-01","2019-05-10"]}}},A=M,z=Object(j["a"])(A,k,P,!1,null,null,null),E=z.exports,F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",{attrs:{"no-body":""}},[a("b-card-header",[a("b-card-title",{staticClass:"mb-50"},[e._v(" Data Science ")]),a("div",{staticClass:"d-flex align-items-center"},[a("feather-icon",{attrs:{icon:"CalendarIcon",size:"16"}}),a("flat-pickr",{staticClass:"form-control flat-picker bg-transparent border-0 shadow-none",attrs:{config:{mode:"range"},placeholder:"YYYY-MM-DD"},model:{value:e.rangePicker,callback:function(t){e.rangePicker=t},expression:"rangePicker"}})],1)],1),a("b-card-body",[a("vue-apex-charts",{attrs:{type:"bar",height:"400",options:e.apexChatData.columnChart.chartOptions,series:e.apexChatData.columnChart.series}})],1)],1)},T=[],N={components:{BCard:b["a"],BCardBody:p["a"],BCardHeader:d["a"],VueApexCharts:g.a,flatPickr:_.a,BCardTitle:h["a"]},data:function(){return{apexChatData:y,rangePicker:["2019-05-01","2019-05-10"]}}},R=N,V=Object(j["a"])(R,F,T,!1,null,null,null),Y=V.exports,H=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",{attrs:{"no-body":""}},[a("b-card-header",[a("div",[a("b-card-sub-title",{staticClass:"mb-25"},[e._v(" Balance ")]),a("b-card-title",{staticClass:"font-weight-bolder"},[e._v(" $74,382.72 ")])],1),a("div",{staticClass:"d-flex align-items-center"},[a("feather-icon",{attrs:{icon:"CalendarIcon",size:"16"}}),a("flat-pickr",{staticClass:"form-control flat-picker bg-transparent border-0 shadow-none",attrs:{config:{mode:"range"},placeholder:"YYYY-MM-DD"},model:{value:e.rangePicker,callback:function(t){e.rangePicker=t},expression:"rangePicker"}})],1)]),a("b-card-body",[a("vue-apex-charts",{attrs:{type:"bar",height:"350",options:e.apexChatData.barChart.chartOptions,series:e.apexChatData.barChart.series}})],1)],1)},I=[],L={components:{VueApexCharts:g.a,BCard:b["a"],BCardHeader:d["a"],flatPickr:_.a,BCardBody:p["a"],BCardSubTitle:f["a"],BCardTitle:h["a"]},data:function(){return{apexChatData:y,rangePicker:["2019-05-01","2019-05-10"]}}},$=L,W=Object(j["a"])($,H,I,!1,null,null,null),U=W.exports,G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",{attrs:{"no-body":""}},[a("b-card-header",[a("div",[a("b-card-title",{staticClass:"mb-50"},[e._v(" Stocks Prices ")]),a("b-card-text",{staticClass:"mb-0"},[e._v(" $50,863.98 ")])],1),a("div",{staticClass:"d-flex align-items-center"},[a("feather-icon",{attrs:{icon:"CalendarIcon",size:"16"}}),a("flat-pickr",{staticClass:"form-control flat-picker bg-transparent border-0 shadow-none",attrs:{config:{mode:"range"},placeholder:"YYYY-MM-DD"},model:{value:e.rangePicker,callback:function(t){e.rangePicker=t},expression:"rangePicker"}})],1)]),a("b-card-body",[a("vue-apex-charts",{attrs:{type:"candlestick",height:"400",options:e.apexChatData.candlestickChart.chartOptions,series:e.apexChatData.candlestickChart.series}})],1)],1)},J=[],q=a("d6e4"),K={components:{BCard:b["a"],VueApexCharts:g.a,BCardBody:p["a"],BCardHeader:d["a"],BCardTitle:h["a"],BCardText:q["a"],flatPickr:_.a},data:function(){return{apexChatData:y,rangePicker:["2019-05-01","2019-05-10"]}}},Q=K,X=Object(j["a"])(Q,G,J,!1,null,null,null),Z=X.exports,ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",{attrs:{"no-body":""}},[a("b-card-header",[a("h4",{staticClass:"card-title mb-50"},[e._v(" New Technologies Data ")]),a("b-button-group",[a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[e._v(" Daily ")]),a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[e._v(" Monthly ")]),a("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"}},[e._v(" Yearly ")])],1)],1),a("b-card-body",[a("vue-apex-charts",{attrs:{type:"scatter",height:"400",options:e.apexChatData.scatterChart.chartOptions,series:e.apexChatData.scatterChart.series}})],1)],1)},te=[],ae=a("1947"),re=a("12aa"),ne=a("e009"),oe={components:{BCard:b["a"],VueApexCharts:g.a,BCardHeader:d["a"],BCardBody:p["a"],BButton:ae["a"],BButtonGroup:re["a"]},directives:{Ripple:ne["a"]},data:function(){return{apexChatData:y}}},ie=oe,se=Object(j["a"])(ie,ee,te,!1,null,null,null),ce=se.exports,le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",{attrs:{"no-body":""}},[a("b-card-header",[a("b-card-title",[e._v("Daily Sales States")]),a("b-dropdown",{attrs:{variant:"link","toggle-class":"p-0","no-caret":""},scopedSlots:e._u([{key:"button-content",fn:function(){return[a("feather-icon",{staticClass:"text-body",attrs:{icon:"MoreVerticalIcon"}})]},proxy:!0}])},[a("b-dropdown-item",[e._v(" Last 28 Days ")]),a("b-dropdown-item",[e._v(" Last Month ")]),a("b-dropdown-item",[e._v(" Last Year ")])],1)],1),a("b-card-body",[a("vue-apex-charts",{attrs:{type:"heatmap",height:"350",options:e.apexChatData.heatMapChart.chartOptions,series:e.apexChatData.heatMapChart.series}})],1)],1)},de=[],be=a("dd9a"),ue=a("9eaa"),pe={components:{BCard:b["a"],BCardHeader:d["a"],BCardBody:p["a"],VueApexCharts:g.a,BCardTitle:h["a"],BDropdown:be["a"],BDropdownItem:ue["a"]},data:function(){return{apexChatData:y}}},he=pe,fe=Object(j["a"])(he,le,de,!1,null,null,null),me=fe.exports,ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",[a("b-card-title",{staticClass:"mb-1"},[e._v(" Expense Ratio ")]),a("b-card-sub-title",{staticClass:"mb-2"},[e._v(" Spending on various categories ")]),a("vue-apex-charts",{attrs:{type:"donut",height:"350",options:e.apexChatData.donutChart.chartOptions,series:e.apexChatData.donutChart.series}})],1)},Oe=[],xe={components:{VueApexCharts:g.a,BCard:b["a"],BCardTitle:h["a"],BCardSubTitle:f["a"]},data:function(){return{apexChatData:y}}},Ce=xe,ye=Object(j["a"])(Ce,ge,Oe,!1,null,null,null),ve=ye.exports,we=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",{attrs:{"no-body":""}},[a("b-card-header",[a("b-card-title",{staticClass:"mb-sm-0 mb-1"},[e._v(" Statistics ")])],1),a("b-card-body",[a("vue-apex-charts",{attrs:{type:"radialBar",height:"400",options:e.apexChatData.radialBarChart.chartOptions,series:e.apexChatData.radialBarChart.series}})],1)],1)},je=[],De={components:{VueApexCharts:g.a,BCard:b["a"],BCardTitle:h["a"],BCardBody:p["a"],BCardHeader:d["a"]},data:function(){return{apexChatData:y}}},Be=De,ke=Object(j["a"])(Be,we,je,!1,null,null,null),Pe=ke.exports,Se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",{attrs:{title:"Mobile Comparison"}},[a("vue-apex-charts",{attrs:{type:"radar",height:"400",options:e.apexChatData.radarChart.chartOptions,series:e.apexChatData.radarChart.series}})],1)},_e=[],Me={components:{BCard:b["a"],VueApexCharts:g.a},data:function(){return{apexChatData:y}}},Ae=Me,ze=Object(j["a"])(Ae,Se,_e,!1,null,null,null),Ee=ze.exports,Fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",{attrs:{"no-body":""}},[a("b-card-header",[a("div",[a("b-card-title",{staticClass:"mb-1"},[e._v(" New Members/New Members with Deposit ")])],1)]),a("b-card-body",[a("vue-apex-charts",{attrs:{type:"line",height:"400",options:e.chartOptions,series:e.series}})],1)],1)},Te=[],Ne={components:{BCard:b["a"],VueApexCharts:g.a,BCardHeader:d["a"],BCardBody:p["a"],BCardTitle:h["a"],BCardSubTitle:f["a"],flatPickr:_.a},data:function(){return{apexChatData:y,rangePicker:["2022-05-01","2022-05-10"],series:[{name:"New Members",type:"column",data:[440,505,414,671,227,413]},{name:"New Members With Deposit",type:"line",data:[23,42,35,27,43,22]}],chartOptions:{chart:{height:350,type:"line"},stroke:{width:[0,4]},dataLabels:{enabled:!0,enabledOnSeries:[1]},labels:["01-15 Feb 2022","16-28 Feb 2022","01-15 Mar 2022","16-31 Mar 2022","01-15 Apr 2022","15-30 Apr 2022"],xaxis:{},yaxis:[{title:{text:"New Members"}},{opposite:!0,title:{text:"New Members With Deposit"}}]}}}},Re=Ne,Ve=Object(j["a"])(Re,Fe,Te,!1,null,null,null),Ye=Ve.exports,He={components:{BRow:o["a"],BCol:i["a"],BLink:s["a"],ApexLineChart:B,ApexLineAreaChart:E,ApexDataBarChart:Y,ApexBarChart:U,ApexCandlestickChart:Z,ApexScatterChart:ce,ApexHeatMapChart:me,ApexDonutChart:ve,ApexRadarChart:Ee,ApexRadialBarChart:Pe,NewMembersVsWithDeposits:Ye}},Ie=He,Le=(a("d8ac"),Object(j["a"])(Ie,r,n,!1,null,null,null));t["default"]=Le.exports},a15b7:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));var r=a("b42e"),n=a("c637"),o=a("a723"),i=a("2326"),s=a("228e"),c=a("6c06"),l=a("b508"),d=a("d82f"),b=a("cf75"),u=a("fa73");function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){f(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var m=["start","end","center"],g=Object(l["a"])((function(e,t){return t=Object(u["h"])(Object(u["g"])(t)),t?Object(u["c"])(["row-cols",e,t].filter(c["a"]).join("-")):null})),O=Object(l["a"])((function(e){return Object(u["c"])(e.replace("cols",""))})),x=[],C=function(){var e=Object(s["b"])().reduce((function(e,t){return e[Object(b["g"])(t,"cols")]=Object(b["c"])(o["p"]),e}),Object(d["c"])(null));return x=Object(d["h"])(e),Object(b["d"])(Object(d["m"])(h(h({},e),{},{alignContent:Object(b["c"])(o["u"],null,(function(e){return Object(i["a"])(Object(i["b"])(m,"between","around","stretch"),e)})),alignH:Object(b["c"])(o["u"],null,(function(e){return Object(i["a"])(Object(i["b"])(m,"between","around"),e)})),alignV:Object(b["c"])(o["u"],null,(function(e){return Object(i["a"])(Object(i["b"])(m,"baseline","stretch"),e)})),noGutters:Object(b["c"])(o["g"],!1),tag:Object(b["c"])(o["u"],"div")})),n["Ob"])},y={name:n["Ob"],functional:!0,get props(){return delete this.props,this.props=C(),this.props},render:function(e,t){var a,n=t.props,o=t.data,i=t.children,s=n.alignV,c=n.alignH,l=n.alignContent,d=[];return x.forEach((function(e){var t=g(O(e),n[e]);t&&d.push(t)})),d.push((a={"no-gutters":n.noGutters},f(a,"align-items-".concat(s),s),f(a,"justify-content-".concat(c),c),f(a,"align-content-".concat(l),l),a)),e(n.tag,Object(r["a"])(o,{staticClass:"row",class:d}),i)}}},b28b:function(e,t,a){"use strict";a.d(t,"a",(function(){return w}));var r=a("b42e"),n=a("c637"),o=a("a723"),i=a("992e"),s=a("2326"),c=a("228e"),l=a("6c06"),d=a("7b1e"),b=a("b508"),u=a("d82f"),p=a("cf75"),h=a("fa73");function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){g(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var O=["auto","start","end","center","baseline","stretch"],x=function(e,t,a){var r=e;if(!Object(d["p"])(a)&&!1!==a)return t&&(r+="-".concat(t)),"col"!==e||""!==a&&!0!==a?(r+="-".concat(a),Object(h["c"])(r)):Object(h["c"])(r)},C=Object(b["a"])(x),y=Object(u["c"])(null),v=function(){var e=Object(c["b"])().filter(l["a"]),t=e.reduce((function(e,t){return e[t]=Object(p["c"])(o["i"]),e}),Object(u["c"])(null)),a=e.reduce((function(e,t){return e[Object(p["g"])(t,"offset")]=Object(p["c"])(o["p"]),e}),Object(u["c"])(null)),r=e.reduce((function(e,t){return e[Object(p["g"])(t,"order")]=Object(p["c"])(o["p"]),e}),Object(u["c"])(null));return y=Object(u["a"])(Object(u["c"])(null),{col:Object(u["h"])(t),offset:Object(u["h"])(a),order:Object(u["h"])(r)}),Object(p["d"])(Object(u["m"])(m(m(m(m({},t),a),r),{},{alignSelf:Object(p["c"])(o["u"],null,(function(e){return Object(s["a"])(O,e)})),col:Object(p["c"])(o["g"],!1),cols:Object(p["c"])(o["p"]),offset:Object(p["c"])(o["p"]),order:Object(p["c"])(o["p"]),tag:Object(p["c"])(o["u"],"div")})),n["y"])},w={name:n["y"],functional:!0,get props(){return delete this.props,this.props=v()},render:function(e,t){var a,n=t.props,o=t.data,s=t.children,c=n.cols,l=n.offset,d=n.order,b=n.alignSelf,u=[];for(var p in y)for(var h=y[p],f=0;f<h.length;f++){var m=C(p,h[f].replace(p,""),n[h[f]]);m&&u.push(m)}var O=u.some((function(e){return i["e"].test(e)}));return u.push((a={col:n.col||!O&&!c},g(a,"col-".concat(c),c),g(a,"offset-".concat(l),l),g(a,"order-".concat(d),d),g(a,"align-self-".concat(b),b),a)),e(n.tag,Object(r["a"])(o,{class:u}),s)}}},b680:function(e,t,a){"use strict";var r=a("23e7"),n=a("a691"),o=a("408a"),i=a("1148"),s=a("d039"),c=1..toFixed,l=Math.floor,d=function(e,t,a){return 0===t?a:t%2===1?d(e,t-1,a*e):d(e*e,t/2,a)},b=function(e){var t=0,a=e;while(a>=4096)t+=12,a/=4096;while(a>=2)t+=1,a/=2;return t},u=c&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){c.call({})}));r({target:"Number",proto:!0,forced:u},{toFixed:function(e){var t,a,r,s,c=o(this),u=n(e),p=[0,0,0,0,0,0],h="",f="0",m=function(e,t){var a=-1,r=t;while(++a<6)r+=e*p[a],p[a]=r%1e7,r=l(r/1e7)},g=function(e){var t=6,a=0;while(--t>=0)a+=p[t],p[t]=l(a/e),a=a%e*1e7},O=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==p[e]){var a=String(p[e]);t=""===t?a:t+i.call("0",7-a.length)+a}return t};if(u<0||u>20)throw RangeError("Incorrect fraction digits");if(c!=c)return"NaN";if(c<=-1e21||c>=1e21)return String(c);if(c<0&&(h="-",c=-c),c>1e-21)if(t=b(c*d(2,69,1))-69,a=t<0?c*d(2,-t,1):c/d(2,t,1),a*=4503599627370496,t=52-t,t>0){m(0,a),r=u;while(r>=7)m(1e7,0),r-=7;m(d(10,r,1),0),r=t-1;while(r>=23)g(1<<23),r-=23;g(1<<r),m(1,1),g(2),f=O()}else m(0,a),m(1<<-t,0),f=O()+i.call("0",u);return u>0?(s=f.length,f=h+(s<=u?"0."+i.call("0",u-s)+f:f.slice(0,s-u)+"."+f.slice(s-u))):f=h+f,f}})},c0e2:function(e,t,a){},d8ac:function(e,t,a){"use strict";a("c0e2")},e98b:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a("2b0e"),n=a("b42e"),o=a("c637"),i=a("a723"),s=a("d82f"),c=a("cf75"),l=a("4a38"),d=a("aa59");function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var h=Object(s["j"])(d["b"],["event","routerTag"]);delete h.href.default,delete h.to.default;var f=Object(c["d"])(Object(s["m"])(u(u({},h),{},{pill:Object(c["c"])(i["g"],!1),tag:Object(c["c"])(i["u"],"span"),variant:Object(c["c"])(i["u"],"secondary")})),o["e"]),m=r["default"].extend({name:o["e"],functional:!0,props:f,render:function(e,t){var a=t.props,r=t.data,o=t.children,i=a.active,s=a.disabled,b=Object(l["d"])(a),u=b?d["a"]:a.tag,p=a.variant||"secondary";return e(u,Object(n["a"])(r,{staticClass:"badge",class:["badge-".concat(p),{"badge-pill":a.pill,active:i,disabled:s}],props:b?Object(c["e"])(h,a):{}}),o)}})}}]);
//# sourceMappingURL=chunk-0f594552.27588555.js.map
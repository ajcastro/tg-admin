(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-724bcbc4"],{"693c":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("context-menu-simple"),n("context-menu-close-on-click")],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Simple"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeSimple)+" ")]},proxy:!0}])},[n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{contextmenu:function(t){return t.preventDefault(),e.$refs.menu.open.apply(null,arguments)}}},[e._v(" Right click on me ")]),n("vue-context",{ref:"menu"},[n("li",e._l(e.menuData,(function(t){return n("b-link",{key:t.text,staticClass:"d-flex align-items-center",on:{click:function(n){return e.optionClicked(t.text,t.icon)}}},[n("feather-icon",{attrs:{icon:t.icon,size:"16"}}),n("span",{staticClass:"ml-75"},[e._v(e._s(t.text))])],1)})),1)])],1)},c=[],l=n("541c"),a=n("1947"),r=n("aa59"),u=n("2b0e"),p="2.2.2",h=/^2\./.test(u["default"].version);h||u["default"].util.warn("VueClickaway "+p+" only supports Vue 2.x, and does not support Vue "+u["default"].version);var d="_vue_clickaway_handler";function v(e,t,n){m(e);var o=n.context,i=t.value;if("function"===typeof i){var s=!1;setTimeout((function(){s=!0}),0),e[d]=function(t){var n=t.path||(t.composedPath?t.composedPath():void 0);if(s&&(n?n.indexOf(e)<0:!e.contains(t.target)))return i.call(o,t)},document.documentElement.addEventListener("click",e[d],!1)}}function m(e){document.documentElement.removeEventListener("click",e[d],!1),delete e[d]}var f={bind:v,update:function(e,t){t.value!==t.oldValue&&v(e,t)},unbind:m};Array.from||(Array.from=e=>[].slice.call(e)),Array.isArray||(Array.isArray=e=>"[object Array]"===Object.prototype.toString.call(e));const x=Array.from,b=Array.isArray,S={ESC:27,LEFT:37,UP:38,RIGHT:39,DOWN:40},y=(e,t)=>!(!e||"function"!==typeof e.contains)&&e.contains(t),k=(e,t,n)=>{e&&e.addEventListener&&e.addEventListener(t,n)},C=(e,t,n)=>{e&&e.removeEventListener&&e.removeEventListener(t,n)},g=e=>(e||[]).filter(_),w=e=>E(e)?e.getBoundingClientRect():null,E=e=>Boolean(e&&e.nodeType===Node.ELEMENT_NODE),_=e=>{if(!E(e)||!y(document.body,e))return!1;if("none"===e.style.display)return!1;const t=w(e);return Boolean(t&&t.height>0&&t.width>0)},I=(e,t)=>x((E(t)?t:document).querySelectorAll(e)),M=(e,t,n)=>{t&&E(e)&&e.setAttribute(t,n)},B=(e,t)=>{let n=e.parentElement;while(null!==n&&!n.classList.contains(t))n=n.parentElement;return n},O=(e,t={},n={},o={})=>{const i=n[e]||o[e];return"function"===typeof i?i(t):i};var L={directives:{onClickaway:f},props:{closeOnClick:{type:Boolean,default:!0},closeOnScroll:{type:Boolean,default:!0},lazy:{type:Boolean,default:!1},itemSelector:{type:[String,Array],default:()=>[".v-context-item",".v-context > li > a"]},role:{type:String,default:"menu"},subMenuOffset:{type:Number,default:10},useScrollHeight:{type:Boolean,default:!1},useScrollWidth:{type:Boolean,default:!1},heightOffset:{type:Number,default:25},widthOffset:{type:Number,default:25},tag:{type:String,default:"ul"}},computed:{style(){return this.show?{top:this.top+"px",left:this.left+"px"}:null}},data(){return{top:null,left:null,show:!1,data:null,localItemSelector:"",activeSubMenu:null}},created(){this.localItemSelector=this.mapItemSelector(this.itemSelector)},beforeDestroy(){this.closeOnScroll&&this.removeScrollEventListener()},methods:{addScrollEventListener(){k(window,"scroll",this.close)},addHoverEventListener(e){e.querySelectorAll(".v-context__sub").forEach(e=>{k(e,"mouseenter",this.openSubMenu),k(e,"mouseleave",this.closeSubMenu)})},close(){if(this.show){while(null!==this.activeSubMenu)B(this.activeSubMenu,"v-context__sub").dispatchEvent(new Event("mouseleave"));this.resetData(),this.removeHoverEventListener(this.$el),this.closeOnScroll&&this.removeScrollEventListener(),this.$emit("close")}},focusItem(e,t){const n=t.find((t,n)=>n===e);n&&n.focus()},focusNext(e,t){this.show&&(e.preventDefault(),e.stopPropagation(),this.$nextTick(()=>{const n=this.getItems();if(n.length<1)return;let o=n.indexOf(e.target);t&&o>0?o--:!t&&o<n.length-1&&o++,o<0&&(o=0),this.focusItem(o,n)}))},getItems(){return g(I(this.localItemSelector,this.activeSubMenu||this.$el))},mapItemSelector(e){return b(e)&&(e=e.map(e=>e+":not(.disabled):not([disabled])").join(", ")),e},onClick(){this.close()},onKeydown(e){const t=e.keyCode;if(t===S.ESC)this.close();else if(t===S.DOWN)this.focusNext(e,!1);else if(t===S.UP)this.focusNext(e,!0);else if(t===S.RIGHT){const t=B(e.target,"v-context__sub");t&&t.getElementsByClassName("v-context")[0]!==this.activeSubMenu&&(t.dispatchEvent(new Event("mouseenter")),this.focusNext(e,!1))}else if(t===S.LEFT){if(!this.activeSubMenu)return;const e=B(this.activeSubMenu,"v-context__sub");e.dispatchEvent(new Event("mouseleave"));const t=this.getItems(),n=t.indexOf(e.getElementsByTagName("a")[0]);this.focusItem(n,t)}},open(e,t){this.data=t,this.show=!0,this.$nextTick(()=>{[this.top,this.left]=this.positionMenu(e.clientY,e.clientX,this.$el),this.$el.focus(),this.setItemRoles(),this.addHoverEventListener(this.$el),this.closeOnScroll&&this.addScrollEventListener(),this.$emit("open",e,this.data,this.top,this.left)})},openSubMenu(e){const t=this.getSubMenuElementByEvent(e),n=B(t.parentElement,"v-context"),o=w(e.target);if(this.activeSubMenu!==n)while(null!==this.activeSubMenu&&this.activeSubMenu!==n&&this.activeSubMenu!==t)B(this.activeSubMenu,"v-context__sub").dispatchEvent(new Event("mouseleave"));t.style.display="block";let[i,s]=this.positionMenu(o.top,o.right-this.subMenuOffset,t);t.style.left=s+"px",t.style.top=i+"px",this.activeSubMenu=t},closeSubMenu(e){const t=this.getSubMenuElementByEvent(e),n=B(t,"v-context");if(this.activeSubMenu!==t)while(null!==this.activeSubMenu&&this.activeSubMenu!==t)B(this.activeSubMenu,"v-context__sub").dispatchEvent(new Event("mouseleave"));t.style.display="none",this.activeSubMenu=n&&B(n,"v-context__sub")?n:null},getSubMenuElementByEvent(e){return e.target.getElementsByTagName("ul")[0]},positionMenu(e,t,n){const o=this.useScrollHeight?n.scrollHeight:n.offsetHeight,i=window.innerHeight-o-this.heightOffset,s=this.useScrollWidth?n.scrollWidth:n.offsetWidth,c=window.innerWidth-s-this.widthOffset;return e>i&&(e=i),t>c&&(t=c),[e,t]},removeScrollEventListener(){C(window,"scroll",this.close)},removeHoverEventListener(e){e.querySelectorAll(".v-context__sub").forEach(e=>{C(e,"mouseenter",this.openSubMenu),C(e,"mouseleave",this.closeSubMenu)})},resetData(){this.top=null,this.left=null,this.data=null,this.show=!1},setItemRoles(){I(this.localItemSelector,this.$el).forEach(e=>{M(e,"role","menuitem"),M(e,"tabindex","-1")})}},watch:{closeOnScroll(e,t){e!==t&&(e&&this.show?this.addScrollEventListener():this.removeScrollEventListener())},itemSelector(e,t){e!==t&&(this.localItemSelector=this.mapItemSelector(e))}},render(e){if(this.lazy&&!this.show)return e(!1);const t={"!contextmenu":e=>{e.preventDefault()},keydown:this.onKeydown};this.closeOnClick&&(t.click=this.onClick);const n=[{name:"on-clickaway",value:this.close,rawName:"v-on-clickaway"}];return this.lazy||n.push({name:"show",value:this.show,rawName:"v-show",expression:"show"}),e(this.tag,{staticClass:"v-context",style:this.style,attrs:{tabindex:"-1",role:this.role,"aria-hidden":this.lazy?null:String(!this.show)},on:t,directives:n},[O("default",{data:this.data},this.$scopedSlots,this.$slots)])}},$=n("223c"),T=n("e009"),N="\n<template>\n  <div>\n\n    \x3c!-- button --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @contextmenu.prevent=\"$refs.menu.open\"\n    >\n      Right click on me\n    </b-button>\n\n    \x3c!-- context --\x3e\n    <vue-context ref=\"menu\">\n      <li>\n        <b-link\n          v-for=\"data in menuData\"\n          :key=\"data.text\"\n          class=\"d-flex align-items-center\"\n          @click=\"optionClicked(data.text,data.icon)\"\n        >\n          <feather-icon\n            :icon=\"data.icon\"\n            size=\"16\"\n          />\n          <span class=\"ml-75\">{{ data.text }}</span>\n        </b-link>\n      </li>\n    </vue-context>\n  </div>\n</template>\n\n<script>\nimport { BButton, BLink } from 'bootstrap-vue'\nimport { VueContext } from 'vue-context'\nimport ToastificationContent from '@core/components/toastification/ToastificationContent.vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n    VueContext,\n    BLink,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  directives: {\n    Ripple,\n  },\n  data() {\n    return {\n      menuData: [\n        { icon: 'PlusIcon', text: 'New' },\n        { icon: 'FileIcon', text: 'Open' },\n        { icon: 'SaveIcon', text: 'Save' },\n        { icon: 'SaveIcon', text: 'Save As' },\n        { icon: 'XIcon', text: 'Close' },\n      ],\n      codeSimple,\n    }\n  },\n  methods: {\n    optionClicked(text, icon) {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: `You have click on ${text}!`,\n          icon,\n        },\n      })\n    },\n  },\n}\n<\/script>\n",D="\n<template>\n  <div>\n\n    \x3c!-- button --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(113, 102, 240, 0.15)'\"\n      variant=\"outline-primary\"\n      @contextmenu.prevent=\"$refs.menuProp.open\"\n    >\n      Right click on me - Do not close\n    </b-button>\n\n    \x3c!-- context --\x3e\n    <vue-context\n      ref=\"menuProp\"\n      :close-on-click=\"false\"\n    >\n      <li\n        v-for=\"data in menuData\"\n        :key=\"data.icon\"\n      >\n        <b-link\n          class=\"d-flex align-items-center\"\n          @click=\"optionClicked(data.text,data.icon)\"\n        >\n          <feather-icon\n            :icon=\"data.icon\"\n            size=\"16\"\n          />\n          <span class=\"ml-75\">{{ data.text }}</span>\n        </b-link>\n      </li>\n    </vue-context>\n  </div>\n</template>\n\n<script>\nimport { BButton, BLink } from 'bootstrap-vue'\nimport { VueContext } from 'vue-context'\nimport ToastificationContent from '@core/components/toastification/ToastificationContent.vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BButton,\n    BLink,\n    VueContext,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  directives: {\n    Ripple,\n  },\n  data() {\n    return {\n      menuData: [\n        { icon: 'ChevronRightIcon', text: 'Next' },\n        { icon: 'ChevronLeftIcon', text: 'Previous' },\n        { icon: 'PlusIcon', text: 'Increase' },\n        { icon: 'MinusIcon', text: 'Decrease' },\n        { icon: 'ShuffleIcon', text: 'Random' },\n      ],\n    }\n  },\n  methods: {\n    optionClicked(text, icon) {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: `You have click on ${text}!`,\n          icon,\n        },\n      })\n    },\n  },\n}\n<\/script>\n",R={components:{BCardCode:l["a"],BButton:a["a"],VueContext:L,BLink:r["a"],ToastificationContent:$["a"]},directives:{Ripple:T["a"]},data:function(){return{menuData:[{icon:"PlusIcon",text:"New"},{icon:"FileIcon",text:"Open"},{icon:"SaveIcon",text:"Save"},{icon:"SaveIcon",text:"Save As"},{icon:"XIcon",text:"Close"}],codeSimple:N}},methods:{optionClicked:function(e,t){this.$toast({component:$["a"],props:{title:"You have click on ".concat(e,"!"),icon:t}})}}},A=R,P=n("2877"),H=Object(P["a"])(A,s,c,!1,null,null,null),V=H.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card-code",{attrs:{title:"Close On Click"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeCloseOnClick)+" ")]},proxy:!0}])},[n("b-card-text",[n("code",[e._v("closeOnClick")]),n("span",[e._v(" is set to ")]),n("code",[e._v("false")]),n("span",[e._v(" , the context menu will not automatically close when clicked on. You can toggle this feature on and off in this demo by using the checkbox below.")])]),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(113, 102, 240, 0.15)",expression:"'rgba(113, 102, 240, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"outline-primary"},on:{contextmenu:function(t){return t.preventDefault(),e.$refs.menuProp.open.apply(null,arguments)}}},[e._v(" Right click on me - Do not close ")]),n("vue-context",{ref:"menuProp",attrs:{"close-on-click":!1}},e._l(e.menuData,(function(t){return n("li",{key:t.icon},[n("b-link",{staticClass:"d-flex align-items-center",on:{click:function(n){return e.optionClicked(t.text,t.icon)}}},[n("feather-icon",{attrs:{icon:t.icon,size:"16"}}),n("span",{staticClass:"ml-75"},[e._v(e._s(t.text))])],1)],1)})),0)],1)},z=[],W=n("d6e4"),Y={components:{BButton:a["a"],BLink:r["a"],BCardText:W["a"],BCardCode:l["a"],VueContext:L,ToastificationContent:$["a"]},directives:{Ripple:T["a"]},data:function(){return{menuData:[{icon:"ChevronRightIcon",text:"Next"},{icon:"ChevronLeftIcon",text:"Previous"},{icon:"PlusIcon",text:"Increase"},{icon:"MinusIcon",text:"Decrease"},{icon:"ShuffleIcon",text:"Random"}],codeCloseOnClick:D}},methods:{optionClicked:function(e,t){this.$toast({component:$["a"],props:{title:"You have click on ".concat(e,"!"),icon:t}})}}},F=Y,q=Object(P["a"])(F,j,z,!1,null,null,null),X=q.exports,G={components:{ContextMenuSimple:V,ContextMenuCloseOnClick:X}},J=G,K=(n("fd63"),Object(P["a"])(J,o,i,!1,null,null,null));t["default"]=K.exports},"6c9a":function(e,t,n){},d6e4:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("2b0e"),i=n("b42e"),s=n("c637"),c=n("a723"),l=n("cf75"),a=Object(l["d"])({textTag:Object(l["c"])(c["u"],"p")},s["u"]),r=o["default"].extend({name:s["u"],functional:!0,props:a,render:function(e,t){var n=t.props,o=t.data,s=t.children;return e(n.textTag,Object(i["a"])(o,{staticClass:"card-text"}),s)}})},fd63:function(e,t,n){"use strict";n("6c9a")}}]);
//# sourceMappingURL=chunk-724bcbc4.ee7efbd2.js.map
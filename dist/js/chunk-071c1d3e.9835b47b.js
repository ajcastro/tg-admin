(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-071c1d3e"],{"06d9":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n("2b0e"),i=o["default"].extend({computed:{selectionStart:{cache:!1,get:function(){return this.$refs.input.selectionStart},set:function(t){this.$refs.input.selectionStart=t}},selectionEnd:{cache:!1,get:function(){return this.$refs.input.selectionEnd},set:function(t){this.$refs.input.selectionEnd=t}},selectionDirection:{cache:!1,get:function(){return this.$refs.input.selectionDirection},set:function(t){this.$refs.input.selectionDirection=t}}},methods:{select:function(){var t;(t=this.$refs.input).select.apply(t,arguments)},setSelectionRange:function(){var t;(t=this.$refs.input).setSelectionRange.apply(t,arguments)},setRangeText:function(){var t;(t=this.$refs.input).setRangeText.apply(t,arguments)}}})},"1f1e":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n("2b0e"),i=o["default"].extend({computed:{validity:{cache:!1,get:function(){return this.$refs.input.validity}},validationMessage:{cache:!1,get:function(){return this.$refs.input.validationMessage}},willValidate:{cache:!1,get:function(){return this.$refs.input.willValidate}}},methods:{setCustomValidity:function(){var t;return(t=this.$refs.input).setCustomValidity.apply(t,arguments)},checkValidity:function(){var t;return(t=this.$refs.input).checkValidity.apply(t,arguments)},reportValidity:function(){var t;return(t=this.$refs.input).reportValidity.apply(t,arguments)}}})},3214:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("clipboard-with-directive"),n("clipboard-without-directive")],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Using Directive"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeDirective)+" ")]},proxy:!0}])},[n("b-card-text",[t._v("Use directive on button to copy text")]),n("div",{staticClass:"d-flex"},[n("b-form-group",{staticClass:"mb-0 mr-1"},[n("b-form-input",{model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),n("b-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:t.message,expression:"message",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:t.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:t.onError,expression:"onError",arg:"error"},{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"primary"}},[t._v(" Copy! ")])],1)],1)},c=[],a=n("541c"),s=n("4797"),u=n("8226"),l=n("1947"),p=n("d6e4"),d=n("223c"),f=n("e009"),b="\n<template>\n  <div class=\"d-flex\">\n\n    \x3c!-- form input --\x3e\n    <b-form-group class=\"mb-0 mr-1\">\n      <b-form-input\n        v-model=\"message\"\n      />\n    </b-form-group>\n\n    \x3c!-- button --\x3e\n    <b-button\n      v-clipboard:copy=\"message\"\n      v-clipboard:success=\"onCopy\"\n      v-clipboard:error=\"onError\"\n      v-ripple.400=\"'rgba(186, 191, 199, 0.15)'\"\n      variant=\"primary\"\n    >\n      Copy!\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport { BFormInput, BFormGroup, BButton } from 'bootstrap-vue'\nimport ToastificationContent from '@core/components/toastification/ToastificationContent.vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BFormInput,\n    BFormGroup,\n    BButton,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  directives: {\n    Ripple,\n  },\n  data() {\n    return {\n      message: 'Copy Me!',\n    }\n  },\n  methods: {\n    onCopy() {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: 'Text copied',\n          icon: 'BellIcon',\n        },\n      })\n    },\n    onError() {\n      this.$toast({\n        component: ToastificationContent,\n        props: {\n          title: 'Failed to copy texts!',\n          icon: 'BellIcon',\n        },\n      })\n    },\n  },\n}\n<\/script>\n",m="\n<template>\n  <div class=\"d-flex\">\n\n    \x3c!-- input --\x3e\n    <b-form-group class=\"mb-0 mr-1\">\n      <b-form-input\n        v-model=\"message1\"\n      />\n    </b-form-group>\n\n    \x3c!-- button --\x3e\n    <b-button\n      v-ripple.400=\"'rgba(186, 191, 199, 0.15)'\"\n      variant=\"primary\"\n      @click=\"doCopy\"\n    >\n      Copy!\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport {BFormInput, BFormGroup, BButton, BCardText} from 'bootstrap-vue'\nimport ToastificationContent from '@core/components/toastification/ToastificationContent.vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BFormInput,\n    BFormGroup,\n    BButton,\n    BCardText,\n    // eslint-disable-next-line vue/no-unused-components\n    ToastificationContent,\n  },\n  directives: {\n    Ripple,\n  },\n  data() {\n    return {\n      message1: 'Copy Me Without Directive',\n    }\n  },\n  methods: {\n    doCopy() {\n      this.$copyText(this.message1).then(() => {\n        this.$toast({\n          component: ToastificationContent,\n          props: {\n            title: 'Text copied',\n            icon: 'BellIcon',\n          },\n        })\n      }, e => {\n        this.$toast({\n          component: ToastificationContent,\n          props: {\n            title: 'Can not copy!',\n            icon: 'BellIcon',\n          },\n        })\n      })\n    },\n  },\n}\n<\/script>\n",h={components:{BCardCode:a["a"],BFormInput:s["a"],BFormGroup:u["a"],BButton:l["a"],BCardText:p["a"],ToastificationContent:d["a"]},directives:{Ripple:f["a"]},data:function(){return{message:"Copy Me!",codeDirective:b}},methods:{onCopy:function(){this.$toast({component:d["a"],props:{title:"Text copied",icon:"BellIcon"}})},onError:function(){this.$toast({component:d["a"],props:{title:"Failed to copy texts!",icon:"BellIcon"}})}}},v=h,O=n("2877"),y=Object(O["a"])(v,r,c,!1,null,null,null),g=y.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card-code",{attrs:{title:"Without directive"},scopedSlots:t._u([{key:"code",fn:function(){return[t._v(" "+t._s(t.codeWithoutDirective)+" ")]},proxy:!0}])},[n("b-card-text",[n("span",[t._v("You can copy text without a specific button. Use ")]),n("code",[t._v("$copyText")]),n("span",[t._v(" to copy text when event got fired.")])]),n("div",{staticClass:"d-flex"},[n("b-form-group",{staticClass:"mb-0 mr-1"},[n("b-form-input",{model:{value:t.message1,callback:function(e){t.message1=e},expression:"message1"}})],1),n("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(186, 191, 199, 0.15)",expression:"'rgba(186, 191, 199, 0.15)'",modifiers:{400:!0}}],attrs:{variant:"primary"},on:{click:t.doCopy}},[t._v(" Copy! ")])],1)],1)},x=[],C={components:{BCardCode:a["a"],BFormInput:s["a"],BFormGroup:u["a"],BButton:l["a"],BCardText:p["a"],ToastificationContent:d["a"]},directives:{Ripple:f["a"]},data:function(){return{message1:"Copy Me Without Directive",codeWithoutDirective:m}},methods:{doCopy:function(){var t=this;this.$copyText(this.message1).then((function(){t.$toast({component:d["a"],props:{title:"Text copied",icon:"BellIcon"}})}),(function(){t.$toast({component:d["a"],props:{title:"Can not copy!",icon:"BellIcon"}})}))}}},$=C,B=Object(O["a"])($,j,x,!1,null,null,null),w=B.exports,T={components:{ClipboardWithDirective:g,ClipboardWithoutDirective:w}},V=T,D=Object(O["a"])(V,o,i,!1,null,null,null);e["default"]=D.exports},"40fc":function(t,e,n){"use strict";n.d(e,"b",(function(){return x})),n.d(e,"a",(function(){return C}));var o=n("2b0e"),i=n("0056"),r=n("a723"),c=n("906c"),a=n("6b77"),s=n("a8c8"),u=n("58f2"),l=n("3a58"),p=n("d82f"),d=n("cf75"),f=n("fa73");function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=Object(u["a"])("value",{type:r["p"],defaultValue:"",event:i["bb"]}),O=v.mixin,y=v.props,g=v.prop,j=v.event,x=Object(d["d"])(Object(p["m"])(m(m({},y),{},{ariaInvalid:Object(d["c"])(r["j"],!1),autocomplete:Object(d["c"])(r["u"]),debounce:Object(d["c"])(r["p"],0),formatter:Object(d["c"])(r["l"]),lazy:Object(d["c"])(r["g"],!1),lazyFormatter:Object(d["c"])(r["g"],!1),number:Object(d["c"])(r["g"],!1),placeholder:Object(d["c"])(r["u"]),plaintext:Object(d["c"])(r["g"],!1),readonly:Object(d["c"])(r["g"],!1),trim:Object(d["c"])(r["g"],!1)})),"formTextControls"),C=o["default"].extend({mixins:[O],props:x,data:function(){var t=this[g];return{localValue:Object(f["g"])(t),vModelValue:this.modifyValue(t)}},computed:{computedClass:function(){var t=this.plaintext,e=this.type,n="range"===e,o="color"===e;return[{"custom-range":n,"form-control-plaintext":t&&!n&&!o,"form-control":o||!t&&!n},this.sizeFormClass,this.stateClass]},computedDebounce:function(){return Object(s["d"])(Object(l["c"])(this.debounce,0),0)},hasFormatter:function(){return Object(d["b"])(this.formatter)}},watch:h({},g,(function(t){var e=Object(f["g"])(t),n=this.modifyValue(t);e===this.localValue&&n===this.vModelValue||(this.clearDebounce(),this.localValue=e,this.vModelValue=n)})),created:function(){this.$_inputDebounceTimer=null},mounted:function(){this.$on(i["eb"],this.clearDebounce)},beforeDestroy:function(){this.clearDebounce()},methods:{clearDebounce:function(){clearTimeout(this.$_inputDebounceTimer),this.$_inputDebounceTimer=null},formatValue:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t=Object(f["g"])(t),!this.hasFormatter||this.lazyFormatter&&!n||(t=this.formatter(t,e)),t},modifyValue:function(t){return t=Object(f["g"])(t),this.trim&&(t=t.trim()),this.number&&(t=Object(l["b"])(t,t)),t},updateValue:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=this.lazy;if(!o||n){this.clearDebounce();var i=function(){if(t=e.modifyValue(t),t!==e.vModelValue)e.vModelValue=t,e.$emit(j,t);else if(e.hasFormatter){var n=e.$refs.input;n&&t!==n.value&&(n.value=t)}},r=this.computedDebounce;r>0&&!o&&!n?this.$_inputDebounceTimer=setTimeout(i,r):i()}},onInput:function(t){if(!t.target.composing){var e=t.target.value,n=this.formatValue(e,t);!1===n||t.defaultPrevented?Object(a["f"])(t,{propagation:!1}):(this.localValue=n,this.updateValue(n),this.$emit(i["y"],n))}},onChange:function(t){var e=t.target.value,n=this.formatValue(e,t);!1===n||t.defaultPrevented?Object(a["f"])(t,{propagation:!1}):(this.localValue=n,this.updateValue(n,!0),this.$emit(i["d"],n))},onBlur:function(t){var e=t.target.value,n=this.formatValue(e,t,!0);!1!==n&&(this.localValue=Object(f["g"])(this.modifyValue(n)),this.updateValue(n,!0)),this.$emit(i["b"],t)},focus:function(){this.disabled||Object(c["d"])(this.$el)},blur:function(){this.disabled||Object(c["c"])(this.$el)}}})},4797:function(t,e,n){"use strict";n.d(e,"a",(function(){return $}));var o=n("2b0e"),i=n("c637"),r=n("a723"),c=n("2326"),a=n("906c"),s=n("6b77"),u=n("d82f"),l=n("cf75"),p=n("dde7"),d=n("06d9"),f=n("ad47"),b=n("d520"),m=n("40fc"),h=n("1f1e"),v=n("90ef"),O=n("bc9a");function y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach((function(e){j(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function j(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var x=["text","password","email","number","url","tel","search","range","color","date","time","datetime","datetime-local","month","week"],C=Object(l["d"])(Object(u["m"])(g(g(g(g(g(g({},v["b"]),p["b"]),f["b"]),b["b"]),m["b"]),{},{list:Object(l["c"])(r["u"]),max:Object(l["c"])(r["p"]),min:Object(l["c"])(r["p"]),noWheel:Object(l["c"])(r["g"],!1),step:Object(l["c"])(r["p"]),type:Object(l["c"])(r["u"],"text",(function(t){return Object(c["a"])(x,t)}))})),i["R"]),$=o["default"].extend({name:i["R"],mixins:[O["a"],v["a"],p["a"],f["a"],b["a"],m["a"],d["a"],h["a"]],props:C,computed:{localType:function(){var t=this.type;return Object(c["a"])(x,t)?t:"text"},computedAttrs:function(){var t=this.localType,e=this.name,n=this.form,o=this.disabled,i=this.placeholder,r=this.required,c=this.min,a=this.max,s=this.step;return{id:this.safeId(),name:e,form:n,type:t,disabled:o,placeholder:i,required:r,autocomplete:this.autocomplete||null,readonly:this.readonly||this.plaintext,min:c,max:a,step:s,list:"password"!==t?this.list:null,"aria-required":r?"true":null,"aria-invalid":this.computedAriaInvalid}},computedListeners:function(){return g(g({},this.bvListeners),{},{input:this.onInput,change:this.onChange,blur:this.onBlur})}},watch:{noWheel:function(t){this.setWheelStopper(t)}},mounted:function(){this.setWheelStopper(this.noWheel)},deactivated:function(){this.setWheelStopper(!1)},activated:function(){this.setWheelStopper(this.noWheel)},beforeDestroy:function(){this.setWheelStopper(!1)},methods:{setWheelStopper:function(t){var e=this.$el;Object(s["c"])(t,e,"focus",this.onWheelFocus),Object(s["c"])(t,e,"blur",this.onWheelBlur),t||Object(s["a"])(document,"wheel",this.stopWheel)},onWheelFocus:function(){Object(s["b"])(document,"wheel",this.stopWheel)},onWheelBlur:function(){Object(s["a"])(document,"wheel",this.stopWheel)},stopWheel:function(t){Object(s["f"])(t,{propagation:!1}),Object(a["c"])(this.$el)}},render:function(t){return t("input",{class:this.computedClass,attrs:this.computedAttrs,domProps:{value:this.localValue},on:this.computedListeners,ref:"input"})}})},ad47:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return a}));var o=n("2b0e"),i=n("a723"),r=n("cf75"),c=Object(r["d"])({size:Object(r["c"])(i["u"])},"formControls"),a=o["default"].extend({props:c,computed:{sizeFormClass:function(){return[this.size?"form-control-".concat(this.size):null]}}})},d6e4:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var o=n("2b0e"),i=n("b42e"),r=n("c637"),c=n("a723"),a=n("cf75"),s=Object(a["d"])({textTag:Object(a["c"])(c["u"],"p")},r["u"]),u=o["default"].extend({name:r["u"],functional:!0,props:s,render:function(t,e){var n=e.props,o=e.data,r=e.children;return t(n.textTag,Object(i["a"])(o,{staticClass:"card-text"}),r)}})},dde7:function(t,e,n){"use strict";n.d(e,"b",(function(){return s})),n.d(e,"a",(function(){return u}));var o=n("2b0e"),i=n("a723"),r=n("906c"),c=n("cf75"),a="input, textarea, select",s=Object(c["d"])({autofocus:Object(c["c"])(i["g"],!1),disabled:Object(c["c"])(i["g"],!1),form:Object(c["c"])(i["u"]),id:Object(c["c"])(i["u"]),name:Object(c["c"])(i["u"]),required:Object(c["c"])(i["g"],!1)},"formControls"),u=o["default"].extend({props:s,mounted:function(){this.handleAutofocus()},activated:function(){this.handleAutofocus()},methods:{handleAutofocus:function(){var t=this;this.$nextTick((function(){Object(r["B"])((function(){var e=t.$el;t.autofocus&&Object(r["u"])(e)&&(Object(r["v"])(e,a)||(e=Object(r["C"])(a,e)),Object(r["d"])(e))}))}))}}})}}]);
//# sourceMappingURL=chunk-071c1d3e.9835b47b.js.map
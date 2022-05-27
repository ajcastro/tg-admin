(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02013bfc"],{"0930":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"pb-1"},[e.$store.state.websiteSelector.selectedWebsiteId?r("b-card",{staticClass:"mb-4 col-md-12 mx-auto",attrs:{"no-body":""}},[r("div",{staticClass:"card-header"},[r("div",[r("b-card-title",[e._v("Referral Settings")])],1)]),r("b-card-body",[r("b-form",{on:{submit:function(t){return t.preventDefault(),e.save.apply(null,arguments)}}},[r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("b-form-group",{attrs:{label:"Referral Content:","label-for":"h-referral_content","label-cols-md":"12"}},[r("quill-editor",{attrs:{options:e.snowOption},model:{value:e.referral.content,callback:function(t){e.$set(e.referral,"content",t)},expression:"referral.content"}}),e._l(e.errors.content,(function(t){return r("small",{key:t,staticClass:"text-danger d-block"},[e._v(e._s(t))])}))],2)],1),r("b-col",{attrs:{cols:"12"}},[r("b-form-group",{attrs:{label:"Pay Period:","label-for":"h-referral_pay_period","label-cols-md":"1","label-cols-sm":"4","label-cols-xs":"12"}},[r("b-form-select",{staticClass:"col-xs-12 col-md-2",attrs:{id:"h-referral_pay_period",options:[{value:0,text:"Weekly"},{value:1,text:"Monthly"}]},model:{value:e.referral.pay_period,callback:function(t){e.$set(e.referral,"pay_period",t)},expression:"referral.pay_period"}}),e._l(e.errors.pay_period,(function(t){return r("small",{key:t,staticClass:"text-danger d-block"},[e._v(e._s(t))])}))],2)],1),r("b-col",{attrs:{md:"8"}},[r("b-form-group",[r("b-form-checkbox",{attrs:{id:"checkbox-is_active",name:"checkbox-is_active"},model:{value:e.referral.is_active,callback:function(t){e.$set(e.referral,"is_active",t)},expression:"referral.is_active"}},[e.referral.is_active?[e._v(" Referral Enabled ")]:[e._v(" Referral Disabled ")]],2)],1)],1),r("b-col",{attrs:{md:"8"}},[r("b-form-group",[r("b-form-checkbox",{attrs:{id:"checkbox-is_shown",name:"checkbox-is_shown"},model:{value:e.referral.is_shown,callback:function(t){e.$set(e.referral,"is_shown",t)},expression:"referral.is_shown"}},[e._v(" Show In Page Website ")])],1)],1)],1),r("b-table-simple",{attrs:{hover:"",small:"","caption-top":"",responsive:""}},[r("b-thead",[r("b-tr",[r("b-th",{attrs:{width:"20%"}},[e._v(" Game Category ")]),r("b-th",[e._v("Min Commission")]),r("b-th",[e._v("Max Commission")]),r("b-th",[e._v("Referral Level (%)")])],1)],1),r("b-tbody",e._l(e.referralSettings,(function(t){return r("b-tr",{key:t.id},[r("b-td",[e._v(" "+e._s(t.game_category.title))]),r("b-td",[r("b-form-input",{attrs:{type:"number",step:"any"},model:{value:t.min_commission,callback:function(r){e.$set(t,"min_commission",r)},expression:"setting.min_commission"}})],1),r("b-td",[r("b-form-input",{attrs:{type:"number",step:"any"},model:{value:t.max_commission,callback:function(r){e.$set(t,"max_commission",r)},expression:"setting.max_commission"}})],1),r("b-td",[r("b-form-input",{attrs:{type:"number",step:"any"},model:{value:t.referral_level,callback:function(r){e.$set(t,"referral_level",r)},expression:"setting.referral_level"}})],1)],1)})),1)],1),r("b-row",[r("b-col",{staticClass:"mt-1 text-center"},[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{disabled:e.loading||!e.canSave,type:"submit",variant:"primary"}},[e.loading?r("b-spinner",{staticClass:"mr-1",attrs:{small:""}}):e._e(),e._v(" Save ")],1)],1)],1)],1)],1)],1):r("b-card",{staticClass:"mb-0 bg-danger text-white"},[e._v(" Please select website first. ")])],1)},a=[],i=r("5530"),o=r("15fd"),s=r("1da1"),c=(r("96cf"),r("e009")),l=r("a15b7"),u=r("b28b"),b=r("11de"),d=r("1947"),p=r("8226"),f=r("4797"),m=r("01e3"),O=r("8361"),h=r("c3e6"),v=r("205f"),j=r("4968"),g=r("6197"),y=r("1eba"),w=r("0bd8"),x=r("2a2e"),_=r("a247"),S=r("0809"),P=r("6cf6"),k=(r("a753"),r("8096"),r("14e1"),r("953d")),C=["settings"],B={components:{BRow:l["a"],BCol:u["a"],BForm:b["a"],BButton:d["a"],BFormGroup:p["a"],BFormInput:f["a"],BSpinner:m["a"],BFormSelect:O["a"],BFormCheckbox:h["a"],BCard:v["a"],BCardTitle:j["a"],BCardBody:g["a"],BTableSimple:y["a"],BThead:w["a"],BTr:x["a"],BTbody:_["a"],BTd:S["a"],BTh:P["a"],quillEditor:k["quillEditor"]},directives:{Ripple:c["a"]},mixins:[],data:function(){return{loading:!1,referral:{},referralSettings:[],errors:{},snowOption:{theme:"snow"}}},computed:{canSave:function(){return!0},selectedWebsiteId:function(){return this.$store.state.websiteSelector.selectedWebsiteId}},watch:{selectedWebsiteId:function(){this.getReferralSettings()}},created:function(){this.getReferralSettings()},methods:{getReferralSettings:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.selectedWebsiteId){t.next=2;break}return t.abrupt("return");case 2:return e.loading=!0,t.next=5,e.$http.get("api/admin/referral_settings/".concat(e.selectedWebsiteId));case 5:r=t.sent,n=r.data,a=n.settings,i=Object(o["a"])(n,C),e.referral=i,e.referralSettings=a,e.loading=!1;case 11:case"end":return t.stop()}}),t)})))()},save:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.loading=!0,r=Object(i["a"])(Object(i["a"])({},e.referral),{},{referral_settings:e.referralSettings}),t.next=5,e.$http.post("api/admin/referral_settings/".concat(e.selectedWebsiteId),r);case 5:e.$notifySuccess("Successfully Saved Settings!"),e.errors={},t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),t.t0.response&&422===t.t0.response.status&&(e.errors=Object(i["a"])({},t.t0.response.data.errors));case 12:return t.prev=12,e.loading=!1,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))()}}},z=B,F=(r("8e1d"),r("2877")),$=Object(F["a"])(z,n,a,!1,null,null,null);t["default"]=$.exports},"0fc6":function(e,t,r){"use strict";r.d(t,"b",(function(){return d})),r.d(t,"a",(function(){return p}));var n=r("2b0e"),a=r("a723"),i=r("a874"),o=r("8690"),s=r("7b1e"),c=r("d82f"),l=r("cf75"),u=r("686b"),b='Setting prop "options" to an object is deprecated. Use the array format instead.',d=Object(l["d"])({disabledField:Object(l["c"])(a["u"],"disabled"),htmlField:Object(l["c"])(a["u"],"html"),options:Object(l["c"])(a["d"],[]),textField:Object(l["c"])(a["u"],"text"),valueField:Object(l["c"])(a["u"],"value")},"formOptionControls"),p=n["default"].extend({props:d,computed:{formOptions:function(){return this.normalizeOptions(this.options)}},methods:{normalizeOption:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(Object(s["k"])(e)){var r=Object(i["a"])(e,this.valueField),n=Object(i["a"])(e,this.textField);return{value:Object(s["o"])(r)?t||n:r,text:Object(o["b"])(String(Object(s["o"])(n)?t:n)),html:Object(i["a"])(e,this.htmlField),disabled:Boolean(Object(i["a"])(e,this.disabledField))}}return{value:t||e,text:Object(o["b"])(String(e)),disabled:!1}},normalizeOptions:function(e){var t=this;return Object(s["a"])(e)?e.map((function(e){return t.normalizeOption(e)})):Object(s["k"])(e)?(Object(u["a"])(b,this.$options.name),Object(c["h"])(e).map((function(r){return t.normalizeOption(e[r]||{},r)}))):[]}}})},"15fd":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r("a4d3"),r("b64b");function n(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}function a(e,t){if(null==e)return{};var r,a,i=n(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}},"1eba":function(e,t,r){"use strict";r.d(t,"a",(function(){return h}));var n=r("2b0e"),a=r("c637"),i=r("d82f"),o=r("cf75"),s=r("493b"),c=r("31df"),l=r("90ef"),u=r("8c18"),b=r("48f9"),d=r("712b");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O=Object(o["d"])(Object(i["m"])(f(f(f({},l["b"]),b["a"]),d["a"])),a["Vb"]),h=n["default"].extend({name:a["Vb"],mixins:[s["a"],c["a"],l["a"],u["a"],d["b"],b["b"]],props:O,computed:{isTableSimple:function(){return!0}}})},"82e4":function(e,t,r){},8361:function(e,t,r){"use strict";r.d(t,"a",(function(){return J}));var n=r("2b0e"),a=r("c637"),i=r("0056"),o=r("a723"),s=r("9b76"),c=r("2326"),l=r("906c"),u=r("8690"),b=r("7b1e"),d=r("d82f"),p=r("cf75"),f=r("dde7"),m=r("a953"),O=r("ad47"),h=r("d520"),v=r("90ef"),j=r("58f2"),g=Object(j["a"])("value"),y=g.mixin,w=g.props,x=g.prop,_=g.event,S=r("8c18"),P=r("a874"),k=r("0fc6");function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var F=Object(p["d"])(Object(d["m"])(B(B({},k["b"]),{},{labelField:Object(p["c"])(o["u"],"label"),optionsField:Object(p["c"])(o["u"],"options")})),"formOptions"),$=n["default"].extend({mixins:[k["a"]],props:F,methods:{normalizeOption:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(Object(b["k"])(e)){var r=Object(P["a"])(e,this.valueField),n=Object(P["a"])(e,this.textField),a=Object(P["a"])(e,this.optionsField,null);return Object(b["g"])(a)?{value:Object(b["o"])(r)?t||n:r,text:String(Object(b["o"])(n)?t:n),html:Object(P["a"])(e,this.htmlField),disabled:Boolean(Object(P["a"])(e,this.disabledField))}:{label:String(Object(P["a"])(e,this.labelField)||n),options:this.normalizeOptions(a)}}return{value:t||e,text:String(e),disabled:!1}}}}),D=r("ea4c");function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){I(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function I(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var T=Object(p["d"])(Object(d["m"])(E(E({},k["b"]),{},{label:Object(p["c"])(o["u"],void 0,!0)})),a["ab"]),V=n["default"].extend({name:a["ab"],mixins:[S["a"],k["a"]],props:T,render:function(e){var t=this.label,r=this.formOptions.map((function(t,r){var n=t.value,a=t.text,i=t.html,o=t.disabled;return e(D["a"],{attrs:{value:n,disabled:o},domProps:Object(u["a"])(i,a),key:"option_".concat(r)})}));return e("optgroup",{attrs:{label:t}},[this.normalizeSlot(s["q"]),r,this.normalizeSlot()])}});function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){M(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function M(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var G=Object(p["d"])(Object(d["m"])(q(q(q(q(q(q(q({},v["b"]),w),f["b"]),m["b"]),O["b"]),h["b"]),{},{ariaInvalid:Object(p["c"])(o["j"],!1),multiple:Object(p["c"])(o["g"],!1),selectSize:Object(p["c"])(o["n"],0)})),a["Y"]),J=n["default"].extend({name:a["Y"],mixins:[v["a"],y,f["a"],O["a"],h["a"],m["a"],$,S["a"]],props:G,data:function(){return{localValue:this[x]}},computed:{computedSelectSize:function(){return this.plain||0!==this.selectSize?this.selectSize:null},inputClass:function(){return[this.plain?"form-control":"custom-select",this.size&&this.plain?"form-control-".concat(this.size):null,this.size&&!this.plain?"custom-select-".concat(this.size):null,this.stateClass]}},watch:{value:function(e){this.localValue=e},localValue:function(){this.$emit(_,this.localValue)}},methods:{focus:function(){Object(l["d"])(this.$refs.input)},blur:function(){Object(l["c"])(this.$refs.input)},onChange:function(e){var t=this,r=e.target,n=Object(c["f"])(r.options).filter((function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));this.localValue=r.multiple?n:n[0],this.$nextTick((function(){t.$emit(i["d"],t.localValue)}))}},render:function(e){var t=this.name,r=this.disabled,n=this.required,a=this.computedSelectSize,i=this.localValue,o=this.formOptions.map((function(t,r){var n=t.value,a=t.label,i=t.options,o=t.disabled,s="option_".concat(r);return Object(b["a"])(i)?e(V,{props:{label:a,options:i},key:s}):e(D["a"],{props:{value:n,disabled:o},domProps:Object(u["a"])(t.html,t.text),key:s})}));return e("select",{class:this.inputClass,attrs:{id:this.safeId(),name:t,form:this.form||null,multiple:this.multiple||null,size:a,disabled:r,required:n,"aria-required":n?"true":null,"aria-invalid":this.computedAriaInvalid},on:{change:this.onChange},directives:[{name:"model",value:i}],ref:"input"},[this.normalizeSlot(s["q"]),o,this.normalizeSlot()])}})},"8e1d":function(e,t,r){"use strict";r("82e4")},ea4c:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r("2b0e"),a=r("b42e"),i=r("c637"),o=r("a723"),s=r("cf75"),c=Object(s["d"])({disabled:Object(s["c"])(o["g"],!1),value:Object(s["c"])(o["a"],void 0,!0)},i["Z"]),l=n["default"].extend({name:i["Z"],functional:!0,props:c,render:function(e,t){var r=t.props,n=t.data,i=t.children,o=r.value,s=r.disabled;return e("option",Object(a["a"])(n,{attrs:{disabled:s},domProps:{value:o}}),i)}})}}]);
//# sourceMappingURL=chunk-02013bfc.177abec6.js.map
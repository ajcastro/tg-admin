(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09608760"],{"2b3a":function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"auth-wrapper auth-v2"},[e("b-row",{staticClass:"auth-inner m-0"},[e("b-link",{staticClass:"brand-logo"},[e("vuexy-logo"),e("h2",{staticClass:"brand-text text-primary ml-1"},[t._v(" Vuexy ")])],1),e("b-col",{staticClass:"d-none d-lg-flex align-items-center p-5",attrs:{lg:"8"}},[e("div",{staticClass:"w-100 d-lg-flex align-items-center justify-content-center px-5"},[e("b-img",{attrs:{fluid:"",src:t.imgUrl,alt:"Register V2"}})],1)]),e("b-col",{staticClass:"d-flex align-items-center auth-bg px-2 p-lg-5",attrs:{lg:"4"}},[e("b-col",{staticClass:"px-xl-2 mx-auto",attrs:{sm:"8",md:"6",lg:"12"}},[e("b-card-title",{staticClass:"font-weight-bold mb-1",attrs:{"title-tag":"h2"}},[t._v(" Adventure starts here 🚀 ")]),e("b-card-text",{staticClass:"mb-2"},[t._v(" Make your app management easy and fun! ")]),e("validation-observer",{ref:"registerForm"},[e("b-form",{staticClass:"auth-register-form mt-2"},[e("b-form-group",{attrs:{label:"Username","label-for":"register-username"}},[e("validation-provider",{attrs:{name:"Username",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.errors;return[e("b-form-input",{attrs:{id:"register-username",name:"register-username",state:!(r.length>0)&&null,placeholder:"johndoe"},model:{value:t.username,callback:function(a){t.username=a},expression:"username"}}),e("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}])})],1),e("b-form-group",{attrs:{label:"Email","label-for":"register-email"}},[e("validation-provider",{attrs:{name:"Email",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.errors;return[e("b-form-input",{attrs:{id:"register-email",name:"register-email",state:!(r.length>0)&&null,placeholder:"john@example.com"},model:{value:t.userEmail,callback:function(a){t.userEmail=a},expression:"userEmail"}}),e("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}])})],1),e("b-form-group",{attrs:{"label-for":"register-password",label:"Password"}},[e("validation-provider",{attrs:{name:"Password",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var r=a.errors;return[e("b-input-group",{staticClass:"input-group-merge",class:r.length>0?"is-invalid":null},[e("b-form-input",{staticClass:"form-control-merge",attrs:{id:"register-password",type:t.passwordFieldType,state:!(r.length>0)&&null,name:"register-password",placeholder:"············"},model:{value:t.password,callback:function(a){t.password=a},expression:"password"}}),e("b-input-group-append",{attrs:{"is-text":""}},[e("feather-icon",{staticClass:"cursor-pointer",attrs:{icon:t.passwordToggleIcon},on:{click:t.togglePasswordVisibility}})],1)],1),e("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}])})],1),e("b-form-group",[e("b-form-checkbox",{attrs:{id:"register-privacy-policy",name:"checkbox-1"},model:{value:t.status,callback:function(a){t.status=a},expression:"status"}},[t._v(" I agree to "),e("b-link",[t._v("privacy policy & terms")])],1)],1),e("b-button",{attrs:{variant:"primary",block:"",type:"submit"},on:{click:function(a){return a.preventDefault(),t.validationForm.apply(null,arguments)}}},[t._v(" Sign up ")])],1)],1),e("p",{staticClass:"text-center mt-2"},[e("span",[t._v("Already have an account?")]),e("b-link",{attrs:{to:{name:"auth-login-v2"}}},[e("span",[t._v(" Sign in instead")])])],1),e("div",{staticClass:"divider my-2"},[e("div",{staticClass:"divider-text"},[t._v(" or ")])]),e("div",{staticClass:"auth-footer-btn d-flex justify-content-center"},[e("b-button",{attrs:{variant:"facebook",href:"javascript:void(0)"}},[e("feather-icon",{attrs:{icon:"FacebookIcon"}})],1),e("b-button",{attrs:{variant:"twitter",href:"javascript:void(0)"}},[e("feather-icon",{attrs:{icon:"TwitterIcon"}})],1),e("b-button",{attrs:{variant:"google",href:"javascript:void(0)"}},[e("feather-icon",{attrs:{icon:"MailIcon"}})],1),e("b-button",{attrs:{variant:"github",href:"javascript:void(0)"}},[e("feather-icon",{attrs:{icon:"GithubIcon"}})],1)],1)],1)],1)],1)],1)},s=[],i=e("7bb1"),o=e("088b"),n=e("a15b"),l=e("4918"),c=e("b28b"),u=e("aa59"),d=e("1947"),m=e("11de"),p=e("d6e4"),b=e("4968"),g=e("c3e6"),f=e("8226"),v=e("4797"),h=e("5e12"),x=e("ccc0"),w=e("8f03"),y=e("b91d"),C=e("4360"),k=e("223c"),_={components:{VuexyLogo:o["a"],BRow:n["a"],BImg:l["a"],BCol:c["a"],BLink:u["a"],BButton:d["a"],BForm:m["a"],BCardText:p["a"],BCardTitle:b["a"],BFormCheckbox:g["a"],BFormGroup:f["a"],BFormInput:v["a"],BInputGroup:h["a"],BInputGroupAppend:x["a"],ValidationProvider:i["b"],ValidationObserver:i["a"]},mixins:[y["a"]],data:function(){return{status:"",username:"",userEmail:"",password:"",sideImg:e("67df"),required:w["l"],email:w["g"]}},computed:{passwordToggleIcon:function(){return"password"===this.passwordFieldType?"EyeIcon":"EyeOffIcon"},imgUrl:function(){return"dark"===C["a"].state.appConfig.layout.skin?(this.sideImg=e("99b7"),this.sideImg):this.sideImg}},methods:{validationForm:function(){var t=this;this.$refs.registerForm.validate().then((function(a){a&&t.$toast({component:k["a"],props:{title:"Form Submitted",icon:"EditIcon",variant:"success"}})}))}}},I=_,B=(e("3293"),e("2877")),F=Object(B["a"])(I,r,s,!1,null,null,null);a["default"]=F.exports},3293:function(t,a,e){"use strict";e("3cd2")},"3cd2":function(t,a,e){}}]);
//# sourceMappingURL=chunk-09608760.c9edb2c3.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e63c012"],{1079:function(e,a,t){"use strict";var c=t("541c");a["a"]=c["a"]},a15b7:function(e,a,t){"use strict";t.d(a,"a",(function(){return v}));var c=t("b42e"),o=t("c637"),n=t("a723"),r=t("2326"),s=t("228e"),i=t("6c06"),l=t("b508"),b=t("d82f"),d=t("cf75"),u=t("fa73");function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);a&&(c=c.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,c)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){f(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function f(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var h=["start","end","center"],k=Object(l["a"])((function(e,a){return a=Object(u["h"])(Object(u["g"])(a)),a?Object(u["c"])(["row-cols",e,a].filter(i["a"]).join("-")):null})),g=Object(l["a"])((function(e){return Object(u["c"])(e.replace("cols",""))})),y=[],w=function(){var e=Object(s["b"])().reduce((function(e,a){return e[Object(d["g"])(a,"cols")]=Object(d["c"])(n["p"]),e}),Object(b["c"])(null));return y=Object(b["h"])(e),Object(d["d"])(Object(b["m"])(m(m({},e),{},{alignContent:Object(d["c"])(n["u"],null,(function(e){return Object(r["a"])(Object(r["b"])(h,"between","around","stretch"),e)})),alignH:Object(d["c"])(n["u"],null,(function(e){return Object(r["a"])(Object(r["b"])(h,"between","around"),e)})),alignV:Object(d["c"])(n["u"],null,(function(e){return Object(r["a"])(Object(r["b"])(h,"baseline","stretch"),e)})),noGutters:Object(d["c"])(n["g"],!1),tag:Object(d["c"])(n["u"],"div")})),o["Ob"])},v={name:o["Ob"],functional:!0,get props(){return delete this.props,this.props=w(),this.props},render:function(e,a){var t,o=a.props,n=a.data,r=a.children,s=o.alignV,i=o.alignH,l=o.alignContent,b=[];return y.forEach((function(e){var a=k(g(e),o[e]);a&&b.push(a)})),b.push((t={"no-gutters":o.noGutters},f(t,"align-items-".concat(s),s),f(t,"justify-content-".concat(i),i),f(t,"align-content-".concat(l),l),t)),e(o.tag,Object(c["a"])(n,{staticClass:"row",class:b}),r)}}},b28b:function(e,a,t){"use strict";t.d(a,"a",(function(){return x}));var c=t("b42e"),o=t("c637"),n=t("a723"),r=t("992e"),s=t("2326"),i=t("228e"),l=t("6c06"),b=t("7b1e"),d=t("b508"),u=t("d82f"),p=t("cf75"),m=t("fa73");function f(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);a&&(c=c.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,c)}return t}function h(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?f(Object(t),!0).forEach((function(a){k(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function k(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var g=["auto","start","end","center","baseline","stretch"],y=function(e,a,t){var c=e;if(!Object(b["p"])(t)&&!1!==t)return a&&(c+="-".concat(a)),"col"!==e||""!==t&&!0!==t?(c+="-".concat(t),Object(m["c"])(c)):Object(m["c"])(c)},w=Object(d["a"])(y),v=Object(u["c"])(null),j=function(){var e=Object(i["b"])().filter(l["a"]),a=e.reduce((function(e,a){return e[a]=Object(p["c"])(n["i"]),e}),Object(u["c"])(null)),t=e.reduce((function(e,a){return e[Object(p["g"])(a,"offset")]=Object(p["c"])(n["p"]),e}),Object(u["c"])(null)),c=e.reduce((function(e,a){return e[Object(p["g"])(a,"order")]=Object(p["c"])(n["p"]),e}),Object(u["c"])(null));return v=Object(u["a"])(Object(u["c"])(null),{col:Object(u["h"])(a),offset:Object(u["h"])(t),order:Object(u["h"])(c)}),Object(p["d"])(Object(u["m"])(h(h(h(h({},a),t),c),{},{alignSelf:Object(p["c"])(n["u"],null,(function(e){return Object(s["a"])(g,e)})),col:Object(p["c"])(n["g"],!1),cols:Object(p["c"])(n["p"]),offset:Object(p["c"])(n["p"]),order:Object(p["c"])(n["p"]),tag:Object(p["c"])(n["u"],"div")})),o["y"])},x={name:o["y"],functional:!0,get props(){return delete this.props,this.props=j()},render:function(e,a){var t,o=a.props,n=a.data,s=a.children,i=o.cols,l=o.offset,b=o.order,d=o.alignSelf,u=[];for(var p in v)for(var m=v[p],f=0;f<m.length;f++){var h=w(p,m[f].replace(p,""),o[m[f]]);h&&u.push(h)}var g=u.some((function(e){return r["e"].test(e)}));return u.push((t={col:o.col||!g&&!i},k(t,"col-".concat(i),i),k(t,"offset-".concat(l),l),k(t,"order-".concat(b),b),k(t,"align-self-".concat(d),d),t)),e(o.tag,Object(c["a"])(n,{class:u}),s)}}},d6e4:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var c=t("2b0e"),o=t("b42e"),n=t("c637"),r=t("a723"),s=t("cf75"),i=Object(s["d"])({textTag:Object(s["c"])(r["u"],"p")},n["u"]),l=c["default"].extend({name:n["u"],functional:!0,props:i,render:function(e,a){var t=a.props,c=a.data,n=a.children;return e(t.textTag,Object(o["a"])(c,{staticClass:"card-text"}),n)}})},e084:function(e,a,t){"use strict";t.r(a);var c=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-row",[t("b-col",{attrs:{lg:"6"}},[t("pill-basic")],1),t("b-col",{attrs:{lg:"6"}},[t("pill-vertical")],1),t("b-col",{attrs:{lg:"6"}},[t("pill-filled")],1),t("b-col",{attrs:{lg:"6"}},[t("pill-justified")],1),t("b-col",{attrs:{cols:"12"}},[t("pill-alignment")],1),t("b-col",{attrs:{cols:"12"}},[t("pill-themes")],1)],1)},o=[],n=t("a15b7"),r=t("b28b"),s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Basic"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeBasic)+" ")]},proxy:!0}])},[t("b-tabs",{attrs:{pills:""}},[t("b-tab",{attrs:{title:"Home",active:""}},[t("b-card-text",[e._v(" Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes brownie dragée ice cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake donut candy canes. Jelly beans croissant bonbon cookie toffee. Soufflé croissant lemon drops tootsie roll toffee tiramisu. ")])],1),t("b-tab",{attrs:{title:"Profile"}},[t("b-card-text",[e._v(" Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll sweet candy. Chocolate sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon drops. ")])],1),t("b-tab",{attrs:{title:"Disable",disabled:""}},[t("b-card-text",[e._v("Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake.")])],1),t("b-tab",{attrs:{title:"About"}},[t("b-card-text",[e._v(" Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Chocolate bonbon chocolate chocolate cake halvah tootsie roll marshmallow. Brownie chocolate toffee toffee jelly beans bonbon sesame snaps sugar plum candy canes. ")])],1)],1)],1)},i=[],l=t("1079"),b=t("6190"),d=t("d6e4"),u=t("f902"),p='\n<template>\n  <b-tabs pills>\n    <b-tab\n      title="Home"\n      active\n    >\n      <b-card-text>\n        Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes brownie dragée ice cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake donut candy canes. Jelly beans croissant bonbon cookie toffee. Soufflé croissant lemon drops tootsie roll toffee tiramisu.\n      </b-card-text>\n    </b-tab>\n    <b-tab title="Profile">\n      <b-card-text>\n        Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll sweet candy. Chocolate sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon drops.\n      </b-card-text>\n    </b-tab>\n    <b-tab\n      title="Disable"\n      disabled\n    >\n      <b-card-text>Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake.</b-card-text>\n    </b-tab>\n    <b-tab title="About">\n      <b-card-text>\n        Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Chocolate bonbon chocolate chocolate cake halvah tootsie roll marshmallow. Brownie chocolate toffee toffee jelly beans bonbon sesame snaps sugar plum candy canes.\n      </b-card-text>\n    </b-tab>\n  </b-tabs>\n</template>\n\n<script>\nimport { BTab, BTabs } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BTab,\n    BTabs,\n  },\n}\n<\/script>\n',m='\n<template>\n  <b-tabs fill pills>\n    <b-tab title="Home" active>\n      <b-card-text>\n        Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes brownie dragée ice cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake donut candy canes. Jelly beans croissant bonbon cookie toffee. Soufflé croissant lemon drops tootsie roll toffee tiramisu.\n      </b-card-text>\n    </b-tab>\n    <b-tab title="Profile">\n      <b-card-text>\n        About\n        Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll sweet candy. Chocolate sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon drops.\n      </b-card-text>\n    </b-tab>\n    <b-tab\n      title="Disabled"\n      disabled\n    >\n      <b-card-text>\n        Biscuit powder jelly beans.\n      </b-card-text>\n    </b-tab>\n    <b-tab title="About">\n      <b-card-text>\n        Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Chocolate bonbon chocolate chocolate cake halvah tootsie roll marshmallow. Brownie chocolate toffee toffee jelly beans bonbon sesame snaps sugar plum candy canes.\n      </b-card-text>\n    </b-tab>\n  </b-tabs>\n</template>\n\n<script>\nimport { BTabs, BTab } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BTabs,\n    BTab,\n  },\n}\n<\/script>\n',f='\n<template>\n  <b-tabs justified pills>\n    <b-tab title="Home" active>\n      <b-card-text>\n        Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes brownie dragée ice cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake donut candy canes. Jelly beans croissant bonbon cookie toffee. Soufflé croissant lemon drops tootsie roll toffee tiramisu.\n      </b-card-text>\n    </b-tab>\n    <b-tab title="Profile">\n      <b-card-text>\n        Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll sweet candy. Chocolate sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon drops.\n      </b-card-text>\n    </b-tab>\n    <b-tab\n      title="Disabled"\n      disabled\n    >\n      <b-card-text>\n        Tootsie roll oat cake.\n      </b-card-text>\n    </b-tab>\n    <b-tab title="About">\n      <b-card-text>\n        Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Chocolate bonbon chocolate chocolate cake halvah tootsie roll marshmallow. Brownie chocolate toffee toffee jelly beans bonbon sesame snaps sugar plum candy canes.\n      </b-card-text>\n    </b-tab>\n  </b-tabs>\n</template>\n\n<script>\nimport { BTabs, BTab } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BTabs,\n    BTab,\n  },\n}\n<\/script>\n',h='\n<template>\n   <b-tabs pills vertical>\n      <b-tab\n        title="Pill 1"\n        active\n      >\n        <b-card-text>\n          Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Bear claw donut sesame snaps bear claw liquorice jelly-o bear claw carrot cake. Icing croissant bonbon biscuit gummi bears.\n        </b-card-text>\n      </b-tab>\n      <b-tab title="Pill 2">\n        <b-card-text>\n          Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake. Sesame snaps wafer marshmallow danish dragée candy muffin jelly beans tootsie roll. Jelly beans oat cake chocolate cake tiramisu sweet.\n        </b-card-text>\n      </b-tab>\n      <b-tab title="Pill 3">\n        <b-card-text>\n          Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake. Macaroon brownie lemon drops croissant marzipan sweet roll macaroon lollipop. Danish fruitcake bonbon bear claw gummi bears apple pie.\n        </b-card-text>\n      </b-tab>\n      <b-tab\n        title="Disabled"\n        disabled\n      >\n        <b-card-text>Macaroon brownie lemon drops croissant marzipan sweet roll macaroon lollipop.</b-card-text>\n      </b-tab>\n    </b-tabs>\n</template>\n\n<script>\nimport { BTabs, BTab } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BTabs,\n    BTab,\n  },\n}\n<\/script>\n',k='\n<template>\n  <div>\n      <h6 class="mb-2">\n      Left\n    </h6>\n    <b-tabs\n      pills\n      align="left"\n    >\n      <b-tab\n        title="Home"\n        active\n      >\n        <b-card-text>\n          {{ tabData[0][\'home\'] }}\n        </b-card-text>\n      </b-tab>\n      <b-tab title="Profile">\n        <b-card-text>\n          {{ tabData[1][\'profile\'] }}\n        </b-card-text>\n      </b-tab>\n      <b-tab\n        title="Disabled"\n        disabled\n      >\n        {{ tabData[2][\'disabled\'] }}\n      </b-tab>\n      <b-tab\n        title="About"\n      >\n        <b-card-text>\n          {{ tabData[3][\'about\'] }}\n        </b-card-text>\n      </b-tab>\n    </b-tabs>\n    <h6 class="mt-2 mb-2">\n      Center\n    </h6>\n    <b-tabs\n      pills\n      align="center"\n    >\n      <b-tab\n        title="Home"\n        active\n      >\n        <b-card-text>\n          {{ tabData[0][\'home\'] }}\n        </b-card-text>\n      </b-tab>\n      <b-tab title="Profile">\n        <b-card-text>\n          {{ tabData[1][\'profile\'] }}\n        </b-card-text>\n      </b-tab>\n      <b-tab\n        title="Disabled"\n        disabled\n      >\n        {{ tabData[2][\'disabled\'] }}\n      </b-tab>\n      <b-tab title="About">\n        <b-card-text>\n          {{ tabData[3][\'about\'] }}\n        </b-card-text>\n      </b-tab>\n    </b-tabs>\n    <h5 class="mt-2 mb-2">\n      Right\n    </h5>\n    <b-tabs\n      pills\n      align="right"\n    >\n      <b-tab\n        title="Home"\n        active\n      >\n        <b-card-text>\n          {{ tabData[0][\'home\'] }}\n        </b-card-text>\n      </b-tab>\n      <b-tab title="Profile">\n        <b-card-text>\n          {{ tabData[1][\'profile\'] }}\n        </b-card-text>\n      </b-tab>\n      <b-tab\n        title="Disabled"\n        disabled\n      >\n        {{ tabData[2][\'disabled\'] }}\n      </b-tab>\n      <b-tab title="About">\n        <b-card-text>\n          {{ tabData[3][\'about\'] }}\n        </b-card-text>\n      </b-tab>\n    </b-tabs>\n  </div>\n</template>\n\n<script>\nimport { BTabs, BTab } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BTabs,\n    BTab,\n  },\n   data() {\n    return {\n      tabData: [\n        { home: \'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake pastry.\' },\n        { profile: \'Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Pudding candy canes sugar plum cookie chocolate cake powder croissant.\' },\n        { disabled: \'lorem\' },\n        { about: \'Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit.\' },\n      ],\n    }\n  },\n}\n<\/script>\n',g='\n<template>\n  <div>\n    <h6>Primary</h6>\n    <b-tabs pills nav-class="nav-pill-primary">\n      <b-tab title="Active" active/>\n      <b-tab title="Link"/>\n      <b-tab title="Link"/>\n      <b-tab title="Disabled"disabled/>\n    </b-tabs>\n    <h6>Secondary</h6>\n    <b-tabs pills nav-class="nav-pill-secondary">\n      <b-tab title="Active" active/>\n      <b-tab title="Link"/>\n      <b-tab title="Link"/>\n      <b-tab title="Disabled" disabled/>\n    </b-tabs>\n    <h6>Success</h6>\n    <b-tabs pills nav-class="nav-pill-success">\n      <b-tab title="Active" active />\n      <b-tab title="Link"/>\n      <b-tab title="Link"/>\n      <b-tab title="Disabled" disabled/>\n    </b-tabs>\n    <h6>Warning</h6>\n    <b-tabs pills nav-class="nav-pill-warning">\n      <b-tab title="Active" active/>\n      <b-tab title="Link"/>\n      <b-tab title="Link"/>\n      <b-tab title="Disabled" disabled/>\n    </b-tabs>\n    <h6>Danger</h6>\n    <b-tabs pills nav-class="nav-pill-danger">\n      <b-tab title="Active" active/>\n      <b-tab title="Link"/>\n      <b-tab title="Link"/>\n      <b-tab title="Disabled" disabled/>\n    </b-tabs>\n    <h6>Info</h6>\n    <b-tabs pills nav-class="nav-pill-info">\n      <b-tab title="Active" active/>\n      <b-tab title="Link"/>\n      <b-tab title="Link"/>\n      <b-tab title="Disabled" disabled/>\n    </b-tabs>\n  </div>\n</template>\n\n<script>\nimport { BTab, BTabs } from \'bootstrap-vue\'\n\nexport default {\n  components: {\n    BTab,\n    BTabs,\n  },\n}\n<\/script>\n',y={components:{BCardCode:l["a"],BTab:b["a"],BCardText:d["a"],BTabs:u["a"]},data:function(){return{codeBasic:p}}},w=y,v=t("2877"),j=Object(v["a"])(w,s,i,!1,null,null,null),x=j.exports,O=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Filled"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeFill)+" ")]},proxy:!0}])},[t("b-tabs",{attrs:{fill:"",pills:""}},[t("b-tab",{attrs:{title:"Home",active:""}},[t("b-card-text",[e._v(" Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes brownie dragée ice cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake donut candy canes. Jelly beans croissant bonbon cookie toffee. Soufflé croissant lemon drops tootsie roll toffee tiramisu. ")])],1),t("b-tab",{attrs:{title:"Profile"}},[t("b-card-text",[e._v(" About Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll sweet candy. Chocolate sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon drops. ")])],1),t("b-tab",{attrs:{title:"Disabled",disabled:""}},[t("b-card-text",[e._v(" Biscuit powder jelly beans. ")])],1),t("b-tab",{attrs:{title:"About"}},[t("b-card-text",[e._v(" Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Chocolate bonbon chocolate chocolate cake halvah tootsie roll marshmallow. Brownie chocolate toffee toffee jelly beans bonbon sesame snaps sugar plum candy canes. ")])],1)],1)],1)},C=[],_={components:{BCardCode:l["a"],BCardText:d["a"],BTabs:u["a"],BTab:b["a"]},data:function(){return{codeFill:m}}},D=_,B=Object(v["a"])(D,O,C,!1,null,null,null),P=B.exports,T=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Justified"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeJustified)+" ")]},proxy:!0}])},[t("b-tabs",{attrs:{justified:"",pills:""}},[t("b-tab",{attrs:{title:"Home",active:""}},[t("b-card-text",[e._v(" Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake pastry. Lollipop caramels sesame snaps pie tootsie roll macaroon dessert. Muffin jujubes brownie dragée ice cream cheesecake icing. Danish brownie pastry cotton candy donut. Cheesecake donut candy canes. Jelly beans croissant bonbon cookie toffee. Soufflé croissant lemon drops tootsie roll toffee tiramisu. ")])],1),t("b-tab",{attrs:{title:"Profile"}},[t("b-card-text",[e._v(" Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake.Bear claw chocolate chocolate cake jelly-o pudding lemon drops sweet roll sweet candy. Chocolate sweet chocolate bar candy chocolate bar chupa chups gummi bears lemon drops. ")])],1),t("b-tab",{attrs:{title:"Disabled",disabled:""}},[t("b-card-text",[e._v(" Tootsie roll oat cake. ")])],1),t("b-tab",{attrs:{title:"About"}},[t("b-card-text",[e._v(" Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Chocolate bonbon chocolate chocolate cake halvah tootsie roll marshmallow. Brownie chocolate toffee toffee jelly beans bonbon sesame snaps sugar plum candy canes. ")])],1)],1)],1)},L=[],A={components:{BCardCode:l["a"],BCardText:d["a"],BTabs:u["a"],BTab:b["a"]},data:function(){return{codeJustified:f}}},S=A,q=Object(v["a"])(S,T,L,!1,null,null,null),H=q.exports,J=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Vertically Stacked Pills"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeVertical)+" ")]},proxy:!0}])},[t("b-tabs",{attrs:{pills:"",vertical:""}},[t("b-tab",{attrs:{title:"Pill 1",active:""}},[t("b-card-text",[e._v(" Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Bear claw donut sesame snaps bear claw liquorice jelly-o bear claw carrot cake. Icing croissant bonbon biscuit gummi bears. ")])],1),t("b-tab",{attrs:{title:"Pill 2"}},[t("b-card-text",[e._v(" Pudding candy canes sugar plum cookie chocolate cake powder croissant. Carrot cake tiramisu danish candy cake muffin croissant tart dessert. Tiramisu caramels candy canes chocolate cake sweet roll liquorice icing cupcake. Sesame snaps wafer marshmallow danish dragée candy muffin jelly beans tootsie roll. Jelly beans oat cake chocolate cake tiramisu sweet. ")])],1),t("b-tab",{attrs:{title:"Pill 3"}},[t("b-card-text",[e._v(" Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake. Macaroon brownie lemon drops croissant marzipan sweet roll macaroon lollipop. Danish fruitcake bonbon bear claw gummi bears apple pie. ")])],1),t("b-tab",{attrs:{title:"Disabled",disabled:""}},[t("b-card-text",[e._v("Macaroon brownie lemon drops croissant marzipan sweet roll macaroon lollipop.")])],1)],1)],1)},z=[],E={components:{BCardCode:l["a"],BCardText:d["a"],BTabs:u["a"],BTab:b["a"]},data:function(){return{codeVertical:h}}},M=E,I=Object(v["a"])(M,J,z,!1,null,null,null),$=I.exports,V=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Alignments"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeAlignment)+" ")]},proxy:!0}])},[t("h6",{staticClass:"mb-2"},[e._v(" Left ")]),t("b-tabs",{attrs:{pills:"",align:"left"}},[t("b-tab",{attrs:{title:"Home",active:""}},[t("b-card-text",[e._v(" "+e._s(e.tabData[0]["home"])+" ")])],1),t("b-tab",{attrs:{title:"Profile"}},[t("b-card-text",[e._v(" "+e._s(e.tabData[1]["profile"])+" ")])],1),t("b-tab",{attrs:{title:"Disabled",disabled:""}},[e._v(" "+e._s(e.tabData[2]["disabled"])+" ")]),t("b-tab",{attrs:{title:"About"}},[t("b-card-text",[e._v(" "+e._s(e.tabData[3]["about"])+" ")])],1)],1),t("h6",{staticClass:"mt-2 mb-2"},[e._v(" Center ")]),t("b-tabs",{attrs:{pills:"",align:"center"}},[t("b-tab",{attrs:{title:"Home",active:""}},[t("b-card-text",[e._v(" "+e._s(e.tabData[0]["home"])+" ")])],1),t("b-tab",{attrs:{title:"Profile"}},[t("b-card-text",[e._v(" "+e._s(e.tabData[1]["profile"])+" ")])],1),t("b-tab",{attrs:{title:"Disabled",disabled:""}},[e._v(" "+e._s(e.tabData[2]["disabled"])+" ")]),t("b-tab",{attrs:{title:"About"}},[t("b-card-text",[e._v(" "+e._s(e.tabData[3]["about"])+" ")])],1)],1),t("h5",{staticClass:"mt-2 mb-2"},[e._v(" Right ")]),t("b-tabs",{attrs:{pills:"",align:"right"}},[t("b-tab",{attrs:{title:"Home",active:""}},[t("b-card-text",[e._v(" "+e._s(e.tabData[0]["home"])+" ")])],1),t("b-tab",{attrs:{title:"Profile"}},[t("b-card-text",[e._v(" "+e._s(e.tabData[1]["profile"])+" ")])],1),t("b-tab",{attrs:{title:"Disabled",disabled:""}},[e._v(" "+e._s(e.tabData[2]["disabled"])+" ")]),t("b-tab",{attrs:{title:"About"}},[t("b-card-text",[e._v(" "+e._s(e.tabData[3]["about"])+" ")])],1)],1)],1)},F=[],R={components:{BCardCode:l["a"],BCardText:d["a"],BTabs:u["a"],BTab:b["a"]},data:function(){return{tabData:[{home:"Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake pastry."},{profile:"Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Pudding candy canes sugar plum cookie chocolate cake powder croissant."},{disabled:"lorem"},{about:"Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit."}],codeAlignment:k}}},G=R,W=Object(v["a"])(G,V,F,!1,null,null,null),U=W.exports,K=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("b-card-code",{attrs:{title:"Pill Themes"},scopedSlots:e._u([{key:"code",fn:function(){return[e._v(" "+e._s(e.codeThemes)+" ")]},proxy:!0}])},[t("b-card-text",[t("span",[e._v("Use class ")]),t("code",[e._v(".nav-pill-{color-name}")]),t("span",[e._v(" with ")]),t("code",[e._v("<b-tabs>")]),t("span",[e._v(" class to apply color according to your choice.")])]),t("h6",[e._v("Primary")]),t("b-tabs",{attrs:{pills:"","nav-class":"nav-pill-primary"}},[t("b-tab",{attrs:{title:"Active",active:""}}),t("b-tab",{attrs:{title:"Link"}}),t("b-tab",{attrs:{title:"Link"}}),t("b-tab",{attrs:{title:"Disabled",disabled:""}})],1),t("h6",[e._v("Secondary")]),t("b-tabs",{attrs:{pills:"","nav-class":"nav-pill-secondary"}},[t("b-tab",{attrs:{title:"Active",active:""}}),t("b-tab",{attrs:{title:"Link"}}),t("b-tab",{attrs:{title:"Link"}}),t("b-tab",{attrs:{title:"Disabled",disabled:""}})],1),t("h6",[e._v("Success")]),t("b-tabs",{attrs:{pills:"","nav-class":"nav-pill-success"}},[t("b-tab",{attrs:{title:"Active",active:""}}),t("b-tab",{attrs:{title:"Link"}}),t("b-tab",{attrs:{title:"Link"}}),t("b-tab",{attrs:{title:"Disabled",disabled:""}})],1),t("h6",[e._v("Danger")]),t("b-tabs",{attrs:{pills:"","nav-class":"nav-pill-danger"}},[t("b-tab",{attrs:{title:"Active",active:""}}),t("b-tab",{attrs:{title:"Link"}}),t("b-tab",{attrs:{title:"Link"}}),t("b-tab",{attrs:{title:"Disabled",disabled:""}})],1),t("h6",[e._v("Warning")]),t("b-tabs",{attrs:{pills:"","nav-class":"nav-pill-warning"}},[t("b-tab",{attrs:{title:"Active",active:""}}),t("b-tab",{attrs:{title:"Link"}}),t("b-tab",{attrs:{title:"Link"}}),t("b-tab",{attrs:{title:"Disabled",disabled:""}})],1),t("h6",[e._v("Info")]),t("b-tabs",{attrs:{pills:"","nav-class":"nav-pill-info"}},[t("b-tab",{attrs:{title:"Active",active:""}}),t("b-tab",{attrs:{title:"Link"}}),t("b-tab",{attrs:{title:"Link"}}),t("b-tab",{attrs:{title:"Disabled",disabled:""}})],1)],1)},N=[],Q={components:{BCardCode:l["a"],BCardText:d["a"],BTab:b["a"],BTabs:u["a"]},data:function(){return{codeThemes:g}}},X=Q,Y=Object(v["a"])(X,K,N,!1,null,null,null),Z=Y.exports,ee={components:{BRow:n["a"],BCol:r["a"],PillBasic:x,PillFilled:P,PillVertical:$,PillJustified:H,PillAlignment:U,PillThemes:Z}},ae=ee,te=Object(v["a"])(ae,c,o,!1,null,null,null);a["default"]=te.exports}}]);
//# sourceMappingURL=chunk-0e63c012.728f5ebf.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{528:function(e,t,n){"use strict";var r={props:{alert:Object}},s=n(26),o=Object(s.a)(r,function(){var e=this.$createElement;return(this._self._c||e)("el-alert",{attrs:{title:this.alert.message,type:this.alert.type,center:"","show-icon":""}})},[],!1,null,null,null);t.a=o.exports},664:function(e,t,n){var r=n(694);"string"===typeof r&&(r=[[e.i,r,""]]);var s={hmr:!0,sourceMap:!0,transform:void 0,insertInto:void 0};n(72)(r,s);r.locals&&(e.exports=r.locals)},665:function(e,t,n){var r=n(696);"string"===typeof r&&(r=[[e.i,r,""]]);var s={hmr:!0,sourceMap:!0,transform:void 0,insertInto:void 0};n(72)(r,s);r.locals&&(e.exports=r.locals)},667:function(e,t,n){var r={"./af":531,"./af.js":531,"./ar":532,"./ar-dz":533,"./ar-dz.js":533,"./ar-kw":534,"./ar-kw.js":534,"./ar-ly":535,"./ar-ly.js":535,"./ar-ma":536,"./ar-ma.js":536,"./ar-sa":537,"./ar-sa.js":537,"./ar-tn":538,"./ar-tn.js":538,"./ar.js":532,"./az":539,"./az.js":539,"./be":540,"./be.js":540,"./bg":541,"./bg.js":541,"./bm":542,"./bm.js":542,"./bn":543,"./bn.js":543,"./bo":544,"./bo.js":544,"./br":545,"./br.js":545,"./bs":546,"./bs.js":546,"./ca":547,"./ca.js":547,"./cs":548,"./cs.js":548,"./cv":549,"./cv.js":549,"./cy":550,"./cy.js":550,"./da":551,"./da.js":551,"./de":552,"./de-at":553,"./de-at.js":553,"./de-ch":554,"./de-ch.js":554,"./de.js":552,"./dv":555,"./dv.js":555,"./el":556,"./el.js":556,"./en-SG":557,"./en-SG.js":557,"./en-au":558,"./en-au.js":558,"./en-ca":559,"./en-ca.js":559,"./en-gb":560,"./en-gb.js":560,"./en-ie":561,"./en-ie.js":561,"./en-il":562,"./en-il.js":562,"./en-nz":563,"./en-nz.js":563,"./eo":564,"./eo.js":564,"./es":565,"./es-do":566,"./es-do.js":566,"./es-us":567,"./es-us.js":567,"./es.js":565,"./et":568,"./et.js":568,"./eu":569,"./eu.js":569,"./fa":570,"./fa.js":570,"./fi":571,"./fi.js":571,"./fo":572,"./fo.js":572,"./fr":573,"./fr-ca":574,"./fr-ca.js":574,"./fr-ch":575,"./fr-ch.js":575,"./fr.js":573,"./fy":576,"./fy.js":576,"./ga":577,"./ga.js":577,"./gd":578,"./gd.js":578,"./gl":579,"./gl.js":579,"./gom-latn":580,"./gom-latn.js":580,"./gu":581,"./gu.js":581,"./he":582,"./he.js":582,"./hi":583,"./hi.js":583,"./hr":584,"./hr.js":584,"./hu":585,"./hu.js":585,"./hy-am":586,"./hy-am.js":586,"./id":587,"./id.js":587,"./is":588,"./is.js":588,"./it":589,"./it-ch":590,"./it-ch.js":590,"./it.js":589,"./ja":591,"./ja.js":591,"./jv":592,"./jv.js":592,"./ka":593,"./ka.js":593,"./kk":594,"./kk.js":594,"./km":595,"./km.js":595,"./kn":596,"./kn.js":596,"./ko":597,"./ko.js":597,"./ku":598,"./ku.js":598,"./ky":599,"./ky.js":599,"./lb":600,"./lb.js":600,"./lo":601,"./lo.js":601,"./lt":602,"./lt.js":602,"./lv":603,"./lv.js":603,"./me":604,"./me.js":604,"./mi":605,"./mi.js":605,"./mk":606,"./mk.js":606,"./ml":607,"./ml.js":607,"./mn":608,"./mn.js":608,"./mr":609,"./mr.js":609,"./ms":610,"./ms-my":611,"./ms-my.js":611,"./ms.js":610,"./mt":612,"./mt.js":612,"./my":613,"./my.js":613,"./nb":614,"./nb.js":614,"./ne":615,"./ne.js":615,"./nl":616,"./nl-be":617,"./nl-be.js":617,"./nl.js":616,"./nn":618,"./nn.js":618,"./pa-in":619,"./pa-in.js":619,"./pl":620,"./pl.js":620,"./pt":621,"./pt-br":622,"./pt-br.js":622,"./pt.js":621,"./ro":623,"./ro.js":623,"./ru":624,"./ru.js":624,"./sd":625,"./sd.js":625,"./se":626,"./se.js":626,"./si":627,"./si.js":627,"./sk":628,"./sk.js":628,"./sl":629,"./sl.js":629,"./sq":630,"./sq.js":630,"./sr":631,"./sr-cyrl":632,"./sr-cyrl.js":632,"./sr.js":631,"./ss":633,"./ss.js":633,"./sv":634,"./sv.js":634,"./sw":635,"./sw.js":635,"./ta":636,"./ta.js":636,"./te":637,"./te.js":637,"./tet":638,"./tet.js":638,"./tg":639,"./tg.js":639,"./th":640,"./th.js":640,"./tl-ph":641,"./tl-ph.js":641,"./tlh":642,"./tlh.js":642,"./tr":643,"./tr.js":643,"./tzl":644,"./tzl.js":644,"./tzm":645,"./tzm-latn":646,"./tzm-latn.js":646,"./tzm.js":645,"./ug-cn":647,"./ug-cn.js":647,"./uk":648,"./uk.js":648,"./ur":649,"./ur.js":649,"./uz":650,"./uz-latn":651,"./uz-latn.js":651,"./uz.js":650,"./vi":652,"./vi.js":652,"./x-pseudo":653,"./x-pseudo.js":653,"./yo":654,"./yo.js":654,"./zh-cn":655,"./zh-cn.js":655,"./zh-hk":656,"./zh-hk.js":656,"./zh-tw":657,"./zh-tw.js":657};function s(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}s.keys=function(){return Object.keys(r)},s.resolve=o,e.exports=s,s.id=667},692:function(e,t,n){(function(e){var n,r,s,o;function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}o=function(){return function(e){function t(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=16)}([function(e,t,n){var r=n(2)(n(15),n(18),null,null);r.options.__file="/Users/norman/Projects/vue-stripe-elements/src/StripeElement.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] StripeElement.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={stripe:{type:[String,Object],required:!0},value:{type:String,required:!1},options:{type:Object,required:!1}}},function(e,t){e.exports=function(e,t,n,r){var s,o=e=e||{},i=a(e.default);"object"!==i&&"function"!==i||(s=e,o=e.default);var u="function"==typeof o?o.options:o;if(t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n),r){var l=u.computed||(u.computed={});Object.keys(r).forEach(function(e){var t=r[e];l[e]=function(){return t}})}return{esModule:s,exports:o,options:u}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==a(Symbol.iterator)?function(e){return a(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":a(e)};t.create=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"object"===(void 0===e?"undefined":r(e))&&"function"==typeof e.elements&&(s.instance=e),void 0===window.Stripe&&null===s.instance?console.error("Stripe V3 library not loaded!"):null===s.instance&&(s.instance=window.Stripe(e)),s.instance.elements?null===s.elements&&(s.elements=s.instance.elements(t)):console.error("Stripe V3 library not loaded!")})(t,n.elements||{}),n.style=Object.assign(o,n.style||{});var a=s.elements.create(e,n);return s.createToken=function(e){return s.instance.createToken(a,e)},s.createSource=function(e){return s.instance.createSource(a,e)},s.retrieveSource=function(e){return s.instance.retrieveSource(e)},s.paymentRequest=function(e){return s.instance.paymentRequest(e)},s.redirectToCheckout=function(e){return s.instance.redirectToCheckout(e)},s.retrievePaymentIntent=function(e){return s.instance.retrievePaymentIntent(e)},s.handleCardPayment=function(e,t){return s.instance.handleCardPayment(e,a,t)},s.handleCardSetup=function(e,t){return s.instance.handleCardSetup(e,a,t)},s.confirmPaymentIntent=function(e,t){return s.instance.confirmPaymentIntent(e,a,t)},s.createPaymentMethod=function(e,t){return s.instance.createPaymentMethod(e,a,t)},a},t.destroy=function(){s.instance=null,s.elements=null,s.createToken=null,s.createSource=null,s.retrieveSource=null,s.paymentRequest=null,s.redirectToCheckout=null,s.retrievePaymentIntent=null,s.handleCardPayment=null,s.handleCardSetup=null,s.confirmPaymentIntent=null,s.createPaymentMethod=null};var s=t.Stripe={instance:null,createToken:null,createSource:null,retrieveSource:null,paymentRequest:null,redirectToCheckout:null,retrievePaymentIntent:null,handleCardPayment:null,handleCardSetup:null,confirmPaymentIntent:null,createPaymentMethod:null,elements:null},o=t.baseStyle={base:{color:"#32325d",lineHeight:"24px",fontFamily:"Helvetica Neue",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},function(e,t,n){"use strict";"function"!=typeof Object.assign&&(Object.assign=function(e,t){if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(var n=Object(e),r=1;r<arguments.length;r++){var s=arguments[r];if(null!=s)for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(n[o]=s[o])}return n}),e.exports=Object.assign},function(e,t,n){var r=n(2)(n(10),n(22),null,null);r.options.__file="/Users/norman/Projects/vue-stripe-elements/src/Card.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] Card.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){var r=n(2)(n(11),n(19),null,null);r.options.__file="/Users/norman/Projects/vue-stripe-elements/src/CardCvc.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] CardCvc.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){var r=n(2)(n(12),n(21),null,null);r.options.__file="/Users/norman/Projects/vue-stripe-elements/src/CardExpiry.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] CardExpiry.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){var r=n(2)(n(13),n(20),null,null);r.options.__file="/Users/norman/Projects/vue-stripe-elements/src/CardNumber.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] CardNumber.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){var r=n(2)(n(14),n(17),null,null);r.options.__file="/Users/norman/Projects/vue-stripe-elements/src/PostalCode.vue",r.esModule&&Object.keys(r.esModule).some(function(e){return"default"!==e&&"__esModule"!==e})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] PostalCode.vue: functional components are not supported with templates, they should use render functions."),e.exports=r.exports},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=r(n(1)),o=r(n(0));t.default={props:s.default,components:{StripeElement:o.default},methods:{blur:function(){this.$refs.element.blur()},clear:function(){this.$refs.element.clear()},focus:function(){this.$refs.element.focus()},update:function(e){this.$refs.element.update(e)}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=r(n(1)),o=r(n(0));t.default={props:s.default,components:{StripeElement:o.default},methods:{blur:function(){this.$refs.element.blur()},clear:function(){this.$refs.element.clear()},focus:function(){this.$refs.element.focus()},update:function(e){this.$refs.element.update(e)}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=r(n(1)),o=r(n(0));t.default={props:s.default,components:{StripeElement:o.default},methods:{blur:function(){this.$refs.element.blur()},clear:function(){this.$refs.element.clear()},focus:function(){this.$refs.element.focus()},update:function(e){this.$refs.element.update(e)}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=r(n(1)),o=r(n(0));t.default={props:s.default,components:{StripeElement:o.default},methods:{blur:function(){this.$refs.element.blur()},clear:function(){this.$refs.element.clear()},focus:function(){this.$refs.element.focus()},update:function(e){this.$refs.element.update(e)}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=r(n(1)),o=r(n(0));t.default={props:s.default,components:{StripeElement:o.default},methods:{blur:function(){this.$refs.element.blur()},clear:function(){this.$refs.element.clear()},focus:function(){this.$refs.element.focus()},update:function(e){this.$refs.element.update(e)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){return e&&e.__esModule?e:{default:e}}(n(1)),s=n(3);t.default={props:Object.assign({type:{type:String,required:!0}},r.default),beforeMount:function(){var e=this;this._element=(0,s.create)(this.type,this.stripe,this.options),this._element.on("blur",function(t){return e.$emit("blur")}),this._element.on("focus",function(t){return e.$emit("focus")}),this._element.on("change",function(t){return e.$emit("change",t)})},mounted:function(){var e=document.createElement("div");this._element.mount(e),this.$el.appendChild(e)},beforeDestroy:function(){this._element.unmount(),this._element.destroy(),(0,s.destroy)()},methods:{blur:function(){this._element.blur()},clear:function(){this._element.clear()},focus:function(){this._element.focus()},update:function(){this._element.update()}}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}n(4);var s=n(3),o=r(n(0)),a=r(n(5)),i=r(n(7)),u=r(n(6)),l=r(n(8)),c=r(n(9));e.exports={Card:a.default,CardNumber:l.default,CardExpiry:i.default,CardCvc:u.default,PostalCode:c.default,StripeElement:o.default,baseStyle:s.baseStyle,get instance(){return s.Stripe.instance},get createToken(){return s.Stripe.createToken},get createSource(){return s.Stripe.createSource},get retrieveSource(){return s.Stripe.retrieveSource},get paymentRequest(){return s.Stripe.paymentRequest},get redirectToCheckout(){return s.Stripe.redirectToCheckout},get retrievePaymentIntent(){return s.Stripe.retrievePaymentIntent},get handleCardPayment(){return s.Stripe.handleCardPayment},get handleCardSetup(){return s.Stripe.handleCardSetup},get confirmPaymentIntent(){return s.Stripe.confirmPaymentIntent},get createPaymentMethod(){return s.Stripe.createPaymentMethod}}},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("stripe-element",{ref:"element",attrs:{type:"postalCode",stripe:e.stripe,value:e.value,options:e.options},on:{blur:function(t){e.$emit("blur")},focus:function(t){e.$emit("focus")},empty:function(t){e.$emit("empty")},change:function(t){e.$emit("change",t)}}})},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("div")},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("stripe-element",{ref:"element",attrs:{type:"cardCvc",stripe:e.stripe,value:e.value,options:e.options},on:{blur:function(t){e.$emit("blur")},focus:function(t){e.$emit("focus")},change:function(t){e.$emit("change",t)}}})},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("stripe-element",{ref:"element",attrs:{type:"cardNumber",stripe:e.stripe,value:e.value,options:e.options},on:{blur:function(t){e.$emit("blur")},focus:function(t){e.$emit("focus")},change:function(t){e.$emit("change",t)}}})},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("stripe-element",{ref:"element",attrs:{type:"cardExpiry",stripe:e.stripe,value:e.value,options:e.options},on:{blur:function(t){e.$emit("blur")},focus:function(t){e.$emit("focus")},change:function(t){e.$emit("change",t)}}})},staticRenderFns:[]},e.exports.render._withStripped=!0},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("stripe-element",{ref:"element",attrs:{type:"card",stripe:e.stripe,value:e.value,options:e.options},on:{blur:function(t){e.$emit("blur")},focus:function(t){e.$emit("focus")},change:function(t){e.$emit("change",t)}}})},staticRenderFns:[]},e.exports.render._withStripped=!0}])},"object"==a(t)&&"object"==a(e)?e.exports=o():(r=[],void 0===(s="function"===typeof(n=o)?n.apply(t,r):n)||(e.exports=s))}).call(this,n(666)(e))},693:function(e,t,n){"use strict";var r=n(664);n.n(r).a},694:function(e,t,n){(e.exports=n(71)(!0)).push([e.i,"\n.stripe-card {\n  width: 300px;\n  border: 1px solid grey;\n}\n.stripe-card.complete {\n  border-color: green;\n}\n","",{version:3,sources:["/usr/src/app/app/javascript/components/User/app/javascript/components/User/stripe.vue"],names:[],mappings:";AA+CA;EACA,YAAA;EACA,sBAAA;AACA;AACA;EACA,mBAAA;AACA",file:"stripe.vue?vue&type=style&index=0&lang=css&",sourcesContent:["<template>\n  <div>\n    <card class='stripe-card'\n      :class='{ complete }'\n      :stripe='stripe_key'\n      :options='stripeOptions'\n      @change='complete = $event.complete'\n    />\n    <button class='pay-with-stripe' @click='pay' :disabled='!complete'>\u767b\u9332</button>\n  </div>\n</template>\n\n<script>\nimport { Card, createToken } from 'vue-stripe-elements-plus'\n\nexport default {\n  data () {\n    return {\n      // stripe\n      complete: false,\n      stripe_key: '',\n      stripeOptions: {\n      },\n    }\n  },\n\n  components: { Card },\n\n  methods: {\n    pay () {\n      createToken().then(\n        // token\u3092\u5f97\u308b   \n        data => console.log('ok', data.token)\n      )\n    },\n    // \u74b0\u5883URL\u306b\u3088\u308a\u3001key\u306e\u53d6\u5f97\u304c\u5909\u308f\u308b\n    env () {\n      this.stripe_key = (window.location.hostname === 'vamos3.jp') ? '\u672c\u756a' : 'pk_test_6PxlCtpTt4jdcV2Xml8aOVAC00Ocm5Hq6x'\n    }\n  },\n  mounted () {\n    this.env()\n  }\n}\n<\/script>\n\n<style>\n.stripe-card {\n  width: 300px;\n  border: 1px solid grey;\n}\n.stripe-card.complete {\n  border-color: green;\n}\n</style>"]}])},695:function(e,t,n){"use strict";var r=n(665);n.n(r).a},696:function(e,t,n){(e.exports=n(71)(!0)).push([e.i,"\nth {\n    text-align: left;\n    width: 20%;\n}\nth,\ntd {\n    padding: 20px;\n    color: #909399;\n    border-bottom: 1px solid #EBEEF5;\n}\ntr:nth-child(even) {\n    background: #FAFAFA;\n}\n.sub-title {\n    padding: 20px;\n}\n","",{version:3,sources:["/usr/src/app/app/javascript/pages/User/app/javascript/pages/User/index.vue"],names:[],mappings:";AAmGA;IACA,gBAAA;IACA,UAAA;AACA;AAEA;;IAEA,aAAA;IACA,cAAA;IACA,gCAAA;AACA;AAEA;IACA,mBAAA;AACA;AAEA;IACA,aAAA;AACA",file:"index.vue?vue&type=style&index=0&lang=css&",sourcesContent:['<template>\n    <div>\n        \x3c!-- Alert Message --\x3e\n        <alert-message v-if="alert.type" :alert="alert" />\n        <h1>\u4f1a\u54e1\u7ba1\u7406</h1>\n        <hr />\n        <el-button class="button" type="primary" @click="update">\u7de8\u96c6</el-button>\n        <table style="width: 100%;border-spacing: 0px;">\n            <tr>\n                <th>\u30e6\u30fc\u30b6\u30fc\u540d</th>\n                <td>{{user.name}}</td>\n            </tr>\n            <tr>\n                <th>\u767b\u9332\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9</th>\n                <td>{{user.email}}</td>\n            </tr>\n            <tr>\n                <th>\u30af\u30ec\u30b8\u30c3\u30c8\u30ab\u30fc\u30c9\u767b\u9332</th>\n                <td>\n                    <stripe />\n                    <div v-if="billing_status == 0">\n                        <el-tag type="info">\u672a\u767b\u9332</el-tag>\n                    </div>\n                    <div v-else-if="billing_status==1">\n                        <el-tag type="success">\u767b\u9332\u6e08</el-tag>\n                    </div>\n                    \x3c!-- <div>\u203bstripe\u3067\u30af\u30ec\u30ab\u767b\u9332\u306e\u6709\u7121\u306f\u53d6\u308c\u308b\u304b\uff1f</div> --\x3e\n                </td>\n            </tr>\n            <tr>\n                <th>\u6c7a\u6e08\u72b6\u6cc1</th>\n                <td>\n                    <div v-if="billing_status==0">\n                        <el-tag type="info">\u7121\u6599\u767b\u9332\u671f\u9593</el-tag>\n                        <div>\u3042\u3068{{last_date}}\u65e5</div>\n                    </div>\n                </td>\n            </tr>\n        </table>\n        \x3c!-- \u7de8\u96c6 --\x3e\n        <update-component :dialogStatus="dialogStatus" :toggleModal="toggleModal" :init="init" :user="user" />\n    </div>\n</template>\n\n<script>\nimport moment from \'moment\';\nimport AlertMessage from \'@/components/Shared/Alert\'\nimport UpdateComponent from \'@/components/User/Modal/update.vue\'\nimport Stripe from \'@/components/User/stripe.vue\'\nvar created_date = moment([2019, 5, 20]); //\u4eee\u3067\u65e5\u4ed8\u5165\u529b\nexport default {\n    components: {\n        AlertMessage,\n        UpdateComponent,\n        Stripe\n    },\n    data() {\n        return {\n            mode: \'\',\n            alert: {},\n            user: {},\n            billing_status: 0,\n            created_at: created_date,\n            edit: false,\n            dialogStatus: false,\n        }\n    },\n    methods: {\n        toggleModal() {\n            this.dialogStatus = !this.dialogStatus\n        },\n        // Read\n        init() {\n            this.axios.get(\'/api/v1/users/\' + this.$auth.user().id)\n                .then(res => {\n                    this.user = res.data.user\n                })\n                .catch(error => {\n                    this.alert = { type: error.status, message: error.message }\n                })\n        },\n        // \u65b0\u898f Create\n        update() {\n            this.toggleModal()\n        }\n    },\n    computed: {\n        last_date: function() {\n            let days = moment(this.created_at).add(60, "days"); //60\u65e5\u5f8c\u306e\u65e5\u4ed8\n            return days.diff(moment(), \'days\'); //\u5f8c\u4f55\u65e5\u5f8c\uff1f\n        }\n    },\n    mounted() {\n        this.init()\n    }\n}\n<\/script>\n\n<style>\nth {\n    text-align: left;\n    width: 20%;\n}\n\nth,\ntd {\n    padding: 20px;\n    color: #909399;\n    border-bottom: 1px solid #EBEEF5;\n}\n\ntr:nth-child(even) {\n    background: #FAFAFA;\n}\n\n.sub-title {\n    padding: 20px;\n}\n</style>']}])},701:function(e,t,n){"use strict";n.r(t);var r=n(526),s=n.n(r),o=n(528),a={props:{dialogStatus:Boolean,toggleModal:Function,init:Function},data:function(){return{data:{email:this.$auth.user().email,name:this.$auth.user().name},rules:{name:[{required:!0,message:"\u8acb\u8f38\u5165\u30e6\u30fc\u30b6\u30fc\u540d",trigger:"change"}],email:[{required:!0,message:"\u8acb\u8f38\u5165\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",trigger:"change"}]}}},methods:{update:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.axios.put("/api/v1/users/"+t.$auth.user().id,{user:t.data}).then(function(e){t.toggleModal(),t.$message({message:"ok",type:e.data.status}),t.init()}).catch(function(e){t.toggleModal(),t.$message({message:e.data.message,type:e.data.status})})})},closeDialog:function(e){this.$refs[e].resetFields(),this.toggleModal()}}},i=n(26),u=Object(i.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-dialog",{attrs:{title:"\u4f1a\u54e1\u7de8\u96c6",visible:e.dialogStatus,"before-close":e.toggleModal},on:{"update:visible":function(t){e.dialogStatus=t}}},[n("el-form",{ref:"ruleForm",attrs:{model:e.data,rules:e.rules}},[n("el-form-item",{attrs:{label:"\u30e6\u30fc\u30b6\u30fc\u540d",prop:"name"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.data.name,callback:function(t){e.$set(e.data,"name",t)},expression:"data.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"\u767b\u9332\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9",prop:"email"}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:e.data.email,callback:function(t){e.$set(e.data,"email",t)},expression:"data.email"}})],1)],1),e._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(t){return e.closeDialog("ruleForm")}}},[e._v("\u30ad\u30e3\u30f3\u30bb\u30eb")]),e._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.update("ruleForm")}}},[e._v("\u4fee\u6b63")])],1)],1)},[],!1,null,null,null).exports,l=n(692),c={data:function(){return{complete:!1,stripe_key:"",stripeOptions:{}}},components:{Card:l.Card},methods:{pay:function(){Object(l.createToken)().then(function(e){return console.log("ok",e.token)})},env:function(){this.stripe_key="vamos3.jp"===window.location.hostname?"\u672c\u756a":"pk_test_6PxlCtpTt4jdcV2Xml8aOVAC00Ocm5Hq6x"}},mounted:function(){this.env()}},d=(n(693),Object(i.a)(c,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("card",{staticClass:"stripe-card",class:{complete:e.complete},attrs:{stripe:e.stripe_key,options:e.stripeOptions},on:{change:function(t){e.complete=t.complete}}}),e._v(" "),n("button",{staticClass:"pay-with-stripe",attrs:{disabled:!e.complete},on:{click:e.pay}},[e._v("\u767b\u9332")])],1)},[],!1,null,null,null).exports),p=s()([2019,5,20]),f={components:{AlertMessage:o.a,UpdateComponent:u,Stripe:d},data:function(){return{mode:"",alert:{},user:{},billing_status:0,created_at:p,edit:!1,dialogStatus:!1}},methods:{toggleModal:function(){this.dialogStatus=!this.dialogStatus},init:function(){var e=this;this.axios.get("/api/v1/users/"+this.$auth.user().id).then(function(t){e.user=t.data.user}).catch(function(t){e.alert={type:t.status,message:t.message}})},update:function(){this.toggleModal()}},computed:{last_date:function(){return s()(this.created_at).add(60,"days").diff(s()(),"days")}},mounted:function(){this.init()}},m=(n(695),Object(i.a)(f,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.alert.type?n("alert-message",{attrs:{alert:e.alert}}):e._e(),e._v(" "),n("h1",[e._v("\u4f1a\u54e1\u7ba1\u7406")]),e._v(" "),n("hr"),e._v(" "),n("el-button",{staticClass:"button",attrs:{type:"primary"},on:{click:e.update}},[e._v("\u7de8\u96c6")]),e._v(" "),n("table",{staticStyle:{width:"100%","border-spacing":"0px"}},[n("tr",[n("th",[e._v("\u30e6\u30fc\u30b6\u30fc\u540d")]),e._v(" "),n("td",[e._v(e._s(e.user.name))])]),e._v(" "),n("tr",[n("th",[e._v("\u767b\u9332\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9")]),e._v(" "),n("td",[e._v(e._s(e.user.email))])]),e._v(" "),n("tr",[n("th",[e._v("\u30af\u30ec\u30b8\u30c3\u30c8\u30ab\u30fc\u30c9\u767b\u9332")]),e._v(" "),n("td",[n("stripe"),e._v(" "),0==e.billing_status?n("div",[n("el-tag",{attrs:{type:"info"}},[e._v("\u672a\u767b\u9332")])],1):1==e.billing_status?n("div",[n("el-tag",{attrs:{type:"success"}},[e._v("\u767b\u9332\u6e08")])],1):e._e()],1)]),e._v(" "),n("tr",[n("th",[e._v("\u6c7a\u6e08\u72b6\u6cc1")]),e._v(" "),n("td",[0==e.billing_status?n("div",[n("el-tag",{attrs:{type:"info"}},[e._v("\u7121\u6599\u767b\u9332\u671f\u9593")]),e._v(" "),n("div",[e._v("\u3042\u3068"+e._s(e.last_date)+"\u65e5")])],1):e._e()])])]),e._v(" "),n("update-component",{attrs:{dialogStatus:e.dialogStatus,toggleModal:e.toggleModal,init:e.init,user:e.user}})],1)},[],!1,null,null,null));t.default=m.exports}}]);
//# sourceMappingURL=3-2ee3079eaf1234417fb0.chunk.js.map
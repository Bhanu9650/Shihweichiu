(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{641:function(e,t,a){},651:function(e,t,a){"use strict";var r=a(641);a.n(r).a},671:function(e,t,a){"use strict";a.r(t);var r={data:function(){return{data:{body:{user:{email:"yanagi.yoshio@creatorslab.jp",password:"test0123"}},rememberMe:!0},rules:{email:[{required:!0,message:"Account is required",trigger:"blur"},{type:"email",message:"Account is not a valid email",trigger:["blur","change"]}],password:[{required:!0,message:"Password is required",trigger:"blur"}]}}},methods:{Login:function(){this.$auth.login({data:this.data.body,rememberMe:this.data.rememberMe}).then(function(e){console.log("success "+e)}).catch(function(e){console.log("error "+res)})}},mounted:function(){this.$auth.redirect()}},s=(a(651),a(26)),o=Object(s.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("\u4f1a\u54e1\u30ed\u30b0\u30a4\u30f3")])]),e._v(" "),a("div",[a("el-form",{staticClass:"demo-ruleForm",attrs:{"label-width":"100px"}},[a("el-form-item",{attrs:{label:"\u30a2\u30ab\u30a6\u30f3\u30c8",prop:"email"}},[a("el-input",{model:{value:e.data.body.user.email,callback:function(t){e.$set(e.data.body.user,"email",t)},expression:"data.body.user.email"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"\u30d1\u30b9\u30ef\u30fc\u30c9",prop:"password"}},[a("el-input",{attrs:{type:"password",autocomplete:"off","show-password":""},model:{value:e.data.body.user.password,callback:function(t){e.$set(e.data.body.user,"password",t)},expression:"data.body.user.password"}})],1),e._v(" "),a("el-form-item",[a("el-checkbox",{attrs:{label:"RememberMe",name:"type"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.Login()}}},[e._v("\u30ed\u30b0\u30a4\u30f3")])],1)],1),e._v(" "),a("div",{staticClass:"clearfix align-center"},[a("router-link",{attrs:{to:"/auth/sign_up"}},[e._v("\u4f1a\u54e1\u767b\u9332")]),e._v(" "),a("router-link",{attrs:{to:"/auth/forget_password"}},[e._v("\u30d1\u30b9\u30ef\u30fc\u30c9\u5fd8\u308c")])],1)],1)])},[],!1,null,null,null);t.default=o.exports}}]);
//# sourceMappingURL=6-6334c699758586494ec6.chunk.js.map
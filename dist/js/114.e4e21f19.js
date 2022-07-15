"use strict";(self["webpackChunkfood_pro"]=self["webpackChunkfood_pro"]||[]).push([[114],{1114:function(s,e,t){t.r(e),t.d(e,{default:function(){return c}});var i=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"login"},[s.sel&&s.al?t("div",{staticClass:"sel"},[s._v(" 请认真阅读用户协议，并勾选 ")]):s._e(),t("div",{staticClass:"loginbox"},[t("div",{staticClass:"loginbox_h"},[t("router-link",{attrs:{to:"/register"}},[s._v("注册")]),t("a",{staticClass:"on",attrs:{href:"javascript:;"}},[s._v("登录")])],1),t("div",{staticClass:"loginbox_c",staticStyle:{clear:"both",height:"285px"}},[t("div",{staticClass:"loginbox_l"},[t("ul",[t("li",[t("label",{attrs:{for:"username"}}),t("input",{directives:[{name:"model",rawName:"v-model",value:s.username,expression:"username"}],attrs:{type:"text",name:"username",id:"username",placeholder:"手机号/昵称:"},domProps:{value:s.username},on:{blur:s.checkName,input:function(e){e.target.composing||(s.username=e.target.value)}}}),t("span",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"show"}],staticClass:"user"},[s._v("用户名不能为空")])]),t("li",{staticStyle:{border:"0"}},[t("label",{attrs:{for:"password"}}),t("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],attrs:{type:"password",name:"password",id:"password",placeholder:"密码："},domProps:{value:s.password},on:{blur:function(e){s.al=!0},focus:s.checkPwd,input:function(e){e.target.composing||(s.password=e.target.value)}}}),t("span",{directives:[{name:"show",rawName:"v-show",value:s.showed,expression:"showed"}],staticClass:"user"},[s._v("密码必须6位数字")])])]),t("p",{staticClass:"clear"},[t("router-link",{staticClass:"right",attrs:{to:"/for_get"}},[s._v("忘记密码？")])],1),t("label",[t("input",{attrs:{type:"checkbox"},on:{click:s.checkbox}}),s._v(" 登录即代表你同意美食天下《 "),t("router-link",{attrs:{to:"/yhxy"}},[s._v("用户协议")]),s._v(" 》和《 "),t("router-link",{attrs:{to:"/yszc"}},[s._v("隐私政策")]),s._v(" 》 ")],1),t("el-button",{staticClass:"loginbtn",attrs:{id:"loginbtn",disabled:s.sel,type:"primary"},on:{click:s.login}},[s._v(" 登录 ")])],1),s._m(0)])])])},a=[function(){var s=this,e=s.$createElement,i=s._self._c||e;return i("div",{staticClass:"loginbox_r"},[i("img",{staticStyle:{margin:"50px 0 0"},attrs:{width:"110",src:t(5611),alt:""}}),i("p",{staticStyle:{"padding-bottom":"10px"}},[s._v("扫描二维码下载客户端")])])}],o=t(4665),r={data(){return{username:"",password:"",sel:!0,al:!1,show:!1,showed:!1}},methods:{...(0,o.OI)(["updataUsername"]),checkPwd(){this.password&&/^\d{6}$/.test(this.password)?this.showed=!1:this.showed=!0},checkName(){this.show=!this.username},login(){const{username:s,password:e}=this;console.log(s,e);const t="/user/login",i=`username=${s}&password=${e}`;this.axios.post(t,i).then((e=>{if(console.log(e),1==e.data.code){const e=`/create/user?username=${s}`;this.axios.get(e).then((s=>{console.log(s.data.data[0].avatar_image),this.updataUsername({name:this.username,avatar:s.data.data[0].avatar_image}),this.$router.push("/"),this.$message({message:"登陆成功！！",type:"success"})}))}else this.$message.error("用户名或密码有误")}))},checkbox(s){this.sel=!s.target.checked}}},n=r,E=t(1001),h=(0,E.Z)(n,i,a,!1,null,"60185774",null),c=h.exports},5611:function(s){s.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=114.e4e21f19.js.map
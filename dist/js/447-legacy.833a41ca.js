"use strict";(self["webpackChunkfood_pro"]=self["webpackChunkfood_pro"]||[]).push([[447],{96447:function(e,r,t){t.r(r),t.d(r,{default:function(){return m}});var s=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"for-get"},[e._m(0),t("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{model:{value:e.form.username,callback:function(r){e.$set(e.form,"username",r)},expression:"form.username"}})],1),t("el-form-item",[t("el-button",{staticClass:"w",attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("下一步")])],1)],1),t("div",[e._v("如有疑问，请发送邮件联系客服 help@meishichina.com")])],1)},a=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("img",{attrs:{src:"/1.png",alt:""}}),t("span",[e._v("|")]),t("span",[e._v("找回密码")])])}],n={data:function(){return{form:{username:""},rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}]}}},methods:{submitForm:function(){var e=this;this.axios.get("/user/userId?username=".concat(this.form.username)).then((function(r){201!=r.data.code?e.$router.push("/get_pwd/".concat(r.data.data[0].uid)):e.$notify.error({title:"错误",message:"未查询到该用户信息"})}))}}},o=n,u=t(1001),i=(0,u.Z)(o,s,a,!1,null,"46803f38",null),m=i.exports}}]);
//# sourceMappingURL=447-legacy.833a41ca.js.map
"use strict";(self["webpackChunkfood_pro"]=self["webpackChunkfood_pro"]||[]).push([[903],{83903:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules}},[a("el-form-item",{attrs:{label:"菜单名称",prop:"input"}},[a("el-input",{attrs:{placeholder:"请输入菜单名称"},model:{value:t.form.input,callback:function(e){t.$set(t.form,"input",e)},expression:"form.input"}})],1),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{attrs:{type:"textarea",rows:6,placeholder:"请输入菜单描述信息"},model:{value:t.form.textarea,callback:function(e){t.$set(t.form,"textarea",e)},expression:"form.textarea"}})],1),a("el-form-item",[a("el-upload",{attrs:{action:"http://39.103.66.129:3001/create/upload","list-type":"picture-card",name:"uploadFile","on-success":t.handleAvatarSuccess},scopedSlots:t._u([{key:"file",fn:function(e){var i=e.file;return a("div",{},[a("img",{staticClass:"el-upload-list__item-thumbnail",attrs:{src:i.url,alt:""}}),a("span",{staticClass:"el-upload-list__item-actions"},[a("span",{staticClass:"el-upload-list__item-preview",on:{click:function(e){return t.handlePictureCardPreview(i)}}},[a("i",{staticClass:"el-icon-zoom-in"})])])])}}])},[a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v(" 只能上传jpg文件，且不超过500kb ")]),a("i",{staticClass:"el-icon-plus",attrs:{slot:"default"},slot:"default"})]),a("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1),a("el-form-item",[a("el-button",{staticClass:"create",attrs:{type:"danger",disabled:t.open},on:{click:t.onSubmit}},[t._v(" 创建菜单 ")])],1)],1)],1)},s=[],l=(a(74916),a(23123),a(92222),{data:function(){return{form:{input:"",textarea:""},rules:{input:[{required:!0,message:"请输入菜单名称",trigger:"blur"}]},dialogImageUrl:"",dialogVisible:!1,img:"",open:!0}},methods:{handleAvatarSuccess:function(t){console.log(t),this.img=t.urls[0].split("/").pop(),this.open=!1},onSubmit:function(){var t=this,e=this.form,a=e.input,i=e.textarea,s=new Date,l="cname=".concat(a,"&cdetail=").concat(i,"&cimg=").concat(this.img,"&ctime=").concat(s.getTime()/1e3,"&username=").concat(this.$store.state.username);this.axios.post("/create/store",l).then((function(e){console.log(e),1==e.data.code?(t.$router.push("/center/mycollect"),t.$message({message:"发布成功！！",type:"success"})):t.$message.error("发布失败")}))},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0}}}),o=l,r=a(1001),n=(0,r.Z)(o,i,s,!1,null,"f0d958e0",null),c=n.exports}}]);
//# sourceMappingURL=903-legacy.369a85ca.js.map
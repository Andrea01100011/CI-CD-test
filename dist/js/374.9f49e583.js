"use strict";(self["webpackChunkfood_pro"]=self["webpackChunkfood_pro"]||[]).push([[374],{6777:function(t,e,a){a.d(e,{Z:function(){return c}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"health-head"},[s("div",{staticClass:"f1"},[s("div",[s("img",{attrs:{src:a(182),alt:""}}),s("el-button",{attrs:{type:"danger"}},[t._v(t._s(t.title))])],1),s("div",{staticStyle:{width:"350px"}},[s("el-input",{attrs:{placeholder:"请输入内容"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.goSearch.apply(null,arguments)}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[s("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"},[s("router-link",{attrs:{to:"/health_search/"+t.search}},[t._v(" 搜索 ")])],1)],1)],1)])])},r=[],l={props:["title"],data(){return{search:""}},methods:{goSearch(){const t=`/health_search/${this.search}`;this.search&&this.$route.path!=t&&(this.$router.push(t),this.search="")}}},n=l,h=a(1001),i=(0,h.Z)(n,s,r,!1,null,"1da0a067",null),c=i.exports},9334:function(t,e,a){a.r(e),a.d(e,{default:function(){return o}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.data?a("div",{staticClass:"health-search"},[a("health-head-1",{attrs:{title:"热门搜索"}}),a("div",{staticClass:"search"},[a("span",[t._v(t._s(t.httile))]),a("span",[t._v("约"+t._s(null!=t.data.data?t.data.data.length:0)+"条结果")])]),t._l(t.data.data,(function(e){return a("div",{key:e.hid,staticClass:"health-cell"},[a("img",{attrs:{src:"/images/"+e.himg,alt:""}}),a("div",[a("h3",{domProps:{innerHTML:t._s(t.reg(e.httile,t.httile))},on:{click:function(a){return t.$router.push("/health_detail/"+e.hid)}}}),a("div",[t._v(t._s(t.moment(e.htime).format("YYYY年MM月DD日 HH:mm:ss")))]),a("p",[t._v(" "+t._s(e.subtitle)+" ")])])])}))],2):t._e()])},r=[],l=a(6777),n={components:{HealthHead1:l.Z},props:["httile"],data(){return{data:null}},watch:{httile(t,e){this.getData()}},methods:{getData(){this.axios.get(`/news/search?httile=${this.httile}`).then((t=>{console.log(t),this.data=t.data}))},reg(t,e){if(t){let a=`(${e})`,s=new RegExp(a,"g");return t.replace(s,`<span style="color:#F56C6C">${e}</span>`)}}},mounted(){this.getData()}},h=n,i=a(1001),c=(0,i.Z)(h,s,r,!1,null,"1dac9f4d",null),o=c.exports}}]);
//# sourceMappingURL=374.9f49e583.js.map
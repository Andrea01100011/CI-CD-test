"use strict";(self["webpackChunkfood_pro"]=self["webpackChunkfood_pro"]||[]).push([[777],{6777:function(t,e,a){a.d(e,{Z:function(){return d}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"health-head"},[s("div",{staticClass:"f1"},[s("div",[s("img",{attrs:{src:a(182),alt:""}}),s("el-button",{attrs:{type:"danger"}},[t._v(t._s(t.title))])],1),s("div",{staticStyle:{width:"350px"}},[s("el-input",{attrs:{placeholder:"请输入内容"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.goSearch.apply(null,arguments)}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[s("el-button",{attrs:{slot:"append",icon:"el-icon-search"},slot:"append"},[s("router-link",{attrs:{to:"/health_search/"+t.search}},[t._v(" 搜索 ")])],1)],1)],1)])])},i=[],r={props:["title"],data(){return{search:""}},methods:{goSearch(){const t=`/health_search/${this.search}`;this.search&&this.$route.path!=t&&(this.$router.push(t),this.search="")}}},h=r,l=a(1001),n=(0,l.Z)(h,s,i,!1,null,"1da0a067",null),d=n.exports},5034:function(t,e,a){a.r(e),a.d(e,{default:function(){return o}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"health-detail"},[t._l(t.data.data,(function(e){return a("div",{key:e.hid},[a("health-head-1",{attrs:{title:"饮食健康"}}),a("div",{staticClass:"mbx"},[a("span",[t._v("您的位置：")]),a("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("美食天下")]),a("el-breadcrumb-item",{attrs:{to:{path:"/health"}}},[t._v("饮食健康")]),a("el-breadcrumb-item",[t._v(t._s(e.htype))]),a("el-breadcrumb-item",[t._v("正文")])],1)],1),[a("div",{staticClass:"zw"},[a("h2",[t._v(t._s(e.httile))]),a("div",[t._v(t._s(t.moment(e.htime).format("YYYY年MM月DD日 HH:mm:ss")))]),a("div",{domProps:{innerHTML:t._s(e.hdetail)}})])]],2)})),t.ListData?a("div",{staticClass:"health_tjlj"},[a("h2",[t._v("为你推荐（健康专栏）")]),t._l(t.ListData.data,(function(e){return a("div",{key:e.hid},[a("h4",{on:{click:function(a){return t.$router.push("/health_detail/"+e.hid)}}},[t._v(t._s(e.httile))]),a("p",[t._v(" "+t._s(e.subtitle)+" ")])])}))],2):t._e()],2)},i=[],r=a(6777),h={components:{HealthHead1:r.Z},props:["hid"],watch:{hid(t,e){this.getData(),this.getListData(),window.scrollTo(0,0)}},data(){return{data:"",ListData:""}},methods:{getData(){this.axios(`/news/detail?hid=${this.hid}`).then((t=>{this.data=t.data}))},getListData(){this.axios.get(`/news/link?hid=${this.hid}`).then((t=>{this.ListData=t.data}))}},mounted(){this.getData(),this.getListData()}},l=h,n=a(1001),d=(0,n.Z)(l,s,i,!1,null,"4ddc8299",null),o=d.exports}}]);
//# sourceMappingURL=777.9c2e7a62.js.map
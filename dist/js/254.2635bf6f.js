"use strict";(self["webpackChunkfood_pro"]=self["webpackChunkfood_pro"]||[]).push([[254],{254:function(t,n,e){e.r(n),e.d(n,{default:function(){return c}});var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("health-head",{attrs:{title:"食材"}}),t.info?e("div",{staticClass:"box"},[e("div",[e("h2",[t._v(t._s(t.info[0].fname))])]),e("div",[e("h3",[t._v(t._s(t.info[0].fname)+"的做法")]),t._l(t.info,(function(n){return e("div",{key:n.mid},[e("router-link",{attrs:{to:"food-detail/"+n.mid}},[e("div",[e("img",{attrs:{src:/images/+n.finished_img}})]),e("p",[t._v(t._s(n.mname))])]),e("a",{attrs:{href:"#"}},[t._v("__")])],1)}))],2)]):t._e()],1)},i=[],a=e(6166),s=e.n(a),r=e(9617),f={components:{HealthHead:r.Z},data(){return{info:null}},mounted(){s().get(`/menu/food_list${location.search}`).then((t=>this.info=t.data.data)).catch((function(t){console.log(t)})),console.log(this.info)}},l=f,d=e(1001),u=(0,d.Z)(l,o,i,!1,null,"4a757a25",null),c=u.exports}}]);
//# sourceMappingURL=254.2635bf6f.js.map
"use strict";(self["webpackChunkfood_pro"]=self["webpackChunkfood_pro"]||[]).push([[141],{38141:function(t,a,s){s.r(a),s.d(a,{default:function(){return m}});var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"shar"},[s("health-head",{attrs:{title:"社区"}}),s("div",{staticClass:"shar-botton"},[s("ul",t._l(t.data,(function(a){return s("li",{key:a.id},[s("div",{staticClass:"u"},[s("div",{staticClass:"us"},[s("router-link",{attrs:{to:"/notelist?id="+a.id}},[s("img",{attrs:{src:t.imgBase+a.avatar_image,alt:""}})])],1),s("div",{staticClass:"t"},[s("router-link",{attrs:{to:"/notelist?id="+a.id}},[t._v(t._s(a.username))]),s("p",[t._v(t._s(t.moment(a.shar_time).format("YYYY-MM-DD HH:mm:ss")))])],1)]),s("div",{staticClass:"pp"},[s("router-link",{attrs:{to:"/notelist?id="+a.id}},[t._v(t._s(a.shar_title))])],1),s("div",{staticClass:"m"},t._l(a.shar_img,(function(t,a){return s("a",{key:a,attrs:{href:"#"}},[s("img",{attrs:{src:"/images/"+t,alt:""}})])})),0)])})),0)])],1)},e=[],r=s(93019),n=(s(21249),s(74916),s(23123),s(29617)),o=s(34665),l={components:{HealthHead:n.Z},computed:(0,r.Z)({},(0,o.rn)(["imgBase"])),mounted:function(){this.getData()},data:function(){return{data:[]}},methods:{getData:function(){var t=this,a="/shar/noteList";this.axios.get(a).then((function(a){t.data=a.data.data.map((function(t){return t.shar_img=t.shar_img.split(","),t}))}))}}},u=l,d=s(1001),c=(0,d.Z)(u,i,e,!1,null,"69a966ec",null),m=c.exports}}]);
//# sourceMappingURL=141-legacy.4f655f96.js.map
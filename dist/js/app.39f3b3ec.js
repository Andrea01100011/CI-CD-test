(function(){var t={9617:function(t,e,s){"use strict";s.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"health-head"},[a("div",{staticClass:"f1"},[a("div",[a("img",{attrs:{src:s(182),alt:""}}),a("el-button",{attrs:{type:"danger"}},[t._v(t._s(t.title))])],1),a("div",{staticStyle:{width:"350px"}},[a("el-input",{attrs:{placeholder:"请输入内容"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.goSearch.apply(null,arguments)}},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},nativeOn:{"!click":function(e){return t.goSearch.apply(null,arguments)}},slot:"append"},[t._v("搜索")])],1)],1)])])},n=[],r={props:["title"],data(){return{input:null}},methods:{goSearch(){const t=`/menu_search/${this.input}`;this.input?this.$route.path!=t&&(this.$router.push(t),this.input=""):"/menu"!=this.$route.path&&(this.$router.push("/menu"),this.input="")}}},i=r,o=s(1001),l=(0,o.Z)(i,a,n,!1,null,"7dff5515",null),c=l.exports},6700:function(t,e,s){var a={"./af":2398,"./af.js":2398,"./ar":4207,"./ar-dz":3382,"./ar-dz.js":3382,"./ar-kw":6525,"./ar-kw.js":6525,"./ar-ly":7098,"./ar-ly.js":7098,"./ar-ma":6483,"./ar-ma.js":6483,"./ar-sa":3961,"./ar-sa.js":3961,"./ar-tn":7401,"./ar-tn.js":7401,"./ar.js":4207,"./az":903,"./az.js":903,"./be":1174,"./be.js":1174,"./bg":4615,"./bg.js":4615,"./bm":225,"./bm.js":225,"./bn":9751,"./bn-bd":544,"./bn-bd.js":544,"./bn.js":9751,"./bo":6894,"./bo.js":6894,"./br":8566,"./br.js":8566,"./bs":959,"./bs.js":959,"./ca":2683,"./ca.js":2683,"./cs":4231,"./cs.js":4231,"./cv":999,"./cv.js":999,"./cy":4302,"./cy.js":4302,"./da":3601,"./da.js":3601,"./de":5509,"./de-at":2479,"./de-at.js":2479,"./de-ch":5948,"./de-ch.js":5948,"./de.js":5509,"./dv":1886,"./dv.js":1886,"./el":5113,"./el.js":5113,"./en-au":7377,"./en-au.js":7377,"./en-ca":9626,"./en-ca.js":9626,"./en-gb":5912,"./en-gb.js":5912,"./en-ie":2931,"./en-ie.js":2931,"./en-il":2243,"./en-il.js":2243,"./en-in":9779,"./en-in.js":9779,"./en-nz":9813,"./en-nz.js":9813,"./en-sg":4318,"./en-sg.js":4318,"./eo":4957,"./eo.js":4957,"./es":9243,"./es-do":7409,"./es-do.js":7409,"./es-mx":5188,"./es-mx.js":5188,"./es-us":6927,"./es-us.js":6927,"./es.js":9243,"./et":7731,"./et.js":7731,"./eu":1072,"./eu.js":1072,"./fa":9462,"./fa.js":9462,"./fi":3368,"./fi.js":3368,"./fil":3626,"./fil.js":3626,"./fo":6421,"./fo.js":6421,"./fr":974,"./fr-ca":7780,"./fr-ca.js":7780,"./fr-ch":9719,"./fr-ch.js":9719,"./fr.js":974,"./fy":8373,"./fy.js":8373,"./ga":3861,"./ga.js":3861,"./gd":4896,"./gd.js":4896,"./gl":739,"./gl.js":739,"./gom-deva":6737,"./gom-deva.js":6737,"./gom-latn":1979,"./gom-latn.js":1979,"./gu":2001,"./gu.js":2001,"./he":9671,"./he.js":9671,"./hi":2038,"./hi.js":2038,"./hr":1228,"./hr.js":1228,"./hu":87,"./hu.js":87,"./hy-am":3569,"./hy-am.js":3569,"./id":1977,"./id.js":1977,"./is":6853,"./is.js":6853,"./it":7859,"./it-ch":5626,"./it-ch.js":5626,"./it.js":7859,"./ja":4123,"./ja.js":4123,"./jv":6457,"./jv.js":6457,"./ka":638,"./ka.js":638,"./kk":6823,"./kk.js":6823,"./km":9493,"./km.js":9493,"./kn":1288,"./kn.js":1288,"./ko":9663,"./ko.js":9663,"./ku":805,"./ku.js":805,"./ky":7550,"./ky.js":7550,"./lb":6272,"./lb.js":6272,"./lo":9135,"./lo.js":9135,"./lt":1452,"./lt.js":1452,"./lv":5782,"./lv.js":5782,"./me":2181,"./me.js":2181,"./mi":258,"./mi.js":258,"./mk":5715,"./mk.js":5715,"./ml":538,"./ml.js":538,"./mn":3086,"./mn.js":3086,"./mr":5663,"./mr.js":5663,"./ms":5100,"./ms-my":2663,"./ms-my.js":2663,"./ms.js":5100,"./mt":880,"./mt.js":880,"./my":9099,"./my.js":9099,"./nb":8709,"./nb.js":8709,"./ne":2201,"./ne.js":2201,"./nl":1016,"./nl-be":1681,"./nl-be.js":1681,"./nl.js":1016,"./nn":5330,"./nn.js":5330,"./oc-lnc":7132,"./oc-lnc.js":7132,"./pa-in":251,"./pa-in.js":251,"./pl":3948,"./pl.js":3948,"./pt":9836,"./pt-br":8831,"./pt-br.js":8831,"./pt.js":9836,"./ro":8443,"./ro.js":8443,"./ru":4,"./ru.js":4,"./sd":4510,"./sd.js":4510,"./se":3148,"./se.js":3148,"./si":542,"./si.js":542,"./sk":7637,"./sk.js":7637,"./sl":5852,"./sl.js":5852,"./sq":611,"./sq.js":611,"./sr":7678,"./sr-cyrl":302,"./sr-cyrl.js":302,"./sr.js":7678,"./ss":1367,"./ss.js":1367,"./sv":2927,"./sv.js":2927,"./sw":5240,"./sw.js":5240,"./ta":2692,"./ta.js":2692,"./te":2132,"./te.js":2132,"./tet":8300,"./tet.js":8300,"./tg":7211,"./tg.js":7211,"./th":4050,"./th.js":4050,"./tk":3849,"./tk.js":3849,"./tl-ph":3964,"./tl-ph.js":3964,"./tlh":3650,"./tlh.js":3650,"./tr":4195,"./tr.js":4195,"./tzl":5529,"./tzl.js":5529,"./tzm":7520,"./tzm-latn":298,"./tzm-latn.js":298,"./tzm.js":7520,"./ug-cn":4134,"./ug-cn.js":4134,"./uk":5456,"./uk.js":5456,"./ur":5679,"./ur.js":5679,"./uz":9277,"./uz-latn":6446,"./uz-latn.js":6446,"./uz.js":9277,"./vi":3992,"./vi.js":3992,"./x-pseudo":8882,"./x-pseudo.js":8882,"./yo":2899,"./yo.js":2899,"./zh-cn":4017,"./zh-cn.js":4017,"./zh-hk":4831,"./zh-hk.js":4831,"./zh-mo":2881,"./zh-mo.js":2881,"./zh-tw":57,"./zh-tw.js":57};function n(t){var e=r(t);return s(e)}function r(t){if(!s.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}n.keys=function(){return Object.keys(a)},n.resolve=r,t.exports=n,n.id=6700},3193:function(t,e,s){"use strict";var a=s(8935),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("my-header"),s("keepAlive",[t.$route.meta.keepAlive?s("router-view"):t._e()],1),t.$route.meta.keepAlive?t._e():s("router-view"),t.showBtn?s("img",{staticClass:"top",staticStyle:{position:"fixed",bottom:"100px",right:"100px"},attrs:{src:"/images/goTop.png",alt:""},on:{click:t.gotop}}):t._e(),s("my-footer")],1)},r=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.$route.meta.hideFooter?t._e():s("div",[t._m(0)])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"botm"},[s("div",{staticClass:"bomleft"},[s("a",{staticClass:"nar1",attrs:{href:"#"}},[t._v("美食天下-让吃更美好")]),s("div",{staticClass:"bomnar1"},[s("a",{attrs:{href:"#"}},[t._v("关于我们")]),s("a",{attrs:{href:"#"}},[t._v("联系我们")]),s("a",{attrs:{href:"#"}},[t._v("加入我们")]),s("a",{attrs:{href:"#"}},[t._v("服务声明")]),s("a",{attrs:{href:"#"}},[t._v("友情链接")]),s("a",{attrs:{href:"#"}},[t._v("网站地图")]),s("a",{attrs:{href:"#"}},[t._v("移动应用")])]),s("div",{staticClass:"bomnar2"},[s("span",{staticStyle:{"font-weight":"bold","font-size":"13px"}},[t._v("友情链接：")]),s("a",{attrs:{href:"#"}},[t._v("愉悦妈妈")]),s("a",{attrs:{href:"#"}},[t._v("自由乐")]),s("a",{attrs:{href:"#"}},[t._v("爱奇艺生活")]),s("a",{attrs:{href:"#"}},[t._v("中华美食网")]),s("a",{attrs:{href:"#"}},[t._v("太平洋亲子网")]),s("a",{attrs:{href:"#"}},[t._v("红餐网")]),s("a",{attrs:{href:"#"}},[t._v("妈妈网")]),s("a",{attrs:{href:"#"}},[t._v("亲宝网")]),s("a",{attrs:{href:"#"}},[t._v("中国地图")]),s("a",{attrs:{href:"#"}},[t._v("民福康健康")]),s("a",{attrs:{href:"#"}},[t._v("波奇网")]),s("a",{attrs:{href:"#"}},[t._v("企业服务平台")]),s("a",{attrs:{href:"#"}},[t._v("餐饮杰")])]),s("div",{staticClass:"bomnar3"},[s("span",[t._v("版权所有 © 2004-2022")]),s("a",{attrs:{href:"#"}},[t._v("美食天下")]),s("span",[t._v(" 保留所有权利 -")]),s("img",{attrs:{height:"14",src:"//static.meishichina.com/v6/img/beian.png"}}),s("a",{attrs:{href:"#"}},[t._v("京公安网备 11010502031041号")]),s("i",[t._v("/")]),s("span",[t._v("京ICP证090244号")]),s("i",[t._v("/")]),s("a",{attrs:{href:"#"}},[t._v("京IC备10020153号")])])]),s("div",{staticClass:"bomright"},[s("img",{staticClass:"imgLoad",attrs:{width:"250",height:"100",src:"https://static.meishichina.com/v6/img/mobile.png",title:"美食天下移动版"}})])])}],l={},c=l,u=s(1001),d=(0,u.Z)(c,i,o,!1,null,null,null),h=d.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.$route.meta.hideHead?t._e():s("div",[s("div",{staticClass:"ntop"},[s("div",{staticClass:"nav"},[s("ul",{staticClass:"navlist"},[s("li",{staticClass:"btli bt1"},[s("router-link",{attrs:{to:"/"}},[s("i",{staticClass:"bi"},[t._v("美食天下")]),t._v("首页")])],1),s("li",{staticClass:"btli"},[s("router-link",{attrs:{to:"/menu"}},[t._v("菜谱")])],1),s("li",{staticClass:"btli"},[s("router-link",{attrs:{to:"/food"}},[t._v("食材")])],1),s("li",{staticClass:"btli"},[s("router-link",{attrs:{to:"/health"}},[t._v("健康")])],1),s("li",{staticClass:"btli"},[s("router-link",{attrs:{to:"/shar"}},[t._v("笔记")])],1),t._m(0),s("li",{staticClass:"btli bt2"}),s("li",{staticClass:"btli bt2"})]),s("div",{staticClass:"rightbbtn"},[s("div",[this.$store.state.username?s("div",{staticClass:"user_avatar"},[s("router-link",{attrs:{to:"/center"}},[s("img",{attrs:{src:t.imgBase+this.$store.state.useravatar,alt:""}})]),s("span",{on:{click:t.quit}},[t._v("退出")])],1):s("div",{staticClass:"rbtn"},[s("router-link",{staticClass:"bttn",attrs:{to:"/login"}},[t._v("登录/注册")])],1)]),s("ul",{staticClass:"navright"},[s("li",{staticClass:"btri btr2 nr1"},[t._v(" 发布 "),s("ul",{staticClass:"rightlist"},[s("li",[s("router-link",{attrs:{to:"/center"}},[t._v("发菜谱")])],1),s("li",[s("router-link",{attrs:{to:"/center"}},[t._v("发笔记")])],1)])]),s("li",{staticClass:"btri nr3"},[s("router-link",{attrs:{to:"/mobile"}},[t._v("客户端")])],1)])])])])])},f=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",{staticClass:"btli"},[s("a",{attrs:{href:"/health_search"}},[t._v("搜索")])])}],p=s(4665),v={computed:{...(0,p.rn)(["imgBase"])},methods:{quit(){this.$confirm("确认退出?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.$store.commit("updataUsername",{}),this.$router.push("/login"),sessionStorage.removeItem("name"),this.$message({type:"success",message:"退出成功!"})})).catch((()=>{this.$message({type:"info",message:"已取消"})}))}}},b=v,j=(0,u.Z)(b,m,f,!1,null,null,null),g=j.exports,k={components:{MyHeader:g,MyFooter:h},data(){return{showBtn:!1}},mounted(){window.addEventListener("scroll",this.showbtn,!0)},methods:{showbtn(){let t=document.body.scrollTop||document.documentElement.scrollTop;this.showBtn=t>300},gotop(){window.scrollTo(0,0)}}},y=k,C=(0,u.Z)(y,n,r,!1,null,null,null),A=C.exports,w=s(2809),x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("health-head",{attrs:{title:"首页"}}),s("el-carousel",{attrs:{height:"360px",interval:3e3,arrow:"always"}},[s("el-carousel-item",[s("router-link",{attrs:{to:"food-detail/24"}},[s("img",{attrs:{src:"/lbt/1.jpg",alt:""}})])],1),s("el-carousel-item",[s("router-link",{attrs:{to:"food-detail/25"}},[s("img",{attrs:{src:"/lbt/2.jpg",alt:""}})])],1),s("el-carousel-item",[s("router-link",{attrs:{to:"food-detail/26"}},[s("img",{attrs:{src:"/lbt/3.jpg",alt:""}})])],1),s("el-carousel-item",[s("router-link",{attrs:{to:"food-detail/27"}},[s("img",{attrs:{src:"/lbt/4.jpg",alt:""}})])],1),s("el-carousel-item",[s("router-link",{attrs:{to:"food-detail/28"}},[s("img",{attrs:{src:"/lbt/5.jpg",alt:""}})])],1),s("el-carousel-item",[s("router-link",{attrs:{to:"food-detail/29"}},[s("img",{attrs:{src:"/lbt/6.jpg",alt:""}})])],1)],1),s("my-menu"),s("food-ingredients"),s("hea-lth")],1)},_=[],E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"slindex"},[s("div",{staticClass:"jksl"},[s("div",{staticClass:"jkslnav"},[s("router-link",{attrs:{to:"/health"}},[t._v("健康")]),s("router-link",{staticClass:"jknar3",attrs:{to:"/health"}},[t._v("健康首页")])],1),s("router-link",{attrs:{to:"/health_detail/26"}},[s("img",{staticClass:"jkslt",attrs:{src:"/zjt/7.jpg"}})]),s("div",{staticClass:"jsdinr"},t._l(t.health,(function(e){return s("ul",{key:e.hid},[s("li",[s("router-link",{attrs:{to:"/health_detail/"+e.hid}},[s("i",{staticClass:"el-icon-fork-spoon"}),t._v(t._s(e.httile))])],1)])})),0)],1),s("div",{staticClass:"jksl"},[s("div",{staticClass:"jkslnav"},[s("router-link",{attrs:{to:"/health"}},[t._v("烘焙")]),s("router-link",{staticClass:"jknar3",attrs:{to:"/health"}},[t._v("烘焙专区")])],1),s("router-link",{attrs:{to:"/health_detail/20"}},[s("img",{staticClass:"jkslt",attrs:{src:"/zjt/8.jpg"}})]),s("div",{staticClass:"jsdinr"},t._l(t.hnews,(function(e){return s("ul",{key:e.hid},[s("li",[s("router-link",{attrs:{to:"/health_detail/"+e.hid}},[s("i",{staticClass:"el-icon-tableware"}),t._v(t._s(e.httile))])],1)])})),0)],1),s("div",{staticClass:"jksl"},[s("div",{staticClass:"jkslnav"},[s("router-link",{attrs:{to:"/health"}},[t._v("为您推荐")]),s("router-link",{staticClass:"jknar4",attrs:{to:"/health"}},[t._v("我的收藏")])],1),s("router-link",{attrs:{to:"/health_detail/18"}},[s("img",{staticClass:"jkslt",attrs:{src:"/zjt/9.jpg"}})]),s("div",{staticClass:"jsdinr"},t._l(t.hpush,(function(e){return s("ul",{key:e.hid},[s("li",[s("router-link",{attrs:{to:"/health_detail/"+e.hid}},[s("i",{staticClass:"el-icon-potato-strips"}),t._v(t._s(e.httile))])],1)])})),0)],1)])},z=[],T={data(){return{health:[],hnews:[],hpush:[]}},mounted(){window.scrollTo(0,0),this.getHealth(),this.getHnews(),this.getHpush()},methods:{getHealth(){const t="/news/list?htype=最新发布";this.axios.get(t).then((t=>{this.health=t.data.data}))},getHnews(){const t="/news/list?htype=最新推荐";this.axios.get(t).then((t=>{this.hnews=t.data.data}))},getHpush(){const t="/news/list?htype=饮食常识";this.axios.get(t).then((t=>{this.hpush=t.data.data}))}}},P=T,S=(0,u.Z)(P,E,z,!1,null,"45bb2464",null),N=S.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"menunav"},[s("a",{staticClass:"menunr1",attrs:{href:"#"}},[t._v("新秀菜谱")]),s("hr"),t.menu?s("div",{staticClass:"menudetil"},t._l(t.menu,(function(e){return s("ul",{key:e.mid,staticClass:"menul"},[s("li",[s("router-link",{staticClass:"menraa",attrs:{to:"/food-detail/"+e.mid}},[s("div",{staticClass:"menr2"},[s("img",{attrs:{src:"/images/"+e.finished_img}})]),s("p",[t._v(t._s(e.mname))])]),s("a",{attrs:{href:"#"}},[t._v(t._s(e.username))])],1)])})),0):t._e()])])},H=[],F={data(){return{menu:[]}},mounted(){window.scrollTo(0,0),this.getMenu()},methods:{getMenu(){const t="/menu/listTop";this.axios.get(t).then((t=>{this.menu=t.data.data}))}}},U=F,Z=(0,u.Z)(U,O,H,!1,null,"09b8fda2",null),L=Z.exports,B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"finav"},[s("div",{staticClass:"finar1"},[s("div",{staticClass:"finar2"},[s("h2",{staticClass:"on"},[s("router-link",{attrs:{to:"/food"}},[t._v("时令食材")])],1),s("div",{staticClass:"finar3"},[s("router-link",{attrs:{to:"/food"}},[t._v("食材首页")]),s("a",{attrs:{href:"#"}},[t._v("米面豆乳")]),s("a",{attrs:{href:"#"}},[t._v("蔬菜")]),s("a",{attrs:{href:"#"}},[t._v("水产品")]),s("a",{attrs:{href:"#"}},[t._v("肉禽蛋")]),s("a",{attrs:{href:"#"}},[t._v("食疗食补")])],1)])]),s("hr"),t.foods?s("div",{staticClass:"finav2"},t._l(t.foods,(function(e){return s("ul",{key:e.fid},[s("li",[s("router-link",{staticClass:"nra",attrs:{to:"/foodsort?fid="+e.fid}},[s("div",{staticClass:"finard"},[s("img",{attrs:{src:"/images/"+e.fimg}})]),t._v(" "+t._s(e.fname)+" ")]),s("p",[t._v(t._s(e.fdescribe))])],1)])})),0):t._e()])},R=[],J={data(){return{foods:[]}},mounted(){window.scrollTo(0,0),this.getFoods()},methods:{getFoods(){const t="/food/listTop";this.axios.get(t).then((t=>{console.log(t),this.foods=t.data.data}))}}},Y=J,W=(0,u.Z)(Y,B,R,!1,null,"7a3b2045",null),q=W.exports,G=s(9617),X={components:{HeaLth:N,MyMenu:L,FoodIngredients:q,HealthHead:G.Z}},I=X,Q=(0,u.Z)(I,x,_,!1,null,null,null),D=Q.exports;a["default"].use(w.Z);const K=[{path:"/notelist/",props:!0,name:"notelist",component:()=>s.e(296).then(s.bind(s,9296)),meta:{title:"美食天下-笔记列表页"}},{path:"/shar",props:!0,name:"shar",component:()=>s.e(637).then(s.bind(s,8141)),meta:{title:"美食天下-笔记详情页"}},{path:"/yszc",name:"yszc",component:()=>s.e(733).then(s.bind(s,9733)),meta:{title:"美食天下-隐私政策页",hideHead:!0,hideFooter:!0}},{path:"/yhxy",name:"yhxy",component:()=>s.e(972).then(s.bind(s,1972)),meta:{title:"美食天下-用户协议页",hideHead:!0,hideFooter:!0}},{path:"/mobile",name:"mobile",component:()=>s.e(926).then(s.bind(s,9926)),meta:{title:"美食天下-客户端下载页"}},{path:"/get_pwd/:uid",props:!0,name:"getpwd",component:()=>s.e(100).then(s.bind(s,3100)),meta:{title:"美食天下-找回密码页"}},{path:"/for_get",name:"forget",component:()=>s.e(447).then(s.bind(s,6447)),meta:{title:"美食天下-找回密码页"}},{path:"/menu_search/:mname?",props:!0,name:"/menu_search",component:()=>s.e(248).then(s.bind(s,9248)),meta:{title:"美食天下-菜品搜索页"}},{path:"/center",name:"Center",component:()=>s.e(141).then(s.bind(s,5141)),meta:{hideHeader:!0,title:"美食天下-个人中心页"},redirect:"/center/member",children:[{path:"recipe",name:"Recipe",component:()=>s.e(341).then(s.bind(s,6341)),meta:{hideHeader:!0,title:"美食天下-个人中心页"}},{path:"member",name:"Member",component:()=>s.e(294).then(s.bind(s,9294)),meta:{hideHeader:!0,title:"美食天下-个人中心页"}},{path:"myblog",name:"Myblog",component:()=>s.e(300).then(s.bind(s,5300)),meta:{hideHeader:!0,title:"美食天下-个人中心页"}},{path:"mycollect",name:"Mycollecte",component:()=>s.e(542).then(s.bind(s,9542)),meta:{hideHeader:!0,title:"美食天下-个人中心页"}},{path:"myfav",name:"Myfav",component:()=>s.e(180).then(s.bind(s,7180)),meta:{hideHeader:!0,title:"美食天下-个人中心页"}},{path:"myset",name:"Myset",component:()=>s.e(376).then(s.bind(s,2376)),meta:{hideHeader:!0,title:"美食天下-个人中心页"}},{path:"create",name:"create",component:()=>s.e(903).then(s.bind(s,3903)),meta:{hideHeader:!0,title:"美食天下-个人中心页"}}]},{path:"/food-detail/:mid",name:"fooddetail",props:!0,component:()=>s.e(217).then(s.bind(s,8217)),meta:{title:"美食天下-菜单详情页"}},{path:"/menu",name:"menu",component:()=>s.e(725).then(s.bind(s,4725)),meta:{title:"美食天下-菜单列表页",keepAlive:!0}},{path:"*",name:"not404",component:()=>s.e(472).then(s.bind(s,2472)),meta:{hideHead:!0,hideFooter:!0,title:"美食天下-错误页"}},{path:"/register",name:"register",component:()=>s.e(364).then(s.bind(s,5364)),meta:{keepAlive:!0,hideFooter:!0,title:"美食天下-注册页"}},{path:"/login",name:"login",component:()=>s.e(114).then(s.bind(s,1114)),meta:{keepAlive:!0,hideFooter:!0,title:"美食天下-登录页"}},{path:"/food",name:"food",component:()=>s.e(76).then(s.bind(s,8076)),meta:{title:"美食天下-食材首页页"}},{path:"/foodsort",name:"foodsort",component:()=>s.e(254).then(s.bind(s,254)),meta:{title:"美食天下-食材分类页"}},{path:"/health_search/:httile?",props:!0,name:"health_search",component:()=>s.e(374).then(s.bind(s,9334)),meta:{title:"美食天下-健康搜索页"}},{path:"/health_detail/:hid",props:!0,name:"health_detail",component:()=>s.e(777).then(s.bind(s,5034)),meta:{title:"美食天下-健康详情页"}},{path:"/health",name:"health",component:()=>s.e(419).then(s.bind(s,7364)),meta:{keepAlive:!0,title:"美食天下-健康列表页"}},{path:"/",name:"home",component:D,meta:{keepAlive:!0,title:"美食天下-首页"}}],V=new w.Z({mode:"history",base:"/",routes:K});V.beforeEach(((t,e,s)=>{document.title=t.meta.title,s()}));var M=V;a["default"].use(p.ZP);var $=new p.ZP.Store({state:{username:sessionStorage.getItem("name"),useravatar:sessionStorage.getItem("avatar"),imgBase:"http://39.103.66.129:3001/"},getters:{},mutations:{updataUsername(t,e){t.username=e.name,t.useravatar=e.avatar,sessionStorage.setItem("name",e.name),sessionStorage.setItem("avatar",e.avatar)}},actions:{},modules:{}}),tt=s(4549),et=s.n(tt),st=s(6166),at=s.n(st),nt=s(9483),rt=s(7133),it=s.n(rt);a["default"].use(nt.Z,at()),a["default"].use(et()),a["default"].prototype.moment=it(),a["default"].config.productionTip=!1,at().defaults.baseURL="http://39.103.66.129:3001",new a["default"]({router:M,store:$,render:t=>t(A)}).$mount("#app")},182:function(t){"use strict";t.exports="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAA5CAYAAAAWV1QYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABEjSURBVHhe7dyFkxvHEgfg9z+FmZmZsZJK4jA6zORwHGZw4jBzHGZwmJkTh9HhZJ6+ObXeeL230tly1dWTuqpLut3Zgf519/R0r+4/aUgDQ0OwB4iGYA8QDcEeIBqCPUA0BHuAaAj2ANGYwf7zzz/Tl19+ma666qr0/vvvt6/W099//53OPPPM9Oyzz6aZM2fmZ+eWPv3007TPPvukHXbYIe21117pmmuuSd9991377pCaaExg//HHH2nq1KlplVVWSfPPP3/acMMN0w8//NC+Oyv9+++/6a677kqLLLJIWmCBBdL666+fbrzxxnx9TmnGjBlp7733TvPNN1+HF1988XT55ZenH3/8sd2qd/r999+zovSTyagkCv7LL7/MU/7nn3/aozXTmC37wQcfTOuuu24Gm7BPPfXUWgC/+OKLtNVWW+V2wN5iiy3S888/3747dmLRBx98cAfkBRdcMC200EL5+5JLLpkuueSS9M0337RbdycCeuGFF9IhhxzSNz7ssMPSc8891x5hhKz57LPPnqf87bfftkdrpkawgUiAzzzzTIcfe+yxtOOOO2ZhE/TKK6+cnnzyyVna4OOPPz4tscQSuc3CCy+cTjrppFnuv/jii+nnn39ujzQ6AeW1115L++67bwfoxRZbLE2YMCHtsssuadFFF83XfJ5wwgnp7bffbj/ZTCzu1ltv7fTZDyaTm2++eRblp4R1bfvJ7733Xnu0ZmoEm6ABucEGG8zCK6ywQrZWAwF0vfXWm63N0ksv3bF+battdtppp/TWW2+1R6qn3377Ld1///15f47xbAtc+euvv56VwPcAHO+8885p2rRp2b01EbBvu+22znP94DqwL7vsstq2/eS+gC3Auu+++2oHmFteY4010ssvv9weaXb67LPP0oUXXpiVJIAmzIkTJ6bbb789PfHEEznws61w7/ZubSjYmmuumU4++eSsDNZQRxT5pZdeSsccc8yofNBBB2WljTlvs8026eijj65ti4877ri8NZT08MMPpwMOOKCR999//9x3jMOAtt9++3y95LpnsYC5F+pq2fYgLrOJt9tuu1mEsvbaa2fL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"}},e={};function s(a){var n=e[a];if(void 0!==n)return n.exports;var r=e[a]={id:a,loaded:!1,exports:{}};return t[a].call(r.exports,r,r.exports,s),r.loaded=!0,r.exports}s.m=t,function(){s.amdO={}}(),function(){var t=[];s.O=function(e,a,n,r){if(!a){var i=1/0;for(u=0;u<t.length;u++){a=t[u][0],n=t[u][1],r=t[u][2];for(var o=!0,l=0;l<a.length;l++)(!1&r||i>=r)&&Object.keys(s.O).every((function(t){return s.O[t](a[l])}))?a.splice(l--,1):(o=!1,r<i&&(i=r));if(o){t.splice(u--,1);var c=n();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[a,n,r]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,a){return s.f[a](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/"+t+"."+{76:"36ef6eaa",100:"ce8025a4",114:"e4e21f19",141:"cc35cf73",180:"b4ec7806",217:"9e5b8a99",248:"88948777",254:"2635bf6f",294:"c00ae91f",296:"79394356",300:"6d057a81",341:"01fbb1d7",364:"72b66734",374:"9f49e583",376:"556c3bc7",419:"26bc5fad",447:"1972301b",472:"ac8a6a30",542:"ec13a155",637:"da8b3034",725:"327558a1",733:"4b44aa98",777:"9c2e7a62",903:"73500690",926:"74598517",972:"52928160"}[t]+".js"}}(),function(){s.miniCssF=function(t){return"css/"+t+"."+{76:"a38aed2d",100:"c3143c5f",114:"8081e8c3",141:"950569a2",180:"08d61f9f",217:"0612cd18",248:"6c83dfff",254:"9c2e2a64",294:"9d84cb37",296:"2a36001f",300:"338d3a1d",341:"c4241a95",364:"180d10cc",374:"9fc1719d",376:"44e2827b",419:"9968a7bf",447:"c6c69b7e",472:"ccb61cb2",542:"06104ce0",637:"9005432e",725:"c483576e",777:"f27426e0",903:"f0e1c9b9",926:"7a863744"}[t]+".css"}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="food-pro:";s.l=function(a,n,r,i){if(t[a])t[a].push(n);else{var o,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+r){o=d;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.setAttribute("data-webpack",e+r),o.src=a),t[a]=[n];var h=function(e,s){o.onerror=o.onload=null,clearTimeout(m);var n=t[a];if(delete t[a],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((function(t){return t(s)})),e)return e(s)},m=setTimeout(h.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=h.bind(null,o.onerror),o.onload=h.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){s.p="/"}(),function(){var t=function(t,e,s,a){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var r=function(r){if(n.onerror=n.onload=null,"load"===r.type)s();else{var i=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=o,n.parentNode.removeChild(n),a(l)}};return n.onerror=n.onload=r,n.href=e,document.head.appendChild(n),n},e=function(t,e){for(var s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var n=s[a],r=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(r===t||r===e))return n}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){n=i[a],r=n.getAttribute("data-href");if(r===t||r===e)return n}},a=function(a){return new Promise((function(n,r){var i=s.miniCssF(a),o=s.p+i;if(e(i,o))return n();t(a,o,n,r)}))},n={143:0};s.f.miniCss=function(t,e){var s={76:1,100:1,114:1,141:1,180:1,217:1,248:1,254:1,294:1,296:1,300:1,341:1,364:1,374:1,376:1,419:1,447:1,472:1,542:1,637:1,725:1,777:1,903:1,926:1};n[t]?e.push(n[t]):0!==n[t]&&s[t]&&e.push(n[t]=a(t).then((function(){n[t]=0}),(function(e){throw delete n[t],e})))}}(),function(){var t={143:0};s.f.j=function(e,a){var n=s.o(t,e)?t[e]:void 0;if(0!==n)if(n)a.push(n[2]);else{var r=new Promise((function(s,a){n=t[e]=[s,a]}));a.push(n[2]=r);var i=s.p+s.u(e),o=new Error,l=function(a){if(s.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;o.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",o.name="ChunkLoadError",o.type=r,o.request=i,n[1](o)}};s.l(i,l,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,r,i=a[0],o=a[1],l=a[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(n in o)s.o(o,n)&&(s.m[n]=o[n]);if(l)var u=l(s)}for(e&&e(a);c<i.length;c++)r=i[c],s.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return s.O(u)},a=self["webpackChunkfood_pro"]=self["webpackChunkfood_pro"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(3193)}));a=s.O(a)})();
//# sourceMappingURL=app.39f3b3ec.js.map
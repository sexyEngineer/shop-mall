webpackJsonp([1],{"1Er1":function(t,e){},"4VmB":function(t,e){},"4ml/":function(t,e){},"6wt1":function(t,e){},"9LyU":function(t,e){},A0ln:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABCUExURUdwTGZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZkiFXSYAAAAVdFJOUwDm8Za4KQn7bBFG18herTkZBHyKTt6+JaAAAAIfSURBVFjDtVjbgqsgDCzXgHhB6/z/ry7a3XPUYg0uy0MfsA4hyUwSH4+/XOPglA6SQDJo5YaxFMA7LbFfUjtfgND0lF4KyjXGj4/Rm8apkHaob5gIc5v+rbt42I6dTsjtzEAwCUFMMfssTiKhmAsE+yQId+6+0QnQ014ZoT57zqvPpswSYbi87RAgT73SEXpO+HwP6vKPHDAxQzcBLmvFyf7ZeRlLZiqAWEDozSdG4lnEhifkITo2oC+kVI9gD6jCF2KkY3eWG6KhWBwGou1tWqgbCqPQbmJSfpM11wTmjRnultS5/4Y0EPYWhhVo/kVpetxb009GeKJ4eWJeBCOR/76VvtR4fUJU/e1Jje4XRF3Pt4TIImrOaRG0hGNAYMWRsqQMGNYTeDnaZUHUekfFTbCkMCpzR7W6dGZmQyPRH8vGvDo1wLCZ+g5iVm9K8PmWQLQ9BEakX0JBV2AE2h2IhUy/wHYP1yv4/QtvdjAwpH+zo8Qfi0P2xfblj4K4LNE9+PQVF35+rAV5zOUHO08X3ql8nnL5svB/OuELk7ejykrIi7c8/RjzPYd/6QdLx6yGbM51jKOnvoUcPukpQ9c1hPmo64z6YnT8XF+q1Lka9bZK3a/Rf1Tpg1I/Fn7bj1XpC2v0p1X65Cr9epW5ocr8UmWOStEJVxPfOjUGcz1XnqPY67myynxbZ84+zPvR35r363x32H7/SC+Le98/itYXKn4o0mvBsDUAAAAASUVORK5CYII="},HObX:function(t,e){},HUiy:function(t,e){},IB8l:function(t,e){},IavG:function(t,e){},"JGy+":function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")({name:"App"},a,!1,function(t){n("HObX")},null,null).exports,s=n("/ocq"),r=n("//Fk"),c=n.n(r),d=n("mtWM"),u=n.n(d);u.a.defaults.timeout=5e3;var l=u.a.create({headers:{"Content-Type":"application/json; charset=utf-8"}});l.interceptors.request.use(function(t){return t.method,t},function(t){return c.a.reject(t)}),l.interceptors.response.use(function(t){return t},function(t){console.log(t)});var h=l;function v(t){return h({url:"/heyushuo/heyushuo/search/helperaction",method:"get",params:t})}function p(t){return h({url:"/heyushuo/heyushuo/category/currentaction",method:"get",params:t})}function m(t){return h.post("/heyushuo/heyushuo/collect/addcollect",t)}function f(t){return h({url:"/heyushuo/heyushuo/address/getListAction",method:"get",params:t})}var _={data:function(){return{opens:!1,show:!1,searchHint:!1,params:{keyword:"",openId:""},searchList:"",indexactions:"",history:""}},methods:{onblur:function(){this.show=!0,this.indexAction()},searchHints:function(){this.searchHint=!0},hidden:function(){this.searchHint=!1},onSearchs:function(){var t=this;v(this.params).then(function(e){t.searchList=e.data.keywords}),null==this.params.keyword&&this.searchList},onSearch:function(){this.show=!0,this.$router.push({path:"/productList",query:{keywords:this.params.keyword}})},searchShop:function(t){this.params.keyword=t.keyword,this.onSearch()},indexAction:function(){var t,e=this;(t=this.params,h({url:"/heyushuo/heyushuo/search/indexaction",method:"get",params:t})).then(function(t){e.indexactions=t.data.hotKeywordList,e.history=t.data.historyData})},clearHistory:function(){var t=this;this.$dialog.confirm({title:"是否清空搜索记录"}).then(function(){var e;t.$toast("历史记录已清空"),e=t.params,h.post("/heyushuo/heyushuo/search/clearhistoryAction",e),t.indexAction()}).catch(function(){t.$toast("删除操作已取消")})}},created:function(){}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-search",{attrs:{"show-action":"",label:"请输入",placeholder:"要搜索的内容"},on:{focus:t.onblur},scopedSlots:t._u([{key:"action",fn:function(){return[n("div",{on:{click:t.onSearch}},[t._v("搜索")])]},proxy:!0}])}),t._v(" "),n("van-popup",{style:{width:"80%",height:"100%"},attrs:{position:"left"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("van-search",{attrs:{"show-action":"",placeholder:"要搜索的内容"},on:{input:t.onSearchs,focus:t.searchHints,blur:t.hidden},scopedSlots:t._u([{key:"action",fn:function(){return[n("div",{on:{click:t.onSearch}},[t._v("搜索")])]},proxy:!0}]),model:{value:t.params.keyword,callback:function(e){t.$set(t.params,"keyword",e)},expression:"params.keyword"}}),t._v(" "),t.searchHint?n("div",t._l(t.searchList,function(e,i){return n("div",{key:i},[n("p",[t._v(t._s(e.name))])])}),0):n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:0!=t.history.length,expression:"history.length != 0"}]},[n("p",{staticStyle:{padding:"10px 5px"}},[n("span",[t._v("历史记录")]),t._v(" "),n("van-icon",{staticStyle:{float:"right","margin-right":"10px"},attrs:{name:"delete"},on:{click:t.clearHistory}})],1),t._v(" "),t._l(t.history,function(e,i){return n("van-tag",{key:i,staticStyle:{margin:"5px 10px"},attrs:{plain:"",type:"primary"},on:{click:function(n){return t.searchShop(e)}}},[t._v(t._s(e.keyword))])})],2),t._v(" "),n("div",{staticStyle:{"margin-top":"10px",padding:"10px 5px"}},[n("p",[t._v("热门推荐")]),t._v(" "),t._l(t.indexactions,function(e,i){return n("van-tag",{key:i,staticStyle:{margin:"5px 10px"},attrs:{plain:"",type:"primary"},on:{click:function(n){return t.searchShop(e)}}},[t._v(t._s(e.keyword))])})],2)])],1)],1)},staticRenderFns:[]};var y=n("VU/8")(_,g,!1,function(t){n("9LyU")},"data-v-5b09a8db",null).exports,b={data:function(){return{active:0}},methods:{onChange:function(t){this.active=t,console.log(this.active)}},created:function(){this.onChange()}},x={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-top":"50px"}},[n("van-tabbar",{staticStyle:{"border-radius":"5px"},attrs:{"active-color":"#c60","inactive-color":"#c2ccd0"},on:{change:t.onChange},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tabbar-item",{attrs:{icon:"wap-home",to:"/"}},[t._v("首页")]),t._v(" "),n("van-tabbar-item",{attrs:{icon:"new-arrival",to:"/BestSellers"}},[t._v("热卖")]),t._v(" "),n("van-tabbar-item",{attrs:{icon:"weapp-nav",to:"/classification"}},[t._v("分类")]),t._v(" "),n("van-tabbar-item",{attrs:{icon:"shopping-cart",to:"/shopCart"}},[t._v("购物车")]),t._v(" "),n("van-tabbar-item",{attrs:{icon:"manager",to:"myCenter"}},[t._v("我的")])],1)],1)},staticRenderFns:[]};var k=n("VU/8")(b,x,!1,function(t){n("hr9c")},"data-v-209f8c00",null).exports,w={data:function(){return{homeProducts_banner:"",homeProducts_bannerList:"",homeProducts_zg:"",homeProducts_goods:"",homeProducts_hotGoods:"",homeProducts_newCategoryList:""}},components:{topNav:y,footNav:k},mounted:function(){this.getceshi()},methods:{getceshi:function(){var t,e=this;h({url:"/heyushuo/heyushuo/index/index",method:"get",params:t}).then(function(t){e.homeProducts_banner=t.data.banner,e.homeProducts_bannerList=t.data.channel,e.homeProducts_zg=t.data.brandList,e.homeProducts_goods=t.data.newGoods,e.homeProducts_hotGoods=t.data.hotGoods,e.homeProducts_newCategoryList=t.data.newCategoryList})},goodsDetail:function(t){return void 0==t.id?void this.$router.push({path:"/product",query:{id:t}}):void this.$router.push({path:"/product",query:{id:t.id}})},getcommodityDetails:function(t){this.$router.push({path:"/commodityDetails",query:{id:t.id}})}}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("top-nav"),t._v(" "),i("van-swipe",{staticClass:"my-swipe",attrs:{"indicator-dots":"true",autoplay:3e3}},t._l(t.homeProducts_banner,function(t,e){return i("van-swipe-item",{key:e},[i("img",{attrs:{src:t.image_url}})])}),1),t._v(" "),i("div",{staticClass:"channel"},[i("van-grid",{attrs:{border:!1,"column-num":5}},t._l(t.homeProducts_bannerList,function(e,n){return i("van-grid-item",{key:n,on:{click:function(n){return t.getcommodityDetails(e)}}},[i("van-image",{attrs:{src:e.icon_url}}),t._v(" "),i("span",[t._v(t._s(e.name))])],1)}),1)],1),t._v(" "),i("div",{staticStyle:{"margin-top":"15px"}},[i("router-link",{staticClass:"ppzg",attrs:{to:"/"}},[t._v("品牌制造商直供")]),t._v(" "),i("van-grid",{attrs:{border:!1,"column-num":2}},t._l(t.homeProducts_zg,function(e,n){return i("van-grid-item",{key:n},[i("van-image",{attrs:{src:e.new_pic_url}}),t._v(" "),i("span",{staticStyle:{position:"absolute",top:"20px",left:"15px",color:"#CC6600"}},[i("p",[t._v(t._s(e.name))]),t._v(" "),i("p",[t._v(t._s(e.floor_price)+"起")])])],1)}),1)],1),t._v(" "),i("div",[i("div",{staticClass:"newsShop"},[i("p",{staticStyle:{color:"#758a99","font-size":"14px"}},[t._v("新品首发")]),t._v(" "),i("van-button",{staticStyle:{height:"30px","margin-top":"5px"},attrs:{color:"linear-gradient(to right, #ff6034, #ee0a24)"}},[t._v("查看全部")])],1),t._v(" "),i("div",{staticClass:"list"},[i("ul",{staticStyle:{background:"#ffffff"}},t._l(t.homeProducts_goods,function(e,n){return i("li",{key:n,on:{click:function(n){return t.goodsDetail(e.id)}}},[i("img",{attrs:{src:e.list_pic_url,alt:""}}),t._v(" "),i("p",[t._v(t._s(e.name))]),t._v(" "),i("p",[t._v(t._s(e.goods_brief))]),t._v(" "),i("p",{staticClass:"price"},[t._v("￥"+t._s(e.retail_price))])])}),0)])]),t._v(" "),i("div",[i("div",{staticClass:"newsShop"},[i("p",{staticStyle:{color:"#758a99","font-size":"14px"}},[t._v("人气推荐·好物精选")]),t._v(" "),i("van-button",{staticStyle:{height:"30px","margin-top":"5px"},attrs:{color:"linear-gradient(to right, #ff6034, #ee0a24)"}},[t._v("查看全部")])],1),t._v(" "),i("div",{staticClass:"list"},[i("ul",{staticStyle:{background:"#ffffff"}},t._l(t.homeProducts_hotGoods,function(e,n){return i("li",{key:n,on:{click:function(n){return t.goodsDetail(e)}}},[i("img",{attrs:{src:e.list_pic_url}}),t._v(" "),i("p",[t._v(t._s(e.name))]),t._v(" "),i("p",[t._v(t._s(e.goods_brief))]),t._v(" "),i("p",{staticClass:"price"},[t._v("￥"+t._s(e.retail_price))])])}),0)])]),t._v(" "),t._l(t.homeProducts_newCategoryList,function(e,a){return i("div",{key:a},[i("div",{staticStyle:{"text-align":"center",padding:"20px 0px 10px"}},[i("p",{staticStyle:{color:"#758a99","font-size":"14px"}},[t._v(t._s(e.name)+"好物")])]),t._v(" "),i("van-grid",{attrs:{border:!0,"column-num":2}},[t._l(e.goodsList,function(e,n){return i("van-grid-item",{key:n,on:{click:function(n){return t.goodsDetail(e)}}},[i("van-image",{attrs:{src:e.list_pic_url}}),t._v(" "),i("span",[i("p",[t._v(t._s(e.name))])])],1)}),t._v(" "),i("van-grid-item",[i("span",{on:{click:function(n){return t.getcommodityDetails(e)}}},[i("span",{staticStyle:{"font-size":"16px",color:"#758a99"}},[t._v("查看更多")]),t._v(" "),i("img",{staticStyle:{width:"14px"},attrs:{src:n("A0ln")}})])])],2)],1)}),t._v(" "),i("foot-nav")],2)},staticRenderFns:[]};var S=n("VU/8")(w,C,!1,function(t){n("No6k")},"data-v-032d56ce",null).exports,L={data:function(){return{bestSellersList:[],params:{page:1,count:5}}},components:{footNav:k},methods:{getBestSellers:function(){var t,e=this;(t=this.params,h({url:"/heyushuo/heyushuo/topic/listaction",method:"get",params:t})).then(function(t){e.bestSellersList=t.data.data})}},created:function(){this.getBestSellers()}},A={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-grid",{attrs:{"column-num":1,border:!1}},t._l(t.bestSellersList,function(e,i){return n("van-grid-item",{key:i},[n("img",{staticStyle:{width:"9rem"},attrs:{src:e.scene_pic_url}}),t._v(" "),n("span",{staticStyle:{"font-size":"14px",display:"inline-block","margin-top":"5px"}},[t._v(t._s(e.title))]),t._v(" "),n("span",{staticStyle:{"font-size":"12px",color:"#758a99","text-align":"center"}},[t._v(t._s(e.subtitle))]),t._v(" "),n("span",{staticStyle:{color:"#CC6600"}},[t._v("￥"+t._s(e.price_info)+"起")])])}),1),t._v(" "),n("foot-nav")],1)},staticRenderFns:[]};var Z=n("VU/8")(L,A,!1,function(t){n("6wt1")},"data-v-28923e2a",null).exports,$={data:function(){return{activeKey:0,indexactionList:"",indexactionContent:"",indexactionContentList:"",params:{id:1005e3},choseClick:!1}},components:{footNav:k,topNav:y},methods:{getindexaction:function(){var t,e=this;h({url:"/heyushuo/heyushuo/category/indexaction",method:"get",params:t}).then(function(t){e.indexactionList=t.data.categoryList})},getDetails:function(t){this.$router.push({path:"/commodityDetails",query:{id:t.id}})},choseName:function(t){var e=this;this.choseClick=!0,this.params.id=this.indexactionList[t].id,p(this.params).then(function(t){e.indexactionContent=t.data.data.currentOne,e.indexactionContentList=t.data.data.currentOne.subList})},getContent:function(){var t=this;0==this.choseClick&&p(this.params).then(function(e){t.indexactionContent=e.data.data.currentOne,t.indexactionContentList=e.data.data.currentOne.subList})}},created:function(){this.getindexaction(),this.getContent()}},P={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("top-nav"),t._v(" "),n("div",{staticClass:"leftNav"},[n("van-sidebar",{on:{change:t.choseName},model:{value:t.activeKey,callback:function(e){t.activeKey=e},expression:"activeKey"}},t._l(t.indexactionList,function(t,e){return n("div",{key:e},[n("van-sidebar-item",{attrs:{title:t.name}})],1)}),0)],1),t._v(" "),n("div",{staticClass:"content"},[n("div",[n("img",{staticStyle:{height:"3rem",width:"7rem"},attrs:{src:t.indexactionContent.banner_url}})]),t._v(" "),n("p",{staticStyle:{"text-align":"center"}},[t._v("——"+t._s(t.indexactionContent.name)+"分类——")]),t._v(" "),n("van-grid",{attrs:{"column-num":2,gutter:10,border:!1}},t._l(t.indexactionContentList,function(e,i){return n("van-grid-item",{key:i,on:{click:function(n){return t.getDetails(e)}}},[n("img",{staticStyle:{width:"2rem"},attrs:{src:e.wap_banner_url}}),t._v(" "),n("span",[t._v(t._s(e.name))])])}),1)],1),t._v(" "),n("foot-nav")],1)},staticRenderFns:[]};var V=n("VU/8")($,P,!1,function(t){n("TW3y")},"data-v-484ff495",null).exports,E={data:function(){return{shopList:"",params:{openId:"oQmbb4sNZdxaUQZ0sfYgvtOP2S7c",id:""},totalPrice:""}},components:{footNav:k},computed:{},methods:{getCartList:function(){var t,e=this;(t=this.params,h({url:"/heyushuo/heyushuo/cart/cartList",method:"get",params:t})).then(function(t){e.shopList=t.data.data})},deleteShop:function(t){var e=this;this.params.id=t.id,this.$dialog.confirm({title:"从购物删除商品"}).then(function(){var t;e.$toast("商品删除成功"),t=e.params,h({url:"/heyushuo/heyushuo/cart/deleteAction",method:"get",params:t}),e.getCartList()}).catch(function(){e.$toast("删除操作已取消")})},jiesuan:function(t){},onSubmit:function(){this.$router.push("/orderDetails")}},created:function(){this.getCartList()}},U={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"shopTitle"},[t._v("我的购物车")]),t._v(" "),n("div",{staticStyle:{"margin-bottom":"100px"}},t._l(t.shopList,function(e,i){return n("div",{key:i,staticClass:"content"},[n("van-card",{attrs:{num:e.number,price:e.retail_price,title:e.goods_name,thumb:e.list_pic_url},scopedSlots:t._u([{key:"footer",fn:function(){return[n("van-button",{staticStyle:{background:"#CC6600",color:"#ffffff",padding:"6px 6px","border-radius":"8px",border:"none"},attrs:{size:"mini"},on:{click:function(n){return t.jiesuan(e)}}},[t._v("结算")]),t._v(" "),n("van-button",{staticStyle:{background:"#CC6600",color:"#ffffff",padding:"6px 6px","border-radius":"8px",border:"none"},attrs:{size:"mini"},on:{click:function(n){return t.deleteShop(e)}}},[t._v("删除")])]},proxy:!0}],null,!0)})],1)}),0),t._v(" "),n("van-submit-bar",{attrs:{"button-text":"去结算"},on:{submit:t.onSubmit}},[n("van-checkbox",[t._v("全选")]),t._v(" "),n("span",{staticStyle:{width:"3rem","margin-left":"50px"}},[t._v("总计:"+t._s(t.totalPrice))])],1),t._v(" "),n("foot-nav")],1)},staticRenderFns:[]};var I=n("VU/8")(E,U,!1,function(t){n("w2iK")},"data-v-3e34b658",null).exports,N={components:{footNav:k},methods:{lookCollect:function(){this.$router.push("/collect")},address:function(){this.$router.push("/address")},feedback:function(){this.$router.push("/Feedback")}}},z={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{height:"17rem"}},[n("van-nav-bar",{attrs:{title:"个人中心"}}),t._v(" "),t._m(0),t._v(" "),n("van-divider",{attrs:{"content-position":"left"}},[t._v("我的购物")]),t._v(" "),n("van-grid",{attrs:{gutter:3}},[n("van-grid-item",{attrs:{icon:"goods-collect-o",text:"收藏夹"},on:{click:t.lookCollect}}),t._v(" "),n("van-grid-item",{attrs:{icon:"todo-list-o",text:"浏览记录"}}),t._v(" "),n("van-grid-item",{attrs:{icon:"orders-o",text:"我的订单"}}),t._v(" "),n("van-grid-item",{attrs:{icon:"idcard",text:"我的卡包"}})],1),t._v(" "),n("van-divider",{attrs:{"content-position":"left"}},[t._v("我的管理")]),t._v(" "),n("van-grid",{attrs:{gutter:3}},[n("van-grid-item",{attrs:{icon:"logistics",text:"收货地址"},on:{click:t.address}})],1),t._v(" "),n("van-divider",{attrs:{"content-position":"left"}},[t._v("联系客服")]),t._v(" "),n("van-grid",{attrs:{gutter:3}},[n("van-grid-item",{attrs:{icon:"comment-circle-o",text:"联系客服"}}),t._v(" "),n("van-grid-item",{attrs:{icon:"question-o",text:"帮助中心"}}),t._v(" "),n("van-grid-item",{attrs:{icon:"envelop-o",text:"意见反馈"},on:{click:t.feedback}})],1),t._v(" "),n("foot-nav")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"myCenter"},[e("img",{attrs:{src:n("zbmm")}}),this._v(" "),e("div",{staticClass:"user"},[this._v("用户名")])])}]};var F=n("VU/8")(N,z,!1,function(t){n("IavG")},"data-v-37e6634a",null).exports,R={data:function(){return{productMessage:"",productMessageName:"",productMessageGoods_brief:"",productMessageRetail_price:"",primary_pic_urls:"",goods_desc:"",productList:"",number:1,issue:"",show:!1,collect:!1,value:"",params:{id:"",openId:"oQmbb4sNZdxaUQZ0sfYgvtOP2S7c",goodsId:""}}},created:function(){this.params.id=this.$route.query.id,this.getProduct()},methods:{getProduct:function(){var t,e=this;(t=this.params,h({url:"/heyushuo/heyushuo/goods/detailaction",method:"get",params:t})).then(function(t){e.productMessage=t.data,e.productMessageName=t.data.info.name,e.productMessageGoods_brief=t.data.info.goods_brief,e.productMessageRetail_price=t.data.info.retail_price,e.primary_pic_urls=t.data.info.primary_pic_url,e.goods_desc=t.data.info.goods_desc,e.issue=t.data.issue,e.productList=t.data.productList})},addCollect:function(){var t=this;this.params.goodsId=this.params.id,m(this.params).then(function(e){"success"==e.data.data?(t.$toast("收藏成功"),t.collect=!0):t.$toast("收藏失败，请重试")})},cancelCollect:function(){var t=this;this.params.goodsId=this.params.id,m(this.params).then(function(e){0==e.data.code?(t.$toast("取消收藏成功"),t.collect=!1):t.$toast("取消收藏失败，请重试")})},addCart:function(){var t,e=this;this.params.goodsId=this.params.id,this.params.number=this.number,(t=this.params,h.post("/heyushuo/heyushuo/cart/addCart",t)).then(function(t){"success"==t.data.data?e.$toast("加入购物车成功"):e.$toast("加入购物车失败，请重试")})},lookProducts:function(t){this.$router.push({path:"/product",query:{id:t.id}})},onClickLeft:function(){this.$router.back(-1)}}},D={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"商品详情","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),n("div",[n("van-swipe",{attrs:{autoplay:3e3}},t._l(t.productMessage.gallery,function(t,e){return n("van-swipe-item",{key:e},[n("img",{staticStyle:{width:"10rem"},attrs:{src:t.img_url}})])}),1),t._v(" "),n("div",{staticClass:"title",staticStyle:{padding:"10px 20px"}},[n("p",{staticStyle:{"font-size":"14px","font-weight":"bold"}},[t._v(t._s(t.productMessageName))]),t._v(" "),n("p",{staticStyle:{"font-size":"12px",color:"#758a99"}},[t._v(t._s(t.productMessageGoods_brief))]),t._v(" "),n("p",{staticStyle:{color:"#CC6600","font-size":"14px"}},[t._v("￥"+t._s(t.productMessageRetail_price))])]),t._v(" "),n("van-cell",{attrs:{"is-link":"",title:"请选择规格和数量"},on:{click:function(e){t.show=!0}}}),t._v(" "),n("van-action-sheet",{attrs:{title:"请选择"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("div",{staticClass:"content",staticStyle:{height:"8rem"}},[n("p",{staticStyle:{"text-align":"center","font-size":"14px","font-weight":"bold"}},[t._v(t._s(t.productMessageName))]),t._v(" "),n("p",{staticStyle:{"text-align":"center","font-size":"14px","font-weight":"bold",color:"#CC6600"}},[t._v("￥"+t._s(t.productMessageRetail_price))]),t._v(" "),n("img",{staticStyle:{width:"3rem","margin-left":"20px"},attrs:{src:t.primary_pic_urls}}),t._v(" "),n("van-stepper",{staticStyle:{margin:"10px 20px 0px"},attrs:{theme:"round","button-size":"22","disable-input":""},model:{value:t.number,callback:function(e){t.number=e},expression:"number"}}),t._v(" "),n("van-goods-action",[n("van-goods-action-button",{attrs:{type:"warning",text:"加入购物车"},on:{click:t.addCart}}),t._v(" "),n("van-goods-action-button",{attrs:{type:"danger",text:"立即购买"}})],1)],1)])],1),t._v(" "),n("div",{staticClass:"parameter"},[n("p",[t._v("商品参数")]),t._v(" "),t._l(t.productMessage.attribute,function(e,i){return n("div",{key:i},[n("p",[t._v(t._s(e.name)+" : "+t._s(e.value))])])})],2),t._v(" "),n("van-divider",{attrs:{"content-position":"center"}},[t._v("商品详情")]),t._v(" "),n("div",{staticClass:"list",domProps:{innerHTML:t._s(t.goods_desc)}}),t._v(" "),n("van-divider",{attrs:{"content-position":"center"}},[t._v("常见问题")]),t._v(" "),t._l(t.issue,function(e,i){return n("div",{key:i,staticClass:"question"},[n("p",{staticStyle:{color:"#CC6600"}},[t._v("·"+t._s(e.question))]),t._v(" "),n("p",{staticStyle:{color:"#758a99","text-indent":"2em"}},[t._v(t._s(e.answer))])])}),t._v(" "),n("van-divider",{attrs:{"content-position":"center"}},[t._v("商品类似推荐")]),t._v(" "),n("van-grid",{attrs:{"column-num":2,gutter:10}},t._l(t.productList,function(e,i){return n("van-grid-item",{key:i,staticStyle:{"z-index":"0"},on:{click:function(n){return t.lookProducts(e)}}},[n("img",{staticStyle:{width:"3rem"},attrs:{src:e.list_pic_url}}),t._v(" "),n("span",[t._v(t._s(e.name))]),t._v(" "),n("span",{staticStyle:{color:"#CC6600"}},[t._v("￥"+t._s(e.retail_price))])])}),1),t._v(" "),n("div",{staticStyle:{"margin-bottom":"60px"}}),t._v(" "),n("van-goods-action",[n("van-goods-action-icon",{attrs:{icon:"chat-o",text:"客服",color:"#07c160"}}),t._v(" "),n("van-goods-action-icon",{attrs:{icon:"cart-o",text:"购物车"}}),t._v(" "),t.collect?n("van-goods-action-icon",{attrs:{icon:"star",text:"收藏"},on:{click:t.cancelCollect}}):n("van-goods-action-icon",{attrs:{icon:"star-o",text:"收藏"},on:{click:t.addCollect}}),t._v(" "),n("van-goods-action-button",{attrs:{type:"warning",text:"加入购物车"},on:{click:t.addCart}}),t._v(" "),n("van-goods-action-button",{attrs:{type:"danger",text:"立即购买"}})],1)],2)},staticRenderFns:[]};var G=n("VU/8")(R,D,!1,function(t){n("1Er1")},"data-v-573e9c98",null).exports,M={data:function(){return{chosenContactId:null,editingContact:{},showList:!1,showEdit:!1,isEdit:!1,list:[],params:{openId:"oQmbb4sNZdxaUQZ0sfYgvtOP2S7c"}}},computed:{cardType:function(){return null!==this.chosenContactId?"edit":"add"},currentContact:function(){var t=this.chosenContactId;return null!==t?this.list.filter(function(e){return e.id===t})[0]:{}}},created:function(){this.getAddress()},methods:{getAddress:function(){var t=this;f(this.params).then(function(e){t.list=e.data.data})},onAdd:function(){this.editingContact={id:this.list.length},this.isEdit=!1,this.showEdit=!0},onEdit:function(t){this.isEdit=!0,this.showEdit=!0,this.editingContact=t},onSelect:function(){this.showList=!1},onSave:function(t){this.showEdit=!1,this.showList=!1,this.isEdit?this.list=this.list.map(function(e){return e.id===t.id?t:e}):this.list.push(t),this.chosenContactId=t.id},onDelete:function(t){this.showEdit=!1,this.list=this.list.filter(function(e){return e.id!==t.id}),this.chosenContactId===t.id&&(this.chosenContactId=null)}}},Q={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-contact-card",{attrs:{type:t.cardType,name:t.currentContact.name,tel:t.currentContact.mobile},on:{click:function(e){t.showList=!0}}}),t._v(" "),n("van-popup",{attrs:{position:"bottom"},model:{value:t.showList,callback:function(e){t.showList=e},expression:"showList"}},[n("van-address-list",{attrs:{list:t.list},on:{add:t.onAdd,edit:t.onEdit,select:t.onSelect},model:{value:t.chosenContactId,callback:function(e){t.chosenContactId=e},expression:"chosenContactId"}})],1),t._v(" "),n("van-popup",{attrs:{position:"bottom"},model:{value:t.showEdit,callback:function(e){t.showEdit=e},expression:"showEdit"}},[n("van-address-edit",{attrs:{"contact-info":t.editingContact,"is-edit":t.isEdit},on:{save:t.onSave,delete:t.onDelete}})],1)],1)},staticRenderFns:[]};var q=n("VU/8")(M,Q,!1,function(t){n("4VmB")},"data-v-5f4a970d",null).exports,H={data:function(){return{active:0,goodsLists:"",categoryNav:"",params:{categoryId:"",id:""}}},created:function(){this.params.categoryId=this.$route.query.id,this.params.id=this.$route.query.id,this.getCategoryNav(),this.getGoodsLists()},methods:{getCategoryNav:function(){var t,e=this;(t=this.params,h({url:"/heyushuo/heyushuo/category/categoryNav",method:"get",params:t})).then(function(t){e.categoryNav=t.data.navData}),this.params.categoryId=this.categoryNav[this.active],this.getGoodsLists()},getGoodsLists:function(){var t,e=this;(t=this.params,h({url:"/heyushuo/heyushuo/goods/goodsList",method:"get",params:t})).then(function(t){e.goodsLists=t.data.data})},onClickLeft:function(){this.$router.back(-1)},goProduct:function(t){this.$router.push({path:"/product",query:{id:t.id}})}}},O={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"商品列表","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),n("van-tabs",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.categoryNav,function(e,i){return n("div",{key:i},[n("van-tab",{attrs:{title:e.name}},[n("div",{staticClass:"banner"},[n("p",[t._v(t._s(e.name))]),t._v(" "),n("p",{staticStyle:{color:"#758a99"}},[t._v(t._s(e.front_name))]),t._v(" "),n("img",{attrs:{src:e.img_url}})]),t._v(" "),n("van-grid",{staticStyle:{"margin-top":"10px"},attrs:{"column-num":2,gutter:3}},t._l(t.goodsLists,function(e,i){return n("van-grid-item",{key:i,on:{click:function(n){return t.goProduct(e)}}},[n("img",{staticStyle:{width:"4rem"},attrs:{src:e.banner_url}}),t._v(" "),n("p",[t._v(t._s(e.name))]),t._v(" "),n("p",[t._v("销量："+t._s(e.sell_volume))]),t._v(" "),n("p",{staticStyle:{color:"#CC6600"}},[t._v("￥"+t._s(e.retail_price))])])}),1)],1)],1)}),0)],1)},staticRenderFns:[]};var B=n("VU/8")(H,O,!1,function(t){n("IB8l")},"data-v-bde5ab26",null).exports,T={data:function(){return{listAction:"",params:{openId:"oQmbb4sNZdxaUQZ0sfYgvtOP2S7c"}}},created:function(){this.getlistAction()},methods:{getlistAction:function(){var t,e=this;(t=this.params,h({url:"/heyushuo/heyushuo/collect/listAction",method:"get",params:t})).then(function(t){e.listAction=t.data.collectGoodsList})},onClickLeft:function(){this.$router.go(-1)},goodsDetail:function(t){return void 0==t.id?void this.$router.push({path:"/product",query:{id:t}}):void this.$router.push({path:"/product",query:{id:t.id}})}}},j={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"标题","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),n("van-grid",{attrs:{gutter:5,"column-num":2}},t._l(t.listAction,function(e,i){return n("van-grid-item",{key:i,on:{click:function(n){return t.goodsDetail(e)}}},[n("img",{staticStyle:{width:"4rem"},attrs:{src:e.list_pic_url}}),t._v(" "),n("span",[t._v(t._s(e.name))]),t._v(" "),n("span",{staticStyle:{color:"#cc6600"}},[t._v("￥"+t._s(e.retail_price))])])}),1)],1)},staticRenderFns:[]};var K=n("VU/8")(T,j,!1,function(t){n("jT+x")},"data-v-4ade9c25",null).exports,Y={data:function(){return{getListAction:"",show:!1,editValue:"",params:{openId:"oQmbb4sNZdxaUQZ0sfYgvtOP2S7c",checked:!0,id:"",address:"",addressId:"",userName:"",telNumber:""}}},created:function(){this.getListActions()},methods:{getListActions:function(){var t=this;f(this.params).then(function(e){t.getListAction=e.data.data})},onClickLeft:function(){this.$router.go(-1)},editAddress:function(t){this.show=!0,this.editValue=t},close:function(){this.show=!1,this.getListActions()},saveAddress:function(){var t;this.show=!1,this.params.id=this.editValue.id,this.params.address=this.editValue.address,this.params.addressId=this.editValue.address_detail,this.params.userName=this.editValue.name,this.params.telNumber=this.editValue.mobile,(t=this.params,h.post("/heyushuo/heyushuo/address/saveAction",t)).then(function(t){}),this.getListActions()}}},J={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"标题","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),t._v(" "),n("div",t._l(t.getListAction,function(e,i){return n("div",{key:i,staticClass:"box"},[n("div",{staticStyle:{float:"left",width:"60px","text-align":"center"}},[n("p",[t._v(t._s(e.name))]),t._v(" "),n("van-tag",{directives:[{name:"show",rawName:"v-show",value:1==e.is_default,expression:"item.is_default == 1"}],attrs:{plain:"",type:"primary"}},[t._v("默认地址")])],1),t._v(" "),n("div",{staticStyle:{overflow:"hidden","margin-left":"20px","padding-left":"10px"}},[n("div",{staticStyle:{float:"left"}},[n("p",[t._v(t._s(e.mobile))]),t._v(" "),n("p",[t._v(t._s(e.address)+t._s(e.address_detail))])]),t._v(" "),n("van-icon",{staticStyle:{border:"1px solid #c6c6c6","border-radius":"3px",float:"right"},attrs:{name:"edit",size:"25",color:"#c6c6c6"},on:{click:function(n){return t.editAddress(e)}}})],1)])}),0),t._v(" "),n("van-popup",{style:{height:"100%"},attrs:{position:"bottom",closeable:!0},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("p",{staticStyle:{"text-align":"center",padding:"10px 0px","font-size":"16px"}},[t._v("编辑收货信息")]),t._v(" "),n("van-cell-group",{attrs:{closeable:!0}},[n("van-field",{attrs:{label:"姓名",placeholder:"请输入用户名"},model:{value:t.editValue.name,callback:function(e){t.$set(t.editValue,"name",e)},expression:"editValue.name"}}),t._v(" "),n("van-field",{attrs:{label:"联系方式",placeholder:"请输入用户名"},model:{value:t.editValue.mobile,callback:function(e){t.$set(t.editValue,"mobile",e)},expression:"editValue.mobile"}}),t._v(" "),n("van-field",{attrs:{label:"地址",placeholder:"请输入用户名"},model:{value:t.editValue.address,callback:function(e){t.$set(t.editValue,"address",e)},expression:"editValue.address"}})],1),t._v(" "),n("van-button",{staticStyle:{position:"fixed",bottom:"0px",width:"9rem",margin:"0px 0.5rem"},attrs:{type:"danger",round:!0},on:{click:t.saveAddress}},[t._v("保存编辑")])],1)],1)},staticRenderFns:[]};var X=n("VU/8")(Y,J,!1,function(t){n("JGy+")},"data-v-84f3bc94",null).exports,W={data:function(){return{content:"",phone:"",params:{content:"",phone:"",openId:"oQmbb4sNZdxaUQZ0sfYgvtOP2S7c",name:"何玉硕"}}},created:function(){},methods:{onClickLeft:function(){this.$router.go(-1)},submit:function(){var t,e=this;""==this.content?this.$toast("反馈内容不能为空"):""==this.phone?this.$toast("联系方式不能为空"):(this.params.content=this.content,this.params.phone=this.phone,(t=this.params,h.post("/heyushuo/heyushuo/feedback/submitAction",t)).then(function(t){"true"==t.data.data?e.$toast("提交成功，感谢您的反馈"):e.$toast("提交失败，请重试")})),this.content="",this.phone=""}}},tt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"意见反馈","left-text":"返回"},on:{"click-left":t.onClickLeft}}),t._v(" "),n("div",[n("van-field",{attrs:{rows:"4",autosize:"",label:"您的反馈",type:"textarea",maxlength:"100",placeholder:"请输入反馈","show-word-limit":""},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),n("van-field",{attrs:{rows:"1",autosize:"",label:"联系方式",type:"textarea",placeholder:"邮箱/手机号/微信号"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),t._v(" "),n("van-button",{staticStyle:{width:"9rem",margin:"2rem 0.5rem 0rem"},attrs:{type:"danger",round:!0},on:{click:t.submit}},[t._v("提交反馈")])],1)],1)},staticRenderFns:[]};var et=n("VU/8")(W,tt,!1,function(t){n("HUiy")},"data-v-5e2c549c",null).exports,nt={data:function(){return{productList:"",params:{keyword:"",openId:""},sorts:{keyword:"",order:""},sortJg:!0,active:0}},created:function(){this.params.keyword=this.$route.query.keywords,this.getProductList()},methods:{getProductList:function(){var t=this;v(this.params).then(function(e){t.productList=e.data.keywords})},onClickLeft:function(){this.$router.go(-1)},product:function(t){this.$router.push({path:"/product",query:{id:t.id}})},sort:function(t){var e=this;1==t&&1==this.sortJg?(this.sorts.order="desc",this.sorts.keyword=this.params.keyword,this.sortJg=!1):1==t&&0==this.sortJg&&(this.sorts.order="asc",this.sorts.keyword=this.params.keyword,this.sortJg=!0),v(this.sorts).then(function(t){e.productList=t.data.keywords})}}},it={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:"商品列表","left-text":"返回"},on:{"click-left":t.onClickLeft}}),t._v(" "),n("van-tabbar",{model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tabbar-item",{on:{click:function(e){return t.sort(t.active)}}},[t._v("综合")]),t._v(" "),1==t.sortJg?n("van-tabbar-item",{on:{click:function(e){return t.sort(t.active)}}},[t._v("价格（由高到低）")]):n("van-tabbar-item",{on:{click:function(e){return t.sort(t.active)}}},[t._v("价格（由低到高）")]),t._v(" "),n("van-tabbar-item",{on:{click:function(e){return t.sort(t.active)}}},[t._v("分类")])],1),t._v(" "),n("van-empty",{directives:[{name:"show",rawName:"v-show",value:0==t.productList.length,expression:"productList.length == 0"}],attrs:{image:"search",description:"描述文字"}}),t._v(" "),n("van-grid",{attrs:{"column-num":2,gutter:5}},t._l(t.productList,function(e,i){return n("van-grid-item",{key:i,on:{click:function(n){return t.product(e)}}},[n("img",{staticStyle:{width:"4rem"},attrs:{src:e.list_pic_url}}),t._v(" "),n("p",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.name))]),t._v(" "),n("p",{staticStyle:{color:"#cc6600"}},[t._v("￥"+t._s(e.retail_price))])])}),1)],1)},staticRenderFns:[]};var at=n("VU/8")(nt,it,!1,function(t){n("vVyI")},"data-v-370eb85c",null).exports;i.a.use(s.a);var ot=new s.a({routes:[{path:"/",name:"index",component:S},{path:"/BestSellers",name:"BestSellers",component:Z},{path:"/classification",name:"classification",component:V},{path:"/shopCart",name:"shopCart",component:I},{path:"/myCenter",name:"myCenter",component:F},{path:"/product",name:"product",component:G},{path:"/orderDetails",name:"orderDetails",component:q},{path:"/commodityDetails",name:"commodityDetails",component:B},{path:"/collect",name:"collect",component:K},{path:"/address",name:"address",component:X},{path:"/Feedback",name:"Feedback",component:et},{path:"/productList",name:"productList",component:at}]}),st=s.a.prototype.push;s.a.prototype.push=function(t){return st.call(this,t).catch(function(t){return t})};var rt=n("Fd2+");n("4ml/"),n("sVYa");i.a.config.productionTip=!1,i.a.use(rt.a),new i.a({el:"#app",router:ot,components:{App:o},template:"<App/>"})},No6k:function(t,e){},TW3y:function(t,e){},hr9c:function(t,e){},"jT+x":function(t,e){},vVyI:function(t,e){},w2iK:function(t,e){},zbmm:function(t,e,n){t.exports=n.p+"static/img/timg.20fcb71.gif"}},["NHnr"]);
//# sourceMappingURL=app.e8bb43b6cf9ad2064426.js.map
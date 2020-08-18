import request from './../untils/request'
// 获取首页信息
export function Homepageproducts(query) {
    return request({
        url: '/heyushuo/heyushuo/index/index',
        method: 'get',
        params: query
    })
}
// 获取热卖信息
export function BestSellersApi(query) {
  return request({
    url: '/heyushuo/heyushuo/topic/listaction',
    method: 'get',
    params: query
  })
}
//获取分类信息
export  function indexaction(query){
  return request({
    url: '/heyushuo/heyushuo/category/indexaction',
    method: 'get',
    params: query
  })
}
// 获取分类信息商品列表
export  function currentaction(query){
  return request({
    url: '/heyushuo/heyushuo/category/currentaction',
    method: 'get',
    params: query
  })
}
//获取购物车信息
export  function cartList(query){
  return request({
    url: '/heyushuo/heyushuo/cart/cartList',
    method: 'get',
    params: query
  })
}
//商品详情信息
export  function detailaction(query){
  return request({
    url: '/heyushuo/heyushuo/goods/detailaction',
    method: 'get',
    params: query
  })
}
//商品收藏
export  function addcollect(query){
  return request({
    url: '/heyushuo/heyushuo/collect/addcollect',
    method: 'post',
    params: query
  })
}
//加入购物车
export  function addCart(query){
  return request({
    url: '/heyushuo/heyushuo/cart/addCart',
    method: 'post',
    params: query
  })
}
//删除购物车商品
/* id: 477 */
export  function shopCartDeleteAction(query){
  return request({
    url: '/heyushuo/heyushuo/cart/deleteAction',
    method: 'get',
    params: query
  })
}
//获取商品类型分类导航
export  function categoryNav(query){
  return request({
    url: '/heyushuo/heyushuo/category/categoryNav',
    method: 'get',
    params: query
  })
}
//获取商品类型分类详情
export  function goodsLists(query){
  return request({
    url: '/heyushuo/heyushuo/goods/goodsList',
    method: 'get',
    params: query
  })
}
// 结算订单详情
export  function orderDetailAction(query){
  return request({
    url: '/heyushuo/heyushuo/order/detailAction',
    method: 'get',
    params: query
  })
}
//地址详情查看
export  function getListAction(query){
  return request({
    url: '/heyushuo/heyushuo/address/getListAction',
    method: 'get',
    params: query
  })
}
// 保存编辑地址
export  function saveAction(query){
  return request({
    url: '/heyushuo/heyushuo/address/saveAction',
    method: 'post',
    params: query
  })
}
//删除收货地址
/*id: 82*/
export  function AddressDeleteAction(query){
  return request({
    url: '/heyushuo/heyushuo/address/deleteAction',
    method: 'get',
    params: query
  })
}
//查询收货地址
export  function detailAction(query){
  return request({
    url: '/heyushuo/heyushuo/address/detailAction',
    method: 'post',
    params: query
  })
}
//查看收藏夹
export  function listAction(query){
  return request({
    url: '/heyushuo/heyushuo/collect/listAction',
    method: 'get',
    params: query
  })
}
//提交反馈
export  function submitAction(query){
  return request({
    url: '/heyushuo/heyushuo/feedback/submitAction',
    method: 'post',
    params: query
  })
}


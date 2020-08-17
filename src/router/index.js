import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index/index.vue'
import BestSellers from '../components/BestSellers/index'
import classification from '../components/classification/index'
import shopCart from '../components/shopCart/index'
import  myCenter from '../components/myCenter/index'
import product from "../views/product";
import orderDetails from '../views/orderDetails'
import commodityDetails from '../views/commodityDetails'
import collect from '../views/Collect'
import address from '../views/Address'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    {
      path: '/BestSellers',
      name: 'BestSellers',
      component: BestSellers,
    },
    {
      path: '/classification',
      name: 'classification',
      component: classification,
    },
    {
      path: '/shopCart',
      name: 'shopCart',
      component: shopCart
    },
    {
      path: '/myCenter',
      name: 'myCenter',
      component: myCenter
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/orderDetails',
      name: 'orderDetails',
      component: orderDetails
    },
    {
      path: '/commodityDetails',
      name: 'commodityDetails',
      component: commodityDetails
    },
    {
      path: '/collect',
      name: 'collect',
      component: collect
    },
    {
      path: '/address',
      name: 'address',
      component: address
    },
  ]
})
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

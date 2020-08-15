import Vue from 'vue'

import VueRouter from 'vue-router'

const Home = () => import('views/home/Home');
const Cart = () => import('views/cart/Cart');
const Category = () => import('views/category/Category');
const Profile = () => import('views/profile/Profile');


// #############################################################################################
//获取原型对象上的replace函数
const originalreplace = VueRouter.prototype.replace;
//修改原型对象中的push方法
VueRouter.prototype.replace = function replace(location) {
  return originalreplace.call(this, location).catch(err => err)
};

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push;
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

//################################################################################################



Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
];

const router = new VueRouter({
    mode: 'history',
    routes
})



export default router

//创建路由（用于页面切换，可以叫组件切换）
import Vue from 'vue'
import Router from 'vue-router'
import Cart from './pages/cart'
import Address from './pages/address'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            name: 'cart',
            meta:{//原始数据
                auth:true
            },
            component: Cart//组件（页面）
        },
        {
            path: '/address',
            name: 'address',
            meta:{//原始数据
                auth:true
            },

            component: Address//组件（页面）
        }
    ]
})

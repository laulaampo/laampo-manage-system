import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes
})
/* eslint-disable */
router.beforeEach((from, to, next) => {
    // 要加一个判断 如果当前页面是login页面 那么也会进行路由守卫的拦截
    // 因为此时也是没有token的 所以页面会一直刷新 一直被拦截，这时候要多包裹一层判断 
    // 从from.path中判断是否login页面 如果是则不用进行全局路由的判断了 直接next()
    const username = localStorage.getItem('ms_username')
    if (!username && from.path !== '/login') {
        router.replace('/login')
        return
    }
    next()
})

export default router
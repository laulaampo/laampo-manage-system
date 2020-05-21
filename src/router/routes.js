export default [
    {
        path:'/home',
        component:()=> import(/* webpackChunkName: "home" */ '../pages/Home.vue')
    },
    {
        path:'/Thanks',
        component:()=> import(/* webpackChunkName: "order" */ '../pages/Thanks.vue')
    },
    {
        path:'/tabs',
        component:()=> import(/* webpackChunkName: "home" */ '../pages/Tabs.vue')
    },
    {
        path: '/',
        redirect: '/home'
    }
]
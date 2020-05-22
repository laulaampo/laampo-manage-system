export default [
    {
        path: '/',
        redirect:'/dashboard'
    },
    {
        path:'/',
        component:() => import( /* webpackChunkName: "home" */ '../components/Home.vue' ),
        children: [
        {
            path: '/thanks',
            component: () => import( /* webpackChunkName: "order" */ '../pages/Thanks.vue')
        },
        {
            path: '/dashboard',
            component: () => import( /* webpackChunkName: "order" */ '../pages/Dashboard.vue')
        },
        {
            path: '/tabs',
            component: () => import( /* webpackChunkName: "tabs" */ '../pages/Tabs.vue')
        },
        {
            path: '/table',
            component: () => import( /* webpackChunkName: "table" */ '../pages/Table.vue')
        },
        {
            path: '/charts',
            component: () => import( /* webpackChunkName: "charts" */ '../pages/Charts.vue')
        },
        {
            path: '/dialog',
            component: () => import( /* webpackChunkName: "dialog" */ '../pages/Dialog.vue')
        },
        {
            path: '/drag',
            component: () => import( /* webpackChunkName: "drag" */ '../pages/Drag.vue')
        },
        {
            path: '/404',
            component: () => import( /* webpackChunkName: "error" */ '../pages/Error.vue')
        },
        {
            path: '/i18n',
            component: () => import( /* webpackChunkName: "i18n" */ '../pages/I18n.vue')
        },
        {
            path: '/icon',
            component: () => import( /* webpackChunkName: "icon" */ '../pages/Icon.vue')
        },
        {
            path: '/permission',
            component: () => import( /* webpackChunkName: "permission" */ '../pages/Permission.vue')
        },
        {
            path: '/markdown',
            component: () => import( /* webpackChunkName: "markdown" */ '../pages/Markdown.vue')
        },
        {
            path: '/form',
            component: () => import( /* webpackChunkName: "form" */ '../pages/Form.vue')
        },
        {
            path: '/upload',
            component: () => import( /* webpackChunkName: "upload" */ '../pages/Upload.vue')
        },
        {
            path: '/editor',
            component: () => import( /* webpackChunkName: "editor" */ '../pages/Editor.vue')
        },
    ]
    },
    {
        path: '*',
        component: () => import( /* webpackChunkName: "error" */ '../pages/Error.vue')
    },
    {
        path:'/login',
        component: () => import( /* webpackChunkName: "login" */ '../pages/Login.vue')
    }
]
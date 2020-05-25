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
            component: () => import( /* webpackChunkName: "order" */ '../pages/Thanks.vue'),
            meta:{title:'感谢作者'}
        },
        {
            path: '/dashboard',
            component: () => import( /* webpackChunkName: "order" */ '../pages/Dashboard.vue'),
            meta:{title:'系统首页'}
        },
        {
            path: '/tabs',
            component: () => import( /* webpackChunkName: "tabs" */ '../pages/Tabs.vue'),
            meta:{title:'tab选项卡'}
        },
        {
            path: '/table',
            component: () => import( /* webpackChunkName: "table" */ '../pages/Table.vue'),
            meta:{title:'基础表格'}
        },
        {
            path: '/charts',
            component: () => import( /* webpackChunkName: "charts" */ '../pages/Charts.vue'),
            meta:{title:'scharts图表'}
        },
        {
            path: '/dialog',
            component: () => import( /* webpackChunkName: "dialog" */ '../pages/Dialog.vue'),
            meta:{title:'拖拽列表'}
        },
        {
            path: '/drag',
            component: () => import( /* webpackChunkName: "drag" */ '../pages/Drag.vue'),
            meta:{title:'拖拽弹框'}
        },
        {
            path: '/404',
            component: () => import( /* webpackChunkName: "error" */ '../pages/Error.vue'),
            meta:{title:'错误页面'}
        },
        {
            path: '/i18n',
            component: () => import( /* webpackChunkName: "i18n" */ '../pages/I18n.vue'),
            meta:{title:'国际化'}
        },
        {
            path: '/icon',
            component: () => import( /* webpackChunkName: "icon" */ '../pages/Icon.vue'),
            meta:{title:'自定义图标'}
        },
        {
            path: '/permission',
            component: () => import( /* webpackChunkName: "permission" */ '../pages/Permission.vue'),
            meta:{title:'权限测试'}
        },
        {
            path: '/markdown',
            component: () => import( /* webpackChunkName: "markdown" */ '../pages/Markdown.vue'),
            meta:{title:'markdown编辑器'}
        },
        {
            path: '/form',
            component: () => import( /* webpackChunkName: "form" */ '../pages/Form.vue'),
            meta:{title:'基础表单'}
        },
        {
            path: '/upload',
            component: () => import( /* webpackChunkName: "upload" */ '../pages/Upload.vue'),
            meta: { title: '文件上传' }
        },
        {
            path: '/editor',
            component: () => import( /* webpackChunkName: "editor" */ '../pages/Editor.vue'),
            meta:{title:'富文本编辑器'}
        },
    ]
    },
    {
        path: '*',
        component: () => import( /* webpackChunkName: "error" */ '../pages/Error.vue')
    },
    {
        path:'/login',
        component: () => import( /* webpackChunkName: "login" */ '../pages/Login.vue'),
        meta:{title:'登录页面'}
    }
]
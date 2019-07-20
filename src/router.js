import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import store from './store'
Vue.use(Router);

const router = new Router({
    mode: "history",
    // mode: "hash",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/register",
            name: "register",
            component: () =>
                import ("@/views/login/index.vue")
        },

        {
            path: "/login",
            name: "login",
            component: () =>
                import ("@/views/login/index.vue")
        },
        {
            path: '/admin',
            name: '后台首页',
            // meta: { requireAuth: true },
            children: [{
                path: 'user',
                name: '用户列表',
                children: [{
                        path: 'adduser',
                        name: '添加用户',
                        component: () =>
                            import ('@/views/user/addUser.vue')
                    },
                    {
                        path: 'showuser',
                        name: '显示用户',
                        component: () =>
                            import ('@/views/user/showUser.vue')
                    }, {
                        path: 'profile',
                        name: '个人中心',
                        component: () =>
                            import ('@/views/profile/index.vue')
                    },
                    {
                        path: 'analyse',
                        name: '用户数据分析',
                        component: () =>
                            import ('@/views/user/userAnalyse.vue')
                    }
                ],
                redirect: '/admin/user/showuser',
                component: () =>
                    import ('@/views/user/index.vue')
            }, {
                path: 'ad',
                name: 'banner图',
                children: [{
                    path: 'banner',
                    component: () =>
                        import ('@/views/ad/banner')
                }, {
                    path: 'news',
                    component: () =>
                        import ('@/views/ad/news')
                }],
                component: () =>
                    import ('@/views/ad')

            }],
            component: () =>
                import ('@/layout/admin/index.vue')
        },

    ]
});


const extendsRoutes = [{
    path: '/me',
    name: '个人中心',
    meta: {
        requireAuth: false
    },
    component: () =>
        import ('@/views/profile/index.vue')
}, {
    path: '/*',
    component: () =>
        import ('@/views/error-page/404.vue')
}]


router.addRoutes(extendsRoutes)


router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth === true) {
        if (store.state.token) {
            next();
        } else {
            next({
                path: '/login'
            })
        }
    } else {
        next()
    }
})

export default router
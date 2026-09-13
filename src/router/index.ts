import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home',
            children: [
                {
                    path: 'home',
                    name: 'HomeView',
                    component() {
                        return import(/* webpackChunkName: "HomeView" */ '../views/HomeView.vue');
                    },
                },
            ],
        },
    ],
});

export default router;

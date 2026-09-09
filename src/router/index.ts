import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component() {
                return import(/* webpackChunkName: "HomeView" */ '../views/HomeView.vue');
            },
        },
    ],
});

export default router;

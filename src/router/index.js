import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/home',
            name: 'homepath',
            component: () => import( '@/views/HomeView.vue'),
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import( '@/views/ContactView.vue'),
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('@/views/misc/NotFound.vue') },
    ],
});

export default router;

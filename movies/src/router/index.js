import Popular from "@/components/Popular.vue";
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import TopRated from '@/components/TopRated.vue'
import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/popular',
            component: Popular
        },
        {
            path: '/top',
            component: TopRated
        },
    ]
})

export default router
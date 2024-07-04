import Popular from "@/components/Popular.vue";
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import MoviePage from '@/components/MoviePage.vue'
import TvShows from '@/components/TvShows.vue'
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
            path: '/movies/:category',
            component: Popular,
            props: true
        },
        {
            path: '/popular/:id',
            component: MoviePage,
            props: true
        },
        {
            path: '/tv/:category',
            component: TvShows,
            props: true
        }
    ]
})

export default router
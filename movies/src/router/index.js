import Popular from '@/pages/Movies/Popular.vue';
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import MoviePage from '@/pages/Movies/MoviePage.vue'
import TvShows from '@/pages/Tv/TvShows.vue'
import TvPage from '@/pages/Tv/TvPage.vue';
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
        },
        {
            path: '/tv_shows/:id',
            component: TvPage,
            props: true
        },
    ]
})

export default router
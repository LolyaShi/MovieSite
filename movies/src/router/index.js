import Popular from '@/pages/Movies/Popular.vue';
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import MoviePage from '@/pages/Movies/MoviePage.vue'
import TvShows from '@/pages/Tv/TvShows.vue'
import TvPage from '@/pages/Tv/TvPage.vue';
import SearchResults from '@/pages/Search/SearchResults'
import MovieGenre from '@/pages/Movies/MovieGenre.vue'
import Genres from '@/pages/Genres/Genres.vue';
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
            path: '/genres',
            component: Genres
        },
        {
            path: '/movies/:category',
            component: Popular,
            props: true
        },
        {
            path: '/movie/:id',
            component: MoviePage,
            props: true
        },
        {
            path: '/tv_shows/:category',
            component: TvShows,
            props: true
        },
        {
            path: '/tv/:id',
            component: TvPage,
            props: true
        },
        {
            path: '/search/:text',
            component: SearchResults,
            props: true
        },
        {
            path: '/genres/:category/:id',
            component: MovieGenre,
            props: true
        }
    ]
})

export default router
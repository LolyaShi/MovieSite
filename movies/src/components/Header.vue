<template>
   <header>
        <div class="wrapper">
            <div class="logo">
                <router-link to="/home" class="movie-link"><img src="/logo.png" alt="logo"> MovieBase</router-link>
            </div>
            <nav class="menu">
                <router-link class="link menu__title" to="/home">Home</router-link>
                <router-link class="link menu__title" to="/genres">Genres</router-link>
                <div class="tv">
                    <span class="link popup-title">Movies</span>
                    <div class="popup-menu">
                        <router-link class="link" to="/movies/popular">Popular</router-link>
                        <router-link class="link" to="/movies/top_rated">Top Rated</router-link>
                        <router-link class="link" to="/movies/upcoming">Upcoming</router-link>
                    </div>
                </div>
                <div class="tv">
                    <span class="link popup-title">TV shows</span>
                    <div class="popup-menu">
                        <router-link class="link" to="/tv_shows/popular">Popular</router-link>
                        <router-link class="link" to="/tv_shows/top_rated">Top Rated</router-link>
                        <router-link class="link" to="/tv_shows/on_the_air">On the air</router-link>
                        <router-link class="link" to="/tv_shows/airing_today">Airing Today</router-link>
                    </div>
                </div>
            </nav>
            <div class="search">
                <img class="search__img" src="/search.svg" alt="search">
                
                <div class="input__block">
                    <input class="search__input" type="text" v-model="search">
                    <router-link :to="`/search/${path}`"><button class="search__btn" @click="searchRes">Search</button></router-link>
                </div>
                
            </div>

            <div class="adapt__menu">
                <div @click="openSearch" class="search__adapt">
                    <img class="search__img" src="/search.svg" alt="search">
                </div>
                <div @click="openMenu" class="burger">
                    <span class="line"></span>
                </div>
            </div>
            
        </div>
        <div v-if="open" class="burger_menu">
                <router-link @click="openMenu" class="link" to="/home">Home</router-link>
                <router-link @click="openMenu" class="link" to="/genres">Genres</router-link>
                <div class="tv">
                    <span class="link popup-title">Movies</span>
                    <ul>
                        <li class="adapt__mini__link"><router-link @click="openMenu" class="link" to="/movies/popular">Popular</router-link></li>
                        <li class="adapt__mini__link"><router-link @click="openMenu" class="link" to="/movies/top_rated">Top Rated</router-link></li>
                        <li class="adapt__mini__link"><router-link @click="openMenu" class="link" to="/movies/upcoming">Upcoming</router-link></li>
                    </ul>
                </div>
                <div class="tv">
                    <span class="link popup-title">TV shows</span>
                    <ul>
                        <li class="adapt__mini__link"><router-link @click="openMenu" class="link" to="/tv_shows/popular">Popular</router-link></li>
                        <li class="adapt__mini__link"><router-link @click="openMenu" class="link" to="/tv_shows/top_rated">Top Rated</router-link></li>
                        <li class="adapt__mini__link"><router-link @click="openMenu" class="link" to="/tv_shows/on_the_air">On the air</router-link></li>
                        <li class="adapt__mini__link"><router-link @click="openMenu" class="link" to="/tv_shows/airing_today">Airing Today</router-link></li>
                    </ul>
                </div>
            
        </div>
        <div v-if="searchInput" class="search_menu">
            <input class="search__input" type="text" v-model="search">
            <router-link @click="openSearch" :to="`/search/${path}`"><button class="search__btn" @click="searchRes">Search</button></router-link>
        </div>
   </header>
    
  </template>
  
  <script>

import {defineComponent, ref} from 'vue'
  export default defineComponent( {
    name: 'Header',
     
    setup(){
        const open = ref(false)
        function openMenu(){
            open.value = !open.value
        }
        const searchInput = ref(false);
        function openSearch(){
            searchInput.value = !searchInput.value
        }
        const search = ref()
        const path = ref();

        const searchRes = () =>{
            path.value = search.value;
            search.value = "";
        }

        

      return{
        open,
        openMenu,
        search,
        path,
        searchRes,
        searchInput,
        openSearch
      }
    }
  })
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    header{
        width: 100%;
        max-width: 1400px;
        margin: 0 auto;
        
        background-color: rgb(38, 35, 35);
    }
    .wrapper{
        margin: 0 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
    }
    .logo{
        
    }
    .logo img{
        max-width: 50px;
        object-fit: contain;
    }
    .link{
        margin: 0 10px;
        font-size: 20px;
        line-height: 28px;
        color: #fff;
        text-decoration: none;
    }
    .movie-link{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 26px;
        font-weight: 700;
        color: rgb(230, 16, 51);
        text-decoration: none;
        cursor: pointer;
    }

    .tv{
        display: inline-block;
        position: relative;
    }
    .menu__title, .popup-title{
        transition: all .4s;
    }
    .menu__title:hover{
        color: #c51212;
    }
    .tv:hover .popup-title{
        color:#c51212;
    }

    .popup-menu{
        display: none;
        flex-direction: column;
        align-items: center;
        padding: 20px 5px;
        background-color: black;
        position: absolute;
        right: 0;
        z-index: 4;
        width: 300px;
    }
    .tv:hover .popup-menu{
        display: flex;
    }
    .popup-menu a{
        width: 100%;
    }
    .popup-menu a:hover{
        background-color: rgb(160, 30, 30);
    }
    /*search */

    .search{
        display: flex;
        align-items: center;
    }
    .search__input{
        font-size: 16px;
        line-height: 18px;
        padding: 5px;
        background-color: rgb(52, 45, 45);
        border: solid 1px #ab3939;
        color: #fff;
    }
    .search__input:focus{
        border: solid 1px #ab3939;
        outline: none;
        box-shadow: 0 0 15px  #ab3939;
    }
    .search__btn{
        font-size: 16px;
        padding: 5px;
        background-color: #c51212;
        color: #fff;
        margin-left: 5px;
        cursor: pointer;
    }
    .search__img{
        filter: invert();
        margin-right: 5px; 
        max-width: 20px;
    }

    /*burger*/ 
    .burger{
        width: 20px;
        height: 20px;
        position: relative;
        display: none;
        margin-left: 10px;
    }
    .line{
        display: block;
        width: 100%;
        height: 2px;
        background-color: #fff;
        margin-top: 50%;
    }
    .line:before, .line::after{
        content: "";
        display: block;
        width: 100%;
        height: 2px;
        background-color: #fff;
        position: absolute;
    }
    .line:before{
        top: 0;
    }
    .line::after{
        bottom: 0;
    }

    .burger_menu{
        position: absolute;
        right: 0;
        padding: 10px 100px;
        height: 100vh;
        background-color: rgba(24, 21, 21, 0.833);
        display: none;
        flex-direction: column;
        z-index: 5;
    }

    .adapt__mini__link{
        list-style: none;
    }
    .adapt__mini__link a{
        font-size: 16px;
        color: #f64d4d
    }

    .search_menu{
        display: none;
        position: absolute;
        right: 0;
        z-index: 5;
        width: auto;
        height: auto;
        padding: 10px;
       background-color: rgba(32, 29, 29, 0.886);
    }
  
    .adapt__menu{
        display: none;
    }

    @media(max-width: 992px){
        .menu{
            display: none;
        }
        .burger{
            display: block;
        }
        .burger_menu{
            display: flex;
        }
        .search{
            display: none;
        }
        .adapt__menu{
            display: flex;
        }
        .search_menu{
            display: block;
        }
    }
  </style>
  
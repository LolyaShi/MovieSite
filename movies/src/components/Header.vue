<template>
   <header>
        <div class="wrapper">
            <div class="logo">
                <router-link to="/home" class="movie-link"><img src="/logo.png" alt="logo"> MovieBase</router-link>
            </div>
            <nav class="menu">
                <router-link class="link" to="/home">Home</router-link>
                <router-link class="link" to="/about">About us</router-link>
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
                    </div>
                </div>
            </nav>
            <div class="search">
                <input type="text" v-model="search">
                <router-link :to="`/search/${search}`"><button>Search</button></router-link>
            </div>
            <div @click="openMenu" class="burger">
                <span class="line"></span>
            </div>
        </div>
        <div v-if="open" class="burger_menu">
                <router-link @click="openMenu" class="link" to="/home">Home</router-link>
                <router-link @click="openMenu" class="link" to="/about">About us</router-link>
                
            
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
        const search = ref()

      
        

      return{
        open,
        openMenu,
        search
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
        width: 50px;
    }
    .logo img{
        max-width: 100%;
        object-fit: contain;
    }
    .link{
        margin-right: 20px;
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
    }

    .tv{
        display: inline-block;
        position: relative;

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
    .search input{
        font-size: 16px;
        line-height: 18px;
        padding: 5px;
        background-color: rgb(52, 45, 45);
        border: solid 1px #ab3939;
        color: #fff;
    }
    .search input:focus{
        border: solid 1px #ab3939;
        outline: none;
        box-shadow: 0 0 15px  #ab3939;
    }
    .search button{
        font-size: 16px;
        padding: 5px;
        background-color: #c51212;
        color: #fff;
        margin-left: 5px;
    }

    /*burger*/ 
    .burger{
        width: 20px;
        height: 20px;
        position: relative;
        display: none;
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
        width: 300px;
        height: 100dvh;
        background-color: rgba(35, 27, 27, 0.696);
        display: none;
        flex-direction: column;

    }
  

    @media(max-width: 767px){
        .menu{
            display: none;
        }
        .burger{
            display: block;
        }
        .burger_menu{
            display: flex;
        }
    }
  </style>
  
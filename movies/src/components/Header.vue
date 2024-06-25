<template>
   <header>
        <div class="wrapper">
            <div class="logo">
                <router-link to="/home" class="movie-link"><img src="/logo.png" alt="logo"> MovieBase</router-link>
            </div>
            <nav class="menu">
                <router-link to="/home">Home</router-link>
                <router-link to="/about">About us</router-link>
                <router-link to="/popular">Popular</router-link>
                <router-link to="/top_rated">Top Rated</router-link>
            </nav>
        </div>
   </header>
    
  </template>
  
  <script>
  import {defineComponent} from 'vue'
  export default defineComponent( {
    name: 'Header',
     
    setup(){
  
      return{
  
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
    .menu a{
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
  </style>
  
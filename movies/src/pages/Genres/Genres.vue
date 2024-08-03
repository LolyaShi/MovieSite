<template>
    
    <h2>Genres</h2>
    <div class="container">
      <div class="item" v-for="genre in genres" :key="genre.id">
        <router-link :to="`/genres/movie/${genre.id}`">{{ genre.name }}</router-link>
      </div>
    </div>
  </template>
  
  <script>
  import { fetchGenreList } from '@/api/fetchData';
import {defineComponent, ref, watchEffect} from 'vue'
  export default defineComponent( {
    name: 'Genres',
     
    setup(){

      const genres = ref([])
      const genreList = async () => {
        genres.value = await fetchGenreList()
      }

      watchEffect(() => {
        genreList()
      })
  
      return{
        genres
      }
    }
  })
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .container{
      width: 100%;
     
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .item{
      flex: 1 1 25%;
      padding: 20px 10px;
      margin: 10px;
      background-color: #b81414;
      color: #fff;
      font-size: 20px;
      font-weight: 700;
    }
    .item:hover{
      box-shadow: 0 0 10px 5px #fe6969;
    }
    a{
      text-decoration: none;
      color: #fff;
    }
  </style>
  
<template>
    
    <h2>Genres</h2>
    <div class="container">
      <div class="category" v-for="list in lists" :key="list.category">
        <h2>{{ list.category }}</h2>
        <div class="items__container">
          <div class="item" v-for="genre in list.genres" :key="genre.id">
            <router-link :to="`/genres/${list.category}/${genre.id}`">{{ genre.name }}</router-link>
          </div>
        </div>
        
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

      const lists = ref([
        {
          category: 'movie',
          genres: []
        },
        {
          category: 'tv',
          genres: []
        }
      ])

      for(let list of lists.value){
        watchEffect(async () => {
          const result = await fetchGenreList(list.category)
          list.genres = result

        })
        
      }

      
  
      return{
        genres,
        lists
      }
    }
  })
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .container{
      width: 100%;
     
      
    }
    .category h2{
      font-size: 22px;
      text-transform: uppercase;
      color: #b81414;
    }
    .items__container{
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
  
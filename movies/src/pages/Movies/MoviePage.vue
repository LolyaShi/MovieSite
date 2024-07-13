<template>
    <div v-if="loading">
        <Load />
    </div>
    <div v-else class="wrapper">
      <div class="top">
        <img :src="`${baseUrl}w1280${movie.backdrop_path}`" alt="movie img">
        <h2>{{ movie.title }}</h2>
        <div class="shadow"></div>
      </div>
      <div class="movie">
        <div class="poster">
          <img :src="`${baseUrl}w300${movie.poster_path}`" alt="poster">
        </div>
        <div class="info">
          
          <p><span class="mini-title">Year:</span> {{movie.release_date}} </p>
          <p><span class="mini-title">Countries: </span>
            <span class='genre' v-for="country in movie.production_countries" :key="country.name">{{ country.name }} </span>
          </p>
          <p><span class="mini-title">Prodaction companies: </span>
            <span class='genre' v-for="company in movie.production_companies" :key="company.id">{{ company.name }} </span>
          </p>
          <p><span class="mini-title">Rate:</span> {{movie.vote_average}} </p>
          <p><span class="mini-title">Genres: </span>
            <span class='genre' v-for="genre in movie.genres" :key="genre.id">{{ genre.name }} </span>
          </p>
          <p><span class="mini-title">Runtime:</span> {{ movie.runtime }} min</p>
         
        </div>
      </div>
      <div class="overview">
        <div class="mini-title">About:</div>
        <p> {{ movie.overview }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import { fetchMovie } from '@/api/fetchData';
  import Load from '@/components/Load.vue'
import {defineComponent, ref, watchEffect} from 'vue'
  export default defineComponent( {
    name: 'MoviePage',
    components:{
      Load
    },
    props: {
      id: {
        type: String,
        required: true
      }
    },
     
    setup(props){
      
      const baseUrl = "http://image.tmdb.org/t/p/";
      const movie = ref(null);
      const loading = ref(true);
      const type = ref('movie')

      const loadMovie = async () => {
        movie.value = await fetchMovie(type.value, props.id)
        loading.value = false
      }

      watchEffect(() => {
        loadMovie()
      })

      return{
        movie,
        baseUrl,
        loading
      }
    }
  })
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .wrapper{
      padding: 20px;
     
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .top{
      width: 100%;
      height: 500px;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .top img{
      width: 100%;
      height: auto;
      object-fit: contain
    }
    .shadow{
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(35, 32, 32, 0.676);
      z-index: 1;
      box-shadow: 0 0 20px 20px rgba(35, 32, 32, 0.676);
    }
    .movie{
      display: flex;
      justify-content: center;
      margin-top: 30px;
    }
    .poster{
      flex: 0 1 40%;
      position: relative;
      top: -100px;
      z-index: 3;
    }
    .poster img{
      max-width: 100%;
      height: auto;
      object-fit: contain;
    }
    .info{
      flex: 0 1 60%;
      
      font-size: 18px;
      line-height: 23px;
      color: #fff;
      text-align: left;
      padding: 0 50px;
    }
    h2{
      font-size: 50px;
      font-weight: 700;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 3;
    }
    .genre{
      margin-left: 10px
    }
    .mini-title{
      color: #d32b2b;
      font-weight: 700;
    }
    .overview{
      text-align: left;
      padding: 0 100px;
      font-size: 20px;
      line-height: 24px;
    }
  </style>
  
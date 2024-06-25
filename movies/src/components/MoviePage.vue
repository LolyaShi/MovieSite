<template>
    <div v-if="loading">
        <Load />
    </div>
    <div v-else class="wrapper">
      <div class="movie">
        <div class="poster">
          <img :src="baseUrl+movie.poster_path" alt="poster">
        </div>
        <div class="info">
          <h2>{{ movie.title }}</h2>
          <p>Year: {{movie.release_date}} </p>
          <p>Rate: {{movie.vote_average}} </p>
          <p>Genres: 
            <span class='genre' v-for="genre in movie.genres" :key="genre.id">{{ genre.name }} </span>

          </p>
          <p>About: {{ movie.overview }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { fetchMovie } from '@/api/fetchData';
  import Load from './Load.vue'
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
      
      const baseUrl = "http://image.tmdb.org/t/p/w300";
      const movie = ref(null);
      const loading = ref(true);

      const loadMovie = async () => {
        movie.value = await fetchMovie(props.id)
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
    }
    .movie{
      display: flex;
      justify-content: center
    }
    .poster{
      flex: 0 1 30%;
    }
    .poster img{
      max-width: 100%;
      height: auto;
      object-fit: contain;
    }
    .info{
      flex: 0 1 70%;
      margin-left: 50px;
      font-size: 20px;
      line-height: 23px;
      color: #fff;
      text-align: left;
    }
    h2{
      font-size: 28px;
      font-weight: 700;
    }
    .genre{
      margin-left: 10px
    }
  </style>
  
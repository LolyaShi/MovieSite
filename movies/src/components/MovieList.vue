<template>
  <div class="container">
    <h1>Most popular movies</h1>

    <div class="movies" v-if="!loading">
      <div class="movie-item" v-for='movie in movies' :key='movie.id' >
        <img :src="baseUrl+movie.backdrop_path" alt="poster" >
        <div>{{ movie.title }}</div>
      </div>
    </div>

    <Load v-else />

  </div>
  
</template>

<script>
import { fetchPage } from '@/api/fetchData';
import {defineComponent, ref, watchEffect} from 'vue'
import Load from './Load.vue';

export default defineComponent( {
  name: 'MovieList',
  components: {
    Load
  },
  props: {
    page: {
      type: Number,
      required: true
    },
    category: {
      type: String,
      required: true
    }
  },
   
  setup(props){

    const movies = ref([])
    const loading = ref(true)
    const baseUrl = "http://image.tmdb.org/t/p/w300";
    

    const loadMovies = async () => {
      movies.value = await fetchPage(props.category, props.page)
      loading.value = false;
    }

    watchEffect(() => {
      loadMovies()
    })
    

    return{
      movies,
      loading,
      baseUrl
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
  }
  .movies{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .movie-item{
    width: 20%;
    display: flex;
    flex-direction: column;
    margin: 10px;
  }
  .movie-item img{
    max-width: 100%;
    object-fit: contain;
  }
  .movie-item div{
    padding: 5px;
  }
</style>

<template>
  <div class="container">
    <h1>{{title}}</h1>

    <div class="movies" v-if="!loading">
      <div class="movie-item" v-for='movie in movies' :key='movie.id' >
        <router-link :to="`/tv/${movie.id}`">
          <div class="movie_img"><img :src="baseUrl+movie.poster_path" alt="poster" ></div>
          <div>{{ movie.name }}</div>
        </router-link>
      </div>
    </div>

    <Load v-else />

  </div>
  
</template>

<script>
import { fetchPage } from '@/api/fetchData';
import {defineComponent, ref, watchEffect} from 'vue'
import Load from '@/components/Load.vue';

export default defineComponent( {
  name: 'TvList',
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
    },
    type: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
   
  setup(props){

    const movies = ref([])
    const loading = ref(true)
    const baseUrl = "http://image.tmdb.org/t/p/w300";
    

    const loadMovies = async () => {
      movies.value = await fetchPage(props.type, props.category, props.page)
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
    min-width: 20%;
    display: flex;
    flex-direction: column;
    margin: 10px;
    background-color: rgb(68, 62, 62);
    box-shadow: 0 0 10px #928d8d;
    height: 500px;
    transition: all .4s;
  }
  .movie-item:hover{
    transform: scale(1.1, 1.1)
  }
  .movie_img{
    width: 100%;
    height: 90%;
    overflow: hidden;
  }
  .movie_img img{
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
  .movie-item div{
    padding: 5px;
  }
  .movie-item a{
    color: #fff;
    text-decoration: none;
  }
</style>

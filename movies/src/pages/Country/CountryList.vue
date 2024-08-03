<template>
    
    
  <div class="container">
      <h1>Country</h1>
      <div class="change_category">
          <button><router-link :to="`/country/movie/${name}`">Movies</router-link> </button>
          <button><router-link :to="`/country/tv/${name}`">TV Shows</router-link> </button>
      </div>

      <div class="movies" v-if="!loading">
          <div class="movie-item" v-for='movie in movieList' :key='movie.id' >
              <router-link :to="`/${category}/${movie.id}`">
              <div class="movie_img"><img :src="baseUrl+movie.poster_path" alt="poster" ></div>
              <div v-if="category == 'movie'">{{ movie.title }}</div>
              <div v-else>{{ movie.name }}</div>
              </router-link>
          </div>
          <Pagination :count="total" :currentPage="currentPage" :changePage="changePage"/>
      </div>

      <Load v-else />

  </div>
</template>

<script>
import { fetchCountry } from '@/api/fetchData';
import Load from '@/components/Load.vue';
import Pagination from '@/components/Pagination.vue';
import {defineComponent, ref, watchEffect} from 'vue'
export default defineComponent( {
  name: 'CountryList',
  components:{
      Load,
      Pagination
  },
  props: {
      name:{
          type: String,
          required: true
      },
      category: {
          type: String,
          required: true
      }
  },
   
  setup(props){

      const movieList = ref([])
      const loading = ref('true')
      const baseUrl = "http://image.tmdb.org/t/p/w300";
      const genre = ref()

      const currentPage = ref(1)
      const total = ref(500)
      const changePage = (page) =>{
          currentPage.value = page
      }

      const fetchGenreList = async() => {
         const result = await fetchCountry(currentPage.value, props.category, props.name)
         movieList.value = result.results
         if(result.total_pages > 500){
              total.value = 500
         }
          else{
            total.value = result.total_pages
          }

         
          loading.value = false

      } 

      watchEffect(() => {
          fetchGenreList()
      })

    return{
      movieList,
      loading,
      baseUrl,
      genre,
      currentPage,
      total,
      changePage
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
  .change_category{
      text-align: left;
      margin: 20px 10px;
  }
  .change_category button{
      padding: 10px 15px;
      background-color: #970909;
      margin: 0 5px;
  }
  .change_category a{
      text-decoration: none;
      color: #fff;
  }
  h1{
      text-transform: uppercase;
  }
  .movies{
      display: flex;
      justify-content: center;
    
      flex-wrap: wrap;
  }
  .movie-item{
      flex: 1 1 20%;
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

  
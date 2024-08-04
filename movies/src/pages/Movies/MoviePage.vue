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
            <span class='genre' v-for="country in movie.production_countries" :key="country.name">
              <router-link :to="`/country/${type}/${country.iso_3166_1}`">{{ country.name }} </router-link> 
            </span>
          </p>
          <p v-if="movie.production_companies.length>0"><span class="mini-title">Prodaction companies: </span>
            <span class='genre' v-for="company in movie.production_companies" :key="company.id">{{ company.name }} </span>
          </p>
          <p><span class="mini-title">Rate:</span> {{movie.vote_average}} </p>
          <p><span class="mini-title">Genres: </span>
            <span class='genre' v-for="genre in movie.genres" :key="genre.id">
              <router-link :to="`/genres/${type}/${genre.id}`">{{ genre.name }} </router-link> 
            </span>
          </p>
          <p><span class="mini-title">Runtime:</span> {{ movie.runtime }} min</p>
         
        </div>
      </div>
      <div class="overview">
        <div class="mini-title">About:</div>
        <p> {{ movie.overview }}</p>
      </div>

      <div class="similar">
        <h3 class="mini-title">Similar movies</h3>
        <div class="similar__container">
          <div class="similar__item" v-for="item in similar" :key="item.id">
          
            <router-link :to="`/movie/${item.id}`">
              <div>
                <img :src="`${baseUrl}w300${item.poster_path}`" alt="poster">
              </div>
              <div class="similar__title">
                <span>{{ item.title }}</span>
              </div>
            </router-link>
          
        </div>
        </div>
        
      </div>

      <div class="reviews">
        <h2 class="mini-title">Reviews</h2>  
          <div class="review__container">
            <div class="review__item" v-for="item in reviews" :key="item.id">
              <div class="author">
                {{ item.author }}
              </div>
              <div class="review__content">
                {{item.content}}
              </div>
            </div>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  import { fetchMovie, fetchSimilar, fetchReviews } from '@/api/fetchData';
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

      

      const similar = ref([])
      const fetchSimilarMovies = async() => {
        similar.value = await fetchSimilar(type.value, props.id)
      }

      
      const reviews = ref([])
      const fetchReviewsData = async() => {
        reviews.value = await fetchReviews(type.value, props.id)
      }

      watchEffect(() => {
        loadMovie(),
        fetchSimilarMovies(),
        fetchReviewsData()
      })

      return{
        movie,
        baseUrl,
        loading,
        similar,
        reviews,
        type
      }
    }
  })
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .wrapper{
     
      width: 100%;
      display: flex;
      flex-direction: column;
  
    }
    .top{
      width: 100%;
      
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .top img{
      width: 100%;
      height: auto;
      object-fit: fill;
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
      object-fit: cover;
    }
    .info{
      flex: 0 1 60%;
      
      font-size: 18px;
      line-height: 23px;
      color: #fff;
      text-align: left;
      padding: 0 50px;
    }


    @media(max-width: 992px){
      .info{
        padding: 0 20px;
      }
    }

    @media(max-width: 767px){
      .movie{
        flex-direction: column;
        align-items: center;
      }
      .info{
        padding: 0 20px;
      }
      .poster{
        top: 0;
      }
    }

    .top h2{
      font-size: 50px;
      font-weight: 700;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 3;
    }
    .genre a{
     color: #fff;
     text-decoration: none;
     cursor: pointer;
     transition: all, .4s;
    }
    .genre a:hover{
      color:#d32b2b;
    }
    .genre:not(:last-child):after{
      content: '';
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      margin: 0 10px;
      background-color: #d32b2b;
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

    @media(max-width: 767px){

      .top h2{
        font-size: 30px;
      }
      .overview{
        text-align: center;
        padding: 0 50px;
        margin-top: 20px;
      }
    }

    /*similar */

    .similar{
      margin-top: 100px;
    }
    .similar h3{
      font-size: 20px;
      font-weight: 800;

    }
    .similar__container{
      display: flex;
      justify-content: flex-start;
      overflow-x: scroll;

    }
    .similar__item{
      min-width: 20%;
      position: relative;
      margin: 0 10px;
      overflow: hidden;
 
    }

    @media(max-width: 992px){
      .similar__item{
        min-width: 25%;
      }
    }

    @media(max-width: 767px){
      .similar__item{
        min-width: 50%;
      }
    }

    .similar__item img{
      max-width: 100%;
      height: auto;
      object-fit: contain;
    }
    .similar__title{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(35, 34, 34, 0.701);
      display: none;
      flex-direction: column;
      justify-content: center;
      color: #fff;
      font-size: 22px;
      font-weight: 700;
      transition: all .4s;
      text-align: center;
    }
    .similar__title span{
      padding: 5px;
    }
    .similar__item:hover .similar__title{
      display: flex;
    }

    /*reviews */
    .reviews {
      margin-top: 100px;
    }
    .review__container {
      padding: 0 100px;
      text-align: left;
    }

    @media(max-width: 767px){
      .review__container{
        padding: 0 50px;
      }
    }


    .review__item {
      margin: 20px 0;
    }
    .author {
      font-size: 22px;
      line-height: 28px;
      font-weight: 700;
      color: #d32b2b;
    }
    .review__content {
      padding: 10px 20px;
      background-color: rgb(48, 44, 44);
    }

  </style>
  
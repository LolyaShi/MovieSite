<template>
    <main>
      <h2>Home</h2>
      <div class="category-blocks">
        <div class="block" v-for="category in movieList" :key="category.path">
          <div class="top">
            <h3>{{ category.type }}</h3>
            <router-link class="block-link" :to="category.path">More</router-link>
          </div>
          <div v-if="!loader">
            <Load />
          </div>
          <div v-else class="catalog">
            <div v-for="item in category.list" :key="item.id" class="catalog_item">
              <img :src="baseUrl+item.poster_path" alt="poster" >
              {{ item.title }}
            </div>
    
          </div>
        </div>
      </div>
    </main>
    
  </template>
  
  <script>
  import { fetchPage } from '@/api/fetchData';
  import {defineComponent, ref, watchEffect} from 'vue'

  import Load from '@/components/Load.vue'
  export default defineComponent( {
    name: 'Home',
    components:{
      Load
    },

    setup(){
      
      const loader = ref(false)
      const baseUrl = "http://image.tmdb.org/t/p/w300";

    const categories = [
      {
        title: "Popular movies",
        path: "/popular",
        category: "popular"
      },
      {
        title: "Top rated movies",
        path: "/top",
        category: "top_rated"
      },
      {
        title: "Upcoming",
        path: "/top",
        category: "popular"
      },
      {
        title: "Top rated serials",
        path: "/top",
        category: "popular"
      },
    ]

    const types = ['popular', 'top_rated']
    const movieList = ref([]);

    const movie = ref([])

   for(let type of types){
    const list = ref([])
    const loadList = async() => {
      const result = await fetchPage(type, 1)
      list.value = result.slice(0, 5)
    }
    watchEffect(() => {
      loadList()
    })

    const obj = {
      type,
      path: type,
      list: list
    }
    movieList.value.push(obj)
    
   }
   console.log(movieList.value)

    const fetchPreview = async () => {
      const result = await fetchPage("popular", 1);
      loader.value = true;
      movie.value = result.slice(0, 5)
    }

    watchEffect(() => {
      fetchPreview()
    })
    

      return{
        categories,
        movie,
        loader,
        movieList,
        baseUrl
      }
    }
  })
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    main{
      color: #fff;
    }
    .category-blocks{
      margin-top: 50px;
      padding: 0 20px;
    }
    .block{
      margin: 10px 0;
      background-color: rgba(41, 36, 36, 0.502);
      padding: 10px;

    }
    .top{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 50px;
      color: #fff;
    }
    .block-link{
      color: rgb(220, 35, 51);
      text-decoration: none;
      font-weight: 700;
    }

    .catalog{
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .catalog_item{
      margin-right: 10px;
      width: 300px;
    }
    .catalog_item img{
      max-width: 100%;
      height: auto;
      object-fit: contain;
    }

  </style>
  
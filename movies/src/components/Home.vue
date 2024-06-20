<template>
    <main>
      <h2>Home</h2>
      <div class="category-blocks">
        <div class="block" v-for="category in categories" :key="category.path">
          <div class="top">
            <h3>{{ category.title }}</h3>
            <router-link class="block-link" :to="category.path">More</router-link>
          </div>
          <div v-if="!loader">
            <Load />
          </div>
          <div v-else class="catalog">
            <div v-for="item in movie" :key="item.id">
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

    const movie = ref([])

    const fetchPreview = async () => {
      const result = await fetchPage("popular", 1);
      console.log(result)
      loader.value = true;
      movie.value = result.slice(0, 5)
    }

    watchEffect(() => {
      fetchPreview()
    })
    

      return{
        categories,
        movie,
        loader
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

  </style>
  
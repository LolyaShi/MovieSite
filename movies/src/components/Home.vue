<template>
    <main>
      <h2>Home</h2>
      <div class="category-blocks">
        <div class="block" v-for="category in categories" :key="category.path">
          <div class="top">
            <h3>{{ category.title }}</h3>
            <router-link class="block-link" :to="`/movies/${category.path}`">More</router-link>
          </div>
          <div v-if="!loader">
            <Load />
          </div>
          <div v-else class="catalog">
            {{category.list.value}}
            <div v-for="item in category.list" :key="item.id" class="catalog_item">
              <router-link :to="`/popular/${item.id}`">
                <img :src="baseUrl+item.poster_path" alt="poster" >
                <div class="item_name">
                  {{ item.title }}
                </div>
              </router-link>
              
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

    const categories = ref([
      {
        title: "Popular movies",
        path: "popular",
        type: "popular",
        collection: 'movie',
        list: []
      },
      {
        title: "Top rated movies",
        path: "top_rated",
        type: "top_rated",
        collection: 'movie',
        list: []
      },
      {
        title: "Upcoming",
        path: "upcoming",
        type: "upcoming",
        collection: 'movie',
        list: []
      },
      {
        title: "Top rated serials",
        path: "top_rated",
        type: "popular",
        collection: 'tv',
        list: []
      },
    ])

   
    for(let category of categories.value){
      watchEffect(async () => {
        const result = await fetchPage(category.collection, category.type, 1)
        category.list  = result.slice(0, 5)
        loader.value = true
      })
      
    }


      return{
        categories,
        loader,

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
    h3{
      text-transform: uppercase;
    }

    .catalog{
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .catalog_item{
      margin-right: 10px;
      width: 300px;
      position: relative;
    }
    .catalog_item img{
      max-width: 100%;
      height: auto;
      object-fit: contain;
    }
    .item_name{
      position: absolute;
      top:0;
      left: 0;
      width: 100%;
      height: 100%;
      text-align: center;
      flex-direction: column;
      justify-content: center;
      background-color: rgba(16, 15, 15, 0.689);
      color: #fff;
      font-size: 22px;
      font-weight: 700;
      display: none;
      transition: all .4s;
    }
    .catalog_item:hover .item_name{
      display: flex;
    }

  </style>
  
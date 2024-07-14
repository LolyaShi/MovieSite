<template>
    
    <h2>Search result for "{{ text }}"</h2>
    <div class="container">
        <div class="item" v-for="item in searchList" :key="item.id">
            <router-link :to="`/${item.media_type}/${item.id}`">
                <div class="movie_img"><img :src="baseUrl+item.poster_path" alt="poster" ></div>
                <div class="movie_title">
                    <div v-if="item.title">{{ item.title }}</div>
                    <div v-else>{{ item.name }}</div>
                </div>
                
            </router-link>
        </div>
    </div>
  </template>
  
  <script>
  import {defineComponent, watchEffect, ref} from 'vue'
  import { fetchSearchResult } from '@/api/fetchData';
  export default defineComponent( {
    name: 'SearchResults',

    props: {
        text: {
            type: String,
            required: true
        }
    },
     
    setup(props){

        const searchList = ref([])
        const baseUrl = "http://image.tmdb.org/t/p/w300";

        const searchResult = async() => {
            const result = await fetchSearchResult(props.text)
            searchList.value = result.results.filter((item) => {return item.media_type !== 'person'})
            console.log(result.results.filter((item) => {return item.media_type !== 'person'}))
        }
        watchEffect(() => {
            searchResult()
        })

  
      return{
        searchList,
        baseUrl
      }
    }
  })
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .container{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .item{
        min-width: 20%;
        margin: 10px;
        position: relative;
        
    }
    .movie_img img{
      max-width: 100%;
      height: auto;
      object-fit: fill;
    }
    .movie_img{
        width: 100%;
        overflow: hidden;
    }
    .movie_title{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(27, 25, 25, 0.68);
        display: none;
        transition: all .8s;
    }
    .item:hover .movie_title{
        display: block
    }
    .movie_title div{
        font-size: 20px;
        line-height: 22px;
        font-weight: 700;
        color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

  </style>
  
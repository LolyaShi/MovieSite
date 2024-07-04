<template>

    <div v-if='!loading'>
      <MovieList :type="type" :page="currentPage" :category="category"  />
      <Pagination :count="pageCount" :currentPage="currentPage" :changePage="changePage" />
    </div>
  
    <Load v-else />
  </template>
  
  <script>
  import MovieList from './MovieList.vue'
  import Load from './Load.vue'
  import Pagination from './Pagination.vue'
  import {fetchData} from '@/api/fetchData'
  
  import {defineComponent, ref, onMounted} from 'vue'
  
  
  export default defineComponent ({
    name: 'App',
    components: {
      Load,
      MovieList,
      Pagination
    },
    props: {
      category: {
        type: String,
        required: true
      }
    },

    setup(){
  
      const loading = ref(true)
      const currentPage = ref(1)
      const pageCount = ref(0)
      const type = ref("movie")
      
  
      onMounted(() => {
        fetchData()
          .then((result) => {
            pageCount.value = result
            loading.value = false
          })
          .catch((error) => {
            console.log(error)
            loading.value = false
          })
      })
  
     function changePage(page){
      currentPage.value = page
     }
  
      return{
        loading,
        currentPage,
        pageCount,
        changePage,
        type
      }
    }
  
  })
  </script>
  
  <style>

  </style>
  
<template>

    <div v-if='!loading'>
      <MovieList :page="currentPage" :category="category" :type="type" />
      <Pagination :count="pageCount" :currentPage="currentPage" :changePage="changePage" />
    </div>
  
    <Load v-else />
  </template>
  
  <script>
  import MovieList from './MovieList.vue'
  import Load from './Load.vue'
  import Pagination from './Pagination.vue'
  import {fetchData} from '@/api/fetchData'
  
  import {defineComponent, ref, watchEffect} from 'vue'
  
  
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
  
    setup(props){
  
      const loading = ref(true)
      const currentPage = ref(10)
      const pageCount = ref(0)
      const type = ref("tv")
      
  
      watchEffect(() => {
        fetchData(type.value, props.category)
          .then((result) => {
            if(result.total_pages > 500){
              pageCount.value = 500
            }
            else{
              pageCount.value = result.total_pages
            }
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
  
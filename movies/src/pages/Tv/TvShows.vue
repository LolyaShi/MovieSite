<template>

    <div v-if='!loading'>
      <TvList :page="currentPage" :category="category" :type="type" :title="title" />
      <Pagination :count="pageCount" :currentPage="currentPage" :changePage="changePage" />
    </div>
  
    <Load v-else />
  </template>
  
  <script>
  import TvList from './TvList.vue'
  import Load from '@/components/Load.vue'
  import Pagination from '@/components/Pagination'
  import {fetchData} from '@/api/fetchData'
  
  import {defineComponent, ref, watchEffect} from 'vue'
  
  
  export default defineComponent ({
    name: 'App',
    components: {
      Load,
      TvList,
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
      const currentPage = ref(1)
      const pageCount = ref(0)
      const type = ref("tv")
      const title = ref()

      const categories = [
        {
          name: 'popular',
          title: 'Most popular tv' 
        },
        {
          name: 'top_rated',
          title: 'Top rated tv shows' 
        },
        {
          name: 'on_the_air',
          title: 'On The Air' 
        },
        {
          name: 'airing_today',
          title: 'Airing Today' 
        },
      
      ]

      watchEffect(() => {
        const find = categories.filter((item) => {return item.name == props.category})
        title.value = find[0].title

      })
  
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
        type,
        title
      }
    }
  
  })
  </script>
  
  <style>

  </style>
  
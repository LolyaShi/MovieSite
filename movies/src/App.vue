<template>
  <div v-if='!loading'>
    <MovieList :page="currentPage" />
    <Pagination :count="pageCount" :currentPage="currentPage" :changePage="changePage" />
  </div>

  <Load v-else />
</template>

<script>
import MovieList from './components/MovieList.vue'
import Load from '@/components/Load.vue'
import Pagination from '@/components/Pagination.vue'
import {fetchData} from '@/api/fetchData'

import {defineComponent, ref, onMounted} from 'vue'


export default defineComponent ({
  name: 'App',
  components: {
    Load,
    MovieList,
    Pagination
  },

  setup(){

    const loading = ref(true)
    const currentPage = ref(10)
    const pageCount = ref(0)


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
      changePage
    }
  }

})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

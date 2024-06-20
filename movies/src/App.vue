<template>
  <Header />
  
  <MainLayout>
    <router-view />
  </MainLayout>
  
</template>

<script>
import Header from '@/components/Header.vue'
import MainLayout from '@/components/MainLayout.vue'

import {defineComponent} from 'vue'


export default defineComponent ({
  name: 'App',
  components: {
    Header,
    MainLayout
  },

  setup(){

    
    return{

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
  margin-top: 10px;
  background-color: rgb(21, 19, 19)
  
}
</style>

<template>
    <div class="container">
      <button :disabled="currentPage === 1" @click="changePage(currentPage - 1 )" >Previous</button>
      <button  @click="changePage(1)">1</button>
      <span>...</span>
      <button>{{ currentPage }}</button>
      <span>...</span>
      <button  @click="changePage(count)">{{ count}}</button>
      <button :disabled="currentPage === count"  @click="changePage(currentPage + 1 )">Next</button>
    </div>
    
  </template>
  
  <script>
  import {defineComponent} from 'vue'
  export default defineComponent( {
    name: 'Pagination',
    props:{
        count:{ 
            type: Number
        },
        currentPage: Number,
        changePage: Function
    },
     
    setup(){
        
 

      return{
   
      }
    }
  })
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    .container{
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
    }
    
  </style>
  
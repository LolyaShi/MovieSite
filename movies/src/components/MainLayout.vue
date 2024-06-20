<template>
    
    <div class="container">
        <slot></slot>
    </div>
  </template>
  
  <script>
  import {defineComponent} from 'vue'
  export default defineComponent( {
    name: 'MainLayout',
     
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
        min-height: 100vh;
        padding: 50px 0;
    }
  </style>
  
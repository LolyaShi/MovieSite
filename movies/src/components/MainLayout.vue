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
        padding: 0 10px;
        position: relative;
        background-color: rgb(21, 19, 19);
    }
  </style>
  
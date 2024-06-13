<template>
  <div class="container">
    <div class="loader"></div>
  </div>
  
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent( {
  name: 'Load',
   
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
  .loader {
    width: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 8px solid;
    border-color: #000 #0000;
    animation: l1 1s infinite;
    }
    @keyframes l1 {to{transform: rotate(.5turn)}}
</style>

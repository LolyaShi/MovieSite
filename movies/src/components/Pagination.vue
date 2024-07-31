<template>
    <div class="container">
      <button class="addition-btn" :disabled="currentPage === 1" @click="changePage(currentPage - 1 )" >Previous</button>
      <button v-if="showStart"  @click="changePage(1)">1</button>
      <span v-if="showStart">...</span>
      <button v-for="page in visiblePages" :key="page" @click="changePage(page)" :class="{active: currentPage === page}" >{{ page }}</button>
      <span v-if="showEnd">...</span>
      <button v-if="showEnd"  @click="changePage(count)">{{ count}}</button>
      <button class="addition-btn" :disabled="currentPage === count"  @click="changePage(currentPage + 1 )">Next</button>
    </div>
    
  </template>
  
  <script>
  import {defineComponent, computed} from 'vue'
  export default defineComponent( {
    name: 'Pagination',
    props:{
        count:{ 
            type: Number
        },
        currentPage: Number,
        changePage: Function
    },
     
    setup(props){
        
      const visiblePages = computed(() => {
        const pages = [];
        let startPage = Math.max(props.currentPage - 2, 1);
        let endPage = Math.min(startPage+4, props.count);
        if(endPage-startPage<4){
          startPage = endPage-4;
        }
        for(let i = startPage; i<=endPage; i++){
          pages.push(i)
        }

        return pages
      })

      const showStart = computed(() => {
        return visiblePages.value[0] > 1
      })

      const showEnd = computed( () => {
        return visiblePages.value[visiblePages.value.length - 1] < props.count
      })

      return{
        visiblePages,
        showStart,
        showEnd
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
      margin-top: 50px;
    }

    button{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: rgba(29, 27, 27, 0.797);
      margin: 5px;
      color: white;
      font-size: 16px;
      padding: 0 5px ;
      cursor: pointer;
    }
    .active {
      background-color: red
    }

    .addition-btn{
      width: auto;
      padding: 5px 10px;
      border-radius: 0;
    }
    span{
      display: inline-block;
      height: 40px;
      padding: 10px 5px 0;
    }
    
  </style>
  
import axios from "axios"

const headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2Q5YTQ1Zjg0MTVmYzc3ZjUyNjVjOWIyMTg0MmFjYiIsInN1YiI6IjY2MjEwYWMzOGE4OGIyMDE4NWNhNDFmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s3NcP5LhjYR_dkS1HeDU_2rmGABIlJnTX3CkJg7d3_c'
  }

const API_URL = "https://api.themoviedb.org/3/movie/popular?language=en-US&page"
const API_ID = (id) => {return `https://api.themoviedb.org/3/movie/${id}`}
//const API_URL_LIMIT = (page) => {return `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`}
const BASE_URL = (category, page) => {return `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${page}`}

async function getData(category, page){
    const response = await axios.get(BASE_URL(category, page), {headers});
    return response.data.results;
}

export async function fetchData(){
    const response = await axios.get(API_URL, {headers});
    return response.data.total_pages
}

export async function fetchPage(category, page){
    return await getData(category, page)
}

export async function fetchMovie(id){
    const response = await axios.get(API_ID(id), {headers})
    console.log(response.data)
    return response.data
}
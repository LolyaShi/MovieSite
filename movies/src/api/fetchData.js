import axios from "axios"

const headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2Q5YTQ1Zjg0MTVmYzc3ZjUyNjVjOWIyMTg0MmFjYiIsInN1YiI6IjY2MjEwYWMzOGE4OGIyMDE4NWNhNDFmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s3NcP5LhjYR_dkS1HeDU_2rmGABIlJnTX3CkJg7d3_c'
  }

const API_URL = "https://api.themoviedb.org/3/movie/popular?language=en-US&page"
const API_URL_LIMIT = (page) => {return `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`}
//const API_URL_PAGE = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=2'

export async function fetchData(){
    const response = await axios.get(API_URL, {headers});
    console.log(response.data)
    return response.data.total_pages
}

export async function fetchPage(page){
    const response = await axios.get(API_URL_LIMIT(page), {headers});
    return response.data.results;
}
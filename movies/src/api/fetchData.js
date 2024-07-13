import axios from "axios"

const headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2Q5YTQ1Zjg0MTVmYzc3ZjUyNjVjOWIyMTg0MmFjYiIsInN1YiI6IjY2MjEwYWMzOGE4OGIyMDE4NWNhNDFmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s3NcP5LhjYR_dkS1HeDU_2rmGABIlJnTX3CkJg7d3_c'
  }

const API_URL = (type, category) =>{return `https://api.themoviedb.org/3/${type}/${category}?language=en-US`}
const API_ID = (type, id) => {return `https://api.themoviedb.org/3/${type}/${id}`}
//const API_URL_LIMIT = (page) => {return `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`}
const BASE_URL = (type, category, page) => {return `https://api.themoviedb.org/3/${type}/${category}?language=en-US&page=${page}`}

async function getData(type, category, page){
    const response = await axios.get(BASE_URL(type, category, page), {headers});
    console.log(response.data.results)
    return response.data.results;
}

export async function fetchData(type, category){
    const response = await axios.get(API_URL(type, category), {headers});
    return response.data
}

export async function fetchPage(type, category, page){
    return await getData(type, category, page)
}

export async function fetchMovie(type, id){
    const response = await axios.get(API_ID(type, id), {headers})
    console.log(response.data)
    return response.data
}

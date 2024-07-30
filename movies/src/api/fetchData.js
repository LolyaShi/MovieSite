import axios from "axios"

const headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2Q5YTQ1Zjg0MTVmYzc3ZjUyNjVjOWIyMTg0MmFjYiIsInN1YiI6IjY2MjEwYWMzOGE4OGIyMDE4NWNhNDFmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s3NcP5LhjYR_dkS1HeDU_2rmGABIlJnTX3CkJg7d3_c'
  }

const API_URL = (type, category) =>{return `https://api.themoviedb.org/3/${type}/${category}?language=en-US`}
const API_ID = (type, id) => {return `https://api.themoviedb.org/3/${type}/${id}`}
//const API_URL_LIMIT = (page) => {return `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`}
const BASE_URL = (type, category, page) => {return `https://api.themoviedb.org/3/${type}/${category}?language=en-US&page=${page}`}
const SEARCH_URL = (text) => {return `https://api.themoviedb.org/3/search/multi?query=${text}`}
const SIMILAR_URL = (category, id) => {return `https://api.themoviedb.org/3/${category}/${id}/similar`}
const REVIEW_URL = (category, id) => {return `https://api.themoviedb.org/3/${category}/${id}/reviews`}
const GENRE_URL = (category, id) => {return `https://api.themoviedb.org/3/discover/${category}?language=en-US&page=1&sort_by=popularity.desc&with_genres=${id}`}

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

export async function fetchSearchResult(text){
    const response = await axios.get(SEARCH_URL(text), {headers})
    return response.data
}

export async function fetchSimilar(category, id){
    const response = await axios.get(SIMILAR_URL(category, id), {headers})
    return response.data.results
}

export async function fetchReviews(category, id){
    const response = await axios.get(REVIEW_URL(category, id), {headers})
    console.log(response.data.results)
    return response.data.results
}

export async function fetchGenre(category, id){
    const response = await axios.get(GENRE_URL(category, id), {headers})
    const res = await axios.get(`https://api.themoviedb.org/3/genre/${id}`, {headers})
    console.log(res)
    return response.data.results
}


export const fetchGenreName = async(id) => {
        const result = await axios.get(`https://api.themoviedb.org/3/genre/${id}`, {headers})
        return result.data.name
}

export const fetchGenreList = async() => {
    const result = await axios.get(`https://api.themoviedb.org/3/genre/list`, {headers})
    console.log(result)
    return result.data.genres
}
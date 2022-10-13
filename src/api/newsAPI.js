import axios from "axios";

const newsApi = axios.create({
    // pls add the base url here
    baseURL: 'https://loctech-blog-app.herokuapp.com'
}) 

export const getNews = async()=>{
   const res = await newsApi.get('/savedpost')
   return res.data
}

export const postNews = async (post) => {
   return await newsApi.post('/post', post)
}

export const updateNews = async (post) => {
    return await newsApi.patch(`/post/${post.id}`, post)
}

export const deleteNews = async (id) => {
    return await newsApi.delete(`/post/${id}`, id)
}

export default newsApi
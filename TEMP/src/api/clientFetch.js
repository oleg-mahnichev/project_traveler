import axios from 'axios'

export const clientFetch = axios.create({
    baseURL: 'hhtps://back-for-js.onrender.com'
})


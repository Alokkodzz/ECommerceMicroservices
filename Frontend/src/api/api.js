import axios from 'axios'

const productApi = axios.create({
  baseURL: 'http://localhost:5001/api'
})

const orderApi = axios.create({
  baseURL: 'http://localhost:5003/api'
})

export { productApi, orderApi }

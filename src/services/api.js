import axios from 'axios';

const api = axios.create({
  baseURL: 'https://git.heroku.com/apiemailteste.git',
})

export default api;
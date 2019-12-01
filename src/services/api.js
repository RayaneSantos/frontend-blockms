import axios from 'axios';

const baseURL = 'http://localhost:3001'

const api = axios.create({
  baseURL: process.env.BASE_URL || baseURL,
});

export default api;
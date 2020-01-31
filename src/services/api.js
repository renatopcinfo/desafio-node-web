import axios from 'axios';

const api = axios.create({
  baseURL: 'http://165.22.38.31:4000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;

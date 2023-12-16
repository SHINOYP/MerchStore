import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.example.com', // Your API base URL
  timeout: 5000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;

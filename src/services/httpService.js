import axios from 'axios';

const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API_URL
});

http.interceptors.response.use(response => {
  if (response.status === 200 || response.status === 201) {
    return response.data;
  }

  return response;
});

export default http;

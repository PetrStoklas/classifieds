import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://classifieds.localhost:8080/api/categories',
    timeout: 3000,
    // mode: 'no-cors',
    headers: {'X-Custom-Header': 'foobar'}
  });

  export default instance;
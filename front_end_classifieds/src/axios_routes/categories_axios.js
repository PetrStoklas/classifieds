import axios from 'axios';


const instance = axios.create({
    
    baseURL: 'http://127.0.0.1:8000/api/categories',
    timeout: 6000,
    // mode: 'no-cors',
    headers: {'X-Custom-Header': 'foobar'}
  });

  export default instance;
import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://classifieds.localhost:8080/api/categories',
<<<<<<< HEAD
    timeout: 3000,
=======
    // baseURL: 'http://127.0.0.1:8000/api/categories',
    timeout: 6000,
>>>>>>> development
    // mode: 'no-cors',
    headers: {'X-Custom-Header': 'foobar'}
  });

  export default instance;
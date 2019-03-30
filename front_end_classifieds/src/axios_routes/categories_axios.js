import axios from 'axios';


const categories = axios.create({
    
    baseURL: 'http://www.api.testweb.life/api/categories',
    timeout: 6000,
    // mode: 'no-cors',
    headers: {'X-Custom-Header': 'foobar'}
  });

  export default categories;
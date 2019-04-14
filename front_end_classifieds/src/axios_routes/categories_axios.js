import axios from 'axios';

const proxyurl = "https://cors-anywhere.herokuapp.com/"; 

const categories = axios.create({
    
  baseURL: proxyurl + 'http://www.api.testweb.life/api/categories',
  // baseURL: 'http://127.0.0.1:8000/api/categories',
    timeout: 6000,
    // mode: 'no-cors',
    headers: {'X-Custom-Header': 'foobar'}
  });

  export default categories;
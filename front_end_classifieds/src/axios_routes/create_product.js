import axios from 'axios';

const proxyurl = "https://cors-anywhere.herokuapp.com/"; 

const createProduct = axios.create({
    baseURL: proxyurl + 'http://www.api.testweb.life/api',
    // baseURL: 'http://127.0.0.1:8000/api',
    timeout: 5000,
    headers: {
        'X-Custom-Header': 'foobar'
    }
});

export default createProduct;
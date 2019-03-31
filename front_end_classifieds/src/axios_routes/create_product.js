import axios from 'axios';

const proxyurl = "https://cors-anywhere.herokuapp.com/"; 

const createProduct = axios.create({
    baseURL: proxyurl + 'http://www.api.testweb.life/api',
    timeout: 5000,
    headers: {
        'X-Custom-Header': 'foobar'
    }
});

export default createProduct;
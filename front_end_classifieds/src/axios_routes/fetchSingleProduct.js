import axios from 'axios';

const proxyurl = "https://cors-anywhere.herokuapp.com/"; 

const fetchSingleProduct = axios.create({
    baseURL: proxyurl + 'http://www.api.testweb.life/api/product/single',
    // baseURL: 'http://127.0.0.1:8000/api/product/single',
    timeout: 5000,
    headers: {
        'X-Custom-Header': 'foobar'
    }
});

export default fetchSingleProduct;
import axios from 'axios';

const proxyurl = "https://cors-anywhere.herokuapp.com/"; 

const fetchSellerProducts = axios.create({
    baseURL: proxyurl +  'http://www.api.testweb.life/api/products/byseller/',
    timeout: 5000,
    headers: {
        'X-Custom-Header': 'foobar'
    }
});

export default fetchSellerProducts;
import axios from 'axios';


const fetchSellerProducts = axios.create({
    baseURL: 'http://www.api.testweb.life/api/products/byseller/',
    timeout: 5000,
    headers: {
        'X-Custom-Header': 'foobar'
    }
});

export default fetchSellerProducts;
import axios from 'axios';


const fetchProducts = axios.create({
    baseURL: 'http://www.api.testweb.life/api/products',
    timeout: 5000,
    headers: {
        'X-Custom-Header': 'foobar'
    }
});

export default fetchProducts;
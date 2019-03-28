import axios from 'axios';


const fetchProducts = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/products',
    timeout: 5000,
    headers: {
        'X-Custom-Header': 'foobar'
    }
});

export default fetchProducts;
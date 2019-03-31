import axios from 'axios';
const proxyurl = "https://cors-anywhere.herokuapp.com/"; 

    baseURL: proxyurl + 'http://www.api.testweb.life/api/products',
const fetchProducts = axios.create({
    timeout: 5000,
    headers: {
        'X-Custom-Header': 'foobar'
    }
});
export default fetchProducts;
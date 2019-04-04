import axios from 'axios';
const proxyurl = "https://cors-anywhere.herokuapp.com/"; 

const fetchProducts = axios.create({
    baseURL: proxyurl + 'http://www.api.testweb.life/api/products',
    timeout: 5000,
    headers: {
        'X-Custom-Header': 'foobar'
    }
});
export default fetchProducts;
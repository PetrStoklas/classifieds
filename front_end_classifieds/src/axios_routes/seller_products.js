import axios from 'axios';
const proxyurl = "https://cors-anywhere.herokuapp.com/"; 
const fetchSellerProducts = axios.create({
    baseURL: proxyurl +  'http://www.api.testweb.life/api/products/byseller/',
    // baseURL: 'http://127.0.0.1:8000/api/products/byseller/', // if internet not available 
    timeout: 5000,
    headers: {
        'X-Custom-Header': 'foobar'
    }
});
export default fetchSellerProducts;
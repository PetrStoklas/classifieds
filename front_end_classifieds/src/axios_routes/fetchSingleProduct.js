import axios from 'axios';

const proxyurl = "https://cors-anywhere.herokuapp.com/"; 

const fetchSingleProduct = axios.create({
    baseURL: proxyurl + 'http://www.api.testweb.life/api/product/single',
    timeout: 5000,
    headers: {
        'X-Custom-Header': 'foobar'
    }
});

export default fetchSingleProduct;
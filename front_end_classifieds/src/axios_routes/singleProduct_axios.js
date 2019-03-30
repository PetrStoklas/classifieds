import axios from 'axios';


const fetchSingleProduct = axios.create({
    baseURL: 'http://www.api.testweb.life/api/product/single',
    timeout: 5000,
    headers: {
        'X-Custom-Header': 'foobar'
    }
});

export default fetchSingleProduct;
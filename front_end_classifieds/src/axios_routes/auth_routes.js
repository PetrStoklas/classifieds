import axios from 'axios';

const proxyurl = "https://cors-anywhere.herokuapp.com/"; 

const fetchLogin = axios.create({
    baseURL: proxyurl + 'http://www.api.testweb.life/api'
    // baseURL: proxyurl + 'http://127.0.0.1:8000/api'
    // baseURL: 'http://127.0.0.1:8000/api'
});

export default fetchLogin;
import axios from 'axios';

const fetchLogin = axios.create({
    baseURL: 'http://www.api.testweb.life/api'
});

export default fetchLogin;
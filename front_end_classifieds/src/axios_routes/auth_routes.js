import axios from 'axios';

const proxyurl = "https://cors-anywhere.herokuapp.com/";

const fetchLogin = axios.create({

  baseURL: proxyurl + 'http://www.api.testweb.life/api'
});

export default fetchLogin;
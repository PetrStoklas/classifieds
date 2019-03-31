const fetchLogin = axios.create({
import axios from 'axios';
const proxyurl = "https://cors-anywhere.herokuapp.com/"; 
    baseURL: proxyurl + 'http://www.api.testweb.life/api'
});
export default fetchLogin;
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://62.72.0.65:8001/api/v1'
});

export default instance;




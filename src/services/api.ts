import axios from 'axios';

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/pesdesigner/api-plantmanager/' //http://192.168.0.102:19002
});

export default api;


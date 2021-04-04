import axios from 'axios';

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        Authorization: 'Auth Token'
    }
});

api.interceptors.request.use(request => {
    console.info(request);
    return request;
}, error => {
    console.error(error);
    return Promise.reject(error);
});

api.interceptors.response.use(response => {
    console.info(response);
    return response;
}, error => {
    console.error(error);
    return Promise.reject(error);
});

export default api;
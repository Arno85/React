import axios from 'axios';

const api = axios.create({
    baseURL: 'https://learning-react-arno85-default-rtdb.firebaseio.com/'
});

export default api;
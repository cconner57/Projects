import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-63f3f.firebaseio.com/'
});

export default instance;
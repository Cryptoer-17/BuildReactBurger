import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-14e14.firebaseio.com/'
});

export default instance;
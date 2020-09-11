import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-react-burger-ed7de.firebaseio.com/',
});

export default instance;

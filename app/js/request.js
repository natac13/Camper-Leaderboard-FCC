import axios from 'axios';

export default function request() {
    return axios.get('http://fcctop100.herokuapp.com/api/fccusers/top/alltime')
        .then(data => data.data);
}
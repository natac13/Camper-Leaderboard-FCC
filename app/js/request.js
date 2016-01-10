import axios from 'axios';

export default function request(period) {
    return axios.get(`http://fcctop100.herokuapp.com/api/fccusers/top/${period}`)
        .then(data => data.data);
}
import axios from 'axios';

const x = axios.get('http://fcctop100.herokuapp.com/api/fccusers/top/alltime')
    .then(console.log.bind(console));


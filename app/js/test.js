import fetch from 'isomorphic-fetch';

const x = fetch('http://fcctop100.herokuapp.com/api/fccusers/top/alltime')
    .then((data) => {
        return data.json();
    })
    .then(console.log.bind(console));


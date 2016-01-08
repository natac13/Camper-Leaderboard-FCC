import axios from 'axios';

function request() {
    return axios.get('http://fcctop100.herokuapp.com/api/fccusers/top/alltime')
        ;
}

async function main() {
    const data = await request();
    return data;
}


const x = main();
x.then(data => {
    console.log(data.data);
})


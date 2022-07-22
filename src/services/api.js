import axios from 'axios';

const API = 'https://api.punkapi.com/v2/beers/';

export function getAllBeers() {
    return axios.get(API);
}

export function getBeer(id) {
    return axios.get(API + id);
}

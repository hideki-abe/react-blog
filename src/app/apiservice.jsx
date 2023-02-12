import axios from 'axios';

const httpClient = axios.create({
    baseURL: 'http://localhost:8090'
})

export default class ApiService {

    constructor(apiurl) {
        this.apiurl = apiurl;
    }

    get(url) {
        const requestUrl = `${this.apiurl}${url}`;
        return httpClient.get(requestUrl);
    }

    post(url, objeto) {
        const requestUrl = `${this.apiurl}${url}`;
        console.log(objeto);
        return httpClient.post(requestUrl, objeto);
    }
}
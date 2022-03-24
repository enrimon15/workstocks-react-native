import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:9100/workstocks/rest/v1'
});

export default class HttpApi {
    static popularJobs = () => axiosInstance.get('/job-offers/popular?limit=5');
    static recentJobs = () => axiosInstance.get('/job-offers/search?page=1&limit=10');
}

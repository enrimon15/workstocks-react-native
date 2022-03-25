import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:9100/workstocks/rest/v1'
});

const jobBaseHref = '/job-offers';

export default class HttpApi {
    static popularJobs = () => axiosInstance.get(`${jobBaseHref}/popular?limit=5`);
    static recentJobs = () => axiosInstance.get(`${jobBaseHref}/search?page=1&limit=10`);
    static jobById = (jobId) => axiosInstance.get(`${jobBaseHref}/${jobId}`);
    static searchJobs = (city) => axiosInstance.get(`${jobBaseHref}/search?address=${city}&page=1&limit=10`);
}

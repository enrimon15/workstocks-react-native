import axios from 'axios';
import createStore from "../store";
import {ObjectUtils} from "./ObjectUtils";
const {store} = createStore();

const axiosInstance = axios.create({
    baseURL: 'http://localhost:9100/workstocks/rest/v1'
});

axiosInstance.interceptors.request.use(async (req) => {
    const userLogged = store.getState().user.user;
    if (!ObjectUtils.isEmpty(userLogged) && userLogged.token) {
        req.headers.Authorization = `Bearer ${userLogged.token}`;
    }

    return req;
});

const jobBaseHref = '/job-offers';
const authBaseHref = '/auth';

export default class HttpApi {
    static popularJobs = () => axiosInstance.get(`${jobBaseHref}/popular?limit=5`);
    static recentJobs = () => axiosInstance.get(`${jobBaseHref}/search?page=1&limit=10`);
    static jobById = (jobId) => axiosInstance.get(`${jobBaseHref}/${jobId}`);
    static searchJobs = (city) => axiosInstance.get(`${jobBaseHref}/search?address=${city}&page=1&limit=10`);

    static register = (registerRequestBody) => axiosInstance.post(`${authBaseHref}/register`, registerRequestBody);
    static login = (loginRequestBody) => axiosInstance.post(`${authBaseHref}/login`, loginRequestBody);
}

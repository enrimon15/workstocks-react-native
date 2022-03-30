import axios from 'axios';
import * as ObjectUtils from "./ObjectUtils";
import {HERE_API_KEY} from "react-native-dotenv";
import {getStore} from "../store/CreateStore";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:9100/workstocks/rest/v1'
});

axiosInstance.interceptors.request.use((req) => {
    const store = getStore();
    const userLogged = store.getState().user.user;
    if (!ObjectUtils.isEmpty(userLogged) && userLogged.token) {
        req.headers.Authorization = `Bearer ${userLogged.token}`;
    }
    return req;
})

const userId = () => {
    const store = getStore();
    return store.getState().user.user.id
}

const hereReverseBaseUrl = 'https://revgeocode.search.hereapi.com/v1';
const hereBaseUrl = 'https://geocode.search.hereapi.com/v1';
const jobBaseHref = '/job-offers';
const authBaseHref = '/auth';
const applicantsBaseHref = '/applicants';

export default class HttpApi {
    static popularJobs = () => axiosInstance.get(`${jobBaseHref}/popular?limit=5`);
    static recentJobs = () => axiosInstance.get(`${jobBaseHref}/search?page=1&limit=10`);
    static jobById = (jobId) => axiosInstance.get(`${jobBaseHref}/${jobId}`);
    static searchJobs = (city, page) => axiosInstance.get(`${jobBaseHref}/search?address=${city}&page=${page}&limit=10`);

    static favoriteJobs = () => axiosInstance.get(`${applicantsBaseHref}/${userId()}/favourites?page=1&limit=10`);
    static checkFavorite = (jobId) => axiosInstance.get(`${applicantsBaseHref}/${userId()}/favourites/${jobId}`);
    static addFavorite = (jobId) => axiosInstance.post(`${applicantsBaseHref}/${userId()}/favourites/${jobId}`);
    static deleteFavorite = (jobId) => axiosInstance.delete(`${applicantsBaseHref}/${userId()}/favourites/${jobId}`);

    static applications = () => axiosInstance.get(`${applicantsBaseHref}/${userId()}/applications?page=1&limit=10`);
    static checkApplication = (jobId) => axiosInstance.get(`${applicantsBaseHref}/${userId()}/applications/${jobId}`);
    static addApplication = (jobId) => axiosInstance.post(`${applicantsBaseHref}/${userId()}/applications/${jobId}`);
    static deleteApplication = (jobId) => axiosInstance.delete(`${applicantsBaseHref}/${userId()}/applications/${jobId}`);

    static updateProfile = (userRequest) => axiosInstance.patch(`applicants/${userId()}`, userRequest);
    static register = (registerRequestBody) => axiosInstance.post(`${authBaseHref}/register`, registerRequestBody);
    static login = (loginRequestBody) => axiosInstance.post(`${authBaseHref}/login`, loginRequestBody);

    static getCityByCoords = (lat, lon) => axios.get(
        `${hereReverseBaseUrl}/revgeocode?in=circle:${lat},${lon};r=7000&apiKey=${HERE_API_KEY}&limit=1`
    );

    static getCoordsByCity = (city) => axios.get(
        `${hereBaseUrl}/geocode?qq=city=${city}&apiKey=${HERE_API_KEY}&limit=1`
    );
}

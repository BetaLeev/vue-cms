import axios from 'axios';
import Nprogress from 'nprogress'
import { getToken } from "utils/auth";

const service = axios.create({
    timeout: 5000
})

service.interceptors.request.use(
    config => {
        Nprogress.start();
        if (getToken()) {
            config.headers['X-Token'] = getToken();
        }
        return config
    },

    error => {
        console.log(error) // for debug
        Nprogress.done();
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        Nprogress.done();
        const res = response.data
            // if (res.code !== 20000) {

        // }
        return res
    },
    error => {
        console.log(error);
        Nprogress.done();
    }
)
export default service;
import request from './request'

import Cookies from 'js-cookie'
const TokenKey = 'User-Token'

export function getToken() {
    return Cookies.get(TokenKey)
        // return 'abc'
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    return Cookies.remove(TokenKey);
}

export function authCode() {
    return request({
        url: '/code',
        method: 'get',
    })
}

export function sendEmailCode(data) {
    return request({
        url: '/email',
        method: 'post',
        data
    })
}
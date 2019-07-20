import request from '../utils/request'
export function login(data) {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}

export function fetchUsers() {
    return request({
        url: '/get-users',
        method: 'get'
    })
}

export function addUser(data) {
    return request({
        url: '/add-user',
        method: 'post',
        data
    })
}

export function dropUser(data) {
    return request({
        url: '/drop-user',
        method: "post",
        data
    })
}

export function updateUser(data) {
    return request({
        url: '/update-user',
        method: 'post',
        data
    })
}

export function uploadAvator_SM(data) {
    return request({
        url: 'https://sm.ms/api/upload',
        method: 'post',
        data

    })
}

export function uploadAvator(data) {
    return request({
        url: '/upload-avator',
        method: 'post',
        data,

    })
}

export function fetchUser_approved(query) {
    return request({
        url: '/users',
        method: 'get',
        params: query
    })
}

export function fetchUserByOne(email) {
    return request({
        url: '/user',
        method: 'get',
        params: { email }
    })
}

export function register(data) {
    return request({
        url: '/register',
        method: 'post',
        data
    })
}

export function getInfo(token) {
    return request({
        url: '/profile',
        method: 'get',
        params: { token }
    })
}


export function updateUserInfo(data) {
    return request({
        url: '/update',
        method: 'post',
        data
    })
}

export function logout() {
    return request({
        url: 'user/logout',
        method: 'post'
    })
}
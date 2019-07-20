import request from '../utils/request'

export function fetchAllBanner() {
    return request({
        url: '/all-banner',
        method: 'get',
    })
}

export function createNewBanner(data) {
    return request({
        url: '/add-banner',
        method: "post",
        data
    })
}

export function deleteBanner(data) {
    return request({
        url: '/delete-banner',
        method: 'delete',
        data
    })
}

export function updateBanner(data) {
    return request({
        url: '/update-banner',
        method: 'put',
        data
    })
}
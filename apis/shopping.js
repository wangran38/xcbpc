import request from '../uitls/request.js'

//获取一级城市列表
export const citylist = (data) => {
    return request('/api/citylist', 'POST', data)
}


// 获取子类城市列表
export const citytree = (data) => {
    return request('/api/citytree', 'POST', data)
}



// 获取菜市场列表
export const marketlist = (data) => {
    return request('/api/marketlist', 'POST', data)
}


// 获取摊主列表
export const shopList = (data) => {
    return request('api/shop/list', 'POST', data)
}


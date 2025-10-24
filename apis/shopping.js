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
    return request('/api/shop/list', 'POST', data)
}


// 获取菜品列表
export const getShopGoods = (data) => {
    return request('/api/market/commodity/list', 'POST', data)
}


// 获取评论列表
export const getShopComments = (data) => {
    return request('api/shop/list', 'POST', data)
}

// 代理入驻申请
export const agentApply = (data) => {
    return request('/api/agentuser/add', 'POST', data)
}
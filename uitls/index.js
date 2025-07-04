import axios from "axios";
import {checkLogin} from '../apis/user'
import {getToken,removeToken} from '../uitls/storage'
const instance = axios.create({
    baseURL: 'http://39.106.231.133:5555',
    // baseURL: 'http://localhost:5555',
    timeout: 5000}
)

// 路由白名单
const whiteUrlList = ['/checkLogin','/login','/register','/uploadFile']
instance.interceptors.request.use(async (config) => {
    if (!whiteUrlList.includes(config.url)) { // 避免死循环
        let { data } = await checkLogin({})
        // console.log(data)
        if (data.code != 200) {
            // 清空token，并跳转至登录页
            removeToken()
            location.href = '../users/login'
        }
    }
    config.headers.Authorization = getToken() ? getToken() :''
    return config
})


instance.interceptors.response.use((response) => {
    return response
})

const request = (url, method, data) => {
    return new Promise((res, rej) => {
        try {
            res(instance.request({url,method,data}))
        } catch {
            rej('请求异常')
        }
    })
}

export default request
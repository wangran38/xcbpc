export const addToken = (token) => {
    localStorage.setItem('token',token)
}
export const removeToken = () => {
    localStorage.removeItem('token')
}

export const getToken = () => {
    return localStorage.getItem('token')
}

export const addUserInfo = (token) => {
    localStorage.setItem('userinfo',token)
}
export const removeUserInfo = () => {
    localStorage.removeItem('userinfo')
}

export const getUserInfo = () => {
    return JSON.parse(localStorage.getItem('userinfo'))
}


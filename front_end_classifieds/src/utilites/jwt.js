const getJwt = () => {
    return localStorage.getItem('login-jwt')
}

export default getJwt;
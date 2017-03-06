export default ({ajax, apiUrl}) => {

    return {
        tryToLogin: payload => {
            const {access_token} = payload
            const url = `${apiUrl}/login/${access_token}`

            return ajax.get(url)
        }
    }
}
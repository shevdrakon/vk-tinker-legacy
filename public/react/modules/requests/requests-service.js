import qs from 'qs'

export default ({ajax, apiUrl}) => {
    return {
        get: payload => {
            const {top, skip} = payload
            const args = {
                top: top,
                skip: skip
            }
            return ajax.get(`${apiUrl}/requests?${qs.stringify(args)}`)
        },
    }
}
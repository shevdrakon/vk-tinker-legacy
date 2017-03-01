export default ({ajax, apiUrl}) => {

    const url = (hubId) => `${apiUrl}/hubs/${hubId}/access`

    const T = {
        getHubPermissions: ({hubId}) => {
            return ajax.get(`${url(hubId)}`)
        }
    }

    return T
}
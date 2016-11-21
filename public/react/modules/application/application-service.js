export default ({ajax, baseUrl}) => {

    const url = (hubId) => `${baseUrl}/hubs/${hubId}/access`

    const T = {
        getHubPermissions: ({hubId}) => {
            return ajax.get(`${url(hubId)}`)
        }
    }

    return T
}
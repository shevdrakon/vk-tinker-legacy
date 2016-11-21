export default ({ajax, baseUrl}) => {
    const url = (hubId) =>
        `${baseUrl}/hubs/${hubId}/access`

    return {
        getHubPermissions: ({hubId}) => {
            return ajax.get(`${url(hubId)}`)
        },
    }
}
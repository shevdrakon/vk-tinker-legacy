import qs from 'qs'

export default ({ajax, apiUrl}) => {
    return {
        get: (payload) => {
            const {top, skip, albumId, soldOutOnly} = payload
            const args = {
                top: top,
                skip: skip,
                albumId: albumId,
                soldOutOnly
            }

            return ajax.get(`${apiUrl}/photos?${qs.stringify(args)}`)
        },

        getAlbums: () => {
            const args = {
            }

            return ajax.get(`${apiUrl}/albums?${qs.stringify(args)}`)
        },

        // tmp here!!!
        getUsersGroups: ({userIds}) => {
            const args = {
                userIds
            }

            return ajax.get(`${apiUrl}/users/groups?${qs.stringify(args)}`)
        }
    }
}
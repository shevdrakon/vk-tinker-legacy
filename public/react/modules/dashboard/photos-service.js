import qs from 'qs'

export default ({ajax, apiUrl}) => {
    return {
        get: (payload) => {
            const {top, skip, albumId} = payload
            const args = {
                top: top,
                skip: skip,
                albumId: albumId
            }

            return ajax.get(`${apiUrl}/photos?${qs.stringify(args)}`)
        },

        getAlbums: () => {
            const args = {
            }

            return ajax.get(`${apiUrl}/albums?${qs.stringify(args)}`)
        },
    }
}
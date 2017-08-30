import qs from 'qs'

export default ({ajax, apiUrl}) => {
    return {
        getUsersGroups: ({userIds}) => {
            const args = {
                userIds
            }

            return ajax.get(`${apiUrl}/users/groups?${qs.stringify(args)}`)
        }
    }
}
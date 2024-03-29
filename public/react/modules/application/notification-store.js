import SmartStore from '../../base/smart-store'

export default class NotificationStore extends SmartStore {
    success({message}) {
        this.messageProvider.success(message)
    }

    error({error, message}) {
        if (error && error.response) {
            const {status} = error.response
            if (status === 500) {
                this.messageProvider.error(message || 'Oops, something went wrong.')
            }
            else {
                if (status === 401) {
                    error.response.json().then((err) => {
                        this.messageProvider.error(err.message || message || 'Authorization failed.')
                    })
                    //this.store.application.logout()
                } else if (status === 400) {
                    this.messageProvider.error(message || 'Oops, something went wrong.')
                } else if (status === 404) {
                    this.messageProvider.error('The page you asked for does not exist.')
                } else {
                    this.messageProvider.error(message)
                }
            }
        }
        else if (error && error) {
            console.error(error) // eslint-disable-line no-console
        }
    }
}

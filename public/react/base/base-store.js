import {action, extendObservable} from 'mobx'

export default class BaseStore {
    constructor(initialState = {}, {api, getStore, messageProvider, errorHandler, router, window, localStorage, helpProvider}) {
        this.api = api
        this.getStore = getStore
        this.messageProvider = messageProvider
        this.errorHandler = errorHandler
        this.window = window
        this.localStorage = localStorage
        this.helpProvider = helpProvider

        action(() => {
            extendObservable(this, this.defaults)
            extendObservable(this, initialState)
        })()
    }

    get defaults() {
        return {}
    }

    get applicationStore() {
        return this.getStore().application
    }

    @action showSuccess({message}) {
        this.messageProvider.success(message)
    }

    @action showError({error, message}) {
        if (error && error.response) {
            const handled = this.errorHandler.handleError(error.response.status, message)

            if (!handled) {
                if (this.router.lastGoodRoute) { //If we have routed successfully at least once, navigate to the last page.
                    this.replaceUrl(this.router.lastGoodRoute, {trigger: true, replace: true});
                } else { //Navigate to hub list page.
                    this.replaceUrl('', {trigger: true, replace: true});
                }
            }
        }
        else if (error && error) {
            console.error(error) // eslint-disable-line no-console
        }
    }

    @action pushUrl(url) {
        this.router.navigate(url, {trigger: true, replace: false})
    }

    @action replaceUrl(url) {
        this.router.navigate(url, {trigger: true, replace: true})
    }

    @action openWindow(url) {
        this.window.open(url, 'SmartHubHelp', 'toolbar=no,menubar=no,location=no,status=no,resizable=no');
    }

    @action checkAccess({hubId}) {
        const service = this.api.application
        return service
            .getHubPermissions({hubId})
            .then(action(hubPermissions => {
                this.applicationStore.updateCurrentHubId({hubId})
                this.applicationStore.updateHubPermission({hubId, hubPermissions})

                return hubPermissions
            }), action((error) => {
                this.showError({error, message: 'Failed to fetch hub permissions.'})

                throw error
            }))
    }

    @action globalHelp(helpItemId) {
        this.applicationStore.globalHelp(helpItemId)
    }
}
import {action, extendObservable} from 'mobx'
import BaseStore from '../../base/base-store'

export default class ApplicationStore extends BaseStore {
    constructor(...args) {
        super(...args)

        action(() => {
            extendObservable(this.user.permissions, {hubPermissions: {}})
            extendObservable(this, {hub: {name: ''}})
        })()
    }

    @action update(nextState) {
        Object.assign(this, nextState)
    }

    @action updateHubPermission({hubPermissions}) {
        this.user.permissions.hubPermissions = hubPermissions
    }

    @action updateCurrentHubId({hubId}) {
        extendObservable(this, {currentHubId: hubId})
    }

    @action updateCurrentHub({name}) {
        extendObservable(this.hub, {name})
    }

    @action globalHelp(helpItemId) {
        extendObservable(this, {helpItemId})
    }

    @action showGlobalHelp() {
        if(this.helpItemId)
            this.helpProvider.showHelp(this.helpItemId);
    }

}
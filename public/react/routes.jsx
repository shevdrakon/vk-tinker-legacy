const {toJS} = require('mobx')

const Routes = (app) => {
    /* eslint-disable no-undef */
    if (process.env.NODE_ENV !== 'production') {
        if (module.hot) {
            module.hot.dispose((data) => {
                data.state = toJS(app.store)
            })
        }
    }
    /* eslint-enable no-undef */


    const ensureClient = (routeCallback) => (nextState, cb) => {
        typeof window === 'undefined' ? cb() : routeCallback(nextState, cb)
    }

    const loadComponent = ({rootComponent, stores = {}, services = {}}, nextState, cb) => {
        /* eslint-disable no-undef */
        if (process.env.NODE_ENV !== 'production') {
            if (module.hot && module.hot.data) {
                const state = module.hot.data && module.hot.data.state
                delete module.hot.data.state

                app.extendStores(stores, state)
                app.extendServices(services)
            } else {
                app.extendStores(stores)
                app.extendServices(services)

                rootComponent.load(nextState.params, app.store)
            }
        }
        else {
            app.extendStores(stores)
            app.extendServices(services)

            rootComponent.load(nextState.params, app.store)
        }
        /* eslint-enable no-undef */

        cb(null, rootComponent)
    }

    return {
        path: '/',
        indexRoute: {
            // getComponent: ensureClient((nextState, cb) => {
                // require.ensure(['./modules/hubs/index'], require => {
                //     const {Root, Store, Service} = require('./modules/hubs/index').default
                //     loadComponent({
                //         rootComponent: Root,
                //         stores: {hubs: Store},
                //         services: {hubs: Service}
                //     }, nextState, cb)
                // })
            // })
        },
        childRoutes: [{
            path: 'login',
            getComponent: ensureClient((nextState, cb) => {
                require.ensure(['./modules/login/index'], require => {
                    const {Root, Store} = require('./modules/login/index').default
                    loadComponent({
                        rootComponent: Root,
                        stores: {login: Store}
                        // services: {loginForm: Service}
                    }, nextState, cb)
                })
            })
        } //, {
        //     path: ':hubId/overview',
        //     getComponent: ensureClient((nextState, cb) => {
        //         require.ensure(['./modules/hub-overview/index'], require => {
        //             const {Root, Store, Service, AddSurveysService} = require('./modules/hub-overview/index').default
        //
        //             loadComponent({
        //                 rootComponent: Root,
        //                 stores: {hubOverview: Store},
        //                 services: {
        //                     hubOverview: Service,
        //                     addSurveys: AddSurveysService
        //                 }
        //             }, nextState, cb)
        //         })
        //     })
        // }, {
        //     path: ':hubId/settings',
        //     getComponent: ensureClient((nextState, cb) => {
        //         require.ensure(['./modules/hub-settings/index'], require => {
        //             const {Root, Store, Service} = require('./modules/hub-settings/index').default
        //
        //             loadComponent({
        //                 rootComponent: Root,
        //                 stores: {hubSettings: Store},
        //                 services: {hubSettings: Service,}
        //             }, nextState, cb)
        //         })
        //     })
        // }, {
        //     path: ':hubId/permissions',
        //     getComponent: ensureClient((nextState, cb) => {
        //         require.ensure(['./modules/hub-permissions/index'], require => {
        //             const {Root, Store, Service} = require('./modules/hub-permissions/index').default
        //
        //             loadComponent({
        //                 rootComponent: Root,
        //                 stores: {hubPermissions: Store},
        //                 services: {hubPermissions: Service,}
        //             }, nextState, cb)
        //         })
        //     })
        // }, {
        //     path: ':hubId/storage',
        //     getComponent: ensureClient((nextState, cb) => {
        //         require.ensure(['./modules/hub-storage/index'], require => {
        //             const {Root, Store, Service} = require('./modules/hub-storage/index').default
        //
        //             loadComponent({
        //                 rootComponent: Root,
        //                 stores: {hubStorage: Store},
        //                 services: {hubStorage: Service,}
        //             }, nextState, cb)
        //         })
        //     })
        // }, {
        //     path: ':hubId/removed-sources',
        //     getComponent: ensureClient((nextState, cb) => {
        //         require.ensure(['./modules/deleted-sources/index'], require => {
        //             const {Root, Store, Service} = require('./modules/deleted-sources/index').default
        //
        //             loadComponent({
        //                 rootComponent: Root,
        //                 stores: {deletedSources: Store},
        //                 services: {deletedSources: Service,}
        //             }, nextState, cb)
        //         })
        //     })
        // }, {
        //     path: ':hubId/sources',
        //     getComponent: ensureClient((nextState, cb) => {
        //         require.ensure(['./modules/sources/index'], require => {
        //             const {Root, Store, Service, AddSurveysService, DeleteService} = require('./modules/sources/index').default
        //
        //             loadComponent({
        //                 rootComponent: Root,
        //                 stores: {sources: Store},
        //                 services: {
        //                     sources: Service,
        //                     addSurveys: AddSurveysService,
        //                     deleteSource: DeleteService
        //                 }
        //             }, nextState, cb)
        //         })
        //     })
        // }, {
        //     path: ':hubId/sources/:sourceId',
        //     getComponent: ensureClient((nextState, cb) => {
        //         require.ensure(['./modules/source-overview/index'], require => {
        //             const {Root, Store, Service, SyncService, DeleteService, OverrideLabelsService} = require('./modules/source-overview/index').default
        //             loadComponent({
        //                 rootComponent: Root,
        //                 stores: {sourceOverview: Store},
        //                 services: {
        //                     sourceOverview: Service,
        //                     syncSource: SyncService,
        //                     deleteSource: DeleteService,
        //                     overrideLabelsService: OverrideLabelsService
        //                 }
        //             }, nextState, cb)
        //         })
        //     })
        // }, {
        //     path: ':hubId/sources/:sourceId/edit',
        //     getComponent: ensureClient((nextState, cb) => {
        //         require.ensure(['./modules/union/index'], require => {
        //             const {UnionEditRoot, Store, UnionCreateService, UnionEditService, UnionAddAnswersService} = require('./modules/union/index').default
        //             loadComponent({
        //                 rootComponent: UnionEditRoot,
        //                 stores: {union: Store},
        //                 services: {
        //                     unionCreate: UnionCreateService,
        //                     union: UnionEditService,
        //                     unionAddAnswers: UnionAddAnswersService
        //                 }
        //             }, nextState, cb)
        //         })
        //     })
        // }, {
        //     path: ':hubId/sources/:sourceId/addsource',
        //     getComponent: ensureClient((nextState, cb) => {
        //         require.ensure(['./modules/union/index'], require => {
        //             const {UnionAddSourceRoot, Store, UnionCreateService, UnionEditService, UnionAddAnswersService, UnionAddSourceService} = require('./modules/union/index').default
        //             loadComponent({
        //                 rootComponent: UnionAddSourceRoot,
        //                 stores: {union: Store},
        //                 services: {
        //                     unionCreate: UnionCreateService,
        //                     union: UnionEditService,
        //                     unionAddAnswers: UnionAddAnswersService,
        //                     unionAddSource: UnionAddSourceService
        //                 }
        //             }, nextState, cb)
        //         })
        //     })
        // }, {
        //     path: ':hubId/sources/union/create',
        //     getComponent: ensureClient((nextState, cb) => {
        //         require.ensure(['./modules/union/index'], require => {
        //             const {
        //                 UnionCreateRoot,
        //                 Store,
        //                 UnionCreateService,
        //                 UnionEditService,
        //                 AddSurveysService,
        //                 SyncService,
        //             } = require('./modules/union/index').default
        //             loadComponent({
        //                 rootComponent: UnionCreateRoot,
        //                 stores: {union: Store},
        //                 services: {
        //                     unionCreate: UnionCreateService,
        //                     union: UnionEditService,
        //                     addSurveys: AddSurveysService,
        //                     syncSource: SyncService,
        //                 }
        //             }, nextState, cb)
        //         })
        //     })
        // }, {
        //     path: ':hubId/contacts/create(/:contactDatabaseType)',
        //     getComponent: ensureClient((nextState, cb) => {
        //         require.ensure(['./modules/contact-database-wizard/index'], require => {
        //             const {CreateRoot, CreateStore, Service} = require('./modules/contact-database-wizard/index').default
        //             loadComponent({
        //                 rootComponent: CreateRoot,
        //                 stores: {contactDatabaseCreate: CreateStore},
        //                 services: {contactDatabaseMappings: Service}
        //             }, nextState, cb)
        //         })
        //     })
        // }, {
        //     path: ':hubId/contacts/:contactDatabaseSourceId/addsource',
        //     getComponent: ensureClient((nextState, cb) => {
        //         require.ensure(['./modules/contact-database-wizard/index'], require => {
        //             const {AddSourceRoot, AddSourceStore, Service} = require('./modules/contact-database-wizard/index').default
        //             loadComponent({
        //                 rootComponent: AddSourceRoot,
        //                 stores: {contactDatabaseAddSource: AddSourceStore},
        //                 services: {contactDatabaseMappings: Service}
        //             }, nextState, cb)
        //         })
        //     })
        // }, {
        //     path: ':hubId/contacts/:contactDatabaseSourceId/fields/:sourceId',
        //     getComponent: ensureClient((nextState, cb) => {
        //         require.ensure(['./modules/contact-database-wizard/index'], require => {
        //             const {EditRoot, EditStore, Service} = require('./modules/contact-database-wizard/index').default
        //             loadComponent({
        //                 rootComponent: EditRoot,
        //                 stores: {contactDatabaseEdit: EditStore},
        //                 services: {contactDatabaseMappings: Service}
        //             }, nextState, cb)
        //         })
        //     })
        // }, {
        //     path: ':hubId/contacts',
        //     getComponent: ensureClient((nextState, cb) => {
        //         require.ensure(['./modules/contact-databases/index'], require => {
        //             const {Root, Store, Service} = require('./modules/contact-databases/index').default
        //             loadComponent({
        //                 rootComponent: Root,
        //                 stores: {contactDatabases: Store},
        //                 services: {contactDatabases: Service}
        //             }, nextState, cb)
        //         })
        //     })
        // }, {
        //     path: ':hubId/contacts/:sourceId',
        //     getComponent: ensureClient((nextState, cb) => {
        //         require.ensure(['./modules/source-overview/index'], require => {
        //             const {Root, Store, Service, SyncService, DeleteService, OverrideLabelsService, ContactDatabaseService} = require('./modules/source-overview/index').default
        //             loadComponent({
        //                 rootComponent: Root,
        //                 stores: {sourceOverview: Store},
        //                 services: {
        //                     sourceOverview: Service,
        //                     syncSource: SyncService,
        //                     deleteSource: DeleteService,
        //                     contactDatabase: ContactDatabaseService,
        //                     overrideLabelsService: OverrideLabelsService
        //                 }
        //             }, nextState, cb)
        //         })
        //     })
        // }, {
        //     path: ':hubId/contacts/:sourceId/contactfrequencyrules',
        //     getComponent: ensureClient((nextState, cb) => {
        //         require.ensure(['./modules/contact-frequency-rules/index'], require => {
        //             const {Root, Store, Service} = require('./modules/contact-frequency-rules/index').default
        //             loadComponent({
        //                 rootComponent: Root,
        //                 stores: {cfr: Store},
        //                 services: {cfr: Service}
        //             }, nextState, cb)
        //         })
        //     })
        // }, {
        //     path: 'error',
        //     getComponent: ensureClient((nextState, cb) => {
        //         require.ensure(['./layout/error'], require => {
        //             const Root = require('./layout/error').default
        //             loadComponent({
        //                 rootComponent: Root,
        //             }, nextState, cb)
        //         })
        //     })
        // }, {
        //     path: '*',
        //     getComponent: ensureClient((nextState, cb) => {
        //         require.ensure(['./layout/not-found'], require => {
        //             const Root = require('./layout/not-found').default
        //             loadComponent({
        //                 rootComponent: Root,
        //             }, nextState, cb)
        //         })
        //     })
        // }
        ]
    }
    /* commented until server side rendering is enabled
     return <Route path="/hub">
     <IndexRoute getComponent={ensureClient((nextState, cb) => {
     require.ensure(['./modules/hubs/index'], require => {
     const {Root, Store, Service} = require('./modules/hubs/index').default
     loadComponent({
     rootComponent: Root,
     stores: {hubs: Store},
     services: {hubs: Service}
     }, nextState, cb)
     })
     })}/>
     <Route path="deleted-hubs" getComponent={ensureClient((nextState, cb) => {
     require.ensure(['./modules/deleted-hubs/index'], require => {
     const {Root, Store, Service} = require('./modules/deleted-hubs/index').default
     loadComponent({
     rootComponent: Root,
     stores: {deletedHubs: Store},
     services: {deletedHubs: Service}
     }, nextState, cb)
     })
     })}/>
     <Route path=":hubId/overview" getComponent={ensureClient((nextState, cb) => {
     require.ensure(['./modules/hub-overview/index'], require => {
     const {Root, Store, Service, AddSurveysService} = require('./modules/hub-overview/index').default

     loadComponent({
     rootComponent: Root,
     stores: {hubOverview: Store},
     services: {
     hubOverview: Service,
     addSurveys: AddSurveysService
     }
     }, nextState, cb)
     })
     })}/>
     <Route path=":hubId/settings" getComponent={ensureClient((nextState, cb) => {
     require.ensure(['./modules/hub-settings/index'], require => {
     const {Root, Store, Service} = require('./modules/hub-settings/index').default

     loadComponent({
     rootComponent: Root,
     stores: {hubSettings: Store},
     services: {hubSettings: Service,}
     }, nextState, cb)
     })
     })}/>
     <Route path=":hubId/permissions" getComponent={ensureClient((nextState, cb) => {
     require.ensure(['./modules/hub-permissions/index'], require => {
     const {Root, Store, Service} = require('./modules/hub-permissions/index').default

     loadComponent({
     rootComponent: Root,
     stores: {hubPermissions: Store},
     services: {hubPermissions: Service,}
     }, nextState, cb)
     })
     })}/>
     <Route path=":hubId/storage" getComponent={ensureClient((nextState, cb) => {
     require.ensure(['./modules/hub-storage/index'], require => {
     const {Root, Store, Service} = require('./modules/hub-storage/index').default

     loadComponent({
     rootComponent: Root,
     stores: {hubStorage: Store},
     services: {hubStorage: Service,}
     }, nextState, cb)
     })
     })}/>
     <Route path=":hubId/removed-sources" getComponent={ensureClient((nextState, cb) => {
     require.ensure(['./modules/deleted-sources/index'], require => {
     const {Root, Store, Service} = require('./modules/deleted-sources/index').default

     loadComponent({
     rootComponent: Root,
     stores: {deletedSources: Store},
     services: {deletedSources: Service,}
     }, nextState, cb)
     })
     })}/>
     <Route path=":hubId/sources" getComponent={ensureClient((nextState, cb) => {
     require.ensure(['./modules/sources/index'], require => {
     const {Root, Store, Service, AddSurveysService, DeleteService} = require('./modules/sources/index').default

     loadComponent({
     rootComponent: Root,
     stores: {sources: Store},
     services: {
     sources: Service,
     addSurveys: AddSurveysService,
     deleteSource: DeleteService
     }
     }, nextState, cb)
     })
     })}/>
     <Route path=":hubId/sources/:sourceId" getComponent={ensureClient((nextState, cb) => {
     require.ensure(['./modules/source-overview/index'], require => {
     const {Root, Store, Service, SyncService, DeleteService, OverrideLabelsService} = require('./modules/source-overview/index').default
     loadComponent({
     rootComponent: Root,
     stores: {sourceOverview: Store},
     services: {
     sourceOverview: Service,
     syncSource: SyncService,
     deleteSource: DeleteService,
     overrideLabelsService: OverrideLabelsService
     }
     }, nextState, cb)
     })
     })}/>
     <Route path=":hubId/sources/:sourceId/edit" getComponent={ensureClient((nextState, cb) => {
     require.ensure(['./modules/union/index'], require => {
     const {UnionEditRoot, Store, UnionCreateService, UnionEditService, UnionAddAnswersService} = require('./modules/union/index').default
     loadComponent({
     rootComponent: UnionEditRoot,
     stores: {union: Store},
     services: {
     unionCreate: UnionCreateService,
     union: UnionEditService,
     unionAddAnswers: UnionAddAnswersService
     }
     }, nextState, cb)
     })
     })}/>
     <Route path=":hubId/sources/:sourceId/addsource" getComponent={ensureClient((nextState, cb) => {
     require.ensure(['./modules/union/index'], require => {
     const {UnionAddSourceRoot, Store, UnionCreateService, UnionEditService, UnionAddAnswersService, UnionAddSourceService} = require('./modules/union/index').default
     loadComponent({
     rootComponent: UnionAddSourceRoot,
     stores: {union: Store},
     services: {
     unionCreate: UnionCreateService,
     union: UnionEditService,
     unionAddAnswers: UnionAddAnswersService,
     unionAddSource: UnionAddSourceService
     }
     }, nextState, cb)
     })
     })}/>
     <Route path=":hubId/sources/union/create" getComponent={ensureClient((nextState, cb) => {
     require.ensure(['./modules/union/index'], require => {
     const {
     UnionCreateRoot,
     Store,
     UnionCreateService,
     UnionEditService,
     AddSurveysService,
     SyncService,
     } = require('./modules/union/index').default
     loadComponent({
     rootComponent: UnionCreateRoot,
     stores: {union: Store},
     services: {
     unionCreate: UnionCreateService,
     union: UnionEditService,
     addSurveys: AddSurveysService,
     syncSource: SyncService,
     }
     }, nextState, cb)
     })
     })}/>
     <Route path=":hubId/contacts/create(/:contactDatabaseType)" getComponent={ensureClient((nextState, cb) => {
     require.ensure(['./modules/contact-database-wizard/index'], require => {
     const {CreateRoot, CreateStore, Service} = require('./modules/contact-database-wizard/index').default
     loadComponent({
     rootComponent: CreateRoot,
     stores: {contactDatabaseCreate: CreateStore},
     services: {contactDatabaseMappings: Service}
     }, nextState, cb)
     })
     })}/>
     <Route path=":hubId/contacts/:contactDatabaseSourceId/addsource" getComponent={ensureClient((nextState, cb) => {
     require.ensure(['./modules/contact-database-wizard/index'], require => {
     const {AddSourceRoot, AddSourceStore, Service} = require('./modules/contact-database-wizard/index').default
     loadComponent({
     rootComponent: AddSourceRoot,
     stores: {contactDatabaseAddSource: AddSourceStore},
     services: {contactDatabaseMappings: Service}
     }, nextState, cb)
     })
     })}/>
     <Route path=":hubId/contacts/:contactDatabaseSourceId/fields/:sourceId"
     getComponent={ensureClient((nextState, cb) => {
     require.ensure(['./modules/contact-database-wizard/index'], require => {
     const {EditRoot, EditStore, Service} = require('./modules/contact-database-wizard/index').default
     loadComponent({
     rootComponent: EditRoot,
     stores: {contactDatabaseEdit: EditStore},
     services: {contactDatabaseMappings: Service}
     }, nextState, cb)
     })
     })}/>
     <Route path=":hubId/contacts" getComponent={ensureClient((nextState, cb) => {
     require.ensure(['./modules/contact-databases/index'], require => {
     const {Root, Store, Service} = require('./modules/contact-databases/index').default
     loadComponent({
     rootComponent: Root,
     stores: {contactDatabases: Store},
     services: {contactDatabases: Service}
     }, nextState, cb)
     })
     })}/>
     <Route path=":hubId/:contactsDbId" getComponent={ensureClient((nextState, cb) => {
     require.ensure(['./modules/source-overview/index'], require => {
     const {Root, Store, Service, SyncService, DeleteService, OverrideLabelsService, ContactDatabaseService} = require('./modules/source-overview/index').default
     loadComponent({
     rootComponent: Root,
     stores: {sourceOverview: Store},
     services: {
     sourceOverview: Service,
     syncSource: SyncService,
     deleteSource: DeleteService,
     contactDatabase: ContactDatabaseService,
     overrideLabelsService: OverrideLabelsService
     }
     }, nextState, cb)
     })
     })}/>
     <Route path=":hubId/contacts/:sourceId" getComponent={ensureClient((nextState, cb) => {
     require.ensure(['./modules/source-overview/index'], require => {
     const {Root, Store, Service, SyncService, DeleteService, OverrideLabelsService, ContactDatabaseService} = require('./modules/source-overview/index').default
     loadComponent({
     rootComponent: Root,
     stores: {sourceOverview: Store},
     services: {
     sourceOverview: Service,
     syncSource: SyncService,
     deleteSource: DeleteService,
     contactDatabase: ContactDatabaseService,
     overrideLabelsService: OverrideLabelsService
     }
     }, nextState, cb)
     })
     })}/>
     <Route path=":hubId/contacts/:sourceId/contactfrequencyrules" getComponent={ensureClient((nextState, cb) => {
     require.ensure(['./modules/contact-frequency-rules/index'], require => {
     const {Root, Store, Service} = require('./modules/contact-frequency-rules/index').default
     loadComponent({
     rootComponent: Root,
     stores: {cfr: Store},
     services: {cfr: Service}
     }, nextState, cb)
     })
     })}/>
     </Route>
     */
}

module.exports = Routes // eslint-disable-line no-undef

export default (initialState = {}, args) => {
    let hash = {}

    const extend = (storeCreators, {replace = false} = {replace: false}) => { // eslint-disable-line no-shadow
        hash = Object.entries(storeCreators).reduce((result, [name, Store]) => {
            if (!replace && !!result[name])
                return result

            return {
                ...result,
                [name]: new Store(initialState[name], args)
            }
        }, hash)
    }

    return {
        extend,
        get: () => hash
    }
}
export default (initialStoreCreators) => {
    let hash = {
        ...initialStoreCreators
    }
    return {
        extend: (nextStoreCreators) => {
            hash = {
                ...nextStoreCreators,
                ...hash,
            }
        },
        get: () => hash
    }
}
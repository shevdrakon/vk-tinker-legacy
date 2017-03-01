export default (services = {}, args) => {
    const result = {}
    Object.entries(services).forEach(([name, value]) => {
        result[name] = value(args)
    })

    return result
}
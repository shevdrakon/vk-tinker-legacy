module.exports.hasSoldOutText = (text) => {
    if (text.toLowerCase() === 'продан')
        return true

    if (text.toLowerCase() === 'продана')
        return true

    return text.toLowerCase() === 'продано'
}
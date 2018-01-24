const hasSoldOutText = (text) => {
    const regexp = /\Bпродан[оа]?\B(?!\s*\?)/gui

    return regexp.test(text)
}

export {
    hasSoldOutText
}
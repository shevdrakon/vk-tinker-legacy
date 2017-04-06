export const addClass = (el, className) => {
    if (el.classList)
        el.classList.add(className)
    else
        el.className += ` ${className}` //eslint-disable-line no-param-reassign
}

export const removeClass = (el, className) => {
    if (el.classList)
        el.classList.remove(className);
    else {
        const expr = `(^|\\b)${className.split(' ').join('|')}(\\b|$)`
        el.className = //eslint-disable-line no-param-reassign
            el.className.replace(new RegExp(expr, 'gi'), ' ');
    }
}

export const stripHtml = (html) => {
    if (!html) return ''

    const div = document.createElement('div')
    div.innerHTML = html
    return div.textContent || div.innerText || ''
}

export const offset = (el) => {
    const rect = el.getBoundingClientRect();

    return {
        top: rect.top + document.body.scrollTop,
        bottom: rect.bottom + document.body.scrollTop,
        left: rect.left + document.body.scrollLeft,
        right:rect.right + document.body.scrollLeft,
    }
}

export const scrollTop = (document) => {
    return (window.pageYOffset !== undefined) ?
        window.pageYOffset :
        (document.documentElement || document.body.parentNode || document.body).scrollTop
}

export const scrollLeft = (document) => {
    return (window.pageXOffset !== undefined) ?
        window.pageXOffset :
        (document.documentElement || document.body.parentNode || document.body).scrollLeft
}

export const documentHeight = (document) => {
    const D = document
    return Math.max(
        D.body.scrollHeight,
        D.documentElement.scrollHeight,
        D.body.offsetHeight,
        D.documentElement.offsetHeight,
        D.body.clientHeight,
        D.documentElement.clientHeight
    )
}
import path from 'path'
// const React = require('react')
// const ReactDOMServer = require('react-dom/server')

export default (app) => {
    app.set('views', path.resolve(__dirname, '../views'))
    app.engine('jsx', require('express-react-views').createEngine());

    // app.engine('jsx', (filePath, options, callback) => {
    //     try {
    //         let Component = require(filePath)
    //         Component = (Component.default || Component)
    //         const html = ReactDOMServer.renderToStaticMarkup(React.createElement(Component, options))
    //         callback(null, `<!doctype html />${html}`)
    //     }
    //     catch (error) {
    //         callback(error, null)
    //     }
    // })
}
import cookieParser from 'cookie-parser'
import Logger from 'morgan'

export default (app, configuration) => {
    app.use(Logger('dev'))
    app.use(cookieParser())

    // Disable reporting of framework information
    app.disable('x-powered-by')
}
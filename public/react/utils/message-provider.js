import {escape} from 'lodash'
import toastr from 'toastr'
import 'toastr/toastr.scss'

const showMessage = function (msg, type, timeout) {
    toastr[type](escape(msg), '', {
        timeOut: timeout,
        positionClass: 'toast-top-full-width'
    })
}

export default {
    success(msg, timeout) {
        showMessage(msg, 'success', timeout || 2000)
    },
    error(msg, timeout) {
        showMessage(msg, 'error', timeout || 4000)
    },
    warning(msg, timeout) {
        showMessage(msg, 'warning', timeout || 4000)
    }
}
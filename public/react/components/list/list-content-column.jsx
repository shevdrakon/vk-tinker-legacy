import {Component} from 'react'
import PropTypes from 'prop-types'

export default class ListColumn extends Component {
    static propTypes = {
        name: PropTypes.string,
        width: PropTypes.string
    };
}
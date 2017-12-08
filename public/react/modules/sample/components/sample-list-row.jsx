import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Row extends Component{
    static propTypes = {
        item: PropTypes.shape({
            name: PropTypes.string,
            country: PropTypes.string,
            city: PropTypes.string,
            salary: PropTypes.string
        })
    }

    render() {
        const {name, country, city, salary} = this.props.item

        return <tr>
            <td>
                {name}
            </td>
            <td>
                {country}
            </td>
            <td>
                {city}
            </td>
            <td className="text-primary">
                {salary}
            </td>
        </tr>
    }
}
import  React, {Component} from 'react'
import PropTypes from 'prop-types'
import {NavDropdown, MenuItem} from 'react-bootstrap'

export default class NavigationDropdown extends Component {
    static propTypes = {
        children: PropTypes.arrayOf(PropTypes.shape(
            {
                value: PropTypes.string.isRequired,
                title: PropTypes.string.isRequired
            }
        )),
        title: PropTypes.string,
        onSelect: PropTypes.func
    }

    selectItem = (eventKey) => {
        this.props.onSelect && this.props.onSelect(eventKey)
    }

    render() {
        const {children, title} = this.props

        return <NavDropdown title={title} bsStyle="default" onSelect={this.selectItem}>
            {
                children.map(child => <MenuItem key={child.value} eventKey={child}>{child.title}</MenuItem>)
            }
        </NavDropdown>
    }
}